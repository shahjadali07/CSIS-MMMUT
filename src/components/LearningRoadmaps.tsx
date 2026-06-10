"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, Cpu, Shield, HelpCircle, Layers } from "lucide-react";

type Step = {
  title: string;
  skills: string[];
  checkpoint: string;
};

type Roadmap = {
  domain: string;
  icon: any;
  steps: Step[];
};

const roadmapsData: Roadmap[] = [
  {
    domain: "Web Development",
    icon: BookOpen,
    steps: [
      { title: "Beginner", skills: ["HTML5 & CSS3", "Modern JavaScript", "Tailwind CSS", "Git & GitHub Basics"], checkpoint: "Build responsive personal portfolio" },
      { title: "Intermediate", skills: ["React.js / Next.js", "TypeScript Foundations", "REST APIs & JSON", "SQL & NoSQL Databases"], checkpoint: "Build dynamic collaborative dashboard" },
      { title: "Advanced", skills: ["System Architecture", "State Management", "CI/CD & Serverless DevOps", "Docker & Kubernetes"], checkpoint: "Design scalable cloud database system" },
      { title: "Project", skills: ["Team Project Management", "Agile Execution", "Interactive VLab Capabilities", "Unit/E2E Testing"], checkpoint: "Deploy production beta in Prayukti VLab" },
      { title: "Research", skills: ["Latency Analysis", "Web Accessibility Audits", "Novel Protocols", "Academic Draft Writing"], checkpoint: "Submit paper to IEEE / ACM" },
      { title: "Startup", skills: ["Product Market Fit", "SaaS Licensing", "Pitch Deck Crafting", "Venture Seed Incubation"], checkpoint: "Launch MVP to CSIS Pitch Night" },
    ],
  },
  {
    domain: "AI/ML",
    icon: Cpu,
    steps: [
      { title: "Beginner", skills: ["Python & NumPy", "Linear Algebra & Calculus", "Pandas Data Science", "Jupyter Notebooks"], checkpoint: "Analyze & plot tabular datasets" },
      { title: "Intermediate", skills: ["Scikit-Learn Regression", "Neural Net Basics", "Feature Engineering", "Data Visualizations"], checkpoint: "Train and deploy basic classifier model" },
      { title: "Advanced", skills: ["PyTorch / TensorFlow", "Transformers & LLMs", "CNNs & Computer Vision", "Reinforcement Learning"], checkpoint: "Fine-tune pretrained open LLM models" },
      { title: "Project", skills: ["Distributed Model Training", "Edge AI Integration", "Web Interface Mockups", "HuggingFace Hosting"], checkpoint: "Integrate AI agent assistant in Prayukti VLab" },
      { title: "Research", skills: ["Paper Reading (ArXiv)", "Optimization Math", "Performance Benchmarking", "LaTeX Formatting"], checkpoint: "Publish novel model arch to NeurIPS/ICML" },
      { title: "Startup", skills: ["AI API Monetization", "Compute Allocation Plan", "IP Strategy", "Venture Pitching"], checkpoint: "Incorporate B2B AI Agent Startup" },
    ],
  },
  {
    domain: "Cyber Security",
    icon: Shield,
    steps: [
      { title: "Beginner", skills: ["Networking (TCP/IP)", "Linux Commands & Scripting", "Security Foundations", "Virtualization Concepts"], checkpoint: "Configure secure home laboratory" },
      { title: "Intermediate", skills: ["OWASP Top 10 Hacking", "Nmap & Wireshark Analysis", "SQL Injection exploits", "Burp Suite Essentials"], checkpoint: "Achieve top rank in collegiate CTF" },
      { title: "Advanced", skills: ["Binary Exploits", "Reverse Engineering", "Incident Detection Protocols", "Malware Sandbox Runs"], checkpoint: "Analyze custom kernel driver exploit" },
      { title: "Project", skills: ["Secure API Gateway Build", "Vulnerability Scanner Dev", "SOC Monitoring Panels", "Zero-Trust Layouts"], checkpoint: "Implement security layer on Prayukti core" },
      { title: "Research", skills: ["Zero-Day Vulnerability Search", "Cryptographic Protocols", "Threat Modeling", "CVE Submission Prep"], checkpoint: "Publish CVE advisory and write paper" },
      { title: "Startup", skills: ["MSSP Pricing Strategy", "Compliance Auditing Kit", "Sales & Advisory", "Incubator Pitch"], checkpoint: "Start cybersecurity consulting SaaS" },
    ],
  },
  {
    domain: "DSA",
    icon: Layers,
    steps: [
      { title: "Beginner", skills: ["Time / Space Complexity", "Arrays & Linked Lists", "Recursion Basics", "Sorting & Searching"], checkpoint: "Solve 100 simple problems on Codeforces" },
      { title: "Intermediate", skills: ["Trees & Binary Search Trees", "Stacks & Queues", "Heaps & Priority Queues", "Greedy Algorithms"], checkpoint: "Complete LeetCode 75 Roadmap" },
      { title: "Advanced", skills: ["Dynamic Programming", "Graph Traversals (DFS/BFS)", "Disjoint Set Union (DSU)", "Segment Trees"], checkpoint: "Win local competitive coding sprint" },
      { title: "Project", skills: ["Interactive Graph Visualizer", "Compiler Parser Dev", "Optimization Scripts", "Routing Simulation"], checkpoint: "Build pathfinder engine for virtual labs" },
      { title: "Research", skills: ["Heuristic Algorithm Design", "P vs NP Exploration", "Computational Limits", "Complex Graphs"], checkpoint: "Co-author theoretical algorithm paper" },
      { title: "Startup", skills: ["Platform Licensing", "Technical Interview Prep Kit", "Custom Compiler APIs", "B2B Assessment Tools"], checkpoint: "Launch platform for automated candidate review" },
    ],
  },
];

