import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import ProjectForm from "@/components/admin/project-form"
import { getProjectById } from "@/lib/data-utils"
import { notFound } from "next/navigation"

interface ProjectEditPageProps {
  params: {
    id: string
  }
}

export default function ProjectEditPage({ params }: ProjectEditPageProps) {
  const isNewProject = params.id === "new"
  const projectId = isNewProject ? null : Number.parseInt(params.id)

  // Fetch project data if editing an existing project
  const project = !isNewProject ? getProjectById(projectId!) : null

  // If project not found and not creating a new one, show 404
  if (!isNewProject && !project) {
    notFound()
  }

  return (
    <div>
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2">
            <Link href="/admin/projects">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-3xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pale_purple-400 to-pomp_and_power-500">
                {isNewProject ? "Add New Project" : "Edit Project"}
              </span>
            </h1>
          </div>
          <p className="text-zinc-400 mt-1 ml-10">
            {isNewProject ? "Create a new project for your portfolio" : "Update your existing project"}
          </p>
        </div>
      </header>

      <ProjectForm project={project} />
    </div>
  )
}
