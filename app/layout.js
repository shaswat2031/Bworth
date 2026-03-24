import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import Loading from "./loading";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const baseUrl = "https://www.bworth.co.in";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BWorth",
  alternateName: "Beworth Technologies",
  description: "The leading technology partner for circular luxury and sustainable fashion innovation",
  url: baseUrl,
  logo: `${baseUrl}/logo.png`,
  sameAs: [
    "https://www.instagram.com/bworth.fashion",
    "https://www.facebook.com/people/BWorth/61565081468088/",
    "https://www.linkedin.com/company/bworth-technologies",
    "https://www.youtube.com/@Bworth_Fashion",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-8826668050",
    contactType: "Customer Service",
    email: "info@bworth.co.in",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    streetAddress: "Gurugram, Haryana, India",
  },
};

export const metadata = {
  title: "BWorth - Technology Partner for Circular Luxury & Sustainable Fashion",
  description: "BWorth: The leading technology partner for circular luxury and sustainable fashion innovation. Buy, sell, trade and recycle premium clothing with our innovative buyback program.",
  keywords: [
    "Sustainable Fashion",
    "Circular Fashion",
    "Luxury Fashion",
    "Fashion Buyback",
    "Eco-Friendly Clothing",
    "Fashion Technology",
    "BWorth",
    "Beworth",
    "Circular Economy",
    "Sustainable Luxury",
    "Fashion Resale",
    "Clothing Recycling",
    "B2B Fashion",
    "Fashion Innovation",
  ],
  authors: [{ name: "BWorth Technologies" }],
  creator: "BWorth Technologies",
  publisher: "BWorth",
  formatDetection: {
    email: true,
    telephone: true,
  },
  icons: {
    icon: [
      { url: "/logo.png", sizes: "any", type: "image/png" },
    ],
    apple: { url: "/logo.png", sizes: "180x180" },
  },
  openGraph: {
    title: "BWorth - Sustainable Fashion Ecosystem",
    description: "The leading technology partner for circular luxury and sustainable fashion innovation.",
    url: baseUrl,
    siteName: "BWorth",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "BWorth Sustainable Fashion",
      },
      {
        url: `${baseUrl}/og-image-square.jpg`,
        width: 1024,
        height: 1024,
        alt: "BWorth Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BWorth - Technology Partner for Circular Luxury",
    description: "Join the revolution in sustainable fashion with innovative buyback programs.",
    images: [`${baseUrl}/og-image.jpg`],
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
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_ID", // Add your Google Search Console ID
    yandex: "YOUR_YANDEX_VERIFICATION_ID",
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
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        
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
        className={`${poppins.variable} ${playfair.variable} antialiased font-sans`}
        suppressHydrationWarning
      >
          <ThemeProvider>
            <Loading />
            <Navbar />
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
