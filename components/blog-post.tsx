"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

interface BlogPostProps {
  title: string
  excerpt: string
  date: string
  image: string
  slug: string
}

export default function BlogPost({ title, excerpt, date, image, slug }: BlogPostProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-pale_purple-400 transition-all duration-300 group"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="text-xs text-zinc-500 mb-2">{date}</div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-pale_purple-400 transition-colors">{title}</h3>
        <p className="text-zinc-400 mb-4">{excerpt}</p>
        <Link
          href={slug}
          className="inline-flex items-center text-sm text-pale_purple-400 hover:text-pale_purple-300 transition-colors"
        >
          Read More <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </motion.div>
  )
}
