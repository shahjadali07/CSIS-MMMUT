"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Network, FlaskConical, BrainCircuit, Users, Landmark, HeartHandshake, Code2, Rocket, ArrowRight, Lightbulb, Coins } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const domains = [
  {
    title: "Networking and Visibility",
    desc: "Building strong professional networks and enhancing global visibility for our innovators.",
    icon: Network,
    image: "/images/domains/networking.png",
    gradient: "from-blue-500/20 to-cyan-500/20",
    color: "text-blue-400",
  },
  {
    title: "Research & Innovation",
    desc: "Advancing knowledge in high-tech research labs, incubation spaces, and breakthrough ecosystems.",
    icon: FlaskConical,
    image: "/images/domains/research.png",
    gradient: "from-purple-500/20 to-pink-500/20",
    color: "text-purple-400",
  },

  {
    title: "Student Ecosystem",
    desc: "Empowering students through collaborative networking, skill building, and targeted career growth.",
    icon: Users,
    image: "/images/domains/student.jpg",
    gradient: "from-emerald-500/20 to-teal-500/20",
    color: "text-emerald-400",
  },
  {
    title: "University Administration",
    desc: "Building smart campus infrastructure with digital management dashboards and automated systems.",
    icon: Landmark,
    image: "/images/domains/admin.jpg",
    gradient: "from-amber-500/20 to-orange-500/20",
    color: "text-amber-400",
  },
  {
    title: "Community & Collaboration",
    desc: "Driving tech community engagement through hackathons, workshops, and open discussions.",
    icon: HeartHandshake,
    image: "/images/domains/community.jpg",
    gradient: "from-rose-500/20 to-red-500/20",
    color: "text-rose-400",
  },
  {
    title: "Development & Technology",
    desc: "Architecting robust software, cloud infrastructure, and modern coding environments.",
    icon: Code2,
    image: "/images/domains/dev.jpg",
    gradient: "from-violet-500/20 to-purple-500/20",
    color: "text-violet-400",
  },

  {
    title: "Expert Mentorship",
    desc: "Connecting students with industry experts for guidance, feedback, and career growth.",
    icon: Lightbulb,
    image: "/images/domains/mentorship.png",
    gradient: "from-teal-500/20 to-emerald-500/20",
    color: "text-teal-400",
  },
  {
    title: "Funding Opportunity",
    desc: "Providing access to grants, seed funding, and investor networks for innovative projects.",
    icon: Coins,
    image: "/images/domains/funding.png",
    gradient: "from-yellow-500/20 to-amber-500/20",
    color: "text-yellow-400",
  },
];

function DomainCard({ domain, index }: { domain: typeof domains[0]; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Icon = domain.icon;
  const floatDelay = index * 0.2;
  const yOffset = index % 2 === 0 ? -12 : 12;
  const entranceDirection = index % 2 === 0 ? -30 : 30;

  return (
    <motion.div
      initial={{ opacity: 0, x: entranceDirection }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative [perspective:1200px] h-full"
    >
      <motion.div
        animate={{ y: [0, yOffset, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: floatDelay }}
        className="h-full"
      >
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="group relative h-full flex flex-col rounded-3xl bg-[var(--surface-light,rgba(255,255,255,0.03))] border border-white/10 backdrop-blur-xl overflow-hidden cursor-pointer"
        >
          {/* Animated Gradient Border Glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className={`absolute inset-[-2px] bg-gradient-to-r ${domain.gradient} blur-xl`} />
            <div className="absolute inset-0 border-[2px] border-white/20 rounded-3xl" />
          </div>

          {/* Image Header */}
          <div className="relative h-48 w-full overflow-hidden shrink-0">
            <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/20 transition-colors duration-500" />
            <Image
              src={domain.image}
              alt={domain.title}
              fill
              className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Content Body */}
          <div className="p-6 flex flex-col flex-1 relative z-20">
            <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-blue-200 transition-colors duration-300">
              {domain.title}
            </h3>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6 flex-1">
              {domain.desc}
            </p>

            <div className="flex items-center gap-2 text-sm font-semibold text-white/50 group-hover:text-white transition-colors duration-300 overflow-hidden">
              <span className="relative">
                Explore Domain
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300" />
              </span>
              <ArrowRight className="w-4 h-4 transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function DomainsSection() {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; duration: number }[]>([]);

  useEffect(() => {
    // Generate static particles on mount to avoid hydration mismatch
    const generated = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 10,
    }));
    setParticles(generated);
  }, []);

  return (
    <section id="domains" className="relative py-32 px-6 min-h-screen overflow-hidden bg-[var(--bg)]">

      {/* Ecosystem Connection Lines Background (SVG) */}
      <div className="absolute inset-0 pointer-events-none opacity-20 hidden lg:block">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="lineGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
            </radialGradient>
          </defs>
          <path
            d="M 50% 50% L 10% 20% M 50% 50% L 90% 20% M 50% 50% L 10% 80% M 50% 50% L 90% 80% M 50% 50% L 50% 10% M 50% 50% L 50% 90% M 50% 50% L 20% 50% M 50% 50% L 80% 50%"
            stroke="url(#lineGlow)"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="6 10"
            className="animate-[dash_60s_linear_infinite]"
          />
        </svg>
      </div>

      {/* Particle Background */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-blue-400/20"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Central Animated Core Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none z-0 hidden lg:flex items-center justify-center opacity-40">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.05, 1] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute w-[600px] h-[600px] rounded-full border border-blue-500/20"
          style={{ borderStyle: 'dashed' }}
        />
        <motion.div
          animate={{ rotate: -360, scale: [1, 1.1, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute w-[400px] h-[400px] rounded-full border border-purple-500/20"
          style={{ borderStyle: 'dashed' }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[200px] h-[200px] bg-blue-600/30 blur-[60px] rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute w-[300px] h-[300px] bg-purple-600/20 blur-[80px] rounded-full"
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto z-10">

        {/* Header */}
        <div className="mb-24 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 mb-8 backdrop-blur-md"
          >
            <BrainCircuit className="w-4 h-4 text-blue-400" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-blue-400">
              CSIS Innovation Hub
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
          >
            Domain <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Ecosystem</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[var(--text-muted)] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            Exploring the technologies, research areas, and innovation domains shaping the future through CSIS.
          </motion.p>
        </div>

        {/* 4x2 Ecosystem Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 relative z-20">
          {domains.map((domain, index) => (
            <DomainCard key={domain.title} domain={domain} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
