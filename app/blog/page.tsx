import { ArrowLeft, ArrowRight, Search } from "lucide-react"
import Link from "next/link"
import { getArticles, getArticleCategories, getArticleTags } from "@/lib/data-utils"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import BlogPostCard from "@/components/blog-post-card"
import BlogCategoryFilter from "@/components/blog-category-filter"

export const metadata = {
  title: "Blog | Tech Portfolio",
  description: "Thoughts, stories, and ideas about technology and development",
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const page = Number(searchParams.page) || 1
  const limit = 6
  const offset = (page - 1) * limit

  const category = searchParams.category as string | undefined
  const tag = searchParams.tag as string | undefined
  const search = searchParams.search as string | undefined
  const searchQuery = searchParams.q as string | undefined

  const articles = await getArticles({
    limit,
    offset,
    category,
    tag,
    search,
  })

  const totalArticles = await getArticles({ category, tag, search })
  const totalPages = Math.ceil(totalArticles.length / limit)

  const categories = await getArticleCategories()
  const tagsList = await getArticleTags()
  const allCategories = categories
  const filteredArticles = await getArticles({ category, tag, search })
  const paginatedArticles = articles

  return (
    <div className="space-y-0">
      {/* Header */}
      <header className="pt-32 pb-12 px-4 md:px-0 bg-gradient-to-b from-zinc-950 to-black">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pale_purple-400 to-pomp_and_power-500">
                Blog
              </span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-8">
              Thoughts, stories, and ideas about technology and development
            </p>
          </div>
        </div>
      </header>

      {/* Search and Filters */}
      <section className="py-8 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="w-full md:w-1/2 relative">
              <form action="/blog" method="GET">
                {category && <input type="hidden" name="category" value={category} />}
                {tag && <input type="hidden" name="tag" value={tag} />}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500" size={18} />
                  <Input
                    name="q"
                    placeholder="Search articles..."
                    defaultValue={searchQuery}
                    className="pl-10 bg-zinc-800 border-zinc-700 w-full"
                  />
                </div>
              </form>
            </div>
            <div className="w-full md:w-auto flex flex-wrap gap-2">
              <BlogCategoryFilter categories={allCategories} selectedCategory={category} />
            </div>
          </div>

          {/* Active filters */}
          {(category || tag || searchQuery) && (
            <div className="flex flex-wrap gap-2 mb-6">
              {category && (
                <div className="flex items-center gap-1 px-3 py-1 bg-zinc-800 rounded-full text-sm">
                  Category: {category}
                  <Link href={`/blog${tag ? `?tag=${tag}` : ""}${searchQuery ? `&q=${searchQuery}` : ""}`}>
                    <span className="ml-1 text-zinc-400 hover:text-white">×</span>
                  </Link>
                </div>
              )}
              {tag && (
                <div className="flex items-center gap-1 px-3 py-1 bg-zinc-800 rounded-full text-sm">
                  Tag: {tag}
                  <Link
                    href={`/blog${category ? `?category=${category}` : ""}${searchQuery ? `&q=${searchQuery}` : ""}`}
                  >
                    <span className="ml-1 text-zinc-400 hover:text-white">×</span>
                  </Link>
                </div>
              )}
              {searchQuery && (
                <div className="flex items-center gap-1 px-3 py-1 bg-zinc-800 rounded-full text-sm">
                  Search: {searchQuery}
                  <Link href={`/blog${category ? `?category=${category}` : ""}${tag ? `&tag=${tag}` : ""}`}>
                    <span className="ml-1 text-zinc-400 hover:text-white">×</span>
                  </Link>
                </div>
              )}
              {(category || tag || searchQuery) && (
                <Link href="/blog">
                  <Button variant="outline" size="sm" className="h-7 px-3 text-xs">
                    Clear All
                  </Button>
                </Link>
              )}
            </div>
          )}

          {/* Results info */}
          <div className="mb-8">
            <p className="text-zinc-400">
              {filteredArticles.length === 0
                ? "No articles found"
                : `Showing ${paginatedArticles.length} of ${filteredArticles.length} articles`}
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold mb-4">No articles found</h3>
              <p className="text-zinc-400 mb-8">Try adjusting your search or filter criteria</p>
              <Link href="/blog">
                <Button>View All Articles</Button>
              </Link>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedArticles.map((article) => (
                  <BlogPostCard
                    key={article.id}
                    title={article.title}
                    excerpt={article.excerpt}
                    date={article.date}
                    image={article.image}
                    slug={`/blog/${article.slug}`}
                    category={article.category}
                    tags={article.tags}
                  />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-12">
                  <div className="flex items-center gap-2">
                    <Link
                      href={{
                        pathname: "/blog",
                        query: {
                          ...(category && { category }),
                          ...(tag && { tag }),
                          ...(searchQuery && { q: searchQuery }),
                          page: page > 1 ? page - 1 : 1,
                        },
                      }}
                      className={`p-2 rounded-md border border-zinc-800 ${
                        page <= 1 ? "pointer-events-none opacity-50" : "hover:bg-zinc-800"
                      }`}
                      aria-disabled={page <= 1}
                    >
                      <ArrowLeft size={16} />
                    </Link>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                      <Link
                        key={pageNum}
                        href={{
                          pathname: "/blog",
                          query: {
                            ...(category && { category }),
                            ...(tag && { tag }),
                            ...(searchQuery && { q: searchQuery }),
                            page: pageNum,
                          },
                        }}
                        className={`w-8 h-8 flex items-center justify-center rounded-md ${
                          pageNum === page
                            ? "bg-gradient-to-r from-pale_purple-400 to-pomp_and_power-500 text-white"
                            : "border border-zinc-800 hover:bg-zinc-800"
                        }`}
                      >
                        {pageNum}
                      </Link>
                    ))}
                    <Link
                      href={{
                        pathname: "/blog",
                        query: {
                          ...(category && { category }),
                          ...(tag && { tag }),
                          ...(searchQuery && { q: searchQuery }),
                          page: page < totalPages ? page + 1 : totalPages,
                        },
                      }}
                      className={`p-2 rounded-md border border-zinc-800 ${
                        page >= totalPages ? "pointer-events-none opacity-50" : "hover:bg-zinc-800"
                      }`}
                      aria-disabled={page >= totalPages}
                    >
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  )
}