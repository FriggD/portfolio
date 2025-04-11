import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { LayoutDashboard, FileText, FolderKanban, LogOut, Menu, X } from "lucide-react"
import AdminAuthCheck from "@/components/admin/auth-check"

export const metadata: Metadata = {
  title: "Admin Dashboard | Alex.Dev",
  description: "Administrative area for portfolio management",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AdminAuthCheck>
      <div className="min-h-screen bg-zinc-950 flex flex-col md:flex-row">
        <AdminSidebar />
        <main className="flex-1 p-4 md:p-8 overflow-auto">{children}</main>
      </div>
    </AdminAuthCheck>
  )
}

function AdminSidebar() {
  return (
    <>
      {/* Mobile Sidebar Toggle */}
      <input type="checkbox" id="sidebar-toggle" className="hidden peer" />
      <label
        htmlFor="sidebar-toggle"
        className="fixed top-4 right-4 z-50 p-2 bg-zinc-900 rounded-md cursor-pointer md:hidden"
      >
        <Menu className="block peer-checked:hidden" size={24} />
        <X className="hidden peer-checked:block" size={24} />
      </label>

      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 w-64 bg-black border-r border-zinc-800 transform -translate-x-full transition-transform duration-300 ease-in-out peer-checked:translate-x-0 md:relative md:translate-x-0">
        <div className="p-6">
          <Link href="/" className="text-xl font-bold tracking-tighter">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pale_purple-400 to-pomp_and_power-500">
              FRIGG.DEV
            </span>
          </Link>
          <p className="text-zinc-500 text-sm mt-1">Admin Dashboard</p>
        </div>

        <nav className="mt-6">
          <ul className="space-y-1 px-3">
            <li>
              <Link
                href="/admin"
                className="flex items-center gap-3 px-4 py-3 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
              >
                <LayoutDashboard size={18} />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/admin/projects"
                className="flex items-center gap-3 px-4 py-3 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
              >
                <FolderKanban size={18} />
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/admin/articles"
                className="flex items-center gap-3 px-4 py-3 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
              >
                <FileText size={18} />
                Articles
              </Link>
            </li>
          </ul>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <form action="/api/auth/logout" method="POST">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-4 py-2 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
            >
              <LogOut size={18} />
              Logout
            </button>
          </form>
        </div>
      </aside>
    </>
  )
}
