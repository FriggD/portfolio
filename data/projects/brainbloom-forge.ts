import type { Project } from "@/lib/types";

const brainbloomForgeProject: Project = {
  id: 5,
  title: "BrainBloom Forge",
  slug: "brainbloom-forge",
  description: "Organize your studies intelligently with Cornell Method and Mind Mapping.",
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
      <p>BrainBloom Forge is an intelligent study organization platform that combines the Cornell Method and Mind Mapping techniques. Never lose important information again with this comprehensive learning management system.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li><strong>Cornell Method:</strong> Organize your notes with keywords, main notes, and summaries;</li>
        <li><strong>Mind Mapping:</strong> Create visual mind maps to connect concepts and ideas;</li>
        <li><strong>Folder Organization:</strong> Separate your studies by subjects and topics in organized folders;</li>
        <li><strong>Tags & Priorities:</strong> Mark the importance of each topic to focus on what really matters;</li>
        <li><strong>Flashcards:</strong> Create and review flashcards for effective memorization;</li>
        <li><strong>Recent Activity:</strong> Track your latest study sessions and progress.</li>
      </ul>
      
      <h2>Technical Implementation</h2>
      <p>The project is built using modern web technologies with a focus on user experience and data persistence. The frontend uses React with TypeScript for type safety and component-based architecture. Styling is handled with Tailwind CSS for a responsive and modern interface.</p>
      <p>The application implements local storage for data persistence, allowing users to access their notes and mind maps offline. The Cornell Method implementation follows the traditional three-section layout: cues, notes, and summary. The Mind Mapping feature provides an interactive canvas for creating visual connections between concepts.</p>
      
      <h2>Study Methods</h2>
      <p><strong>Cornell Method:</strong> A systematic format for condensing and organizing notes, dividing the page into three sections for better retention and review.</p>
      <p><strong>Mind Mapping:</strong> A visual thinking tool that helps structure information, analyze concepts, and generate new ideas through hierarchical diagrams.</p>
      
      <h2>Future Enhancements</h2>
      <ul>
        <li>Cloud synchronization for multi-device access;</li>
        <li>Collaborative study sessions;</li>
        <li>Spaced repetition algorithm for flashcards;</li>
        <li>Export notes to PDF and other formats;</li>
        <li>Study statistics and progress tracking.</li>
      </ul>
    </div>
      `,
  image: "/projetos/brainbloom.jpeg",
  githubUrl: "https://github.com/FriggD/brainbloom-forge",
  technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
  featured: true,
  status: "Published",
  date: "Jan 17, 2026",
};

export default brainbloomForgeProject;