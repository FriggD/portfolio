import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { getArticleBySlug, getArticles } from "@/lib/data-utils"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import ReactMarkdown from "react-markdown"
import Image from "next/image"
import BlogPostCard from "@/components/blog-post-card"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    return {
      title: "Article Not Found",
      description: "The requested article could not be found.",
    }
  }

  return {
    title: `${article.title} | Frigg.Dev Blog`,
    description: article.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  // Get related articles (same category or tags)
  const relatedArticles = await getArticles({
    limit: 3,
    category: article.category,
  })

  // Filter out the current article from related articles
  const filteredRelatedArticles = relatedArticles.filter((relatedArticle) => relatedArticle.id !== article.id)

  return (
    <div className="min-h-screen bg-black text-white">
      <Link href="/blog" className="inline-flex items-center text-sm text-gray-600 hover:text-primary mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to all articles
      </Link>

      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{article.title}</h1>

          <div className="flex flex-wrap items-center text-sm text-gray-600 mb-4">
            <time dateTime={article.date} className="mr-4">
              {article.date}
            </time>

            <span className="mr-4">
              <Link
                href={`/blog?category=${encodeURIComponent(article.category)}`}
                className="inline-flex items-center bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1"
              >
                {article.category}
              </Link>
            </span>
          </div>

          {article.image && (
            <div className="rounded-lg overflow-hidden mb-8">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                width={800}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          )}
        </header>

        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
          {/* <ReactMarkdown>{article.content}</ReactMarkdown> */}
        </div>

        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog?tag=${encodeURIComponent(tag)}`}
                className="inline-flex items-center bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1 text-sm"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </footer>
      </article>

      {filteredRelatedArticles.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredRelatedArticles.map((relatedArticle) => (
              <BlogPostCard key={relatedArticle.id} article={relatedArticle} compact />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
