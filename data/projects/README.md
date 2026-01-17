# Projects Structure

This directory contains the portfolio projects organized in separate files for better maintainability.

## Structure

```
data/
├── projects/
│   ├── index.ts                    # Main export file
│   ├── brainbloom-forge.ts         # BrainBloom Forge project
│   ├── portfolio.ts                # Portfolio project
│   ├── support-calls.ts            # Support Calls project
│   ├── genomic-data.ts             # Genomic Data Imputation project
│   └── superhero-app.ts            # SuperHero App project
└── sample-projects.ts              # Legacy file (now re-exports from projects/)
```

## Adding New Projects

1. Create a new file in `data/projects/` following the naming convention: `project-slug.ts`
2. Export a single Project object as default
3. Add the import and export to `data/projects/index.ts`

## Example Project File

```typescript
import type { Project } from "@/lib/types";

const myProject: Project = {
  id: 6,
  title: "My New Project",
  slug: "my-new-project",
  description: "Brief description of the project",
  content: `...`, // HTML content with inline styles
  image: "/projetos/my-image.png",
  demoUrl: "https://demo.example.com",
  githubUrl: "https://github.com/username/repo",
  technologies: ["Tech1", "Tech2"],
  featured: true,
  status: "Published",
  date: "Jan 20, 2026",
};

export default myProject;
```

## Benefits

- **Better Organization**: Each project is in its own file
- **Easier Maintenance**: Modify individual projects without affecting others
- **Version Control**: Better diff tracking for project changes
- **Scalability**: Easy to add new projects without cluttering a single file
- **Modularity**: Projects can be imported individually if needed