import type { Article } from "@/lib/types";

const dirichletDrawerArticle: Article = {
  id: 2,
  title: "Dirichlet's Drawer Principle",
  slug: "dirichlets-drawer-principle",
  excerpt: "How to detect a uniqueness rule violation problem",
  content: `
   <style>
  .article-content {
    max-width: 800px;
    margin: 2rem auto;
    padding: 1.5rem;
    line-height: 1.6;
    color: #dedede;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    background-color: #1e1e1e;
  }

  .article-content h1,
  .article-content h2 {
    color: #ffffff;
  }

  .article-content h1 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .article-content h2 {
    margin-top: 2rem;
    font-size: 1.5rem;
    border-bottom: 2px solid #444;
    padding-bottom: 0.5rem;
  }

  .article-content p {
    margin: 1rem 0;
    font-size: 1rem;
    color: #dedede;
  }

  .article-content ul {
    margin: 1rem 0 1rem 1.5rem;
    padding-left: 1rem;
    list-style-type: disc;
  }

  .article-content li {
    margin-bottom: 0.5rem;
    font-size: 1rem;
    color: #dedede;
  }

  pre code {
    display: block;
    padding: 1rem;
    background-color: #2d2d2d;
    border-radius: 8px;
    color: #f8f8f2;
    overflow-x: auto;
  }
</style>

<div class="article-content">
  <h1>Have You Heard About the "Pigeonhole Principle"?</h1>

  <p>Have you ever noticed that in some systems, when you log in on one machine, you're automatically logged out from another? This behavior ensures that a user can only be logged in from one device at a time.</p>

  <p>There's a basic mathematical concept behind this: the <strong>Pigeonhole Principle</strong>, also known as <strong>Dirichlet's Drawer Principle</strong>.</p>

  <blockquote>
    <em>"If more than n items are placed into m containers, with n &gt; m, then at least one container must contain two or more items."</em>
  </blockquote>

  <p>This can be represented mathematically as:</p>

  <pre><code>If n &gt; m, then ∃ k ∈ {1, ..., m} such that container k contains ≥ 2 items.</code></pre>

  <p>Applying this logic to user authentication: if you have 10 users, but detect 13 active sessions, then at least one user must be logged into more than one machine — which violates the uniqueness rule for logins.</p>

  <p>Here's a simple Python example to simulate this scenario:</p>

  <pre><code class="language-python"># Dictionary of active sessions per user
active_sessions = {
    "ana": ["machine1", "machine2"],
    "bob": ["machine1"],
    "ava": ["machine1", "machine3"],
    "dan": ["machine2"]
}

# Check if any user has multiple logins
for user, machines in active_sessions.items():
    if len(machines) > 1:
        print(f"Warning: {user} is logged in from multiple machines:</br>               {machines}")
</code></pre>

  <p>This principle appears in various real-world situations:</p>

  <ul>
    <li><strong>Meeting rooms:</strong> If there are 6 meetings scheduled but only 5 rooms, at least one room must host more than one meeting, which can help in checking for resource overallocation.</li>
    <li><strong>IP address allocation:</strong> In a network with only 40 available IPs and 50 devices, at least 10 will fail to connect.</li>
    <li><strong>Resource allocation:</strong> If a system has more processes than available licenses or memory slots, collisions and failures will occur.</li>
  </ul>

  <p>Understanding and applying the Pigeonhole Principle helps in quickly identifying:</p>

  <ul>
    <li>Lack of uniqueness where it is expected (e.g., logins, allocations);</li>
    <li>Collisions in limited systems (e.g., hash tables, ports, IPs);</li>
    <li>Problems with distributing limited resources fairly.</li>
  </ul>

  <h2>Sources and Further Reading</h2>
  <ul>
    <li><a href="http://clubes.obmep.org.br/blog/sala-de-estudos-principio-das-casas-dos-pombos/" target="_blank" rel="noopener">Study Room – Pigeonhole Principle (OBMEP – in Portuguese)</a></li>
    <li><a href="https://www.researchgate.net/publication/265784589_The_Pigeonhole_Principle_Two_Centuries_Before_Dirichlet" target="_blank" rel="noopener">The pigeonhole principle, two centuries before Dirichlet - Heeffer and Rittaud (2014)</a></li>
  </ul>
</div>

      `,
  category: "Computer Science",
  tags: ["Principle", "Pigeonhole", "Dirichlet"],
  image: "/articles/_pigeonhole.png?height=400&width=800",
  featured: true,
  status: "Published",
  date: "April 21, 2025",
};

export default dirichletDrawerArticle;