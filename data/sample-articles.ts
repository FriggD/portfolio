import type { Article } from "@/lib/types";

const sampleArticles: Article[] = [
  {
    id: 1,
    title: "Randomized Algorithms",
    slug: "randomized-algorithms",
    excerpt: "How algorithm randomization can be a powerful ally",
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
  <h1>Have You Heard About "Randomized Algorithms"?</h1>
  
  <p>Have you ever wondered how security systems manage to be unpredictable, or how certain games generate different challenges every time? Many of these answers lie in randomized algorithms.</p>
  
  <p>In general terms, randomized algorithms are algorithms that incorporate an element of randomness as part of their logic. Instead of following a strict set of deterministic steps (algorithms that always produce the same results for the same inputs), they make random choices during their execution to decide the next step. This is typically implemented using a random number generator.</p>

  <h2>Why Use Randomized Algorithms?</h2>
  <p>Randomized algorithms serve several important purposes:</p>
  <ul>
    <li><strong>Symmetry Breaking:</strong> Randomness can be useful to prevent different parts of a system from making the same decisions simultaneously, such as in network protocols.</li>
    <li><strong>Efficiency:</strong> In many applications, randomized algorithms can be significantly more efficient in terms of execution time or memory usage than the best known deterministic algorithms for the same problem. They also tend to be simpler to design and program. An example is the randomized Quicksort algorithm, which randomly chooses pivots and has an efficient expected runtime.</li>
    <li><strong>Solution Approximation:</strong> Some randomized algorithms, known as Monte Carlo algorithms, are used to obtain approximations of solutions to complex problems through random sampling. These algorithms may have a small probability of returning an incorrect answer. If the error probability is low enough, the improvement in efficiency may be worth it.</li>
    <li><strong>Equality Verification:</strong> Randomized algorithms can verify algebraic or matrix equalities faster than known deterministic methods.</li>
    <li><strong>Finding Graph Structures:</strong> For example, randomized algorithms can be used to find a minimum cut set in a graph.</li>
    <li><strong>Probabilistic Construction:</strong> The probabilistic method uses randomness arguments to prove the existence of certain combinatorial objects, and these proofs can sometimes be converted into efficient randomized algorithms to construct these objects.</li>
    <li><strong>Probabilistic Testing:</strong> In areas like cryptography, randomized algorithms are used for probabilistic testing, such as primality tests.</li>
  </ul>

  <p>It's important to note that some randomized algorithms, called <em>Las Vegas</em> algorithms, always return the correct answer, but their execution time is a random variable. Others, the <em>Monte Carlo</em> algorithms, may return an incorrect answer with a certain probability.</p>

  <h2>Example: Randomized Quicksort</h2>
  <p>Here's an example of Randomized Quicksort. Analyzing the expected number of comparisons between elements during sorting, we find that the total number of comparisons depends on:</p>
  <ul>
    <li>How balanced these divisions are;</li>
    <li>How many times each element is compared with others throughout recursive calls.</li>
  </ul>

  <pre><code class="language-python">
import random

def randomized_quicksort(arr):
    if len(arr) <= 1:
        return arr

    # Choose a pivot randomly
    pivot_index = random.randint(0, len(arr) - 1)
    pivot = arr[pivot_index]

    # Divide the list into three parts
    less = [x for x in arr if x < pivot]
    equal = [x for x in arr if x == pivot]
    greater = [x for x in arr if x > pivot]

    # Recursion
    return randomized_quicksort(less) + equal + randomized_quicksort(greater)

# Usage example
if __name__ == "__main__":
    array = [9, 3, 7, 1, 4, 2, 8, 5, 6]
    print("Original array:", array)
    sorted_array = randomized_quicksort(array)
    print("Sorted array:", sorted_array)
  </code></pre>

  <h2>Complexity</h2>
  <p>Regarding Quicksort's time complexity, the expected time complexity of randomized Quicksort for sorting a list of <em>n</em> distinct numbers is <code>O(n log n)</code>. This means that, on average, the number of comparisons performed by the algorithm grows proportionally to <em>n</em> multiplied by the logarithm of <em>n</em>.</p>

  <p>In the worst case, which is quite unlikely to happen in the randomized version, Quicksort can have a time complexity of <code>O(n^2)</code>. This occurs, for example, if the chosen pivot is repeatedly one of the smallest or largest elements in the list. Although there exists a relatively complex deterministic algorithm that finds the median in <code>O(n)</code> time, randomized Quicksort is a simpler alternative with a smaller constant factor in linear execution time.</p>

  <h2>When to Use It?</h2>
  <p>It's interesting to consider using Randomized Quicksort when:</p>
  <ul>
    <li>You want reliable average performance, even with difficult inputs.</li>
    <li>The input is highly varied or unpredictable.</li>
    <li>Practical performance matters more than stability.</li>
    <li>You're in a system where space is important (due to being in-place).</li>
  </ul>

  <p>Some precautions need to be taken, such as avoiding predictable pseudo-randomness if security is a factor, or repeated calls to <code>random.randint()</code>, which add a small overhead, although usually insignificant. It's also important to remember that the algorithm is not stable.</p>

   <h2>To Learn More:</h2>
<ul>
    <li>Probability and Computing by Michael Mitzenmacher.</li>
<ul>
  </div>
      `,
    category: "Computer Science",
    tags: ["Algorithms", "Random"],
    image: "/articles/dados.jpg?height=400&width=800",
    featured: true,
    status: "Published",
    date: "April 16, 2025",
  },
  {
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
  }
];

export default sampleArticles;