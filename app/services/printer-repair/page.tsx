import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Printer,
  Wrench,
  CheckCircle,
  Scan,
  Wifi,
  Droplets,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Printer Repair & Servicing in Delhi NCR",
  description:
    "Professional printer repair, servicing, cartridge replacement, network printer setup and maintenance services in Delhi NCR.",
};

const services = [
  "Printer Installation",
  "Printer Repair",
  "Printer Servicing",
  "Inkjet Printer Repair",
  "Laser Printer Repair",
  "Cartridge Refilling",
  "Toner Replacement",
  "Printer Cleaning",
  "Driver Installation",
  "Network Printer Setup",
];

const brands = [
  {
    name: "HP",
    logo: "/brands/hp.svg",
  },
  {
    name: "Canon",
    logo: "/brands/canon.svg",
  },
  {
    name: "Epson",
    logo: "/brands/epson.svg",
  },
  {
    name: "Brother",
    logo: "/brands/brother.svg",
  },
];

export default function PrinterRepairPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-r from-navy-900 to-navy-950 py-24 text-white">
        <div className="mx-auto max-w-container px-6 text-center">

          <Printer
            size={60}
            className="mx-auto mb-6 text-teal-400"
          />

          <h1 className="text-5xl font-bold">
            Printer Repair & Servicing
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-300">
            Professional printer repair, servicing,
            cartridge replacement, network printer setup and
            maintenance for homes, offices and schools.
          </p>

        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="mx-auto max-w-container px-6">

          <h2 className="text-center text-4xl font-bold">
            Services We Provide
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => (
              <div
                key={service}
                className="
                  rounded-2xl
                  border
                  border-warm-200
                  bg-white
                  p-6
                  shadow-sm
                  transition
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                <CheckCircle
                  className="mb-4 text-teal-600"
                />

                <h3 className="font-semibold">
                  {service}
                </h3>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Common Problems */}
      <section className="bg-warm-100 py-24">
        <div className="mx-auto max-w-container px-6">

          <h2 className="text-center text-4xl font-bold">
            Common Printer Problems We Fix
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-3xl bg-white p-8">
              <Printer className="mb-4 text-teal-600" />
              <h3 className="text-xl font-semibold">
                Printer Not Printing
              </h3>
            </div>

            <div className="rounded-3xl bg-white p-8">
              <Wrench className="mb-4 text-teal-600" />
              <h3 className="text-xl font-semibold">
                Paper Jam Issues
              </h3>
            </div>

            <div className="rounded-3xl bg-white p-8">
              <Droplets className="mb-4 text-teal-600" />
              <h3 className="text-xl font-semibold">
                Print Quality Problems
              </h3>
            </div>

            <div className="rounded-3xl bg-white p-8">
              <Scan className="mb-4 text-teal-600" />
              <h3 className="text-xl font-semibold">
                Scanner Issues
              </h3>
            </div>

            <div className="rounded-3xl bg-white p-8">
              <Wifi className="mb-4 text-teal-600" />
              <h3 className="text-xl font-semibold">
                Connectivity Problems
              </h3>
            </div>

            <div className="rounded-3xl bg-white p-8">
              <CheckCircle className="mb-4 text-teal-600" />
              <h3 className="text-xl font-semibold">
                Cartridge Errors
              </h3>
            </div>

          </div>

        </div>
      </section>

      {/* Maintenance */}
      <section className="py-24">
        <div className="mx-auto max-w-container px-6">

          <div className="rounded-[32px] bg-warm-100 p-12">

            <h2 className="text-4xl font-bold">
              Professional Printer Maintenance
            </h2>

            <p className="mt-6 text-lg leading-8 text-brand-muted">
              Regular servicing helps extend the life of your printer,
              improve print quality and reduce unexpected breakdowns.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              <div className="rounded-2xl bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Internal Cleaning
                </h3>
              </div>

              <div className="rounded-2xl bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Roller Cleaning
                </h3>
              </div>

              <div className="rounded-2xl bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Print Head Cleaning
                </h3>
              </div>

              <div className="rounded-2xl bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Cartridge Inspection
                </h3>
              </div>

              <div className="rounded-2xl bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Toner Replacement
                </h3>
              </div>

              <div className="rounded-2xl bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Driver Updates
                </h3>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Brands */}
      <section className="py-24 bg-warm-100">
        <div className="mx-auto max-w-container px-6">

          <h2 className="text-center text-4xl font-bold">
            Brands We Service
          </h2>

          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">

            {brands.map((brand) => (
              <div
                key={brand.name}
                className="
                  flex
                  h-40
                  items-center
                  justify-center
                  rounded-3xl
                  bg-white
                  p-6
                  shadow-sm
                "
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
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

          <div className="rounded-[32px] bg-gradient-to-r from-navy-900 to-navy-950 px-12 py-20 text-center text-white">

            <h2 className="text-5xl font-bold">
              Need Printer Repair?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-300">
              Contact Maheshwari Computers today for expert printer
              repair, servicing and maintenance solutions.
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

      {/* Back */}
      <section className="pb-24 text-center">
        <Link
          href="/services"
          className="font-semibold text-teal-600"
        >
          ← Back To All Services
        </Link>
      </section>
    </main>
  );
}