"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Project } from "@/lib/types"

interface ProjectCardProps {
  project?: Project
  title?: string
  description?: string
  tags?: string[]
  image?: string
  link?: string
  github?: string
  featured?: boolean
}

export default function ProjectCard({
  project,
  title: propTitle,
  description: propDescription,
  tags: propTags,
  image: propImage,
  link: propLink,
  github: propGithub,
  featured: propFeatured,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Use either the project object properties or the individual props
  const title = project?.title || propTitle || ""
  const description = project?.description || propDescription || ""
  const technologies = project?.technologies || propTags || []
  const image = project?.image || propImage || "/placeholder.svg?height=400&width=600"
  const demoUrl = project?.demoUrl || propLink
  const githubUrl = project?.githubUrl || propGithub
  const featured = project?.featured || propFeatured || false
  const slug = project?.slug || ""

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

        {/* Tech badges */}
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1">
          {technologies.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="outline" className="bg-black/50 backdrop-blur-sm border-zinc-700 text-xs">
              {tech}
            </Badge>
          ))}
          {technologies.length > 3 && (
            <Badge variant="outline" className="bg-black/50 backdrop-blur-sm border-zinc-700 text-xs">
              +{technologies.length - 3}
            </Badge>
          )}
        </div>
      </div>

      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">{title}</h3>
        <p className="text-zinc-400 text-sm mb-4 flex-grow">{description}</p>

        <div className="flex justify-between items-center mt-auto">
          {project ? (
            <Link
              href={`/projects/${slug}`}
              className="text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              View Project
            </Link>
          ) : (
            <span className="text-sm font-medium text-cyan-400">View Project</span>
          )}

          <div className="flex space-x-2">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-zinc-400 hover:text-white transition-colors"
                aria-label="GitHub Repository"
              >
                <Github size={18} />
              </a>
            )}
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-zinc-400 hover:text-white transition-colors"
                aria-label="Live Demo"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Featured badge */}
      {featured && (
        <div className="absolute top-3 right-3">
          <Badge className="bg-gradient-to-r from-pale_purple-400 to-pomp_and_power-500 text-black">Featured</Badge>
        </div>
      )}
    </motion.div>
  )
}
