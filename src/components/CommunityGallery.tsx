"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Terminal } from "lucide-react";

type GalleryItem = {
  type: "GRADIENT" | "CODE" | "SCHEMATIC" | "STAT";
  title: string;
  tag: string;
  content?: string;
  aspect: string;
  gradientFrom?: string;
  gradientTo?: string;
  stat?: { value: string; label: string };
};

const items: GalleryItem[] = [
  {
    type: "GRADIENT",
    tag: "SYS.FIELD_SHOT // 01",
    title: "Student Cohort Hackathon — June 2026",
    gradientFrom: "#1a1f35",
    gradientTo: "#0F172A",
    aspect: "md:col-span-2 md:row-span-1 h-64",
  },
  {
    type: "CODE",
    tag: "SYS.CODE_DUMP // 02",
    title: "Core Simulation Loop",
    content: `// Prayukti VLab Core AST Parser
function compileNode(node: ASTNode): CompiledResult {
  const context = resolveContext(node.scopeId);
  switch (node.type) {
    case NodeType.VIRTUAL_CIRCUIT:
      return compiler.emitCircuit(node, context);
    case NodeType.LLM_PROMPT_GATE:
      return compiler.emitLLMQuery(node, context);
    default:
      throw new CompileError("ERR_NODE_UNSUPPORTED");
  }
}`,
    aspect: "md:col-span-1 md:row-span-2 h-[420px]",
  },
  {
    type: "STAT",
    tag: "SYS.METRIC // 03",
    title: "Active GitHub Contributions",
    stat: { value: "948+", label: "COMMITS_THIS_CYCLE" },
    aspect: "md:col-span-1 md:row-span-1 h-72",
  },
  {
    type: "GRADIENT",
    tag: "SYS.FIELD_SHOT // 04",
    title: "Ecosystem Node Telemetry Dashboard",
    gradientFrom: "#0a1628",
    gradientTo: "#0F172A",
    aspect: "md:col-span-2 md:row-span-1 h-72",
  },
  {
    type: "SCHEMATIC",
    tag: "SYS.DIAGRAM // 05",
    title: "Network Node Schema",
    aspect: "md:col-span-1 md:row-span-1 h-64",
  },
];

// Beautiful SVG patterns for gradient cards
function HackathonVisual() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-[var(--bg-alt)]">
      {/* Grid overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hack-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="var(--accent)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hack-grid)" />
      </svg>
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-[40px]" />
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-emerald-500/15 rounded-full blur-[30px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-600/10 rounded-full blur-[60px]" />
      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
        <div className="text-[10px] font-mono text-[var(--accent)]/60 tracking-widest uppercase animate-pulse">LIVE_SESSION // COHORT_2026</div>
        <div className="text-[var(--text)] font-bold text-xl font-sans tracking-wide text-center px-6">Summer Hackathon Sprint</div>
        <div className="flex gap-3">
          {["WEB", "AI", "SEC", "DSA"].map((tag) => (
            <span key={tag} className="text-[9px] font-mono px-2 py-1 border border-[var(--accent)]/20 text-[var(--accent)]/70 rounded uppercase">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function TelemetryVisual() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-[var(--bg-alt)]">
      {/* Animated bars */}
      <div className="absolute inset-0 flex items-end justify-around gap-1 p-6 pb-8">
        {[65, 82, 47, 91, 58, 73, 88, 42, 95, 67, 79, 53].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm bg-gradient-to-t from-[var(--accent)]/40 to-[var(--accent-light)]/60 transition-all duration-700"
            style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}
          />
        ))}
      </div>
      {/* Horizontal reference line */}
      <div className="absolute left-6 right-6 top-1/3 h-px bg-[var(--accent)]/15" />
      {/* Labels */}
      <div className="absolute top-4 left-6 right-6 flex justify-between text-[9px] font-mono text-[var(--text-muted)]/50">
        <span>TELEMETRY_NODES</span>
        <span className="text-[#10B981]">SYS.ONLINE</span>
      </div>
    </div>
  );
}

