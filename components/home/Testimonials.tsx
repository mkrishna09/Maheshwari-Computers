import testimonials from "@/content/testimonials.json";

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-4xl font-bold mb-12">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {testimonials.map((item) => (
            <div
            key={item.id}
            className="
              rounded-3xl
              border
              border-warm-200
              bg-white
              p-8
              shadow-soft
              transition
              hover:-translate-y-1
              hover:shadow-card
            "
            >
             <div className="mb-4 text-yellow-500 text-lg">
              ★★★★★
            </div>

            <p className="text-brand-muted leading-8">
              {item.quote}
            </p>

            <div className="mt-6">
              <h4 className="font-semibold text-lg">
                {item.name}
              </h4>
            </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}