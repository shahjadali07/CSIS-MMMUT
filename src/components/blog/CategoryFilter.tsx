'use client'

import { motion } from 'framer-motion'

export default function CategoryFilter({
  categories,
  activeCategory,
  setActiveCategory
}: {
  categories: any[]
  activeCategory: string
  setActiveCategory: (category: string) => void
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <button
        onClick={() => setActiveCategory('All')}
        className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors ${
          activeCategory === 'All' 
            ? 'text-white' 
            : 'text-[var(--text-muted)] hover:text-white bg-[var(--surface)] border border-[var(--border)]'
        }`}
      >
        {activeCategory === 'All' && (
          <motion.div
            layoutId="activeCategory"
            className="absolute inset-0 bg-[var(--accent)] rounded-full z-0"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className="relative z-10">All</span>
      </button>

      {categories.map((category) => (
        <button
          key={category._id}
          onClick={() => setActiveCategory(category.title)}
          className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors ${
            activeCategory === category.title
              ? 'text-white'
              : 'text-[var(--text-muted)] hover:text-white bg-[var(--surface)] border border-[var(--border)]'
          }`}
        >
          {activeCategory === category.title && (
            <motion.div
              layoutId="activeCategory"
              className="absolute inset-0 bg-[var(--accent)] rounded-full z-0"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{category.title}</span>
        </button>
      ))}
    </div>
  )
}
