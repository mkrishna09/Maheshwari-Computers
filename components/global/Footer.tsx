import {
    Phone,
    Mail,
    MapPin,
    MessageCircle,
  } from "lucide-react";
  
  export default function Footer() {
    return (
      <footer className="bg-gradient-to-b from-navy-900 to-navy-950 text-white">
        <div className="mx-auto max-w-container px-6 py-16">
  
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
  
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold">
                Maheshwari Computers
              </h3>
  
              <p className="mt-4 text-gray-400 leading-7">
                Complete IT solutions for homes, businesses,
                schools and offices in Delhi NCR.
              </p>
            </div>
  
            {/* Services */}
            <div>
              <h4 className="mb-4 text-lg font-semibold">
                Services
              </h4>
  
              <ul className="space-y-3 text-gray-400">
                <li>Laptop Repair</li>
                <li>Desktop Repair</li>
                <li>Printer Service</li>
                <li>CCTV Installation</li>
                <li>Networking Solutions</li>
                <li>Data Recovery</li>
              </ul>
            </div>
  
            {/* Quick Links */}
            <div>
              <h4 className="mb-4 text-lg font-semibold">
                Quick Links
              </h4>
  
              <ul className="space-y-3 text-gray-400">
                <li>Home</li>
                <li>Services</li>
                <li>Products</li>
                <li>About Us</li>
                <li>Contact</li>
              </ul>
            </div>
  
            {/* Contact Info */}
            <div>
              <h4 className="mb-4 text-lg font-semibold">
                Contact Us
              </h4>
  
              <div className="space-y-4 text-gray-400">
  
                <div className="flex items-start gap-3">
                  <Phone size={18} />
                  <span>+91 94160 55255</span>
                </div>
  
                <div className="flex items-start gap-3">
                  <Mail size={18} />
                  <span>maheshwaricomputer@gmail.com</span>
                </div>
  
                <div className="flex items-start gap-3">
                  <MapPin size={18} />
                  <span>
                    Bahadurgarh,
                    Haryana,
                    India
                  </span>
                </div>
  
                <div className="flex items-start gap-3">
                  <MessageCircle size={18} />
                  <span>WhatsApp Support</span>
                </div>
  
              </div>
            </div>
  
          </div>
  
          {/* Divider */}
          <div className="my-10 border-t border-white/10" />
  
          {/* Bottom Bar */}
          <div className="flex flex-col gap-4 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
  
            <p>
              © {new Date().getFullYear()} Maheshwari Computers.
              All Rights Reserved.
            </p>
  
            <p>
            Serving Delhi NCR with trusted IT solutions for over 25 years.
            </p>
  
          </div>
  
        </div>
      </footer>
    );
  }