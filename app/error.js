'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-4">
            <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
            <p className="mb-8 text-gray-400">We apologize for the inconvenience. Our team has been notified.</p>
            <div className="flex gap-4">
                <button
                    onClick={() => reset()}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-colors"
                >
                    Try again
                </button>
                <Link
                    href="/"
                    className="bg-white/10 hover:bg-white/20 text-white font-bold py-2 px-6 rounded-full transition-colors"
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
}
