export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Placeholder */}
      <div className="h-16 border-b border-zinc-800"></div>

      {/* Header Placeholder */}
      <div className="pt-32 pb-12 px-4 md:px-0 bg-gradient-to-b from-zinc-950 to-black">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="h-12 w-48 bg-zinc-800 rounded-md animate-pulse mx-auto mb-6"></div>
            <div className="h-6 w-full bg-zinc-800 rounded-md animate-pulse mb-2"></div>
            <div className="h-6 w-2/3 bg-zinc-800 rounded-md animate-pulse mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Search and Filters Placeholder */}
      <div className="py-8 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="w-full md:w-1/2">
              <div className="h-10 bg-zinc-800 rounded-md animate-pulse"></div>
            </div>
            <div className="w-full md:w-auto flex gap-2">
              <div className="h-10 w-40 bg-zinc-800 rounded-md animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Placeholder */}
      <div className="py-12 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 h-full">
                <div className="h-48 bg-zinc-800 animate-pulse"></div>
                <div className="p-6">
                  <div className="h-4 w-24 bg-zinc-800 rounded-md animate-pulse mb-3"></div>
                  <div className="h-6 w-full bg-zinc-800 rounded-md animate-pulse mb-2"></div>
                  <div className="h-4 w-full bg-zinc-800 rounded-md animate-pulse mb-2"></div>
                  <div className="h-4 w-3/4 bg-zinc-800 rounded-md animate-pulse mb-4"></div>
                  <div className="flex gap-2 mb-4">
                    <div className="h-6 w-16 bg-zinc-800 rounded-full animate-pulse"></div>
                    <div className="h-6 w-16 bg-zinc-800 rounded-full animate-pulse"></div>
                  </div>
                  <div className="h-4 w-28 bg-zinc-800 rounded-md animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
