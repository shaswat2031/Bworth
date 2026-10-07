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
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      orgName,
      contactPerson,
      phone,
      email,
      city,
      textileType,
      approxQuantity,
      notes,
    } = body;

    // Validate essential fields
    if (!orgName || !contactPerson || !phone || !email || !city) {
      return NextResponse.json(
        { error: "Please fill in all required fields (Company, Contact Person, Phone, Email, and City)." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid official email address." },
        { status: 400 }
      );
    }

    // SMTP Configuration
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpSecure = process.env.SMTP_SECURE === "true";
    const smtpUser = process.env.SMTP_USER || "tech@bworth.co.in";
    const smtpPass = process.env.SMTP_PASS;

    if (smtpHost && smtpUser && smtpPass) {
      const toEmails = parseEmails(process.env.CONTACT_RECEIVER_EMAILS || "tech@bworth.co.in");
      const ccEmails = parseEmails(process.env.CONTACT_CC_EMAILS);
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

      const safeOrgName = escapeHtml(orgName);
      const safeContactPerson = escapeHtml(contactPerson);
      const safePhone = escapeHtml(phone);
      const safeEmail = escapeHtml(email);
      const safeCity = escapeHtml(city);
      const safeTextileType = escapeHtml(textileType || "Not Specified");
      const safeQuantity = escapeHtml(approxQuantity || "Not Specified");
      const safeNotes = escapeHtml(notes || "None provided");

      // 1. Send Internal Alert to BWorth Logistics / Tech Team
      await transporter.sendMail({
        from: `BWorth B2B Portal <${fromEmail}>`,
        to: toEmails,
        cc: ccEmails.length ? ccEmails : undefined,
        replyTo: email,
        subject: `🚚 New B2B Bulk Clothes Pickup Request - ${safeOrgName} (${safeCity})`,
        text: `New B2B Bulk Clothes Pickup Request\n\nCompany: ${orgName}\nContact Person: ${contactPerson}\nPhone: ${phone}\nEmail: ${email}\nCity / Location: ${city}\nTextile Stream: ${textileType}\nApprox Quantity: ${approxQuantity}\nNotes: ${notes}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
            <div style="text-align: center; margin-bottom: 24px;">
              <h2 style="color: #0f172a; margin: 0 0 6px 0; font-size: 22px;">📦 New B2B Bulk Pickup Request</h2>
              <p style="color: #14A3C7; font-weight: bold; margin: 0; font-size: 14px;">BWorth Sustainability & Logistics Network</p>
            </div>

            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
              <tr style="background-color: #f8fafc;">
                <td style="padding: 10px 14px; font-weight: bold; color: #475569; width: 38%; border-bottom: 1px solid #e2e8f0;">Company / Org:</td>
                <td style="padding: 10px 14px; color: #0f172a; font-weight: bold; border-bottom: 1px solid #e2e8f0;">${safeOrgName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 14px; font-weight: bold; color: #475569; border-bottom: 1px solid #e2e8f0;">Contact Person:</td>
                <td style="padding: 10px 14px; color: #0f172a; border-bottom: 1px solid #e2e8f0;">${safeContactPerson}</td>
              </tr>
              <tr style="background-color: #f8fafc;">
                <td style="padding: 10px 14px; font-weight: bold; color: #475569; border-bottom: 1px solid #e2e8f0;">Phone Number:</td>
                <td style="padding: 10px 14px; color: #0f172a; border-bottom: 1px solid #e2e8f0;"><a href="tel:${safePhone}" style="color: #14A3C7; text-decoration: none; font-weight: bold;">${safePhone}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 14px; font-weight: bold; color: #475569; border-bottom: 1px solid #e2e8f0;">Official Email:</td>
                <td style="padding: 10px 14px; color: #0f172a; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${safeEmail}" style="color: #14A3C7; text-decoration: none;">${safeEmail}</a></td>
              </tr>
              <tr style="background-color: #f8fafc;">
                <td style="padding: 10px 14px; font-weight: bold; color: #475569; border-bottom: 1px solid #e2e8f0;">Pickup Location / City:</td>
                <td style="padding: 10px 14px; color: #0f172a; font-weight: bold; border-bottom: 1px solid #e2e8f0;">${safeCity}</td>
              </tr>
              <tr>
                <td style="padding: 10px 14px; font-weight: bold; color: #475569; border-bottom: 1px solid #e2e8f0;">Textile / Garment Type:</td>
                <td style="padding: 10px 14px; color: #0f172a; border-bottom: 1px solid #e2e8f0;">${safeTextileType}</td>
              </tr>
              <tr style="background-color: #f8fafc;">
                <td style="padding: 10px 14px; font-weight: bold; color: #475569; border-bottom: 1px solid #e2e8f0;">Estimated Quantity:</td>
                <td style="padding: 10px 14px; color: #0284c7; font-weight: bold; border-bottom: 1px solid #e2e8f0;">${safeQuantity}</td>
              </tr>
              <tr>
                <td style="padding: 10px 14px; font-weight: bold; color: #475569; vertical-align: top;">Additional Notes:</td>
                <td style="padding: 10px 14px; color: #334155;">${safeNotes.replace(/\n/g, "<br/>")}</td>
              </tr>
            </table>

            <div style="text-align: center; padding: 12px; background-color: #f0fdfa; border: 1px solid #ccfbf1; border-radius: 8px; color: #0f766e; font-size: 13px;">
              ⚡ Please coordinate with the logistics operations team within 24 hours to schedule consolidation & vehicle dispatch.
            </div>
          </div>
        `,
      });

      // 2. Send Confirmation Email to the Client
      await transporter.sendMail({
        from: `BWorth B2B Logistics <${fromEmail}>`,
        to: email,
        subject: `We Received Your Bulk Clothes Pickup Request - ${safeOrgName}`,
        text: `Hi ${contactPerson},\n\nThank you for reaching out to BWorth. We have received your B2B bulk clothing pickup request for ${orgName} in ${city}.\n\nOur B2B logistics team will review your requirements (${approxQuantity} of ${textileType}) and connect with you within 24 hours to coordinate vehicle dispatch and consolidation.\n\nBest regards,\nBWorth B2B Operations Team\nhttps://bworth.co.in`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 580px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
            <div style="margin-bottom: 20px;">
              <h2 style="color: #0f172a; margin: 0 0 6px 0; font-size: 20px;">Pickup Request Received ✅</h2>
              <p style="color: #64748b; font-size: 14px; margin: 0;">Hi ${safeContactPerson},</p>
            </div>

            <p style="color: #334155; font-size: 14px; line-height: 1.6;">
              Thank you for partnering with <strong>BWorth</strong> for your sustainable textile management. We have successfully registered your bulk clothes pickup request for <strong>${safeOrgName}</strong> (${safeCity}).
            </p>

            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px; margin: 18px 0; font-size: 13px; color: #334155;">
              <p style="margin: 0 0 6px 0;"><strong>Textile Stream:</strong> ${safeTextileType}</p>
              <p style="margin: 0 0 6px 0;"><strong>Approx Quantity:</strong> ${safeQuantity}</p>
              <p style="margin: 0;"><strong>Location:</strong> ${safeCity}</p>
            </div>

            <p style="color: #334155; font-size: 14px; line-height: 1.6;">
              Our dedicated B2B logistics team is reviewing your details and will connect with you via phone / email within <strong>24 hours</strong> with a pickup schedule and logistics plan.
            </p>

            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />

            <p style="color: #64748b; font-size: 13px; margin: 0; line-height: 1.5;">
              Warm regards,<br />
              <strong>BWorth Operations & Circular Recovery Team</strong><br />
              <a href="mailto:tech@bworth.co.in" style="color: #14A3C7; text-decoration: none;">tech@bworth.co.in</a>
            </p>
          </div>
        `,
      });
    }

    return NextResponse.json({
      success: true,
      message: "Bulk pickup request received. Confirmation emails have been sent.",
    });
  } catch (error) {
    console.error("B2B Pickup Route Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to process pickup request. Please try again." },
      { status: 500 }
    );
  }
}
