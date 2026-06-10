"use client";

import { useEffect, useRef } from "react";

const analyticsFeatures = [
  {
    title: "Performance Tracking",
    desc: "Real-time dashboards for students to visualize their learning curve and technical growth.",
    icon: "📈",
  },
  {
    title: "Experiment Progress",
    desc: "Detailed logs of completed experiments, time spent, and successful code executions.",
    icon: "🧪",
  },
  {
    title: "Faculty Insights",
    desc: "Aggregated analytics for faculty to identify class-wide trends and individual student needs.",
    icon: "👥",
  },
  {
    title: "Skill Mapping",
    desc: "Algorithmic mapping of completed virtual labs to industry-standard technical competencies.",
    icon: "🗺️",
  },
];

export default function AnalyticsSection() {
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
    <section id="analytics" ref={sectionRef} className="relative py-32 px-6 overflow-hidden bg-[var(--bg)] border-y border-[var(--border)]">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent)]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="reveal text-center mb-20">
          <span className="text-xs tracking-[0.3em] uppercase text-[var(--accent)] font-medium mb-4 block">
            Data-Driven Learning
          </span>
          <h2 className="font-space font-bold text-4xl md:text-6xl text-[var(--text)] mb-6">
            Student Progress & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)]">Analytics</span>
          </h2>
          <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
            Empowering students and faculty with deep insights into the learning lifecycle through advanced data visualization.
          </p>
        </div>

        {/* Mock Dashboard UI */}
        <div className="reveal mb-16 blueprint-card p-8 md:p-12 relative overflow-hidden group">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--bg-alt)] border border-[var(--border)] rounded-full text-[10px] text-[var(--text-muted)] tracking-widest uppercase font-bold">
                    <span className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse" /> Live Dashboard Preview
                 </div>
                 <h3 className="font-space font-bold text-3xl text-[var(--text)]">
                    Measure. Improve. <span className="text-[var(--accent)]">Excel.</span>
                 </h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {analyticsFeatures.map((feat, i) => (
                       <div key={i} className="flex gap-4">
                          <div className="text-2xl">{feat.icon}</div>
                          <div>
                             <h4 className="text-[var(--text)] font-bold text-sm mb-1">{feat.title}</h4>
                             <p className="text-[var(--text-muted)] text-xs leading-relaxed">{feat.desc}</p>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>

              {/* Mock Charts */}
              <div className="relative bg-[var(--bg-alt)] border border-[var(--border)] p-6 rounded-2xl rotate-1 group-hover:rotate-0 transition-transform duration-500 shadow-xl shadow-blue-900/5">
                 <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-widest">Global Activity (24h)</span>
                    <div className="flex gap-2">
                       <div className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                       <div className="w-2 h-2 rounded-full bg-[var(--accent-light)]" />
                    </div>
                 </div>
                 <div className="h-48 flex items-end gap-2 px-2">
                    {[35, 65, 45, 85, 55, 75, 95, 65, 45, 70, 80, 60].map((h, i) => (
                       <div 
                         key={i} 
                         className="flex-1 bg-gradient-to-t from-[var(--accent)]/40 to-[var(--accent)]/80 rounded-t-sm hover:translate-y-[-5px] transition-transform duration-300" 
                         style={{ height: `${h}%` }}
                       />
                    ))}
                 </div>
                 <div className="mt-6 p-4 rounded-xl bg-[var(--bg)] border border-[var(--border)] flex justify-between items-center">
                    <div className="text-xs text-[var(--text-muted)] font-medium">Session Success Rate</div>
                    <div className="text-[var(--accent)] font-bold">98.4%</div>
                 </div>
              </div>
           </div>
        </div>

        {/* Feature Highlights */}
        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="blueprint-card p-6 text-center">
              <div className="text-3xl font-bold text-[var(--text)] mb-2">15k+</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--accent)] font-bold">Monthly Lab Sessions</div>
           </div>
           <div className="blueprint-card p-6 text-center">
              <div className="text-3xl font-bold text-[var(--text)] mb-2">850ms</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--accent)] font-bold">Avg. Code Eval Speed</div>
           </div>
           <div className="blueprint-card p-6 text-center">
              <div className="text-3xl font-bold text-[var(--text)] mb-2">99.9%</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--accent)] font-bold">Platform Availability</div>
           </div>
        </div>
      </div>
    </section>
  );
}
