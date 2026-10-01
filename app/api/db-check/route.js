import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { connectToDatabase } from '@/lib/mongodb';

export const dynamic = 'force-dynamic';

export async function GET() {
  const startTime = Date.now();

  try {
    if (!process.env.MONGODB_URI) {
      return NextResponse.json(
        {
          status: 'unconfigured',
          message: 'MONGODB_URI is not defined in environment variables (.env.local).',
          readyState: 0,
        },
        { status: 200 }
      );
    }

    await connectToDatabase();

    const stateMap = {
      0: 'disconnected',
      1: 'connected',
      2: 'connecting',
      3: 'disconnecting',
    };

    const readyState = mongoose.connection.readyState;
    const latency = Date.now() - startTime;

    return NextResponse.json({
      status: readyState === 1 ? 'healthy' : 'degraded',
      connection: stateMap[readyState] || 'unknown',
      database: mongoose.connection.name || 'default',
      host: mongoose.connection.host || 'unknown',
      latencyMs: latency,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: 'error',
        message: error.message || 'Failed to connect to MongoDB',
        readyState: mongoose.connection.readyState,
        latencyMs: Date.now() - startTime,
      },
      { status: 500 }
    );
  }
}
