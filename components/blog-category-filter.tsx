"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

interface BlogCategoryFilterProps {
  categories: string[]
  selectedCategory?: string
}

export default function BlogCategoryFilter({ categories, selectedCategory }: BlogCategoryFilterProps) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleCategorySelect = (category: string) => {
    router.push(`/blog?category=${encodeURIComponent(category)}`)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <Button
        variant="outline"
        className="flex items-center gap-2 bg-zinc-800 border-zinc-700 hover:bg-zinc-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedCategory || "All Categories"}
        <ChevronDown size={16} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </Button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-56 rounded-md bg-zinc-900 border border-zinc-800 shadow-lg">
          <div className="py-1">
            <button
              className={`block w-full text-left px-4 py-2 text-sm ${!selectedCategory ? "text-pale_purple-400" : "text-white hover:bg-zinc-800"}`}
              onClick={() => {
                router.push("/blog")
                setIsOpen(false)
              }}
            >
              All Categories
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className={`block w-full text-left px-4 py-2 text-sm ${selectedCategory === category ? "text-pale_purple-400" : "text-white hover:bg-zinc-800"}`}
                onClick={() => handleCategorySelect(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
