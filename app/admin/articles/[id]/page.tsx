"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import AdminHeader from "@/components/admin-header"
import ArticleForm from "@/components/admin/article-form"

export default function EditArticlePage() {
  const params = useParams()
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [article, setArticle] = useState(null)

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
        // For "new" article
        if (params.id === "new") {
          setArticle(null)
          return
        }

        // For demo purposes, we'll use sample data
        const sampleArticle = {
          id: Number(params.id),
          title: `Article ${params.id}`,
          slug: `article-${params.id}`,
          excerpt: "This is a sample article excerpt.",
          content: "This is the full content of the sample article.",
          category: "Web Development",
          tags: ["React", "Next.js", "JavaScript"],
          image: "/placeholder.svg?height=400&width=800",
          featured: false,
          status: "Published",
          date: "Jan 15, 2023",
        }

        setArticle(sampleArticle)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    checkAuth()
  }, [params.id, router])

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
        <h1 className="text-2xl font-bold mb-6">{params.id === "new" ? "Add New Article" : "Edit Article"}</h1>
        <ArticleForm article={article} />
      </main>
    </div>
  )
}
