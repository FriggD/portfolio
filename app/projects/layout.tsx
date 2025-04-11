import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects | Tech Portfolio",
  description: "Explore my latest projects and technical work",
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main className="min-h-screen bg-black">{children}</main>
}
