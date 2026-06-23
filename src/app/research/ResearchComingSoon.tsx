"use client";

import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import { FlaskConical, FileText, Lightbulb, Code2, Sparkles, ArrowRight, Microscope } from "lucide-react";
import InductionModal from "@/components/InductionModal";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 } as never,
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE } as never,
  },
};

const futureVisionData = [
  {
    title: "Research Papers",
    icon: FileText,
    desc: "In-depth academic papers exploring novel algorithms, system architectures, and theoretical computer science.",
    color: "from-blue-500/20 to-indigo-500/20",
    iconColor: "text-blue-400"
  },
  {
    title: "Technical Articles",
    icon: Lightbulb,
    desc: "Detailed technical write-ups, tutorials, and insights into modern web development, AI, and cybersecurity.",
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400"
  },
  {
    title: "Innovation Reports",
    icon: FlaskConical,
    desc: "Case studies and reports detailing the development process and outcomes of CSIS internal projects.",
    color: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400"
  },
  {
    title: "Open Source Studies",
    icon: Code2,
    desc: "Analyses of open-source contributions, repository structures, and collaborative software engineering practices.",
    color: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-400"
  }
];

export default function ResearchComingSoon() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />
      <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24 relative z-10">
        
        {/* Hero Section */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 mb-6 backdrop-blur-md">
            <Microscope className="w-4 h-4 text-[var(--accent-light)]" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--accent-light)]">
              CSIS Research Wing
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-[var(--text)] tracking-tight mb-6">
            Research & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-light)] to-[var(--accent)]">Publications</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-[var(--text-muted)] text-base md:text-lg leading-relaxed">
            We are building a platform that will showcase student research, technical papers, innovative studies, and academic contributions from the CSIS community.
          </motion.p>
        </motion.div>

        {/* Centered Coming Soon Section */}
        <motion.div 
          className="relative max-w-4xl mx-auto mb-32"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Glowing Aura */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 blur-3xl rounded-[3rem] -z-10 animate-pulse-slow" />
          
          <div className="relative overflow-hidden rounded-[2rem] bg-[var(--surface-light,rgba(255,255,255,0.02))] border border-white/10 backdrop-blur-xl p-10 md:p-16 text-center shadow-2xl flex flex-col items-center">
            <motion.div 
              className="w-24 h-24 mb-8 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center relative group"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
              <FlaskConical className="w-12 h-12 text-blue-400 relative z-10" />
              <Sparkles className="w-5 h-5 text-amber-400 absolute -top-2 -right-2 animate-pulse" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Publications Coming Soon</h2>
            <p className="text-[var(--text-muted)] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Our research repository is currently under development. Future publications, technical papers, case studies, and research contributions from CSIS members will be available here.
            </p>
          </div>
        </motion.div>

        {/* Future Vision Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-32"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Future Vision</h3>
            <p className="text-[var(--text-muted)]">What you can expect from the CSIS Research Wing</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {futureVisionData.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="premium-card relative group rounded-2xl bg-[var(--surface-light,rgba(255,255,255,0.03))] backdrop-blur-xl border border-white/10 p-8 hover:border-white/20 transition-all duration-300 overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="flex items-start justify-between mb-6 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <Icon className={`w-6 h-6 ${item.iconColor}`} />
                    </div>
                    <div className="px-3 py-1 text-[10px] font-mono font-semibold uppercase tracking-wider rounded-full bg-white/5 border border-white/10 text-[var(--text-muted)]">
                      Coming Soon
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3 relative z-10">{item.title}</h4>
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed relative z-10">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-3xl mx-auto text-center"
        >
          <div className="absolute inset-0 bg-blue-600/5 blur-3xl rounded-full -z-10" />
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Interested in Research?</h3>
          <p className="text-[var(--text-muted)] text-base md:text-lg mb-8 leading-relaxed">
            Join CSIS and become part of future research initiatives, technical publications, and innovation-driven projects.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)]"
          >
            <span>Join CSIS</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>

      <InductionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
