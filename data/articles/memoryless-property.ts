import type { Article } from "@/lib/types";

const memorylessPropertyArticle: Article = {
  id: 3,
  title: "Memoryless Property",
  slug: "memoria",
  excerpt: "How Math can encourage you not to give up",
  content: `
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
};

export default memorylessPropertyArticle;