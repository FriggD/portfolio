import type { Project } from "@/lib/types"

const sampleProjects: Project[] = [
  {
    id: 1,
    title: "Portfolio",
    slug: "portfolio",
    description: "A place for me to show everything I love, one way or another..",
    content: `
    <style>
    .project-content {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1.5rem;;
  line-height: 1.6;
  color: #dedede;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.project-content h2 {
  margin-top: 2rem;
  font-size: 1.75rem;
  color: #dedede;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 0.5rem;
}

.project-content p {
  margin: 1rem 0;
  font-size: 1rem;
  color: #dedede;
}

.project-content ul {
  margin: 1rem 0 1rem 1.5rem;
  padding-left: 1rem;
  list-style-type: disc;
}

.project-content li {
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: #dedede;
}
    </style>
     <div class="project-content">
      <h2>About the Project</h2>
      <p>This Portfolio is made to experiment and show new things, new technologies, new ways to do some cool things.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li>Multi-page navigation</li>
        <li>Custom blog pages</li>
        <li>Projects showcases</li>
        <li>Data filtering</li>
      </ul>
      
      <h2>Technical Implementation</h2>
      <p>The project is built using Next and TypeScript. Developed following concepts of Clean Code, splited features into small components.</p>
      
      <h2>WIP</h2>
      <p>The administrative area is under construction, and it will be possible to log in and add projects and articles in a more dynamic way. A contact form will also be available soon, allowing you to get in touch without leaving the web page.</p>
    </div>
      `,
    image: "/projetos/portfolio.png?height=600&width=800",
    demoUrl: "https://portfolio-friggs-projects.vercel.app/",
    githubUrl: "https://github.com/FriggD/portfolio",
    technologies: ["TypeScript", "Next", "Tailwind"],
    featured: true,
    status: "Published",
    date: "Apr 15, 2025",
  }
]

export default sampleProjects
