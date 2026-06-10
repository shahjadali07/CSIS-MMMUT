"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  Users,
  ExternalLink,
  Eye,
  Sparkles,
  ArrowUpRight,
  GitBranch,
  Clock,
  ChevronRight,
} from "lucide-react";

type ProjectStatus = "Live" | "In Development" | "Research Phase" | "Beta Testing";

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  gradient: string;
  domain: string;
  status: ProjectStatus;
  progress: number;
  teamSize: number;
  technologies: string[];
  applicationUrl: string;
  githubUrl?: string;
};

const statusConfig: Record<ProjectStatus, { label: string; border: string; text: string; bg: string; dot: string }> = {
  "Live": {
    label: "Live",
    border: "border-emerald-500/25",
    text: "text-emerald-300",
    bg: "bg-emerald-500/10",
    dot: "bg-emerald-400",
  },
  "In Development": {
    label: "In Development",
    border: "border-amber-500/25",
    text: "text-amber-300",
    bg: "bg-amber-500/10",
    dot: "bg-amber-400",
  },
  "Research Phase": {
    label: "Research Phase",
    border: "border-purple-500/25",
    text: "text-purple-300",
    bg: "bg-purple-500/10",
    dot: "bg-purple-400",
  },
  "Beta Testing": {
    label: "Beta Testing",
    border: "border-blue-500/25",
    text: "text-blue-300",
    bg: "bg-blue-500/10",
    dot: "bg-blue-400",
  },
};

