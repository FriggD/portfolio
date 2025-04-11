"use server"

import { revalidatePath } from "next/cache"
import { getArticles, saveArticles, generateId, formatDate } from "@/lib/data-utils"
import type { ArticleFormData, Article } from "@/lib/types"

export async function createArticle(formData: ArticleFormData): Promise<{ success: boolean; message: string }> {
  try {
    const articles = getArticles()

    // Check if slug already exists
    if (articles.some((a) => a.slug === formData.slug)) {
      return {
        success: false,
        message: "An article with this slug already exists. Please choose a different slug.",
      }
    }

    const newArticle: Article = {
      ...formData,
      id: generateId(articles),
      date: formatDate(),
    }

    articles.push(newArticle)
    saveArticles(articles)

    revalidatePath("/admin/articles")
    revalidatePath("/blog")

    return { success: true, message: "Article created successfully!" }
  } catch (error) {
    console.error("Error creating article:", error)
    return { success: false, message: "Failed to create article. Please try again." }
  }
}

export async function updateArticle(
  id: number,
  formData: ArticleFormData,
): Promise<{ success: boolean; message: string }> {
  try {
    const articles = getArticles()
    const index = articles.findIndex((a) => a.id === id)

    if (index === -1) {
      return { success: false, message: "Article not found." }
    }

    // Check if slug already exists (but ignore the current article)
    if (articles.some((a) => a.slug === formData.slug && a.id !== id)) {
      return {
        success: false,
        message: "An article with this slug already exists. Please choose a different slug.",
      }
    }

    articles[index] = {
      ...articles[index],
      ...formData,
    }

    saveArticles(articles)

    revalidatePath("/admin/articles")
    revalidatePath(`/admin/articles/${id}`)
    revalidatePath("/blog")
    revalidatePath(`/blog/${formData.slug}`)

    return { success: true, message: "Article updated successfully!" }
  } catch (error) {
    console.error("Error updating article:", error)
    return { success: false, message: "Failed to update article. Please try again." }
  }
}

export async function deleteArticle(id: number): Promise<{ success: boolean; message: string }> {
  try {
    const articles = getArticles()
    const filteredArticles = articles.filter((a) => a.id !== id)

    if (filteredArticles.length === articles.length) {
      return { success: false, message: "Article not found." }
    }

    saveArticles(filteredArticles)

    revalidatePath("/admin/articles")
    revalidatePath("/blog")

    return { success: true, message: "Article deleted successfully!" }
  } catch (error) {
    console.error("Error deleting article:", error)
    return { success: false, message: "Failed to delete article. Please try again." }
  }
}
