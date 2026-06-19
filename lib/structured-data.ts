// ── LocalBusiness JSON-LD ────────────────────────────────────────────
// Google reads this invisible data to show your business in local
// search results, Google Maps, and the "knowledge panel" on the right
// side of search results. This is more important than any keyword.

export function getLocalBusinessSchema() {
    return {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://maheshwaricomputers.com/#business",
      name: "Maheshwari Computers",
      description:
        "Computer sales, laptop repair, printer service, networking, CCTV installation, and IT support in Bahadurgarh, Haryana.",
      url: "https://maheshwaricomputers.com",
      telephone: "+91-98123-45678",   // replace with real number
      email: "info@maheshwaricomputers.com",
      foundingDate: "2012",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Your Shop Address, Market Name", // replace
        addressLocality: "Bahadurgarh",
        addressRegion: "Haryana",
        postalCode: "124507",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 28.6913,   // replace with exact GPS coordinates
        longitude: 76.9265,  // from Google Maps
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
          opens: "10:00",
          closes: "20:00",
        },
      ],
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, UPI, Card",
      areaServed: {
        "@type": "City",
        name: "Bahadurgarh",
      },
      serviceArea: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 28.6913,
          longitude: 76.9265,
        },
        geoRadius: "15000", // 15km radius
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "IT Services and Products",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Laptop Repair" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Desktop Repair" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Printer Repair" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "CCTV Installation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Annual Maintenance Contract" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Data Recovery" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Networking Solutions" } },
        ],
      },
      sameAs: [
        "https://www.google.com/maps?cid=YOUR_GOOGLE_CID", // replace after GBP setup
      ],
    };
  }