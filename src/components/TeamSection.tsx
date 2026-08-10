"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

/* -- Inline SVG brand icons -- */
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

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

type SocialIcon = "github" | "linkedin" | "twitter" | "globe" | "instagram";

type Member = {
  name: string;
  role: string;
  image: string;
  thought: string;
  socials: { icon: SocialIcon; href: string }[];
};

const IconMap: Record<SocialIcon, React.FC> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  twitter: XIcon,
  globe: GlobeIcon,
  instagram: InstagramIcon,
};

const leaders: Member[] = [
  {
    name: "Suyash Shukla",
    role: "President",
    image: "/team/suyash.jpeg",
    thought: "Building a strong technical community at MMMUT where students don't just learn, but actively collaborate, innovate, and build systems that make a difference.",
    socials: [
      { icon: "github", href: "https://www.github.com/HeyItsSuyash" },
      { icon: "linkedin", href: "https://www.linkedin.com/in/HeyItsSuyash" },
      { icon: "globe", href: "https://www.suyashshukla.com" },
      { icon: "instagram", href: "https://www.instagram.com/heyitssuyash/" },
    ],
  },
  {
    name: "Shailendra Mani Pandey",
    role: "Vice President",
    image: "/team/shailendraManipandey.jpg",
    thought: "CSIS is about ownership. It gives every student the platform to turn their ideas into working solutions while learning from peer mentorship.",
    socials: [
      { icon: "github", href: "https://github.com/mani0408x" },
      { icon: "linkedin", href: "https://www.linkedin.com/in/shailendramanipandey" },
      { icon: "globe", href: "#" },
      { icon: "instagram", href: "https://www.instagram.com/mani0408x/" },
    ],
  },
];

const members: Member[] = [
  {
    name: "Govind Verma",
    role: "CSIS Member",
    image: "/team/goving.jpeg",
    thought: "Hands-on projects and open source contribution are the core of technical growth. In CSIS, we challenge ourselves to solve real-world problems.",
    socials: [
      { icon: "github", href: "https://github.com/Govind-Verma07" },
      { icon: "linkedin", href: "https://www.linkedin.com/in/govindverma07/" },
      { icon: "globe", href: "#" },
      { icon: "instagram", href: "#" },
    ],
  },
  {
    name: "Divyanshu Nath Tripathi",
    role: "CSIS Member",
    image: "/team/divyanshu.jpeg",
    thought: "Being part of CSIS means constantly learning and sharing. The peer community here accelerates our understanding of complex software architectures.",
    socials: [
      { icon: "github", href: "https://github.com/DivyanshuNathTripathi" },
      { icon: "linkedin", href: "https://www.linkedin.com/in/divyanshu-nath-tripathi-774773334/" },
      { icon: "globe", href: "https://divyanshu-portfolio-lovat.vercel.app/" },
      { icon: "instagram", href: "https://www.instagram.com/_divyanshu89_" },
    ],
  },
  {
    name: "Ankur Kumar",
    role: "CSIS Member",
    image: "/team/ankur.jpeg",
    thought: "Experimenting with new tools and building digital solutions is incredibly exciting when you have a supportive team to collaborate with.",
    socials: [
      { icon: "github", href: "https://github.com/ankurmadheshiya" },
      { icon: "linkedin", href: "https://www.linkedin.com/in/ankur-kumar-983203350/" },
      { icon: "globe", href: "#" },
      { icon: "instagram", href: "https://www.instagram.com/iam_ankur1/" },
    ],
  },
  {
    name: "Vaibhav Singh",
    role: "CSIS Member",
    image: "/team/vaibhavSingh.jpeg",
    thought: "CSIS is a space where theoretical computer science meets actual deployment. We build, break, and rebuild together.",
    socials: [
      { icon: "github", href: "https://github.com/vaibhav3210singh" },
      { icon: "linkedin", href: "https://www.linkedin.com/in/vaibhav-singh-894741345/" },
      { icon: "globe", href: "#" },
      { icon: "instagram", href: "https://www.instagram.com/vaibhav_singh._._/" },
    ],
  },
  {
    name: "Kartikey Singh",
    role: "CSIS Member",
    image: "/team/kartikey.jpeg",
    thought: "Collaboration is our superpower. From organizing events to writing code, CSIS teaches you how to coordinate and create impact.",
    socials: [
      { icon: "github", href: "https://github.com/singhkartikey1310" },
      { icon: "linkedin", href: "https://www.linkedin.com/in/singhkartikey1305" },
      { icon: "globe", href: "#" },
      { icon: "instagram", href: "#" },
    ],
  },
  {
    name: "Shahjad Ali",
    role: "CSIS Member",
    image: "/team/shahjad.jpeg",
    thought: "Maintaining Virtual Labs and developing software solutions gives us a sense of ownership and prepares us for engineering challenges.",
    socials: [
      { icon: "github", href: "https://github.com/shahjadali07" },
      { icon: "linkedin", href: "https://www.linkedin.com/in/alishajju74/" },
      { icon: "globe", href: "https://shahjadali.netlify.app/" },
      { icon: "instagram", href: "https://www.instagram.com/shahjad.pvt_" },
    ],
  },
  {
    name: "Riya Rani",
    role: "CSIS Member",
    image: "/team/riya.jpeg",
    thought: "CSIS is not just about code; it's a technical ecosystem. It helps first-year students find guidance and start their building journey early.",
    socials: [
      { icon: "github", href: "https://github.com/riya-46/" },
      { icon: "linkedin", href: "https://www.linkedin.com/in/riya-46-rani/" },
      { icon: "globe", href: "#" },
      { icon: "instagram", href: "https://www.instagram.com/_riya6_/" },
    ],
  },
];

