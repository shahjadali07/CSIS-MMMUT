"use client";

import { motion } from "framer-motion";
import { Compass, Eye, Target, Zap, Shield, Cpu } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-20 text-center md:text-left md:flex md:items-end md:justify-between gap-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.03em] mb-4 text-white">
              Curiosity meets <span className="text-gradient">structured engineering.</span>
            </h2>
            <p className="text-[var(--text-muted)] text-base md:text-lg leading-relaxed">
              CSIS is the tech engine of Prayukti VLab. We guide student developers through a complete transition: from basic learning to advanced product creation.
            </p>
          </div>
        </div>

        {/* Linear Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-7 linear-card p-10 flex flex-col justify-between min-h-[340px]"
          >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--accent)] opacity-5 blur-[100px] pointer-events-none rounded-full" />
            
            <div className="relative z-10 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[var(--surface-hover)] border border-[var(--border)] flex items-center justify-center mb-6">
                <Compass className="w-6 h-6 text-[var(--text)]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight text-white">
                Our Mission
              </h3>
              <p className="text-[var(--text-muted)] text-lg leading-relaxed max-w-xl">
                To cultivate an ecosystem that fosters deep technical expertise, collaborative engineering, and breakthrough research, preparing student innovators for real-world impact in cutting-edge industries.
              </p>
            </div>
            
            <div className="relative z-10 pt-6 border-t border-[var(--border)] flex items-center justify-between text-xs text-[var(--text-dim)] font-medium">
              <span>Established 2020</span>
              <span>Impact-Driven</span>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-5 linear-card p-10 flex flex-col justify-between min-h-[340px]"
          >
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-500 opacity-5 blur-[100px] pointer-events-none rounded-full" />

            <div className="relative z-10 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[var(--surface-hover)] border border-[var(--border)] flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-[var(--text)]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight text-white">
                Our Vision
              </h3>
              <p className="text-[var(--text-muted)] text-base leading-relaxed">
                To serve as the virtual innovation engine of Prayukti VLab, bridging scientific theory and scalable industrial products, creating a culture of open-source research and tech startups.
              </p>
            </div>
          </motion.div>

          {/* Objectives Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-12 linear-card p-0 flex flex-col md:flex-row"
          >
             <div className="p-10 md:w-1/3 border-b md:border-b-0 md:border-r border-[var(--border)] flex flex-col justify-center bg-[var(--surface-hover)]">
                <div className="w-12 h-12 rounded-xl bg-[var(--surface-hover)] border border-[var(--border)] flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-[var(--text)]" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-white mb-3">Objectives</h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                  Strategic parameters set to achieve our overarching mission and vision through measurable engineering milestones.
                </p>
             </div>

             <div className="p-10 md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 relative z-10">
                <div className="flex gap-4 items-start">
                   <div className="p-2 rounded-lg bg-[var(--surface-hover)] border border-[var(--border)] mt-1 shrink-0">
                     <Zap className="w-4 h-4 text-[var(--text)]" />
                   </div>
                   <div>
                     <h4 className="text-white font-semibold text-base mb-2">Prototype Incubation</h4>
                     <p className="text-[var(--text-dim)] text-sm leading-relaxed">Champion student-led software prototypes and facilitate startup incubation pipelines.</p>
                   </div>
                </div>
                <div className="flex gap-4 items-start">
                   <div className="p-2 rounded-lg bg-[var(--surface-hover)] border border-[var(--border)] mt-1 shrink-0">
                     <Shield className="w-4 h-4 text-[var(--text)]" />
                   </div>
                   <div>
                     <h4 className="text-white font-semibold text-base mb-2">Open-Source Security</h4>
                     <p className="text-[var(--text-dim)] text-sm leading-relaxed">Execute interdisciplinary research with a focus on resilient and secure open-source deployments.</p>
                   </div>
                </div>
                <div className="flex gap-4 items-start">
                   <div className="p-2 rounded-lg bg-[var(--surface-hover)] border border-[var(--border)] mt-1 shrink-0">
                     <Cpu className="w-4 h-4 text-[var(--text)]" />
                   </div>
                   <div>
                     <h4 className="text-white font-semibold text-base mb-2">Infrastructure Mastery</h4>
                     <p className="text-[var(--text-dim)] text-sm leading-relaxed">Provide peer-to-peer mentoring pathways focusing on DevOps, scaling, and bare-metal servers.</p>
                   </div>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
