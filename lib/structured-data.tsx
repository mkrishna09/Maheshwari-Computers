export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ComputerStore",

    name: "Maheshwari Computers",

    description:
      "Maheshwari Computers provides laptop repair, desktop repair, printer servicing, CCTV installation, networking solutions, computer accessories and IT support in Bahadurgarh, Haryana.",

    url: "https://maheshwari-computers.vercel.app",

    telephone: "+91-9416055255",

    email: "maheshwaricomputer@gmail.com",

    image: [
      "https://maheshwari-computers.vercel.app/business/store.webp",
    ],

    address: {
      "@type": "PostalAddress",
      streetAddress: "1, Nahara Nahari Road, Model Town",
      addressLocality: "Bahadurgarh",
      addressRegion: "Haryana",
      postalCode: "124507",
      addressCountry: "IN",
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: "28.6920",
      longitude: "76.9350",
    },

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "20:00",
      },
    ],

    areaServed: [
      {
        "@type": "City",
        name: "Bahadurgarh",
      },
      {
        "@type": "City",
        name: "Rohtak",
      },
      {
        "@type": "City",
        name: "Delhi",
      },
    ],

    priceRange: "₹₹",

    sameAs: [
      "https://share.google/8pHRCHDkMDPl1F4Z2",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}