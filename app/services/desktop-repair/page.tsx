import type { Metadata } from "next";
import Link from "next/link";
import {
  Monitor,
  Cpu,
  HardDrive,
  MemoryStick,
  Wrench,
  CheckCircle,
  Shield,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Desktop Repair & Upgrades in Bahadurgarh",
  description:
    "Professional desktop repair, PC upgrades, motherboard repair, SSD installation, RAM upgrades and troubleshooting services in Bahadurgarh.",
};

const services = [
  "Desktop Troubleshooting",
  "Custom PC Assembly",
  "SSD Installation & Upgrades",
  "RAM Upgrades",
  "Motherboard Repair",
  "SMPS Replacement",
  "Graphics Card Installation",
  "Operating System Installation",
  "Virus Removal",
  "Annual Maintenance",
];

export default function DesktopRepairPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-navy-900 py-24 text-white">
        <div className="mx-auto max-w-container px-6 text-center">
          <Monitor
            size={60}
            className="mx-auto mb-6 text-teal-400"
          />

          <h1 className="text-5xl font-bold">
            Desktop Repair & Upgrades
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-300">
            Professional desktop repair, PC upgrades,
            troubleshooting and custom computer solutions in Bahadurgarh.
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
            Common Desktop Problems We Fix
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-3xl bg-white p-8">
              <Cpu className="mb-4 text-teal-600" />
              <h3 className="text-xl font-semibold">
                Motherboard Issues
              </h3>
            </div>

            <div className="rounded-3xl bg-white p-8">
              <HardDrive className="mb-4 text-teal-600" />
              <h3 className="text-xl font-semibold">
                Hard Disk Failures
              </h3>
            </div>

            <div className="rounded-3xl bg-white p-8">
              <MemoryStick className="mb-4 text-teal-600" />
              <h3 className="text-xl font-semibold">
                RAM Problems
              </h3>
            </div>

            <div className="rounded-3xl bg-white p-8">
              <Zap className="mb-4 text-teal-600" />
              <h3 className="text-xl font-semibold">
                Power Supply Issues
              </h3>
            </div>

            <div className="rounded-3xl bg-white p-8">
              <Wrench className="mb-4 text-teal-600" />
              <h3 className="text-xl font-semibold">
                Slow Performance
              </h3>
            </div>

            <div className="rounded-3xl bg-white p-8">
              <Shield className="mb-4 text-teal-600" />
              <h3 className="text-xl font-semibold">
                Virus & Malware Removal
              </h3>
            </div>

          </div>
        </div>
      </section>

      {/* Upgrades Section */}
      <section className="py-24">
        <div className="mx-auto max-w-container px-6">

          <div className="rounded-[32px] bg-warm-100 p-12">

            <h2 className="text-4xl font-bold">
              Desktop Upgrade Solutions
            </h2>

            <p className="mt-6 text-lg leading-8 text-brand-muted">
              If your desktop feels slow, upgrading components can
              significantly improve performance without purchasing
              a new computer.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              <div className="rounded-2xl bg-white p-6">
                <h3 className="text-xl font-semibold">
                  SSD Upgrades
                </h3>

                <p className="mt-3 text-brand-muted">
                  Faster boot times and improved system performance.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6">
                <h3 className="text-xl font-semibold">
                  RAM Upgrades
                </h3>

                <p className="mt-3 text-brand-muted">
                  Improved multitasking and smoother operation.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6">
                <h3 className="text-xl font-semibold">
                  Graphics Upgrades
                </h3>

                <p className="mt-3 text-brand-muted">
                  Better gaming and professional design performance.
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
              <p className="mt-2">Years Experience</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-teal-400">
                5000+
              </h3>
              <p className="mt-2">Happy Customers</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-teal-400">
                Genuine
              </h3>
              <p className="mt-2">Components</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-teal-400">
                Same Day
              </h3>
              <p className="mt-2">Service Available</p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-container px-6">

          <div className="rounded-[32px] bg-navy-900 px-12 py-20 text-center text-white">

            <h2 className="text-5xl font-bold">
              Need Desktop Repair?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-300">
              Contact Maheshwari Computers today for expert desktop
              repair, upgrades and troubleshooting.
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