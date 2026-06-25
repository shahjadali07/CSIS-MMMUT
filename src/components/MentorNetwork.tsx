"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const GraduationCapIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

const BriefcaseIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const AwardIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);

const GlobeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const LinkIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const MailIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

type Mentor = {
  name: string;
  role: string;
  affiliation: string;
  category: "CHIEF_PATRON" | "CO_ORDINATOR" | "FACULTY_ADVISOR";
  specialty: string;
  avatar: string;
  imageUrl?: string;
  linkedIn?: string;
  website?: string;
  mail?: string;
  quote?: string;
};

const mentorsData: Mentor[] = [
  {
    name: "Prof. Anupama Kaushik Sharma",
    role: "Hon'ble Vice Chancellor",
    affiliation: "Madan Mohan Malaviya University of Technology, Gorakhpur",
    category: "CHIEF_PATRON",
    specialty: "Leadership & Administration",
    avatar: "VC",
    imageUrl: "/images/vc_profile.jpg",
    linkedIn: "https://www.linkedin.com/in/anupamachem/",
    mail: "#",
    quote: "Empowering students to push the boundaries of technology and innovation. Our university is committed to providing a transformative educational experience that prepares future leaders for the digital age.",
  },
  {
    name: "Prof. Rakesh Kumar",
    role: "Professor & Head",
    affiliation: "Computer Science and Engineering, MMMUT",
    category: "CO_ORDINATOR",
    specialty: "Computer Science",
    avatar: "RK",
    imageUrl: "/images/RakeshSir.jpg",
    linkedIn: "https://www.linkedin.com/in/dr-rakesh-kumar-98609643/",
    mail: "#",
    quote: "As the Head of Computer Science and Engineering, my vision for CSIS is to bridge the gap between academic learning and industry demands, fostering a community of innovators ready to build the future.",
  },
  {
    name: "Dr. Vimal Kumar",
    role: "Assistant Professor",
    affiliation: "MMMUT",
    category: "CO_ORDINATOR",
    specialty: "Computer Science",
    avatar: "VK",
    imageUrl: "/images/vimal.jpg",
    linkedIn: "https://www.linkedin.com/in/dr-vimal-kumar-9b170b1b4/",
    mail: "#",
    quote: "CSIS is a transformative platform where theoretical knowledge meets practical implementation. We are building a culture of technical excellence and collaborative innovation among students.",
  },
  {
    name: "Dr. Swapnita Srivastava",
    role: "Assistant Professor",
    affiliation: "CSED - MMMUT",
    category: "FACULTY_ADVISOR",
    specialty: "Computer Science",
    avatar: "SS",
    imageUrl: "/images/swapnita.jpg",
    linkedIn: "https://www.linkedin.com/in/dr-swapnita-srivastava-9a02b111b/",
    website: "https://swapnita.netlify.app/",
    mail: "#",
  },
  {
    name: "Dr. Vipul Narayan",
    role: "Assistant Professor",
    affiliation: "CSED - MMMUT",
    category: "FACULTY_ADVISOR",
    specialty: "Computer Science",
    avatar: "VN",
    imageUrl: "/images/vipul.jpg",
    linkedIn: "https://www.linkedin.com/in/dr-vipul-narayan/",
    mail: "#",
  },
  {
    name: "Dr. Sumit Kumar",
    role: "Assistant Professor",
    affiliation: "CSED - MMMUT",
    category: "FACULTY_ADVISOR",
    specialty: "Computer Science",
    avatar: "SK",
    imageUrl: "/images/sumitkumar.jpg",
    linkedIn: "https://www.linkedin.com/in/sumit-kumar-87b086bb/",
    mail: "#",
  },
];

const tabs = [
  { id: "CHIEF_PATRON", label: "Chief Patron", icon: GraduationCapIcon },
  { id: "CO_ORDINATOR", label: "Co-ordinator", icon: BriefcaseIcon },
  { id: "FACULTY_ADVISOR", label: "Faculty Advisor", icon: AwardIcon },
] as const;

