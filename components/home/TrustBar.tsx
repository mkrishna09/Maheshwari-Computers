import {
    Clock3,
    ShieldCheck,
    Headphones,
    BadgeCheck,
  } from "lucide-react";
  
  const items = [
    {
      icon: Clock3,
      title: "Same Day Repairs",
    },
    {
      icon: ShieldCheck,
      title: "Genuine Products",
    },
    {
      icon: Headphones,
      title: "Technical Support",
    },
    {
      icon: BadgeCheck,
      title: "Trusted Since 2000",
    },
  ];
  
  export default function TrustBar() {
    return (
      <section className="bg-white border-y border-warm-200">
        <div className="mx-auto max-w-container px-6 py-6">
  
          <div className="grid gap-6 md:grid-cols-4">
  
            {items.map((item) => {
              const Icon = item.icon;
  
              return (
                <div
                  key={item.title}
                  className="flex items-center gap-3"
                >
                  <Icon
                    size={22}
                    className="text-teal-600"
                  />
  
                  <span className="font-medium">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
  
        </div>
      </section>
    );
  }