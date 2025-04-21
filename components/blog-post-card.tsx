import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { Article } from "@/lib/types"

interface BlogPostCardProps {
  title?: string
  excerpt?: string
  date?: string
  image?: string
  slug?: string
  category?: string
  tags?: string[]
  article?: Article
  compact?: boolean
}

export default function BlogPostCard({ 
  title, 
  excerpt, 
  date, 
  image, 
  slug, 
  category, 
  tags, 
  article, 
  compact 
}: BlogPostCardProps) {
  // If article prop is provided, extract properties from it
  const displayTitle = title || article?.title || ""
  const displayExcerpt = excerpt || article?.excerpt || ""
  const displayDate = date || article?.date || ""
  const displayImage = image || article?.image || "/placeholder.svg"
  const displaySlug = slug || (article ? `/blog/${article.slug}` : "")
  const displayCategory = category || article?.category || ""
  const displayTags = tags || article?.tags || []

  return (
    <div className={`bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-pale_purple-400 transition-all duration-300 group h-full flex flex-col ${compact ? 'compact' : ''}`}>
      <div className="relative h-48 overflow-hidden">
        <img
          src={displayImage}
          alt={displayTitle}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {displayCategory && (
          <Link
            href={`/blog?category=${encodeURIComponent(displayCategory)}`}
            className="absolute top-4 left-4 text-xs px-2 py-1 rounded-full bg-black/70 backdrop-blur-sm hover:bg-black/90 transition-colors"
          >
            {displayCategory}
          </Link>
        )}
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center text-xs text-zinc-500 mb-3">
          <Calendar size={14} className="mr-1" />
          <span>{displayDate}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-pale_purple-400 transition-colors">
          <Link href={displaySlug}>{displayTitle}</Link>
        </h3>
        <p className="text-zinc-400 mb-4 flex-1">{displayExcerpt}</p>
        {displayTags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {displayTags.slice(0, 3).map((tag, index) => (
              <Link
                key={index}
                href={`/blog?tag=${encodeURIComponent(tag)}`}
                className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-zinc-300 hover:bg-zinc-700 transition-colors"
              >
                {tag}
              </Link>
            ))}
            {displayTags.length > 3 && (
              <span className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-zinc-300">+{displayTags.length - 3}</span>
            )}
          </div>
        )}
        <Link
          href={displaySlug}
          className="inline-flex items-center text-sm text-pale_purple-400 hover:text-pale_purple-300 transition-colors mt-auto"
        >
          Read More <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  )
}

