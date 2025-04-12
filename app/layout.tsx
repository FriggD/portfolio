import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { ToastProvider } from "@/components/ui/use-toast"
import { FaRegChessKnight } from "react-icons/fa6";

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title:  "Frigg.Dev",
  description: "Full-stack developer specializing in creating innovative digital experiences",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-black text-white antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <ToastProvider>{children}</ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'