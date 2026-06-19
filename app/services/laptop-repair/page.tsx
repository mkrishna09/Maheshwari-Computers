import type { Metadata } from "next";
import Link from "next/link";
import {
  Laptop,
  Wrench,
  HardDrive,
  Battery,
  Monitor,
  CheckCircle,
  Fan,
  Cpu,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Laptop Repair, Servicing & Upgrades in Delhi NCR",
  description:
    "Professional laptop repair, servicing, cleaning, hinge repair, SSD upgrades, battery replacement and troubleshooting services in Delhi NCR.",
};

const services = [
  "Laptop Servicing & Internal Cleaning",
  "Laptop Screen Replacement",
  "Battery Replacement",
  "Keyboard Repair",
  "Laptop Hinge Repair & Replacement",
  "SSD Upgrades",
  "RAM Upgrades",
  "Motherboard Diagnostics",
  "Software Installation",
  "Virus Removal",
];

export default function LaptopRepairPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-r from-navy-900 to-navy-950 py-24 text-white">
        <div className="mx-auto max-w-container px-6 text-center">
          <Laptop
            size={60}
            className="mx-auto mb-6 text-teal-400"
          />

          <h1 className="text-5xl font-bold">
            Laptop Repair, Servicing & Upgrades
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-300">
            Professional laptop repair, servicing, cleaning,
            upgrades and troubleshooting services in Delhi NCR.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="mx-auto max-w-container px-6">
          <h2 className="text-center text-4xl font-bold">
            Services We Provide
          </h2>

          <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
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
          <h2 className="text-center text-4xl sm:text-6xl lg:text-4xl font-bold">
            Common Laptop Problems We Fix
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-3xl bg-white p-8">
              <Monitor className="mb-4 text-teal-600" />
              <h3 className="text-xl font-semibold">
                Broken Screens
              </h3>
            </div>

            <div className="rounded-3xl bg-white p-8">
              <Battery className="mb-4 text-teal-600" />
              <h3 className="text-xl font-semibold">
                Battery Issues
              </h3>
            </div>

            <div className="rounded-3xl bg-white p-8">
              <HardDrive className="mb-4 text-teal-600" />
              <h3 className="text-xl font-semibold">
                Slow Performance
              </h3>
            </div>

            <div className="rounded-3xl bg-white p-8">
              <Wrench className="mb-4 text-teal-600" />
              <h3 className="text-xl font-semibold">
                Hardware Problems
              </h3>
            </div>

            <div className="rounded-3xl bg-white p-8">
              <Laptop className="mb-4 text-teal-600" />
              <h3 className="text-xl font-semibold">
                Keyboard Issues
              </h3>
            </div>

            <div className="rounded-3xl bg-white p-8">
              <CheckCircle className="mb-4 text-teal-600" />
              <h3 className="text-xl font-semibold">
                Software Errors
              </h3>
            </div>

            <div className="rounded-3xl bg-white p-8">
              <Fan className="mb-4 text-teal-600" />
              <h3 className="text-xl font-semibold">
                Overheating Issues
              </h3>
            </div>

            <div className="rounded-3xl bg-white p-8">
              <Cpu className="mb-4 text-teal-600" />
              <h3 className="text-xl font-semibold">
                Excessive Fan Noise
              </h3>
            </div>

            <div className="rounded-3xl bg-white p-8">
              <Wrench className="mb-4 text-teal-600" />
              <h3 className="text-xl font-semibold">
                Broken Laptop Hinges
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Laptop Servicing */}
      <section className="py-24">
        <div className="mx-auto max-w-container px-6">
          <div className="rounded-[32px] bg-warm-100 p-12">
            <h2 className="text-4xl font-bold">
              Professional Laptop Servicing & Cleaning
            </h2>

            <p className="mt-6 text-lg leading-8 text-brand-muted">
              Dust accumulation inside laptops can cause
              overheating, loud fan noise, poor performance and
              reduced hardware lifespan. Our professional servicing
              process helps maintain optimal performance and reliability.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Internal Dust Cleaning
                </h3>

                <p className="mt-3 text-brand-muted">
                  Complete cleaning of fans, vents and internal components.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Thermal Paste Replacement
                </h3>

                <p className="mt-3 text-brand-muted">
                  Fresh thermal compound for improved cooling performance.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Fan Cleaning
                </h3>

                <p className="mt-3 text-brand-muted">
                  Deep cleaning of cooling fans to reduce noise and overheating.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Performance Checkup
                </h3>

                <p className="mt-3 text-brand-muted">
                  Complete inspection of hardware and software health.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Hinge Repair & Replacement
                </h3>

                <p className="mt-3 text-brand-muted">
                  Repair of loose, damaged or broken hinges to restore smooth opening and closing.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Laptop Health Check
                </h3>

                <p className="mt-3 text-brand-muted">
                  Overall inspection of laptop performance, temperatures and hardware condition.
                </p>
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

              <p className="mt-2">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-teal-400">
                5000+
              </h3>

              <p className="mt-2">
                Happy Customers
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-teal-400">
                Same Day
              </h3>

              <p className="mt-2">
                Service Available
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-teal-400">
                100%
              </h3>

              <p className="mt-2">
                Genuine Parts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-container px-6">
          <div className="rounded-[32px] bg-navy-900 px-12 py-20 text-center text-white">
            <h2 className="text-5xl font-bold">
              Need Laptop Repair or Servicing?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-300">
              Contact Maheshwari Computers today for expert laptop repair,
              servicing, hinge replacement and performance optimization.
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

      {/* Back Link */}
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