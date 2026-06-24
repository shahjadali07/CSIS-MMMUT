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
          className="rounded-[2rem] bg-gradient-to-r from-blue-400 to-purple-500 p-[1px] shadow-[0_0_80px_rgba(255,255,255,0.03)] group transition-all duration-700 hover:shadow-[0_0_100px_rgba(255,255,255,0.08)]"
        >
          <div className="relative overflow-hidden rounded-[2rem] bg-[#030303] p-10 md:p-16 text-center h-full">
          {/* Animated shimmering sweep effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent w-full"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          />

          {/* Minimal ambient light that glows slightly on hover */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/[0.03] blur-[100px] rounded-full pointer-events-none group-hover:bg-white/[0.06] transition-colors duration-700" />

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative z-10 text-2xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight"
          >
            Ready to build <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-200 group-hover:from-white group-hover:to-gray-100 transition-all duration-500">the future?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="relative z-10 text-[#888] text-sm md:text-base lg:text-lg max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Learn new technologies, collaborate on meaningful projects, participate in technical events, and gain hands-on experience that prepares you for the future          </motion.p>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] transition-all duration-300 flex items-center justify-center group"
            >
              Apply to CSIS
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <a
              href="https://whatsapp.com/channel/0029VbCJcvaKLaHo4qbZHG1Y"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-md"
            >
              <svg className="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
              Join CSIS Community
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex items-center justify-center backdrop-blur-md"
            >
              Contact Us
            </a>
          </motion.div>
          </div>

        </motion.div>

      </div>

      {/* Induction Modal */}
      <InductionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