export default function LearningRoadmaps() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative py-28 px-6 bg-[var(--bg-alt)] border-t border-[var(--border)] overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-14">
          <h2 className="font-sans font-extrabold text-3xl md:text-5xl text-[var(--text)] tracking-tight">
            Learning Roadmaps
          </h2>
          <p className="text-[var(--text-muted)] text-sm md:text-base max-w-2xl mt-4 leading-relaxed font-normal">
            Follow our structural blueprint curves designed to transition you from core concepts into research papers and venture fundable startups.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2 border-b border-[var(--border)] pb-6 mb-12">
          {roadmapsData.map((rm, i) => {
            const Icon = rm.icon;
            const isActive = activeTab === i;
            return (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2.5 px-5 py-2.5 rounded font-mono text-xs uppercase transition-all duration-200 border ${isActive
                  ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/10"
                  : "bg-[var(--surface)] border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--accent)]"
                  }`}
              >
                <Icon className="w-4 h-4" />
                {rm.domain}
              </button>
            );
          })}
        </div>

        {/* Timeline Horizontal flow */}
        <div className="overflow-x-auto pb-6 -mx-6 px-6 scrollbar-thin">
          <div className="min-w-[1200px] grid grid-cols-6 gap-5">
            <AnimatePresence mode="wait">
              {roadmapsData[activeTab].steps.map((step, index) => (
                <motion.div
                  key={step.title + activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.06 }}
                  className="linear-card p-5 flex flex-col justify-between min-h-[290px] group relative"
                >
                  {/* Phase number */}
                  <div className="flex items-center justify-between border-b border-[var(--border)] pb-3 mb-4">
                    <span className="text-[10px] font-mono text-[var(--accent)] font-bold">
                      STAGE 0{index + 1}
                    </span>
                  </div>
                  {/* Step Title & Skills */}
                  <div>
                    <h3 className="font-sans font-bold text-[var(--text)] text-base mb-4 flex items-center gap-1">
                      {step.title}
                      <ArrowRight className="w-3.5 h-3.5 text-[var(--accent)]/40 group-hover:translate-x-1 transition-transform" />
                    </h3>
                    <ul className="space-y-2">
                      {step.skills.map((skill, si) => (
                        <li key={si} className="text-[11px] text-[var(--text-muted)] flex items-start gap-1.5 leading-relaxed">
                          <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full mt-1.5 shrink-0" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Checkpoint Target */}
                  <div className="mt-6 pt-3 border-t border-[var(--border)]/60 text-[10px] font-mono">
                    <span className="text-[var(--text-muted)]/40 block uppercase tracking-wider mb-1">
                      CHECKPOINT // TARGET
                    </span>
                    <span className="text-[var(--text)]/80 line-clamp-2 leading-relaxed">
                      {step.checkpoint}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
