"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function AdminHeader() {
  const pathname = usePathname()
  const router = useRouter()

  const isActive = (path: string) => {
    return pathname === path || pathname?.startsWith(path + "/")
  }

  const handleSignOut = () => {
    // For demo purposes, we'll just remove the token from localStorage
    localStorage.removeItem("admin_token")
    router.push("/auth/signin")
  }

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/admin" className="text-xl font-bold text-gray-900">
              Admin Dashboard
            </Link>
          </div>

          <nav className="hidden md:flex space-x-4">
            <Link
              href="/admin"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive("/admin") && !isActive("/admin/projects") && !isActive("/admin/articles")
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              Dashboard
            </Link>
            <Link
              href="/admin/projects"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive("/admin/projects")
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              Projects
            </Link>
            <Link
              href="/admin/articles"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive("/admin/articles")
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              Articles
            </Link>
          </nav>

          <div className="flex items-center">
            <Link href="/" className="text-gray-600 hover:text-gray-900 mr-4">
              View Site
            </Link>
            <Button variant="outline" onClick={handleSignOut}>
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
