"use client";

import { notFound, useParams } from "next/navigation";
import { useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, GitBranch, Users, Clock, Tag, Lightbulb } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ComingSoonModal from "@/components/ui/ComingSoonModal";

type CaseStudy = {
  id: string;
  title: string;
  domain: string;
  status: string;
  progress: number;
  teamSize: number;
  duration: string;
  lead: string;
  technologies: string[];
  context: string;
  purpose: string;
  built: string;
  features: string[];
  applicationUrl: string;
  githubUrl?: string;
  isReady: boolean;
};

const caseStudiesData: Record<string, CaseStudy> = {
  "PROJ-001": {
    id: "PROJ-001",
    title: "Prayukti VLab",
    domain: "Web Development / Virtual Lab",
    status: "Beta Testing",
    progress: 90,
    teamSize: 8,
    duration: "8 Months",
    lead: "Suyash Shukla",
    technologies: ["TypeScript", "React", "Tailwind CSS", "Rust", "Astro"],
    context: "Engineering students often face restricted access to physical machinery and hardware labs, making hands-on laboratory learning difficult to scale.",
    purpose: "Provide a scalable, zero-setup virtual simulation workspace where students can run complex laboratory experiments in real-time.",
    built: "A web-based virtual lab ecosystem supporting multi-threaded physics calculations and dynamic canvas rendering.",
    features: [
      "Real-time laboratory equipment simulation using WebAssembly",
      "Interactive multi-user collaboration channels",
      "Extensible SDK allowing faculty to write new experiment modules"
    ],
    applicationUrl: "https://mmmut.prayukti.org/",
    githubUrl: "https://github.com/PrayuktiVlab/Prayukti-MMMUT",
    isReady: true,
  },
  "PROJ-002": {
    id: "PROJ-002",
    title: "Malaviya Connect",
    domain: "AI & Mobile Network",
    status: "In Development",
    progress: 50,
    teamSize: 6,
    duration: "Ongoing",
    lead: "Divyanshu Nath Tripathi",
    technologies: ["Python", "PyTorch", "TypeScript", "ONNX", "Electron"],
    context: "Students and alumni struggle to find a central, focused medium to share project collaboration requests, referrals, and career resources.",
    purpose: "Create a dedicated networking network that aligns student capabilities with alumni opportunities.",
    built: "A cross-platform desktop application prototype using Electron and dynamic graph views.",
    features: [
      "Direct alumni-to-student referral boards",
      "Automated skill-based matchmaking recommendations",
      "Verified profiles with institutional authentication"
    ],
    applicationUrl: "https://aurelia.prayukti.dev",
    isReady: false,
  },
  "PROJ-003": {
    id: "PROJ-003",
    title: "Malaviya Tech Blog",
    domain: "Research & Publication",
    status: "In Development",
    progress: 62,
    teamSize: 3,
    duration: "Ongoing",
    lead: "Shahjad Ali",
    technologies: ["WebGPU", "TypeScript", "Rust", "WASM", "React"],
    context: "The university lacks a structured space to highlight student engineering achievements, ongoing research briefs, and computational writeups.",
    purpose: "Enrich the student community with tech reviews, computational deep dives, and academic reports.",
    built: "A high-performance markdown publication hub powered by WebAssembly search indexes.",
    features: [
      "Offline-first full-text search capability",
      "Integrated code compilers for inline script execution",
      "Faculty review pipeline for student-submitted articles"
    ],
    applicationUrl: "https://simtools.prayukti.dev",
    isReady: false,
  },
  "PROJ-004": {
    id: "PROJ-004",
    title: "Mmmut Support",
    domain: "Web Automation",
    status: "In Development",
    progress: 32,
    teamSize: 7,
    duration: "Ongoing",
    lead: "Shailendra Mani Pandey and Govind Verma",
    technologies: ["Solidity", "Next.js", "GraphQL", "PostgreSQL", "Docker"],
    context: "Administrative student support processes are often offline and fragmented, leading to long delays in student grievance redressals.",
    purpose: "Provide a transparent, digital ticketing support workspace for students to report issues.",
    built: "A support dashboard supporting secure student authentication and ticket audits.",
    features: [
      "Automated ticket routing based on issue classification",
      "Real-time resolution timeline tracking",
      "Encrypted messaging channels between students and admin"
    ],
    applicationUrl: "https://ledger-flow.prayukti.dev",
    isReady: false,
  },
  "PROJ-005": {
    id: "PROJ-005",
    title: "Ved",
    domain: "Natural Language Processing",
    status: "Beta Testing",
    progress: 85,
    teamSize: 3,
    duration: "Ongoing",
    lead: "Ankur Kumar, Divyanshu Nath Tripathi, and Suyash Shukla",
    technologies: ["WebRTC", "TensorFlow.js", "Canvas API", "CRDT", "Svelte"],
    context: "Finding precise guidelines within lengthy university regulation PDFs and documents is highly tedious for new students.",
    purpose: "Enable instant regulations assistance using a Retrieval-Augmented Generation model.",
    built: "A chat-based model supporting speech-to-text queries over indexed academic files.",
    features: [
      "RAG model optimized for local web execution",
      "Voice-call mode utilizing low-latency WebRTC streams",
      "Collaborative notes canvas shared between peer accounts"
    ],
    applicationUrl: "https://neural-canvas.prayukti.dev",
    isReady: false,
  },
};

