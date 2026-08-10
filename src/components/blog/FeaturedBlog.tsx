'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock, Calendar } from 'lucide-react'
import { urlForImage } from '@/sanity/lib/image'
import { useState } from 'react'

export default function FeaturedBlog({ post }: { post: any }) {
  const [isImageLoading, setIsImageLoading] = useState(true)

  if (!post) return null

  let publishDate = 'Unknown date'
  try {
    publishDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    })
  } catch { /* keep default */ }

  let imageUrl: string | null = null
  try {
    if (post.featuredImage) imageUrl = urlForImage(post.featuredImage).url()
  } catch { imageUrl = null }

  let authorImageUrl: string | null = null
  try {
    if (post.author?.image) authorImageUrl = urlForImage(post.author.image).url()
  } catch { authorImageUrl = null }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative group rounded-3xl overflow-hidden border border-[var(--border)] bg-[var(--surface)] lg:flex"
    >
      {/* Background Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent)] to-purple-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-700 pointer-events-none" />

      {/* Image Half */}
      <div className="relative lg:w-1/2 aspect-[16/9] lg:aspect-[4/3] xl:aspect-[16/9] w-full overflow-hidden bg-black/20 flex items-center justify-center">
        {imageUrl ? (
          <>
            {isImageLoading && (
              <div className="absolute inset-0 bg-white/5 animate-pulse z-0" />
            )}
            <Image
              src={imageUrl}
              alt={post.title || 'Featured post'}
              fill
              loading="lazy"
              onLoad={() => setIsImageLoading(false)}
              className={`object-cover object-center transition-all duration-700 z-10 ${
                isImageLoading ? 'opacity-0 scale-95' : 'opacity-100 group-hover:scale-105'
              }`}
            />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[var(--surface)]" />
        
        {/* Category Badge */}
        {post.categories && post.categories.length > 0 && (
          <div className="absolute top-6 left-6 z-20">
            <span className="px-4 py-1.5 text-xs font-semibold tracking-wider uppercase bg-[var(--accent)] text-white rounded-full shadow-lg shadow-[var(--accent)]/30">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content Half */}
      <div className="relative z-10 lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
        <div className="flex items-center gap-4 text-sm text-[var(--text-muted)] mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{publishDate}</span>
          </div>
          {post.readingTime && (
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readingTime} min read</span>
            </div>
          )}
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
          {post.title}
        </h2>
        
        <p className="text-lg text-[var(--text-muted)] mb-8 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-auto">
          {/* Author */}
          <div className="flex items-center gap-4">
            {authorImageUrl ? (
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[var(--border)]">
                <Image
                  src={authorImageUrl}
                  alt={post.author?.name || 'Author'}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="w-12 h-12 rounded-full bg-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] text-lg font-bold border-2 border-[var(--accent)]/30">
                {post.author?.name?.charAt(0) || 'U'}
              </div>
            )}
            <div>
              <p className="text-sm font-medium text-white">{post.author?.name}</p>
              <p className="text-xs text-[var(--text-muted)]">{post.author?.designation || 'Author'}</p>
            </div>
          </div>

          {/* CTA */}
          <Link
            href={`/blogs/${post.slug?.current}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors w-fit"
          >
            Read Article
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
