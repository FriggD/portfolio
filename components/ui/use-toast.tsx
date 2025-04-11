"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

type ToastProps = {
  title: string
  description: string
  variant?: "default" | "destructive"
}

type ToastContextType = {
  toast: (props: ToastProps) => void
}

const toastContext: ToastContextType = {
  toast: () => {},
}

export function toast(props: ToastProps) {
  toastContext.toast(props)
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<(ToastProps & { id: string })[]>([])

  useEffect(() => {
    toastContext.toast = (props) => {
      const id = Math.random().toString(36).substring(2, 9)
      setToasts((prev) => [...prev, { ...props, id }])

      // Auto dismiss after 5 seconds
      setTimeout(() => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id))
      }, 5000)
    }
  }, [])

  return (
    <>
      {children}
      <div className="fixed bottom-0 right-0 p-4 z-50 flex flex-col gap-2 max-w-md w-full">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`p-4 rounded-lg shadow-lg border ${
              toast.variant === "destructive"
                ? "bg-red-900/90 border-red-700 text-white"
                : "bg-zinc-900/90 border-zinc-700 text-white"
            } backdrop-blur-sm animate-in slide-in-from-right`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{toast.title}</h3>
                <p className="text-sm opacity-90">{toast.description}</p>
              </div>
              <button
                onClick={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))}
                className="text-zinc-400 hover:text-white"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
