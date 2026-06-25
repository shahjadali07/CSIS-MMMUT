"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import InductionModal from "./InductionModal";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-16 px-6 overflow-hidden bg-black/40">

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

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] text-xs font-medium text-[var(--text-muted)] mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-[var(--accent-light)]" />
          <span>Announcing CSIS Induction'26</span>
          <div className="w-px h-3 bg-[var(--border)] mx-1" />
          <button onClick={() => setIsModalOpen(true)} className="text-white hover:underline flex items-center gap-1">
            Apply now <ArrowRight className="w-3 h-3" />
          </button>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] leading-[1.1] mb-6 text-white"
        >
          Engineering the <br className="hidden md:block" />
          <span className="text-gradient">future of software</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed mb-10"
        >
          <span className="block font-semibold text-white text-xl md:text-2xl mb-3">
            The Epicenter of Technological Innovation
          </span>
          <p>
            We build innovative digital solutions, explore new possibilities in emerging technologies, and create a community where future leaders can learn, collaborate, and grow
          </p>
          <span
            className="flex justify-center w-full mt-6 text-xl md:text-3xl text-blue-400 opacity-90 tracking-wide whitespace-nowrap text-center mx-auto"
            style={{ fontFamily: "'Lucida Handwriting', 'Apple Chancery', 'Brush Script MT', cursive" }}
          >
            We don't just predict the future — we build it.
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button onClick={() => setIsModalOpen(true)} className="btn-primary w-full sm:w-auto px-8 py-3.5 text-base">
            Join the Society
          </button>
          <a href="#projects" className="btn-secondary w-full sm:w-auto px-8 py-3.5 text-base">
            View Projects
          </a>
        </motion.div>

      </div>

      {/* Bottom fade line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 max-w-3xl h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent opacity-50" />

      {/* Induction Modal */}
      <InductionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
