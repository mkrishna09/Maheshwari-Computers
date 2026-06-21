// ── LocalBusiness JSON-LD ────────────────────────────────────────────
// Google reads this invisible data to show your business in local
// search results, Google Maps, and the "knowledge panel" on the right
// side of search results. This is more important than any keyword.

export function getLocalBusinessSchema() {
    return {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://maheshwaricomputers.vercel.app",
      name: "Maheshwari Computers",
      description:
        "Computer sales, laptop repair, printer service, networking, CCTV installation, and IT support in Bahadurgarh, Haryana.",
      url: "https://maheshwaricomputers.vercel.app",
      telephone: "+91 94160 55255",   
      email: "maheshwaricomputer@gmail.com",
      foundingDate: "2000",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Y1, Nahara-Nahri Road, Model Town",
        addressLocality: "Bahadurgarh",
        addressRegion: "Haryana",
        postalCode: "124507",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 28.69243407199209,   
        longitude: 76.93180990552251,  
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
          latitude: 28.69243407199209,   
          longitude: 76.93180990552251, 
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