'use client'

import { Search } from 'lucide-react'

export default function SearchBar({ 
  searchQuery, 
  setSearchQuery 
}: { 
  searchQuery: string, 
  setSearchQuery: (query: string) => void 
}) {
  return (
    <div className="relative group w-full max-w-xl mx-auto">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--accent)] to-purple-600 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur" />
      <div className="relative flex items-center bg-[var(--surface)] border border-[var(--border)] rounded-full px-4 py-2 hover:border-[var(--accent)]/50 transition-colors">
        <Search className="w-5 h-5 text-[var(--text-muted)] group-focus-within:text-[var(--accent)] transition-colors" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search articles, topics, or authors..."
          className="w-full bg-transparent border-none outline-none text-white px-4 py-1.5 placeholder:text-[var(--text-muted)]"
        />
      </div>
    </div>
  )
}
