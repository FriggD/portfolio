"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Save, Trash2 } from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import TagInput from "@/components/admin/tag-input"
import { createProject, updateProject, deleteProject } from "@/app/actions/project-actions"
import type { Project, ProjectFormData } from "@/lib/types"

interface ProjectFormProps {
  project: Project | null
}

export default function ProjectForm({ project }: ProjectFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [formData, setFormData] = useState<ProjectFormData>({
    title: project?.title || "",
    slug: project?.slug || "",
    description: project?.description || "",
    content: project?.content || "",
    category: project?.category || "",
    tags: project?.tags || [],
    image: project?.image || "",
    demoUrl: project?.demoUrl || "",
    githubUrl: project?.githubUrl || "",
    featured: project?.featured || false,
    status: project?.status || "Draft",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSwitchChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }))
  }

  const handleTagsChange = (tags: string[]) => {
    setFormData((prev) => ({
      ...prev,
      tags,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      let result

      if (project) {
        // Update existing project
        result = await updateProject(project.id, formData)
      } else {
        // Create new project
        result = await createProject(formData)
      }

      if (result.success) {
        toast({
          title: "Success",
          description: result.message,
          variant: "default",
        })
        router.push("/admin/projects")
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDelete = async () => {
    if (!project) return

    if (!confirm("Are you sure you want to delete this project? This action cannot be undone.")) {
      return
    }

    setIsDeleting(true)

    try {
      const result = await deleteProject(project.id)

      if (result.success) {
        toast({
          title: "Success",
          description: result.message,
          variant: "default",
        })
        router.push("/admin/projects")
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-end gap-2 mb-6">
        {project && (
          <Button
            type="button"
            variant="destructive"
            className="gap-1"
            onClick={handleDelete}
            disabled={isDeleting || isSubmitting}
          >
            <Trash2 className="h-4 w-4" />
            {isDeleting ? "Deleting..." : "Delete"}
          </Button>
        )}
        <Button
          type="submit"
          className="bg-gradient-to-r from-pale_purple-400 to-pomp_and_power-500 hover:opacity-90 gap-1"
          disabled={isSubmitting || isDeleting}
        >
          <Save className="h-4 w-4" />
          {isSubmitting ? "Saving..." : project ? "Save Changes" : "Create Project"}
        </Button>
      </div>

      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid grid-cols-3 w-full max-w-md mb-8">
          <TabsTrigger value="basic">Basic Info</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="basic">
          <Card className="bg-zinc-900 border-zinc-800 p-6">
            <div className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="title">Project Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter project title"
                  className="bg-zinc-800 border-zinc-700"
                  required
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="slug">Slug</Label>
                <Input
                  id="slug"
                  name="slug"
                  value={formData.slug}
                  onChange={handleChange}
                  placeholder="project-url-slug"
                  className="bg-zinc-800 border-zinc-700"
                  required
                />
                <p className="text-xs text-zinc-500">
                  This will be used for the URL: yourdomain.com/projects/project-slug
                </p>
              </div>

              <div className="grid gap-3">
                <Label htmlFor="description">Short Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Brief description of your project"
                  className="bg-zinc-800 border-zinc-700 resize-none"
                  rows={3}
                  required
                />
                <p className="text-xs text-zinc-500">
                  A short summary that will appear in project cards (150 characters max)
                </p>
              </div>

              <div className="grid gap-3">
                <Label htmlFor="category">Category</Label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="bg-zinc-800 border border-zinc-700 rounded-md px-3 py-2"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile Apps">Mobile Apps</option>
                  <option value="AI/ML">AI/ML</option>
                  <option value="IoT">IoT</option>
                  <option value="Blockchain">Blockchain</option>
                  <option value="DevOps">DevOps</option>
                </select>
              </div>

              <div className="grid gap-3">
                <Label htmlFor="tags">Tags</Label>
                <TagInput tags={formData.tags} onChange={handleTagsChange} />
                <p className="text-xs text-zinc-500">Press Enter or comma to add a tag</p>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="content">
          <Card className="bg-zinc-900 border-zinc-800 p-6">
            <div className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="content">Project Content</Label>
                <Textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  placeholder="Detailed description of your project"
                  className="bg-zinc-800 border-zinc-700 min-h-[300px]"
                  rows={12}
                  required
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="image">Featured Image URL</Label>
                <Input
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="https://example.com/image.jpg"
                  className="bg-zinc-800 border-zinc-700"
                  required
                />
                <div className="mt-2">
                  {formData.image && (
                    <div className="relative w-full h-40 bg-zinc-800 rounded-md overflow-hidden">
                      <img
                        src={formData.image || "/placeholder.svg"}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card className="bg-zinc-900 border-zinc-800 p-6">
            <div className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="demoUrl">Demo URL</Label>
                <Input
                  id="demoUrl"
                  name="demoUrl"
                  value={formData.demoUrl}
                  onChange={handleChange}
                  placeholder="https://example.com"
                  className="bg-zinc-800 border-zinc-700"
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="githubUrl">GitHub URL</Label>
                <Input
                  id="githubUrl"
                  name="githubUrl"
                  value={formData.githubUrl}
                  onChange={handleChange}
                  placeholder="https://github.com/username/repo"
                  className="bg-zinc-800 border-zinc-700"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="featured">Featured Project</Label>
                  <p className="text-xs text-zinc-500">Featured projects appear on the homepage</p>
                </div>
                <Switch
                  id="featured"
                  checked={formData.featured}
                  onCheckedChange={(checked) => handleSwitchChange("featured", checked)}
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="status">Status</Label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="bg-zinc-800 border border-zinc-700 rounded-md px-3 py-2"
                >
                  <option value="Draft">Draft</option>
                  <option value="Published">Published</option>
                </select>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </form>
  )
}
