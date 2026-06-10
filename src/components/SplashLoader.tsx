"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashLoader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading sequence
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--bg)]"
          >
            {/* Grid overlay */}
            <div className="absolute inset-0 grid-bg opacity-30" />
            
            {/* Glowing Orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--accent)]/10 rounded-full blur-[80px]" />

            <div className="relative z-10 flex flex-col items-center gap-6">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative w-16 h-16"
              >
                <svg viewBox="0 0 36 36" fill="none" className="w-16 h-16 animate-pulse">
                  <polygon
                    points="18,2 34,10 34,26 18,34 2,26 2,10"
                    stroke="url(#splashLogoGrad)"
                    strokeWidth="1.5"
                    fill="rgba(37,99,235,0.06)"
                  />
                  <polygon
                    points="18,8 28,13 28,23 18,28 8,23 8,13"
                    stroke="rgba(37,99,235,0.3)"
                    strokeWidth="1"
                    fill="none"
                  />
                  <circle cx="18" cy="18" r="3" fill="url(#splashLogoGrad)" />
                  <defs>
                    <linearGradient id="splashLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2563EB" />
                      <stop offset="100%" stopColor="#38BDF8" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="font-space font-bold tracking-widest text-[var(--text)] text-xl uppercase">
                  Initializing
                </div>
                <div className="flex gap-1.5 items-center">
                  <motion.div 
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 1, delay: 0 }}
                    className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"
                  />
                  <motion.div 
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                    className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"
                  />
                  <motion.div 
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
                    className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"
                  />
                </div>
                <div className="text-[10px] font-mono text-[var(--text-muted)]/60 uppercase tracking-widest mt-2">
                  Prayukti VLab OS // CSIS
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={false}
        animate={isLoading ? { opacity: 0, scale: 0.98, filter: "blur(10px)" } : { opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </>
  );
}
