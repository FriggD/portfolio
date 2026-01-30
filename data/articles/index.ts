import type { Article } from "@/lib/types";

// Import individual articles
import chaosEngineeringArticle from "./chaos-engineering";
import randomizedAlgorithmsArticle from "./randomized-algorithms";
import dirichletDrawerArticle from "./dirichlet-drawer-principle";
import memorylessPropertyArticle from "./memoryless-property";
import genericMethodsCSharpArticle from "./generic-methods-csharp";
import factoryMethodCSharpArticle from "./factory-method-csharp";
import objectCalisthenicsArticle from "./object-calisthenics";

// Export all articles as an array
const allArticles: Article[] = [
  objectCalisthenicsArticle,
  factoryMethodCSharpArticle,
  genericMethodsCSharpArticle,
  chaosEngineeringArticle,
  randomizedAlgorithmsArticle,
  dirichletDrawerArticle,
  memorylessPropertyArticle,
];

export default allArticles;

// Export individual articles for direct access if needed
export {
  chaosEngineeringArticle,
  randomizedAlgorithmsArticle,
  dirichletDrawerArticle,
  memorylessPropertyArticle,
  genericMethodsCSharpArticle,
  factoryMethodCSharpArticle,
  objectCalisthenicsArticle,
};