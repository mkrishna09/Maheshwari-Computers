import Image from "next/image";

const brands = [
  { name: "Acer", logo: "/brands/acer.svg" },
  { name: "ASUS", logo: "/brands/asus.svg" },
  { name: "Brother", logo: "/brands/brother.svg" },
  { name: "Canon", logo: "/brands/canon.svg" },
  { name: "Dell", logo: "/brands/dell.svg" },
  { name: "D-Link", logo: "/brands/dlink.svg" },
  { name: "Epson", logo: "/brands/epson.svg" },
  { name: "Fingers", logo: "/brands/fingers.svg" },
  { name: "HP", logo: "/brands/hp.svg" },
  { name: "Lapcare", logo: "/brands/lapcare.svg" },
  { name: "Lenovo", logo: "/brands/lenovo.svg" },
];

export default function Brands() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-container px-6">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-brand-text">
            Authorized & Trusted Brands
          </h2>

          <p className="mt-4 text-brand-muted">
            Laptops, printers, networking equipment and accessories from industry-leading brands.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="
                group
                flex
                h-40
                items-center
                justify-center
                rounded-3xl
                border
                border-warm-200
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={160}
                height={70}
                className="
                  max-h-16
                  w-auto
                  object-contain
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}