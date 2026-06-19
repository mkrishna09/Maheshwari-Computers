"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const sendWhatsApp = () => {
    const text = `
*New Inquiry - Maheshwari Computers*

Name: ${name}
Phone: ${phone}

Requirement:
${message}
    `;

    const url = `https://wa.me/919416055255?text=${encodeURIComponent(
      text
    )}`;

    window.open(url, "_blank");
  };

  return (
    <main>
      {/* Hero */}
      <section className="bg-navy-900 py-24 text-white">
        <div className="mx-auto max-w-container px-6 text-center">
          <h1 className="text-6xl font-bold">
            Contact Us
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-300">
            We are here to help with all your computer,
            laptop, printer and IT requirements.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24">
        <div className="mx-auto max-w-container px-6">

          <div className="grid gap-12 lg:grid-cols-2">

            {/* Left Side */}
            <div>

              <h2 className="text-4xl font-bold">
                Get In Touch
              </h2>

              <div className="mt-10 space-y-8">

                <div className="flex gap-4">
                  <Phone
                    className="text-teal-600"
                    size={24}
                  />

                  <div>
                    <h3 className="font-semibold">
                      Phone
                    </h3>

                    <p className="text-brand-muted">
                      +91 94160 55255
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MessageCircle
                    className="text-teal-600"
                    size={24}
                  />

                  <div>
                    <h3 className="font-semibold">
                      WhatsApp
                    </h3>

                    <p className="text-brand-muted">
                      Available for quick support at +91 94160 55255
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail
                    className="text-teal-600"
                    size={24}
                  />

                  <div>
                    <h3 className="font-semibold">
                      Email
                    </h3>

                    <p className="text-brand-muted">
                      maheshwaricomputer@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin
                    className="text-teal-600"
                    size={24}
                  />

                  <div>
                    <h3 className="font-semibold">
                      Address
                    </h3>

                    <p className="text-brand-muted">
                      1, Nahara-Nahari Road,
                      Model Town, Bahadurgarh,
                      Haryana 124507
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock
                    className="text-teal-600"
                    size={24}
                  />

                  <div>
                    <h3 className="font-semibold">
                      Working Hours
                    </h3>

                    <p className="text-brand-muted">
                      Monday - Saturday
                    </p>

                    <p className="text-brand-muted">
                      9:00 AM - 8:00 PM
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* WhatsApp Inquiry Form */}
            <div className="rounded-3xl border border-warm-200 bg-white p-8 shadow-soft">

              <h3 className="mb-6 text-2xl font-bold">
                Send An Inquiry
              </h3>

              <div className="space-y-4">

                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  className="w-full rounded-xl border p-4"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) =>
                    setPhone(e.target.value)
                  }
                  className="w-full rounded-xl border p-4"
                />

                <textarea
                  rows={5}
                  placeholder="How can we help you?"
                  value={message}
                  onChange={(e) =>
                    setMessage(e.target.value)
                  }
                  className="w-full rounded-xl border p-4"
                />

                <button
                  type="button"
                  onClick={sendWhatsApp}
                  className="
                    w-full
                    rounded-xl
                    bg-green-600
                    py-4
                    font-semibold
                    text-white
                    transition
                    hover:bg-green-700
                  "
                >
                  Send Inquiry on WhatsApp
                </button>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Google Maps */}
      <section className="pb-24">
        <div className="mx-auto max-w-container px-6">

          <div className="rounded-3xl bg-warm-100 p-16 text-center">

            <h3 className="text-4xl font-bold">
              Find Us On Google Maps
            </h3>

            <div className="mt-10 overflow-hidden rounded-3xl shadow-card">

              <iframe
                src="https://www.google.com/maps?q=Maheshwari+Computers+Bahadurgarh&output=embed"
                width="100%"
                height="500"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">

              <a
                href="https://maps.app.goo.gl/7rFk8LsaiL3WTikc6"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-navy-900 px-6 py-3 text-white"
              >
                Open In Google Maps
              </a>

              <a
                href="tel:+919416055255"
                className="rounded-xl border border-warm-200 px-6 py-3"
              >
                Call Store
              </a>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}