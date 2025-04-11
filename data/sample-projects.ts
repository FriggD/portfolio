import type { Project } from "@/lib/types"

const sampleProjects: Project[] = [
  {
    id: 1,
    title: "AI-Powered Code Assistant",
    slug: "ai-code-assistant",
    description: "A VS Code extension that uses AI to help developers write better code faster.",
    content: `
      <h2>About the Project</h2>
      <p>This VS Code extension uses OpenAI's GPT-4 model to provide intelligent code suggestions, refactoring tips, and documentation generation directly in your editor.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li>Real-time code suggestions based on your current context</li>
        <li>Automatic documentation generation for functions and classes</li>
        <li>Code refactoring recommendations</li>
        <li>Natural language to code conversion</li>
        <li>Support for multiple programming languages</li>
      </ul>
      
      <h2>Technical Implementation</h2>
      <p>The extension is built using TypeScript and the VS Code Extension API. It communicates with OpenAI's API to generate suggestions and uses a local context cache to improve performance.</p>
      
      <h2>Challenges and Solutions</h2>
      <p>One of the biggest challenges was ensuring that the AI suggestions were relevant to the user's current context. We solved this by implementing a sliding context window that captures not just the current file, but also related imports and project structure.</p>
    `,
    image: "/placeholder.svg?height=600&width=800",
    demoUrl: "https://marketplace.visualstudio.com",
    githubUrl: "https://github.com",
    technologies: ["TypeScript", "VS Code API", "OpenAI", "Node.js"],
    featured: true,
    status: "Published",
    date: "Apr 15, 2025",
  },
  {
    id: 2,
    title: "Real-time Collaborative Whiteboard",
    slug: "collaborative-whiteboard",
    description: "A web-based whiteboard that allows multiple users to collaborate in real-time.",
    content: `
      <h2>About the Project</h2>
      <p>This collaborative whiteboard application allows teams to brainstorm, plan, and visualize ideas together in real-time, regardless of their physical location.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li>Real-time collaboration with multiple cursors</li>
        <li>Drawing tools including pen, shapes, and text</li>
        <li>Image upload and manipulation</li>
        <li>Infinite canvas with zoom and pan</li>
        <li>Session recording and playback</li>
        <li>Export to PNG, PDF, and SVG</li>
      </ul>
      
      <h2>Technical Implementation</h2>
      <p>The application is built with React for the frontend and uses Socket.io for real-time communication. The canvas is implemented using HTML5 Canvas with custom drawing algorithms for smooth rendering.</p>
      
      <h2>Challenges and Solutions</h2>
      <p>Synchronizing the state across multiple clients was challenging. We implemented a custom CRDT (Conflict-free Replicated Data Type) to ensure that all clients converge to the same state regardless of network latency.</p>
    `,
    image: "/placeholder.svg?height=600&width=800",
    demoUrl: "https://whiteboard-demo.com",
    githubUrl: "https://github.com",
    technologies: ["React", "Socket.io", "Canvas API", "TypeScript", "Node.js"],
    featured: true,
    status: "Published",
    date: "Mar 10, 2025",
  },
  {
    id: 3,
    title: "Blockchain-based Supply Chain Tracker",
    slug: "supply-chain-tracker",
    description: "A decentralized application for tracking products through the supply chain.",
    content: `
      <h2>About the Project</h2>
      <p>This dApp provides end-to-end visibility of products as they move through the supply chain, ensuring transparency and authenticity verification for consumers.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li>Immutable record of product journey</li>
        <li>QR code scanning for product verification</li>
        <li>Temperature and condition monitoring for sensitive products</li>
        <li>Automated alerts for supply chain disruptions</li>
        <li>Consumer-facing product history viewer</li>
      </ul>
      
      <h2>Technical Implementation</h2>
      <p>The application uses Ethereum smart contracts for the blockchain layer, with a React Native mobile app for scanning and verification. The backend is built with Node.js and connects to IPFS for decentralized storage of larger datasets.</p>
      
      <h2>Challenges and Solutions</h2>
      <p>Balancing on-chain and off-chain data storage was a significant challenge. We implemented a hybrid approach where critical verification data is stored on-chain, while larger datasets like images and detailed logs are stored on IPFS with their hashes recorded on the blockchain.</p>
    `,
    image: "/placeholder.svg?height=600&width=800",
    demoUrl: "https://supply-chain-demo.com",
    githubUrl: "https://github.com",
    technologies: ["Solidity", "Ethereum", "React Native", "Node.js", "IPFS"],
    featured: false,
    status: "Published",
    date: "Feb 5, 2025",
  },
  {
    id: 4,
    title: "AI-Powered Image Generator",
    slug: "ai-image-generator",
    description: "A web application that generates images from text descriptions using AI.",
    content: `
      <h2>About the Project</h2>
      <p>This web application allows users to generate unique images by simply describing what they want to see. It uses state-of-the-art AI models to transform text into high-quality visuals.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li>Text-to-image generation</li>
        <li>Style customization options</li>
        <li>Image editing and refinement</li>
        <li>Gallery of generated images</li>
        <li>Image download in multiple formats</li>
      </ul>
      
      <h2>Technical Implementation</h2>
      <p>The frontend is built with Next.js and uses a combination of Stable Diffusion and DALL-E models for image generation. The application is deployed on Vercel with serverless functions handling the AI processing.</p>
      
      <h2>Challenges and Solutions</h2>
      <p>Processing large AI models in a web environment was challenging. We implemented a queue system with WebSockets to provide real-time updates to users while their images are being generated on the server.</p>
    `,
    image: "/placeholder.svg?height=600&width=800",
    demoUrl: "https://image-generator-demo.com",
    githubUrl: "https://github.com",
    technologies: ["Next.js", "React", "TensorFlow.js", "WebSockets", "Vercel"],
    featured: true,
    status: "Published",
    date: "Jan 20, 2025",
  },
  {
    id: 5,
    title: "Personal Finance Dashboard",
    slug: "finance-dashboard",
    description: "A comprehensive dashboard for tracking personal finances, investments, and budgeting.",
    content: `
      <h2>About the Project</h2>
      <p>This personal finance dashboard helps users track their income, expenses, investments, and financial goals in one place. It provides visualizations and insights to help users make better financial decisions.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li>Bank account and credit card integration</li>
        <li>Expense categorization and analysis</li>
        <li>Investment portfolio tracking</li>
        <li>Budget creation and monitoring</li>
        <li>Financial goal setting and tracking</li>
        <li>Customizable reports and visualizations</li>
      </ul>
      
      <h2>Technical Implementation</h2>
      <p>The application is built with React and uses D3.js for data visualization. It connects to financial institutions using Plaid API and stores user data securely in a PostgreSQL database.</p>
      
      <h2>Challenges and Solutions</h2>
      <p>Ensuring the security of sensitive financial data was paramount. We implemented end-to-end encryption, secure authentication with MFA, and regular security audits to protect user information.</p>
    `,
    image: "/placeholder.svg?height=600&width=800",
    demoUrl: "https://finance-dashboard-demo.com",
    githubUrl: "https://github.com",
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL", "Plaid API"],
    featured: false,
    status: "Published",
    date: "Dec 5, 2024",
  },
  {
    id: 6,
    title: "E-commerce Platform",
    slug: "ecommerce-platform",
    description: "A modern e-commerce platform with headless CMS integration and advanced product filtering.",
    content: `
      <h2>About the Project</h2>
      <p>This e-commerce platform provides businesses with a flexible, high-performance online store that can be easily customized to meet their specific needs.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li>Headless architecture with CMS integration</li>
        <li>Advanced product filtering and search</li>
        <li>Customer account management</li>
        <li>Secure payment processing</li>
        <li>Inventory management</li>
        <li>Order tracking and management</li>
        <li>Analytics and reporting</li>
      </ul>
      
      <h2>Technical Implementation</h2>
      <p>The platform is built with Next.js for the frontend and uses a headless CMS (Contentful) for content management. It integrates with Stripe for payments and uses a combination of MongoDB and Redis for data storage.</p>
      
      <h2>Challenges and Solutions</h2>
      <p>Balancing performance with feature richness was a challenge. We implemented incremental static regeneration (ISR) to ensure fast page loads while keeping content up-to-date, and used React Query for efficient data fetching and caching.</p>
    `,
    image: "/placeholder.svg?height=600&width=800",
    demoUrl: "https://ecommerce-demo.com",
    githubUrl: "https://github.com",
    technologies: ["Next.js", "Contentful", "Stripe", "MongoDB", "Redis", "React Query"],
    featured: false,
    status: "Published",
    date: "Nov 15, 2024",
  },
  {
    id: 7,
    title: "Smart Home Control System",
    slug: "smart-home-system",
    description: "An IoT-based system for controlling and automating home devices.",
    content: `
      <h2>About the Project</h2>
      <p>This smart home system allows users to control and automate their home devices through a mobile app or voice commands. It supports a wide range of IoT devices and can be easily expanded with new integrations.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li>Control of lights, thermostats, locks, and other smart devices</li>
        <li>Voice control integration with Alexa and Google Assistant</li>
        <li>Automated routines based on time, location, or device states</li>
        <li>Energy usage monitoring and optimization</li>
        <li>Security camera integration and alerts</li>
        <li>Historical data and usage patterns</li>
      </ul>
      
      <h2>Technical Implementation</h2>
      <p>The system consists of a React Native mobile app, a Node.js backend, and a Raspberry Pi hub that communicates with devices using various protocols (Zigbee, Z-Wave, Wi-Fi). It uses MQTT for real-time communication and MongoDB for data storage.</p>
      
      <h2>Challenges and Solutions</h2>
      <p>Integrating devices with different protocols and APIs was challenging. We created a modular architecture with standardized interfaces for each device type, allowing for easy addition of new device integrations through a plugin system.</p>
    `,
    image: "/placeholder.svg?height=600&width=800",
    demoUrl: "https://smart-home-demo.com",
    githubUrl: "https://github.com",
    technologies: ["React Native", "Node.js", "MQTT", "MongoDB", "Raspberry Pi", "IoT"],
    featured: false,
    status: "Published",
    date: "Oct 10, 2024",
  },
  {
    id: 8,
    title: "3D Web Game Engine",
    slug: "3d-web-game-engine",
    description: "A WebGL-based game engine for creating 3D games that run in the browser.",
    content: `
      <h2>About the Project</h2>
      <p>This 3D game engine allows developers to create immersive games that run directly in the browser without requiring any plugins or downloads. It provides a comprehensive set of tools and features for game development.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li>WebGL-based rendering with PBR materials</li>
        <li>Physics engine with collision detection</li>
        <li>Animation system with skeletal animations</li>
        <li>Audio system with spatial audio</li>
        <li>Input handling for keyboard, mouse, and gamepads</li>
        <li>Entity-component system for game objects</li>
        <li>Visual editor for scene creation</li>
      </ul>
      
      <h2>Technical Implementation</h2>
      <p>The engine is built with TypeScript and uses WebGL for rendering. It implements a custom entity-component system for game objects and integrates with Cannon.js for physics simulation.</p>
      
      <h2>Challenges and Solutions</h2>
      <p>Optimizing performance for complex 3D scenes in the browser was challenging. We implemented various optimization techniques such as frustum culling, level of detail (LOD), and instanced rendering to achieve smooth performance even on lower-end devices.</p>
    `,
    image: "/placeholder.svg?height=600&width=800",
    demoUrl: "https://game-engine-demo.com",
    githubUrl: "https://github.com",
    technologies: ["WebGL", "TypeScript", "Three.js", "Cannon.js", "Web Audio API"],
    featured: false,
    status: "Published",
    date: "Sep 5, 2024",
  },
]

export default sampleProjects
