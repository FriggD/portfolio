import type { Project } from "@/lib/types"

const sampleProjects: Project[] = [
  {
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
    image: "/projetos/brainbloom.png",
    demoUrl: "https://brainbloom-forge.vercel.app/",
    githubUrl: "https://github.com/FriggD/brainbloom-forge",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    featured: true,
    status: "Published",
    date: "Jan 17, 2026",
  },
  {
    id: 3,
    title: "Portfolio",
    slug: "portfolio",
    description: "A place for me to show everything I love, one way or another..",
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
      <p>This Portfolio is made to experiment and show new things, new technologies, new ways to do some cool things.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li>Multi-page navigation;</li>
        <li>Custom blog pages;</li>
        <li>Projects showcases;</li>
        <li>Data filtering.</li>
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
  },
  {
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
    //demoUrl: "",
    githubUrl: "https://github.com/FriggD/chamados-manager",
    technologies: ["PHP", "Laravel", "Docker", "MySQL"],
    featured: true,
    status: "Published",
    date: "Apr 30, 2025",
  },
  {
    id: 1,
    title: "Imputation of genomic data",
    slug: "genomic-data",
    description: "System for imputation of genomic data.",
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
      <p>This project implements a sequence-to-sequence (seq2seq) model with attention mechanism using PyTorch. The model consists of an encoder-decoder architecture with GRU (Gated Recurrent Unit) cells and attention mechanism to improve sequence processing. The system is designed to learn patterns in sequences and generate corresponding output sequences, with a focus on genetic data imputation..</p>
      
      <h2>Key Features</h2>
      <ul>
        <li>Train to predict masked values ​​based on visible markers;</li>
        <li>Evaluate prediction accuracy on a test set;</li>
        <li>Configurations from parameters;</li>
        <li>VCF File Processing.</li>
      </ul>
      
      <h2>Technical Implementation</h2>
      <p>The model uses a seq2seq architecture with an attention mechanism. The encoder includes an embedding layer to process the inputs and a GRU to handle the sequences. The decoder with attention incorporates an attention mechanism to highlight relevant parts of the input sequence, followed by a GRU to decode the encoded sequences. The training process occurs iteratively with a configurable number of iterations, uses SGD optimization with adjustable learning rate and can employ the teacher forcing technique. The evaluation is performed by functions, allowing both the evaluation of random samples and a more comprehensive analysis through accuracy metrics.</p>
      
      </div>
      `,
    image: "/projetos/imputacao.png?height=600&width=800",
    //demoUrl: "",
    githubUrl: "https://github.com/FriggD/tcc-imputacao",
    technologies: ["Python", "PyTorch", "GRU"],
    featured: true,
    status: "Published",
    date: "Apr 30, 2025",
  },
  {
    id: 4,
    title: "SuperHero APP",
    slug: "superhero-app",
    description: "Simple CRUD of Heroes with Superpowers.",
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
      <p>SuperheroApp is a comprehensive application that allows users to manage a catalog of superheroes and their respective superpowers. The application provides CRUD (Create, Read, Update, and Delete) functionality for heroes and superpowers, with an intuitive user interface and a robust RESTful API.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li>CRUD superheroes;</li>
        <li>CRUD superpowers;</li>
        <li>Associate multiple superpowers to heros;</li>
        <li>Responsive and user-friendly user interface;</li>
        <li>Documented RESTful API with Swagger.</li>
      </ul>
      
      <h2>Technical Implementation</h2>
      <p>The backend of this application is built with .NET 8, which serves as the main framework for developing the web API. ASP.NET Core Web API is used to define RESTful endpoints, enabling structured and scalable HTTP communication. For data access, the project uses Entity Framework Core, an Object-Relational Mapper (ORM) that facilitates database operations through strongly typed LINQ queries. The backend follows a layered architecture, separating the code into API, Core, and Infrastructure layers, which improves maintainability and testability. Swagger/OpenAPI is integrated to provide interactive and auto-generated documentation of the API.</p>
      <p>On the frontend, the project utilizes Angular 17, a powerful framework for building dynamic user interfaces. The application is developed using TypeScript, which offers static typing and improved developer tooling. For styling and responsive design, Bootstrap 5 is incorporated. Additionally, the project makes use of RxJS for reactive programming and ng-select for advanced selection components, enhancing the UI's interactivity and responsiveness.</p>
      <p>The relational database used is PostgreSQL 16, chosen for its robustness and support for complex data relationships. The database structure is defined through a DDL.sql file, which outlines the schema and relations.</p>
      <p>For DevOps and containerization, Docker is used to containerize each component of the system, ensuring consistency across environments. Docker Compose is responsible for orchestrating multiple containers, such as the API, database, and frontend, making local development and deployment more straightforward.</p>
      <p>The project structure is divided into multiple key folders. SuperheroApp.API contains the web API implementation, including controllers and configuration files. SuperheroApp.Core holds the domain models, Data Transfer Objects (DTOs), and interfaces that define the core business logic. SuperheroApp.Infrastructure includes data access logic, repository implementations, and database-related operations. Finally, the client folder contains the Angular frontend application.</p>
      </div>
      `,
    image: "/projetos/superheroapp.jpeg?height=600&width=800",
    //demoUrl: "",
    githubUrl: "https://github.com/FriggD/SuperHeroApp",
    technologies: ["C#", "Angular", "Swagger", ".NET 8"],
    featured: true,
    status: "Published",
    date: "May 07, 2025",
  }
]

export default sampleProjects
