import fs from "fs"
import path from "path"
import type { Project, Article } from "./types"
import sampleArticles from "@/data/sample-articles"
import sampleProjects from "@/data/sample-projects"


// Define paths for data files
const DATA_DIR = path.join(process.cwd(), "data")
const PROJECTS_FILE = path.join(DATA_DIR, "projects.json")
const ARTICLES_FILE = path.join(DATA_DIR, "articles.json")

// Ensure data directory exists
export function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true })
  }

  // Initialize empty files if they don't exist
  if (!fs.existsSync(PROJECTS_FILE)) {
    fs.writeFileSync(PROJECTS_FILE, JSON.stringify([]))
  }

  if (!fs.existsSync(ARTICLES_FILE)) {
    fs.writeFileSync(ARTICLES_FILE, JSON.stringify([]))
  }
}

// Project data functions
export function getProjects(): Project[] {
  // Use sample projects instead of reading from file
  return sampleProjects
}

// Project data functions
export function getFeatured(): Project[] {
  const projects = getProjects()
  return projects.filter((project) => project.featured === true) || []
}

export function getProjectById(id: number): Project | null {
  const projects = getProjects()
  return projects.find((project) => project.id === id) || null
}

export function getProjectBySlug(slug: string): Project | null {
  const projects = getProjects()
  return projects.find((project) => project.slug === slug) || null
}

export function saveProjects(projects: Project[]) {
  ensureDataDir()
  fs.writeFileSync(PROJECTS_FILE, JSON.stringify(projects, null, 2))
}

export interface GetArticlesOptions {
  limit?: number
  offset?: number
  category?: string
  tag?: string
  featured?: boolean
  search?: string
}

// Article data functions
export async function getArticles(options: GetArticlesOptions = {}): Promise<Article[]> {
  // Use the sample articles instead of fetching from an API
  let articles = [...sampleArticles]

  // Apply filtering
  if (options.category) {
    articles = articles.filter((article) => article.category === options.category)
  }

  if (options.tag) {
    articles = articles.filter((article) => article.tags.includes(options.tag || ""))
  }

  if (options.featured !== undefined) {
    articles = articles.filter((article) => article.featured === options.featured)
  }

  if (options.search) {
    const searchLower = options.search.toLowerCase()
    articles = articles.filter(
      (article) =>
        article.title.toLowerCase().includes(searchLower) ||
        article.excerpt.toLowerCase().includes(searchLower) ||
        article.content.toLowerCase().includes(searchLower),
    )
  }

  // Sort articles by date (newest first)
  articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  // Apply pagination
  if (options.limit) {
    const start = options.offset || 0
    const end = start + options.limit
    articles = articles.slice(start, end)
  }

  return articles
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const article = sampleArticles.find((article) => article.slug === slug)
  return article || null
}

export async function getArticleCategories(): Promise<string[]> {
  const categories = [...new Set(sampleArticles.map((article) => article.category))]
  return categories
}

export async function getArticleTags(): Promise<string[]> {
  const tags = [...new Set(sampleArticles.flatMap((article) => article.tags))]
  return tags
}

// Helper to generate a unique ID
export function generateId(items: { id: number }[]): number {
  if (items.length === 0) return 1
  return Math.max(...items.map((item) => item.id)) + 1
}

// Helper to format the current date
export function formatDate(): string {
  const date = new Date()
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}

export function saveArticles(articles: Article[]) {
  ensureDataDir()
  fs.writeFileSync(ARTICLES_FILE, JSON.stringify(articles, null, 2))
}

export async function getArticleById(id: number): Promise<Article | null> {
  const article = sampleArticles.find((article) => article.id === id)
  return article || null
}
