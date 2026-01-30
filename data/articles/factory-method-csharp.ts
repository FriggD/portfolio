import type { Article } from "@/lib/types";

const factoryMethodCSharpArticle: Article = {
  id: 6,
  title: "Factory Method Pattern in C#: Flexible Object Creation",
  slug: "factory-method-pattern-csharp-flexible-object-creation",
  excerpt: "Understanding how the Factory Method pattern enables flexible and maintainable object creation in C#",
  content: `
    <div class="article-content">
  <h1>Factory Method Pattern in C#: Flexible Object Creation</h1>

  <p>The <strong>Factory Method</strong> is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created. Instead of calling a constructor directly, you call a factory method that returns the object.</p>

  <h2>What Is the Factory Method Pattern?</h2>

  <p>The Factory Method pattern defines an interface for creating an object, but lets subclasses decide which class to instantiate. It lets a class defer instantiation to subclasses, promoting loose coupling and adherence to the Open/Closed Principle.</p>

  <pre><code class="language-csharp">
// Product interface
public interface IProduct
{
    string GetName();
    void Display();
}

// Concrete Products
public class ConcreteProductA : IProduct
{
    public string GetName() => "Product A";
    public void Display() => Console.WriteLine("This is Product A");
}

public class ConcreteProductB : IProduct
{
    public string GetName() => "Product B";
    public void Display() => Console.WriteLine("This is Product B");
}

// Creator (Factory)
public abstract class Creator
{
    // Factory Method
    public abstract IProduct CreateProduct();
    
    // Business logic that uses the factory method
    public void DoSomething()
    {
        IProduct product = CreateProduct();
        Console.WriteLine($"Working with {product.GetName()}");
        product.Display();
    }
}

// Concrete Creators
public class ConcreteCreatorA : Creator
{
    public override IProduct CreateProduct()
    {
        return new ConcreteProductA();
    }
}

public class ConcreteCreatorB : Creator
{
    public override IProduct CreateProduct()
    {
        return new ConcreteProductB();
    }
}

// Usage
Creator creator = new ConcreteCreatorA();
creator.DoSomething();  // Output: Working with Product A
  </code></pre>

  <h2>Why Use the Factory Method Pattern?</h2>

  <h3>1. Decoupling Object Creation</h3>
  <p>The pattern separates object creation from object usage, reducing dependencies:</p>

  <pre><code class="language-csharp">
// Without Factory Method - tight coupling
public class OrderProcessor
{
    public void ProcessOrder(string type)
    {
        IShipping shipping;
        
        // Direct instantiation creates tight coupling
        if (type == "air")
            shipping = new AirShipping();
        else if (type == "ground")
            shipping = new GroundShipping();
        else
            shipping = new SeaShipping();
            
        shipping.Ship();
    }
}

// With Factory Method - loose coupling
public abstract class ShippingFactory
{
    public abstract IShipping CreateShipping();
    
    public void ProcessShipment()
    {
        IShipping shipping = CreateShipping();
        shipping.Ship();
    }
}

public class AirShippingFactory : ShippingFactory
{
    public override IShipping CreateShipping() => new AirShipping();
}
  </code></pre>

  <h3>2. Open/Closed Principle</h3>
  <p>Add new product types without modifying existing code:</p>

  <pre><code class="language-csharp">
// Adding a new product type doesn't require changing existing factories
public class ConcreteProductC : IProduct
{
    public string GetName() => "Product C";
    public void Display() => Console.WriteLine("This is Product C");
}

public class ConcreteCreatorC : Creator
{
    public override IProduct CreateProduct()
    {
        return new ConcreteProductC();
    }
}
  </code></pre>

  <h2>Practical Examples</h2>

  <h3>Example 1: Document Creation System</h3>

  <pre><code class="language-csharp">
// Document interface
public interface IDocument
{
    void Open();
    void Save();
    void Close();
}

// Concrete Documents
public class WordDocument : IDocument
{
    public void Open() => Console.WriteLine("Opening Word document");
    public void Save() => Console.WriteLine("Saving Word document");
    public void Close() => Console.WriteLine("Closing Word document");
}

public class PdfDocument : IDocument
{
    public void Open() => Console.WriteLine("Opening PDF document");
    public void Save() => Console.WriteLine("Saving PDF document");
    public void Close() => Console.WriteLine("Closing PDF document");
}

public class ExcelDocument : IDocument
{
    public void Open() => Console.WriteLine("Opening Excel document");
    public void Save() => Console.WriteLine("Saving Excel document");
    public void Close() => Console.WriteLine("Closing Excel document");
}

// Document Factory
public abstract class DocumentFactory
{
    public abstract IDocument CreateDocument();
    
    public void ProcessDocument()
    {
        IDocument doc = CreateDocument();
        doc.Open();
        doc.Save();
        doc.Close();
    }
}

// Concrete Factories
public class WordDocumentFactory : DocumentFactory
{
    public override IDocument CreateDocument() => new WordDocument();
}

public class PdfDocumentFactory : DocumentFactory
{
    public override IDocument CreateDocument() => new PdfDocument();
}

public class ExcelDocumentFactory : DocumentFactory
{
    public override IDocument CreateDocument() => new ExcelDocument();
}

// Usage
DocumentFactory factory = new WordDocumentFactory();
factory.ProcessDocument();
  </code></pre>

  <h3>Example 2: Payment Processing System</h3>

  <pre><code class="language-csharp">
public interface IPaymentProcessor
{
    bool ProcessPayment(decimal amount);
    string GetTransactionId();
}

public class CreditCardProcessor : IPaymentProcessor
{
    public bool ProcessPayment(decimal amount)
    {
        Console.WriteLine(\`Processing credit card payment: \${amount}\`);
        return true;
    }
    
    public string GetTransactionId() => \`CC-\${Guid.NewGuid()}\`;
}

public class PayPalProcessor : IPaymentProcessor
{
    public bool ProcessPayment(decimal amount)
    {
        Console.WriteLine(\`Processing PayPal payment: \${amount}\`);
        return true;
    }
    
    public string GetTransactionId() => \`PP-\${Guid.NewGuid()}\`;
}

public class CryptoProcessor : IPaymentProcessor
{
    public bool ProcessPayment(decimal amount)
    {
        Console.WriteLine(\`Processing cryptocurrency payment: \${amount}\`);
        return true;
    }
    
    public string GetTransactionId() => \`CRYPTO-\${Guid.NewGuid()}\`;
}

public abstract class PaymentFactory
{
    public abstract IPaymentProcessor CreateProcessor();
    
    public bool ExecutePayment(decimal amount)
    {
        IPaymentProcessor processor = CreateProcessor();
        bool success = processor.ProcessPayment(amount);
        
        if (success)
        {
            Console.WriteLine(\`Transaction ID: \${processor.GetTransactionId()}\`);
        }
        
        return success;
    }
}

public class CreditCardFactory : PaymentFactory
{
    public override IPaymentProcessor CreateProcessor() => new CreditCardProcessor();
}

public class PayPalFactory : PaymentFactory
{
    public override IPaymentProcessor CreateProcessor() => new PayPalProcessor();
}

public class CryptoFactory : PaymentFactory
{
    public override IPaymentProcessor CreateProcessor() => new CryptoProcessor();
}

// Usage
PaymentFactory paymentFactory = new PayPalFactory();
paymentFactory.ExecutePayment(99.99m);
  </code></pre>

  <h3>Example 3: Logger Factory with Configuration</h3>

  <pre><code class="language-csharp">
public interface ILogger
{
    void Log(string message);
    void LogError(string message);
}

public class FileLogger : ILogger
{
    private readonly string _filePath;
    
    public FileLogger(string filePath)
    {
        _filePath = filePath;
    }
    
    public void Log(string message)
    {
        File.AppendAllText(_filePath, \`[INFO] \${DateTime.Now}: \${message}\\n\`);
    }
    
    public void LogError(string message)
    {
        File.AppendAllText(_filePath, \`[ERROR] \${DateTime.Now}: \${message}\\n\`);
    }
}

public class ConsoleLogger : ILogger
{
    public void Log(string message)
    {
        Console.ForegroundColor = ConsoleColor.Green;
        Console.WriteLine(\`[INFO] \${message}\`);
        Console.ResetColor();
    }
    
    public void LogError(string message)
    {
        Console.ForegroundColor = ConsoleColor.Red;
        Console.WriteLine(\`[ERROR] \${message}\`);
        Console.ResetColor();
    }
}

public class DatabaseLogger : ILogger
{
    private readonly string _connectionString;
    
    public DatabaseLogger(string connectionString)
    {
        _connectionString = connectionString;
    }
    
    public void Log(string message)
    {
        // Insert into database
        Console.WriteLine(\`Logging to database: \${message}\`);
    }
    
    public void LogError(string message)
    {
        // Insert error into database
        Console.WriteLine(\`Logging error to database: \${message}\`);
    }
}

public abstract class LoggerFactory
{
    public abstract ILogger CreateLogger();
}

public class FileLoggerFactory : LoggerFactory
{
    private readonly string _filePath;
    
    public FileLoggerFactory(string filePath)
    {
        _filePath = filePath;
    }
    
    public override ILogger CreateLogger() => new FileLogger(_filePath);
}

public class ConsoleLoggerFactory : LoggerFactory
{
    public override ILogger CreateLogger() => new ConsoleLogger();
}

public class DatabaseLoggerFactory : LoggerFactory
{
    private readonly string _connectionString;
    
    public DatabaseLoggerFactory(string connectionString)
    {
        _connectionString = connectionString;
    }
    
    public override ILogger CreateLogger() => new DatabaseLogger(_connectionString);
}

// Usage
LoggerFactory loggerFactory = new FileLoggerFactory("app.log");
ILogger logger = loggerFactory.CreateLogger();
logger.Log("Application started");
logger.LogError("An error occurred");
  </code></pre>

  <h3>Example 4: Parameterized Factory Method</h3>

  <pre><code class="language-csharp">
public enum VehicleType
{
    Car,
    Motorcycle,
    Truck
}

public interface IVehicle
{
    void Drive();
    int GetCapacity();
}

public class Car : IVehicle
{
    public void Drive() => Console.WriteLine("Driving a car");
    public int GetCapacity() => 5;
}

public class Motorcycle : IVehicle
{
    public void Drive() => Console.WriteLine("Riding a motorcycle");
    public int GetCapacity() => 2;
}

public class Truck : IVehicle
{
    public void Drive() => Console.WriteLine("Driving a truck");
    public int GetCapacity() => 3;
}

public class VehicleFactory
{
    public static IVehicle CreateVehicle(VehicleType type)
    {
        return type switch
        {
            VehicleType.Car => new Car(),
            VehicleType.Motorcycle => new Motorcycle(),
            VehicleType.Truck => new Truck(),
            _ => throw new ArgumentException("Invalid vehicle type")
        };
    }
}

// Usage
IVehicle vehicle = VehicleFactory.CreateVehicle(VehicleType.Car);
vehicle.Drive();
Console.WriteLine(\`Capacity: \${vehicle.GetCapacity()} passengers\`);
  </code></pre>

  <h2>Advantages of Factory Method Pattern</h2>

  <ul>
    <li><strong>Loose Coupling:</strong> Client code doesn't depend on concrete classes</li>
    <li><strong>Single Responsibility:</strong> Object creation logic is centralized</li>
    <li><strong>Open/Closed Principle:</strong> Easy to add new product types without modifying existing code</li>
    <li><strong>Testability:</strong> Easy to mock factories for unit testing</li>
    <li><strong>Flexibility:</strong> Subclasses can override factory methods to change product types</li>
    <li><strong>Code Reusability:</strong> Common creation logic can be shared across factories</li>
  </ul>

  <h2>Disadvantages and Limitations</h2>

  <ul>
    <li><strong>Increased Complexity:</strong> Requires creating multiple classes and interfaces</li>
    <li><strong>More Code:</strong> More boilerplate code compared to direct instantiation</li>
    <li><strong>Indirection:</strong> Can make code harder to follow for simple scenarios</li>
    <li><strong>Overhead:</strong> Additional abstraction layers may impact performance slightly</li>
    <li><strong>Over-Engineering:</strong> May be overkill for simple object creation</li>
  </ul>

  <h2>When to Use Factory Method Pattern</h2>

  <p>Use the Factory Method pattern when:</p>

  <ul>
    <li>You don't know beforehand the exact types and dependencies of objects your code should work with</li>
    <li>You want to provide users of your library or framework with a way to extend its internal components</li>
    <li>You want to save system resources by reusing existing objects instead of rebuilding them</li>
    <li>You need to decouple object creation from object usage</li>
    <li>You want to centralize object creation logic</li>
    <li>You need to support multiple product families</li>
    <li>Your code needs to work with different types of objects that share a common interface</li>
  </ul>

  <p>Avoid the Factory Method pattern when:</p>

  <ul>
    <li>Object creation is simple and unlikely to change</li>
    <li>You only have one concrete product type</li>
    <li>The added complexity doesn't provide clear benefits</li>
    <li>Performance is critical and the abstraction overhead is unacceptable</li>
  </ul>

  <h2>Performance Impact</h2>

  <h3>Performance Considerations</h3>

  <ul>
    <li><strong>Virtual Method Calls:</strong> Factory methods are typically virtual, adding slight overhead</li>
    <li><strong>Indirection:</strong> Additional method calls add minimal latency</li>
    <li><strong>Memory:</strong> More classes mean slightly more memory usage</li>
    <li><strong>JIT Optimization:</strong> Modern JIT compilers can inline simple factory methods</li>
  </ul>

  <pre><code class="language-csharp">
// Performance comparison (approximate)
public class PerformanceBenchmark
{
    // Direct instantiation - fastest
    public void DirectCreation()
    {
        var product = new ConcreteProductA();  // ~1-2ns
    }
    
    // Factory Method - minimal overhead
    public void FactoryCreation()
    {
        Creator factory = new ConcreteCreatorA();
        var product = factory.CreateProduct();  // ~3-5ns
    }
    
    // Parameterized Factory - slightly more overhead
    public void ParameterizedFactory()
    {
        var product = VehicleFactory.CreateVehicle(VehicleType.Car);  // ~5-10ns
    }
}
  </code></pre>

  <h3>Performance Optimization Tips</h3>

  <ul>
    <li><strong>Object Pooling:</strong> Combine with object pooling for frequently created objects</li>
    <li><strong>Lazy Initialization:</strong> Create objects only when needed</li>
    <li><strong>Caching:</strong> Cache factory instances if they're stateless</li>
    <li><strong>Sealed Classes:</strong> Mark concrete products as sealed for better JIT optimization</li>
  </ul>

  <pre><code class="language-csharp">
// Optimized factory with caching
public class OptimizedFactory
{
    private static readonly Dictionary<string, IProduct> _cache = new();
    private static readonly object _lock = new();
    
    public static IProduct GetProduct(string type)
    {
        if (_cache.TryGetValue(type, out var cached))
            return cached;
            
        lock (_lock)
        {
            if (_cache.TryGetValue(type, out cached))
                return cached;
                
            IProduct product = CreateNewProduct(type);
            _cache[type] = product;
            return product;
        }
    }
    
    private static IProduct CreateNewProduct(string type)
    {
        return type switch
        {
            "A" => new ConcreteProductA(),
            "B" => new ConcreteProductB(),
            _ => throw new ArgumentException("Unknown type")
        };
    }
}
  </code></pre>

  <h2>Factory Method vs Other Patterns</h2>

  <h3>Factory Method vs Abstract Factory</h3>
  <ul>
    <li><strong>Factory Method:</strong> Creates one product type, uses inheritance</li>
    <li><strong>Abstract Factory:</strong> Creates families of related products, uses composition</li>
  </ul>

  <h3>Factory Method vs Builder</h3>
  <ul>
    <li><strong>Factory Method:</strong> Creates objects in one step</li>
    <li><strong>Builder:</strong> Constructs complex objects step by step</li>
  </ul>

  <h3>Factory Method vs Prototype</h3>
  <ul>
    <li><strong>Factory Method:</strong> Creates new objects from scratch</li>
    <li><strong>Prototype:</strong> Clones existing objects</li>
  </ul>

  <h2>Best Practices</h2>

  <ol>
    <li><strong>Use Interfaces:</strong> Define product interfaces for maximum flexibility</li>
    <li><strong>Keep Factories Simple:</strong> Factory methods should focus on object creation only</li>
    <li><strong>Consider Dependency Injection:</strong> Combine with DI containers for better testability</li>
    <li><strong>Document Factory Behavior:</strong> Clearly document what each factory creates</li>
    <li><strong>Use Meaningful Names:</strong> Factory class names should clearly indicate what they create</li>
    <li><strong>Validate Parameters:</strong> Always validate input parameters in parameterized factories</li>
    <li><strong>Handle Errors Gracefully:</strong> Provide clear error messages for invalid inputs</li>
  </ol>

  <h2>Real-World Applications</h2>

  <ul>
    <li><strong>ASP.NET Core:</strong> Uses factory pattern for creating middleware and services</li>
    <li><strong>Entity Framework:</strong> DbContext factory for creating database contexts</li>
    <li><strong>Logging Frameworks:</strong> LoggerFactory in Microsoft.Extensions.Logging</li>
    <li><strong>UI Frameworks:</strong> Creating different UI controls based on platform</li>
    <li><strong>Game Development:</strong> Creating different enemy types, weapons, or power-ups</li>
  </ul>

  <h2>Further Reading and Resources</h2>

  <ul>
    <li><a href="https://refactoring.guru/design-patterns/factory-method" target="_blank" rel="noopener">Refactoring Guru: Factory Method</a></li>
    <li><a href="https://docs.microsoft.com/en-us/dotnet/standard/design-guidelines/" target="_blank" rel="noopener">Microsoft: .NET Design Guidelines</a></li>
    <li><a href="https://www.dofactory.com/net/factory-method-design-pattern" target="_blank" rel="noopener">DoFactory: Factory Method Pattern</a></li>
    <li><a href="https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612" target="_blank" rel="noopener">Design Patterns: Elements of Reusable Object-Oriented Software (Gang of Four)</a></li>
    <li><a href="https://www.amazon.com/Head-First-Design-Patterns-Brain-Friendly/dp/0596007124" target="_blank" rel="noopener">Head First Design Patterns</a></li>
  </ul>

  <p><em>The Factory Method pattern is a fundamental design pattern that promotes loose coupling and flexibility in object creation. While it adds some complexity, the benefits in maintainability and extensibility make it invaluable for building scalable applications.</em></p>
  </div>
      `,
  category: "Programming",
  tags: ["C#", ".NET", "Design Patterns", "Factory Method", "OOP"],
  image: "/articles/factory.png",
  featured: true,
  status: "Published",
  date: "January 14, 2026",
};

export default factoryMethodCSharpArticle;
