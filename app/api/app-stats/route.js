import { NextResponse } from 'next/server';

// In a real production environment, you would use a scraper or a Play Store API here.
// For now, this serves as the "source of truth" for the frontend to fetch realtime updates.
export async function GET() {
    try {
        const stats = {
            downloads: "50+",
            rating: "4.8",
            totalReviews: "18",
            lastUpdated: new Date().toISOString()
        };

        return NextResponse.json(stats);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
    }
}
