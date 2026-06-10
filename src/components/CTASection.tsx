"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Globe } from "lucide-react";
import InductionModal from "./InductionModal";

const features = [
  { icon: Zap, label: "Build Prototypes", desc: "Ship real products alongside university coursework." },
  { icon: Globe, label: "Open-Source", desc: "Contribute to globally indexed research and code." },
  { icon: Sparkles, label: "Get Mentored", desc: "Learn from industry veterans and senior researchers." },
];

export default function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden bg-black">
      
      {/* Background glow overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[var(--accent)] opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto z-10">

        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="linear-card p-12 md:p-20 text-center"
        >
          {/* Badge */}
          <div className="flex justify-center mb-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface-hover)] text-xs font-medium text-[var(--text-muted)]"
            >
              <span className="w-2 h-2 bg-[var(--text)] rounded-full animate-pulse" />
              Cohort 2026 is open
            </motion.div>
          </div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
          >
            Ready to build <br className="hidden md:block" />
            <span className="text-[var(--text-dim)]">the future?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="text-[var(--text-muted)] text-base md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Collaborate on Next.js Virtual Lab shells, develop quantized neural engines, co-author academic publications, and seed student startups with us.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-primary px-8 py-3.5 text-base w-full sm:w-auto flex items-center justify-center group"
            >
              Apply to CSIS
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <a
              href="mailto:csis@university.ac.in"
              className="btn-secondary px-8 py-3.5 text-base w-full sm:w-auto"
            >
              Contact Us
            </a>
          </motion.div>

        </motion.div>

      </div>

      {/* Induction Modal */}
      <InductionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
