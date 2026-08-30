"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashLoader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Check if user has already seen splash in current session
    const hasSeenSplash = sessionStorage.getItem("csis_splash_seen");
    if (!hasSeenSplash) {
      setIsLoading(true);
      sessionStorage.setItem("csis_splash_seen", "true");
      
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#000000]"
          >
            {/* Ambient Glowing Orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-600/15 rounded-full blur-[80px]" />

            {/* Video Intro */}
            <div className="absolute inset-0 z-0 overflow-hidden w-full h-full">
              {isMounted && (
                <video
                  src="/images/csistheme.mp4"
                  autoPlay
                  muted
                  playsInline
                  suppressHydrationWarning
                  onEnded={() => setIsLoading(false)}
                  onError={() => setIsLoading(false)}
                  className="w-full h-full object-cover opacity-80"
                />
              )}
            </div>

            {/* Skip button */}
            <button
              onClick={() => setIsLoading(false)}
              className="absolute top-6 right-6 z-20 px-3 py-1 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white/80 hover:text-white text-xs font-mono backdrop-blur-md transition-all"
            >
              Skip Intro ✕
            </button>
            
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute bottom-10 sm:bottom-16 flex flex-col items-center gap-2 w-full px-4 text-center"
              >
                <div className="font-space font-bold tracking-widest text-white text-xs sm:text-sm uppercase">
                  Initializing System
                </div>
                <div className="flex gap-1.5 items-center">
                  <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1, delay: 0 }} className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen">
        {children}
      </div>
    </>
  );
}
