import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.BworthGo&hl=en";
        
        let stats = {
            appId: "com.BworthGo",
            appName: "BWorth: Recycle & Earn",
            playStoreUrl: PLAY_STORE_URL,
            appDownloads: "25,000+",
            clothesRecycled: "25,000+ kg",
            rating: "4.8",
            totalReviews: "4.8/5",
            trustFactor: "4.8/5",
            co2Saved: "500+ Tons",
            activeUsers: "10,000+",
            lastUpdated: new Date().toISOString()
        };

        try {
            const res = await fetch(PLAY_STORE_URL, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
                },
                next: { revalidate: 3600 }
            });
            
            if (res.ok) {
                const html = await res.text();
                // Extract rating if present in meta or microdata
                const ratingMatch = html.match(/aria-label="Rated ([\d\.]+) stars out of five"/i) || html.match(/([0-4]\.[0-9]|5\.0)\s*stars/i);
                if (ratingMatch && ratingMatch[1]) {
                    stats.rating = ratingMatch[1];
                    stats.trustFactor = `${ratingMatch[1]}/5`;
                }

                // Extract download count if present in Play Store HTML
                const downloadMatch = html.match(/([\d,\+\sMKB]+ downloads)/i);
                if (downloadMatch && downloadMatch[1]) {
                    stats.appDownloads = downloadMatch[1];
                }
            }
        } catch (fetchErr) {
            // Fallback to cached default stats if external fetch fails
        }

        return NextResponse.json(stats, {
            headers: {
                'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
            }
        });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch app stats' }, { status: 500 });
    }
}

