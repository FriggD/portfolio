"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import AdminHeader from "@/components/admin-header"
import AdminProjectsTable from "@/components/admin-projects-table"
import { Button } from "@/components/ui/button"

export default function AdminProjectsPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [projects, setProjects] = useState([])

  useEffect(() => {
    // Check if user is authenticated (for demo purposes)
    const checkAuth = () => {
      const token = localStorage.getItem("admin_token")
      if (!token) {
        router.push("/auth/signin")
      } else {
        setIsAuthenticated(true)
        fetchData()
      }
      setIsLoading(false)
    }

    const fetchData = async () => {
      try {
        // For demo purposes, we'll use sample data
        const projectsData = [
          {
            id: 1,
            title: "Project 1",
            slug: "project-1",
            status: "Published",
            date: "2023-01-01",
          },
          {
            id: 2,
            title: "Project 2",
            slug: "project-2",
            status: "Draft",
            date: "2023-02-01",
          },
          {
            id: 3,
            title: "Project 3",
            slug: "project-3",
            status: "Published",
            date: "2023-03-01",
          },
          {
            id: 4,
            title: "Project 4",
            slug: "project-4",
            status: "Draft",
            date: "2023-04-01",
          },
        ]

        setProjects(projectsData)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    checkAuth()
  }, [router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Projects</h1>
          <Link href="/admin/projects/new">
            <Button>Add New Project</Button>
          </Link>
        </div>

        <AdminProjectsTable projects={projects} />
      </main>
    </div>
  )
}
