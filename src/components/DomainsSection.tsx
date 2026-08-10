"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Network, 
  FlaskConical, 
  Users, 
  Landmark, 
  HeartHandshake, 
  Code2, 
  Lightbulb, 
  Coins,
  ArrowRight,
  BrainCircuit
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Domain = {
  title: string;
  desc: string;
  icon: any;
  image: string;
  gradient: string;
  color: string;
  telemetry: string;
  focusPoints: string[];
  ctaText: string;
  ctaLink: string;
};

const domainsData: Domain[] = [
  {
    title: "Development & Technology",
    desc: "Creating an environment where ideas are transformed into production-grade software solutions. Members collaborate on coding, system design, testing, and continuous deployment.",
    icon: Code2,
    image: "/images/domains/dev.jpg",
    gradient: "from-violet-500/20 to-purple-500/20",
    color: "text-violet-400",
    telemetry: "SYS.DEV // CODEBASE",
    focusPoints: ["Web & App Development", "Agile Sprints & Workspaces", "CI/CD & Open Source Sprints"],
    ctaText: "Explore Projects",
    ctaLink: "/projects",
  },
  {
    title: "Research & Innovation",
    desc: "Encouraging students to explore emerging technologies, investigate computational problems, and draft technical papers under faculty guidance.",
    icon: FlaskConical,
    image: "/images/domains/research.png",
    gradient: "from-purple-500/20 to-pink-500/20",
    color: "text-purple-400",
    telemetry: "SYS.RES // COMPILER",
    focusPoints: ["Academic Paper Drafts", "Emerging Tech Auditing", "Quantitative Trials"],
    ctaText: "View Opportunities",
    ctaLink: "/research",
  },
  {
    title: "Networking & Visibility",
    desc: "Connecting students with industry professionals, alumni, and external technical communities to showcase talents and build robust profiles.",
    icon: Network,
    image: "/images/domains/networking.png",
    gradient: "from-blue-500/20 to-cyan-500/20",
    color: "text-blue-400",
    telemetry: "SYS.NET // EXPANSION",
    focusPoints: ["Alumni Referrals", "Professional Networking", "Technical Showcases"],
    ctaText: "Meet the Team",
    ctaLink: "/team",
  },
  {
    title: "Student Ecosystem",
    desc: "Fostering a supportive peer learning environment where seniors guide juniors in development, design, and foundational computer science principles.",
    icon: Users,
    image: "/images/domains/student.jpg",
    gradient: "from-emerald-500/20 to-teal-500/20",
    color: "text-emerald-400",
    telemetry: "SYS.ECO // DIRECTORY",
    focusPoints: ["Peer-to-Peer Mentoring", "Structured Study Tracks", "Skill Assessments"],
    ctaText: "Read Insights",
    ctaLink: "/blogs",
  },
  {
    title: "University Administration",
    desc: "Developing digital support applications and automation utilities that assist in campus operations, learning delivery, and student activities.",
    icon: Landmark,
    image: "/images/domains/admin.jpg",
    gradient: "from-amber-500/20 to-orange-500/20",
    color: "text-amber-400",
    telemetry: "SYS.ADM // CAMPUS",
    focusPoints: ["Campus Operations Tools", "Prayukti Integration", "University Utilities"],
    ctaText: "Explore Projects",
    ctaLink: "/projects",
  },
  {
    title: "Community & Collaboration",
    desc: "Organizing technical events, workshops, guest lectures, and coding competitions to keep the student body engaged and growing.",
    icon: HeartHandshake,
    image: "/images/domains/community.jpg",
    gradient: "from-rose-500/20 to-red-500/20",
    color: "text-rose-400",
    telemetry: "SYS.COM // ACTIVITIES",
    focusPoints: ["Hackathons & Sprints", "Code Competitions", "Interactive Workshops"],
    ctaText: "Stay in Touch",
    ctaLink: "/contact",
  },
  {
    title: "Expert Mentorship",
    desc: "Connecting student developers with senior researchers, industry veterans, and faculty to align projects with real-world standards.",
    icon: Lightbulb,
    image: "/images/domains/mentorship.png",
    gradient: "from-teal-500/20 to-emerald-500/20",
    color: "text-teal-400",
    telemetry: "SYS.MNT // GUIDANCE",
    focusPoints: ["Professional Audits", "Direct Referral Pipelines", "Career Guidance"],
    ctaText: "Meet Our Advisors",
    ctaLink: "/#mentors",
  },
  {
    title: "Funding Opportunity",
    desc: "Providing guidance on patent filing, incubations, and aligning promising student projects with startup funding avenues.",
    icon: Coins,
    image: "/images/domains/funding.png",
    gradient: "from-yellow-500/20 to-amber-500/20",
    color: "text-yellow-400",
    telemetry: "SYS.FND // AUDIT",
    focusPoints: ["Intellectual Property Guidelines", "Venture Presentation Prep", "Incubation Avenues"],
    ctaText: "Contact Us",
    ctaLink: "/contact",
  },
];

