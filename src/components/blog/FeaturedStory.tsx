'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Clock, Calendar, Star } from 'lucide-react'
import { urlForImage } from '@/sanity/lib/image'
import { useState } from 'react'

export default function FeaturedStory({ post }: { post: any }) {
  const [isImageLoading, setIsImageLoading] = useState(true)

  if (!post) return null

  let publishDate = ''
  try { publishDate = new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) } catch { publishDate = '' }

  let imageUrl: string | null = null
  try { if (post.featuredImage) imageUrl = urlForImage(post.featuredImage).url() } catch { }

  let authorImageUrl: string | null = null
  try { if (post.author?.image) authorImageUrl = urlForImage(post.author.image).url() } catch { }

  return (
    <section className="px-6 lg:px-12 py-16 max-w-7xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase">Featured Story</span>
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-amber-500/20 to-transparent" />
      </div>

      <Link href={`/blogs/${post.slug?.current}`}>
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.4 }}
          className="group relative rounded-3xl overflow-hidden border border-white/8 bg-[#0d1117] cursor-pointer"
        >
          {/* Gradient border glow on hover */}
          <div className="absolute -inset-px bg-gradient-to-r from-blue-500 via-cyan-500 to-violet-500 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-sm" />

          <div className="relative grid lg:grid-cols-2">
            {/* ── Image Side ── */}
            <div className="relative aspect-[16/9] lg:aspect-auto lg:h-full w-full overflow-hidden bg-black/20 flex items-center justify-center">
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
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-[#0d1117] to-violet-900/30 flex items-center justify-center">
                  <div className="text-6xl opacity-20">📝</div>
                </div>
              )}
              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0d1117] hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent lg:hidden" />

              {/* Category tag */}
              {post.categories?.[0] && (
                <div className="absolute top-6 left-6 z-10">
                  <span className="px-3 py-1.5 text-xs font-semibold tracking-wider uppercase bg-blue-500 text-white rounded-full shadow-lg shadow-blue-500/30">
                    {post.categories[0].title}
                  </span>
                </div>
              )}
            </div>

            {/* ── Content Side ── */}
            <div className="relative z-10 p-8 lg:p-12 xl:p-16 flex flex-col justify-center">
              {/* Meta */}
              <div className="flex items-center gap-4 text-xs text-[#64748b] mb-5">
                {publishDate && (
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{publishDate}</span>
                  </div>
                )}
                {post.readingTime && (
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readingTime} min read</span>
                  </div>
                )}
              </div>

              {/* Title */}
              <h2
                className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-5 leading-tight tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-500"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {post.title}
              </h2>

              {/* Excerpt */}
              <p className="text-[#94a3b8] text-lg leading-relaxed mb-8 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Author + CTA */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {authorImageUrl ? (
                    <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-white/10">
                      <Image src={authorImageUrl} alt={post.author?.name || 'Author'} fill className="object-cover" />
                    </div>
                  ) : (
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white text-sm font-bold ring-2 ring-white/10">
                      {post.author?.name?.charAt(0) || 'C'}
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-semibold text-white">{post.author?.name || 'CSIS Team'}</p>
                    <p className="text-xs text-[#64748b]">{post.author?.designation || 'Author'}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium group-hover:bg-blue-500 group-hover:border-blue-500 transition-all duration-300">
                  Read Article
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </section>
  )
}
