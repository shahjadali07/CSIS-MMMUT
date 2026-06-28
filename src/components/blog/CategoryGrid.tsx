'use client';

import { motion } from 'framer-motion';

export default function CategoryGrid({
  categories,
  activeCategory,
  setActiveCategory,
}: {
  categories: any[];
  activeCategory: string;
  setActiveCategory: (c: string) => void;
}) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
      {categories.map((cat) => (
        <motion.button
          key={cat._id}
          onClick={() => setActiveCategory(cat.title)}
          whileHover={{ scale: 1.03 }}
          className={`p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] text-center transition-shadow ${
            activeCategory === cat.title ? 'shadow-xl border-[var(--accent)]' : ''
          }`}
        >
          <h3 className="text-base sm:text-lg font-semibold text-white mb-2 break-words hyphens-auto">
            {cat.title}
          </h3>
          {cat.description && (
            <p className="text-[var(--text-muted)] text-sm line-clamp-2">{cat.description}</p>
          )}
        </motion.button>
      ))}
    </div>
  );
}
