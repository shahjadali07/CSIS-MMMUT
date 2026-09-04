"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import InductionModal from "./InductionModal";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-16 px-6 overflow-hidden bg-black/40">

      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {isMounted && (
          <video
            src="/images/csistheme.mp4"
            autoPlay
            loop
            muted
            playsInline
            suppressHydrationWarning
            className="w-full h-full object-cover opacity-10"
          />
        )}
        {/* Extra dark overlay to make the video just barely visible as a 'feeling' */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#050505]" />
      </div>

      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[var(--accent)] opacity-10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white opacity-[0.03] blur-[80px] rounded-full pointer-events-none" />

      {/* Noise overlay */}
      <div className="absolute inset-0 noise-bg pointer-events-none opacity-50" />

      <div className="max-w-4xl mx-auto text-center relative z-10">

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-fluid-h1 font-bold mb-6 text-white"
        >
          Fostering Student <br className="hidden sm:block" />
          <span className="text-gradient">Ownership & Innovation</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-fluid-base text-[var(--text-muted)] max-w-2xl mx-auto mb-10"
        >
          <p className="mb-4 text-gray-300">
            The Computer Science and Innovation Society at MMMUT enables students to participate, initiate, collaborate, and take ownership of technical activities.
          </p>
          <p className="text-blue-400 font-sans">
            Building the next generation of technology through hands-on learning and contribution.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/contact" className="btn-secondary w-full sm:w-auto px-8 py-3.5 text-base">
            Stay in Touch
          </Link>
        </motion.div>

      </div>

      {/* Bottom fade line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 max-w-3xl h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent opacity-50" />

      {/* Induction Modal */}
      <InductionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
