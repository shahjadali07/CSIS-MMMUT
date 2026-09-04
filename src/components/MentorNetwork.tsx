"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Globe } from "lucide-react";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

type Mentor = {
  name: string;
  role: string;
  affiliation: string;
  specialty: string;
  avatar: string;
  imageUrl?: string;
  linkedIn?: string;
  website?: string;
  mail?: string;
  quote?: string;
};

const topLeaders: Mentor[] = [
  {
    name: "Prof. Anupama Kaushik Sharma",
    role: "Hon'ble Vice Chancellor",
    affiliation: "Madan Mohan Malaviya University of Technology, Gorakhpur",
    specialty: "Leadership & Administration",
    avatar: "VC",
    imageUrl: "/images/vc_profile.jpg",
    linkedIn: "https://www.linkedin.com/in/anupamachem/",
    mail: "mailto:contact@mmmut.tech",
    quote: "Empowering students to push the boundaries of technology and innovation. Our university is committed to providing a transformative educational experience that prepares future leaders.",
  },
  {
    name: "Prof. Rakesh Kumar",
    role: "Professor & Head",
    affiliation: "Computer Science and Engineering, MMMUT",
    specialty: "Computer Science & Engineering",
    avatar: "RK",
    imageUrl: "/images/RakeshSir.jpg",
    linkedIn: "https://www.linkedin.com/in/dr-rakesh-kumar-98609643/",
    mail: "mailto:contact@mmmut.tech",
    quote: "Bridging the gap between academic learning and industry demands, fostering a community of student innovators who are ready to take technical ownership and build the future.",
  },
];

const prominentLeader: Mentor = {
  name: "Dr. Vimal Kumar",
  role: "Assistant Professor & Coordinator",
  affiliation: "Computer Science and Engineering, MMMUT",
  specialty: "Computer Science",
  avatar: "VK",
  imageUrl: "/images/vimal.jpg",
  linkedIn: "https://www.linkedin.com/in/dr-vimal-kumar-9b170b1b4/",
  mail: "mailto:contact@mmmut.tech",
  quote: "CSIS is a transformative platform where theoretical knowledge meets practical implementation. We are building a culture of technical excellence and collaborative innovation among students.",
};

const facultyAdvisors: Mentor[] = [
  {
    name: "Dr. Swapnita Srivastava",
    role: "Assistant Professor & Faculty Advisor",
    affiliation: "CSED, MMMUT",
    specialty: "Computer Science",
    avatar: "SS",
    imageUrl: "/images/swapnita.jpg",
    linkedIn: "https://www.linkedin.com/in/dr-swapnita-srivastava-9a02b111b/",
    website: "https://swapnita.netlify.app/",
    mail: "mailto:contact@mmmut.tech",
  },
  {
    name: "Dr. Vipul Narayan",
    role: "Assistant Professor & Faculty Advisor",
    affiliation: "CSED, MMMUT",
    specialty: "Computer Science",
    avatar: "VN",
    imageUrl: "/images/vipul.jpg",
    linkedIn: "https://www.linkedin.com/in/dr-vipul-narayan/",
    mail: "mailto:contact@mmmut.tech",
  },
  {
    name: "Dr. Sumit Kumar",
    role: "Assistant Professor & Faculty Advisor",
    affiliation: "CSED, MMMUT",
    specialty: "Computer Science",
    avatar: "SK",
    imageUrl: "/images/sumitkumar.jpg",
    linkedIn: "https://www.linkedin.com/in/sumit-kumar-87b086bb/",
    mail: "mailto:contact@mmmut.tech",
  },
];

function MentorCard({ mentor, featured = false }: { mentor: Mentor; featured?: boolean }) {
  const isPlaceholder = mentor.name === "Faculty Advisor";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`rounded-[2rem] bg-gradient-to-r from-blue-500/30 to-purple-500/30 p-[1px] w-full shadow-[0_0_80px_rgba(255,255,255,0.02)] group transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_80px_rgba(99,102,241,0.15)] relative ${
        isPlaceholder ? "opacity-75" : ""
      }`}
    >
      <div className={`relative overflow-hidden bg-[#030303] rounded-[2rem] flex flex-col ${
        featured ? "md:flex-row text-left" : "text-center"
      } items-center p-6 md:p-8 gap-6 h-full w-full`}>
        
        {/* Shimmer Effect */}
        {!isPlaceholder && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent w-full pointer-events-none"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          />
        )}

        <div className={`shrink-0 relative z-10 rounded-full overflow-hidden border-4 border-blue-500/25 bg-white/5 flex items-center justify-center font-bold text-xl text-gray-500 ${
          featured ? "w-32 h-32 md:w-40 md:h-40" : "w-24 h-24 md:w-28 md:h-28"
        }`}>
          {mentor.imageUrl ? (
            <Image src={mentor.imageUrl} alt={mentor.name} fill className="object-cover" />
          ) : (
            <span className="text-2xl font-mono text-blue-400">{mentor.avatar}</span>
          )}
        </div>

        <div className="flex-1 space-y-3 relative z-10 w-full">
          <div>
            <h3 className={`font-extrabold text-white tracking-tight ${featured ? "text-xl md:text-2xl" : "text-lg"}`}>
              {mentor.name}
            </h3>
            <p className="font-semibold text-blue-400 text-sm mt-0.5">
              {mentor.role}
            </p>
            <p className="text-gray-400 text-xs mt-1">
              {mentor.affiliation}
            </p>
          </div>

          {mentor.quote && (
            <p className="text-gray-300 text-sm italic leading-relaxed pt-2">
              "{mentor.quote}"
            </p>
          )}

          {!isPlaceholder && (
            <div className={`flex items-center gap-3 pt-2 ${featured ? "justify-start" : "justify-center"}`}>
              {mentor.mail && (
                <a href={mentor.mail} className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-blue-400 hover:border-blue-400/50 transition-all">
                  <Mail className="w-4 h-4" />
                </a>
              )}
              {mentor.linkedIn && (
                <a href={mentor.linkedIn} target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-blue-400 hover:border-blue-400/50 transition-all">
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              )}
              {mentor.website && (
                <a href={mentor.website} target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-blue-400 hover:border-blue-400/50 transition-all">
                  <Globe className="w-4 h-4" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function MentorNetwork() {
  return (
    <section id="mentors" className="relative py-28 px-6 overflow-hidden bg-transparent border-t border-white/5">
      <div className="absolute inset-0 noise-bg opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Advisory <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Network</span>
          </h2>
          <p className="text-[var(--text-muted)] text-base md:text-lg leading-relaxed">
            Guiding the CSIS student ecosystem under the leadership, patronage, and mentorship of university faculty and administration.
          </p>
        </div>

        {/* Top Level: VC & Head of CSED */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block">Level 01 // Institutional Patronage</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {topLeaders.map((leader) => (
              <MentorCard key={leader.name} mentor={leader} featured={true} />
            ))}
          </div>
        </div>

        {/* Prominent Level: Dr. Vimal Kumar (Coordinator) */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block">Level 02 // Society Coordination</span>
          </div>
          <div className="flex justify-center w-full">
            <div className="w-full lg:w-[60%]">
              <MentorCard mentor={prominentLeader} featured={true} />
            </div>
          </div>
        </div>

        {/* Third Level: Faculty Advisors */}
        <div>
          <div className="text-center mb-8">
            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block">Level 03 // Faculty Advisory Panel</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {facultyAdvisors.map((advisor) => (
              <MentorCard key={advisor.name} mentor={advisor} featured={false} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