export default function CommunityGallery() {
  return (
    <section id="gallery" className="relative py-28 px-6 bg-[var(--bg)] border-t border-[var(--border)] overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-10" />
      <div className="absolute left-1/4 bottom-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-14">
          <h2 className="font-sans font-extrabold text-3xl md:text-5xl text-[var(--text)] tracking-tight">
            Community Gallery
          </h2>
          <p className="text-[var(--text-muted)] text-sm md:text-base max-w-2xl mt-4 leading-relaxed font-normal">
            A window into the CSIS labs: live telemetry dashboards, prototype hardware models, compiler source listings, and active sprints.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`blueprint-card p-4 flex flex-col justify-between overflow-hidden group tech-corner tech-corner-top-left tech-corner-bottom-right ${item.aspect}`}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-3 mb-4 text-[9px] font-mono">
                <span className="text-[var(--accent)] font-bold">
                  {item.tag}
                </span>
                <span className="text-[var(--text-muted)]/40 uppercase">
                  {item.type}
                </span>
              </div>

              {/* Card Body */}
              <div className="flex-1 flex items-center justify-center overflow-hidden w-full relative rounded border border-[var(--border)]/40">
                {item.type === "GRADIENT" && item.tag.includes("01") && (
                  <div className="w-full h-full">
                    <HackathonVisual />
                  </div>
                )}

                {item.type === "GRADIENT" && item.tag.includes("04") && (
                  <div className="w-full h-full">
                    <TelemetryVisual />
                  </div>
                )}

                {item.type === "CODE" && item.content && (
                  <pre className="w-full h-full p-4 overflow-y-auto font-mono text-[10px] text-[var(--text-muted)] leading-relaxed text-left select-all scrollbar-thin">
                    <code className="text-[var(--accent)]">{"// "}</code>
                    <code>{item.content}</code>
                  </pre>
                )}

                {item.type === "STAT" && item.stat && (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-[var(--bg-alt)] p-6">
                    <div className="text-[9px] font-mono text-[var(--text-muted)]/50 uppercase tracking-wider">
                      {item.stat.label}
                    </div>
                    <div className="font-mono font-bold text-5xl text-[var(--text)] tracking-tight">
                      {item.stat.value}
                    </div>
                    <div className="flex items-center gap-1.5 text-[#10B981] text-[10px] font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                      ACTIVE_PUSHES
                    </div>
                    {/* Mini bar chart */}
                    <div className="flex items-end gap-0.5 h-8 mt-2">
                      {[3, 7, 5, 9, 6, 8, 4, 10, 7, 5].map((h, idx) => (
                        <div
                          key={idx}
                          className="w-2 rounded-sm bg-blue-500/30 group-hover:bg-blue-500/50 transition-colors"
                          style={{ height: `${h * 10}%` }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {item.type === "SCHEMATIC" && (
                  <div className="w-full h-full p-4 flex items-center justify-center bg-[var(--bg-alt)] relative">
                    {/* Animated SVG technical graph */}
                    <svg viewBox="0 0 220 140" className="w-full max-w-[200px] opacity-40 group-hover:opacity-90 transition-opacity duration-500">
                      {/* Connection lines */}
                      <line x1="44" y1="70" x2="96" y2="35" stroke="var(--accent)" strokeWidth="0.6" strokeDasharray="4 2" opacity="0.6" />
                      <line x1="44" y1="70" x2="96" y2="105" stroke="var(--accent)" strokeWidth="0.6" strokeDasharray="4 2" opacity="0.6" />
                      <line x1="104" y1="35" x2="170" y2="70" stroke="var(--accent)" strokeWidth="0.6" strokeDasharray="4 2" opacity="0.6" />
                      <line x1="104" y1="105" x2="170" y2="70" stroke="var(--accent)" strokeWidth="0.6" strokeDasharray="4 2" opacity="0.6" />
                      <line x1="100" y1="39" x2="100" y2="101" stroke="var(--accent)" strokeWidth="0.6" strokeDasharray="4 2" opacity="0.4" />
                      {/* Node circles */}
                      <circle cx="40" cy="70" r="6" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
                      <circle cx="40" cy="70" r="2.5" fill="var(--accent)" />
                      <circle cx="100" cy="35" r="6" fill="none" stroke="#10B981" strokeWidth="1.5" />
                      <circle cx="100" cy="35" r="2.5" fill="#10B981" />
                      <circle cx="100" cy="105" r="6" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
                      <circle cx="100" cy="105" r="2.5" fill="var(--accent)" />
                      <circle cx="174" cy="70" r="6" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
                      <circle cx="174" cy="70" r="2.5" fill="var(--accent)" />
                      {/* Labels */}
                      <text x="24" y="60" fill="rgba(100,116,139,0.7)" fontSize="7" fontFamily="monospace">INPUT</text>
                      <text x="88" y="25" fill="rgba(100,116,139,0.7)" fontSize="7" fontFamily="monospace">NODE_A</text>
                      <text x="88" y="122" fill="rgba(100,116,139,0.7)" fontSize="7" fontFamily="monospace">NODE_B</text>
                      <text x="162" y="60" fill="rgba(100,116,139,0.7)" fontSize="7" fontFamily="monospace">OUTPUT</text>
                    </svg>
                  </div>
                )}
              </div>

              {/* Card Footer */}
              <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-[var(--text-muted)]/60 pt-2">
                <span>{item.title}</span>
                <span className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  REF.DUMP
                  <ArrowUpRight className="w-3 h-3 text-[var(--accent)]" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
