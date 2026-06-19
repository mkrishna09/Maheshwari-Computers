import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  Camera,
  Monitor,
  Wifi,
  Building2,
  Home,
  CheckCircle,
  Eye,
} from "lucide-react";

export const metadata: Metadata = {
  title: "CCTV Installation in Delhi NCR",
  description:
    "Professional CCTV camera installation, DVR setup, remote monitoring and security solutions for homes, offices and businesses in Delhi NCR.",
};

const services = [
  "CCTV Camera Installation",
  "DVR & NVR Setup",
  "Remote Mobile Monitoring",
  "Wi-Fi Camera Installation",
  "Office Security Solutions",
  "Home Security Systems",
  "Camera Maintenance",
  "CCTV Troubleshooting",
  "System Upgrades",
];

export default function CCTVInstallationPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-navy-900 py-24 text-white">
        <div className="mx-auto max-w-container px-6 text-center">

          <Shield
            size={60}
            className="mx-auto mb-6 text-teal-400"
          />

          <h1 className="text-5xl font-bold">
            CCTV Installation & Security Solutions
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-300">
            Protect your home, office and business with
            professional CCTV surveillance systems.
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

      {/* Common Requirements */}
      <section className="bg-warm-100 py-24">
        <div className="mx-auto max-w-container px-6">

          <h2 className="text-center text-4xl font-bold">
            CCTV Solutions For Every Need
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-3xl bg-white p-8">
              <Home className="mb-4 text-teal-600" />
              <h3 className="text-xl font-semibold">
                Homes
              </h3>
            </div>

            <div className="rounded-3xl bg-white p-8">
              <Building2 className="mb-4 text-teal-600" />
              <h3 className="text-xl font-semibold">
                Offices
              </h3>
            </div>

            <div className="rounded-3xl bg-white p-8">
              <Monitor className="mb-4 text-teal-600" />
              <h3 className="text-xl font-semibold">
                Shops
              </h3>
            </div>

            <div className="rounded-3xl bg-white p-8">
              <Camera className="mb-4 text-teal-600" />
              <h3 className="text-xl font-semibold">
                Warehouses
              </h3>
            </div>

          </div>

        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="mx-auto max-w-container px-6">

          <div className="rounded-[32px] bg-warm-100 p-12">

            <h2 className="text-4xl font-bold">
              Advanced Security Features
            </h2>

            <p className="mt-6 text-lg leading-8 text-brand-muted">
              Modern CCTV systems provide much more than just recording.
              We install complete surveillance solutions tailored to your needs.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              <div className="rounded-2xl bg-white p-6">
                <Eye className="mb-4 text-teal-600" />
                <h3 className="font-semibold">
                  Night Vision
                </h3>
              </div>

              <div className="rounded-2xl bg-white p-6">
                <Wifi className="mb-4 text-teal-600" />
                <h3 className="font-semibold">
                  Remote Access
                </h3>
              </div>

              <div className="rounded-2xl bg-white p-6">
                <Camera className="mb-4 text-teal-600" />
                <h3 className="font-semibold">
                  HD Recording
                </h3>
              </div>

              <div className="rounded-2xl bg-white p-6">
                <Shield className="mb-4 text-teal-600" />
                <h3 className="font-semibold">
                  Motion Detection
                </h3>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-navy-900 py-24 text-white">
        <div className="mx-auto max-w-container px-6 text-center">

          <h2 className="text-4xl font-bold">
            Why Choose Maheshwari Computers?
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-4">

            <div>
              <h3 className="text-4xl font-bold text-teal-400">
                25+
              </h3>
              <p className="mt-2">Years Experience</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-teal-400">
                Professional
              </h3>
              <p className="mt-2">Installation</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-teal-400">
                Genuine
              </h3>
              <p className="mt-2">Products</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-teal-400">
                Ongoing
              </h3>
              <p className="mt-2">Support</p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-container px-6">

          <div className="rounded-[32px] bg-navy-900 px-12 py-20 text-center text-white">

            <h2 className="text-5xl font-bold">
              Need CCTV Installation?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-300">
              Contact Maheshwari Computers today for
              reliable CCTV installation and security solutions.
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