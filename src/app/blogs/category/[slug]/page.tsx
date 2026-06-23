import { notFound } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import { postsByCategoryQuery, categoriesQuery } from '@/sanity/lib/queries'
import BlogCard from '@/components/blog/BlogCard'
import Newsletter from '@/components/blog/Newsletter'

export const revalidate = 60

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const category = await client.fetch(`*[_type == "category" && slug.current == $slug][0]`, { slug: params.slug })
  if (!category) return {}

  return {
    title: `${category.title} Articles | CSIS Blog`,
    description: category.description || `Read articles related to ${category.title} on the CSIS Blog.`,
  }
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  let category = null
  let posts = []

  try {
    category = await client.fetch(`*[_type == "category" && slug.current == $slug][0]`, { slug: params.slug })
    if (category) {
      posts = await client.fetch(postsByCategoryQuery, { category: params.slug })
    }
  } catch (error) {
    console.error("Sanity fetch error in CategoryPage:", error)
  }
  
  if (!category) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Category: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-purple-500">{category.title}</span>
          </h1>
          {category.description && (
            <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
              {category.description}
            </p>
          )}
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {posts.map((post: any) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[var(--surface)] border border-[var(--border)] rounded-3xl mb-20">
            <h3 className="text-2xl font-semibold text-white mb-2">No articles found in this category</h3>
            <p className="text-[var(--text-muted)]">Check back later for new content.</p>
          </div>
        )}

        <Newsletter />
      </div>
    </main>
  )
}
