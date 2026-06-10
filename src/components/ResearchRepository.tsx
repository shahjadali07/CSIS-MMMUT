"use client";

import { motion } from "framer-motion";
import { Search, FileDown, BookMarked, Layers, Award } from "lucide-react";
import { useState } from "react";

type Paper = {
  id: string;
  title: string;
  authors: string;
  category: string;
  date: string;
  journal: string;
  fileSize: string;
  doi: string;
};

const papersData: Paper[] = [
  {
    id: "REP-2026-04",
    title: "Sub-Second Latency Minimization in Virtual Canvas Simulation Handlers",
    authors: "R. Sharma, G. Verma, S. Ali",
    category: "Web Engineering",
    date: "May 2026",
    journal: "IEEE Transactions on Virtual Systems",
    fileSize: "1.4 MB",
    doi: "10.1109/TVS.2026.042",
  },
  {
    id: "REP-2026-02",
    title: "Predictive Quantization Algorithms on Low-Compute Academic Edge Nodes",
    authors: "A. Patel, S. Dwivedi",
    category: "AI & Machine Learning",
    date: "March 2026",
    journal: "ACM Journal of Machine Learning Research",
    fileSize: "2.1 MB",
    doi: "10.1145/jmlr.2026.011",
  },
  {
    id: "REP-2025-09",
    title: "Zero-Trust Container Sandboxing inside Distributed Virtual VLab Shells",
    authors: "S. Ali, H. Kumar, R. Sharma",
    category: "Cyber Security",
    date: "December 2025",
    journal: "Journal of Computer Security Frontiers",
    fileSize: "3.2 MB",
    doi: "10.1007/jcs.2025.109",
  },
  {
    id: "REP-2025-06",
    title: "Optimized Segment Trees for Real-Time State Grid Pathfinding Simulations",
    authors: "V. Gupta, M. Rao",
    category: "Algorithms & Math",
    date: "October 2025",
    journal: "Society of Industrial Mathematics Conference",
    fileSize: "940 KB",
    doi: "10.1137/sim.2025.07",
  },
  {
    id: "REP-2025-03",
    title: "Student Incubators: Scaling Technical Academic Artifacts into SaaS Ventures",
    authors: "S. Srivastava, R. Mehta",
    category: "Venture Studies",
    date: "August 2025",
    journal: "Harvard Business Review (Student Cohort Studies)",
    fileSize: "1.8 MB",
    doi: "10.5465/hbr.2025.08",
  },
];

export default function ResearchRepository() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPapers = papersData.filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="research" className="relative py-28 px-6 bg-[var(--bg-alt)] border-t border-[var(--border)] overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-sans font-extrabold text-3xl md:text-5xl text-[var(--text)] tracking-tight">
                Research & Publications
              </h2>
              <p className="text-[var(--text-muted)] text-sm md:text-base max-w-xl mt-4 leading-relaxed font-normal">
                Review peer-reviewed journal papers and system design documents authored by CSIS members.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80 shrink-0">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search repository..."
                className="w-full bg-[var(--surface)] border border-[var(--border)] rounded-lg px-4 py-2.5 text-xs text-[var(--text)] font-mono placeholder-[var(--text-muted)]/40 focus:border-[var(--accent)] focus:outline-none transition-colors"
              />
              <Search className="absolute right-3.5 top-3 w-4 h-4 text-[var(--text-muted)]/40" />
            </div>
          </div>
        </div>

        {/* Papers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredPapers.map((paper, i) => (
            <motion.div
              key={paper.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="blueprint-card p-6 flex flex-col justify-between min-h-[250px] tech-corner tech-corner-top-left tech-corner-bottom-right"
            >
              <div>
                {/* ID & Category */}
                <div className="flex items-center justify-between border-b border-[var(--border)] pb-3.5 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-[var(--accent)] font-bold">
                      {paper.id}
                    </span>
                    <span className="text-[var(--text-muted)]/30">|</span>
                    <span className="text-[9px] font-mono text-[var(--text-muted)]/60 uppercase tracking-wider">
                      {paper.category}
                    </span>
                  </div>
                  <span className="text-[9px] font-mono text-[var(--text-muted)]/40">
                    DOI: {paper.doi}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-sans font-bold text-[var(--text)] text-base md:text-lg mb-3 tracking-wide leading-snug">
                  &ldquo;{paper.title}&rdquo;
                </h3>

                {/* Authors */}
                <div className="text-[11px] font-mono text-[var(--text-muted)] mb-1">
                  <span className="text-[var(--text-muted)]/40 mr-1.5">AUTHORS //</span>
                  {paper.authors}
                </div>

                {/* Journal / Publisher */}
                <div className="text-[11px] font-mono text-[var(--text-muted)]/70 italic mb-4">
                  <span className="text-[var(--text-muted)]/40 font-normal not-italic mr-1.5">PUBLISHED //</span>
                  {paper.journal}
                </div>
              </div>

              {/* Footer Panel */}
              <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]/60 text-[10px] font-mono">
                <span className="text-[var(--text-muted)]/40">
                  DATE: {paper.date}
                </span>
                <a
                  href={`/assets/research/${paper.id}.pdf`}
                  download
                  className="flex items-center gap-2 text-[var(--accent)] bg-blue-500/5 border border-blue-500/10 hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] rounded px-3.5 py-1.5 transition-all text-[10px] tracking-wider uppercase font-semibold"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  PDF_LOAD // {paper.fileSize}
                </a>
              </div>
            </motion.div>
          ))}
          {filteredPapers.length === 0 && (
            <div className="col-span-2 text-center py-16 border border-dashed border-[var(--border)] rounded-lg">
              <span className="text-xs font-mono text-[var(--text-muted)]/40 uppercase tracking-widest block">
                No matching publications found in active registry
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
