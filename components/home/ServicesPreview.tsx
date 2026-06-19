import {
    Laptop,
    Monitor,
    Printer,
    Network,
    Shield,
    HardDrive,
  } from "lucide-react";
  
  import FadeIn from "@/components/global/FadeIn";
  
  const services = [
    {
      title: "Laptop Repair",
      icon: Laptop,
      desc: "Screen replacement, battery issues, keyboard repair and SSD upgrades.",
    },
    {
      title: "Desktop Repair",
      icon: Monitor,
      desc: "Hardware troubleshooting, upgrades and custom PC builds.",
    },
    {
      title: "Printer Service",
      icon: Printer,
      desc: "Installation, maintenance and repair for all major printer brands.",
    },
    {
      title: "Networking Solutions",
      icon: Network,
      desc: "Wi-Fi setup, router configuration and office networking.",
    },
    {
      title: "CCTV Installation",
      icon: Shield,
      desc: "Security systems and surveillance solutions for homes and businesses.",
    },
    {
      title: "Data Recovery",
      icon: HardDrive,
      desc: "Recover important files, photos and business documents safely.",
    },
  ];
  
  export default function ServicesPreview() {
    return (
      <section id="services" className="py-24">
        <div className="mx-auto max-w-container px-6">
          
          <div className="text-center">
            <h2 className="text-5xl font-bold text-brand-text">
              Our Services
            </h2>
  
            <p className="mt-4 text-lg text-brand-muted">
              Complete IT solutions for homes, businesses, schools and offices.
            </p>
          </div>
  
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
  
              return (
                <FadeIn key={service.title}>
                  <div
                    className="
                      rounded-3xl
                      border
                      border-warm-200
                      bg-white
                      p-8
                      shadow-soft
                      transition-all
                      duration-300
                      hover:-translate-y-2
                      hover:shadow-card
                    "
                  >
                    <Icon
                      size={38}
                      className="mb-6 text-teal-600"
                    />
  
                    <h3 className="mb-3 text-xl font-semibold text-brand-text">
                      {service.title}
                    </h3>
  
                    <p className="leading-7 text-brand-muted">
                      {service.desc}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    );
  }