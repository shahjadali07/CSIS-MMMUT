"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

type PipelineStep = {
  phase: string;
  title: string;
  telemetry: string;
  icon3d: string;
  desc: string;
  input: string;
  output: string;
};

const pipelineSteps: PipelineStep[] = [
  {
    phase: "PHASE 01",
    title: "Idea Submission",
    telemetry: "SYS.INPUT // INTAKE",
    icon3d: "/images/3d-icons/3d_brain_circuit_1782307995093.png",
    desc: "Draft a technical proposal detailing the Virtual Lab simulation module or tool you intend to build and submit it to the CSIS committee.",
    input: "Raw Concept / Problem Statement",
    output: "System Proposal Document",
  },
  {
    phase: "PHASE 02",
    title: "Review",
    telemetry: "SYS.EVAL // AUDIT",
    icon3d: "/images/3d-icons/3d_eye_icon_1782292794835.png",
    desc: "Mentors, patent advisors, and senior faculty review the computational feasibility, educational alignment, and intellectual novelty of the proposal.",
    input: "System Proposal Document",
    output: "Technical Appraisal Score & Feedback",
  },
  {
    phase: "PHASE 03",
    title: "Team Formation",
    telemetry: "SYS.PEERS // TEAMING",
    icon3d: "/images/3d-icons/3d_network_handshake_1782307985064.png",
    desc: "Recruit specialized roles (Web Developers, AI Developers, Designers, Research Associates) from within the CSIS student directory to fill the project squad.",
    input: "Appraised Proposal",
    output: "Assembled Project Squad (3-7 peers)",
  },
  {
    phase: "PHASE 04",
    title: "Development",
    telemetry: "SYS.BUILD // COMPILER",
    icon3d: "/images/3d-icons/3d_code_laptop_1782308010211.png",
    desc: "Write modular source files, configure API bridges, set up sandboxed databases, and manage features using Agile sprint cycles.",
    input: "Assembled Project Squad",
    output: "Asynchronous Workspace Repo commits",
  },
  {
    phase: "PHASE 05",
    title: "Prototype",
    telemetry: "SYS.DEPLOY // SANITY",
    icon3d: "/images/3d-icons/3d_gear_icon_1782307960436.png",
    desc: "Compile files, run automated E2E tests, and deploy a stable interactive beta model directly into the Prayukti VLab ecosystem for testing.",
    input: "Workspace Repo commits",
    output: "Staged Beta Module in Prayukti VLab",
  },
  {
    phase: "PHASE 06",
    title: "Research",
    telemetry: "SYS.INDEX // REPORT",
    icon3d: "/images/3d-icons/3d_compass_icon_1782292782374.png",
    desc: "Execute benchmarking audits, run performance latency trials, draft latex journal manuscripts, and submit for peer review.",
    input: "Staged Beta Module",
    output: "Camera-Ready Academic Paper Draft",
  },
  {
    phase: "PHASE 07",
    title: "Incubation",
    telemetry: "SYS.Venture // LAUNCH",
    icon3d: "/images/3d-icons/3d_cs_incubation_1782309015147.png",
    desc: "Pitch the working module and research metrics to venture partners, file academic patents, and secure seed funding for business incorporation.",
    input: "Camera-Ready Paper",
    output: "Incorporated Student Tech Startup",
  },
];

