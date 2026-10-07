import { Poppins, Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const baseUrl = "https://www.bworth.co.in";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "BWorth",
      alternateName: ["BWorth Circular Fashion", "Beworth Technologies", "BWorth Go"],
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/bworth-logo.svg`,
        width: 180,
        height: 60,
        caption: "BWorth Logo",
      },
      image: `${baseUrl}/bworth_hero_official.jpg`,
      description: "BWorth is India's premier circular fashion and textile recovery platform. We empower households, enterprises, and fashion brands to give unused clothing a responsible next life through certified doorstep collection, re-wear, upcycling, and zero-landfill recycling.",
      slogan: "Giving Clothes a Better Next Journey",
      knowsAbout: [
        "Circular Fashion Economy",
        "Textile Recycling",
        "Doorstep Clothing Pickup",
        "Fashion Surplus Monetization",
        "Upcycling and Responsible Reuse",
        "Corporate ESG Textile Recovery",
      ],
      sameAs: [
        "https://www.instagram.com/bworth.fashion",
        "https://www.facebook.com/people/BWorth/61565081468088/",
        "https://www.linkedin.com/company/bworth-technologies",
        "https://www.youtube.com/@Bworth_Fashion",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-8826668050",
          contactType: "Customer Support",
          email: "tech@bworth.co.in",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
      ],
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
        addressLocality: "Gurugram",
        addressRegion: "Haryana",
        streetAddress: "Gurugram, Haryana, India",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: baseUrl,
      name: "BWorth Circular Fashion",
      description: "Doorstep clothes pickup, circular recovery, and fashion brand buyback platform.",
      publisher: {
        "@id": `${baseUrl}/#organization`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "Service",
      "@id": `${baseUrl}/#service-pickup`,
      name: "BWorth Doorstep Clothes Pickup & Circular Recovery",
      serviceType: "Textile Recycling & Clothing Recirculation",
      provider: {
        "@id": `${baseUrl}/#organization`,
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      description: "Free doorstep collection kit for unused clothes. Earn instant BWC coins, declutter wardrobes, and divert textiles from landfills into verified re-wear, upcycling, and scientific recycling.",
    },
  ],
};

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "BWorth | Circular Fashion, Doorstep Clothes Pickup & Textile Recovery",
    template: "%s | BWorth",
  },
  description: "BWorth is India's leading circular fashion platform. Schedule free doorstep clothing pickups, earn instant BWC rewards, monetize brand deadstock, and prevent landfill waste.",
  keywords: [
    "Circular Fashion India",
    "Doorstep Clothes Pickup",
    "Clothing Recycling India",
    "Sell Old Clothes Online",
    "Wardrobe Declutter Pickup",
    "B2B Bulk Textile Recovery",
    "Sustainable Fashion Labels",
    "Fashion Deadstock Monetization",
    "Clothes Upcycling India",
    "BWorth",
    "BWorth Go",
    "Zero Landfill Textile",
    "Corporate ESG Clothes Donation",
  ],
  authors: [{ name: "BWorth Technologies", url: baseUrl }],
  creator: "BWorth Technologies",
  publisher: "BWorth",
  formatDetection: {
    email: true,
    telephone: true,
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", sizes: "any", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: { url: "/apple-icon.png", sizes: "180x180" },
  },
  openGraph: {
    title: "BWorth | Circular Fashion & Sustainable Clothing Recirculation",
    description: "Giving clothes a better next journey. Book free doorstep clothing pickups, earn BWC wallet coins, and enable zero-landfill fashion.",
    url: baseUrl,
    siteName: "BWorth",
    images: [
      {
        url: `${baseUrl}/bworth_hero_official.jpg`,
        width: 1200,
        height: 630,
        alt: "BWorth Circular Fashion Platform",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BWorth | Circular Fashion & Doorstep Textile Recovery",
    description: "Turn unused wardrobe clutter into valuable BWC rewards with certified circular recovery.",
    images: [`${baseUrl}/bworth_hero_official.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="alternate icon" type="image/png" href="/icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        
        {/* Theme Initialization Script to prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('appTheme');
                  const theme = savedTheme || 'white';
                  document.documentElement.classList.remove('theme-blue', 'theme-white');
                  document.documentElement.classList.add('theme-' + theme);
                } catch (e) {}
              })();
            `,
          }}
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        {/* Canonical URL */}
        <link rel="canonical" href={baseUrl} />
      </head>
      <body
        className={`${poppins.variable} ${playfair.variable} ${outfit.variable} antialiased font-sans`}
        suppressHydrationWarning
      >
          <ThemeProvider>
            <Navbar />
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
