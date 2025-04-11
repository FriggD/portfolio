import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import type { Article } from "@/lib/types"

interface BlogPostNavigationProps {
  prevPost: Article | null
  nextPost: Article | null
}

export default function BlogPostNavigation({ prevPost, nextPost }: BlogPostNavigationProps) {
  return (
    <div className="mt-16 border-t border-zinc-800 pt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {prevPost ? (
          <Link href={`/blog/${prevPost.slug}`} className="group">
            <div className="flex flex-col p-4 rounded-lg border border-zinc-800 hover:border-pale_purple-400 transition-colors">
              <span className="text-sm text-zinc-500 flex items-center mb-2">
                <ArrowLeft size={14} className="mr-1" /> Previous Article
              </span>
              <span className="font-medium group-hover:text-pale_purple-400 transition-colors line-clamp-1">
                {prevPost.title}
              </span>
            </div>
          </Link>
        ) : (
          <div></div>
        )}

        {nextPost ? (
          <Link href={`/blog/${nextPost.slug}`} className="group md:ml-auto">
            <div className="flex flex-col p-4 rounded-lg border border-zinc-800 hover:border-pale_purple-400 transition-colors">
              <span className="text-sm text-zinc-500 flex items-center justify-end mb-2">
                Next Article <ArrowRight size={14} className="ml-1" />
              </span>
              <span className="font-medium text-right group-hover:text-pale_purple-400 transition-colors line-clamp-1">
                {nextPost.title}
              </span>
            </div>
          </Link>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  )
}
