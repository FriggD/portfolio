import type { Project } from "@/lib/types";

const supportCallsProject: Project = {
  id: 2,
  title: "Support Calls",
  slug: "support-calls",
  description: "Support call management system.",
  content: `
<style>
  .project-content {
    max-width: 800px;
    margin: 2rem auto;
    padding: 1.5rem;
    line-height: 1.6;
    color: #dedede;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    background-color: #1a1a1a;
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
      <p>This project was developed as a technical challenge and studies on tools and integrations.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li>Containerization with Docker;</li>
        <li>Dashboard with real-time updates;</li>
        <li>Seed with fictitious data.</li>
      </ul>
      
      <h2>Technical Implementation</h2>
      <p>The project is built using Laravel(PHP), MySQL and Docker. Developed following concepts of Clean Code and OOP.</p>
      
      </div>
      `,
  image: "/projetos/chamados-app.png?height=600&width=800",
  githubUrl: "https://github.com/FriggD/chamados-manager",
  technologies: ["PHP", "Laravel", "Docker", "MySQL"],
  featured: true,
  status: "Published",
  date: "Apr 30, 2025",
};

export default supportCallsProject;