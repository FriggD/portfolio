"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function AdminAuthCheck({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  // In a real app, you would check the authentication status from a server session
  useEffect(() => {
    // Simulate checking authentication
    const checkAuth = async () => {
      try {
        // For demo purposes, we'll check if there's a token in localStorage
        const token = localStorage.getItem("admin_token")
        setIsAuthenticated(!!token)
      } catch (error) {
        setIsAuthenticated(false)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    // For demo purposes, we'll just set a token in localStorage
    localStorage.setItem("admin_token", "demo_token")
    setIsAuthenticated(true)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return <LoginForm onLogin={handleLogin} />
  }

  return children
}

function LoginForm({ onLogin }: { onLogin: (e: React.FormEvent) => void }) {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 bg-zinc-900 border-zinc-800">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pale_purple-400 to-pomp_and_power-500">
              Admin Login
            </span>
          </h1>
          <p className="text-zinc-400">Sign in to access the admin dashboard</p>
        </div>

        <form onSubmit={onLogin} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="admin@example.com"
              className="bg-zinc-800 border-zinc-700"
              // For demo, we'll use a default value
              defaultValue="admin@example.com"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <a href="#" className="text-xs text-pale_purple-400 hover:text-pale_purple-300">
                Forgot password?
              </a>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              className="bg-zinc-800 border-zinc-700"
              // For demo, we'll use a default value
              defaultValue="password"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-pale_purple-400 to-pomp_and_power-500 hover:opacity-90"
          >
            Sign In
          </Button>
        </form>

        <div className="mt-6 text-center text-xs text-zinc-500">
          <p>For demo purposes, you can sign in with any credentials</p>
        </div>
      </Card>
    </div>
  )
}
