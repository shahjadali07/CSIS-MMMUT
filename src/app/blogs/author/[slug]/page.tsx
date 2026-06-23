import { notFound } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import { authorBySlugQuery } from '@/sanity/lib/queries'
import BlogCard from '@/components/blog/BlogCard'
import AuthorCard from '@/components/blog/AuthorCard'

export const revalidate = 60

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const author = await client.fetch(authorBySlugQuery, { slug: params.slug })
  if (!author) return {}

  return {
    title: `${author.name} | CSIS Authors`,
    description: author.bio || `Read articles written by ${author.name} on the CSIS Blog.`,
  }
}

export default async function AuthorPage({ params }: { params: { slug: string } }) {
  let author = null

  try {
    author = await client.fetch(authorBySlugQuery, { slug: params.slug })
  } catch (error) {
    console.error("Sanity fetch error in AuthorPage:", error)
  }
  
  if (!author) {
    notFound()
  }

  const posts = author.posts || []

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AuthorCard author={author} />

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">Articles by {author.name}</h2>
          
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post: any) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-[var(--surface)] border border-[var(--border)] rounded-3xl">
              <h3 className="text-2xl font-semibold text-white mb-2">No articles found</h3>
              <p className="text-[var(--text-muted)]">This author hasn't published any articles yet.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
