import {
  ShieldCheck,
  Wrench,
  Laptop,
  Building2,
} from "lucide-react";

const features = [
  {
    icon: Wrench,
    title: "Fast Repairs",
    description:
      "Quick diagnosis and same-day repairs for common issues.",
  },
  {
    icon: ShieldCheck,
    title: "Genuine Products",
    description:
      "Only authentic parts and accessories from trusted brands.",
  },
  {
    icon: Laptop,
    title: "Expert Technicians",
    description:
      "Experienced professionals handling laptops, desktops and printers.",
  },
  {
    icon: Building2,
    title: "Business IT Support",
    description:
      "Reliable IT solutions for offices, schools and organizations.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-navy-900 py-24">
      <div className="mx-auto max-w-container px-6">

        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold text-white">
            Why Choose Maheshwari Computers
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Trusted by students, businesses, schools and home users
            across Delhi NCR.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl bg-white/5 p-8 backdrop-blur transition duration-300 hover:-translate-y-2 hover:bg-white/10"
              >
                <Icon
                  size={40}
                  className="mb-6 text-teal-400"
                />

                <h3 className="mb-3 text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}