"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Send, Check, Zap, Brain, BookOpen, Pen, LayoutList } from "lucide-react";

type Position = {
  title: string;
  scope: string;
  requirements: string[];
  slots: number;
  icon: any;
};

const positions: Position[] = [
  {
    title: "Web Developer",
    scope: "Core Virtual Lab terminals and state rendering frameworks.",
    requirements: ["React / Next.js", "TypeScript", "Tailwind CSS"],
    slots: 3,
    icon: Zap,
  },
  {
    title: "AI Developer",
    scope: "Small Language Model quantization and local compilation scripts.",
    requirements: ["Python & NumPy", "PyTorch", "SLM Fine-tuning"],
    slots: 2,
    icon: Brain,
  },
  {
    title: "Research Associate",
    scope: "Authoring academic papers and mathematical model documentation.",
    requirements: ["Technical Writing", "LaTeX", "Algorithm Analysis"],
    slots: 2,
    icon: BookOpen,
  },
  {
    title: "Designer",
    scope: "Blueprint-style design systems, layouts, and SVG vector logic.",
    requirements: ["Figma Layouts", "Vanilla CSS", "Micro-animations"],
    slots: 1,
    icon: Pen,
  },
  {
    title: "Project Manager",
    scope: "Orchestrating Agile sprints and managing society cohorts.",
    requirements: ["Linear/Notion", "Communication", "Agile Sprints"],
    slots: 1,
    icon: LayoutList,
  },
];

export default function RecruitmentZone() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPos, setSelectedPos] = useState<Position | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleApplyClick = (pos: Position) => {
    setSelectedPos(pos);
    setModalOpen(true);
    setFormSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setModalOpen(false);
      setFormSubmitted(false);
    }, 2500);
  };

  return (
    <section id="recruitment" className="relative py-32 px-6 overflow-hidden bg-[var(--bg)] border-t border-[var(--border)]">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-[var(--border)] pb-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Open <span className="text-[var(--text-dim)]">Roles</span>
            </h2>
            <p className="text-[var(--text-muted)] text-base max-w-lg leading-relaxed">
              Join the core team. We are looking for passionate engineers, researchers, and designers to build the future of Prayukti VLab.
            </p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] text-sm font-medium shrink-0">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            {positions.reduce((a, b) => a + b.slots, 0)} open positions
          </div>
        </div>

        {/* Roles List */}
        <div className="flex flex-col gap-4">
          {positions.map((pos, i) => {
            const Icon = pos.icon;
            return (
              <motion.div
                key={pos.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="linear-card group flex flex-col md:flex-row md:items-center justify-between p-6 gap-6 cursor-pointer"
                onClick={() => handleApplyClick(pos)}
              >
                <div className="flex items-start gap-6 w-full md:w-1/3">
                  <div className="w-10 h-10 rounded-lg bg-[var(--surface-hover)] border border-[var(--border)] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[var(--text-muted)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1 tracking-tight">{pos.title}</h3>
                    <div className="text-sm text-[var(--text-muted)]">{pos.slots} slot{pos.slots > 1 ? "s" : ""} open</div>
                  </div>
                </div>

                <div className="w-full md:w-1/3 hidden lg:block">
                  <p className="text-sm text-[var(--text-dim)] leading-relaxed line-clamp-2">{pos.scope}</p>
                </div>

                <div className="w-full md:w-1/3 flex items-center justify-between md:justify-end gap-6">
                  <div className="flex flex-wrap gap-2 justify-start md:justify-end">
                    {pos.requirements.slice(0, 2).map((req) => (
                      <span key={req} className="px-2.5 py-1 rounded-md text-[11px] font-medium border border-[var(--border)] bg-[var(--surface-hover)] text-[var(--text-muted)]">
                        {req}
                      </span>
                    ))}
                  </div>
                  <div className="w-8 h-8 rounded-full border border-[var(--border)] bg-[var(--surface-hover)] flex items-center justify-center text-[var(--text-muted)] group-hover:text-white group-hover:bg-white/10 transition-colors shrink-0">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Application Modal */}
      <AnimatePresence>
        {modalOpen && selectedPos && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-lg linear-card p-8 shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--border)]">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">Apply for {selectedPos.title}</h3>
                  <p className="text-sm text-[var(--text-muted)] mt-1">Submit your application below.</p>
                </div>
                <button
                  onClick={() => setModalOpen(false)}
                  className="p-2 rounded-full hover:bg-[var(--surface-hover)] text-[var(--text-muted)] hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center py-10 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 flex items-center justify-center mb-6">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Application Received</h4>
                  <p className="text-[var(--text-muted)] text-sm max-w-xs mx-auto">
                    Thanks for applying. We will review your profile and get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="text-sm font-medium text-[var(--text-muted)] block mb-2">Full Name</label>
                    <input type="text" required placeholder="John Doe"
                      className="w-full bg-[var(--surface-hover)] border border-[var(--border)] rounded-xl px-4 py-3 text-sm text-white focus:border-[var(--accent)] focus:outline-none transition-colors" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium text-[var(--text-muted)] block mb-2">Email</label>
                      <input type="email" required placeholder="john@example.com"
                        className="w-full bg-[var(--surface-hover)] border border-[var(--border)] rounded-xl px-4 py-3 text-sm text-white focus:border-[var(--accent)] focus:outline-none transition-colors" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-[var(--text-muted)] block mb-2">Roll Number</label>
                      <input type="text" required placeholder="23BCE1234"
                        className="w-full bg-[var(--surface-hover)] border border-[var(--border)] rounded-xl px-4 py-3 text-sm text-white focus:border-[var(--accent)] focus:outline-none transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[var(--text-muted)] block mb-2">Why are you a good fit?</label>
                    <textarea required rows={4} placeholder="Tell us about your experience..."
                      className="w-full bg-[var(--surface-hover)] border border-[var(--border)] rounded-xl px-4 py-3 text-sm text-white focus:border-[var(--accent)] focus:outline-none transition-colors resize-none" />
                  </div>
                  <div className="pt-4">
                    <button type="submit" className="w-full btn-primary py-3.5 text-sm">
                      Submit Application
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
