import type { Project } from "@/lib/types";

// Import individual projects
import brainbloomForgeProject from "./brainbloom-forge";
import portfolioProject from "./portfolio";
import supportCallsProject from "./support-calls";
import genomicDataProject from "./genomic-data";
import superheroAppProject from "./superhero-app";
import distributedMonitoringProject from "./distributed-monitoring-system";

// Export all projects as an array
const allProjects: Project[] = [
  distributedMonitoringProject,
  brainbloomForgeProject,
  portfolioProject,
  supportCallsProject,
  genomicDataProject,
  superheroAppProject,
];

export default allProjects;

// Export individual projects for direct access if needed
export {
  brainbloomForgeProject,
  portfolioProject,
  supportCallsProject,
  genomicDataProject,
  superheroAppProject,
  distributedMonitoringProject,
};