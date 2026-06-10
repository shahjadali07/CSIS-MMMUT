"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    quote:
      "CSIS provided the exact sandboxed environment I needed. Building the interactive canvas terminal modules inside Prayukti VLab helped me demonstrate deep browser-rendering knowledge during my core interview.",
    name: "Aryan Pathak",
    designation: "Frontend Architect at Vercel · CSE Class of '24",
    src: "/team/profile_1.png",
  },
  {
    quote:
      "The academic rigor and guidance in the research division here is outstanding. Co-authoring a paper on neural quantization parameters gave me the concrete credentials needed for my Stanford graduate admission.",
    name: "Sneha Rao",
    designation: "MS Computer Science Candidate at Stanford · ECE Class of '25",
    src: "/team/profile_2.png",
  },
  {
    quote:
      "CSIS is a complete launchpad. We designed our core cap table registry prototype in a society sprint, pitched it during CSIS Founders Night, and secured $50k seed funding within three months.",
    name: "Kriti Gupta",
    designation: "Founder & CEO of LedgerFlow.ai · Alumni Class of '23",
    src: "/team/profile_3.png",
  },
  {
    quote:
      "The mentorship network at CSIS is unparalleled. My mentor connected me to a FAANG referral pipeline directly. Within six weeks of the intro I had three onsite interviews lined up simultaneously.",
    name: "Rohan Verma",
    designation: "Software Engineer at Google · CSE Class of '24",
    src: "/team/profile_4.png",
  },
  {
    quote:
      "From zero to deploying a real AI product in eight weeks — the structured project tracks, peer code reviews, and weekly demos at CSIS made what felt impossible completely achievable.",
    name: "Anika Sharma",
    designation: "ML Engineer at Cohere · AI/ML Track Graduate",
    src: "/team/profile_5.png",
  },
  {
    quote:
      "Participating in the CSIS CTF team was transformative. The weekly red-team practice sessions sharpened my skills enough to clear the OSCP certification on my first attempt.",
    name: "Dev Patel",
    designation: "Security Researcher at CrowdStrike · Cyber Security Track",
    src: "/team/profile_6.png",
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
            Alumni Voices
          </p>
          <h2 className="font-sans font-extrabold text-3xl md:text-5xl text-[var(--text)] tracking-tight">
            Success <span className="text-[var(--accent)]">Stories</span>
          </h2>
          <p className="text-[var(--text-muted)] text-sm md:text-base max-w-2xl mt-4 leading-relaxed font-normal">
            Read from our graduates who leveraged CSIS to transition from simple learning into
            global technology teams, research programs, and funded startups.
          </p>
        </div>

        {/* Animated Testimonials */}
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </section>
  );
}
