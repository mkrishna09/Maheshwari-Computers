import type { Metadata } from "next";

export const siteConfig = {
  name: "Maheshwari Computers",

  description:
    "Maheshwari Computers provides laptop repair, desktop repair, printer servicing, CCTV installation, networking solutions, computer accessories and IT support in Bahadurgarh, Haryana.",

  url: "https://maheshwari-computers-d09wuxarm.vercel.app",

  ogImage: "/business/store.webp",

  phone: "+91 94160 55255",

  email: "maheshwaricomputer@gmail.com",

  address:
    "1, Nahara Nahari Road, Model Town, Bahadurgarh, Haryana 124507",

  keywords: [
    "Maheshwari Computers",
    "Computer Shop Bahadurgarh",
    "Laptop Repair Bahadurgarh",
    "Desktop Repair Bahadurgarh",
    "Printer Repair Bahadurgarh",
    "Computer Accessories Bahadurgarh",
    "CCTV Installation Bahadurgarh",
    "Networking Solutions Bahadurgarh",
    "Computer Store Haryana",
    "IT Support Bahadurgarh",
  ],
};

export function createMetadata({
  title,
  description,
}: {
  title: string;
  description?: string;
}): Metadata {
  const metaDescription =
    description || siteConfig.description;

  return {
    title,
    description: metaDescription,

    keywords: siteConfig.keywords,

    metadataBase: new URL(siteConfig.url),

    openGraph: {
      title,
      description: metaDescription,
      url: siteConfig.url,
      siteName: siteConfig.name,

      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],

      locale: "en_IN",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description: metaDescription,

      images: [siteConfig.ogImage],
    },

    alternates: {
      canonical: siteConfig.url,
    },
  };
}