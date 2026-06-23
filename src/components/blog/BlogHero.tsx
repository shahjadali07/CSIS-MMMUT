'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Search, Sparkles, TrendingUp, ChevronDown } from 'lucide-react'

const CATEGORY_CHIPS = [
  { label: 'AI & Research', color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-blue-300' },
  { label: 'Web Dev', color: 'from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-300' },
  { label: 'Cyber Security', color: 'from-red-500/20 to-orange-500/20 border-red-500/30 text-red-300' },
  { label: 'Open Source', color: 'from-green-500/20 to-emerald-500/20 border-green-500/30 text-green-300' },
  { label: 'Projects', color: 'from-amber-500/20 to-yellow-500/20 border-amber-500/30 text-amber-300' },
  { label: 'Innovation', color: 'from-indigo-500/20 to-violet-500/20 border-indigo-500/30 text-indigo-300' },
]

interface BlogHeroProps {
  totalPosts: number
  searchQuery: string
  setSearchQuery: (q: string) => void
  activeCategory: string
  setActiveCategory: (c: string) => void
}

export default function BlogHero({ totalPosts, searchQuery, setSearchQuery, activeCategory, setActiveCategory }: BlogHeroProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  return (
    <div ref={ref} className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">

      {/* ── Deep Space Background ── */}
      <div className="absolute inset-0 bg-[#030712]" />

      {/* ── Grid Overlay ── */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '64px 64px'
        }}
      />

      {/* ── Radial glow following mouse ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59,130,246,0.07), transparent 60%)`
        }}
      />

      {/* ── Static gradient orbs ── */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />

      {/* ── Animated particle dots ── */}
      <Particles />

      {/* ── Light beam ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-2/3 bg-gradient-to-b from-blue-500/30 via-blue-500/10 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      {/* ── Content ── */}
      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-medium tracking-wider mb-8"
        >
          <Sparkles className="w-3.5 h-3.5" />
          CSIS INSIGHTS
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          <span>{totalPosts} Articles</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-none"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Where{' '}
          <span className="relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400">
              Innovation
            </span>
            <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 300 6" fill="none">
              <motion.path
                d="M0 3 Q75 0 150 3 Q225 6 300 3"
                stroke="url(#grad)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
              <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#60a5fa" />
                  <stop offset="0.5" stopColor="#22d3ee" />
                  <stop offset="1" stopColor="#a78bfa" />
                </linearGradient>
              </defs>
            </svg>
          </span>{' '}
          Meets{' '}
          <br />
          <span className="text-white/90">Expression</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-lg text-[#94a3b8] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Explore innovations, research, projects, technical articles, event highlights,
          and ideas from the next generation of builders at CSIS.
        </motion.p>

        {/* ── Search Bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="relative max-w-2xl mx-auto mb-8"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-violet-500 rounded-2xl opacity-30 blur-sm" />
          <div className="relative flex items-center bg-[#0f172a] border border-white/10 rounded-2xl px-5 py-4 gap-3">
            <Search className="w-5 h-5 text-blue-400 flex-shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles, topics, or technologies..."
              className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-[#475569] text-base"
            />
            <div className="hidden sm:flex items-center gap-1.5 text-[#475569] text-xs">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Trending</span>
            </div>
          </div>
        </motion.div>

        {/* ── Category Chips ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-300 ${
              activeCategory === 'All'
                ? 'bg-white text-black border-white'
                : 'bg-white/5 border-white/10 text-white/60 hover:border-white/30 hover:text-white'
            }`}
          >
            All Articles
          </button>
          {CATEGORY_CHIPS.map((chip) => (
            <button
              key={chip.label}
              onClick={() => setActiveCategory(chip.label)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium border bg-gradient-to-r transition-all duration-300 ${chip.color} ${
                activeCategory === chip.label ? 'scale-105 shadow-lg' : 'hover:scale-105'
              }`}
            >
              {chip.label}
            </button>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
          <ChevronDown className="w-4 h-4 text-white/30" />
        </motion.div>
      </motion.div>
    </div>
  )
}

// ── Floating Particles ──────────────────────────────────────────────────────
function Particles() {
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-blue-400/30"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -30, 0], opacity: [0, 0.6, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}
