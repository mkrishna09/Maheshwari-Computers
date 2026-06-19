import type { Metadata } from "next";
import Navbar from "@/components/global/Navbar";
import WhatsAppFAB from "@/components/global/WhatsappFAB";
import Footer from "@/components/global/Footer";
import { Plus_Jakarta_Sans } from "next/font/google";
import "../styles/globals.css";




const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",   // CSS variable we reference in globals.css
  display: "swap",              // shows text immediately in fallback font
});

// ── Site-wide SEO metadata ──────────────────────────────────────────
// This is the default — individual pages will override title/description.
// Open Graph makes the site look good when shared on WhatsApp / Facebook.
export const metadata: Metadata = {
  metadataBase: new URL("https://maheshwaricomputers.com"),
  title: {
    default: "Maheshwari Computers — Bahadurgarh's Trusted IT Partner",
    template: "%s | Maheshwari Computers",
  },
  description:
    "Computer sales, laptop repair, printer service, networking, CCTV installation, and IT support in Bahadurgarh, Haryana. Trusted since 2012.",
  keywords: [
    "computer shop Bahadurgarh",
    "laptop repair Bahadurgarh",
    "computer repair Bahadurgarh",
    "printer repair Bahadurgarh",
    "IT solutions Bahadurgarh",
    "CCTV installation Bahadurgarh",
    "AMC Bahadurgarh",
    "Maheshwari Computers",
  ],
  authors: [{ name: "Maheshwari Computers" }],
  creator: "Maheshwari Computers",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://maheshwaricomputers.com",
    siteName: "Maheshwari Computers",
    title: "Maheshwari Computers — Bahadurgarh's Trusted IT Partner",
    description:
      "Computer sales, laptop repair, printer service, networking, CCTV, and IT support in Bahadurgarh, Haryana.",
    images: [
      {
        url: "/og-image.jpg",   // you'll add this image to /public later
        width: 1200,
        height: 630,
        alt: "Maheshwari Computers — Bahadurgarh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maheshwari Computers — Bahadurgarh",
    description: "Trusted IT solutions in Bahadurgarh since 2012.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

// ── Root layout component ───────────────────────────────────────────
// {children} is a special prop — Next.js fills it with whatever page
// the visitor is on (home, services, products, etc.)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="bg-warm-white text-brand-text antialiased">
        
        <Navbar />
        
        <main>{children}</main>
        
        <Footer />
          
        <WhatsAppFAB />
        
      </body>
    </html>
  );
}