function TeamMemberCard({ member }: { member: Member }) {
  const [isFlipped, setIsFlipped] = useState(false);

  // Filter out empty/dummy links
  const activeSocials = member.socials.filter(
    (s) => s.href && s.href !== "#" && !s.href.endsWith("/#")
  );

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className={`team-card-container ${isFlipped ? "flipped" : ""}`}
      aria-label={`Team member ${member.name}. Press Enter or click to flip and read details.`}
    >
      <div className="team-card-inner">
        {/* Front side */}
        <div className="team-card-front">
          <div className="tc-image-wrapper">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover object-top"
              priority
            />
          </div>
          <div className="tc-details-overlay">
            <h3>{member.name}</h3>
            <span>{member.role}</span>
          </div>
        </div>

        {/* Back side */}
        <div className="team-card-back">
          <div className="flex flex-col h-full justify-between">
            <div className="flex-1 flex flex-col justify-center text-center">
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block mb-4">
                CSIS Thought
              </span>
              <p className="text-[#1f2937] text-sm md:text-base leading-relaxed italic px-2">
                "{member.thought}"
              </p>
            </div>

            {activeSocials.length > 0 && (
              <div className="tc-socials-wrapper" onClick={(e) => e.stopPropagation()}>
                {activeSocials.map((s, si) => {
                  const Icon = IconMap[s.icon];
                  return (
                    <a
                      key={si}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${member.name}'s ${s.icon}`}
                      className="tc-social-btn"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TeamSection() {
  return (
    <section
      id="team"
      className="relative py-28 px-6 bg-[var(--bg-alt)] border-t border-[var(--border)] overflow-hidden"
    >
      <div className="absolute inset-0 bg-mesh opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="font-space font-extrabold text-4xl md:text-6xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 mb-6 drop-shadow-md pb-2">
            Meet the Minds Behind CSIS
          </h2>
          <p className="text-[var(--text-muted)] text-base md:text-lg max-w-2xl leading-relaxed mt-4 font-normal">
            A group of passionate student builders, developers, and designers taking ownership of computational projects at MMMUT.
          </p>
        </div>

        {/* First Row Layout: Leader - Quote - Leader */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 items-stretch justify-items-center w-full">
          {/* President */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center w-full"
          >
            <TeamMemberCard member={leaders[0]} />
          </motion.div>

          {/* Core Quote Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center w-full h-full p-8 rounded-3xl border border-[var(--border)] bg-gradient-to-b from-[var(--surface)] to-[var(--bg)] shadow-[0_0_40px_rgba(37,99,235,0.05)] overflow-hidden group min-h-[200px]"
          >
            <div className="absolute inset-0 bg-[var(--accent)] opacity-0 group-hover:opacity-5 transition-opacity duration-700 pointer-events-none" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--accent)] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />

            <p className="relative z-10 text-[var(--text-muted)] text-sm md:text-base leading-relaxed text-center italic font-medium">
              "We take ownership of technology, building tools and platforms that help students learn, collaborate, and push the limits of structured computer science engineering."
            </p>
          </motion.div>

          {/* Vice President */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center w-full"
          >
            <TeamMemberCard member={leaders[1]} />
          </motion.div>
        </div>

        {/* Second Row Layout: 3 Members */}
        <div className="flex flex-wrap justify-center gap-8 mb-8 w-full">
          {members.slice(0, 3).map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex justify-center w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-[280px]"
            >
              <TeamMemberCard member={member} />
            </motion.div>
          ))}
        </div>

        {/* Third Row Layout: 4 Members */}
        <div className="flex flex-wrap justify-center gap-8 w-full">
          {members.slice(3, 7).map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i + 3) * 0.1 }}
              className="flex justify-center w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] max-w-[280px]"
            >
              <TeamMemberCard member={member} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
