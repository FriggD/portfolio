import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"

interface BlogPostCardProps {
  title: string
  excerpt: string
  date: string
  image: string
  slug: string
  category: string
  tags: string[]
}

export default function BlogPostCard({ title, excerpt, date, image, slug, category, tags }: BlogPostCardProps) {
  return (
    <div className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-pale_purple-400 transition-all duration-300 group h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <Link
          href={`/blog?category=${encodeURIComponent(category)}`}
          className="absolute top-4 left-4 text-xs px-2 py-1 rounded-full bg-black/70 backdrop-blur-sm hover:bg-black/90 transition-colors"
        >
          {category}
        </Link>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center text-xs text-zinc-500 mb-3">
          <Calendar size={14} className="mr-1" />
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-pale_purple-400 transition-colors">
          <Link href={slug}>{title}</Link>
        </h3>
        <p className="text-zinc-400 mb-4 flex-1">{excerpt}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 3).map((tag, index) => (
            <Link
              key={index}
              href={`/blog?tag=${encodeURIComponent(tag)}`}
              className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-zinc-300 hover:bg-zinc-700 transition-colors"
            >
              {tag}
            </Link>
          ))}
          {tags.length > 3 && (
            <span className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-zinc-300">+{tags.length - 3}</span>
          )}
        </div>
        <Link
          href={slug}
          className="inline-flex items-center text-sm text-pale_purple-400 hover:text-pale_purple-300 transition-colors mt-auto"
        >
          Read More <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  )
}
