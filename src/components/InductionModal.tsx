"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Rocket, Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface InductionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InductionModal({ isOpen, onClose }: InductionModalProps) {
  const [mounted, setMounted] = useState(false);

  // Mount only on client to enable portal rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="induction-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: "rgba(0,0,0,0.65)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
        >
          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.88, opacity: 0, y: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.88, opacity: 0, y: 24 }}
            transition={{ type: "spring", damping: 22, stiffness: 280 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#0D0D0D",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "20px",
              width: "100%",
              maxWidth: "480px",
              padding: "2rem",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 25px 60px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.05)",
            }}
          >
            {/* Background glows */}
            <div style={{
              position: "absolute", top: 0, right: 0,
              width: "200px", height: "200px",
              background: "radial-gradient(circle, rgba(94,106,210,0.15) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />
            <div style={{
              position: "absolute", bottom: 0, left: 0,
              width: "200px", height: "200px",
              background: "radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />

            {/* Close Button */}
            <button
              onClick={onClose}
              style={{
                position: "absolute", top: "1rem", right: "1rem",
                padding: "6px", background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)", borderRadius: "50%",
                cursor: "pointer", color: "#A1A1AA", display: "flex",
                alignItems: "center", justifyContent: "center",
                transition: "all 0.2s", zIndex: 10,
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
              onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.06)")}
            >
              <X size={16} />
            </button>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginTop: "0.5rem", position: "relative", zIndex: 10 }}>
              {/* Floating Icon */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  width: "64px", height: "64px", borderRadius: "16px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "1.5rem", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
                }}
              >
                <Sparkles size={28} color="#818CF8" />
              </motion.div>

              {/* Heading */}
              <h3 style={{
                fontSize: "1.75rem", fontWeight: 800,
                color: "#FFFFFF", letterSpacing: "-0.04em",
                marginBottom: "0.25rem", lineHeight: 1.2,
              }}>
                Induction 2026
              </h3>
              <span style={{
                fontSize: "1.5rem", fontWeight: 800,
                background: "linear-gradient(135deg, #60A5FA, #A78BFA)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                backgroundClip: "text", display: "block", marginBottom: "1rem",
              }}>
                Coming Soon..
              </span>

              {/* Description */}
              <p style={{
                color: "#A1A1AA", fontSize: "0.9rem",
                marginBottom: "1.75rem", lineHeight: 1.7, maxWidth: "340px",
              }}>
                Our next cohort application cycle is currently in preparation.
                Get ready to build, innovate, and shape the future with CSIS.
              </p>

              {/* Info Cards */}
              <div style={{
                width: "100%", display: "grid",
                gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "1.75rem",
              }}>
                <div style={{
                  background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "12px", padding: "0.875rem",
                  display: "flex", alignItems: "flex-start", gap: "0.6rem",
                }}>
                  <Calendar size={18} color="#60A5FA" style={{ marginTop: "2px", flexShrink: 0 }} />
                  <div style={{ textAlign: "left" }}>
                    <p style={{ fontSize: "0.8rem", fontWeight: 600, color: "#fff", marginBottom: "2px" }}>Timeline</p>
                    <p style={{ fontSize: "0.72rem", color: "#71717A" }}>Stay tuned for dates</p>
                  </div>
                </div>
                <div style={{
                  background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "12px", padding: "0.875rem",
                  display: "flex", alignItems: "flex-start", gap: "0.6rem",
                }}>
                  <Rocket size={18} color="#A78BFA" style={{ marginTop: "2px", flexShrink: 0 }} />
                  <div style={{ textAlign: "left" }}>
                    <p style={{ fontSize: "0.8rem", fontWeight: 600, color: "#fff", marginBottom: "2px" }}>Preparation</p>
                    <p style={{ fontSize: "0.72rem", color: "#71717A" }}>Brush up your skills</p>
                  </div>
                </div>
              </div>

              {/* Action */}
              <button
                onClick={onClose}
                style={{
                  width: "100%", padding: "0.875rem",
                  background: "#FFFFFF", color: "#000",
                  fontWeight: 600, fontSize: "0.9rem",
                  borderRadius: "12px", border: "none",
                  cursor: "pointer", transition: "background 0.2s, transform 0.1s",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "#E5E5E5")}
                onMouseLeave={e => (e.currentTarget.style.background = "#FFFFFF")}
              >
                Got it, I&apos;ll wait!
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
