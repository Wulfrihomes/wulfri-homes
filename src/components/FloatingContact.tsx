import { MessageCircle, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { WHATSAPP_NUMBER } from "@/data/wulfri";

export const FloatingContact = () => {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello Wulfri Homes, I'd like to learn more about your properties."
  )}`;

  return (
    <>
      {/* WhatsApp - always visible */}
      <motion.a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" fill="currentColor" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full">
          <span className="absolute inset-0 bg-[#25D366] rounded-full animate-ping" />
        </span>
      </motion.a>

      {/* Mobile sticky Book Inspection */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1.2 }}
        className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-charcoal text-ivory border-t border-primary/30"
      >
        <Link
          to="/contact"
          className="flex items-center justify-center gap-2 h-14 text-xs tracking-[0.2em] uppercase font-medium"
        >
          <Calendar className="w-4 h-4 text-primary" />
          Book Free Inspection
        </Link>
      </motion.div>
    </>
  );
};
