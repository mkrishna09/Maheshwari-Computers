import { MessageCircle } from "lucide-react";

export default function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/+919416055255?text=Hello%20Maheshwari%20Computers,%20I%20need%20help%20with%20my%20computer."
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        items-center
        gap-3
        rounded-full
        bg-green-600
        px-5
        py-4
        text-white
        shadow-lg
        transition
        hover:scale-105
        hover:bg-green-700
      "
    >
      <MessageCircle size={24} />
      <span className="hidden md:block">
        Chat on WhatsApp
      </span>
    </a>
  );
}