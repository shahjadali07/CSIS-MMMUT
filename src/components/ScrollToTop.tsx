"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 10 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 z-50 w-10 h-10 rounded-full bg-[var(--surface)] border border-[var(--accent)]/30 text-[var(--accent)] flex items-center justify-center shadow-lg hover:bg-[var(--bg-alt)] hover:border-[var(--accent)] hover:shadow-[0_0_16px_rgba(37,99,235,0.2)] transition-all duration-200 group"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-200" />
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full border border-[var(--accent)]/20 animate-ping" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
