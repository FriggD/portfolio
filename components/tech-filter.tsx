"use client"

import { useState } from "react"
import { Filter, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface TechFilterProps {
  technologies: string[]
  selectedTech?: string
}

export default function TechFilter({ technologies, selectedTech }: TechFilterProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex items-center gap-2">
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:border-pale_purple-400">
            <Filter className="h-4 w-4 mr-2" />
            Filter by Technology
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-56 bg-zinc-900 border-zinc-800">
          {technologies.map((tech) => (
            <DropdownMenuItem key={tech} className="focus:bg-zinc-800 focus:text-white">
              <Link
                href={`/projects?tech=${encodeURIComponent(tech)}`}
                className="w-full h-full flex items-center"
                onClick={() => setIsOpen(false)}
              >
                {tech}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {selectedTech && (
        <div className="flex items-center gap-1 px-3 py-1 bg-zinc-800 rounded-full text-sm">
          {selectedTech}
          <Link href="/projects">
            <X className="h-4 w-4 ml-1 text-zinc-400 hover:text-white" />
          </Link>
        </div>
      )}
    </div>
  )
}
