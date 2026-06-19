import {
    Laptop,
    Monitor,
    Printer,
    Network,
    Shield,
    HardDrive,
  } from "lucide-react";
import Link from "next/link";

  export const metadata = {
    title: "Computer Repair Services in Bahadurgarh",
    description:
      "Laptop repair, desktop repair, printer service, networking, CCTV installation and IT support in Bahadurgarh, Haryana.",
  };
  
  const services = [
    {
      title: "Laptop Repair",
      icon: Laptop,
      href: "/services/laptop-repair",
      description:
        "Screen replacement, battery replacement, keyboard repair, SSD upgrades and complete troubleshooting.",
    },
    {
      title: "Desktop Repair",
      icon: Monitor,
      href: "/services/desktop-repair",
      description:
        "Custom PC builds, hardware upgrades, motherboard repair and performance optimization.",
    },
    {
      title: "Printer Service",
      icon: Printer,
      href: "/services/printer-repair",
      description:
        "Installation, maintenance and repair for Canon, Epson, Brother and HP printers.",
    },
    {
      title: "Networking Solutions",
      icon: Network,
      href: "/services/networking",
      description:
        "Wi-Fi setup, router configuration, office networking and internet troubleshooting.",
    },
    {
      title: "CCTV Installation",
      icon: Shield,
      href: "/services/cctv-installation",
      description:
        "Security camera installation, DVR setup and surveillance solutions.",
    },
    {
      title: "Data Recovery",
      icon: HardDrive,
      href: "/services/data-recovery",
      description:
        "Recovery of deleted files, damaged drives and important business data.",
    },
  ];
  
  export default function ServicesPage() {
    return (
      <main>
        <section className="bg-navy-900 py-24 text-white">
          <div className="mx-auto max-w-container px-6 text-center">
            <h1 className="text-6xl font-bold">
              Our Services
            </h1>
  
            <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-300">
              Complete IT solutions for homes, businesses,
              schools and organizations in Bahadurgarh.
            </p>
          </div>
        </section>
  
        <section className="py-24">
          <div className="mx-auto max-w-container px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
  
                return (
                  <Link
                  key={service.title}
                  href={service.href}
                  className="
                    block
                    rounded-3xl
                    border
                    border-warm-200
                    bg-white
                    p-8
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:shadow-lg
                  "
                >
                    <Icon
                      size={40}
                      className="mb-6 text-teal-600"
                    />
  
                    <h2 className="mb-4 text-2xl font-semibold">
                      {service.title}
                    </h2>
  
                    <p className="leading-8 text-brand-muted">
                      {service.description}
                    </p>
                    <div className="mt-6 font-semibold text-teal-600">
                    Learn More →
                  </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    );
  }