export default function DomainsSection() {
  const [activeDomain, setActiveDomain] = useState<number>(0);
  const activeData = domainsData[activeDomain];
  const IconActive = activeData.icon;

  return (
    <section id="domains" className="relative py-28 px-6 overflow-hidden bg-transparent border-t border-white/5">
      
      {/* Ecosystem lines decoration (Subtle) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] hidden lg:block">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
            </radialGradient>
          </defs>
          <path
            d="M 50 50 L 10 20 M 50 50 L 90 20 M 50 50 L 10 80 M 50 50 L 90 80 M 50 50 L 50 10 M 50 50 L 50 90"
            stroke="url(#hubGlow)"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="5 10"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 mb-6 backdrop-blur-md">
            <BrainCircuit className="w-4 h-4 text-blue-400 animate-pulse" />
            <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-blue-400">
              Domain Hub
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Ecosystem <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Domains</span>
          </h2>
          <p className="text-[var(--text-muted)] text-base md:text-lg leading-relaxed">
            CSIS operates across these key technical domains to provide students with learning, coordination, and ownership channels.
          </p>
        </div>

        {/* Nodes Selection Bar */}
        <div className="relative mb-12 border border-white/10 bg-[#050505] rounded-2xl p-6 md:p-8 flex flex-col items-center select-none overflow-hidden shadow-2xl">

          <div className="relative z-10 w-full grid grid-cols-4 lg:flex lg:flex-row items-center justify-between gap-6">
            {domainsData.map((d, idx) => {
              const isSelected = activeDomain === idx;
              const IconComponent = d.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center">
                  <button
                    onClick={() => setActiveDomain(idx)}
                    className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-300 relative z-20 overflow-hidden ${
                      isSelected
                        ? "bg-blue-600/20 border-blue-500 shadow-lg shadow-blue-500/30 scale-110"
                        : "bg-[var(--surface)] border-white/10 hover:border-blue-500/40 text-gray-400 hover:text-white"
                    }`}
                    aria-label={d.title}
                  >
                    <IconComponent className={`w-6 h-6 transition-colors ${isSelected ? "text-blue-400" : "text-gray-400 group-hover:text-white"}`} />
                    {isSelected && (
                      <span className="absolute inset-0 rounded-full border border-blue-400 animate-ping opacity-50" />
                    )}
                  </button>
                  <span className={`text-[10px] font-bold mt-2 max-w-[80px] leading-tight truncate hidden md:block ${isSelected ? "text-white" : "text-gray-500"}`}>
                    {d.title.split(" & ")[0]}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDomain}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 p-8 md:p-12 shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-4 pb-4 border-b border-white/5">
                  <div className="w-14 h-14 bg-blue-600/10 border border-blue-500/35 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                    <IconActive className="w-7 h-7 text-blue-400" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-blue-400 tracking-wider block mb-0.5 uppercase">
                      {activeData.telemetry}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-none">
                      {activeData.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  {activeData.desc}
                </p>

                {/* Focus points checklist */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest block mb-2">Core Focus Areas</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeData.focusPoints.map((pt, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        {pt}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <Link href={activeData.ctaLink}>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 hover:bg-blue-600 hover:text-white transition-all font-semibold text-sm"
                    >
                      <span>{activeData.ctaText}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                </div>
              </div>

              {/* Right Image (Sleek card layout) */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group/img">
                  <div className="absolute inset-0 bg-black/30 z-10 transition-colors group-hover/img:bg-black/10 duration-500" />
                  <Image
                    src={activeData.image}
                    alt={activeData.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
                  />
                  {/* Subtle claymorphic frame highlight inside the card border */}
                  <div className="absolute inset-0 border-[2px] border-white/5 rounded-[2rem] z-20 pointer-events-none" />
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
