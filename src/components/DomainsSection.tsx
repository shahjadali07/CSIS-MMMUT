"use client";

import { motion } from "framer-motion";
import { Globe, Brain, ShieldAlert, Terminal, Atom, Rocket, ArrowRight } from "lucide-react";

const domains = [
  {
    icon: Globe,
    title: "Web Development",
    desc: "Full-stack application engineering, cloud integration, state machines, and real-time distributed systems.",
    tag: "Full Stack",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    desc: "Neural network design, deep reinforcement learning, natural language processors, and predictive modeling.",
    tag: "Neural",
  },
  {
    icon: ShieldAlert,
    title: "Cyber Security",
    desc: "Ethical hacking, penetration frameworks, cryptography, network forensics, and virtual vulnerability labs.",
    tag: "Security",
  },
  {
    icon: Terminal,
    title: "Algorithms",
    desc: "Algorithm design, structural mathematics, rapid problem-solving, and efficient complexity optimization.",
    tag: "Code",
  },
  {
    icon: Atom,
    title: "Research",
    desc: "Academic publications, virtual laboratory simulations, hardware prototyping, and novel computing research.",
    tag: "Theory",
  },
  {
    icon: Rocket,
    title: "Startups",
    desc: "Product incubation, business model canvas, venture capital pitching, and scaling minimal viable models.",
    tag: "Venture",
  },
];

export default function DomainsSection() {
  return (
    <section id="domains" className="relative py-32 px-6 overflow-hidden">
      
      <div className="absolute right-0 bottom-0 w-[600px] h-[400px] bg-[var(--accent)] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.03em] leading-tight text-white mb-4">
            Our domain <span className="text-[var(--text-dim)]">ecosystem.</span>
          </h2>
          <p className="text-[var(--text-muted)] text-base md:text-lg leading-relaxed">
            CSIS operates across six interdisciplinary R&D domains. We build, research, and ship in these core areas.
          </p>
        </div>

        {/* Linear Domain Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Featured Large Domain */}
          {domains.slice(0, 1).map((domain) => {
            const Icon = domain.icon;
            return (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="md:col-span-5 linear-card p-10 flex flex-col justify-between min-h-[340px] cursor-pointer group"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl bg-[var(--surface-hover)] border border-[var(--border)] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[var(--text)]" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-medium border border-[var(--border)] bg-[var(--surface-hover)] text-[var(--text-muted)]">
                      {domain.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{domain.title}</h3>
                  <p className="text-[var(--text-muted)] text-base leading-relaxed">{domain.desc}</p>
                </div>

                <div className="mt-8 flex items-center gap-2 text-sm font-medium text-[var(--text)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore curriculum <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            );
          })}

          {/* Medium Domains */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {domains.slice(1, 3).map((domain, i) => {
              const Icon = domain.icon;
              return (
                <motion.div
                  key={domain.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                  className="linear-card p-8 flex flex-col justify-between min-h-[280px] cursor-pointer"
                >
                  <div>
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-10 h-10 rounded-xl bg-[var(--surface-hover)] border border-[var(--border)] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[var(--text-muted)]" />
                      </div>
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-medium border border-[var(--border)] bg-[var(--surface-hover)] text-[var(--text-muted)]">
                        {domain.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{domain.title}</h3>
                    <p className="text-[var(--text-muted)] text-sm leading-relaxed">{domain.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Domains */}
          {domains.slice(3).map((domain, i) => {
            const Icon = domain.icon;
            return (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                className="md:col-span-4 linear-card p-8 flex flex-col justify-between min-h-[240px] cursor-pointer"
              >
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[var(--surface-hover)] border border-[var(--border)] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[var(--text-muted)]" />
                    </div>
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-medium border border-[var(--border)] bg-[var(--surface-hover)] text-[var(--text-muted)]">
                      {domain.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight">{domain.title}</h3>
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed line-clamp-3">{domain.desc}</p>
                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
