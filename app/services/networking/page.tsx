import type { Metadata } from "next";
import Link from "next/link";
import {
  Network,
  Router,
  Wifi,
  Cable,
  Shield,
  CheckCircle,
  Building2,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Networking Solutions in Bahadurgarh",
  description:
    "Professional networking solutions including Wi-Fi setup, LAN cabling, router configuration, office networking and internet troubleshooting in Bahadurgarh.",
};

const services = [
  "Wi-Fi Installation",
  "Router Configuration",
  "LAN Network Setup",
  "Office Networking",
  "School Computer Labs",
  "Internet Troubleshooting",
  "Network Security Setup",
  "Access Point Installation",
  "Network Maintenance",
];

export default function NetworkingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-navy-900 py-24 text-white">
        <div className="mx-auto max-w-container px-6 text-center">

          <Network
            size={60}
            className="mx-auto mb-6 text-teal-400"
          />

          <h1 className="text-5xl font-bold">
            Networking Solutions
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-300">
            Reliable networking solutions for homes,
            offices, schools and businesses in Bahadurgarh.
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
                <CheckCircle className="mb-4 text-teal-600" />

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
            Common Networking Problems We Solve
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-3xl bg-white p-8">
              <Wifi className="mb-4 text-teal-600" />
              <h3 className="text-xl font-semibold">
                Weak Wi-Fi Coverage
              </h3>
            </div>

            <div className="rounded-3xl bg-white p-8">
              <Router className="mb-4 text-teal-600" />
              <h3 className="text-xl font-semibold">
                Router Configuration Issues
              </h3>
            </div>

            <div className="rounded-3xl bg-white p-8">
              <Cable className="mb-4 text-teal-600" />
              <h3 className="text-xl font-semibold">
                LAN Connectivity Problems
              </h3>
            </div>

            <div className="rounded-3xl bg-white p-8">
              <Shield className="mb-4 text-teal-600" />
              <h3 className="text-xl font-semibold">
                Network Security Concerns
              </h3>
            </div>

            <div className="rounded-3xl bg-white p-8">
              <Building2 className="mb-4 text-teal-600" />
              <h3 className="text-xl font-semibold">
                Office Network Expansion
              </h3>
            </div>

            <div className="rounded-3xl bg-white p-8">
              <Wrench className="mb-4 text-teal-600" />
              <h3 className="text-xl font-semibold">
                Internet Troubleshooting
              </h3>
            </div>

          </div>

        </div>
      </section>

      {/* Solutions */}
      <section className="py-24">
        <div className="mx-auto max-w-container px-6">

          <div className="rounded-[32px] bg-warm-100 p-12">

            <h2 className="text-4xl font-bold">
              Networking For Every Environment
            </h2>

            <p className="mt-6 text-lg leading-8 text-brand-muted">
              Whether you need networking for your home,
              office, school or commercial establishment,
              we provide complete setup and maintenance services.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              <div className="rounded-2xl bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Homes
                </h3>
              </div>

              <div className="rounded-2xl bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Offices
                </h3>
              </div>

              <div className="rounded-2xl bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Schools
                </h3>
              </div>

              <div className="rounded-2xl bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Shops & Businesses
                </h3>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 py-24 text-white">
        <div className="mx-auto max-w-container px-6 text-center">

          <h2 className="text-5xl font-bold">
            Need Networking Solutions?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-300">
            Contact Maheshwari Computers for professional
            networking installation, maintenance and support.
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
      </section>

      {/* Back */}
      <section className="py-16 text-center">
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