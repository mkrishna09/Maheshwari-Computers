import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore our store, repair services, inventory and work completed at Maheshwari Computers, Bahadurgarh.",
};

const storeImages = [
  "/gallery/store-front.jpeg",
  "/gallery/store-inside.jpeg",
  "/gallery/store.webp"
];

const repairImages = [
  "/gallery/printer-service-1.jpeg",
  "/gallery/printer-service-2.jpeg",
];

const stockImages = [
  "/gallery/stock-1.jpeg",
  "/gallery/stock-2.jpeg",
  "/gallery/stock-3.jpeg",
];

export default function GalleryPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-navy-900 py-24 text-white">
        <div className="mx-auto max-w-container px-6 text-center">
          <h1 className="text-6xl font-bold">
            Gallery
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-300">
            Take a look inside Maheshwari Computers and explore
            our services, products and workspace.
          </p>
        </div>
      </section>

      {/* Store */}
      <section className="py-24">
        <div className="mx-auto max-w-container px-6">

          <h2 className="mb-12 text-4xl font-bold">
            Our Store
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {storeImages.map((image) => (
              <div
                key={image}
                className="overflow-hidden rounded-3xl shadow-lg"
              >
                <Image
                  src={image}
                  alt="Maheshwari Computers Store"
                  width={1200}
                  height={800}
                  className="h-[450px] w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Repairs */}
      <section className="bg-warm-100 py-24">
        <div className="mx-auto max-w-container px-6">

          <h2 className="mb-12 text-4xl font-bold">
            Repair Services
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {repairImages.map((image) => (
              <div
                key={image}
                className="overflow-hidden rounded-3xl shadow-lg"
              >
                <Image
                  src={image}
                  alt="Repair Services"
                  width={1200}
                  height={800}
                  className="h-[450px] w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Inventory */}
      <section className="py-24">
        <div className="mx-auto max-w-container px-6">

          <h2 className="mb-12 text-4xl font-bold">
            Products & Inventory
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {stockImages.map((image) => (
              <div
                key={image}
                className="overflow-hidden rounded-3xl shadow-lg"
              >
                <Image
                  src={image}
                  alt="Products"
                  width={1200}
                  height={800}
                  className="h-[350px] w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-container px-6">

          <div className="rounded-[32px] bg-navy-900 px-12 py-20 text-center text-white">

            <h2 className="text-5xl font-bold">
              Visit Our Store Today
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-300">
              Whether you need repairs, upgrades, networking
              solutions or new products, we're here to help.
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