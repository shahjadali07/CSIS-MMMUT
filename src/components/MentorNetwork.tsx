"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Briefcase, Award, Globe, Link } from "lucide-react";

type Mentor = {
  name: string;
  role: string;
  affiliation: string;
  category: "FACULTY" | "INDUSTRY" | "ALUMNI";
  specialty: string;
  avatar: string;
  linkedIn?: string;
  website?: string;
};

const mentorsData: Mentor[] = [
  {
    name: "Dr. Govind Verma",
    role: "Professor & Head, CSE",
    affiliation: "IIT Prayukti Virtual Lab",
    category: "FACULTY",
    specialty: "Distributed Systems & Scalable Architecture",
    avatar: "GV",
    linkedIn: "https://linkedin.com",
    website: "https://example.edu",
  },
  {
    name: "Dr. Aradhana Shukla",
    role: "Associate Professor, AI",
    affiliation: "Department of Computer Science",
    category: "FACULTY",
    specialty: "Neural Network Architecture & Optimization",
    avatar: "AS",
    linkedIn: "https://linkedin.com",
  },
  {
    name: "Shahjad Ali",
    role: "Senior Frontend Architect",
    affiliation: "Google DeepMind / Vercel",
    category: "INDUSTRY",
    specialty: "UI/UX Engineering & Next.js Frameworks",
    avatar: "SA",
    linkedIn: "https://linkedin.com",
    website: "https://example.com",
  },
  {
    name: "Riya Sen",
    role: "Lead Platform Engineer",
    affiliation: "Linear App Group",
    category: "INDUSTRY",
    specialty: "Product Design & Sync Systems",
    avatar: "RS",
    linkedIn: "https://linkedin.com",
  },
  {
    name: "Harsh Srivastava",
    role: "Software Architect",
    affiliation: "GitHub",
    category: "ALUMNI",
    specialty: "Sandboxed Kernels & Zero-Trust Cloud",
    avatar: "HS",
    linkedIn: "https://linkedin.com",
  },
  {
    name: "Kriti Gupta",
    role: "Founder & CEO",
    affiliation: "LedgerFlow.ai",
    category: "ALUMNI",
    specialty: "Distributed CAP Ledgers",
    avatar: "KG",
    linkedIn: "https://linkedin.com",
  },
];

const tabs = [
  { id: "FACULTY", label: "Faculty", icon: GraduationCap },
  { id: "INDUSTRY", label: "Industry", icon: Briefcase },
  { id: "ALUMNI", label: "Alumni", icon: Award },
] as const;

export default function MentorNetwork() {
  const [activeTab, setActiveTab] = useState<typeof tabs[number]["id"]>("FACULTY");
  const filteredMentors = mentorsData.filter((m) => m.category === activeTab);

  return (
    <section id="mentors" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 noise-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Advisory <span className="text-[var(--text-dim)]">Network</span>
          </h2>
          <p className="text-[var(--text-muted)] text-base leading-relaxed">
            Learn from our global board of university faculty, industry architects, and successful alumni.
          </p>
        </div>

        {/* Custom Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex p-1 rounded-full bg-[var(--surface)] border border-[var(--border)]">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-full transition-colors ${
                    isActive ? "text-white" : "text-[var(--text-muted)] hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="mentor-tab-bubble"
                      className="absolute inset-0 bg-[var(--surface-hover)] border border-[var(--border)] rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mentor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[280px]">
          <AnimatePresence mode="wait">
            {filteredMentors.map((mentor, i) => (
              <motion.div
                key={mentor.name}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="linear-card flex flex-col md:flex-row items-start md:items-center p-6 gap-6"
              >
                {/* Avatar */}
                <div className="w-16 h-16 rounded-full bg-[var(--surface-hover)] border border-[var(--border)] flex items-center justify-center font-semibold text-lg text-[var(--text-muted)] shrink-0">
                  {mentor.avatar}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-4 mb-1">
                    <h3 className="font-bold text-white text-lg tracking-tight truncate">
                      {mentor.name}
                    </h3>
                    <div className="flex items-center gap-2 shrink-0">
                      {mentor.linkedIn && (
                        <a href={mentor.linkedIn} target="_blank" rel="noreferrer"
                          className="text-[var(--text-muted)] hover:text-white transition-colors">
                          <Link className="w-4 h-4" />
                        </a>
                      )}
                      {mentor.website && (
                        <a href={mentor.website} target="_blank" rel="noreferrer"
                          className="text-[var(--text-muted)] hover:text-white transition-colors">
                          <Globe className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-sm font-medium text-[var(--text-muted)] mb-0.5">{mentor.role}</p>
                  <p className="text-xs text-[var(--text-dim)] mb-3 truncate">{mentor.affiliation}</p>
                  
                  <div className="inline-block px-3 py-1 rounded-full bg-[var(--surface-hover)] border border-[var(--border)] text-xs text-[var(--text-muted)] font-medium">
                    {mentor.specialty}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
