'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Clock, Calendar } from 'lucide-react'
import { urlForImage } from '@/sanity/lib/image'
import { useState } from 'react'

const CATEGORY_COLORS: Record<string, string> = {
  'AI & Research': 'from-blue-500/20 border-blue-500/30 text-blue-300',
  'Web Dev': 'from-purple-500/20 border-purple-500/30 text-purple-300',
  'Cyber Security': 'from-red-500/20 border-red-500/30 text-red-300',
  'Open Source': 'from-green-500/20 border-green-500/30 text-green-300',
  'Projects': 'from-amber-500/20 border-amber-500/30 text-amber-300',
  'Innovation': 'from-indigo-500/20 border-indigo-500/30 text-indigo-300',
  'Events': 'from-pink-500/20 border-pink-500/30 text-pink-300',
}

export default function BlogCard({ post, index = 0 }: { post: any; index?: number }) {
  const [isImageLoading, setIsImageLoading] = useState(true)

  if (!post) return null

  let publishDate = ''
  try { publishDate = new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) } catch { }

  let imageUrl: string | null = null
  try { if (post.featuredImage) imageUrl = urlForImage(post.featuredImage).url() } catch { }

  let authorImageUrl: string | null = null
  try { if (post.author?.image) authorImageUrl = urlForImage(post.author.image).url() } catch { }

  const categoryTitle = post.categories?.[0]?.title || ''
  const badgeClass = CATEGORY_COLORS[categoryTitle] || 'from-slate-500/20 border-slate-500/30 text-slate-300'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.07 }}
      whileHover={{ y: -6 }}
      className="group relative"
    >
      {/* ── Gradient border glow ── */}
      <div className="absolute -inset-px bg-gradient-to-r from-blue-500/0 via-cyan-500/0 to-violet-500/0 group-hover:from-blue-500/40 group-hover:via-cyan-500/30 group-hover:to-violet-500/40 rounded-2xl transition-all duration-500 blur-sm" />

      <Link href={`/blogs/${post.slug?.current}`} className="block relative bg-[#0d1117] border border-white/6 rounded-2xl overflow-hidden hover:border-white/12 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5">

        {/* ── Cover Image ── */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/20 flex items-center justify-center">
          {imageUrl ? (
            <>
              {isImageLoading && (
                <div className="absolute inset-0 bg-white/5 animate-pulse z-0" />
              )}
              <Image
                src={imageUrl}
                alt={post.title}
                fill
                loading="lazy"
                onLoad={() => setIsImageLoading(false)}
                className={`object-cover object-center transition-all duration-700 z-10 ${
                  isImageLoading ? 'opacity-0 scale-95' : 'opacity-100 group-hover:scale-105'
                }`}
              />
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[#111827] via-[#0d1117] to-[#1a0d2e] flex items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-white/5 flex items-center justify-center">
                <span className="text-2xl opacity-40">✦</span>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent" />

          {/* Category badge */}
          {categoryTitle && (
            <div className="absolute top-4 left-4 z-10">
              <span className={`px-3 py-1 text-xs font-semibold rounded-full border bg-gradient-to-r backdrop-blur-md ${badgeClass}`}>
                {categoryTitle}
              </span>
            </div>
          )}
        </div>

        {/* ── Content ── */}
        <div className="p-6">
          {/* Meta */}
          <div className="flex items-center gap-3 text-xs text-[#475569] mb-3">
            {publishDate && (
              <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{publishDate}</span>
            )}
            {post.readingTime && (
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readingTime}m</span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 leading-snug tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-[#64748b] line-clamp-2 mb-5 leading-relaxed">{post.excerpt}</p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-white/5">
            <div className="flex items-center gap-2.5">
              {authorImageUrl ? (
                <div className="relative w-7 h-7 rounded-full overflow-hidden ring-1 ring-white/10">
                  <Image src={authorImageUrl} alt={post.author?.name || 'Author'} fill className="object-cover" />
                </div>
              ) : (
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white text-[10px] font-bold">
                  {post.author?.name?.charAt(0) || 'C'}
                </div>
              )}
              <span className="text-xs font-medium text-[#94a3b8]">{post.author?.name || 'CSIS'}</span>
            </div>

            <div className="w-7 h-7 rounded-full bg-white/4 border border-white/8 flex items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-500 transition-all duration-300">
              <ArrowUpRight className="w-3.5 h-3.5 text-[#64748b] group-hover:text-white transition-colors" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
