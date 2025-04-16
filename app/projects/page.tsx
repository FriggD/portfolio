import Link from "next/link"
import { getProjects } from "@/lib/data-utils"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import TechFilter from "@/components/tech-filter"

export const metadata = {
  title: "Projects | Tech Portfolio",
  description: "Explore my latest projects and technical work",
}

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const tech = searchParams.tech as string | undefined
  const featured = searchParams.featured === "true"

  // Get all projects
  const allProjects = getProjects()

  // Get unique technologies from all projects
  const technologies = Array.from(new Set(allProjects.flatMap((project) => project.technologies))).sort()

  // Filter projects based on search params
  let filteredProjects = [...allProjects]

  if (tech) {
    filteredProjects = filteredProjects.filter((project) => project.technologies.includes(tech))
  }

  if (featured) {
    filteredProjects = filteredProjects.filter((project) => project.featured)
  }

  // Sort projects by date (newest first)
  filteredProjects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-zinc-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold tracking-tighter">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pale_purple-400 to-pomp_and_power-500">
              {">"} frigg.dev
            </span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/about" className="hover:text-cyan-400 transition-colors">
              About
            </Link>
            <Link href="/projects" className="text-cyan-400 transition-colors">
              Projects
            </Link>
            <Link href="/blog" className="hover:text-cyan-400 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-cyan-400 transition-colors">
              Contact
            </Link>
          </div>
          <button className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </nav>

      {/* Header */}
      <header className="pt-32 pb-12 px-4 md:px-0 bg-gradient-to-b from-zinc-950 to-black">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pale_purple-400 to-pomp_and_power-500">
                Projects
              </span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-8">Explore my latest work and technical projects</p>
          </div>
        </div>
      </header>

      {/* Filters */}
      <section className="py-8 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="w-full md:w-auto flex flex-wrap gap-2">
              <TechFilter technologies={technologies} selectedTech={tech} />
            </div>
            <div className="w-full md:w-auto flex gap-2">
              <Link
                href={`/projects${featured ? "" : "?featured=true"}${tech ? `${featured ? "?" : "&"}tech=${tech}` : ""}`}
                className={`px-4 py-2 rounded-full text-sm font-medium border ${
                  featured
                    ? "bg-pale_purple-400 border-pale_purple-400 text-black"
                    : "border-zinc-700 text-zinc-300 hover:border-pale_purple-400"
                }`}
              >
                Featured
              </Link>
              {(tech || featured) && (
                <Link
                  href="/projects"
                  className="px-4 py-2 rounded-full text-sm font-medium border border-zinc-700 text-zinc-300 hover:border-pale_purple-400"
                >
                  Clear Filters
                </Link>
              )}
            </div>
          </div>

          {/* Results info */}
          <div className="mb-8">
            <p className="text-zinc-400">
              {filteredProjects.length === 0
                ? "No projects found"
                : `Showing ${filteredProjects.length} project${filteredProjects.length === 1 ? "" : "s"}`}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold mb-4">No projects found</h3>
              <p className="text-zinc-400 mb-8">Try adjusting your filter criteria</p>
              <Link href="/projects">
                <Button>View All Projects</Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-zinc-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="text-xl font-bold tracking-tighter">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pale_purple-400 to-pomp_and_power-500">
                  FRIGG.DEV
                </span>
              </Link>
              <p className="text-zinc-500 mt-2">Building the future with code</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-zinc-400 hover:text-cyan-400 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="text-zinc-400 hover:text-cyan-400 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="#" className="text-zinc-400 hover:text-cyan-400 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="text-center mt-8 text-zinc-600 text-sm">
            © {new Date().getFullYear()} Frigg.Dev. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
