"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Users, FolderGit2, Presentation, FileText, Landmark } from "lucide-react";

const stats = [
  { value: 200, suffix: "+", label: "Active Members", icon: Users },
  { value: 7, suffix: "+", label: "Projects Shipped", icon: FolderGit2 },
  { value: 0, suffix: "+", label: "Workshops", icon: Presentation },
  { value: 15, suffix: "+", label: "Research Papers", icon: FileText },
  { value: 5, suffix: "+", label: "Funded Startups", icon: Landmark },
];

function useCounter(target: number, duration: number, visible: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else { setCount(Math.floor(start)); }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, visible]);
  return count;
}

function StatCard({ stat, visible, delay }: { stat: typeof stats[0]; visible: boolean; delay: number }) {
  const count = useCounter(stat.value, 1800, visible);
  const Icon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="linear-card flex flex-col items-start p-8"
    >
      <div className="w-10 h-10 rounded-xl bg-[var(--surface-hover)] border border-[var(--border)] flex items-center justify-center mb-6">
        <Icon className="w-5 h-5 text-[var(--text-muted)]" />
      </div>

      <div className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-2">
        {count.toLocaleString()}
        <span className="text-[var(--text-muted)] ml-1">{stat.suffix}</span>
      </div>

      <div className="text-[var(--text-muted)] font-medium text-sm">
        {stat.label}
      </div>
    </motion.div>
  );
}

export default function StatsSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 px-6 overflow-hidden bg-[var(--bg)]">
      <div className="absolute inset-0 noise-bg opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.03em] leading-tight text-white mb-4">
            Our impact <span className="text-[var(--text-dim)]">by the numbers.</span>
          </h2>
          <p className="text-[var(--text-muted)] text-base leading-relaxed">
            Quantified output from over four years of continuous operation, community building, and shipping production-grade software.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} visible={visible} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
