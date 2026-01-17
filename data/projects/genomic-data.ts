import type { Project } from "@/lib/types";

const genomicDataProject: Project = {
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
        <li>Train to predict masked values based on visible markers;</li>
        <li>Evaluate prediction accuracy on a test set;</li>
        <li>Configurations from parameters;</li>
        <li>VCF File Processing.</li>
      </ul>
      
      <h2>Technical Implementation</h2>
      <p>The model uses a seq2seq architecture with an attention mechanism. The encoder includes an embedding layer to process the inputs and a GRU to handle the sequences. The decoder with attention incorporates an attention mechanism to highlight relevant parts of the input sequence, followed by a GRU to decode the encoded sequences. The training process occurs iteratively with a configurable number of iterations, uses SGD optimization with adjustable learning rate and can employ the teacher forcing technique. The evaluation is performed by functions, allowing both the evaluation of random samples and a more comprehensive analysis through accuracy metrics.</p>
      
      </div>
      `,
  image: "/projetos/imputacao.png?height=600&width=800",
  githubUrl: "https://github.com/FriggD/tcc-imputacao",
  technologies: ["Python", "PyTorch", "GRU"],
  featured: true,
  status: "Published",
  date: "Apr 30, 2025",
};

export default genomicDataProject;