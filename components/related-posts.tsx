import Link from "next/link"
import type { Article } from "@/lib/types"

interface RelatedPostsProps {
  posts: Article[]
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null

  return (
    <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
      <h3 className="text-xl font-semibold mb-4">Related Articles</h3>
      <div className="space-y-4">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
            <div className="flex gap-3">
              <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                <img
                  src={post.image || "/placeholder.svg?height=64&width=64"}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium group-hover:text-pale_purple-400 transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-zinc-500 text-sm mt-1">{post.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
