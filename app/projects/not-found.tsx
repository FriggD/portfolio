import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ProjectNotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
      <p className="text-zinc-400 text-lg mb-8 text-center max-w-md">
        The project you're looking for doesn't exist or has been removed.
      </p>
      <Link href="/projects">
        <Button className="bg-gradient-to-r from-pale_purple-400 to-pomp_and_power-500 text-black">
          View All Projects
        </Button>
      </Link>
    </div>
  )
}
