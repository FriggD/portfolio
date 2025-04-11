"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const technologies = [
  {
    name: "Python",
    logo: "/placeholder.svg?height=80&width=80",
    color: "#3776AB",
  },
  {
    name: "JavaScript",
    logo: "/placeholder.svg?height=80&width=80",
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    logo: "/placeholder.svg?height=80&width=80",
    color: "#3178C6",
  },
  {
    name: "React",
    logo: "/placeholder.svg?height=80&width=80",
    color: "#61DAFB",
  },
  {
    name: "Node.js",
    logo: "/placeholder.svg?height=80&width=80",
    color: "#339933",
  },
  {
    name: "C#",
    logo: "/placeholder.svg?height=80&width=80",
    color: "#512BD4",
  },
  {
    name: "MongoDB",
    logo: "/placeholder.svg?height=80&width=80",
    color: "#47A248",
  },
  {
    name: "AWS",
    logo: "/placeholder.svg?height=80&width=80",
    color: "#FF9900",
  },
  {
    name: "Docker",
    logo: "/placeholder.svg?height=80&width=80",
    color: "#2496ED",
  },
]

export default function TechCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
  const itemsToShow = typeof window !== "undefined" && window.innerWidth < 768 ? 3 : 5

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === technologies.length - itemsToShow ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? technologies.length - itemsToShow : prevIndex - 1))
  }

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide()
      }, 3000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, currentIndex])

  const handleMouseEnter = () => {
    setIsAutoPlaying(false)
  }

  const handleMouseLeave = () => {
    setIsAutoPlaying(true)
  }

  return (
    <div className="relative max-w-5xl mx-auto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
        >
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="min-w-[20%] sm:min-w-[20%] px-4 flex-shrink-0"
              style={{ minWidth: `${100 / itemsToShow}%` }}
            >
              <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-pale_purple-400 transition-colors flex flex-col items-center justify-center h-40">
                <div
                  className="w-16 h-16 mb-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${tech.color}20` }}
                >
                  <img src={tech.logo || "/placeholder.svg"} alt={tech.name} className="w-10 h-10" />
                </div>
                <span className="text-center font-medium">{tech.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-zinc-900 border border-zinc-800 rounded-full p-2 text-white hover:bg-zinc-800 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-zinc-900 border border-zinc-800 rounded-full p-2 text-white hover:bg-zinc-800 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  )
}
