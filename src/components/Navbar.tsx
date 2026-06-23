"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Zap, ArrowUpRight, FlaskConical } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import InductionModal from "./InductionModal";

const navLinks = [
  { href: "/", label: "Home", exact: true },
  { href: "/#about", label: "About", exact: false },
  { href: "/team", label: "Team", exact: false },
  { href: "/projects", label: "Projects", exact: false },
  { href: "/research", label: "Research", exact: false, pulse: true },
  { href: "/events", label: "Events", exact: false },
  { href: "/blogs", label: "Blog", exact: false },
  { href: "/contact", label: "Contact", exact: false },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [glowVisible, setGlowVisible] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const lastY = useRef(0);

  // Track scroll for styling changes
  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 20);
  });

  // Cursor glow tracking inside navbar
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!navRef.current) return;
    const rect = navRef.current.getBoundingClientRect();
    setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    nav.addEventListener("mousemove", handleMouseMove);
    nav.addEventListener("mouseenter", () => setGlowVisible(true));
    nav.addEventListener("mouseleave", () => setGlowVisible(false));
    return () => {
      nav.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  // Lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isActive = (link: (typeof navLinks)[0]) => {
    if (link.exact) return pathname === link.href;
    if (link.href.startsWith("/#")) return false;
    return pathname.startsWith(link.href) && link.href !== "/";
  };

  return (
    <>
      <motion.nav
        ref={navRef}
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${
          scrolled
            ? "h-[80px]"
            : "h-[96px]"
        }`}
      >
        {/* Animated background glow behind the navbar */}
        <div className={`absolute inset-0 -z-20 transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`}>
           <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#111827] to-[#0B1120] opacity-95 backdrop-blur-2xl" />
           <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/20 shadow-[0_1px_15px_rgba(255,255,255,0.1)]" />
           {/* Subtle pulsing background glow */}
           <div className="absolute top-0 left-1/4 w-1/2 h-[100px] bg-blue-500/10 blur-[50px] animate-pulse pointer-events-none" />
           <div className="absolute top-0 right-1/4 w-1/4 h-[100px] bg-purple-500/10 blur-[50px] animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />
        </div>

        {/* Base background when not scrolled (optional) */}
        {!scrolled && (
          <div className="absolute inset-0 bg-transparent -z-20" />
        )}

        {/* Cursor tracking glow */}
        <div
          className="absolute pointer-events-none inset-0 overflow-hidden rounded-none z-0"
          style={{ opacity: glowVisible ? 1 : 0, transition: "opacity 0.3s" }}
        >
          <div
            className="absolute w-[400px] h-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              left: cursorPos.x,
              top: cursorPos.y,
              background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
              transition: "left 0.1s, top 0.1s",
            }}
          />
        </div>

        <div className="w-full h-full max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between relative z-10">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-4 group flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="relative w-12 h-12 md:w-16 md:h-16"
            >
              <Image
                src="/images/csis-logo.png"
                alt="CSIS Logo"
                fill
                className="object-contain drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]"
                priority
              />
            </motion.div>
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-[15px] font-bold text-white tracking-tight leading-none">CSIS</span>
              <span className="text-[11px] font-semibold text-white/60 tracking-[0.15em] uppercase leading-none mt-1">MMMUT</span>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2.5 group"
                >
                  {/* Hover background */}
                  <motion.span
                    className="absolute inset-0 rounded-lg bg-white/0 group-hover:bg-white/[0.06] transition-colors duration-300"
                  />

                  <span
                    className={`relative z-10 flex items-center gap-2 text-[15px] font-semibold transition-all duration-300 ${
                      active ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" : "text-white/80 group-hover:text-white"
                    }`}
                  >
                    {link.label}

                    {/* Research pulse badge */}
                    {link.pulse && (
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                      </span>
                    )}
                  </span>

                  {/* Active glowing underline */}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-3 right-3 h-[3px] rounded-t-full bg-gradient-to-r from-blue-400 to-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.8)]"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* ── Desktop CTAs ── */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Explore Projects */}
            <Link
              href="/projects"
              className="group relative flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/[0.15] text-white text-[14px] font-semibold hover:border-white/30 transition-all duration-300 overflow-hidden bg-white/[0.02] hover:bg-white/[0.06]"
            >
              <Zap className="w-4 h-4 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.6)]" />
              <span className="relative z-10 tracking-wide">Explore Projects</span>
            </Link>

            {/* Join CSIS */}
            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="relative flex items-center gap-2 px-6 py-2.5 rounded-full text-[14px] font-bold text-white overflow-hidden group"
            >
              {/* Gradient bg */}
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:from-blue-500 group-hover:to-indigo-500" />
              {/* Shine sweep on hover */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
              {/* Glow */}
              <span className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.6)] opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              <ArrowUpRight className="w-4 h-4 relative z-10" />
              <span className="relative z-10 tracking-wide">Join CSIS</span>
            </motion.button>
          </div>

          {/* ── Mobile Toggle ── */}
          <motion.button
            className="lg:hidden relative w-12 h-12 flex items-center justify-center rounded-xl border border-white/[0.15] bg-white/[0.03] text-white hover:bg-white/[0.08] transition-colors"
            onClick={() => setMenuOpen(true)}
            whileTap={{ scale: 0.93 }}
          >
            <Menu className="w-6 h-6 drop-shadow-md" />
          </motion.button>
        </div>
      </motion.nav>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-md"
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-[85vw] max-w-sm bg-gradient-to-b from-[#0F172A] to-[#0B1120] border-l border-white/10 flex flex-col shadow-2xl"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-6 border-b border-white/10 bg-white/[0.02]">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12">
                    <Image src="/images/csis-logo.png" alt="CSIS" fill className="object-contain drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white tracking-tight">CSIS</div>
                    <div className="text-[11px] font-semibold text-white/50 tracking-[0.15em] uppercase">MMMUT</div>
                  </div>
                </div>
                <motion.button
                  onClick={() => setMenuOpen(false)}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] text-white hover:bg-white/[0.1] transition-colors"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Nav links */}
              <div className="flex-1 overflow-y-auto px-4 py-8 flex flex-col gap-2">
                {navLinks.map((link, i) => {
                  const active = isActive(link);
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className={`flex items-center justify-between px-5 py-4 rounded-xl text-[17px] font-semibold transition-all duration-300 ${
                          active
                            ? "bg-gradient-to-r from-blue-600/20 to-indigo-600/10 border border-blue-500/30 text-white shadow-[0_0_15px_rgba(59,130,246,0.15)]"
                            : "text-white/80 hover:text-white hover:bg-white/[0.06]"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          {link.pulse && <FlaskConical className="w-5 h-5 text-blue-400 drop-shadow-[0_0_5px_rgba(96,165,250,0.5)]" />}
                          {link.label}
                        </span>
                        {link.pulse && (
                          <span className="text-[11px] px-2.5 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 font-bold uppercase tracking-wider">
                            New
                          </span>
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Drawer footer CTAs */}
              <div className="p-6 border-t border-white/10 bg-white/[0.02] flex flex-col gap-4">
                <Link
                  href="/projects"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-white/15 text-white text-[15px] font-bold hover:bg-white/[0.05] transition-all duration-300"
                >
                  <Zap className="w-5 h-5 text-amber-400 drop-shadow-[0_0_5px_rgba(251,191,36,0.5)]" />
                  Explore Projects
                </Link>
                <button
                  onClick={() => { setMenuOpen(false); setIsModalOpen(true); }}
                  className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[15px] font-bold shadow-[0_4px_25px_rgba(99,102,241,0.5)] hover:shadow-[0_4px_35px_rgba(99,102,241,0.7)] transition-all duration-300"
                >
                  <ArrowUpRight className="w-5 h-5" />
                  Join CSIS
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <InductionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
