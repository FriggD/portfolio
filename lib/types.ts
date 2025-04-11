export interface ProjectFormData {
  title: string
  slug: string
  description: string
  content: string
  category: string
  tags: string[]
  image: string
  demoUrl?: string
  githubUrl?: string
  featured: boolean
  status: "Draft" | "Published"
}

export interface ArticleFormData {
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  image: string
  featured: boolean
  status: "Draft" | "Published"
}

export interface Project {
  id: number
  title: string
  slug: string
  description: string
  content: string
  image: string
  demoUrl?: string
  githubUrl?: string
  technologies: string[]
  featured: boolean
  status: "Draft" | "Published"
  date: string
}

export interface Article {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  image: string
  featured: boolean
  status: "Draft" | "Published"
  date: string
}
