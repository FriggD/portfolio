import type { Article } from "@/lib/types"

const sampleArticles: Article[] = [
  {
    id: 1,
    title: "Getting Started with Next.js 14",
    slug: "getting-started-with-nextjs-14",
    excerpt: "A comprehensive guide to setting up your first Next.js 14 application with the App Router.",
    content: `# Getting Started with Next.js 14

Next.js has revolutionized the way developers build React applications by providing a powerful framework that combines server-side rendering, static site generation, and client-side rendering in one cohesive package. With the release of Next.js 14, the framework has become even more powerful and developer-friendly.

## What's New in Next.js 14?

Next.js 14 introduces several exciting features and improvements:

- **Improved App Router**: The App Router is now more stable and performant
- **Partial Prerendering**: Combine static and dynamic content seamlessly
- **Server Actions**: Write server-side code directly in your components
- **Turbopack Improvements**: Faster development experience with improved bundling`,
    category: "Web Development",
    tags: ["Next.js", "React", "JavaScript", "Frontend"],
    image: "/placeholder.svg?height=400&width=800",
    featured: true,
    status: "Published",
    date: "Jan 15, 2025",
  },
  {
    id: 2,
    title: "Mastering TypeScript: Advanced Types and Patterns",
    slug: "mastering-typescript-advanced-types",
    excerpt: "Learn how to leverage TypeScript's advanced type system to build robust and scalable applications.",
    content: `# Mastering TypeScript: Advanced Types and Patterns

TypeScript has become the language of choice for many developers building large-scale JavaScript applications. Its powerful type system helps catch errors at compile time rather than runtime, leading to more robust code and improved developer experience.

## Utility Types

TypeScript provides several built-in utility types that can help manipulate and transform existing types.

### Partial<T>

Makes all properties of a type optional:

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
}

// All properties are optional
type PartialUser = Partial<User>;
\`\`\`

### Required<T>

Makes all properties of a type required:

\`\`\`typescript
interface Config {
  cache?: boolean;
  timeout?: number;
  retries?: number;
}

// All properties are required
type RequiredConfig = Required<Config>;
\`\`\``,
    category: "Web Development",
    tags: ["TypeScript", "JavaScript", "Programming", "Frontend"],
    image: "/placeholder.svg?height=400&width=800",
    featured: false,
    status: "Published",
    date: "Feb 20, 2025",
  },
  {
    id: 3,
    title: "DevOps Best Practices for Modern Development Teams",
    slug: "devops-best-practices",
    excerpt:
      "An in-depth guide to implementing DevOps practices that improve collaboration, automation, and deployment efficiency.",
    content: `# DevOps Best Practices for Modern Development Teams

DevOps has transformed how software is built and delivered, breaking down silos between development and operations teams to create a more collaborative and efficient workflow. In this article, we'll explore key DevOps best practices that can help your team deliver software faster, more reliably, and with higher quality.

## Continuous Integration and Continuous Delivery (CI/CD)

A robust CI/CD pipeline is the backbone of any successful DevOps implementation.

**Best Practices:**

1. **Automate everything**: From code compilation to testing and deployment.

2. **Fail fast**: Catch issues early in the development process.

3. **Keep the main branch deployable**: Ensure your main branch is always in a deployable state.

4. **Use feature flags**: Decouple deployment from release to enable continuous delivery.`,
    category: "DevOps",
    tags: ["DevOps", "CI/CD", "Automation", "Cloud Computing"],
    image: "/placeholder.svg?height=400&width=800",
    featured: false,
    status: "Published",
    date: "Mar 10, 2025",
  },
  {
    id: 4,
    title: "Building Scalable Microservices with Node.js",
    slug: "building-scalable-microservices-nodejs",
    excerpt:
      "Learn how to design, build, and deploy scalable microservices architecture using Node.js and modern tools.",
    content: `# Building Scalable Microservices with Node.js

Microservices architecture has become the standard approach for building large, complex applications that need to scale. By breaking down a monolithic application into smaller, independently deployable services, teams can develop, deploy, and scale parts of their application independently.

## Understanding Microservices Architecture

Before diving into implementation, let's understand the key principles of microservices:

1. **Single Responsibility**: Each service should focus on a specific business capability
2. **Independence**: Services can be developed, deployed, and scaled independently
3. **Decentralization**: Services manage their own data and business logic
4. **Resilience**: Failure in one service shouldn't bring down the entire system
5. **Observability**: Services should be easy to monitor and debug`,
    category: "Backend Development",
    tags: ["Node.js", "Microservices", "Architecture", "Backend"],
    image: "/placeholder.svg?height=400&width=800",
    featured: true,
    status: "Published",
    date: "Apr 5, 2025",
  },
  {
    id: 5,
    title: "Securing Your Web Applications: A Comprehensive Guide",
    slug: "securing-web-applications",
    excerpt:
      "Learn essential security practices to protect your web applications from common vulnerabilities and attacks.",
    content: `# Securing Your Web Applications: A Comprehensive Guide

Web application security is more important than ever. With cyber threats constantly evolving, developers need to stay vigilant and implement robust security measures to protect their applications and user data. This guide covers essential security practices that every web developer should know.

## Understanding Common Security Threats

Before diving into specific security measures, it's important to understand the common threats facing web applications:

### 1. Injection Attacks

Injection attacks, such as SQL injection and Cross-Site Scripting (XSS), occur when untrusted data is sent to an interpreter as part of a command or query.

### 2. Broken Authentication

Authentication vulnerabilities can allow attackers to compromise passwords, keys, or session tokens, or exploit implementation flaws to assume other users' identities.`,
    category: "Security",
    tags: ["Security", "Web Development", "Best Practices", "OWASP"],
    image: "/placeholder.svg?height=400&width=800",
    featured: false,
    status: "Published",
    date: "May 12, 2025",
  },
  {
    id: 6,
    title: "Introduction to Kubernetes for Developers",
    slug: "introduction-to-kubernetes",
    excerpt:
      "A beginner-friendly guide to understanding Kubernetes and how it can help manage containerized applications.",
    content: `# Introduction to Kubernetes for Developers

Kubernetes has become the de facto standard for container orchestration, but it can be intimidating for newcomers. This guide aims to demystify Kubernetes and provide a solid foundation for developers looking to leverage its power.

## What is Kubernetes?

Kubernetes (K8s) is an open-source platform designed to automate deploying, scaling, and operating application containers. It groups containers that make up an application into logical units for easy management and discovery.

## Key Concepts

### Pods

The smallest deployable units in Kubernetes. A pod represents a single instance of a running process in your cluster and can contain one or more containers.

### Deployments

Deployments provide declarative updates for Pods and ReplicaSets. You describe a desired state in a Deployment, and the Deployment Controller changes the actual state to the desired state at a controlled rate.

### Services

An abstract way to expose an application running on a set of Pods as a network service. Kubernetes gives Pods their own IP addresses, but these IPs are not stable. Services provide a stable endpoint to access your application.`,
    category: "DevOps",
    tags: ["Kubernetes", "Containers", "DevOps", "Cloud Native"],
    image: "/placeholder.svg?height=400&width=800",
    featured: false,
    status: "Published",
    date: "Jun 3, 2025",
  },
  {
    id: 7,
    title: "The Future of AI in Software Development",
    slug: "future-of-ai-in-software-development",
    excerpt:
      "Exploring how artificial intelligence is transforming the software development lifecycle and what developers need to know.",
    content: `# The Future of AI in Software Development

Artificial Intelligence (AI) is rapidly transforming the software development landscape. From code generation to testing and deployment, AI tools are automating tasks and augmenting developer capabilities in unprecedented ways.

## Code Generation and Assistance

AI-powered code assistants like GitHub Copilot and Amazon CodeWhisperer can generate code snippets, complete functions, and even write entire modules based on natural language descriptions or context from existing code.

## Automated Testing

AI is revolutionizing software testing by:

1. **Generating test cases** based on code analysis
2. **Self-healing tests** that adapt to UI changes
3. **Intelligent test prioritization** to focus on areas most likely to have bugs
4. **Visual regression testing** using computer vision

## Bug Detection and Resolution

AI systems can analyze code patterns to identify potential bugs before they make it to production. Some tools can even suggest fixes based on patterns learned from millions of code repositories.`,
    category: "Artificial Intelligence",
    tags: ["AI", "Machine Learning", "Software Development", "Future Tech"],
    image: "/placeholder.svg?height=400&width=800",
    featured: true,
    status: "Published",
    date: "Jul 18, 2025",
  },
  {
    id: 8,
    title: "Optimizing Database Performance in High-Traffic Applications",
    slug: "optimizing-database-performance",
    excerpt:
      "Practical strategies and techniques to improve database performance when dealing with high traffic and large datasets.",
    content: `# Optimizing Database Performance in High-Traffic Applications

Database performance can make or break your application, especially under high traffic. This article explores practical strategies to optimize your database for speed, reliability, and scalability.

## Indexing Strategies

Proper indexing is fundamental to database performance:

1. **Create indexes for frequently queried columns**
2. **Use composite indexes** for queries with multiple conditions
3. **Avoid over-indexing** as it slows down write operations
4. **Regularly analyze and update indexes** based on query patterns

## Query Optimization

Efficient queries are essential for good performance:

1. **Select only the columns you need** instead of using SELECT *
2. **Use EXPLAIN to analyze query execution plans**
3. **Avoid N+1 query problems** by using joins or batch fetching
4. **Implement pagination** for large result sets`,
    category: "Database",
    tags: ["Database", "Performance", "SQL", "Optimization"],
    image: "/placeholder.svg?height=400&width=800",
    featured: false,
    status: "Published",
    date: "Aug 5, 2025",
  },
  {
    id: 9,
    title: "Implementing Zero Trust Security in Modern IT Infrastructure",
    slug: "implementing-zero-trust-security",
    excerpt: "A practical guide to adopting the Zero Trust security model in your organization's IT infrastructure.",
    content: `# Implementing Zero Trust Security in Modern IT Infrastructure

The traditional perimeter-based security model is no longer sufficient in today's complex IT landscape. Zero Trust is a security model based on the principle of "never trust, always verify" that requires strict identity verification for every person and device trying to access resources, regardless of whether they are inside or outside the network perimeter.

## Core Principles of Zero Trust

1. **Verify explicitly**: Always authenticate and authorize based on all available data points
2. **Use least privilege access**: Limit user access with Just-In-Time and Just-Enough-Access
3. **Assume breach**: Minimize blast radius and segment access, verify end-to-end encryption, and use analytics to improve defenses

## Implementation Steps

### 1. Identify Your Protected Surface

Start by identifying the critical data, assets, applications, and services (DAAS) that need protection.`,
    category: "Security",
    tags: ["Zero Trust", "Cybersecurity", "Network Security", "IT Infrastructure"],
    image: "/placeholder.svg?height=400&width=800",
    featured: false,
    status: "Published",
    date: "Sep 12, 2025",
  },
  {
    id: 10,
    title: "Getting Started with Rust for Systems Programming",
    slug: "getting-started-with-rust",
    excerpt:
      "An introduction to Rust programming language and why it's gaining popularity for systems programming and beyond.",
    content: `# Getting Started with Rust for Systems Programming

Rust has been gaining significant traction as a systems programming language that offers memory safety without garbage collection, concurrency without data races, and abstraction without performance penalties.

## Why Rust?

Rust provides several advantages that make it attractive for systems programming:

1. **Memory Safety**: Rust's ownership system prevents null pointer dereferencing and buffer overflows at compile time
2. **Concurrency**: The ownership and type systems help prevent data races and other concurrency bugs
3. **Performance**: Rust offers C/C++-level performance without sacrificing safety
4. **Zero-Cost Abstractions**: Rust's abstractions compile down to efficient machine code

## Basic Syntax

Here's a simple "Hello, World!" program in Rust:

\`\`\`rust
fn main() {
    println!("Hello, World!");
}
\`\`\``,
    category: "Programming Languages",
    tags: ["Rust", "Systems Programming", "Programming Languages", "Performance"],
    image: "/placeholder.svg?height=400&width=800",
    featured: false,
    status: "Published",
    date: "Oct 8, 2025",
  },
]

export default sampleArticles
