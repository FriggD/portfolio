import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BlogNotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center max-w-md p-8">
        <h1 className="text-4xl font-bold mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pale_purple-400 to-pomp_and_power-500">
            Article Not Found
          </span>
        </h1>
        <p className="text-xl text-zinc-400 mb-8">The article you're looking for doesn't exist or has been removed.</p>
        <Link href="/blog">
          <Button className="bg-gradient-to-r from-pale_purple-400 to-pomp_and_power-500 hover:opacity-90">
            Back to Blog
          </Button>
        </Link>
      </div>
    </div>
  )
}
