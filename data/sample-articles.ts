import type { Article } from "@/lib/types";

const sampleArticles: Article[] = [
  {
    id: 4,
    title: "Chaos Engineering: Building Resilient Systems",
    slug: "chaos-engineering-building-resilient-systems",
    excerpt: "How controlled failure experiments can strengthen your distributed systems",
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

  .article-content h3 {
    margin-top: 1.5rem;
    font-size: 1.2rem;
    color: #ffffff;
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

  .article-content strong {
    color: #ffffff;
  }

  .article-content em {
    color: #a0a0a0;
    font-style: italic;
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
  <h1>Chaos Engineering: Building Resilient Systems Through Controlled Failure</h1>
  
  <p>The planning and execution of controlled failure experiments, known as <strong>Chaos Engineering</strong>, is based on a rigorous discipline to increase confidence in the ability of distributed systems to withstand turbulent conditions in production. Instead of just testing whether something works, this practice assumes that failures will occur and seeks to identify vulnerabilities before they cause real disruptions.</p>
  
  <p>Think of Chaos Engineering as applying a <strong>vaccine</strong> to your system: intentionally injecting a small amount of a harmful agent into a healthy organism to train its defenses and ensure it can combat a real and much more dangerous threat in the future.</p>

  <h2>Fundamental Principles for Planning and Executing Experiments</h2>

  <h3>1. Build a Hypothesis Around the "Steady State"</h3>
  <p>Before introducing any failure, it's necessary to define the normal and healthy behavior of the system, called the <strong>steady state</strong>.</p>
  <ul>
    <li><strong>Measurable Metrics:</strong> Focus should be on output metrics that reflect user experience, such as latency, error rates, or throughput, rather than internal attributes like CPU load.</li>
    <li><strong>Use of SLIs and SLOs:</strong> It's recommended to use Service Level Indicators (SLIs) and Service Level Objectives (SLOs) to establish the baseline and acceptable performance limits.</li>
    <li><strong>The Hypothesis:</strong> The experiment should predict that the steady state will be maintained even after fault injection.</li>
  </ul>

  <h3>2. Simulate Real-World Events</h3>
  <p>Experiments should reflect realistic failures that can occur in the production environment.</p>
  <ul>
    <li><strong>Types of Failures:</strong> Prioritize events based on their estimated frequency or potential impact, such as server crashes, disk failures, network latency, or sudden traffic spikes.</li>
    <li><strong>Variation:</strong> It's essential to vary variables to cover hardware, software, and third-party dependency failures.</li>
  </ul>

  <h3>3. Run Experiments in Production</h3>
  <p>While it's recommended to start in pre-production or staging environments to validate tools, the ultimate goal is to perform tests in <strong>production</strong>.</p>
  <ul>
    <li><strong>Fidelity:</strong> Only the production environment, with real traffic and live dependencies, provides an accurate picture of system resilience.</li>
    <li><strong>Relevance:</strong> Tests in isolated environments may fail to capture specific traffic patterns or security configurations of reality.</li>
  </ul>

  <h3>4. Minimize the Blast Radius</h3>
  <p>Safety is a critical principle to avoid unnecessary damage to users and business.</p>
  <ul>
    <li><strong>Start Small:</strong> The experiment should be designed to affect only a small portion of the system or a limited set of users.</li>
    <li><strong>Rollback Plan:</strong> There must be an immediate reversal mechanism (like a "panic button" or kill switch) that stops the experiment and restores the steady state if something goes wrong.</li>
  </ul>

  <h3>5. Automate and Execute Continuously</h3>
  <p>Since systems constantly change due to new deployments and configuration updates, manual testing is unsustainable.</p>
  <ul>
    <li><strong>CI/CD Pipeline:</strong> Automation allows experiments to be an integral part of the continuous delivery cycle, ensuring new vulnerabilities are detected quickly.</li>
  </ul>

  <h2>Practical Execution Process</h2>
  <p>To apply these principles, teams generally follow this workflow:</p>
  <ol>
    <li><strong>Readiness Assessment:</strong> Review the architecture to identify failure points and critical dependencies.</li>
    <li><strong>Experiment Definition:</strong> Choose the specific failure (e.g., inject 200ms latency) and success metric.</li>
    <li><strong>Game Days:</strong> Dedicated days where development and operations teams gather to execute tests, observe real-time behavior, and learn from results.</li>
    <li><strong>Analysis and Adjustment:</strong> If the hypothesis is refuted, the identified vulnerability must be fixed before repeating the test.</li>
  </ol>

  <h2>Example: Simple Chaos Experiment</h2>
  <p>Here's a basic example of how you might implement a simple chaos experiment using Python:</p>

  <pre><code class="language-python">
import time
import random
import requests
from datetime import datetime

class ChaosExperiment:
    def __init__(self, service_url, steady_state_threshold=200):
        self.service_url = service_url
        self.steady_state_threshold = steady_state_threshold  # ms
        self.baseline_metrics = []
        
    def measure_steady_state(self, duration=60):
        """Measure baseline performance for comparison"""
        print(f"Measuring steady state for {duration} seconds...")
        
        for _ in range(duration):
            start_time = time.time()
            try:
                response = requests.get(self.service_url, timeout=5)
                latency = (time.time() - start_time) * 1000
                self.baseline_metrics.append({
                    'timestamp': datetime.now(),
                    'latency': latency,
                    'status_code': response.status_code
                })
            except Exception as e:
                self.baseline_metrics.append({
                    'timestamp': datetime.now(),
                    'latency': float('inf'),
                    'error': str(e)
                })
            time.sleep(1)
            
        avg_latency = sum(m['latency'] for m in self.baseline_metrics 
                         if m['latency'] != float('inf')) / len(self.baseline_metrics)
        print(f"Baseline average latency: {avg_latency:.2f}ms")
        
    def inject_network_latency(self, delay_ms=200):
        """Simulate network latency injection"""
        print(f"Injecting {delay_ms}ms network latency...")
        # In a real scenario, this would use tools like tc, toxiproxy, or chaos mesh
        # For demonstration, we'll simulate with sleep
        time.sleep(delay_ms / 1000)
        
    def run_experiment(self):
        """Execute the chaos experiment"""
        print("Starting Chaos Engineering Experiment")
        print("Hypothesis: System will maintain < 200ms response time under network stress")
        
        # Step 1: Establish baseline
        self.measure_steady_state(30)
        
        # Step 2: Inject failure
        print("\nInjecting chaos...")
        experiment_metrics = []
        
        for i in range(30):
            start_time = time.time()
            
            # Randomly inject latency to simulate network issues
            if random.random() < 0.3:  # 30% chance of latency
                self.inject_network_latency(150)
                
            try:
                response = requests.get(self.service_url, timeout=5)
                latency = (time.time() - start_time) * 1000
                experiment_metrics.append({
                    'timestamp': datetime.now(),
                    'latency': latency,
                    'status_code': response.status_code
                })
            except Exception as e:
                experiment_metrics.append({
                    'timestamp': datetime.now(),
                    'latency': float('inf'),
                    'error': str(e)
                })
            time.sleep(1)
            
        # Step 3: Analyze results
        self.analyze_results(experiment_metrics)
        
    def analyze_results(self, experiment_metrics):
        """Analyze experiment results against hypothesis"""
        valid_metrics = [m for m in experiment_metrics if m['latency'] != float('inf')]
        
        if not valid_metrics:
            print("❌ HYPOTHESIS REJECTED: System completely failed")
            return
            
        avg_experiment_latency = sum(m['latency'] for m in valid_metrics) / len(valid_metrics)
        max_latency = max(m['latency'] for m in valid_metrics)
        
        print(f"\nExperiment Results:")
        print(f"Average latency during chaos: {avg_experiment_latency:.2f}ms")
        print(f"Maximum latency: {max_latency:.2f}ms")
        print(f"Success rate: {len(valid_metrics)/len(experiment_metrics)*100:.1f}%")
        
        if avg_experiment_latency < self.steady_state_threshold:
            print("✅ HYPOTHESIS CONFIRMED: System maintained performance")
        else:
            print("❌ HYPOTHESIS REJECTED: System degraded beyond acceptable limits")
            print("🔧 Action required: Investigate and improve system resilience")

# Usage example
if __name__ == "__main__":
    experiment = ChaosExperiment("https://httpbin.org/delay/0.1")
    experiment.run_experiment()
  </code></pre>

  <h2>Benefits of Chaos Engineering</h2>
  <ul>
    <li><strong>Proactive Problem Detection:</strong> Identify weaknesses before they impact users</li>
    <li><strong>Increased Confidence:</strong> Build trust in system resilience through empirical evidence</li>
    <li><strong>Improved Incident Response:</strong> Teams become better prepared for real failures</li>
    <li><strong>Documentation of System Behavior:</strong> Better understanding of how systems fail and recover</li>
    <li><strong>Cultural Change:</strong> Promotes a mindset of resilience and continuous improvement</li>
  </ul>

  <h2>Popular Tools</h2>
  <ul>
    <li><strong>Chaos Monkey:</strong> Netflix's original tool for randomly terminating instances</li>
    <li><strong>Litmus:</strong> Cloud-native chaos engineering framework for Kubernetes</li>
    <li><strong>Chaos Mesh:</strong> Chaos engineering platform for Kubernetes environments</li>
    <li><strong>Gremlin:</strong> Commercial chaos engineering platform</li>
    <li><strong>Toxiproxy:</strong> Proxy for simulating network conditions</li>
  </ul>

  <h2>Getting Started</h2>
  <p>If you're new to Chaos Engineering, start with these steps:</p>
  <ol>
    <li>Ensure you have proper monitoring and observability in place</li>
    <li>Start with non-production environments</li>
    <li>Begin with simple experiments (e.g., restart a single service)</li>
    <li>Gradually increase complexity and scope</li>
    <li>Always have rollback mechanisms ready</li>
    <li>Document everything and share learnings with your team</li>
  </ol>

  <p>Remember: Chaos Engineering is not about breaking things randomly. It's about learning how your system behaves under stress and building confidence in its resilience through scientific experimentation.</p>

  <h2>Further Reading</h2>
  <ul>
    <li><a href="https://principlesofchaos.org/" target="_blank" rel="noopener">Principles of Chaos Engineering</a></li>
    <li><a href="https://www.oreilly.com/library/view/chaos-engineering/9781491988459/" target="_blank" rel="noopener">Chaos Engineering by Casey Rosenthal and Nora Jones</a></li>
    <li><a href="https://netflix.github.io/chaosmonkey/" target="_blank" rel="noopener">Netflix Chaos Monkey</a></li>
  </ul>
  </div>
      `,
    category: "DevOps",
    tags: ["Chaos Engineering", "Resilience", "Testing", "Production"],
    image: "/articles/chaosMonkey.png",
    featured: true,
    status: "Published",
    date: "January 06, 2026",
  },
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
  },
  {
    id: 3,
    title: "Memoryless Property",
    slug: "memoria",
    excerpt: "How Math can encourage you not to give up",
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
    <h1>Understanding the Memoryless Property</h1> 
    <p> The <strong>memoryless property</strong> is a curious and powerful characteristic of some probability distributions. It states that, for certain random events, what has already happened in the past does not influence what will happen in the future. </p> 
    <p> This property is found only in two probability distributions: </p> 
    <ul> 
        <li><strong>Geometric</strong> (in <em>discrete</em> contexts)</li> 
        <li><strong>Exponential</strong> (in <em>continuous</em> contexts)</li> 
    </ul> 
    <p> And what this means in practice? </p> 
    <h2>Geometric Distribution: Trials Until Success</h2> 
    <p> Imagine you are flipping a biased coin, which has a 20% chance of landing heads (success). You repeat the experiment until you get the first head. The variable that counts how many trials were made follows a <strong>geometric distribution</strong>. </p> 
    <p> The memoryless property says that: </p> 
    <pre><code>Pr(X > k + n | X > k) = Pr(X > n)</code></pre> 
    <p> In other words: if you have already tried <code>k</code> times without success, the chance of needing <code>n</code> more trials is the same as it was at the start — as if the previous <code>k</code> failures never happened. </p> 
    <p><em>Intuition:</em> The system does not "learn" from the mistakes. The past is ignored. Every new trial is a new independent chance.</p> 
    <h2>Exponential Distribution: Time Until the Next Event</h2> 
    <p> Now imagine a system where failures occur randomly over time — like a server breakdown or customers arriving at a checkout. The time between events follows an <strong>exponential distribution</strong>. </p> 
    <p> The memoryless property here is: </p> 
    <pre><code>Pr(X > s + t | X > t) = Pr(X > s)</code></pre> 
    <p> This means that if you have already waited <code>t</code> minutes for an event, the probability of it taking <code>s</code> more minutes is the same as waiting <code>s</code> minutes from the beginning. The "clock" is always reset. </p> 
    <h2>In short</h2> 
    <ul> 
        <li><strong>Geometric Distribution:</strong> Number of trials until the first success. The memory of the past does not affect the next chances.</li> 
        <li><strong>Exponential Distribution:</strong> Time until the next event. The time that has already passed does not affect the expected time.</li> 
    </ul> 
    <h2>Real-World Applications</h2> 
    <ul> 
        <li><strong>Geometric Distribution:</strong> Number of attempts until establishing a network connection in unstable or congested systems.</li> 
        <li><strong>Exponential Distribution:</strong> Time between failures of electronic components or servers in systems operating continuously.</li> 
    </ul> 
    <h2>Comparing with "Memory" Distributions</h2> 
    <p> Not all distributions ignore the past. Distributions such as the <strong>binomial</strong> or <strong>normal</strong> take into account the process's history: </p> 
    <ul> 
        <li><strong>Binomial:</strong> The chance of success depends on the total number of trials and previous successes. Each experiment is linked to a "past".</li> 
        <li><strong>Normal:</strong> Models continuous variables where averages, deviations, and previous values directly influence future predictions.</li> 
    </ul> 
    <p> This differentiates the geometric and exponential distributions as useful tools when the past doesn't matter — for example, in queue systems, computer networks, or independent probabilistic tests. </p> 
    <h2>Python Example: Simulating Geometric Distribution</h2> 
    <pre><code class="language-python"> 
        import random 
        def attempts_until_success(p): 
            attempts = 0 
            while True: 
                attempts += 1 
                if random.random() < p: 
                    return attempts 
        # Simulating 10 rounds with 20% chance of success 
        for i in range(10): 
            print(f"Round {i+1}: success on attempt</br>                  {attempts_until_success(0.2)}") 
    </code></pre> 
    <h2>Key Phrase</h2> 
    <p><strong>Forget the mistakes of the past, focus on what is yet to come.</strong> This is the essence of the memoryless property: nothing that has already happened changes what can still happen.</p> 
    <h2>Additional Source</h2> 
    <ul> 
        <li><a href="https://www.sciencedirect.com/topics/mathematics/memoryless-property" target="_blank">Memoryless Property</a></li> 
    </ul> 
</div>


      `,
    category: "Math",
    tags: ["Memoryless", "Geometric Distribution"],
    image: "/articles/memoryless.png?height=400&width=800",
    featured: true,
    status: "Published",
    date: "April 30, 2025",
  },
];

export default sampleArticles;
