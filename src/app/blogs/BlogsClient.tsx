'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import FeaturedBlog from '@/components/blog/FeaturedBlog'
import BlogCard from '@/components/blog/BlogCard'
import SearchBar from '@/components/blog/SearchBar'
import CategoryFilter from '@/components/blog/CategoryFilter'
import CategoryGrid from '@/components/blog/CategoryGrid'
import Newsletter from '@/components/blog/Newsletter'

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

        {/* WhatsApp Channel button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center"
        >
          <a
            href="https://whatsapp.com/channel/0029VbCJcvaKLaHo4qbZHG1Y"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-green-500/20 bg-green-500/10 text-green-400 hover:text-green-300 hover:border-green-500/40 transition-all duration-300 shadow-md font-semibold text-sm"
          >
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
            </svg>
            <span>Join CSIS WhatsApp Community</span>
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
