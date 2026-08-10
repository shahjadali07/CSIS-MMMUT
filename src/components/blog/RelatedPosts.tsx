import BlogCard from './BlogCard'

export default function RelatedPosts({ posts }: { posts: any[] }) {
  if (!posts || posts.length === 0) return null

  return (
    <div className="mt-20 pt-16 border-t border-[var(--border)]">
      <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  )
}
