'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import FeaturedBlog from '@/components/blog/FeaturedBlog'
import BlogCard from '@/components/blog/BlogCard'
import SearchBar from '@/components/blog/SearchBar'
import CategoryFilter from '@/components/blog/CategoryFilter'
import CategoryGrid from '@/components/blog/CategoryGrid'
import Newsletter from '@/components/blog/Newsletter'

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
)

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
)

export default function BlogsClient({
  initialPosts,
  categories,
  featuredPosts,
}: {
  initialPosts: any[]
  categories: any[]
  featuredPosts: any[]
}) {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const safePosts = Array.isArray(initialPosts) ? initialPosts : []
  const safeCategories = Array.isArray(categories) ? categories : []
  const safeFeaturedPosts = Array.isArray(featuredPosts) ? featuredPosts : []

  const filteredPosts = useMemo(() => {
    return safePosts.filter((post) => {
      if (!post) return false

      const matchesSearch =
        searchQuery === '' ||
        post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (Array.isArray(post.tags) && post.tags.some((tag: string) =>
          tag?.toLowerCase().includes(searchQuery.toLowerCase())
        ))

      const matchesCategory =
        activeCategory === 'All' ||
        (Array.isArray(post.categories) && post.categories.some((cat: any) =>
          cat?.title === activeCategory
        ))

      return matchesSearch && matchesCategory
    })
  }, [safePosts, searchQuery, activeCategory])

  return (
    <>
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
        >
          CSIS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-purple-500">Journal</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto mb-8"
        >
          Explore the latest in computer science, software engineering, artificial intelligence, and our society's impact.
        </motion.p>

        {/* Social Follow Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center items-center gap-4"
        >
          <a
            href="https://www.instagram.com/csis_mmmut?igsh=M3EzZG83cW82dzZm"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] hover:text-pink-500 hover:border-pink-500/30 transition-all duration-300"
          >
            <InstagramIcon className="w-4 h-4" />
            <span className="text-sm font-medium">Follow us on Instagram</span>
          </a>
          <a
            href="https://www.linkedin.com/company/csis-mmmut"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] hover:text-blue-500 hover:border-blue-500/30 transition-all duration-300"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span className="text-sm font-medium">Follow us on LinkedIn</span>
          </a>
        </motion.div>
      </div>

      {/* Featured Blog Section */}
      {safeFeaturedPosts.length > 0 && searchQuery === '' && activeCategory === 'All' && (
        <div className="mb-20">
          <FeaturedBlog post={safeFeaturedPosts[0]} />
        </div>
      )}

      {/* Category Grid */}
      {safeCategories.length > 0 && (
        <CategoryGrid
          categories={safeCategories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      )}

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">

        <CategoryFilter
          categories={safeCategories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <div className="w-full md:w-auto flex-shrink-0">
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
      </div>

      {/* Posts Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post._id || index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(index * 0.1, 0.5) }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-[var(--surface)] border border-[var(--border)] rounded-3xl">
          <h3 className="text-2xl font-semibold text-white mb-2">No articles found</h3>
          <p className="text-[var(--text-muted)]">
            {safePosts.length === 0 
              ? 'No articles have been published yet. Check back soon!' 
              : 'Try adjusting your search or category filter.'}
          </p>
          {safePosts.length > 0 && (
            <button
              onClick={() => {
                setSearchQuery('')
                setActiveCategory('All')
              }}
              className="mt-6 px-6 py-2 bg-white text-black font-medium rounded-full hover:bg-neutral-200 transition-colors"
            >
              Clear Filters
            </button>
          )}
        </div>
      )}

      {/* Newsletter */}
      <Newsletter />
    </>
  )
}
