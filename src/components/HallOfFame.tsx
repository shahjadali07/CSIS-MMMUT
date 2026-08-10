"use client";

import { motion } from "framer-motion";
import { Trophy, Code2, Award, Landmark, Crown } from "lucide-react";

type LeaderItem = {
  category: "Best Innovator" | "Top Developer" | "Research Excellence" | "Startup Leader";
  icon: any;
  name: string;
  batch: string;
  metricLabel: string;
  metricValue: string;
  achievement: string;
  rank: number;
};

const leaders: LeaderItem[] = [
  {
    category: "Best Innovator",
    icon: Crown,
    name: "Abhinav Singh",
    batch: "CSE Class of '26",
    metricLabel: "Proto Markers",
    metricValue: "142 Nodes",
    achievement: "Architected the primary interactive terminal shell rendering engine inside Prayukti VLab.",
    rank: 1,
  },
  {
    category: "Top Developer",
    icon: Code2,
    name: "Aditi Mishra",
    batch: "ECE Class of '27",
    metricLabel: "Github Commits",
    metricValue: "948 Pushes",
    achievement: "Committed core hooks for asynchronous multiplayer state synchronization inside workspace rooms.",
    rank: 2,
  },
  {
    category: "Research Excellence",
    icon: Award,
    name: "Deepak Dwivedi",
    batch: "MTech Class of '26",
    metricLabel: "IEEE Publications",
    metricValue: "08 Indexed",
    achievement: "Co-authored predictive edge classification paper, securing ACM Student Research funding.",
    rank: 3,
  },
  {
    category: "Startup Leader",
    icon: Landmark,
    name: "Kriti Gupta",
    batch: "Alumni Class of '23",
    metricLabel: "Seed Funding",
    metricValue: "$50K USD",
    achievement: "Founded LedgerFlow.ai, transforming a CSIS prototype project into an incorporated fintech SaaS.",
    rank: 4,
  },
];

export default function HallOfFame() {
  return (
    <section id="hall-of-fame" className="relative py-32 px-6 overflow-hidden">
      
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-yellow-500 opacity-[0.03] blur-[150px] rounded-full pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Hall of <span className="text-[var(--text-dim)]">Fame</span>
          </h2>
          <p className="text-[var(--text-muted)] text-base md:text-lg leading-relaxed">
            Honoring students who pushed the boundaries of innovation, development, research, and entrepreneurship within the society.
          </p>
        </div>

        {/* Leaderboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* First place — large hero card */}
          {leaders.slice(0, 1).map((leader) => {
            const Icon = leader.icon;
            return (
              <motion.div
                key={leader.category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="lg:col-span-5 linear-card p-10 flex flex-col justify-between min-h-[340px]"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-full border border-[var(--border)] bg-[var(--surface-hover)] flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(250,204,21,0.1)]">
                    #1
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center text-yellow-500">
                    <Trophy className="w-6 h-6" />
                  </div>
                </div>

                <div className="flex-1">
                  <span className="text-xs font-medium text-[var(--text-dim)] block mb-1">
                    {leader.category}
                  </span>
                  <h3 className="font-bold text-3xl text-white mb-3 tracking-tight">{leader.name}</h3>
                  <p className="text-[var(--text-muted)] text-base leading-relaxed mb-6">{leader.achievement}</p>
                </div>

                <div className="flex flex-col gap-1 text-sm pt-6 border-t border-[var(--border)]">
                  <div className="flex justify-between items-center">
                    <span className="text-[var(--text-muted)]">{leader.metricLabel}</span>
                    <span className="font-semibold text-white">{leader.metricValue}</span>
                  </div>
                  <div className="text-xs text-[var(--text-dim)] mt-2">{leader.batch}</div>
                </div>
              </motion.div>
            );
          })}

          {/* Ranks 2–4 stacked */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {leaders.slice(1).map((leader, i) => {
              const Icon = leader.icon;
              return (
                <motion.div
                  key={leader.category}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.12 + i * 0.08 }}
                  className="linear-card flex flex-col sm:flex-row items-start sm:items-center p-6 gap-6"
                >
                  {/* Rank badge */}
                  <div className="w-12 h-12 rounded-full border border-[var(--border)] bg-[var(--surface-hover)] flex items-center justify-center font-bold text-[var(--text-muted)] shrink-0">
                    #{leader.rank}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium text-[var(--text-dim)]">{leader.category}</span>
                    </div>
                    <h3 className="font-bold text-lg text-white tracking-tight mb-1">{leader.name}</h3>
                    <p className="text-[var(--text-muted)] text-sm leading-relaxed line-clamp-2">{leader.achievement}</p>
                  </div>

                  {/* Metric */}
                  <div className="shrink-0 sm:text-right flex flex-col sm:items-end w-full sm:w-auto mt-2 sm:mt-0 pt-4 sm:pt-0 border-t border-[var(--border)] sm:border-none">
                    <div className="text-xs text-[var(--text-muted)] mb-1">{leader.metricLabel}</div>
                    <div className="font-semibold text-white bg-[var(--surface-hover)] border border-[var(--border)] px-3 py-1 rounded-full text-sm inline-block">
                      {leader.metricValue}
                    </div>
                    <div className="text-xs text-[var(--text-dim)] mt-2">{leader.batch}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
