"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

/* ── Inline SVG brand icons (lucide-react v1.x removed Github/Linkedin) ── */
const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

type SocialIcon = "github" | "linkedin" | "twitter" | "globe";

type Member = {
  name: string;
  role: string;
  image: string;
  style: "slide" | "flip";
  socials: { icon: SocialIcon; href: string }[];
};

const IconMap: Record<SocialIcon, React.FC> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  twitter: XIcon,
  globe: GlobeIcon,
};

const members: Member[] = [

  {
    name: "Arjun Sharma",
    role: "President",
    image: "/team/profile_1.png",
    //style: "slide",
    style: "flip",
    socials: [
      { icon: "github", href: "#" },
      { icon: "linkedin", href: "#" },
      { icon: "twitter", href: "#" },
      { icon: "globe", href: "#" },
    ],
  },
  {
    name: "Priya Mehta",
    role: "Vice President",
    image: "/team/profile_2.png",
    style: "flip",
    socials: [
      { icon: "github", href: "#" },
      { icon: "linkedin", href: "#" },
      { icon: "twitter", href: "#" },
      { icon: "globe", href: "#" },
    ],
  },
  {
    name: "Rahul Verma",
    role: "Tech Lead",
    image: "/team/profile_3.png",
    style: "slide",
    socials: [
      { icon: "github", href: "#" },
      { icon: "linkedin", href: "#" },
      { icon: "twitter", href: "#" },
      { icon: "globe", href: "#" },
    ],
  },
  {
    name: "Ananya Singh",
    role: "Design Lead",
    image: "/team/profile_4.png",
    style: "flip",
    socials: [
      { icon: "github", href: "#" },
      { icon: "linkedin", href: "#" },
      { icon: "twitter", href: "#" },
      { icon: "globe", href: "#" },
    ],
  },
  {
    name: "Kiran Patel",
    role: "Research Head",
    image: "/team/profile_5.png",
    style: "slide",
    socials: [
      { icon: "github", href: "#" },
      { icon: "linkedin", href: "#" },
      { icon: "twitter", href: "#" },
      { icon: "globe", href: "#" },
    ],
  },
  {
    name: "Shreya Joshi",
    role: "Events Lead",
    image: "/team/profile_6.png",
    style: "flip",
    socials: [
      { icon: "github", href: "#" },
      { icon: "linkedin", href: "#" },
      { icon: "twitter", href: "#" },
      { icon: "globe", href: "#" },
    ],
  },
];

export default function TeamSection() {
  return (
    <section
      id="team"
      className="relative py-28 px-6 bg-[var(--bg-alt)] border-t border-[var(--border)] overflow-hidden"
    >
      <div className="absolute inset-0 bg-mesh opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-mono text-[var(--accent)] uppercase tracking-widest mb-3">
            The People
          </p>
          <h2 className="font-sans font-extrabold text-3xl md:text-5xl text-[var(--text)] tracking-tight">
            Meet the <span className="text-[var(--accent)]">Team</span>
          </h2>
          <p className="text-[var(--text-muted)] text-sm md:text-base max-w-2xl mt-4 leading-relaxed font-normal">
            The brilliant minds driving CSIS forward — builders, researchers, and
            innovators dedicated to pushing boundaries.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {members.map((member, i) => {
            const isFlip = member.style === "flip";
            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className={`team-card${isFlip ? " flip-card" : ""}`}>
                  {/* Photo */}
                  <div className="tc-image">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>

                  {/* Social Icons */}
                  <ul
                    className="tc-socials"
                    style={{ listStyle: "none", padding: 0, margin: 0 }}
                  >
                    {member.socials.map((s, si) => {
                      const Icon = IconMap[s.icon];
                      return (
                        <li key={si}>
                          <a
                            href={s.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={s.icon}
                          >
                            <Icon />
                          </a>
                        </li>
                      );
                    })}
                  </ul>

                  {/* Details Bar */}
                  <div className="tc-details">
                    <h3>{member.name}</h3>
                    <span>{member.role}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
