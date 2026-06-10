"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import InductionModal from "./InductionModal";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#domains", label: "Domains" },
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#team", label: "Team" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? "bg-[var(--bg)] backdrop-blur-md border-b border-[var(--border)] shadow-md py-3" : "bg-transparent py-5"}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className="w-6 h-6 rounded-md bg-white text-black flex items-center justify-center font-bold text-xs tracking-tighter">
              CS
            </div>
            <span className="font-semibold text-[var(--text)] text-sm tracking-tight hidden sm:block">
              Innovation Society
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium text-[var(--text-muted)] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="/contact"
              className="px-4 py-1.5 border border-[var(--border)] text-[var(--text)] text-[13px] font-medium rounded-full hover:bg-[var(--surface)] hover:text-white transition-colors"
            >
              Contact
            </a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-1.5 bg-white text-black text-[13px] font-medium rounded-full hover:bg-neutral-200 transition-colors"
            >
              Join Us
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-[var(--text-muted)] hover:text-white transition-colors p-1"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-[var(--bg)] p-6"
          >
            <div className="flex items-center justify-between mb-8">
              <a href="/" className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-white text-black flex items-center justify-center font-bold text-xs">
                  CS
                </div>
              </a>
              <button
                className="text-[var(--text-muted)] hover:text-white transition-colors p-1"
                onClick={() => setMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col gap-6 text-xl font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[var(--text-muted)] hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-[var(--border)] my-4" />
              <a
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="text-[var(--text-muted)] hover:text-white transition-colors"
              >
                Contact
              </a>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  setIsModalOpen(true);
                }}
                className="text-left text-white"
              >
                Join Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Induction Modal */}
      <InductionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
