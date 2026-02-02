import type { Article } from "@/lib/types";

const article: Article = {
  id: 1770063073120,
  title: "Ocelot API Gateway: Simplifying Microservices Architecture in .NET",
  slug: "ocelot-api-gateway-dotnet",
  excerpt: "Learn how Ocelot provides a lightweight, powerful API Gateway solution for .NET microservices",
  content: `
    <div class="article-content">
      <div class="article-content">
      <h1>Ocelot API Gateway: Simplifying Microservices Architecture in .NET</h1>
      
      <p>In modern microservices architectures, an <strong>API Gateway</strong> acts as a single entry point for all client requests, routing them to appropriate backend services. <strong>Ocelot</strong> is an open-source, lightweight API Gateway built specifically for .NET, making it an excellent choice for .NET-based microservices ecosystems.</p>

      <h2>What is Ocelot?</h2>
      
      <p>Ocelot is a .NET API Gateway that provides a simple way to route requests, aggregate responses, and apply cross-cutting concerns like authentication, rate limiting, and caching. It's built on top of ASP.NET Core and leverages its middleware pipeline.</p>

      <h3>Key Features</h3>
      <ul>
        <li><strong>Request Routing:</strong> Route incoming requests to downstream services based on configuration</li>
        <li><strong>Request Aggregation:</strong> Combine multiple service calls into a single response</li>
        <li><strong>Service Discovery:</strong> Integration with Consul, Eureka, and other service discovery tools</li>
        <li><strong>Load Balancing:</strong> Distribute requests across multiple service instances</li>
        <li><strong>Authentication & Authorization:</strong> Centralized security with JWT, OAuth2, and more</li>
        <li><strong>Rate Limiting:</strong> Control request rates to protect backend services</li>
        <li><strong>Caching:</strong> Cache responses to improve performance</li>
        <li><strong>Quality of Service (QoS):</strong> Circuit breaker pattern and retry policies</li>
      </ul>

      <h2>Getting Started with Ocelot</h2>

      <h3>Installation</h3>
      <p>First, install the Ocelot NuGet package:</p>

      <pre><code class="language-bash">dotnet add package Ocelot</code></pre>

      <h3>Basic Configuration</h3>
      <p>Create an <code>ocelot.json</code> configuration file:</p>

      <pre><code class="language-json">{
  "Routes": [
    {
      "DownstreamPathTemplate": "/api/products",
      "DownstreamScheme": "https",
      "DownstreamHostAndPorts": [
        {
          "Host": "localhost",
          "Port": 5001
        }
      ],
      "UpstreamPathTemplate": "/products",
      "UpstreamHttpMethod": [ "GET" ]
    },
    {
      "DownstreamPathTemplate": "/api/orders/{id}",
      "DownstreamScheme": "https",
      "DownstreamHostAndPorts": [
        {
          "Host": "localhost",
          "Port": 5002
        }
      ],
      "UpstreamPathTemplate": "/orders/{id}",
      "UpstreamHttpMethod": [ "GET", "POST", "PUT", "DELETE" ]
    }
  ],
  "GlobalConfiguration": {
    "BaseUrl": "https://localhost:5000"
  }
}</code></pre>

      <h3>Program.cs Setup</h3>
      <p>Configure Ocelot in your ASP.NET Core application:</p>

      <pre><code class="language-csharp">using Ocelot.DependencyInjection;
using Ocelot.Middleware;

var builder = WebApplication.CreateBuilder(args);

// Add Ocelot configuration
builder.Configuration.AddJsonFile("ocelot.json", optional: false, reloadOnChange: true);

// Add Ocelot services
builder.Services.AddOcelot();

var app = builder.Build();

// Use Ocelot middleware
await app.UseOcelot();

app.Run();</code></pre>

      <h2>Advanced Features</h2>

      <h3>1. Request Aggregation</h3>
      <p>Combine multiple service calls into a single response:</p>

      <pre><code class="language-json">{
  "Routes": [
    {
      "DownstreamPathTemplate": "/api/products/{id}",
      "DownstreamScheme": "https",
      "DownstreamHostAndPorts": [
        { "Host": "localhost", "Port": 5001 }
      ],
      "UpstreamPathTemplate": "/products/{id}",
      "UpstreamHttpMethod": [ "GET" ],
      "Key": "Products"
    },
    {
      "DownstreamPathTemplate": "/api/reviews/{id}",
      "DownstreamScheme": "https",
      "DownstreamHostAndPorts": [
        { "Host": "localhost", "Port": 5003 }
      ],
      "UpstreamPathTemplate": "/reviews/{id}",
      "UpstreamHttpMethod": [ "GET" ],
      "Key": "Reviews"
    }
  ],
  "Aggregates": [
    {
      "RouteKeys": [ "Products", "Reviews" ],
      "UpstreamPathTemplate": "/productdetails/{id}"
    }
  ]
}</code></pre>

      <h3>2. Rate Limiting</h3>
      <p>Protect your services from excessive requests:</p>

      <pre><code class="language-json">{
  "DownstreamPathTemplate": "/api/products",
  "UpstreamPathTemplate": "/products",
  "RateLimitOptions": {
    "ClientWhitelist": [],
    "EnableRateLimiting": true,
    "Period": "1s",
    "PeriodTimespan": 1,
    "Limit": 10
  }
}</code></pre>

      <h3>3. Authentication with JWT</h3>
      <p>Secure your gateway with JWT authentication:</p>

      <pre><code class="language-csharp">using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Configure JWT Authentication
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer("Bearer", options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = builder.Configuration["Jwt:Issuer"],
            ValidAudience = builder.Configuration["Jwt:Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))
        };
    });

builder.Configuration.AddJsonFile("ocelot.json");
builder.Services.AddOcelot();

var app = builder.Build();

app.UseAuthentication();
await app.UseOcelot();

app.Run();</code></pre>

      <p>In your <code>ocelot.json</code>:</p>

      <pre><code class="language-json">{
  "DownstreamPathTemplate": "/api/orders",
  "UpstreamPathTemplate": "/orders",
  "AuthenticationOptions": {
    "AuthenticationProviderKey": "Bearer",
    "AllowedScopes": []
  }
}</code></pre>

      <h3>4. Load Balancing</h3>
      <p>Distribute requests across multiple instances:</p>

      <pre><code class="language-json">{
  "DownstreamPathTemplate": "/api/products",
  "DownstreamScheme": "https",
  "DownstreamHostAndPorts": [
    { "Host": "localhost", "Port": 5001 },
    { "Host": "localhost", "Port": 5002 },
    { "Host": "localhost", "Port": 5003 }
  ],
  "UpstreamPathTemplate": "/products",
  "LoadBalancerOptions": {
    "Type": "RoundRobin"
  }
}</code></pre>

      <p>Available load balancing strategies:</p>
      <ul>
        <li><strong>LeastConnection:</strong> Routes to the service with fewest active connections</li>
        <li><strong>RoundRobin:</strong> Distributes requests evenly across all instances</li>
        <li><strong>NoLoadBalancer:</strong> Uses the first available service</li>
      </ul>

      <h3>5. Quality of Service (Circuit Breaker)</h3>
      <p>Implement resilience patterns:</p>

      <pre><code class="language-json">{
  "DownstreamPathTemplate": "/api/products",
  "UpstreamPathTemplate": "/products",
  "QoSOptions": {
    "ExceptionsAllowedBeforeBreaking": 3,
    "DurationOfBreak": 1000,
    "TimeoutValue": 5000
  }
}</code></pre>

      <h3>6. Caching</h3>
      <p>Cache responses to improve performance:</p>

      <pre><code class="language-csharp">builder.Services.AddOcelot()
    .AddCacheManager(x =>
    {
        x.WithDictionaryHandle();
    });</code></pre>

      <pre><code class="language-json">{
  "DownstreamPathTemplate": "/api/products",
  "UpstreamPathTemplate": "/products",
  "FileCacheOptions": {
    "TtlSeconds": 30,
    "Region": "products"
  }
}</code></pre>

      <h2>Service Discovery Integration</h2>

      <h3>Consul Integration</h3>
      <p>Integrate with Consul for dynamic service discovery:</p>

      <pre><code class="language-bash">dotnet add package Ocelot.Provider.Consul</code></pre>

      <pre><code class="language-csharp">builder.Services.AddOcelot()
    .AddConsul();</code></pre>

      <pre><code class="language-json">{
  "Routes": [
    {
      "DownstreamPathTemplate": "/api/products",
      "UpstreamPathTemplate": "/products",
      "ServiceName": "product-service",
      "LoadBalancerOptions": {
        "Type": "RoundRobin"
      }
    }
  ],
  "GlobalConfiguration": {
    "ServiceDiscoveryProvider": {
      "Host": "localhost",
      "Port": 8500,
      "Type": "Consul"
    }
  }
}</code></pre>

      <h2>Best Practices</h2>

      <ol>
        <li><strong>Use Environment-Specific Configurations:</strong> Maintain separate <code>ocelot.json</code> files for different environments</li>
        <li><strong>Implement Proper Logging:</strong> Use Serilog or similar for comprehensive logging</li>
        <li><strong>Enable CORS Carefully:</strong> Configure CORS policies appropriately for your frontend applications</li>
        <li><strong>Monitor Performance:</strong> Use Application Insights or similar tools to monitor gateway performance</li>
        <li><strong>Secure Your Gateway:</strong> Always use HTTPS and implement proper authentication/authorization</li>
        <li><strong>Version Your APIs:</strong> Include API versioning in your routing strategy</li>
        <li><strong>Use Health Checks:</strong> Implement health check endpoints for monitoring</li>
      </ol>

      <h2>Complete Example: E-Commerce Gateway</h2>

      <pre><code class="language-json">{
  "Routes": [
    {
      "DownstreamPathTemplate": "/api/products/{everything}",
      "DownstreamScheme": "https",
      "ServiceName": "product-service",
      "UpstreamPathTemplate": "/products/{everything}",
      "UpstreamHttpMethod": [ "GET", "POST", "PUT", "DELETE" ],
      "AuthenticationOptions": {
        "AuthenticationProviderKey": "Bearer"
      },
      "RateLimitOptions": {
        "EnableRateLimiting": true,
        "Period": "1m",
        "Limit": 100
      },
      "LoadBalancerOptions": {
        "Type": "RoundRobin"
      },
      "QoSOptions": {
        "ExceptionsAllowedBeforeBreaking": 3,
        "DurationOfBreak": 5000,
        "TimeoutValue": 10000
      }
    },
    {
      "DownstreamPathTemplate": "/api/orders/{everything}",
      "DownstreamScheme": "https",
      "ServiceName": "order-service",
      "UpstreamPathTemplate": "/orders/{everything}",
      "UpstreamHttpMethod": [ "GET", "POST", "PUT", "DELETE" ],
      "AuthenticationOptions": {
        "AuthenticationProviderKey": "Bearer"
      }
    },
    {
      "DownstreamPathTemplate": "/api/users/{everything}",
      "DownstreamScheme": "https",
      "ServiceName": "user-service",
      "UpstreamPathTemplate": "/users/{everything}",
      "UpstreamHttpMethod": [ "GET", "POST", "PUT", "DELETE" ],
      "AuthenticationOptions": {
        "AuthenticationProviderKey": "Bearer"
      }
    }
  ],
  "GlobalConfiguration": {
    "BaseUrl": "https://api.myecommerce.com",
    "ServiceDiscoveryProvider": {
      "Host": "consul",
      "Port": 8500,
      "Type": "Consul"
    },
    "RateLimitOptions": {
      "DisableRateLimitHeaders": false,
      "QuotaExceededMessage": "Rate limit exceeded. Please try again later.",
      "HttpStatusCode": 429
    }
  }
}</code></pre>

      <h2>Advantages of Ocelot</h2>

      <ul>
        <li><strong>Native .NET Integration:</strong> Built specifically for .NET ecosystem</li>
        <li><strong>Lightweight:</strong> Minimal overhead and fast performance</li>
        <li><strong>Easy Configuration:</strong> JSON-based configuration is simple and readable</li>
        <li><strong>Extensible:</strong> Custom middleware and delegating handlers support</li>
        <li><strong>Active Community:</strong> Well-maintained with regular updates</li>
        <li><strong>Production-Ready:</strong> Used by many organizations in production</li>
      </ul>

      <h2>When to Use Ocelot</h2>

      <p>Ocelot is ideal when:</p>
      <ul>
        <li>Building microservices with .NET/ASP.NET Core</li>
        <li>Need a lightweight, simple API Gateway solution</li>
        <li>Want tight integration with .NET ecosystem</li>
        <li>Require basic to intermediate gateway features</li>
        <li>Working with Consul or Eureka for service discovery</li>
      </ul>

      <h2>Alternatives to Consider</h2>

      <p>While Ocelot is excellent for .NET, consider these alternatives based on your needs:</p>
      <ul>
        <li><strong>Kong:</strong> More feature-rich, language-agnostic</li>
        <li><strong>YARP (Yet Another Reverse Proxy):</strong> Microsoft's official reverse proxy library</li>
        <li><strong>Traefik:</strong> Cloud-native, automatic service discovery</li>
        <li><strong>Envoy:</strong> High-performance, used in service mesh architectures</li>
      </ul>

      <h2>Conclusion</h2>

      <p>Ocelot provides a powerful yet simple solution for implementing API Gateway patterns in .NET microservices architectures. Its configuration-driven approach, combined with robust features like load balancing, rate limiting, and service discovery integration, makes it an excellent choice for .NET developers building distributed systems.</p>

      <p>Whether you're starting a new microservices project or modernizing an existing monolith, Ocelot can help you manage complexity, improve security, and enhance the overall architecture of your .NET applications.</p>

      <h2>Further Reading</h2>
      <ul>
        <li><a href="https://github.com/ThreeMammals/Ocelot" target="_blank" rel="noopener">Ocelot GitHub Repository</a></li>
        <li><a href="https://ocelot.readthedocs.io/" target="_blank" rel="noopener">Official Ocelot Documentation</a></li>
        <li><a href="https://docs.microsoft.com/en-us/dotnet/architecture/microservices/" target="_blank" rel="noopener">Microsoft Microservices Architecture Guide</a></li>
      </ul>
    </div>
    </div>
  `,
  category: "Architecture",
  tags: [".NET","C#","Ocelot","API Gateway"],
  image: "/articles/ocelot-gateway.png",
  featured: false,
  status: "Published",
  date: "February 2, 2026",
};

export default article;