export default function InnovationPipeline() {
  const [activeStep, setActiveStep] = useState(0);

  const activeData = pipelineSteps[activeStep];

  return (
    <section id="pipeline" className="relative py-28 px-6 bg-[var(--bg)] border-t border-[var(--border)] overflow-hidden">
      {/* Blueprint Grid background & overlay */}
      <div className="absolute inset-0 dot-pattern opacity-10" />
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-14">
          <h2 className="font-sans font-extrabold text-3xl md:text-5xl text-[var(--text)] tracking-tight">
            Innovation Pipeline
          </h2>
          <p className="text-[var(--text-muted)] text-sm md:text-base max-w-2xl mt-4 leading-relaxed font-normal">
            Track the progression of an engineering project as it evolves from a student concept into an academic patent and venture-funded startup.
          </p>
        </div>

        {/* Visual Pipeline Navigation (Flowchart Nodes) */}
        <div className="relative mb-12 border border-[var(--border)] bg-[var(--bg-alt)] rounded-xl p-6 md:p-8 flex flex-col items-center select-none overflow-hidden tech-corner tech-corner-top-left tech-corner-bottom-right">
          {/* Faint animated pathway overlay (Desktop) */}
          <div className="absolute top-1/2 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#38BDF8]/20 to-transparent -translate-y-1/2 hidden lg:block" />

          <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-6">
            {pipelineSteps.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div key={idx} className="flex items-center gap-4 lg:flex-col lg:text-center w-full lg:w-auto">
                  {/* Circle Node */}
                  <button
                    onClick={() => setActiveStep(idx)}
                    className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-300 relative z-20 overflow-hidden ${isSelected
                        ? "bg-blue-600/20 border-blue-500 shadow-lg shadow-blue-500/35 scale-110"
                        : "bg-[var(--surface)] border-[var(--border)] hover:border-[var(--accent)]"
                      }`}
                  >
                    <Image src={step.icon3d} alt={step.title} fill className="object-cover scale-150" />
                    {/* Pulsing indicator for current node */}
                    {isSelected && (
                      <span className="absolute inset-0 rounded-full border border-[#38BDF8] animate-ping opacity-75" />
                    )}
                  </button>

                  {/* Text labels */}
                  <div className="text-left lg:text-center">
                    <span className="text-[9px] font-mono text-[var(--text-muted)]/40 block uppercase">
                      {step.phase}
                    </span>
                    <span className={`text-xs font-sans font-bold block ${isSelected ? "text-[var(--text)]" : "text-[var(--text-muted)]"}`}>
                      {step.title}
                    </span>
                  </div>

                  {/* Connecting Chevrons for Mobile (hidden on desktop) */}
                  {idx < pipelineSteps.length - 1 && (
                    <ChevronRight className="w-5 h-5 text-[#1E293B] rotate-90 lg:rotate-0 self-center hidden" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Node Information */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="blueprint-card p-6 md:p-10 tech-corner tech-corner-top-right tech-corner-bottom-left"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Side: Icon & Description */}
              <div className="lg:col-span-8 space-y-6">
                <div className="flex items-center gap-3.5 pb-4 border-b border-[var(--border)]">
                  <div className="w-16 h-16 bg-blue-600/10 border border-blue-500/25 rounded-xl shrink-0 relative overflow-hidden drop-shadow-xl">
                    <Image src={activeData.icon3d} alt={activeData.title} fill className="object-cover scale-[1.3]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[var(--accent)] tracking-widest uppercase block mb-0.5">
                      {activeData.telemetry}
                    </span>
                    <h3 className="font-sans font-extrabold text-[var(--text)] text-2xl tracking-wide">
                      {activeData.title}
                    </h3>
                  </div>
                </div>
                <p className="text-[var(--text-muted)] text-sm md:text-base leading-relaxed font-normal">
                  {activeData.desc}
                </p>
              </div>

              {/* Right Side: Process Inputs/Outputs */}
              <div className="lg:col-span-4 bg-[var(--bg-alt)] border border-[var(--border)] rounded-xl p-5 md:p-6 space-y-4">
                <div>
                  <span className="text-[9px] font-mono text-[var(--text-muted)]/50 block uppercase tracking-wider mb-1">
                    SYS.INPUT_PARAMS //
                  </span>
                  <div className="text-xs font-mono text-[var(--text)] bg-[var(--surface)] border border-[var(--border)] px-3.5 py-2.5 rounded">
                    {activeData.input}
                  </div>
                </div>
                <div>
                  <span className="text-[9px] font-mono text-[var(--text-muted)]/50 block uppercase tracking-wider mb-1">
                    SYS.OUTPUT_VAL //
                  </span>
                  <div className="text-xs font-mono text-[#10B981] bg-[var(--surface)] border border-[var(--border)] px-3.5 py-2.5 rounded">
                    {activeData.output}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
