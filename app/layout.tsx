import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { ToastProvider } from "@/components/ui/use-toast"
import Template from "@/components/template"
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Frigg.Dev",
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
      <Script src={`https://www.googletagmanager.com/gtag/js?id=G-EELBZ62K27`} strategy="afterInteractive"/>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-EELBZ62K27');
        `}
      </Script>
     
      <body className={`${inter.className} min-h-screen bg-black text-white antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <ToastProvider>
            <Template>{children}</Template>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
