import type { Metadata } from "next";
import Link from "next/link";
import {
  HardDrive,
  Database,
  Shield,
  CheckCircle,
  Laptop,
  Server,
  Usb,
  AlertTriangle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Data Recovery Services in Delhi NCR",
  description:
    "Recover deleted files, formatted drives, damaged hard disks, SSDs, pen drives and important business data with professional data recovery services in Delhi NCR.",
};

const recoveryServices = [
  "Deleted File Recovery",
  "Formatted Drive Recovery",
  "Hard Disk Recovery",
  "SSD Recovery",
  "Pen Drive Recovery",
  "Memory Card Recovery",
  "Business Data Recovery",
  "System Crash Recovery",
  "Backup Solutions",
];

export default function DataRecoveryPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-navy-900 py-24 text-white">
        <div className="mx-auto max-w-container px-6 text-center">

          <HardDrive
            size={60}
            className="mx-auto mb-6 text-teal-400"
          />

          <h1 className="text-5xl font-bold">
            Data Recovery Services
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-300">
            Recover lost, deleted or inaccessible files from hard drives,
            SSDs, laptops, pen drives and storage devices.
          </p>

        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="mx-auto max-w-container px-6">

          <h2 className="text-center text-4xl font-bold">
            Recovery Solutions We Provide
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {recoveryServices.map((service) => (
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

      {/* Common Data Loss Situations */}
      <section className="bg-warm-100 py-24">
        <div className="mx-auto max-w-container px-6">

          <h2 className="text-center text-4xl font-bold">
            Common Data Loss Situations
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-3xl bg-white p-8">
              <AlertTriangle className="mb-4 text-teal-600" />
              <h3 className="text-xl font-semibold">
                Accidental Deletion
              </h3>
            </div>

            <div className="rounded-3xl bg-white p-8">
              <Database className="mb-4 text-teal-600" />
              <h3 className="text-xl font-semibold">
                Formatted Drives
              </h3>
            </div>

            <div className="rounded-3xl bg-white p-8">
              <Laptop className="mb-4 text-teal-600" />
              <h3 className="text-xl font-semibold">
                System Crash
              </h3>
            </div>

            <div className="rounded-3xl bg-white p-8">
              <HardDrive className="mb-4 text-teal-600" />
              <h3 className="text-xl font-semibold">
                Drive Failure
              </h3>
            </div>

          </div>

        </div>
      </section>

      {/* Devices Supported */}
      <section className="py-24">
        <div className="mx-auto max-w-container px-6">

          <div className="rounded-[32px] bg-warm-100 p-12">

            <h2 className="text-4xl font-bold">
              Devices We Recover Data From
            </h2>

            <p className="mt-6 text-lg leading-8 text-brand-muted">
              We assist with data recovery from a wide range of storage devices.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              <div className="rounded-2xl bg-white p-6">
                <HardDrive className="mb-4 text-teal-600" />
                <h3 className="font-semibold">Hard Drives</h3>
              </div>

              <div className="rounded-2xl bg-white p-6">
                <Laptop className="mb-4 text-teal-600" />
                <h3 className="font-semibold">Laptops</h3>
              </div>

              <div className="rounded-2xl bg-white p-6">
                <Usb className="mb-4 text-teal-600" />
                <h3 className="font-semibold">Pen Drives</h3>
              </div>

              <div className="rounded-2xl bg-white p-6">
                <Server className="mb-4 text-teal-600" />
                <h3 className="font-semibold">Office Systems</h3>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Safety */}
      <section className="bg-navy-900 py-24 text-white">
        <div className="mx-auto max-w-container px-6 text-center">

          <Shield
            size={60}
            className="mx-auto mb-6 text-teal-400"
          />

          <h2 className="text-4xl font-bold">
            Your Data Privacy Matters
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-300">
            All recovery work is handled with confidentiality and care.
            Your files remain private and secure throughout the recovery process.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-container px-6">

          <div className="rounded-[32px] bg-navy-900 px-12 py-20 text-center text-white">

            <h2 className="text-5xl font-bold">
              Lost Important Data?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-300">
              Contact Maheshwari Computers today and let us help recover
              your valuable files and business data.
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