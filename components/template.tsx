import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { ExternalLink, Github, Mail } from "lucide-react";

interface TemplateProps {
  children: React.ReactNode;
}

export default function Template({ children }: TemplateProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-zinc-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold tracking-tighter">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pale_purple-400 to-pomp_and_power-500">
              {">"} frigg.dev
            </span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link
              href="/#about"
              className="hover:text-cyan-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="hover:text-cyan-400 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className="hover:text-cyan-400 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/resume"
              className="hover:text-cyan-400 transition-colors"
            >
              Resume
            </Link>
            <Link
              href="/#contact"
              className="hover:text-cyan-400 transition-colors"
            >
              Contact
            </Link>
          </div>
          <button className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-zinc-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="text-xl font-bold tracking-tighter">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pale_purple-400 to-pomp_and_power-500">
                  FRIGG.DEV
                </span>
              </Link>
              <p className="text-zinc-500 mt-2">
                Building the future with code
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/gmbdias/"
                className="text-zinc-400 hover:text-cyan-400 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="https://github.com/FriggD"
                className="text-zinc-400 hover:text-cyan-400 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/friggtales"
                className="text-zinc-400 hover:text-cyan-400 transition-colors"
              >
                <FaInstagram size={20}/>
              </a>
            </div>
          </div>
          <div className="text-center mt-8 text-zinc-600 text-sm">
            © {new Date().getFullYear()} Frigg.Dev. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
