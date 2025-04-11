"use server"

import { revalidatePath } from "next/cache"
import { getProjects, saveProjects, generateId, formatDate } from "@/lib/data-utils"
import type { ProjectFormData, Project } from "@/lib/types"

export async function createProject(formData: ProjectFormData): Promise<{ success: boolean; message: string }> {
  try {
    const projects = getProjects()

    // Check if slug already exists
    if (projects.some((p) => p.slug === formData.slug)) {
      return {
        success: false,
        message: "A project with this slug already exists. Please choose a different slug.",
      }
    }

    const newProject: Project = {
      ...formData,
      id: generateId(projects),
      date: formatDate(),
    }

    projects.push(newProject)
    saveProjects(projects)

    revalidatePath("/admin/projects")
    revalidatePath("/projects")

    return { success: true, message: "Project created successfully!" }
  } catch (error) {
    console.error("Error creating project:", error)
    return { success: false, message: "Failed to create project. Please try again." }
  }
}

export async function updateProject(
  id: number,
  formData: ProjectFormData,
): Promise<{ success: boolean; message: string }> {
  try {
    const projects = getProjects()
    const index = projects.findIndex((p) => p.id === id)

    if (index === -1) {
      return { success: false, message: "Project not found." }
    }

    // Check if slug already exists (but ignore the current project)
    if (projects.some((p) => p.slug === formData.slug && p.id !== id)) {
      return {
        success: false,
        message: "A project with this slug already exists. Please choose a different slug.",
      }
    }

    projects[index] = {
      ...projects[index],
      ...formData,
    }

    saveProjects(projects)

    revalidatePath("/admin/projects")
    revalidatePath(`/admin/projects/${id}`)
    revalidatePath("/projects")
    revalidatePath(`/projects/${formData.slug}`)

    return { success: true, message: "Project updated successfully!" }
  } catch (error) {
    console.error("Error updating project:", error)
    return { success: false, message: "Failed to update project. Please try again." }
  }
}

export async function deleteProject(id: number): Promise<{ success: boolean; message: string }> {
  try {
    const projects = getProjects()
    const filteredProjects = projects.filter((p) => p.id !== id)

    if (filteredProjects.length === projects.length) {
      return { success: false, message: "Project not found." }
    }

    saveProjects(filteredProjects)

    revalidatePath("/admin/projects")
    revalidatePath("/projects")

    return { success: true, message: "Project deleted successfully!" }
  } catch (error) {
    console.error("Error deleting project:", error)
    return { success: false, message: "Failed to delete project. Please try again." }
  }
}
