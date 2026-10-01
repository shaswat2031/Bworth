import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Newsletter from '@/models/Newsletter';

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    if (!process.env.MONGODB_URI) {
      // Graceful fallback if database is not yet configured by the developer
      return NextResponse.json({
        success: true,
        message: 'Subscribed successfully (mock mode: configure MONGODB_URI to persist).',
      });
    }

    await connectToDatabase();

    const existing = await Newsletter.findOne({ email: email.toLowerCase() });

    if (existing) {
      if (existing.status === 'unsubscribed') {
        existing.status = 'subscribed';
        await existing.save();
      }
      return NextResponse.json({
        success: true,
        message: 'You are already subscribed to the BWorth Dispatch.',
      });
    }

    await Newsletter.create({
      email: email.toLowerCase(),
      status: 'subscribed',
      source: 'blog-dispatch',
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you for subscribing to BWorth Dispatch!',
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || 'Failed to process newsletter subscription.' },
      { status: 500 }
    );
  }
}
