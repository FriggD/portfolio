export default function BlogPostLoading() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Placeholder */}
      <div className="h-16 border-b border-zinc-800"></div>

      {/* Back Link Placeholder */}
      <div className="pt-24 pb-0 px-4 md:px-0 container mx-auto">
        <div className="h-6 w-32 bg-zinc-800 rounded-md animate-pulse mb-8"></div>
      </div>

      {/* Article Header Placeholder */}
      <div className="pt-4 pb-12 px-4 md:px-0 bg-gradient-to-b from-zinc-950 to-black">
        <div className="container mx-auto max-w-4xl">
          <div className="h-6 w-24 bg-zinc-800 rounded-full animate-pulse mb-6"></div>
          <div className="h-12 w-full bg-zinc-800 rounded-md animate-pulse mb-2"></div>
          <div className="h-12 w-3/4 bg-zinc-800 rounded-md animate-pulse mb-6"></div>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="h-6 w-32 bg-zinc-800 rounded-md animate-pulse"></div>
            <div className="h-6 w-32 bg-zinc-800 rounded-md animate-pulse"></div>
          </div>

          <div className="w-full h-[400px] rounded-xl bg-zinc-800 animate-pulse mb-8"></div>
        </div>
      </div>

      {/* Article Content Placeholder */}
      <div className="py-12 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <div className="space-y-4">
                <div className="h-6 w-full bg-zinc-800 rounded-md animate-pulse"></div>
                <div className="h-6 w-full bg-zinc-800 rounded-md animate-pulse"></div>
                <div className="h-6 w-3/4 bg-zinc-800 rounded-md animate-pulse"></div>
                <div className="h-6 w-full bg-zinc-800 rounded-md animate-pulse"></div>
                <div className="h-6 w-5/6 bg-zinc-800 rounded-md animate-pulse"></div>
                <div className="h-6 w-full bg-zinc-800 rounded-md animate-pulse"></div>
                <div className="h-6 w-2/3 bg-zinc-800 rounded-md animate-pulse"></div>
                <div className="h-6 w-full bg-zinc-800 rounded-md animate-pulse"></div>
                <div className="h-6 w-full bg-zinc-800 rounded-md animate-pulse"></div>
                <div className="h-6 w-4/5 bg-zinc-800 rounded-md animate-pulse"></div>
              </div>

              {/* Tags Placeholder */}
              <div className="mt-12 flex flex-wrap gap-2">
                <div className="h-6 w-16 bg-zinc-800 rounded-full animate-pulse"></div>
                <div className="h-6 w-16 bg-zinc-800 rounded-full animate-pulse"></div>
                <div className="h-6 w-16 bg-zinc-800 rounded-full animate-pulse"></div>
              </div>

              {/* Navigation Placeholder */}
              <div className="mt-16 border-t border-zinc-800 pt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="h-24 bg-zinc-800 rounded-lg animate-pulse"></div>
                  <div className="h-24 bg-zinc-800 rounded-lg animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Sidebar Placeholder */}
            <div className="lg:col-span-4">
              <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 mb-8">
                <div className="h-8 w-40 bg-zinc-800 rounded-md animate-pulse mb-4"></div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-zinc-800 animate-pulse"></div>
                  <div>
                    <div className="h-6 w-24 bg-zinc-800 rounded-md animate-pulse mb-2"></div>
                    <div className="h-4 w-32 bg-zinc-800 rounded-md animate-pulse"></div>
                  </div>
                </div>
                <div className="h-16 w-full bg-zinc-800 rounded-md animate-pulse"></div>
              </div>

              {/* Related Posts Placeholder */}
              <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
                <div className="h-8 w-40 bg-zinc-800 rounded-md animate-pulse mb-4"></div>
                <div className="space-y-4">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="w-16 h-16 rounded-md bg-zinc-800 animate-pulse"></div>
                      <div className="flex-1">
                        <div className="h-6 w-full bg-zinc-800 rounded-md animate-pulse mb-2"></div>
                        <div className="h-4 w-24 bg-zinc-800 rounded-md animate-pulse"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
