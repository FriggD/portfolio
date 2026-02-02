import type { Project } from "@/lib/types";

const distributedMonitoringProject: Project = {
  id: 6,
  title: "Distributed Monitoring System",
  slug: "distributed-monitoring-system",
  description: "Real-time distributed system monitoring with alerts and metrics visualization.",
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
  <p>Distributed Monitoring System is a comprehensive solution for real-time monitoring of distributed systems and applications. Built with modern technologies and microservices architecture, it provides powerful monitoring capabilities, alerting, and metrics visualization.</p>
  
  <h2>Key Features</h2>
  <ul>
    <li><strong>Real-time Monitoring:</strong> Track system metrics, application performance, and infrastructure health in real-time;</li>
    <li><strong>Alert Management:</strong> Configure custom alert rules with multiple notification channels (email, Slack, webhooks);</li>
    <li><strong>Metrics Collection:</strong> Collect and store metrics from multiple sources with high throughput;</li>
    <li><strong>Dashboard Visualization:</strong> Interactive dashboards with charts and graphs for metrics analysis;</li>
    <li><strong>Distributed Architecture:</strong> Scalable microservices architecture with message queuing;</li>
    <li><strong>API Integration:</strong> RESTful APIs for easy integration with existing systems;</li>
    <li><strong>Data Persistence:</strong> Efficient storage with PostgreSQL and Redis caching;</li>
    <li><strong>Docker Support:</strong> Fully containerized with Docker Compose for easy deployment.</li>
  </ul>
  
  <h2>Technical Architecture</h2>
  <p>The system is built using a microservices architecture with the following components:</p>
  <ul>
    <li><strong>API Gateway (Ocelot):</strong> Routing, rate limiting, and load balancing;</li>
    <li><strong>Identity Provider (Keycloak 23):</strong> OAuth 2.0 / OIDC authentication and authorization;</li>
    <li><strong>Metrics Collector:</strong> Background service collecting metrics from monitored targets;</li>
    <li><strong>Alert Engine:</strong> Evaluates alert rules and triggers notifications;</li>
    <li><strong>Message Broker (RabbitMQ 3.12):</strong> Asynchronous communication between services;</li>
    <li><strong>Database (PostgreSQL 16):</strong> Persistent storage with Entity Framework Core 10.0;</li>
    <li><strong>Cache Layer (Redis 7):</strong> High-performance distributed caching;</li>
    <li><strong>ELK Stack:</strong> Elasticsearch 8.11, Logstash 8.11, and Kibana 8.11 for log management and visualization;</li>
  </ul>
  
  <h2>Technologies Used</h2>
  
  <h3>Core Technologies</h3>
  <ul>
    <li><strong>.NET 10.0:</strong> Runtime framework</li>
    <li><strong>C# 12:</strong> Programming language</li>
    <li><strong>ASP.NET Core 10.0:</strong> Web API framework</li>
    <li><strong>Entity Framework Core 10.0:</strong> ORM for database access</li>
  </ul>
  
  <h3>Infrastructure Components</h3>
  <ul>
    <li><strong>PostgreSQL 16:</strong> Primary data store (Port 5432)</li>
    <li><strong>RabbitMQ 3.12:</strong> Message broker for async communication (Ports 5672, 15672)</li>
    <li><strong>Redis 7:</strong> Distributed caching (Port 6379)</li>
    <li><strong>Ocelot:</strong> API Gateway for routing and rate limiting (Port 5000)</li>
    <li><strong>Keycloak 23:</strong> Identity provider with OAuth 2.0 / OIDC (Port 8080)</li>
    <li><strong>Elasticsearch 8.11:</strong> Log storage and search (Port 9200)</li>
    <li><strong>Kibana 8.11:</strong> Visualization dashboards (Port 5601)</li>
    <li><strong>Logstash 8.11:</strong> Log processing pipeline (Port 5000)</li>
  </ul>
  
  <h3>Development Tools</h3>
  <ul>
    <li><strong>Docker & Docker Compose:</strong> Containerization and orchestration</li>
    <li><strong>Serilog:</strong> Structured logging</li>
    <li><strong>FluentValidation:</strong> Input validation</li>
    <li><strong>Swagger/OpenAPI:</strong> API documentation</li>
    <li><strong>xUnit:</strong> Unit testing framework</li>
  </ul>
  
  <h2>Design Patterns and Best Practices</h2>
  <ul>
    <li><strong>Clean Architecture:</strong> Separation of concerns with clear layer boundaries;</li>
    <li><strong>CQRS Pattern:</strong> Command Query Responsibility Segregation using MediatR;</li>
    <li><strong>Repository Pattern:</strong> Abstraction layer for data access;</li>
    <li><strong>Dependency Injection:</strong> Built-in .NET DI container for loose coupling;</li>
    <li><strong>SOLID Principles:</strong> Following object-oriented design principles;</li>
    <li><strong>Unit Testing:</strong> Comprehensive test coverage with xUnit;</li>
    <li><strong>API Versioning:</strong> Support for multiple API versions;</li>
    <li><strong>Error Handling:</strong> Global exception handling with custom middleware.</li>
  </ul>
  
  <h2>Monitoring Capabilities</h2>
  <p>The system can monitor various types of metrics:</p>
  <ul>
    <li><strong>System Metrics:</strong> CPU usage, memory consumption, disk I/O;</li>
    <li><strong>Application Metrics:</strong> Request rates, response times, error rates;</li>
    <li><strong>Infrastructure Metrics:</strong> Network traffic, database connections, queue depth;</li>
    <li><strong>Custom Metrics:</strong> User-defined metrics via API;</li>
    <li><strong>Health Checks:</strong> Endpoint availability and response validation.</li>
  </ul>
  
  <h2>Alert System</h2>
  <p>Flexible alerting system with multiple features:</p>
  <ul>
    <li>Threshold-based alerts (greater than, less than, equals)</li>
    <li>Time-window aggregations (average, sum, count)</li>
    <li>Multiple notification channels (email, Slack, webhooks)</li>
    <li>Alert severity levels (info, warning, critical)</li>
    <li>Alert suppression and deduplication</li>
    <li>Alert history and audit trail</li>
  </ul>
  
  <h2>API Endpoints</h2>
  <p>RESTful API with comprehensive endpoints:</p>
  <ul>
    <li><strong>Metrics API:</strong> POST /api/metrics, GET /api/metrics</li>
    <li><strong>Targets API:</strong> CRUD operations for monitored targets</li>
    <li><strong>Alerts API:</strong> Configure and manage alert rules</li>
    <li><strong>Dashboard API:</strong> Retrieve aggregated metrics for visualization</li>
    <li><strong>Health API:</strong> System health checks and status</li>
  </ul>
  
  <h2>Deployment</h2>
  <p>The system is fully containerized and can be deployed using Docker Compose:</p>
  <ul>
    <li>Single command deployment: <code>docker-compose up -d</code></li>
    <li>Automatic service discovery and networking</li>
    <li>Volume persistence for databases</li>
    <li>Environment-based configuration</li>
    <li>Health checks for all services</li>
    <li>Easy scaling with Docker Swarm or Kubernetes</li>
  </ul>
  
  <h2>Security Features</h2>
  <ul>
    <li><strong>OAuth 2.0 / OIDC:</strong> Authentication and authorization via Keycloak 23</li>
    <li><strong>JWT-based authentication:</strong> Secure token-based authentication</li>
    <li><strong>Role-based access control (RBAC):</strong> Fine-grained permissions management</li>
    <li><strong>API rate limiting:</strong> Protection against abuse via Ocelot Gateway</li>
    <li><strong>CORS configuration:</strong> Secure cross-origin resource sharing</li>
    <li><strong>Secure password hashing:</strong> Industry-standard encryption algorithms</li>
    <li><strong>SQL injection prevention:</strong> Parameterized queries with Entity Framework Core</li>
  </ul>
  
  <h2>Performance Optimization</h2>
  <ul>
    <li>Redis caching for frequently accessed data</li>
    <li>Database indexing for query optimization</li>
    <li>Asynchronous processing with message queues</li>
    <li>Connection pooling for database connections</li>
    <li>Batch processing for metrics ingestion</li>
    <li>Lazy loading and pagination for large datasets</li>
  </ul>
  
  <h2>Future Enhancements</h2>
  <ul>
    <li>Machine learning for anomaly detection</li>
    <li>Predictive alerting based on historical trends</li>
    <li>Multi-tenancy support</li>
    <li>Advanced data retention policies</li>
    <li>Integration with popular monitoring tools (Prometheus, Grafana)</li>
    <li>Mobile application for on-the-go monitoring</li>
    <li>Custom plugin system for extensibility</li>
  </ul>
  
  <h2>Use Cases</h2>
  <ul>
    <li><strong>Microservices Monitoring:</strong> Track health and performance of distributed services</li>
    <li><strong>Infrastructure Monitoring:</strong> Monitor servers, databases, and network devices</li>
    <li><strong>Application Performance:</strong> Track application metrics and user experience</li>
    <li><strong>DevOps Automation:</strong> Integrate with CI/CD pipelines for deployment monitoring</li>
    <li><strong>SLA Compliance:</strong> Ensure service level agreements are met</li>
  </ul>
  
  <h2>Learning Outcomes</h2>
  <p>This project demonstrates proficiency in:</p>
  <ul>
    <li>Microservices architecture design and implementation</li>
    <li>Real-time data processing and streaming</li>
    <li>Message-driven architecture with RabbitMQ</li>
    <li>Clean Architecture and SOLID principles</li>
    <li>Docker containerization and orchestration</li>
    <li>RESTful API design and implementation</li>
    <li>Database design and optimization</li>
    <li>Asynchronous programming in C#</li>
    <li>Testing strategies for distributed systems</li>
  </ul>
</div>
  `,
  image: "/projetos/monitoring.jpeg",
  githubUrl: "https://github.com/FriggD/distributed-monitoring-system",
  technologies: ["C#", ".NET 10", "PostgreSQL", "Redis", "RabbitMQ", "Docker", "Keycloak", "Elasticsearch"],ologies: ["C#", ".NET 8", "PostgreSQL", "Redis", "RabbitMQ", "Docker", "React", "TypeScript"],
  featured: true,
  status: "Published",
  date: "Feb 03, 2026",
};

export default distributedMonitoringProject;
