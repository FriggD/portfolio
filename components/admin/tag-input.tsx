"use client"

import type React from "react"

import { useState, useRef, type KeyboardEvent } from "react"
import { X } from "lucide-react"

interface TagInputProps {
  tags: string[]
  onChange: (tags: string[]) => void
}

export default function TagInput({ tags, onChange }: TagInputProps) {
  const [inputValue, setInputValue] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === "Enter" || e.key === ",") && inputValue.trim()) {
      e.preventDefault()
      addTag(inputValue)
    } else if (e.key === "Backspace" && !inputValue && tags.length > 0) {
      removeTag(tags.length - 1)
    }
  }

  const addTag = (tag: string) => {
    const trimmedTag = tag.trim().replace(/,/g, "")
    if (trimmedTag && !tags.includes(trimmedTag)) {
      const newTags = [...tags, trimmedTag]
      onChange(newTags)
    }
    setInputValue("")
  }

  const removeTag = (index: number) => {
    const newTags = [...tags]
    newTags.splice(index, 1)
    onChange(newTags)
  }

  const handleContainerClick = () => {
    inputRef.current?.focus()
  }

  return (
    <div
      className="flex flex-wrap gap-2 p-2 bg-zinc-800 border border-zinc-700 rounded-md min-h-[42px] cursor-text"
      onClick={handleContainerClick}
    >
      {tags.map((tag, index) => (
        <div key={index} className="flex items-center gap-1 px-2 py-1 bg-zinc-700 text-zinc-200 rounded-md text-sm">
          {tag}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              removeTag(index)
            }}
            className="text-zinc-400 hover:text-white"
          >
            <X size={14} />
          </button>
        </div>
      ))}
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="flex-1 min-w-[120px] bg-transparent border-none outline-none text-white"
        placeholder={tags.length === 0 ? "Add tags..." : ""}
      />
    </div>
  )
}
