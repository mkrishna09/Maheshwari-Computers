import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-warm-white to-white py-24">
      <div className="mx-auto max-w-container px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          <div>
            <span className="rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-600">
              Trusted IT Solutions in Delhi NCR
            </span>

            <h1 className="
                mt-6
                text-4xl
                font-bold
                leading-tight
                sm:text-5xl
                lg:text-7xl
              font-bold text-brand-text">
              Delhi NCR's Trusted
              <br />
              Computer & IT Partner
            </h1>

            <p className="mt-6 max-w-xl text-body-lg text-brand-muted">
            Serving Delhi NCR for over 25 years with laptop repairs,
            desktop sales, printer servicing, CCTV solutions, networking
            products and complete IT support.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="tel:+919416055255"
                className="rounded-xl bg-navy-900 px-8 py-4 font-medium text-white transition hover:bg-navy-800"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/919416055255?text=Hello%20Maheshwari%20Computers,%20I%20need%20help%20with%20my%20computer."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-gray-300 px-8 py-4 font-medium transition hover:bg-gray-50"
              >
                WhatsApp Us
              </a>

            </div>
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 text-sm">
              <div>
                <p className="text-2xl font-bold text-brand-text">25+</p>
                <p className="text-brand-muted">Years Experience</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-brand-text">5000+</p>
                <p className="text-brand-muted">Happy Customers</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-brand-text">10000+</p>
                <p className="text-brand-muted">Repairs Completed</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-brand-text">100%</p>
                <p className="text-brand-muted">Genuine Products</p>
              </div>
            </div>
          </div>

          <div>
  <div className="grid gap-4">

    {/* Main Store Image */}
    <div className="mt-8 overflow-hidden rounded-3xl shadow-xl">
      <Image
        src="/gallery/store-front.jpeg"
        alt="Maheshwari Computers Store Front"
        width={1000}
        height={600}
        className="h-[320px] w-full object-cover transition duration-500 hover:scale-105"
      />
    </div>

    {/* Bottom Two Images */}
    <div className="grid grid-cols-2 gap-4">

      <div className="mt-8 overflow-hidden rounded-3xl shadow-xl">
        <Image
          src="/gallery/store-inside.jpeg"
          alt="Store Interior"
          width={500}
          height={400}
          className="h-[220px] w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

      <div className="overflow-hidden rounded-3xl shadow-xl">
        <Image
          src="/gallery/store.webp"
          alt="Products and Inventory"
          width={500}
          height={400}
          className="h-[220px] w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

    </div>

  </div>
</div>

        </div>

      </div>
    </section>
  );
}