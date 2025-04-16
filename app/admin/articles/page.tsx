"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import AdminHeader from "@/components/admin-header"
import AdminArticlesTable from "@/components/admin-articles-table"
import { Button } from "@/components/ui/button"

export default function AdminArticlesPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
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
          {
            id: 3,
            title: "Article 3",
            slug: "article-3",
            status: "Published",
            date: "2023-03-15",
          },
          {
            id: 4,
            title: "Article 4",
            slug: "article-4",
            status: "Draft",
            date: "2023-04-15",
          },
        ]

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
      <main className="container mx-auto px-4 py-8 ">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Articles</h1>
          <Link href="/admin/articles/new">
            <Button>Add New Article</Button>
          </Link>
        </div>

        <AdminArticlesTable articles={articles} />
      </main>
    </div>
  )
}
