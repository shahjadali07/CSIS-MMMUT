"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, FolderHeart } from "lucide-react";
import Link from "next/link";

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
};

const colors = [
  "bg-blue-500",
  "bg-purple-500",
  "bg-indigo-500",
  "bg-cyan-500",
  "bg-pink-500",
  "bg-amber-400"
];

export default function ComingSoonModal({
  isOpen,
  onClose,
  projectName
}: {
  isOpen: boolean;
  onClose: () => void;
  projectName: string;
}) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (isOpen) {
      const generated = Array.from({ length: 25 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100, // percentage horizontal placement
        y: Math.random() * -100 - 20, // vertical starting point above modal boundary
        size: Math.random() * 6 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 0.4,
        duration: Math.random() * 2 + 1.2
      }));
      setParticles(generated);
    } else {
      setParticles([]);
    }
  }, [isOpen]);

  // Support closing modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
            className="relative w-full max-w-md bg-[#050505] border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl overflow-hidden z-10 text-center"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-48 h-48 bg-blue-500/10 blur-2xl rounded-full pointer-events-none" />

            {/* Falling Confetti Particles Container */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2.5rem]">
              {particles.map((p) => (
                <motion.div
                  key={p.id}
                  className={`absolute rounded-full opacity-75 ${p.color}`}
                  style={{
                    left: `${p.x}%`,
                    width: p.size,
                    height: p.size,
                  }}
                  initial={{ y: p.y, opacity: 1 }}
                  animate={{ y: 350, opacity: 0, rotate: 360 }}
                  transition={{
                    duration: p.duration,
                    delay: p.delay,
                    ease: "easeOut"
                  }}
                />
              ))}
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-xl border border-white/5 bg-white/5 text-gray-400 hover:text-white hover:border-white/15 transition-all"
              aria-label="Close Modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Icon Block */}
            <div className="flex justify-center mb-6">
              <div className="relative w-16 h-16 bg-blue-600/10 border border-blue-500/25 rounded-2xl flex items-center justify-center relative group">
                <div className="absolute inset-0 bg-blue-500/15 blur-xl rounded-2xl pointer-events-none" />
                <FolderHeart className="w-8 h-8 text-blue-400" />
                <Sparkles className="w-4 h-4 text-amber-400 absolute -top-1 -right-1 animate-pulse" />
              </div>
            </div>

            {/* Content */}
            <h3 className="text-2xl font-black text-white mb-2">
              {projectName}
            </h3>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                Coming Soon
              </span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              We are currently designing and establishing this project within the CSIS student ecosystem. Development is in progress under the Prayukti VLab workspace, and updates will be pushed shortly.
            </p>

            {/* Actions */}
            <div className="flex flex-col gap-3">
              <button
                onClick={onClose}
                className="w-full py-3.5 rounded-xl bg-white text-black hover:bg-neutral-200 transition-colors font-bold text-sm"
              >
                Go Back
              </button>
              <Link
                href="/projects"
                onClick={onClose}
                className="w-full py-3.5 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white transition-all font-bold text-sm block"
              >
                Explore Other Projects
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
