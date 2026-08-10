import { client } from '@/sanity/lib/client'
import { postsQuery, categoriesQuery, featuredPostsQuery } from '@/sanity/lib/queries'
import BlogsClient from './BlogsClient'

export const revalidate = 60

// ─── Fallback sample posts shown when Sanity has no published content ──────────
const SAMPLE_POSTS = [
  {
    _id: 'sample-1',
    title: 'Getting Started with CSIS: Your First Week in the Lab',
    slug: { current: 'getting-started-with-csis' },
    excerpt:
      'A beginner-friendly guide to navigating Prayukti VLab — from onboarding to your first project contribution.',
    featuredImage: null,
    publishedAt: new Date().toISOString(),
    readingTime: 5,
    featured: true,
    author: { name: 'CSIS Team', slug: { current: 'csis-team' }, image: null },
    categories: [{ title: 'Getting Started', slug: { current: 'getting-started' } }],
    tags: ['onboarding', 'beginner', 'lab'],
  },
  {
    _id: 'sample-2',
    title: 'How We Built Our Real-Time Collaborative Code Editor',
    slug: { current: 'real-time-code-editor' },
    excerpt:
      "A deep dive into the architecture of CSIS's web-based collaborative IDE — WebSockets, CRDTs, and operational transforms.",
    featuredImage: null,
    publishedAt: new Date(Date.now() - 86400000 * 3).toISOString(),
    readingTime: 8,
    featured: false,
    author: { name: 'CSIS Team', slug: { current: 'csis-team' }, image: null },
    categories: [{ title: 'Engineering', slug: { current: 'engineering' } }],
    tags: ['websockets', 'crdt', 'collaboration'],
  },
  {
    _id: 'sample-3',
    title: 'AI Research Internship: Lessons from Six Months in the Lab',
    slug: { current: 'ai-research-internship-lessons' },
    excerpt:
      'What we learned building a transformer-based code completion model — the failures, the breakthroughs, and what\'s next.',
    featuredImage: null,
    publishedAt: new Date(Date.now() - 86400000 * 7).toISOString(),
    readingTime: 12,
    featured: false,
    author: { name: 'CSIS Team', slug: { current: 'csis-team' }, image: null },
    categories: [{ title: 'AI & Research', slug: { current: 'ai-research' } }],
    tags: ['ai', 'transformers', 'research'],
  },
]

const SAMPLE_CATEGORIES = [
  { _id: 'cat-1', title: 'Getting Started', slug: { current: 'getting-started' }, description: 'New to CSIS? Start here.' },
  { _id: 'cat-2', title: 'Engineering', slug: { current: 'engineering' }, description: 'Technical deep dives and system design.' },
  { _id: 'cat-3', title: 'AI & Research', slug: { current: 'ai-research' }, description: 'Machine learning, research papers, and experiments.' },
]
// ──────────────────────────────────────────────────────────────────────────────

export default async function BlogsPage() {
  let posts: any[] = []
  let categories: any[] = []
  let featuredPosts: any[] = []
  let usingFallback = false

  try {
    const [fetchedPosts, fetchedCategories, fetchedFeatured] = await Promise.all([
      client.fetch(postsQuery),
      client.fetch(categoriesQuery),
      client.fetch(featuredPostsQuery),
    ])

    posts = Array.isArray(fetchedPosts) ? fetchedPosts : []
    categories = Array.isArray(fetchedCategories) ? fetchedCategories : []
    featuredPosts = Array.isArray(fetchedFeatured) ? fetchedFeatured : []

    // ── Diagnostic log (visible in Next.js server terminal) ──────────────────
    console.log('─── Sanity Content Pipeline Report ───────────────────────')
    console.log(`  Posts fetched         : ${posts.length}`)
    console.log(`  Categories fetched    : ${categories.length}`)
    console.log(`  Featured posts found  : ${featuredPosts.length}`)
    if (posts.length > 0) {
      console.log(`  First post title      : "${posts[0].title}"`)
      console.log(`  First post slug       : ${posts[0].slug?.current}`)
      console.log(`  First post featured   : ${posts[0].featured ?? false}`)
    }
    console.log('──────────────────────────────────────────────────────────')

  } catch (error) {
    console.error('Sanity fetch error in BlogsPage:', error)
  }

  // ── Inject fallback sample content if Sanity has no published posts ────────
  if (posts.length === 0) {
    usingFallback = true
    posts = SAMPLE_POSTS
    categories = SAMPLE_CATEGORIES
    featuredPosts = SAMPLE_POSTS.filter((p) => p.featured)
    console.warn('⚠ Sanity returned 0 posts — rendering with sample fallback content.')
  }

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24 pb-20">
      {usingFallback && (
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-6">
          <div className="flex items-center gap-3 px-5 py-3 rounded-xl border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-sm font-medium">
            <span>⚠</span>
            <span>
              Sample content is shown below. Publish posts in your{' '}
              <a href="/studio" className="underline hover:text-yellow-300">Sanity Studio</a>{' '}
              to replace this with real articles.
            </span>
          </div>
        </div>
      )}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <BlogsClient
          initialPosts={posts}
          categories={categories}
          featuredPosts={featuredPosts}
        />
      </div>
    </main>
  )
}
