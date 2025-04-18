import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { getProjectBySlug, getProjects } from "@/lib/data-utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import type { Metadata } from "next"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    }
  }

  return {
    title: `${project.title} | Frigg.Dev`,
    description: project.description,
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  // Get related projects (with similar technologies)
  const allProjects = getProjects()
  const relatedProjects = allProjects
    .filter((p) => p.id !== project.id && p.technologies.some((tech) => project.technologies.includes(tech)))
    .sort((a, b) => {
      // Count matching technologies
      const aMatches = a.technologies.filter((tech) => project.technologies.includes(tech)).length
      const bMatches = b.technologies.filter((tech) => project.technologies.includes(tech)).length
      return bMatches - aMatches
    })
    .slice(0, 3)

  return (
    <>
      
      {/* Back button */}
      <div className="container mx-auto px-4 pt-32 pb-6">
        <Link href="/projects" className="inline-flex items-center text-zinc-400 hover:text-cyan-400 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>
      </div>

      {/* Project Header */}
      <header className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-zinc-400 text-lg mb-6">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <Link key={tech} href={`/projects?tech=${encodeURIComponent(tech)}`}>
                  <Badge variant="outline" className="border-zinc-700 hover:border-cyan-400 transition-colors">
                    {tech}
                  </Badge>
                </Link>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-pale_purple-400 to-pomp_and_power-500 text-black hover:from-pale_purple-500 hover:to-pomp_and_power-600">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-zinc-700 hover:border-cyan-400">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                </a>
              )}
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden border border-zinc-800">
            <Image
              src={project.image || "/placeholder.svg?height=600&width=800"}
              alt={project.title}
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </header>

      {/* Project Content */}
      <section className="py-12 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-invert prose-zinc">
            <div dangerouslySetInnerHTML={{ __html: project.content }} />
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-12 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject) => (
                <ProjectCard key={relatedProject.id} project={relatedProject} />
              ))}
            </div>
          </div>
        </section>
      )}
      
    </>
  )
}