export default function ProjectCaseStudyPage() {
  const params = useParams();
  const id = params.id as string;
  const project = caseStudiesData[id];

  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!project) {
    return notFound();
  }

  const handleExternalClick = (e: React.MouseEvent) => {
    if (!project.isReady) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  return (
    <div className="bg-[var(--bg)] min-h-screen flex flex-col text-white font-sans">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 px-6 max-w-5xl mx-auto w-full relative z-10">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link href="/projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-semibold">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>

        {/* Title Block */}
        <div className="border-b border-white/10 pb-8 mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <span className="text-xs font-mono text-[var(--accent)] uppercase tracking-wider block mb-2">
              {project.domain}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              {project.title}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.applicationUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleExternalClick}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-white hover:bg-[var(--accent-light)] transition-colors rounded-xl font-bold text-sm shadow-lg shadow-blue-500/20"
            >
              <span>Visit Application</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleExternalClick}
                className="inline-flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/10 hover:border-blue-500/40 text-gray-300 hover:text-white transition-all rounded-xl font-bold text-sm"
              >
                <GitBranch className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>

        {/* Grid Meta Information */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-[var(--surface)] border border-white/5 p-6 rounded-2xl mb-12 text-sm">
          <div>
            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block mb-1">Project ID</span>
            <span className="font-bold font-mono text-white">{project.id}</span>
          </div>
          <div>
            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block mb-1">Status</span>
            <span className="font-bold text-blue-400">{project.status}</span>
          </div>
          <div>
            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block mb-1">Development Phase</span>
            <span className="font-bold text-white">{project.progress}% Complete</span>
          </div>
          <div>
            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block mb-1">Lead Developer</span>
            <span className="font-bold text-white">{project.lead}</span>
          </div>
        </div>

        {/* Main Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Details Body */}
          <div className="lg:col-span-8 space-y-8">
            <section>
              <h2 className="text-xl font-bold text-white mb-3">Context &amp; Challenge</h2>
              <p className="text-gray-300 leading-relaxed text-base">{project.context}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Core Purpose</h2>
              <p className="text-gray-300 leading-relaxed text-base">{project.purpose}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">What was Built</h2>
              <p className="text-gray-300 leading-relaxed text-base">{project.built}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feat, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300 text-base">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Tech Stack */}
            <div className="bg-[var(--surface)] border border-white/5 rounded-2xl p-6">
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <Tag className="w-4 h-4 text-blue-400" />
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Support Box */}
            <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/5 border border-blue-500/20 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-yellow-400" />
                Want to contribute?
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                This project is built and maintained by CSIS members. Day scholars and freshers are welcome to contribute code, suggestions, or writeups.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-white hover:underline transition-colors"
              >
                Inquire via Contact
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

      </main>

      <Footer />

      {/* Celebration Coming Soon Popup */}
      <ComingSoonModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        projectName={project.title}
      />
    </div>
  );
}
