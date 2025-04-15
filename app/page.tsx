import { ArrowRight, ExternalLink, Github, Mail } from "lucide-react";
import Link from "next/link";
import TechCarousel from "@/components/tech-carousel";
import ProjectCard from "@/components/project-card";
import BlogPost from "@/components/blog-post";
import ContactForm from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { FaInstagram } from "react-icons/fa";
import { getFeatured } from "@/lib/data-utils"

export default function Home() {
  const isSubmitting = false; // Placeholder for form submission state

  const featuredProjects = getFeatured()

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
              href="#about"
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
            {/* <Link
              href="/blog"
              className="hover:text-cyan-400 transition-colors"
            >
              Blog
            </Link> */}
            <Link
              href="#contact"
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-0">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Building the{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pale_purple-400 to-pomp_and_power-500">
                future
              </span>{" "}
              with code
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-8">
              Full-stack developer specializing in creating innovative digital
              experiences
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="#projects"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-pale_purple-400 to-pomp_and_power-500 text-white font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                View Projects <ArrowRight size={18} />
              </Link>
              <Link
                href="#contact"
                className="px-6 py-3 rounded-full border border-zinc-700 text-white font-medium flex items-center gap-2 hover:bg-zinc-900 transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pale_purple-400 to-pomp_and_power-500">
                About Me
              </span>
            </h2>
            <p className="text-lg text-zinc-300 mb-6">
              I'm a passionate Fullstack Developer with a solid background in
              Computer Engineering and hands-on experience in web and backend
              development using JavaScript, Python, Angular, .NET, and C#.
              Proficient with modern frameworks such as ReactJS, NodeJS, and
              Laravel, and experienced in working with PostgreSQL and MySQL
              databases.
            </p>
            <p className="text-lg text-zinc-300 mb-6">
              Strong background in Agile environments, having acted as both
              Agile Master and QA professional. Skilled in tools such as GitLab,
              Jira, and AWS. Analytical and results-driven, with excellent
              communication and adaptability.
            </p>
            <p className="text-lg text-zinc-300 mb-6">
              Currently pursuing a Master’s degree in Computer Science with a
              focus on machine learning and genomic data. Intermediate English
              proficiency for technical reading and communication.
            </p>
            <p className="text-lg text-zinc-300">
              When I'm not coding, you can find me having a good time with my dogs, playing Assassin's Creed, drinking coffee or under a tree reading a DarkSide's book. 
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Carousel */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pale_purple-400 to-pomp_and_power-500">
              Technologies
            </span>
          </h2>
          <TechCarousel />
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="featured-projects" className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pale_purple-400 to-pomp_and_power-500">
                Featured Projects
              </span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Check out some of my recent work and technical projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects
              .filter((project) => project.featured)
              .slice(0, 3)
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>

          <div className="text-center">
            <Link href="/projects">
              <Button className="bg-gradient-to-r from-pale_purple-400 to-pomp_and_power-500 text-black">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      {/* <section id="blog" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pale_purple-400 to-pomp_and_power-500">
              Latest Articles
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BlogPost
              title="The Future of Web Development with AI"
              excerpt="Exploring how artificial intelligence is transforming the landscape of web development and what it means for developers."
              date="April 2, 2025"
              image="/placeholder.svg?height=200&width=400"
              slug="/blog/future-web-development-ai"
            />
            <BlogPost
              title="Building Scalable Microservices Architecture"
              excerpt="A deep dive into designing and implementing microservices that can scale with your application needs."
              date="March 15, 2025"
              image="/placeholder.svg?height=200&width=400"
              slug="/blog/scalable-microservices"
            />
            <BlogPost
              title="Optimizing React Performance"
              excerpt="Practical techniques and best practices for improving the performance of your React applications."
              date="February 28, 2025"
              image="/placeholder.svg?height=200&width=400"
              slug="/blog/react-performance"
            />
          </div>
          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="px-6 py-3 rounded-full border border-zinc-700 text-white font-medium inline-flex items-center gap-2 hover:bg-zinc-900 transition-colors"
            >
              Read All Articles <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pale_purple-400 to-pomp_and_power-500">
              Get In Touch
            </span>
          </h2>
          <div className="text-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Contact Information
              </h3>
              <p className="text-zinc-400 mb-6">
                Feel free to reach out for collaboration opportunities, job
                inquiries, or just to say hello!
              </p>
              <div className="space-y-4">
                <div className="justify-center flex items-center gap-3">
                  <Mail className="text-pale_purple-400" size={20} />
                  <a
                    href="mailto:glaucia.belo.dias@gmail.com"
                    className="text-zinc-300 hover:text-white"
                  >
                    glaucia.belo.dias@gmail.com
                  </a>
                </div>
                <div className="justify-center flex items-center gap-3">
                  <Github className="text-pale_purple-400" size={20} />
                  <a
                    href="https://github.com/FriggD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-300 hover:text-white"
                  >
                    https://github.com/FriggD
                  </a>
                </div>
                <div className="justify-center flex items-center gap-3">
                  <ExternalLink className="text-pale_purple-400" size={20} />
                  <a
                    href="https://www.linkedin.com/in/gmbdias/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-300 hover:text-white"
                  >
                    https://www.linkedin.com/in/gmbdias/
                  </a>
                </div>
              </div>
            </div>
            {/* <div>
              <ContactForm />
            </div> */}
          </div>
        </div>
      </section>

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
