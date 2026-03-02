import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

function parseEmails(value) {
  if (!value) return [];
  return value
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(text = "") {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request) {
  try {
    const { name, email, phone, comments } = await request.json();

    if (!name || !email || !phone || !comments) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email." },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpSecure = process.env.SMTP_SECURE === "true";
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpHost || !smtpUser || !smtpPass) {
      return NextResponse.json(
        { error: "Mail service is not configured." },
        { status: 500 }
      );
    }

    const toEmails = parseEmails(process.env.CONTACT_RECEIVER_EMAILS);
    const ccEmails = parseEmails(process.env.CONTACT_CC_EMAILS);

    if (toEmails.length === 0) {
      return NextResponse.json(
        { error: "No contact receiver email is configured." },
        { status: 500 }
      );
    }

    const fromEmail = process.env.CONTACT_FROM_EMAIL || smtpUser;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeComments = escapeHtml(comments);

    await transporter.sendMail({
      from: `Bworth Website <${fromEmail}>`,
      to: toEmails,
      cc: ccEmails.length ? ccEmails : undefined,
      replyTo: email,
      subject: `New Contact Form Submission - ${name}`,
      text: `New contact form submission\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${comments}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Message:</strong><br/>${safeComments.replace(/\n/g, "<br/>")}</p>
      `,
    });

    await transporter.sendMail({
      from: `Bworth <${fromEmail}>`,
      to: email,
      subject: "We received your message",
      text: `Hi ${name},\n\nThank you for contacting Bworth. We have received your message and our team will reach you on your provided details soon.\n\nRegards,\nBworth Team`,
      html: `
        <p>Hi ${safeName},</p>
        <p>Thank you for contacting Bworth.</p>
        <p>We have received your message and our team will reach you on your provided details soon.</p>
        <p>Regards,<br/>Bworth Team</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
