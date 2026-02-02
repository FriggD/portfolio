import type { Article } from "@/lib/types";

const dockerDatabaseAccessArticle: Article = {
  id: 8,
  title: "Database Access via Docker CLI: Complete Guide",
  slug: "database-access-docker-cli-guide",
  excerpt: "Master database management directly from the command line without heavy GUI tools",
  content: `
    <div class="article-content">
  <h1>Database Access via Docker CLI: Complete Guide</h1>

  <p>Managing databases through Docker containers is a common practice in modern development. While graphical tools like DBeaver and pgAdmin are powerful, knowing how to access and manage databases directly via command line is an essential skill for any developer. This guide shows you how to efficiently work with databases using Docker CLI.</p>

  <h2>Why Use Command Line?</h2>

  <ul>
    <li><strong>Speed:</strong> Instant access without opening heavy applications</li>
    <li><strong>Lightweight:</strong> Doesn't consume extra resources</li>
    <li><strong>Practical:</strong> Ideal for quick checks and debugging</li>
    <li><strong>Professional:</strong> Essential for production environments</li>
    <li><strong>Learning:</strong> Master pure SQL and native commands</li>
    <li><strong>Automation:</strong> Easy to script and integrate into CI/CD pipelines</li>
  </ul>

  <h2>PostgreSQL</h2>

  <h3>Connecting to the Database</h3>

  <pre><code class="language-bash">
# Basic syntax
docker exec -it &lt;container_name&gt; psql -U &lt;username&gt; -d &lt;database&gt;

# Example
docker exec -it postgres psql -U monitor -d monitordb
  </code></pre>

  <h3>Essential psql Commands</h3>

  <h4>Listing and Navigation</h4>

  <pre><code class="language-sql">
\\l                    -- List all databases
\\c database_name      -- Connect to another database
\\dt                   -- List all tables
\\d table_name         -- Show table structure
\\d+ table_name        -- Detailed table structure
\\dn                   -- List schemas
\\du                   -- List users/roles
\\df                   -- List functions
\\dv                   -- List views
  </code></pre>

  <h4>SQL Queries</h4>

  <pre><code class="language-sql">
-- Query data
SELECT * FROM "Metrics";
SELECT * FROM "AlertRules" LIMIT 10;
SELECT COUNT(*) FROM "MonitorTargets";

-- Filter data
SELECT * FROM "Metrics" WHERE "Type" = 'CPU';
SELECT * FROM "Metrics" ORDER BY "Timestamp" DESC LIMIT 5;

-- Insert data
INSERT INTO "MonitorTargets" ("Name", "Url", "IsActive") 
VALUES ('Test Server', 'http://localhost:8080', true);

-- Update data
UPDATE "MonitorTargets" SET "IsActive" = false WHERE "Name" = 'Test Server';

-- Delete data
DELETE FROM "Metrics" WHERE "Timestamp" &lt; NOW() - INTERVAL '30 days';
  </code></pre>

  <h4>Administration</h4>

  <pre><code class="language-sql">
-- View active connections
SELECT * FROM pg_stat_activity;

-- Database size
SELECT pg_size_pretty(pg_database_size('monitordb'));

-- Table sizes
SELECT 
    schemaname,
    tablename,
    pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) AS size
FROM pg_tables
WHERE schemaname = 'public'
ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC;

-- Clear cache
VACUUM ANALYZE;

-- View configurations
SHOW ALL;
SHOW max_connections;
SHOW shared_buffers;

-- Exit psql
\\q
  </code></pre>

  <h3>Execute SQL Directly (Without Entering psql)</h3>

  <pre><code class="language-bash">
# Execute single command
docker exec -it postgres psql -U monitor -d monitordb -c "SELECT COUNT(*) FROM \\"Metrics\\";"

# Execute SQL file
docker exec -i postgres psql -U monitor -d monitordb &lt; script.sql

# Export data to CSV
docker exec -it postgres psql -U monitor -d monitordb -c "COPY \\"Metrics\\" TO STDOUT WITH CSV HEADER" &gt; metrics.csv
  </code></pre>

  <h3>Backup and Restore</h3>

  <pre><code class="language-bash">
# Full backup
docker exec -t postgres pg_dump -U monitor monitordb &gt; backup.sql

# Compressed backup
docker exec -t postgres pg_dump -U monitor monitordb | gzip &gt; backup.sql.gz

# Restore
docker exec -i postgres psql -U monitor -d monitordb &lt; backup.sql

# Restore compressed
gunzip -c backup.sql.gz | docker exec -i postgres psql -U monitor -d monitordb
  </code></pre>

  <h2>SQL Server</h2>

  <h3>Connecting to the Database</h3>

  <pre><code class="language-bash">
# Basic syntax
docker exec -it &lt;container_name&gt; /opt/mssql-tools/bin/sqlcmd -S localhost -U &lt;username&gt; -P &lt;password&gt;

# Example
docker exec -it sqlserver /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P "YourStrong@Passw0rd"
  </code></pre>

  <h3>Essential sqlcmd Commands</h3>

  <pre><code class="language-sql">
-- Select database
USE monitordb;
GO

-- List tables
SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE';
GO

-- Table structure
EXEC sp_help 'Metrics';
GO

-- Query data
SELECT * FROM Metrics;
GO

-- Exit
EXIT
  </code></pre>

  <h3>Execute SQL Directly</h3>

  <pre><code class="language-bash">
# Single command
docker exec -it sqlserver /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P "YourStrong@Passw0rd" -Q "SELECT COUNT(*) FROM monitordb.dbo.Metrics"

# Execute SQL file
docker exec -i sqlserver /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P "YourStrong@Passw0rd" -i script.sql
  </code></pre>

  <h2>MongoDB</h2>

  <h3>Connecting to the Database</h3>

  <pre><code class="language-bash">
# Basic syntax
docker exec -it &lt;container_name&gt; mongosh -u &lt;username&gt; -p &lt;password&gt; --authenticationDatabase admin

# Example
docker exec -it mongodb mongosh -u admin -p admin123 --authenticationDatabase admin
  </code></pre>

  <h3>Essential mongosh Commands</h3>

  <pre><code class="language-javascript">
// List databases
show dbs

// Use database
use monitordb

// List collections
show collections

// Query documents
db.metrics.find()
db.metrics.find().limit(10)
db.metrics.find({ type: "CPU" })
db.metrics.find().sort({ timestamp: -1 }).limit(5)

// Count documents
db.metrics.countDocuments()

// Insert document
db.metrics.insertOne({ type: "CPU", value: 75.5, timestamp: new Date() })

// Update document
db.metrics.updateOne({ type: "CPU" }, { \\$set: { value: 80 } })

// Delete document
db.metrics.deleteMany({ timestamp: { \\$lt: new Date("2024-01-01") } })

// Exit
exit
  </code></pre>

  <h2>Redis</h2>

  <h3>Connecting to Redis</h3>

  <pre><code class="language-bash">
# Basic syntax
docker exec -it &lt;container_name&gt; redis-cli -a &lt;password&gt;

# Example
docker exec -it redis redis-cli -a redis123
  </code></pre>

  <h3>Essential redis-cli Commands</h3>

  <pre><code class="language-bash">
# List all keys
KEYS *

# Get value of a key
GET metric:cpu:server1

# Set value
SET metric:cpu:server1 "75.5"

# Set with expiration (TTL in seconds)
SETEX metric:cpu:server1 3600 "75.5"

# View remaining TTL
TTL metric:cpu:server1

# Delete key
DEL metric:cpu:server1

# Clear entire database
FLUSHDB

# Server information
INFO

# Monitor commands in real-time
MONITOR

# Exit
EXIT
  </code></pre>

  <h2>RabbitMQ</h2>

  <h3>Management via CLI</h3>

  <pre><code class="language-bash">
# List queues
docker exec -it rabbitmq rabbitmqctl list_queues

# List exchanges
docker exec -it rabbitmq rabbitmqctl list_exchanges

# List bindings
docker exec -it rabbitmq rabbitmqctl list_bindings

# List connections
docker exec -it rabbitmq rabbitmqctl list_connections

# List users
docker exec -it rabbitmq rabbitmqctl list_users

# Cluster status
docker exec -it rabbitmq rabbitmqctl cluster_status

# Purge queue
docker exec -it rabbitmq rabbitmqctl purge_queue queue_name
  </code></pre>

  <h2>Useful Docker Commands</h2>

  <h3>Container Management</h3>

  <pre><code class="language-bash">
# List running containers
docker ps

# List all containers
docker ps -a

# View container logs
docker logs &lt;container_name&gt;
docker logs -f &lt;container_name&gt;  # Follow (real-time)
docker logs --tail 100 &lt;container_name&gt;  # Last 100 lines

# Stop container
docker stop &lt;container_name&gt;

# Start container
docker start &lt;container_name&gt;

# Restart container
docker restart &lt;container_name&gt;

# Remove container
docker rm &lt;container_name&gt;
docker rm -f &lt;container_name&gt;  # Force removal

# View resource usage
docker stats

# Inspect container
docker inspect &lt;container_name&gt;
  </code></pre>

  <h3>Volume Management</h3>

  <pre><code class="language-bash">
# List volumes
docker volume ls

# Inspect volume
docker volume inspect &lt;volume_name&gt;

# Remove volume
docker volume rm &lt;volume_name&gt;

# Remove unused volumes
docker volume prune
  </code></pre>

  <h3>Docker Compose</h3>

  <pre><code class="language-bash">
# Start all services
docker-compose up -d

# View logs of all services
docker-compose logs -f

# View logs of specific service
docker-compose logs -f postgres

# Stop all services
docker-compose stop

# Stop and remove containers
docker-compose down

# Stop, remove containers and volumes
docker-compose down -v

# Recreate containers
docker-compose up -d --force-recreate

# View service status
docker-compose ps
  </code></pre>

  <h2>Tips and Best Practices</h2>

  <h3>When to Use Command Line</h3>

  <ul>
    <li>Quick data checks</li>
    <li>Development debugging</li>
    <li>Automation scripts</li>
    <li>Production environments (SSH)</li>
    <li>CI/CD pipelines</li>
  </ul>

  <h3>When to Use GUI Tools (DBeaver, pgAdmin)</h3>

  <ul>
    <li>Exploratory data analysis</li>
    <li>Complex queries with multiple JOINs</li>
    <li>Relationship visualization</li>
    <li>Bulk data editing</li>
    <li>ER diagram generation</li>
  </ul>

  <h3>Important Precautions</h3>

  <pre><code class="language-sql">
-- ❌ NEVER do this in production without backup
DROP TABLE Metrics;
DELETE FROM Metrics;  -- Without WHERE
TRUNCATE TABLE Metrics;

-- ✅ ALWAYS backup first
docker exec -t postgres pg_dump -U monitor monitordb &gt; backup_\\$(date +%Y%m%d).sql

-- ✅ Use transactions for critical operations
BEGIN;
DELETE FROM Metrics WHERE Timestamp &lt; '2024-01-01';
-- Check result
SELECT COUNT(*) FROM Metrics;
-- If OK: COMMIT; If not: ROLLBACK;
  </code></pre>

  <h3>Useful Aliases (Optional)</h3>

  <p>Add to your <code>.bashrc</code> or <code>.zshrc</code>:</p>

  <pre><code class="language-bash">
# PostgreSQL
alias pgcli='docker exec -it postgres psql -U monitor -d monitordb'
alias pgdump='docker exec -t postgres pg_dump -U monitor monitordb'

# Redis
alias rediscli='docker exec -it redis redis-cli -a redis123'

# MongoDB
alias mongocli='docker exec -it mongodb mongosh -u admin -p admin123'

# Docker Compose
alias dcup='docker-compose up -d'
alias dcdown='docker-compose down'
alias dclogs='docker-compose logs -f'
alias dcps='docker-compose ps'
  </code></pre>

  <p>Then simply use:</p>

  <pre><code class="language-bash">
pgcli
rediscli
mongocli
  </code></pre>

  <h2>Practical Exercises</h2>

  <h3>Basic Level</h3>
  <ol>
    <li>Connect to PostgreSQL and list all tables</li>
    <li>Query the last 10 records from the Metrics table</li>
    <li>Count how many MonitorTargets are active</li>
  </ol>

  <h3>Intermediate Level</h3>
  <ol start="4">
    <li>Create a database backup</li>
    <li>Export the Metrics table to CSV</li>
    <li>Calculate the average CPU for the last 7 days</li>
  </ol>

  <h3>Advanced Level</h3>
  <ol start="7">
    <li>Create a script that automates daily backups</li>
    <li>Implement a query that identifies anomalous metrics</li>
    <li>Configure a custom alias for quick access</li>
  </ol>

  <h2>Real-World Scenarios</h2>

  <h3>Scenario 1: Quick Production Debug</h3>

  <pre><code class="language-bash">
# SSH into production server
ssh user@production-server

# Check if database is responding
docker exec -it postgres psql -U app -d appdb -c "SELECT 1;"

# Check recent errors
docker exec -it postgres psql -U app -d appdb -c "SELECT * FROM error_logs ORDER BY created_at DESC LIMIT 10;"

# Check active connections
docker exec -it postgres psql -U app -d appdb -c "SELECT count(*) FROM pg_stat_activity;"
  </code></pre>

  <h3>Scenario 2: Data Migration</h3>

  <pre><code class="language-bash">
# Export from old database
docker exec -t old_postgres pg_dump -U user -d olddb &gt; migration.sql

# Import to new database
docker exec -i new_postgres psql -U user -d newdb &lt; migration.sql

# Verify data
docker exec -it new_postgres psql -U user -d newdb -c "SELECT COUNT(*) FROM users;"
  </code></pre>

  <h3>Scenario 3: Performance Analysis</h3>

  <pre><code class="language-sql">
-- Find slow queries
SELECT 
    query,
    calls,
    total_time,
    mean_time,
    max_time
FROM pg_stat_statements
ORDER BY mean_time DESC
LIMIT 10;

-- Find missing indexes
SELECT 
    schemaname,
    tablename,
    attname,
    n_distinct,
    correlation
FROM pg_stats
WHERE schemaname = 'public'
ORDER BY n_distinct DESC;

-- Check table bloat
SELECT 
    schemaname,
    tablename,
    pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) as size
FROM pg_tables
WHERE schemaname = 'public'
ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC;
  </code></pre>

  <h2>Automation Scripts</h2>

  <h3>Daily Backup Script</h3>

  <pre><code class="language-bash">
#!/bin/bash
# backup.sh

DATE=\\$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/backups"
CONTAINER="postgres"
USER="monitor"
DATABASE="monitordb"

# Create backup
docker exec -t \\$CONTAINER pg_dump -U \\$USER \\$DATABASE | gzip &gt; \\$BACKUP_DIR/backup_\\$DATE.sql.gz

# Keep only last 7 days
find \\$BACKUP_DIR -name "backup_*.sql.gz" -mtime +7 -delete

echo "Backup completed: backup_\\$DATE.sql.gz"
  </code></pre>

  <h3>Health Check Script</h3>

  <pre><code class="language-bash">
#!/bin/bash
# health_check.sh

CONTAINER="postgres"
USER="monitor"
DATABASE="monitordb"

# Check if container is running
if ! docker ps | grep -q \\$CONTAINER; then
    echo "❌ Container \\$CONTAINER is not running"
    exit 1
fi

# Check database connectivity
if docker exec -it \\$CONTAINER psql -U \\$USER -d \\$DATABASE -c "SELECT 1;" &gt; /dev/null 2&gt;&1; then
    echo "✅ Database is healthy"
else
    echo "❌ Database connection failed"
    exit 1
fi

# Check disk space
SIZE=\\$(docker exec -it \\$CONTAINER psql -U \\$USER -d \\$DATABASE -t -c "SELECT pg_database_size('\\$DATABASE');" | tr -d ' ')
echo "📊 Database size: \\$(numfmt --to=iec \\$SIZE)"
  </code></pre>

  <h2>Common Issues and Solutions</h2>

  <h3>Issue: Permission Denied</h3>

  <pre><code class="language-bash">
# Problem
docker exec -it postgres psql -U monitor -d monitordb
# psql: FATAL: role "monitor" does not exist

# Solution: Check existing users
docker exec -it postgres psql -U postgres -c "\\du"

# Create user if needed
docker exec -it postgres psql -U postgres -c "CREATE USER monitor WITH PASSWORD 'password';"
docker exec -it postgres psql -U postgres -c "GRANT ALL PRIVILEGES ON DATABASE monitordb TO monitor;"
  </code></pre>

  <h3>Issue: Container Not Found</h3>

  <pre><code class="language-bash">
# Problem
docker exec -it postgres psql
# Error: No such container: postgres

# Solution: List containers
docker ps -a

# Use correct container name or ID
docker exec -it actual_container_name psql
  </code></pre>

  <h3>Issue: Too Many Connections</h3>

  <pre><code class="language-sql">
-- Check current connections
SELECT count(*) FROM pg_stat_activity;

-- Kill idle connections
SELECT pg_terminate_backend(pid) 
FROM pg_stat_activity 
WHERE state = 'idle' 
AND state_change &lt; NOW() - INTERVAL '10 minutes';

-- Increase max_connections (requires restart)
ALTER SYSTEM SET max_connections = 200;
  </code></pre>

  <h2>Resources and Documentation</h2>

  <ul>
    <li><a href="https://www.postgresql.org/docs/" target="_blank" rel="noopener">PostgreSQL Documentation</a></li>
    <li><a href="https://docs.microsoft.com/sql/" target="_blank" rel="noopener">SQL Server Documentation</a></li>
    <li><a href="https://docs.mongodb.com/" target="_blank" rel="noopener">MongoDB Documentation</a></li>
    <li><a href="https://redis.io/documentation" target="_blank" rel="noopener">Redis Documentation</a></li>
    <li><a href="https://docs.docker.com/" target="_blank" rel="noopener">Docker Documentation</a></li>
    <li><a href="https://www.rabbitmq.com/documentation.html" target="_blank" rel="noopener">RabbitMQ Documentation</a></li>
  </ul>

  <h2>Conclusion</h2>

  <p>Mastering database access via Docker CLI is an essential skill for modern developers. While GUI tools have their place, command-line proficiency enables faster debugging, easier automation, and better understanding of database operations.</p>

  <p>Start by practicing the basic commands daily. Create aliases for frequently used operations. Build automation scripts for repetitive tasks. Over time, you'll find that command-line database management becomes second nature and significantly improves your productivity.</p>

  <p>Remember: the goal isn't to replace GUI tools entirely, but to have both options available and choose the right tool for each situation. Command line for quick operations and automation, GUI tools for complex analysis and visualization.</p>

  <p><em>Practice these commands regularly, and you'll become proficient in database management via Docker CLI!</em></p>
  </div>
      `,
  category: "DevOps",
  tags: ["Docker", "Database", "PostgreSQL", "MongoDB", "Redis", "CLI", "DevOps"],
  image: "/articles/Docker.png",
  featured: true,
  status: "Published",
  date: "February 02, 2026",
};

export default dockerDatabaseAccessArticle;
