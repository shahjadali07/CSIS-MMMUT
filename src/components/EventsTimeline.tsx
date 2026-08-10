"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MapPin, Tag, ArrowRight } from "lucide-react";

type EventItem = {
  id: string;
  title: string;
  category: string;
  date: string;
  time: string;
  location: string;
  status: "UPCOMING" | "ONGOING" | "PAST";
  desc: string;
  linkText?: string;
};

// Extensible mock dataset ready to be replaced with a backend fetch
const initialEvents: EventItem[] = [
  {
    id: "EVT-882",
    title: "Zero-Day Sandbox Capture The Flag",
    category: "COMPETITION",
    date: "June 08, 2026",
    time: "14:00 - 20:00 IST",
    location: "CSIS Sandbox Lab & Online",
    status: "ONGOING",
    desc: "Live-fire security exercise focused on zero-day network routing vulnerabilities and containerized breakout techniques.",
    linkText: "Join Live CTF Sandbox",
  },
  {
    id: "EVT-883",
    title: "Prayukti Summer Hackathon",
    category: "HACKATHON",
    date: "June 25-27, 2026",
    time: "48 Hours Sprint",
    location: "VLab Engineering Wing",
    status: "UPCOMING",
    desc: "Assemble teams to build novel interactive web experiments for the VLab ecosystem. Cash prizes and server funding.",
    linkText: "Register Team // Apply",
  },
  {
    id: "EVT-884",
    title: "Offline LLM Quantization & Deployment",
    category: "WORKSHOP",
    date: "July 05, 2026",
    time: "15:00 - 18:00 IST",
    location: "VLab AI Wing & Zoom",
    status: "UPCOMING",
    desc: "Hands-on guide to quantize, optimize, and deploy small language models (SLMs) on consumer CPU and edge devices.",
    linkText: "Reserve Seat",
  },
  {
    id: "EVT-879",
    title: "Academic Drafting & LaTeX Architecture",
    category: "ACADEMIC",
    date: "May 18, 2026",
    time: "10:00 - 13:00 IST",
    location: "Virtual Conference Room 04",
    status: "PAST",
    desc: "Coaching session on academic paper structuring, literature map generation, and LaTeX formatting for IEEE conferences.",
  },
  {
    id: "EVT-878",
    title: "CSIS Startup Incubation Pitch Night",
    category: "PITCH",
    date: "April 30, 2026",
    time: "18:00 - 21:00 IST",
    location: "Prayukti Auditorium",
    status: "PAST",
    desc: "CSIS cohort student startup groups pitching prototypes to 12 angel investors and academic patent officers.",
  },
];

export default function EventsTimeline() {
  const [filter, setFilter] = useState<"ALL" | "UPCOMING" | "ONGOING" | "PAST">("ALL");

  const filteredEvents = initialEvents.filter((evt) => {
    if (filter === "ALL") return true;
    return evt.status === filter;
  });

  return (
    <section id="timeline" className="relative py-28 px-6 bg-[var(--bg)] border-t border-[var(--border)] overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-10" />
      <div className="absolute right-1/4 top-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-sans font-extrabold text-3xl md:text-5xl text-[var(--text)] tracking-tight">
                Events & Workshops
              </h2>
              <p className="text-[var(--text-muted)] text-sm md:text-base max-w-xl mt-4 leading-relaxed font-normal">
                Join our technical sprints, guest research panels, and startup evaluation nights.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-[var(--surface)] border border-[var(--border)] rounded-lg shrink-0">
              {(["ALL", "UPCOMING", "ONGOING", "PAST"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-3.5 py-1.5 rounded font-mono text-[10px] tracking-wider uppercase transition-all duration-200 ${filter === tab
                      ? "bg-blue-600 text-white shadow"
                      : "text-[var(--text-muted)] hover:text-[var(--text)]"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Line & Cards */}
        <div className="relative border-l border-[var(--border)] pl-6 ml-4 md:pl-10 md:ml-6 space-y-12">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((evt, i) => (
              <motion.div
                key={evt.id}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ duration: 0.3 }}
                className="relative group"
              >
                {/* Timeline Dot with special status styles */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4.5 h-4.5 rounded-full flex items-center justify-center bg-[var(--bg)]">
                  <div
                    className={`w-3.5 h-3.5 rounded-full border-2 ${evt.status === "ONGOING"
                        ? "border-[#10B981] bg-[#10B981] animate-pulse"
                        : evt.status === "UPCOMING"
                          ? "border-[var(--accent)] bg-transparent"
                          : "border-[var(--border)] bg-[var(--surface)]"
                      }`}
                  />
                </div>

                {/* Event blueprint card */}
                <div className="blueprint-card p-6 md:p-8 tech-corner tech-corner-top-left tech-corner-bottom-right">
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border)]/60 pb-4 mb-4 text-[10px] font-mono">
                    <div className="flex items-center gap-3">
                      <span className="text-[var(--accent)] font-bold">
                        {evt.id}
                      </span>
                      <span className="px-2 py-0.5 border border-[var(--border)] rounded text-[var(--text-muted)]/70 uppercase">
                        {evt.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {evt.status === "ONGOING" && (
                        <span className="flex items-center gap-1 text-[#10B981] font-bold">
                          <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full animate-ping" />
                          LIVE_NOW
                        </span>
                      )}
                      {evt.status === "UPCOMING" && (
                        <span className="text-[var(--accent)] font-bold">UPCOMING</span>
                      )}
                      {evt.status === "PAST" && (
                        <span className="text-[var(--text-muted)]/50">COMPLETED</span>
                      )}
                    </div>
                  </div>

                  <h3 className="font-sans font-bold text-[var(--text)] text-xl mb-3 tracking-wide group-hover:text-[var(--accent)] transition-colors">
                    {evt.title}
                  </h3>

                  <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6 font-normal">
                    {evt.desc}
                  </p>

                  {/* Metadata: Date, Time, Location */}
                  <div className="flex flex-wrap gap-5 text-[11px] font-mono text-[var(--text-muted)]/80 pt-4 border-t border-[var(--border)]/40">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[var(--accent)]" />
                      <span>{evt.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[var(--accent)]" />
                      <span>{evt.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[var(--accent)]" />
                      <span>{evt.location}</span>
                    </div>
                  </div>

                  {evt.linkText && (
                    <div className="mt-6">
                      <a
                        href="#recruitment"
                        className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-[var(--accent)] hover:text-[var(--text)] transition-colors"
                      >
                        {evt.linkText}
                        <ArrowRight className="w-3 h-3 ml-0.5" />
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
