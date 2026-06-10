"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    title: "Annual Recruitment",
    desc: "Application window opens for students across all departments interested in innovation and tech.",
    icon: "📅",
  },
  {
    title: "Technical Assessment",
    desc: "Rigorous technical tests covering programming, system design, and specialized domain knowledge.",
    icon: "📝",
  },
  {
    title: "Personal Interviews",
    desc: "In-depth discussions with society leads to evaluate mindset, collaboration, and aspirations.",
    icon: "💬",
  },
  {
    title: "Role-Based Selection",
    desc: "Strategic placement into specialized teams based on strengths, results, and project requirements.",
    icon: "🎯",
  },
  {
    title: "Faculty Guidance",
    desc: "Final validation and mentorship assignment guided by our expert departmental faculty.",
    icon: "🎓",
  },
];

export default function InductionProcess() {
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
    <section id="induction" ref={sectionRef} className="relative py-32 px-6 overflow-hidden bg-[var(--bg)] border-y border-[var(--border)]">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--accent)]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="reveal text-center mb-24">
          <span className="text-xs tracking-[0.3em] uppercase text-[var(--accent)] font-medium mb-4 block">
            Join the Society
          </span>
          <h2 className="font-space font-bold text-4xl md:text-6xl text-[var(--text)] mb-6">
            Induction <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)]">Process</span>
          </h2>
          <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
            Our structured entry pipeline ensures we bring in the most passionate and capable minds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative items-start">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent" />

          {steps.map((step, i) => (
            <div 
              key={i} 
              className="reveal flex flex-col items-center text-center relative z-10"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {/* Step Number/Icon */}
              <div className="w-16 h-16 rounded-full bg-[var(--bg-alt)] border border-[var(--accent)]/30 flex items-center justify-center text-2xl mb-8 group hover:border-[var(--accent)]/60 transition-all duration-300 shadow-[0_0_20px_var(--accent-shadow)]">
                {step.icon}
                <div className="absolute -top-2 -right-2 w-7 h-7 bg-[var(--accent)] rounded-full flex items-center justify-center text-[10px] font-bold text-white border-2 border-[var(--bg)]">
                  0{i + 1}
                </div>
              </div>

              {/* Content */}
              <h3 className="font-space font-bold text-[var(--text)] text-xl mb-4">
                {step.title}
              </h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed px-4">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="reveal mt-20 text-center">
          <button className="px-10 py-4 rounded-xl border border-[var(--accent)]/30 hover:border-[var(--accent)] text-[var(--accent)] transition-all bg-[var(--bg-alt)] hover:bg-[var(--accent)]/5 font-bold">
            View Current Openings →
          </button>
        </div>
      </div>
    </section>
  );
}
