import type { Article } from "@/lib/types";

const doraMetricsArticle: Article = {
  id: 1738900000000,
  title: "DORA Metrics: Measuring DevOps Performance and Team Excellence",
  slug: "dora-metrics-devops-performance",
  excerpt: "Learn how to measure and improve your team's software delivery performance using the four key DORA metrics",
  content: `
    <div class="article-content">
      <h1>DORA Metrics: Measuring DevOps Performance and Team Excellence</h1>
      
      <p>In the world of software development, measuring team performance and delivery efficiency is crucial for continuous improvement. <strong>DORA Metrics</strong> (DevOps Research and Assessment) provide a scientific, data-driven approach to understanding how well your team delivers software and responds to issues in production.</p>

      <p>Developed by the DORA research program (now part of Google Cloud), these metrics are based on six years of research and data from over 32,000 professionals worldwide. They represent the most reliable indicators of software delivery performance and organizational success.</p>

      <h2>Why DORA Metrics Matter</h2>

      <p>DORA metrics matter because they directly correlate with:</p>
      <ul>
        <li><strong>Business Performance:</strong> Organizations with elite DORA metrics are twice as likely to exceed profitability, market share, and productivity goals</li>
        <li><strong>Employee Satisfaction:</strong> High-performing teams report better work-life balance and lower burnout rates</li>
        <li><strong>Customer Satisfaction:</strong> Faster delivery and fewer failures lead to happier customers</li>
        <li><strong>Competitive Advantage:</strong> Elite performers can respond to market changes 2,604 times faster than low performers</li>
      </ul>

      <h2>The Four Key DORA Metrics</h2>

      <p>DORA identified four key metrics that measure both <strong>velocity</strong> (speed of delivery) and <strong>stability</strong> (quality and reliability):</p>

      <h3>1. Deployment Frequency (DF)</h3>

      <p><strong>Definition:</strong> How often your organization successfully releases code to production.</p>

      <p><strong>Why it matters:</strong> Deployment frequency indicates your team's ability to deliver value to customers quickly. More frequent deployments mean faster feedback loops, reduced risk per deployment, and better ability to respond to market changes.</p>

      <h4>Performance Levels:</h4>
      <ul>
        <li><strong>Elite:</strong> On-demand (multiple deploys per day)</li>
        <li><strong>High:</strong> Between once per day and once per week</li>
        <li><strong>Medium:</strong> Between once per week and once per month</li>
        <li><strong>Low:</strong> Between once per month and once every six months</li>
      </ul>

      <h4>How to Measure:</h4>
      <pre><code class="language-sql">-- Example: Query deployment frequency from CI/CD logs
SELECT 
    DATE(deployment_timestamp) AS deployment_date,
    COUNT(*) AS deployments_per_day,
    AVG(COUNT(*)) OVER (ORDER BY DATE(deployment_timestamp) 
        ROWS BETWEEN 29 PRECEDING AND CURRENT ROW) AS rolling_30day_avg
FROM deployments
WHERE environment = 'production'
    AND status = 'success'
    AND deployment_timestamp >= DATE_SUB(CURRENT_DATE(), INTERVAL 90 DAY)
GROUP BY DATE(deployment_timestamp)
ORDER BY deployment_date DESC;</code></pre>

      <h4>Practical Example:</h4>
      <pre><code class="language-csharp">// C# example: Tracking deployments with Application Insights
public class DeploymentTracker
{
    private readonly TelemetryClient _telemetry;

    public async Task TrackDeploymentAsync(string version, string environment)
    {
        var properties = new Dictionary<string, string>
        {
            { "Version", version },
            { "Environment", environment },
            { "DeployedBy", Environment.UserName },
            { "Timestamp", DateTime.UtcNow.ToString("o") }
        };

        var metrics = new Dictionary<string, double>
        {
            { "DeploymentCount", 1 }
        };

        _telemetry.TrackEvent("Deployment", properties, metrics);
        await _telemetry.FlushAsync();
    }
}

// Usage in deployment pipeline
var tracker = new DeploymentTracker(telemetryClient);
await tracker.TrackDeploymentAsync("v2.5.1", "production");</code></pre>

      <h4>How to Improve:</h4>
      <ul>
        <li>Implement CI/CD pipelines with automated testing</li>
        <li>Adopt trunk-based development or short-lived feature branches</li>
        <li>Automate deployment processes</li>
        <li>Reduce batch sizes (deploy smaller changes more frequently)</li>
        <li>Use feature flags to decouple deployment from release</li>
      </ul>

      <h3>2. Lead Time for Changes (LT)</h3>

      <p><strong>Definition:</strong> The time it takes for a commit to get into production.</p>

      <p><strong>Why it matters:</strong> Lead time measures your team's efficiency in delivering value. Shorter lead times mean faster feedback, quicker time-to-market, and better ability to experiment and iterate.</p>

      <h4>Performance Levels:</h4>
      <ul>
        <li><strong>Elite:</strong> Less than one hour</li>
        <li><strong>High:</strong> Between one day and one week</li>
        <li><strong>Medium:</strong> Between one week and one month</li>
        <li><strong>Low:</strong> Between one month and six months</li>
      </ul>

      <h4>How to Measure:</h4>
      <pre><code class="language-python"># Python example: Calculate lead time from Git and deployment data
from datetime import datetime
import pandas as pd

def calculate_lead_time(commits_df, deployments_df):
    """
    Calculate lead time for each deployment
    
    commits_df: DataFrame with columns [commit_hash, commit_timestamp]
    deployments_df: DataFrame with columns [deployment_id, commit_hash, deployment_timestamp]
    """
    # Merge commits with deployments
    merged = deployments_df.merge(commits_df, on='commit_hash')
    
    # Calculate lead time in hours
    merged['lead_time_hours'] = (
        merged['deployment_timestamp'] - merged['commit_timestamp']
    ).dt.total_seconds() / 3600
    
    # Calculate statistics
    stats = {
        'mean_lead_time': merged['lead_time_hours'].mean(),
        'median_lead_time': merged['lead_time_hours'].median(),
        'p95_lead_time': merged['lead_time_hours'].quantile(0.95),
        'min_lead_time': merged['lead_time_hours'].min(),
        'max_lead_time': merged['lead_time_hours'].max()
    }
    
    return stats

# Example usage
commits = pd.DataFrame({
    'commit_hash': ['abc123', 'def456', 'ghi789'],
    'commit_timestamp': pd.to_datetime([
        '2024-02-01 10:00:00',
        '2024-02-01 14:30:00',
        '2024-02-02 09:15:00'
    ])
})

deployments = pd.DataFrame({
    'deployment_id': [1, 2, 3],
    'commit_hash': ['abc123', 'def456', 'ghi789'],
    'deployment_timestamp': pd.to_datetime([
        '2024-02-01 15:00:00',
        '2024-02-02 10:00:00',
        '2024-02-02 16:30:00'
    ])
})

lead_time_stats = calculate_lead_time(commits, deployments)
print(f"Average Lead Time: {lead_time_stats['mean_lead_time']:.2f} hours")</code></pre>

      <h4>Real-World Example:</h4>
      <p>A typical journey for a code change:</p>
      <ol>
        <li><strong>Commit:</strong> Developer commits code at 9:00 AM</li>
        <li><strong>CI Build:</strong> Automated tests run (15 minutes)</li>
        <li><strong>Code Review:</strong> PR reviewed and approved (2 hours)</li>
        <li><strong>Merge:</strong> Code merged to main branch (immediate)</li>
        <li><strong>CD Pipeline:</strong> Automated deployment to staging (10 minutes)</li>
        <li><strong>Testing:</strong> Automated integration tests (20 minutes)</li>
        <li><strong>Production Deploy:</strong> Automated deployment to production (10 minutes)</li>
        <li><strong>Total Lead Time:</strong> ~3 hours</li>
      </ol>

      <h4>How to Improve:</h4>
      <ul>
        <li>Automate testing and deployment processes</li>
        <li>Reduce code review time with smaller PRs</li>
        <li>Implement continuous deployment (not just continuous integration)</li>
        <li>Remove manual approval gates where possible</li>
        <li>Optimize build and test execution times</li>
        <li>Use parallel testing strategies</li>
      </ul>

      <h3>3. Change Failure Rate (CFR)</h3>

      <p><strong>Definition:</strong> The percentage of deployments that cause a failure in production requiring immediate remedy (hotfix, rollback, fix forward, patch).</p>

      <p><strong>Why it matters:</strong> CFR measures the quality and stability of your releases. A lower failure rate indicates better testing practices, more reliable processes, and higher confidence in deployments.</p>

      <h4>Performance Levels:</h4>
      <ul>
        <li><strong>Elite:</strong> 0-15%</li>
        <li><strong>High:</strong> 16-30%</li>
        <li><strong>Medium:</strong> 31-45%</li>
        <li><strong>Low:</strong> 46-60%</li>
      </ul>

      <h4>How to Measure:</h4>
      <pre><code class="language-javascript">// JavaScript/Node.js example: Calculate change failure rate
class ChangeFailureRateCalculator {
    constructor(deployments, incidents) {
        this.deployments = deployments;
        this.incidents = incidents;
    }

    calculateCFR(startDate, endDate) {
        // Filter deployments in date range
        const deploymentsInRange = this.deployments.filter(d => 
            d.timestamp >= startDate && d.timestamp <= endDate
        );

        // Find incidents caused by deployments
        const failedDeployments = new Set();
        
        this.incidents.forEach(incident => {
            // Find deployment that caused this incident
            const causingDeployment = deploymentsInRange.find(d => 
                d.timestamp <= incident.timestamp &&
                incident.timestamp - d.timestamp <= 24 * 60 * 60 * 1000 && // Within 24h
                incident.rootCause === 'deployment'
            );
            
            if (causingDeployment) {
                failedDeployments.add(causingDeployment.id);
            }
        });

        const totalDeployments = deploymentsInRange.length;
        const failedCount = failedDeployments.size;
        const cfr = (failedCount / totalDeployments) * 100;

        return {
            totalDeployments,
            failedDeployments: failedCount,
            changeFailureRate: cfr.toFixed(2),
            performanceLevel: this.getPerformanceLevel(cfr)
        };
    }

    getPerformanceLevel(cfr) {
        if (cfr <= 15) return 'Elite';
        if (cfr <= 30) return 'High';
        if (cfr <= 45) return 'Medium';
        return 'Low';
    }
}

// Example usage
const deployments = [
    { id: 1, timestamp: new Date('2024-02-01T10:00:00Z') },
    { id: 2, timestamp: new Date('2024-02-02T14:00:00Z') },
    { id: 3, timestamp: new Date('2024-02-03T09:00:00Z') },
    { id: 4, timestamp: new Date('2024-02-04T11:00:00Z') },
    { id: 5, timestamp: new Date('2024-02-05T15:00:00Z') }
];

const incidents = [
    { 
        id: 1, 
        timestamp: new Date('2024-02-02T15:30:00Z'),
        rootCause: 'deployment'
    }
];

const calculator = new ChangeFailureRateCalculator(deployments, incidents);
const result = calculator.calculateCFR(
    new Date('2024-02-01'),
    new Date('2024-02-28')
);

console.log(\`Change Failure Rate: \${result.changeFailureRate}%\`);
console.log(\`Performance Level: \${result.performanceLevel}\`);</code></pre>

      <h4>What Counts as a Failure?</h4>
      <ul>
        <li>Production incidents requiring immediate action</li>
        <li>Rollbacks to previous versions</li>
        <li>Hotfixes deployed outside normal process</li>
        <li>Service degradation or outages</li>
        <li>Critical bugs affecting users</li>
      </ul>

      <h4>What Doesn't Count:</h4>
      <ul>
        <li>Minor bugs fixed in next regular deployment</li>
        <li>Issues caught in staging/testing</li>
        <li>Planned maintenance</li>
        <li>Configuration changes</li>
      </ul>

      <h4>How to Improve:</h4>
      <ul>
        <li>Implement comprehensive automated testing (unit, integration, E2E)</li>
        <li>Use feature flags for gradual rollouts</li>
        <li>Implement canary deployments or blue-green deployments</li>
        <li>Conduct thorough code reviews</li>
        <li>Use static code analysis and linting</li>
        <li>Implement chaos engineering practices</li>
        <li>Conduct post-incident reviews and learn from failures</li>
      </ul>

      <h3>4. Time to Restore Service (MTTR)</h3>

      <p><strong>Definition:</strong> How long it takes to restore service when a service incident or defect that impacts users occurs.</p>

      <p><strong>Why it matters:</strong> MTTR measures your team's ability to respond to and recover from failures. Faster recovery times mean less downtime, reduced customer impact, and better overall reliability.</p>

      <h4>Performance Levels:</h4>
      <ul>
        <li><strong>Elite:</strong> Less than one hour</li>
        <li><strong>High:</strong> Less than one day</li>
        <li><strong>Medium:</strong> Between one day and one week</li>
        <li><strong>Low:</strong> More than one week</li>
      </ul>

      <h4>How to Measure:</h4>
      <pre><code class="language-go">// Go example: Calculate MTTR from incident data
package main

import (
    "fmt"
    "time"
)

type Incident struct {
    ID          string
    DetectedAt  time.Time
    ResolvedAt  time.Time
    Severity    string
}

type MTTRCalculator struct {
    incidents []Incident
}

func (m *MTTRCalculator) CalculateMTTR(startDate, endDate time.Time) map[string]interface{} {
    var totalDuration time.Duration
    var count int
    var durations []time.Duration

    for _, incident := range m.incidents {
        if incident.DetectedAt.After(startDate) && incident.DetectedAt.Before(endDate) {
            duration := incident.ResolvedAt.Sub(incident.DetectedAt)
            durations = append(durations, duration)
            totalDuration += duration
            count++
        }
    }

    if count == 0 {
        return map[string]interface{}{
            "mttr_hours": 0,
            "incident_count": 0,
        }
    }

    meanMTTR := totalDuration / time.Duration(count)
    
    // Calculate median
    sort.Slice(durations, func(i, j int) bool {
        return durations[i] < durations[j]
    })
    
    var medianMTTR time.Duration
    if count%2 == 0 {
        medianMTTR = (durations[count/2-1] + durations[count/2]) / 2
    } else {
        medianMTTR = durations[count/2]
    }

    return map[string]interface{}{
        "mttr_hours":        meanMTTR.Hours(),
        "median_mttr_hours": medianMTTR.Hours(),
        "incident_count":    count,
        "performance_level": getPerformanceLevel(meanMTTR.Hours()),
    }
}

func getPerformanceLevel(hours float64) string {
    if hours < 1 {
        return "Elite"
    } else if hours < 24 {
        return "High"
    } else if hours < 168 { // 1 week
        return "Medium"
    }
    return "Low"
}

// Example usage
func main() {
    incidents := []Incident{
        {
            ID:         "INC-001",
            DetectedAt: time.Date(2024, 2, 1, 10, 0, 0, 0, time.UTC),
            ResolvedAt: time.Date(2024, 2, 1, 10, 45, 0, 0, time.UTC),
            Severity:   "High",
        },
        {
            ID:         "INC-002",
            DetectedAt: time.Date(2024, 2, 5, 14, 0, 0, 0, time.UTC),
            ResolvedAt: time.Date(2024, 2, 5, 16, 30, 0, 0, time.UTC),
            Severity:   "Critical",
        },
    }

    calculator := &MTTRCalculator{incidents: incidents}
    result := calculator.CalculateMTTR(
        time.Date(2024, 2, 1, 0, 0, 0, 0, time.UTC),
        time.Date(2024, 2, 28, 23, 59, 59, 0, time.UTC),
    )

    fmt.Printf("MTTR: %.2f hours\\n", result["mttr_hours"])
    fmt.Printf("Performance Level: %s\\n", result["performance_level"])
}</code></pre>

      <h4>Real-World Recovery Scenario:</h4>
      <ol>
        <li><strong>Detection (T+0):</strong> Monitoring alerts fire, incident detected</li>
        <li><strong>Response (T+5min):</strong> On-call engineer acknowledges alert</li>
        <li><strong>Diagnosis (T+15min):</strong> Root cause identified (bad deployment)</li>
        <li><strong>Decision (T+20min):</strong> Team decides to rollback</li>
        <li><strong>Rollback (T+25min):</strong> Automated rollback executed</li>
        <li><strong>Verification (T+30min):</strong> Service health confirmed</li>
        <li><strong>Resolution (T+35min):</strong> Incident closed</li>
        <li><strong>Total MTTR:</strong> 35 minutes (Elite performance)</li>
      </ol>

      <h4>How to Improve:</h4>
      <ul>
        <li>Implement comprehensive monitoring and alerting</li>
        <li>Create runbooks and incident response procedures</li>
        <li>Practice incident response with game days</li>
        <li>Implement automated rollback capabilities</li>
        <li>Use feature flags to quickly disable problematic features</li>
        <li>Maintain good observability (logs, metrics, traces)</li>
        <li>Establish clear on-call rotations and escalation paths</li>
        <li>Conduct blameless post-mortems</li>
      </ul>

      <h2>Implementing DORA Metrics in Your Organization</h2>

      <h3>Step 1: Establish Baseline Measurements</h3>
      <pre><code class="language-yaml"># Example: GitHub Actions workflow to track DORA metrics
name: Track DORA Metrics

on:
  deployment_status:
  push:
    branches: [main]

jobs:
  track-metrics:
    runs-on: ubuntu-latest
    steps:
      - name: Track Deployment
        if: github.event.deployment_status.state == 'success'
        run: |
          curl -X POST https://your-metrics-api.com/deployments
            -H "Content-Type: application/json"
            -d '{
              "deployment_id": "${{{{ github.event.deployment.id }}}}",
              "environment": "${{{{ github.event.deployment.environment }}}}",
              "commit_sha": "${{{{ github.sha }}}}",
              "timestamp": "${{{{ github.event.deployment_status.created_at }}}}"
            }'

      - name: Calculate Lead Time
        run: |
          COMMIT_TIME=$(git show -s --format=%ci ${{{{ github.sha }}}})
          DEPLOY_TIME=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
          curl -X POST https://your-metrics-api.com/lead-time
            -H "Content-Type: application/json"
            -d "{
              \"commit_sha\": \"${{{{ github.sha }}}}\",
              \"commit_time\": \"$COMMIT_TIME\",
              \"deploy_time\": \"$DEPLOY_TIME\"
            }"</code></pre>

      <h3>Step 2: Create Dashboards</h3>
      <p>Build dashboards to visualize your metrics over time. Key visualizations include:</p>
      <ul>
        <li>Deployment frequency trend (deployments per day/week)</li>
        <li>Lead time distribution (histogram)</li>
        <li>Change failure rate over time (percentage)</li>
        <li>MTTR trend (hours/minutes)</li>
        <li>Comparison against industry benchmarks</li>
      </ul>

      <h3>Step 3: Set Goals and Track Progress</h3>
      <pre><code class="language-markdown">## Q1 2024 DORA Metrics Goals

### Current State (Baseline)
- Deployment Frequency: 2x per week (Medium)
- Lead Time: 3 days (Medium)
- Change Failure Rate: 25% (High)
- MTTR: 4 hours (High)

### Q1 Goals
- Deployment Frequency: 1x per day (High)
- Lead Time: 1 day (High)
- Change Failure Rate: 20% (High)
- MTTR: 2 hours (High)

### Actions
1. Implement automated deployment pipeline
2. Add comprehensive test coverage
3. Create incident response runbooks
4. Establish monitoring and alerting</code></pre>

      <h2>Common Pitfalls and How to Avoid Them</h2>

      <h3>1. Gaming the Metrics</h3>
      <p><strong>Problem:</strong> Teams deploy trivial changes to inflate deployment frequency.</p>
      <p><strong>Solution:</strong> Focus on delivering value, not just hitting numbers. Track meaningful changes that impact users.</p>

      <h3>2. Ignoring Context</h3>
      <p><strong>Problem:</strong> Comparing metrics across different types of systems (e.g., mobile apps vs. web services).</p>
      <p><strong>Solution:</strong> Benchmark against similar systems and focus on your own improvement trends.</p>

      <h3>3. Sacrificing Quality for Speed</h3>
      <p><strong>Problem:</strong> Increasing deployment frequency at the cost of higher change failure rate.</p>
      <p><strong>Solution:</strong> Balance velocity and stability metrics. Elite performers excel at both.</p>

      <h3>4. Not Acting on Data</h3>
      <p><strong>Problem:</strong> Collecting metrics but not using them to drive improvements.</p>
      <p><strong>Solution:</strong> Regularly review metrics in team retrospectives and create action plans.</p>

      <h2>Tools for Measuring DORA Metrics</h2>

      <h3>Commercial Solutions</h3>
      <ul>
        <li><strong>Sleuth:</strong> Automated DORA metrics tracking</li>
        <li><strong>LinearB:</strong> Engineering metrics platform</li>
        <li><strong>Jellyfish:</strong> Engineering management platform</li>
        <li><strong>Haystack:</strong> Engineering analytics</li>
      </ul>

      <h3>Open Source / DIY</h3>
      <ul>
        <li><strong>Four Keys:</strong> Google's open-source DORA metrics implementation</li>
        <li><strong>Grafana + Prometheus:</strong> Custom dashboards</li>
        <li><strong>ELK Stack:</strong> Log-based metrics</li>
        <li><strong>Custom scripts:</strong> Extract from Git, CI/CD, and incident management tools</li>
      </ul>

      <h3>Integration Points</h3>
      <ul>
        <li><strong>Version Control:</strong> GitHub, GitLab, Bitbucket</li>
        <li><strong>CI/CD:</strong> Jenkins, GitHub Actions, GitLab CI, CircleCI</li>
        <li><strong>Incident Management:</strong> PagerDuty, Opsgenie, VictorOps</li>
        <li><strong>Monitoring:</strong> Datadog, New Relic, Application Insights</li>
      </ul>

      <h2>Real-World Success Stories</h2>

      <h3>Case Study 1: E-Commerce Platform</h3>
      <p><strong>Before:</strong></p>
      <ul>
        <li>Deployment Frequency: Once per month</li>
        <li>Lead Time: 2 weeks</li>
        <li>Change Failure Rate: 40%</li>
        <li>MTTR: 8 hours</li>
      </ul>

      <p><strong>Actions Taken:</strong></p>
      <ul>
        <li>Implemented CI/CD pipeline with automated testing</li>
        <li>Adopted trunk-based development</li>
        <li>Introduced feature flags</li>
        <li>Created automated rollback procedures</li>
      </ul>

      <p><strong>After (6 months):</strong></p>
      <ul>
        <li>Deployment Frequency: Multiple times per day</li>
        <li>Lead Time: 4 hours</li>
        <li>Change Failure Rate: 12%</li>
        <li>MTTR: 45 minutes</li>
      </ul>

      <p><strong>Business Impact:</strong> 30% faster time-to-market, 50% reduction in production incidents, improved team morale.</p>

      <h2>Best Practices for DORA Metrics</h2>

      <ol>
        <li><strong>Start Simple:</strong> Begin with manual tracking if needed, automate later</li>
        <li><strong>Be Consistent:</strong> Use the same definitions and measurement methods over time</li>
        <li><strong>Focus on Trends:</strong> Look at improvement over time, not absolute numbers</li>
        <li><strong>Balance All Four:</strong> Don't optimize one metric at the expense of others</li>
        <li><strong>Make it Visible:</strong> Display metrics prominently for the team</li>
        <li><strong>Review Regularly:</strong> Discuss metrics in retrospectives and planning</li>
        <li><strong>Celebrate Improvements:</strong> Recognize progress and wins</li>
        <li><strong>Learn from Setbacks:</strong> Use regressions as learning opportunities</li>
      </ol>

      <h2>Conclusion</h2>

      <p>DORA Metrics provide a powerful framework for measuring and improving software delivery performance. By tracking these four key metrics—Deployment Frequency, Lead Time for Changes, Change Failure Rate, and Time to Restore Service—teams can identify bottlenecks, drive improvements, and ultimately deliver better software faster.</p>

      <p>Remember that the goal isn't to achieve "Elite" status overnight, but to continuously improve. Start measuring where you are today, set realistic goals, and work systematically to enhance your processes. The journey to high performance is iterative, and every improvement counts.</p>

      <p>Elite performers aren't born—they're built through consistent measurement, learning, and improvement. Start your DORA metrics journey today and join the ranks of high-performing software delivery teams.</p>

      <h2>Further Reading and Resources</h2>

      <ul>
        <li><a href="https://dora.dev/" target="_blank" rel="noopener">DORA Official Website</a></li>
        <li><a href="https://cloud.google.com/blog/products/devops-sre/announcing-dora-2021-accelerate-state-of-devops-report" target="_blank" rel="noopener">State of DevOps Report</a></li>
        <li><a href="https://github.com/GoogleCloudPlatform/fourkeys" target="_blank" rel="noopener">Four Keys - Google's Open Source Implementation</a></li>
        <li><a href="https://www.amazon.com/Accelerate-Software-Performing-Technology-Organizations/dp/1942788339" target="_blank" rel="noopener">Accelerate: The Science of Lean Software and DevOps (Book)</a></li>
      </ul>
    </div>
  `,
  category: "DevOps",
  tags: ["DORA Metrics", "DevOps", "Performance", "CI/CD", "Metrics", "Software Delivery"],
  image: "/projetos/dora-metrics.png",
  featured: true,
  status: "Published",
  date: "February 18, 2026",
};

export default doraMetricsArticle;