import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Laptops, desktops, printers, CCTV systems, networking products and computer accessories available at Maheshwari Computers, Bahadurgarh.",
};

const categories = [
  {
    title: "Laptops",
    image: "/products/laptop.webp",
    brands: ["HP", "Dell", "Lenovo", "ASUS", "Acer"],
  },
  {
    title: "Desktops",
    image: "/products/desktop.jpg",
    brands: ["HP", "Dell", "Lenovo"],
  },
  {
    title: "Printers",
    image: "/products/printer.jpg",
    brands: ["HP", "Canon", "Epson", "Brother"],
  },
  {
    title: "CCTV Systems",
    image: "/products/cctv.jpg",
    brands: ["CP Plus", "Hikvision", "Dahua"],
  },
  {
    title: "Networking Products",
    image: "/products/networking.jpeg",
    brands: ["D-Link", "Routers", "Switches", "LAN Products"],
  },
  {
    title: "Computer Accessories",
    image: "/products/accessories-1.jpeg",
    brands: ["Lapcare", "Fingers", "Keyboards", "Mouse"],
  },
  {
    title: "Printer Cartridges & Toners",
    image: "/products/printer-cartridges.jpeg",
    brands: ["HP", "Canon", "Brother", "Epson"],
  },
];

export default function ProductsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-navy-900 py-24 text-white">
        <div className="mx-auto max-w-container px-6 text-center">

          <h1 className="text-6xl font-bold">
            Products We Offer
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-300">
            Genuine products from leading brands for homes,
            offices, schools and businesses.
          </p>

        </div>
      </section>

      {/* Categories */}
      <section className="py-24">
        <div className="mx-auto max-w-container px-6">

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

            {categories.map((category) => (
              <div
                key={category.title}
                className="
                  overflow-hidden
                  rounded-3xl
                  border
                  border-warm-200
                  bg-white
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >
                <div className="relative h-64">

                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />

                </div>

                <div className="p-8">

                  <h2 className="text-2xl font-bold">
                    {category.title}
                  </h2>

                  <div className="mt-4 flex flex-wrap gap-2">

                    {category.brands.map((brand) => (
                      <span
                        key={brand}
                        className="
                          rounded-full
                          bg-teal-50
                          px-3
                          py-1
                          text-sm
                          font-medium
                          text-teal-700
                        "
                      >
                        {brand}
                      </span>
                    ))}

                  </div>

                  <a
                    href="https://wa.me/919416055255"
                    className="
                      mt-6
                      inline-flex
                      rounded-xl
                      bg-navy-900
                      px-5
                      py-3
                      font-semibold
                      text-white
                      transition
                      hover:bg-navy-800
                    "
                  >
                    Enquire Now
                  </a>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Brand Logos */}
      <section className="bg-warm-100 py-24">
        <div className="mx-auto max-w-container px-6">

          <h2 className="text-center text-4xl font-bold">
            Trusted Brands
          </h2>

          <p className="mt-4 text-center text-brand-muted">
            We deal in genuine products from leading manufacturers.
          </p>

          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">

            {[
              "acer",
              "asus",
              "brother",
              "canon",
              "dell",
              "dlink",
              "epson",
              "fingers",
              "hp",
              "lapcare",
              "lenovo",
            ].map((brand) => (
              <div
                key={brand}
                className="
                  flex
                  h-32
                  items-center
                  justify-center
                  rounded-3xl
                  bg-white
                  p-6
                  shadow-sm
                "
              >
                <Image
                  src={`/brands/${brand}.svg`}
                  alt={brand}
                  width={140}
                  height={70}
                  className="object-contain"
                />
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-container px-6">

          <div className="rounded-[32px] bg-navy-900 px-12 py-20 text-center text-white">

            <h2 className="text-5xl font-bold">
              Looking For A Specific Product?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-300">
              Contact Maheshwari Computers and we'll help you
              find the right product according to your budget
              and requirements.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">

              <a
                href="tel:+919416055255"
                className="rounded-xl bg-white px-8 py-4 font-semibold text-navy-900"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/919416055255"
                className="rounded-xl bg-green-600 px-8 py-4 font-semibold text-white"
              >
                WhatsApp Us
              </a>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}