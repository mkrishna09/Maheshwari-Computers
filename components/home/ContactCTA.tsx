import { Phone, MessageCircle } from "lucide-react";

export default function ContactCTA() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-container px-6">

        <div className="rounded-[32px] bg-navy-900 px-12 py-20 text-center text-white">

          <h2 className="text-5xl font-bold">
            Need Laptop Repair, Printer Service,
            <br />
            or Business IT Support?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-300">
            From laptop repairs and printer servicing to CCTV installation,
            networking solutions, and business IT support, Maheshwari
            Computers is here to help.
          </p>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap justify-center gap-8 text-gray-300">
            <span>✓ Same Day Repairs</span>
            <span>✓ Genuine Products</span>
            <span>✓ Expert Technicians</span>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href="tel:+919416055255"
              className="flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-navy-900 transition hover:scale-105"
            >
              <Phone size={20} />
              Call Now
            </a>

            <a
              href="https://wa.me/+919416055255?text=Hello%20Maheshwari%20Computers,%20I%20need%20help%20with%20my%20computer."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-green-600 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-green-700"
            >
              <MessageCircle size={20} />
              WhatsApp Us
            </a>

          </div>

          {/* Phone Number */}
          <p className="mt-8 text-gray-300">
            Call us directly: +91 94160 55255
          </p>

        </div>

      </div>
    </section>
  );
}