export default function MentorNetwork() {
  const [activeTab, setActiveTab] = useState<typeof tabs[number]["id"]>("CHIEF_PATRON");
  const filteredMentors = mentorsData.filter((m) => m.category === activeTab);

  return (
    <section id="mentors" className="relative py-16 px-6 overflow-hidden">
      <div className="absolute inset-0 noise-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Advisory <span className="text-[var(--text-dim)]">Network</span>
          </h2>
          <p className="text-[var(--text-muted)] text-base leading-relaxed">
            With the guidance of experienced mentors and leaders, we create opportunities for learning, meaningful growth and every interaction helps shape a stronger and more capable CSIS community
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
                  className={`relative flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-full transition-colors ${isActive ? "text-white" : "text-[var(--text-muted)] hover:text-white"
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

        {/* Mentors List */}
        <div className={`grid grid-cols-1 ${filteredMentors.length === 1 ? "lg:grid-cols-1" : filteredMentors.length >= 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"} gap-6 lg:gap-8 min-h-[280px] w-full max-w-7xl mx-auto`}>
          <AnimatePresence mode="popLayout">
            {filteredMentors.map((mentor, i) => (
              <motion.div
                key={mentor.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-[2rem] bg-gradient-to-r from-blue-400 to-purple-500 p-[1px] w-full shadow-[0_0_80px_rgba(255,255,255,0.03)] group transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_100px_rgba(168,85,247,0.3)] z-10 hover:z-20 relative"
              >
                <div className={`relative overflow-hidden bg-[#030303] rounded-[2rem] flex flex-col ${filteredMentors.length === 1 ? "md:flex-row text-center md:text-left" : filteredMentors.length >= 3 ? "text-center" : "xl:flex-row text-center xl:text-left"} items-center p-5 md:p-6 gap-4 md:gap-6 h-full w-full`}>
                  {/* Animated shimmering sweep effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent w-full"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                  />
                  {/* Minimal ambient light that glows slightly on hover */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/[0.03] blur-[100px] rounded-full pointer-events-none group-hover:bg-white/[0.06] transition-colors duration-700" />

                  <div className={`shrink-0 relative z-10 rounded-full overflow-hidden border-4 border-[#38BDF8]/30 shadow-2xl shadow-[#38BDF8]/20 bg-[var(--surface-hover)] flex items-center justify-center font-bold text-4xl text-[var(--text-muted)] ${filteredMentors.length === 1 ? "w-32 h-32 md:w-48 md:h-48" : filteredMentors.length >= 3 ? "w-24 h-24 md:w-32 md:h-32" : "w-28 h-28 md:w-40 md:h-40"}`}>
                    {mentor.imageUrl ? (
                      <Image src={mentor.imageUrl} alt={mentor.name} fill className="object-cover" />
                    ) : (
                      mentor.avatar
                    )}
                  </div>
                  <div className="flex-1 space-y-4 relative z-10 w-full">
                    <div>
                      <h3 className={`font-bold text-white tracking-tight mb-1 ${filteredMentors.length === 1 ? "text-xl md:text-2xl" : filteredMentors.length >= 3 ? "text-base md:text-lg" : "text-lg md:text-xl"}`}>
                        {mentor.name}
                      </h3>
                      <p className={`font-medium text-[#38BDF8] ${filteredMentors.length >= 3 ? "text-xs md:text-sm" : "text-sm md:text-base"}`}>
                        {mentor.role}
                      </p>
                      <p className={`text-[var(--text-dim)] ${filteredMentors.length >= 3 ? "text-[10px] md:text-xs mt-1" : "text-xs md:text-sm"}`}>
                        {mentor.affiliation}
                      </p>
                    </div>
                    {mentor.quote && (
                      <p className={`text-[var(--text-muted)] leading-relaxed italic ${filteredMentors.length === 1 ? "text-sm md:text-base" : filteredMentors.length >= 3 ? "text-xs" : "text-sm"}`}>
                        "{mentor.quote}"
                      </p>
                    )}
                    <div className={`flex items-center justify-center gap-4 pt-2 ${filteredMentors.length === 1 ? "md:justify-start" : filteredMentors.length >= 3 ? "justify-center" : "xl:justify-start"}`}>
                      {mentor.mail && (
                        <a href={mentor.mail} className="p-2.5 rounded-full bg-[var(--surface-hover)] border border-[var(--border)] text-[var(--text-muted)] hover:text-[#38BDF8] hover:border-[#38BDF8]/50 transition-all duration-300">
                          <MailIcon className="w-5 h-5" />
                        </a>
                      )}
                      {mentor.linkedIn && (
                        <a href={mentor.linkedIn} target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-[var(--surface-hover)] border border-[var(--border)] text-[var(--text-muted)] hover:text-[#38BDF8] hover:border-[#38BDF8]/50 transition-all duration-300">
                          <LinkedinIcon className="w-5 h-5" />
                        </a>
                      )}
                      {mentor.website && (
                        <a href={mentor.website} target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-[var(--surface-hover)] border border-[var(--border)] text-[var(--text-muted)] hover:text-[#38BDF8] hover:border-[#38BDF8]/50 transition-all duration-300">
                          <GlobeIcon className="w-5 h-5" />
                        </a>
                      )}
                    </div>
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
