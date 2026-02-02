import type { Article } from "@/lib/types";

// Import individual articles
import chaosEngineeringArticle from "./chaos-engineering";
import randomizedAlgorithmsArticle from "./randomized-algorithms";
import dirichletDrawerArticle from "./dirichlet-drawer-principle";
import memorylessPropertyArticle from "./memoryless-property";
import genericMethodsCSharpArticle from "./generic-methods-csharp";
import factoryMethodCSharpArticle from "./factory-method-csharp";
import objectCalisthenicsArticle from "./object-calisthenics";
import dockerDatabaseAccessArticle from "./docker-database-access";
import ocelot_api_gateway_dotnetArticle from "./ocelot-api-gateway-dotnet";

// Export all articles as an array
const allArticles: Article[] = [
  ocelot_api_gateway_dotnetArticle,
  dockerDatabaseAccessArticle,
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
  ocelot_api_gateway_dotnetArticle,
  chaosEngineeringArticle,
  randomizedAlgorithmsArticle,
  dirichletDrawerArticle,
  memorylessPropertyArticle,
  genericMethodsCSharpArticle,
  factoryMethodCSharpArticle,
  objectCalisthenicsArticle,
  dockerDatabaseAccessArticle,
};