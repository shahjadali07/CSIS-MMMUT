"use client";

import { useEffect, useRef } from "react";

const architecture = [
  {
    title: "Containerization",
    desc: "Docker-based isolated lab environments ensuring clean execution for every student.",
    icon: "🐳",
  },
  {
    title: "CI/CD Pipelines",
    desc: "Automated testing and deployment workflows for rapid experimentation and stability.",
    icon: "⚙️",
  },
  {
    title: "Server Architecture",
    desc: "Robust backend infrastructure designed for high availability and low latency.",
    icon: "🖥️",
  },
  {
    title: "Scalability",
    desc: "Load balancing and elastic resources to handle peak usage during university lab hours.",
    icon: "📈",
  },
  {
    title: "Secure Sandbox",
    desc: "Restricted execution environments protecting the host system from untrusted code.",
    icon: "🛡️",
  },
];

export default function SystemArchitecture() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((r) => observer.observe(r));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="architecture" ref={sectionRef} className="relative py-32 px-6 overflow-hidden bg-[var(--bg)] border-y border-[var(--border)]">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute right-0 top-0 w-[600px] h-[400px] bg-[var(--accent)]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="reveal text-center mb-24">
          <span className="text-xs tracking-[0.3em] uppercase text-[var(--accent)] font-medium mb-4 block">
            Technical Infrastructure
          </span>
          <h2 className="font-space font-bold text-4xl md:text-6xl text-[var(--text)] mb-6">
            System <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)]">Architecture</span>
          </h2>
          <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
            A high-performance orchestration layer powering the future of virtual learning.
          </p>
        </div>

        {/* Diagram-style Layout */}
        <div className="relative group">
          {/* Central Hub Decorative Element */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-[var(--accent)]/20 bg-[var(--bg-alt)] flex items-center justify-center animate-spin-slow">
            <div className="w-16 h-16 bg-[var(--accent)]/20 rounded-full blur-xl" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {architecture.map((item, i) => (
              <div 
                key={i} 
                className={`reveal blueprint-card p-8 rounded-2xl flex flex-col gap-5 relative group ${
                  i === 4 ? "lg:col-start-2" : ""
                }`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Connector Lines (Abstracted via after/before) */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="font-space font-bold text-[var(--text)] text-xl">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* Technical badge */}
                <div className="mt-4 pt-4 border-t border-[var(--border)] flex items-center justify-between text-[10px] uppercase tracking-widest font-bold text-[var(--accent)] opacity-60">
                   <span>Enabled</span>
                   <div className="w-1.5 h-1.5 bg-[#10B981] rounded-full animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
