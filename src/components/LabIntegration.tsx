"use client";

import { useEffect, useRef } from "react";

const integrations = [
  {
    name: "AI Centre of Excellence",
    focus: "Deep Learning & NLP",
    sync: "Real-time GPU scheduling for VLab neural network training.",
    icon: "🧠",
  },
  {
    name: "Digital Forensics Lab",
    focus: "Cyber Investigation",
    sync: "Secure sandboxing for malware analysis and recovery experiments.",
    icon: "🔍",
  },
  {
    name: "Big Data Lab",
    focus: "Distributed Computing",
    sync: "Direct HDFS cluster integration for massive-scale data processing.",
    icon: "☁️",
  },
  {
    name: "Digital Twin Lab",
    focus: "Sensing & Simulation",
    sync: "IoT sensor streams mapped to virtual lab simulation environments.",
    icon: "🏙️",
  },
];

export default function LabIntegration() {
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
    <section id="integration" ref={sectionRef} className="relative py-32 px-6 overflow-hidden bg-[var(--bg)] border-y border-[var(--border)]">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent)]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="reveal text-center mb-24">
          <span className="text-xs tracking-[0.3em] uppercase text-[var(--accent)] font-medium mb-4 block">
            Synergy & Collaboration
          </span>
          <h2 className="font-space font-bold text-4xl md:text-6xl text-[var(--text)] mb-6">
            Integration with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)]">University Labs</span>
          </h2>
          <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
            Optimizing academic resources through shared infrastructure and collaborative technical pipelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {integrations.map((lab, i) => (
            <div 
              key={i} 
              className="reveal"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="blueprint-card p-10 group flex flex-col md:flex-row gap-8 items-center md:items-start border border-[var(--border)]">
                <div className="w-20 h-20 shrink-0 rounded-2xl bg-[var(--bg-alt)] flex items-center justify-center text-4xl group-hover:scale-110 group-hover:bg-[var(--accent)]/10 transition-all duration-500 shadow-xl border border-[var(--accent)]/20">
                  {lab.icon}
                </div>
                <div className="text-center md:text-left">
                  <div className="text-[var(--accent)] font-bold text-xs uppercase tracking-widest mb-2">
                    {lab.focus}
                  </div>
                  <h3 className="font-space font-bold text-[var(--text)] text-2xl mb-4">
                    {lab.name}
                  </h3>
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6">
                    {lab.sync}
                  </p>
                  
                  {/* Performance stats mock */}
                  <div className="flex gap-4 items-center">
                    <div className="h-1 w-full bg-[var(--border)] rounded-full overflow-hidden">
                       <div className="h-full bg-[var(--accent)] w-3/4 rounded-full" />
                    </div>
                    <span className="text-[10px] text-[var(--text-muted)] whitespace-nowrap font-bold">RESOURCE LOAD: 75%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note about resource optimization */}
        <div className="reveal mt-16 p-8 bg-[var(--bg-alt)] border border-[var(--border)] rounded-2xl text-center">
           <p className="text-[var(--text-muted)] font-medium">
             ⚡ <span className="text-[var(--accent)]">Architecture Insight:</span> By virtualizing access to specialized laboratory hardware, we've increased student throughput by <span className="text-[var(--text)] font-bold">450%</span> while reducing physical maintenance costs.
           </p>
        </div>
      </div>
    </section>
  );
}
