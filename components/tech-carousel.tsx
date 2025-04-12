"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { FaPython, FaReact, FaNodeJs, FaAws, FaDocker } from "react-icons/fa"
import { TbBrandCSharp } from "react-icons/tb";
import { SiJavascript, SiTypescript, SiMongodb } from "react-icons/si"

const technologies = [
  {
    name: "Python",
    Icon: FaPython,
    color: "#3776AB",
  },
  {
    name: "JavaScript",
    Icon: SiJavascript,
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    Icon: SiTypescript,
    color: "#3178C6",
  },
  {
    name: "React",
    Icon: FaReact,
    color: "#61DAFB",
  },
  {
    name: "Node.js",
    Icon: FaNodeJs,
    color: "#339933",
  },
  {
    name: "C#",
    Icon: TbBrandCSharp,
    color: "#512BD4",
  },
  {
    name: "MongoDB",
    Icon: SiMongodb,
    color: "#47A248",
  },
  {
    name: "AWS",
    Icon: FaAws,
    color: "#FF9900",
  },
  {
    name: "Docker",
    Icon: FaDocker,
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
                  {tech.Icon && <tech.Icon size={32} style={{ color: tech.color }} />}
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


