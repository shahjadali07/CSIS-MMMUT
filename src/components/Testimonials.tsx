"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    quote:
      "Establishing CSIS at MMMUT has been about creating an ecosystem where students can transition from passive learners to active creators. By building Virtual Labs and deploying digital systems, we show what students can achieve when given true project ownership.",
    name: "Suyash Shukla",
    designation: "President, CSIS · CSE Class of '26",
    src: "/team/suyash.jpeg",
  },
  {
    quote:
      "CSIS bridges the gap between academic theory and practical software engineering. Collaborating with peers on real-world tickets and open-source contributions teaches students teamwork, version control, and actual development cycles.",
    name: "Shailendra Mani Pandey",
    designation: "Vice President, CSIS · CSE Class of '26",
    src: "/team/shailendraManipandey.jpg",
  },
  {
    quote:
      "The peer environment in CSIS is unmatched. You aren't just sitting in a lecture; you are brainstorming, designing architectures, and debugging with other students who are equally passionate about technology.",
    name: "Kartikey Singh",
    designation: "CSIS Core Member · CSE Class of '26",
    src: "/team/kartikey.jpeg",
  },
  {
    quote:
      "In CSIS, we have the freedom to explore emerging technologies like AI, WebGPU, and RAG architectures. Having a dedicated community to build projects and share research insights makes learning incredibly fast and rewarding.",
    name: "Divyanshu Nath Tripathi",
    designation: "CSIS Core Member · CSE Class of '26",
    src: "/team/divyanshu.jpeg",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-28 px-6 bg-[var(--bg)] border-t border-[var(--border)] overflow-hidden"
    >
      <div className="absolute inset-0 dot-pattern opacity-10" />
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-mono text-[var(--accent)] uppercase tracking-widest mb-3">
            Member Voices
          </p>
          <h2 className="font-sans font-extrabold text-3xl md:text-5xl text-[var(--text)] tracking-tight">
            CSIS <span className="text-[var(--accent)]">Thoughts</span>
          </h2>
          <p className="text-[var(--text-muted)] text-sm md:text-base max-w-2xl mt-4 leading-relaxed font-normal">
            Hear from our members who collaborate, build projects, maintain systems, and drive the CSIS tech ecosystem.
          </p>
        </div>

        {/* Animated Testimonials */}
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </section>
  );
}
