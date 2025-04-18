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
    <div className="space-y-0">
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
    </div>
  )
}