const projectsData: Project[] = [
  {
    id: "PROJ-001",
    title: "Prayukti VLab Core Shell",
    description:
      "Next-generation virtual laboratory platform featuring real-time 3D simulation, multi-user collaboration, and an extensible experiment SDK for engineering education.",
    image: "",
    gradient: "from-blue-600/20 via-indigo-600/15 to-purple-600/20",
    domain: "Web Development",
    status: "Beta Testing",
    progress: 78,
    teamSize: 6,
    technologies: ["React", "Three.js", "WebGL", "Node.js", "WebSocket"],
    applicationUrl: "https://vlab.prayukti.dev",
    githubUrl: "https://github.com/prayukti-vlab/vlab-core-shell",
  },
  {
    id: "PROJ-002",
    title: "Aurelia AI Code Oracle",
    description:
      "Offline-first context-aware LLM coprocessor trained on engineering curricula. Provides real-time code assistance without cloud dependency.",
    image: "",
    gradient: "from-violet-600/20 via-fuchsia-600/15 to-pink-600/20",
    domain: "AI & Machine Learning",
    status: "Live",
    progress: 94,
    teamSize: 4,
    technologies: ["Python", "PyTorch", "TypeScript", "ONNX", "Electron"],
    applicationUrl: "https://aurelia.prayukti.dev",
  },
  {
    id: "PROJ-003",
    title: "Sentinel Threat Vector",
    description:
      "Distributed packet tracer mapping vulnerability paths inside virtual sandboxes. Real-time threat detection and visualization.",
    image: "",
    gradient: "from-red-600/20 via-rose-600/15 to-orange-600/20",
    domain: "Cyber Security",
    status: "Research Phase",
    progress: 42,
    teamSize: 5,
    technologies: ["Rust", "Wireshark", "D3.js", "gRPC", "Kafka"],
    applicationUrl: "https://sentinel.prayukti.dev",
  },
  {
    id: "PROJ-004",
    title: "Graph Routing Compiler",
    description:
      "Custom AST compiler passes to resolve shortest paths inside state machines. Optimizes control flow graphs for embedded systems.",
    image: "",
    gradient: "from-emerald-600/20 via-teal-600/15 to-cyan-600/20",
    domain: "Algorithms",
    status: "In Development",
    progress: 58,
    teamSize: 3,
    technologies: ["C++", "LLVM", "Graphviz", "CMake", "Python"],
    applicationUrl: "https://github.com/prayukti-vlab/graph-routing",
  },
  {
    id: "PROJ-005",
    title: "Virtual Lab Simulation Toolkit",
    description:
      "Library of mathematical visual models for physical laboratory experiments. Supports 50+ simulations with real-time parameter tuning.",
    image: "",
    gradient: "from-sky-600/20 via-blue-600/15 to-indigo-600/20",
    domain: "Research",
    status: "Beta Testing",
    progress: 82,
    teamSize: 7,
    technologies: ["WebGPU", "TypeScript", "Rust", "WASM", "React"],
    applicationUrl: "https://simtools.prayukti.dev",
  },
  {
    id: "PROJ-006",
    title: "Ledger Flow Venture",
    description:
      "Automating cap table management, equity allocations, and investor reporting for student-founded startups with blockchain-verified records.",
    image: "",
    gradient: "from-amber-600/20 via-yellow-600/15 to-orange-600/20",
    domain: "Startup",
    status: "In Development",
    progress: 32,
    teamSize: 4,
    technologies: ["Solidity", "Next.js", "GraphQL", "PostgreSQL", "Docker"],
    applicationUrl: "https://ledger-flow.prayukti.dev",
  },
  {
    id: "PROJ-007",
    title: "Neural Canvas Studio",
    description:
      "AI-powered collaborative whiteboard for research teams. Supports real-time sketching with intelligent shape recognition and LaTeX rendering.",
    image: "",
    gradient: "from-pink-600/20 via-purple-600/15 to-violet-600/20",
    domain: "AI & Machine Learning",
    status: "Research Phase",
    progress: 55,
    teamSize: 3,
    technologies: ["WebRTC", "TensorFlow.js", "Canvas API", "CRDT", "Svelte"],
    applicationUrl: "https://neural-canvas.prayukti.dev",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const easeOut = [0.25, 0.46, 0.45, 0.94] as const;

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const featuredItemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: Project;
  index: number;
  featured?: boolean;
}) {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }, []);

  const status = statusConfig[project.status];

  return (
    <motion.div
      variants={featured ? featuredItemVariants : itemVariants}
      className={`${featured ? "lg:col-span-2" : ""}`}
    >
      <motion.div
        ref={cardRef}
        className={`premium-card ${featured ? "featured" : ""} h-full group`}
        onMouseMove={handleMouseMove}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={featured ? { y: -6 } : { y: -5 }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
      >
        <div className="premium-card-inner overflow-hidden">
          {/* Cursor-following glow */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
            style={{
              background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(94,106,210,0.08), transparent 50%)`,
            }}
          />

          {/* Image Area */}
          <div className={`relative overflow-hidden ${featured ? "h-56 md:h-72" : "h-44"}`}>
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
            {/* Grid overlay */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />
            {/* Circuit lines decoration */}
            <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 200" fill="none">
              <path d="M0 100 H100 V50 H200 V150 H300 V100 H400" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
              <path d="M50 0 V200" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
              <path d="M150 0 V200" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
              <path d="M250 0 V200" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
              <path d="M350 0 V200" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
              <circle cx="100" cy="50" r="3" fill="rgba(94,106,210,0.4)" />
              <circle cx="200" cy="150" r="3" fill="rgba(94,106,210,0.4)" />
              <circle cx="300" cy="100" r="3" fill="rgba(94,106,210,0.4)" />
            </svg>
            {/* Network dots */}
            <div className="absolute inset-0">
              {[...Array(featured ? 12 : 6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-[var(--accent)]/20"
                  style={{
                    left: `${15 + (i * 17) % 70}%`,
                    top: `${10 + (i * 23) % 80}%`,
                  }}
                />
              ))}
            </div>
            {/* Image zoom on hover */}
            <motion.div
              className="absolute inset-0"
              animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
            {/* Domain badge */}
            <div className="absolute top-3 left-3 z-20">
              <div
                className={`px-2.5 py-1 rounded-full text-[10px] font-medium ${status.bg} ${status.text} border ${status.border} backdrop-blur-sm transition-all duration-300`}
              >
                {project.domain}
              </div>
            </div>
            {/* Status badge */}
            <div className="absolute top-3 right-3 z-20">
              <div
                className={`px-2.5 py-1 rounded-full text-[10px] font-medium ${status.bg} ${status.text} border ${status.border} backdrop-blur-sm flex items-center gap-1.5 transition-all duration-300`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${status.dot} ${isHovered ? "animate-glow-pulse" : ""}`} />
                {status.label}
              </div>
            </div>
            {/* Featured badge */}
            {featured && (
              <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20">
                <div className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 backdrop-blur-md flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  <span className="text-[10px] font-semibold text-amber-300 uppercase tracking-wider">
                    Featured Project
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Content Area */}
          <div className={`p-5 ${featured ? "md:p-6" : ""}`}>
            {/* Title */}
            <motion.h3
              className={`font-semibold text-[var(--text)] leading-tight mb-2 transition-colors duration-300 ${featured ? "text-xl md:text-2xl" : "text-base"}`}
              animate={isHovered ? { color: "rgba(129, 140, 248, 1)" } : { color: "rgba(255, 255, 255, 1)" }}
              transition={{ duration: 0.3 }}
            >
              {project.title}
            </motion.h3>

            {/* Description */}
            <p
              className={`text-[var(--text-muted)] leading-relaxed mb-4 ${featured ? "text-sm md:text-base" : "text-xs"}`}
            >
              {project.description}
            </p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.technologies.map((tech) => (
                <motion.span
                  key={tech}
                  className="tech-tag px-2 py-0.5 rounded-md text-[10px] font-mono text-[var(--text-muted)] border border-[var(--border)] bg-[var(--surface)]"
                  animate={
                    isHovered
                      ? { y: -1, borderColor: "rgba(94, 106, 210, 0.3)", color: "rgba(161, 161, 170, 1)" }
                      : { y: 0, borderColor: "rgba(255, 255, 255, 0.08)", color: "rgba(113, 113, 122, 1)" }
                  }
                  transition={{ duration: 0.3 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Meta + Progress */}
            <div className="space-y-3">
              {/* Team Size */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[11px] text-[var(--text-dim)]">
                  <Users className="w-3.5 h-3.5 text-[var(--accent)]/60" />
                  <span>{project.teamSize} team members</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-[var(--text-dim)]">
                  <GitBranch className="w-3.5 h-3.5 text-[var(--accent)]/60" />
                  <span className="font-mono">{project.id}</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-[var(--text-dim)] font-mono">Progress</span>
                  <motion.span
                    className="text-[var(--text-muted)] font-mono font-medium"
                    animate={isHovered ? { color: "rgba(129, 140, 248, 1)" } : { color: "rgba(161, 161, 170, 1)" }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.progress}%
                  </motion.span>
                </div>
                <div className="w-full h-1.5 bg-[var(--border)] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full relative overflow-hidden"
                    style={{
                      background: "linear-gradient(90deg, var(--accent), var(--accent-light))",
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: `${project.progress}%` }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={isHovered ? { x: ["0%", "100%"] } : { x: "-100%" }}
                      transition={{ duration: 1, repeat: isHovered ? Infinity : 0, ease: "linear" }}
                    />
                  </motion.div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className={`flex items-center gap-2 pt-1 ${featured ? "md:gap-3" : ""}`}>
                <motion.a
                  href={project.applicationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-1.5 rounded-lg font-medium transition-all duration-300 ${
                    featured
                      ? "px-4 py-2 text-sm bg-[var(--accent)] text-white hover:bg-[var(--accent-light)]"
                      : "px-3 py-1.5 text-xs bg-[var(--accent)]/10 text-[var(--accent-light)] border border-[var(--accent)]/20 hover:bg-[var(--accent)] hover:text-white"
                  }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span>Visit Application</span>
                  <motion.span
                    animate={isHovered ? { x: 2, opacity: 1 } : { x: 0, opacity: 0.7 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ExternalLink className={`${featured ? "w-3.5 h-3.5" : "w-3 h-3"}`} />
                  </motion.span>
                </motion.a>
                <motion.button
                  className={`flex items-center justify-center gap-1 rounded-lg transition-all duration-300 ${
                    featured
                      ? "px-4 py-2 text-sm text-[var(--text-muted)] border border-[var(--border)] hover:border-[var(--border-highlight)] hover:text-[var(--text)]"
                      : "px-3 py-1.5 text-xs text-[var(--text-dim)] border border-[var(--border)] hover:border-[var(--border-highlight)] hover:text-[var(--text-muted)]"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>View Details</span>
                  <Eye className={`${featured ? "w-3.5 h-3.5" : "w-3 h-3"}`} />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ActiveProjects() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-28 px-6 overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 blueprint-grid opacity-30" />
      <div className="absolute inset-0 network-nodes" />
      <div className="absolute inset-0 dot-pattern opacity-5" />
      <div className="absolute left-0 top-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute right-0 bottom-1/4 w-80 h-80 bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent)]/5 border border-[var(--accent)]/20 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Sparkles className="w-3.5 h-3.5 text-[var(--accent-light)]" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-[var(--accent-light)]">
              Active Projects
            </span>
          </motion.div>

          <motion.h2
            className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl text-[var(--text)] tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Building Solutions{" "}
            <span className="text-gradient">That Matter</span>
          </motion.h2>

          <motion.p
            className="text-[var(--text-muted)] text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            Explore innovative projects being developed by CSIS members across
            AI, Web Development, Cybersecurity, Research, and Emerging
            Technologies.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projectsData.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              featured={i === 0}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
