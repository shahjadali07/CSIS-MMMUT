"use client";

import { useEffect, useRef } from "react";

const vlabFeatures = [
  {
    icon: "🕐",
    title: "24×7 Remote Access",
    desc: "Access experiments anytime, anywhere from any device. No lab hours, no queues.",
    color: "from-indigo-500 to-blue-600",
  },
  {
    icon: "🧪",
    title: "100+ Experiments",
    desc: "Extensive library spanning CS, networking, data science, and software engineering.",
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: "🤖",
    title: "AI-Assisted Learning",
    desc: "Smart hints, automated evaluation, and personalized feedback powered by AI.",
    color: "from-cyan-500 to-teal-600",
  },
  {
    icon: "⚡",
    title: "Code Execution Engine",
    desc: "Real-time multi-language code runner with instant output and error analysis.",
    color: "from-orange-500 to-amber-600",
  },
];

export default function VLabSection() {
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
    <section id="vlab" ref={sectionRef} className="relative py-32 px-6 overflow-hidden bg-[var(--bg)] border-y border-[var(--border)]">
      {/* Bg glow */}
      <div className="absolute left-0 top-1/2 w-[600px] h-[400px] bg-[var(--accent)]/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-20">
          <span className="text-xs tracking-[0.3em] uppercase text-[var(--accent)] font-medium mb-4 block">
            Virtual Laboratory
          </span>
          <h2 className="font-space font-bold text-4xl md:text-6xl text-[var(--text)] mb-6">
            Prayukti<span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)]">-VLab</span>
          </h2>
          <p className="text-[var(--text-muted)] text-lg max-w-xl mx-auto">
            A next-generation virtual lab platform designed to make
            practical learning immersive, intelligent, and always accessible.
          </p>
        </div>

        {/* Main card */}
        <div className="reveal mb-10 blueprint-card p-8 md:p-12 relative overflow-hidden group">
          {/* Inner bg decoration */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--accent)]/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-20 w-60 h-60 bg-[var(--accent-light)]/10 rounded-full blur-[80px] pointer-events-none" />

          {/* Terminal-style header */}
          <div className="relative z-10 flex items-center gap-3 mb-8">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-[#10B981]/70" />
            </div>
            <div className="flex-1 bg-[var(--bg-alt)] border border-[var(--border)] rounded-lg px-4 py-1.5 text-xs text-[var(--text-muted)] font-mono">
              prayukti-vlab.csis.ac.in
            </div>
            <div className="px-3 py-1.5 bg-[#10B981]/10 border border-[#10B981]/30 rounded-lg text-xs text-[#10B981] font-medium">
              ● Live
            </div>
          </div>

          {/* Code snippet display */}
          <div className="relative z-10 bg-[var(--bg-alt)] border border-[var(--border)] rounded-xl p-6 font-mono text-sm mb-8 overflow-x-auto shadow-inner">
            <div className="text-[var(--accent)]">$ prayukti init experiment --lab=<span className="text-[var(--accent-light)]">cs-101</span></div>
            <div className="text-[var(--text-muted)] mt-1">Initializing virtual environment...</div>
            <div className="text-[#10B981] mt-1">✓ Docker container started (port: 8080)</div>
            <div className="text-[var(--text-muted)] mt-1">✓ Dependencies installed (32 packages)</div>
            <div className="text-[#10B981] mt-1">✓ AI evaluator connected</div>
            <div className="text-[var(--text)] mt-2">
              <span className="text-[var(--accent)]">{">"}</span> Ready. Open your experiment →{" "}
              <span className="underline text-[var(--accent)] opacity-80">http://localhost:8080</span>
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {vlabFeatures.map((feat, i) => (
            <div
              key={i}
              className="reveal blueprint-card p-6 flex flex-col gap-4 group"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br ${feat.color} bg-opacity-10 opacity-80 group-hover:opacity-100 transition-opacity`}
              >
                {feat.icon}
              </div>
              <div>
                <h3 className="font-space font-semibold text-[var(--text)] text-base mb-2">
                  {feat.title}
                </h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
