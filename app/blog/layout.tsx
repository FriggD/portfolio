import type React from "react"
import type { Metadata } from "next"
import "@/styles/article.css"

export const metadata: Metadata = {
  title: "Blog | Tech Portfolio",
  description: "Explore articles about web development, programming, and technology",
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main className="min-h-screen bg-gray-50">{children}</main>
}
