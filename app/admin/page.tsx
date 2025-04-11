"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import AdminHeader from "@/components/admin-header"
import AdminStats from "@/components/admin-stats"
import AdminProjectsTable from "@/components/admin-projects-table"
import AdminArticlesTable from "@/components/admin-articles-table"

export default function AdminDashboard() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [projects, setProjects] = useState([])
  const [articles, setArticles] = useState([])

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
        // In a real app, you would fetch this from an API
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
        ]

        const articlesData = [
          {
            id: 1,
            title: "Article 1",
            slug: "article-1",
            status: "Published",
            date: "2023-01-15",
          },
          {
            id: 2,
            title: "Article 2",
            slug: "article-2",
            status: "Draft",
            date: "2023-02-15",
          },
        ]

        setProjects(projectsData)
        setArticles(articlesData)
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
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

        <AdminStats projectCount={projects.length} articleCount={articles.length} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Recent Projects</h2>
              <Link href="/admin/projects" className="text-blue-600 hover:text-blue-800 text-sm">
                View All
              </Link>
            </div>
            <AdminProjectsTable projects={projects} />
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Recent Articles</h2>
              <Link href="/admin/articles" className="text-blue-600 hover:text-blue-800 text-sm">
                View All
              </Link>
            </div>
            <AdminArticlesTable articles={articles} />
          </div>
        </div>
      </main>
    </div>
  )
}
