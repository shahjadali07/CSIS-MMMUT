import { notFound } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import { postBySlugQuery, postsQuery } from '@/sanity/lib/queries'
import BlogPostClient from './BlogPostClient'
import { PortableText } from '@portabletext/react'
import { CustomPortableText } from '@/components/blog/PortableTextComponents'
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'
import AuthorCard from '@/components/blog/AuthorCard'
import RelatedPosts from '@/components/blog/RelatedPosts'
import { Calendar, Clock } from 'lucide-react'

export const revalidate = 60

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await client.fetch(postBySlugQuery, { slug: params.slug })
  if (!post) return {}

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    openGraph: {
      images: post.featuredImage ? [urlForImage(post.featuredImage).width(1200).height(630).url()] : [],
    },
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  let post = null
  let allPosts = []

  try {
    post = await client.fetch(postBySlugQuery, { slug: params.slug })
    if (post) {
      allPosts = await client.fetch(postsQuery)
    }
  } catch (error) {
    console.error("Sanity fetch error in BlogPostPage:", error)
  }

  if (!post) {
    notFound()
  }
  const relatedPosts = allPosts.filter((p: any) => 
    p._id !== post._id && 
    p.categories?.some((c: any) => post.categories?.some((pc: any) => pc.slug?.current === c.slug?.current))
  ).slice(0, 3)

  const publishDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })

  return (
    <main className="min-h-screen bg-[var(--bg)] pb-20">
      <BlogPostClient />
      
      {/* Hero Image */}
      <div className="relative w-full h-[50vh] lg:h-[70vh]">
        {post.featuredImage ? (
          <Image
            src={urlForImage(post.featuredImage).url()}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/80 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 -mt-32 lg:-mt-48 relative z-10">
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {post.categories?.map((cat: any) => (
            <span key={cat.slug?.current} className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider bg-[var(--accent)] text-white rounded-full">
              {cat.title}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-6 text-[var(--text-muted)] mb-12 py-6 border-y border-[var(--border)]">
          <div className="flex items-center gap-3">
            {post.author?.image ? (
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={urlForImage(post.author.image).url()}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="w-10 h-10 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center">
                {post.author?.name?.charAt(0)}
              </div>
            )}
            <div>
              <p className="text-white font-medium text-sm">{post.author?.name}</p>
              <p className="text-xs">{post.author?.designation}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{publishDate}</span>
          </div>

          {post.readingTime && (
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{post.readingTime} min read</span>
            </div>
          )}
        </div>

        {/* Content */}
        <article className="prose prose-invert prose-lg max-w-none mb-16">
          {post.content ? (
            <PortableText value={post.content} components={CustomPortableText} />
          ) : (
            <p className="text-[var(--text-muted)]">No content available.</p>
          )}
        </article>

        {/* Author Section */}
        {post.author && (
          <AuthorCard author={post.author} />
        )}

        {/* Comments Placeholder */}
        <div className="mt-16 bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Comments</h3>
          <p className="text-[var(--text-muted)] mb-6">What are your thoughts on this article?</p>
          <button className="px-6 py-3 bg-[var(--bg)] border border-[var(--border)] text-white rounded-full hover:border-[var(--accent)] transition-colors">
            Load Comments
          </button>
        </div>

        {/* Related Posts */}
        <RelatedPosts posts={relatedPosts} />
      </div>
    </main>
  )
}
