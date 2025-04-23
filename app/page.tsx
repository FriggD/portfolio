import { ArrowRight, ExternalLink, Github, Mail } from "lucide-react";
import Link from "next/link";
import TechCarousel from "@/components/tech-carousel";
import ProjectCard from "@/components/project-card";
import BlogPost from "@/components/blog-post";
import { Button } from "@/components/ui/button";
import { getFeatured } from "@/lib/data-utils"

export default function Home() {
  const isSubmitting = false; // Placeholder for form submission state
  const featuredProjects = getFeatured()

  return (
    <div className="space-y-0">
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
                href="projects"
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
              Currently pursuing a Master's degree in Computer Science with a
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
      <section id="blog" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pale_purple-400 to-pomp_and_power-500">
              Latest Articles
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BlogPost
              title="Randomized Algorithms"
              slug="/blog/randomized-algorithms"
              excerpt="How algorithm randomization can be a powerful ally"
              date="April 16, 2025"
              image="/articles/dados.jpg?height=400&width=600"
            />
            <BlogPost
              title="Dirichlet's Drawer Principle"
              slug="/blog/dirichlets-drawer-principle"
              excerpt="How to detect a uniqueness rule violation problem"
              date="April 21, 2025"
              image="/articles/_pigeonhole.png?height=400&width=600"
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
      </section>

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
          </div>
        </div>
      </section>
    </div>
  )
}
