"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-container items-center justify-between px-2">

        <Link
          href="/"
          className="text-xl font-bold text-navy-900"
        >
          Maheshwari Computers
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/products">Products</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Desktop CTA */}
        <a
          href="tel:+919416055255"
          className="hidden md:block rounded-xl bg-navy-900 px-5 py-3 text-white"
        >
          Call Now
        </a>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t bg-white md:hidden">
          <div className="flex flex-col p-6 gap-4">

            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>

            <Link href="/services" onClick={() => setOpen(false)}>
              Services
            </Link>

            <Link href="/products" onClick={() => setOpen(false)}>
              Products
            </Link>
            <Link href="/gallery" onClick={() => setOpen(false)}>
              Products
            </Link>

            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>

            <a
              href="tel:+919416055255"
              className="mt-4 rounded-xl bg-navy-900 px-5 py-3 text-center text-white"
            >
              Call Now
            </a>

          </div>
        </div>
      )}
    </header>
  );
}