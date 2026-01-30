import type { Article } from "@/lib/types";

const objectCalisthenicsArticle: Article = {
  id: 7,
  title: "Object Calisthenics: 9 Rules for Better Object-Oriented Code",
  slug: "object-calisthenics-9-rules-better-oop",
  excerpt: "Master the art of writing clean, maintainable object-oriented code through disciplined practice",
  content: `
    <div class="article-content">
  <h1>Object Calisthenics: 9 Rules for Better Object-Oriented Code</h1>

  <p>Just as physical calisthenics uses bodyweight exercises to build strength and flexibility, <strong>Object Calisthenics</strong> is a set of programming exercises designed to improve your object-oriented design skills. These nine rules, introduced by Jeff Bay in "The ThoughtWorks Anthology", push developers to write more maintainable, readable, and well-designed code.</p>

  <h2>What is Object Calisthenics?</h2>

  <p>Object Calisthenics is a set of programming constraints that force you to think differently about how you structure your code. By following these rules strictly, you develop better habits and intuition for object-oriented design. Think of them as training wheels that help you internalize good design principles.</p>

  <p>The goal isn't to follow these rules religiously in production code, but to use them as exercises that strengthen your design muscles. After practicing with these constraints, you'll naturally write better code even when you're not strictly following all the rules.</p>

  <h2>The 9 Rules of Object Calisthenics</h2>

  <h3>Rule 1: Only One Level of Indentation per Method</h3>

  <p>Methods should have only one level of indentation. This forces you to extract complex logic into separate methods, making your code more readable and testable.</p>

  <pre><code class="language-csharp">
// ❌ Bad: Multiple levels of indentation
public class OrderProcessor
{
    public void ProcessOrders(List<Order> orders)
    {
        foreach (var order in orders)
        {
            if (order.IsValid())
            {
                if (order.Customer.HasCredit())
                {
                    if (order.Items.Any())
                    {
                        // Process order
                        order.Process();
                    }
                }
            }
        }
    }
}

// ✅ Good: One level of indentation
public class OrderProcessor
{
    public void ProcessOrders(List<Order> orders)
    {
        foreach (var order in orders)
        {
            ProcessOrder(order);
        }
    }
    
    private void ProcessOrder(Order order)
    {
        if (!CanProcessOrder(order)) return;
        order.Process();
    }
    
    private bool CanProcessOrder(Order order)
    {
        return order.IsValid() 
            && order.Customer.HasCredit() 
            && order.Items.Any();
    }
}
  </code></pre>

  <h3>Rule 2: Don't Use the ELSE Keyword</h3>

  <p>Avoiding else statements encourages early returns and guard clauses, leading to more linear and readable code. It also pushes you toward polymorphism and strategy patterns.</p>

  <pre><code class="language-csharp">
// ❌ Bad: Using else
public string GetDiscount(Customer customer)
{
    if (customer.IsPremium())
    {
        return "20% discount";
    }
    else
    {
        if (customer.IsRegular())
        {
            return "10% discount";
        }
        else
        {
            return "No discount";
        }
    }
}

// ✅ Good: Early returns, no else
public string GetDiscount(Customer customer)
{
    if (customer.IsPremium())
        return "20% discount";
        
    if (customer.IsRegular())
        return "10% discount";
        
    return "No discount";
}

// ✅ Better: Using polymorphism
public interface ICustomer
{
    string GetDiscount();
}

public class PremiumCustomer : ICustomer
{
    public string GetDiscount() => "20% discount";
}

public class RegularCustomer : ICustomer
{
    public string GetDiscount() => "10% discount";
}

public class GuestCustomer : ICustomer
{
    public string GetDiscount() => "No discount";
}
  </code></pre>

  <h3>Rule 3: Wrap All Primitives and Strings</h3>

  <p>Encapsulate primitive types in classes to add meaning and behavior. This prevents primitive obsession and makes your domain model more expressive.</p>

  <pre><code class="language-csharp">
// ❌ Bad: Using primitives directly
public class User
{
    public string Email { get; set; }
    public int Age { get; set; }
    public string PhoneNumber { get; set; }
}

// ✅ Good: Wrapped primitives with validation
public class Email
{
    private readonly string _value;
    
    public Email(string value)
    {
        if (string.IsNullOrWhiteSpace(value))
            throw new ArgumentException("Email cannot be empty");
            
        if (!value.Contains("@"))
            throw new ArgumentException("Invalid email format");
            
        _value = value;
    }
    
    public string Value => _value;
    public string Domain => _value.Split('@')[1];
    
    public override string ToString() => _value;
}

public class Age
{
    private readonly int _value;
    
    public Age(int value)
    {
        if (value < 0 || value > 150)
            throw new ArgumentException("Invalid age");
            
        _value = value;
    }
    
    public int Value => _value;
    public bool IsAdult() => _value >= 18;
    public bool IsSenior() => _value >= 65;
}

public class PhoneNumber
{
    private readonly string _value;
    
    public PhoneNumber(string value)
    {
        if (string.IsNullOrWhiteSpace(value))
            throw new ArgumentException("Phone number cannot be empty");
            
        _value = value.Replace("-", "").Replace(" ", "");
    }
    
    public string Value => _value;
    public string Formatted => FormatPhoneNumber();
    
    private string FormatPhoneNumber()
    {
        // Format logic here
        return _value;
    }
}

public class User
{
    public Email Email { get; set; }
    public Age Age { get; set; }
    public PhoneNumber PhoneNumber { get; set; }
}
  </code></pre>

  <h3>Rule 4: First Class Collections</h3>

  <p>Any class that contains a collection should contain nothing else. This encapsulates collection behavior and prevents the class from having multiple responsibilities.</p>

  <pre><code class="language-csharp">
// ❌ Bad: Collection mixed with other responsibilities
public class Order
{
    public List<OrderItem> Items { get; set; }
    public Customer Customer { get; set; }
    public DateTime OrderDate { get; set; }
    
    public decimal GetTotal()
    {
        return Items.Sum(i => i.Price * i.Quantity);
    }
}

// ✅ Good: First-class collection
public class OrderItems
{
    private readonly List<OrderItem> _items;
    
    public OrderItems()
    {
        _items = new List<OrderItem>();
    }
    
    public void Add(OrderItem item)
    {
        if (item == null)
            throw new ArgumentNullException(nameof(item));
            
        _items.Add(item);
    }
    
    public void Remove(OrderItem item)
    {
        _items.Remove(item);
    }
    
    public decimal GetTotal()
    {
        return _items.Sum(i => i.Price * i.Quantity);
    }
    
    public int Count => _items.Count;
    
    public bool IsEmpty() => _items.Count == 0;
    
    public IEnumerable<OrderItem> GetItems() => _items.AsReadOnly();
}

public class Order
{
    public OrderItems Items { get; }
    public Customer Customer { get; set; }
    public DateTime OrderDate { get; set; }
    
    public Order()
    {
        Items = new OrderItems();
    }
    
    public decimal GetTotal() => Items.GetTotal();
}
  </code></pre>

  <h3>Rule 5: One Dot per Line</h3>

  <p>Avoid chaining method calls (Law of Demeter). This reduces coupling and makes your code less fragile to changes in other classes.</p>

  <pre><code class="language-csharp">
// ❌ Bad: Multiple dots (train wreck)
public class OrderService
{
    public void ProcessOrder(Order order)
    {
        var city = order.GetCustomer().GetAddress().GetCity();
        var discount = order.GetCustomer().GetMembership().GetDiscount();
    }
}

// ✅ Good: Tell, don't ask
public class Order
{
    private readonly Customer _customer;
    
    public string GetCustomerCity()
    {
        return _customer.GetCity();
    }
    
    public decimal GetCustomerDiscount()
    {
        return _customer.GetDiscount();
    }
}

public class Customer
{
    private readonly Address _address;
    private readonly Membership _membership;
    
    public string GetCity()
    {
        return _address.GetCity();
    }
    
    public decimal GetDiscount()
    {
        return _membership.GetDiscount();
    }
}

public class OrderService
{
    public void ProcessOrder(Order order)
    {
        var city = order.GetCustomerCity();
        var discount = order.GetCustomerDiscount();
    }
}
  </code></pre>

  <h3>Rule 6: Don't Abbreviate</h3>

  <p>Use full, descriptive names for classes, methods, and variables. Abbreviations make code harder to understand and search.</p>

  <pre><code class="language-csharp">
// ❌ Bad: Abbreviations
public class UsrMgr
{
    public void ProcUsr(Usr u)
    {
        var addr = u.GetAddr();
        var ph = u.GetPh();
    }
}

// ✅ Good: Full names
public class UserManager
{
    public void ProcessUser(User user)
    {
        var address = user.GetAddress();
        var phoneNumber = user.GetPhoneNumber();
    }
}

// ❌ Bad: Cryptic variable names
public decimal CalcTot(List<Item> itms)
{
    decimal tot = 0;
    foreach (var itm in itms)
    {
        tot += itm.Prc * itm.Qty;
    }
    return tot;
}

// ✅ Good: Clear variable names
public decimal CalculateTotal(List<Item> items)
{
    decimal total = 0;
    foreach (var item in items)
    {
        total += item.Price * item.Quantity;
    }
    return total;
}
  </code></pre>

  <h3>Rule 7: Keep All Entities Small</h3>

  <p>Classes should be no more than 50 lines, and packages/namespaces should contain no more than 10 files. This forces you to create focused, single-responsibility classes.</p>

  <pre><code class="language-csharp">
// ❌ Bad: Large class with multiple responsibilities
public class UserService
{
    public void CreateUser(string name, string email) { }
    public void UpdateUser(int id, string name) { }
    public void DeleteUser(int id) { }
    public void SendWelcomeEmail(User user) { }
    public void SendPasswordResetEmail(User user) { }
    public bool ValidateEmail(string email) { }
    public bool ValidatePassword(string password) { }
    public void LogUserActivity(User user, string activity) { }
    public List<User> GetAllUsers() { }
    public User GetUserById(int id) { }
    // ... 40 more lines
}

// ✅ Good: Small, focused classes
public class UserRepository
{
    public void Create(User user) { }
    public void Update(User user) { }
    public void Delete(int id) { }
    public User GetById(int id) { }
    public List<User> GetAll() { }
}

public class UserEmailService
{
    public void SendWelcomeEmail(User user) { }
    public void SendPasswordResetEmail(User user) { }
}

public class UserValidator
{
    public bool ValidateEmail(string email) { }
    public bool ValidatePassword(string password) { }
}

public class UserActivityLogger
{
    public void LogActivity(User user, string activity) { }
}
  </code></pre>

  <h3>Rule 8: No Classes with More Than Two Instance Variables</h3>

  <p>This is the most controversial rule. It forces high cohesion and encourages composition over large, complex objects.</p>

  <pre><code class="language-csharp">
// ❌ Bad: Too many instance variables
public class User
{
    private string _name;
    private string _email;
    private string _phone;
    private string _street;
    private string _city;
    private string _state;
    private string _zipCode;
}

// ✅ Good: Composed objects
public class Address
{
    private readonly string _street;
    private readonly string _city;
    private readonly string _state;
    private readonly string _zipCode;
    
    public Address(string street, string city, string state, string zipCode)
    {
        _street = street;
        _city = city;
        _state = state;
        _zipCode = zipCode;
    }
    
    public string GetFullAddress()
    {
        return $"{_street}, {_city}, {_state} {_zipCode}";
    }
}

public class ContactInfo
{
    private readonly string _email;
    private readonly string _phone;
    
    public ContactInfo(string email, string phone)
    {
        _email = email;
        _phone = phone;
    }
}

public class User
{
    private readonly string _name;
    private readonly ContactInfo _contactInfo;
    private readonly Address _address;
    
    public User(string name, ContactInfo contactInfo, Address address)
    {
        _name = name;
        _contactInfo = contactInfo;
        _address = address;
    }
}
  </code></pre>

  <h3>Rule 9: No Getters/Setters/Properties</h3>

  <p>Instead of exposing internal state, tell objects what to do. This promotes encapsulation and prevents anemic domain models.</p>

  <pre><code class="language-csharp">
// ❌ Bad: Exposing internal state
public class BankAccount
{
    public decimal Balance { get; set; }
    
    public decimal GetBalance() => Balance;
    public void SetBalance(decimal value) => Balance = value;
}

public class AccountService
{
    public void Transfer(BankAccount from, BankAccount to, decimal amount)
    {
        from.SetBalance(from.GetBalance() - amount);
        to.SetBalance(to.GetBalance() + amount);
    }
}

// ✅ Good: Tell, don't ask
public class BankAccount
{
    private decimal _balance;
    
    public void Deposit(decimal amount)
    {
        if (amount <= 0)
            throw new ArgumentException("Amount must be positive");
            
        _balance += amount;
    }
    
    public void Withdraw(decimal amount)
    {
        if (amount <= 0)
            throw new ArgumentException("Amount must be positive");
            
        if (amount > _balance)
            throw new InvalidOperationException("Insufficient funds");
            
        _balance -= amount;
    }
    
    public void TransferTo(BankAccount destination, decimal amount)
    {
        Withdraw(amount);
        destination.Deposit(amount);
    }
}

public class AccountService
{
    public void Transfer(BankAccount from, BankAccount to, decimal amount)
    {
        from.TransferTo(to, amount);
    }
}
  </code></pre>

  <h2>Benefits of Object Calisthenics</h2>

  <ul>
    <li><strong>Improved Readability:</strong> Smaller, focused methods are easier to understand</li>
    <li><strong>Better Testability:</strong> Small, single-purpose classes are easier to test</li>
    <li><strong>Reduced Coupling:</strong> Following the Law of Demeter reduces dependencies</li>
    <li><strong>Enhanced Maintainability:</strong> Changes are localized and less likely to break other code</li>
    <li><strong>Stronger Encapsulation:</strong> Objects protect their internal state and expose behavior</li>
    <li><strong>More Expressive Domain Models:</strong> Wrapping primitives creates a richer vocabulary</li>
    <li><strong>Better Design Intuition:</strong> Regular practice develops better design instincts</li>
  </ul>

  <h2>Practical Application</h2>

  <p>Here's a complete example applying multiple Object Calisthenics rules:</p>

  <pre><code class="language-csharp">
// Complete example: E-commerce order processing
public class Money
{
    private readonly decimal _amount;
    
    public Money(decimal amount)
    {
        if (amount < 0)
            throw new ArgumentException("Amount cannot be negative");
        _amount = amount;
    }
    
    public Money Add(Money other) => new Money(_amount + other._amount);
    public Money Subtract(Money other) => new Money(_amount - other._amount);
    public Money MultiplyBy(int factor) => new Money(_amount * factor);
    
    public bool IsGreaterThan(Money other) => _amount > other._amount;
    public bool IsLessThan(Money other) => _amount < other._amount;
    
    public override string ToString() => \`$\${_amount.ToString("F2")}\`;
}

public class Quantity
{
    private readonly int _value;
    
    public Quantity(int value)
    {
        if (value <= 0)
            throw new ArgumentException("Quantity must be positive");
        _value = value;
    }
    
    public int Value => _value;
}

public class OrderLine
{
    private readonly Product _product;
    private readonly Quantity _quantity;
    
    public OrderLine(Product product, Quantity quantity)
    {
        _product = product ?? throw new ArgumentNullException(nameof(product));
        _quantity = quantity ?? throw new ArgumentNullException(nameof(quantity));
    }
    
    public Money CalculateTotal()
    {
        return _product.GetPrice().MultiplyBy(_quantity.Value);
    }
}

public class OrderLines
{
    private readonly List<OrderLine> _lines;
    
    public OrderLines()
    {
        _lines = new List<OrderLine>();
    }
    
    public void Add(OrderLine line)
    {
        if (line == null)
            throw new ArgumentNullException(nameof(line));
        _lines.Add(line);
    }
    
    public Money CalculateTotal()
    {
        Money total = new Money(0);
        foreach (var line in _lines)
        {
            total = total.Add(line.CalculateTotal());
        }
        return total;
    }
    
    public bool IsEmpty() => _lines.Count == 0;
}

public class Order
{
    private readonly OrderLines _lines;
    
    public Order()
    {
        _lines = new OrderLines();
    }
    
    public void AddProduct(Product product, Quantity quantity)
    {
        var line = new OrderLine(product, quantity);
        _lines.Add(line);
    }
    
    public Money GetTotal()
    {
        return _lines.CalculateTotal();
    }
    
    public bool CanBeProcessed()
    {
        return !_lines.IsEmpty();
    }
}

public class Product
{
    private readonly string _name;
    private readonly Money _price;
    
    public Product(string name, Money price)
    {
        if (string.IsNullOrWhiteSpace(name))
            throw new ArgumentException("Product name cannot be empty");
            
        _name = name;
        _price = price ?? throw new ArgumentNullException(nameof(price));
    }
    
    public Money GetPrice() => _price;
}
  </code></pre>

  <h2>When to Apply Object Calisthenics</h2>

  <h3>Use as Training Exercises</h3>
  <ul>
    <li>Practice katas and coding exercises with these constraints</li>
    <li>Code reviews focusing on these principles</li>
    <li>Team workshops and pair programming sessions</li>
  </ul>

  <h3>Adapt for Production Code</h3>
  <ul>
    <li>Not all rules need to be followed strictly in production</li>
    <li>Rule 8 (two instance variables) is often too restrictive</li>
    <li>Rule 9 (no getters/setters) may conflict with frameworks</li>
    <li>Use judgment based on context and team standards</li>
  </ul>

  <h3>Focus on the Spirit, Not the Letter</h3>
  <ul>
    <li>The goal is better design, not rigid rule-following</li>
    <li>Understand the principles behind each rule</li>
    <li>Apply the rules that make sense for your context</li>
    <li>Use them as guidelines, not absolute laws</li>
  </ul>

  <h2>Common Challenges and Solutions</h2>

  <h3>Challenge: Framework Requirements</h3>
  <p>Many frameworks require public properties or parameterless constructors, conflicting with rules 8 and 9.</p>
  <p><strong>Solution:</strong> Create separate DTOs for framework integration and map them to your domain objects.</p>

  <h3>Challenge: Performance Concerns</h3>
  <p>Creating many small objects might seem inefficient.</p>
  <p><strong>Solution:</strong> Modern JIT compilers optimize small objects well. Profile before optimizing.</p>

  <h3>Challenge: Team Resistance</h3>
  <p>Team members may resist the additional constraints.</p>
  <p><strong>Solution:</strong> Start with easier rules (1, 2, 6) and gradually introduce others. Use as learning exercises first.</p>

  <h2>Measuring Success</h2>

  <p>After practicing Object Calisthenics, you should see:</p>

  <ul>
    <li>Smaller average method size (5-10 lines)</li>
    <li>Smaller average class size (under 100 lines)</li>
    <li>Higher test coverage (easier to test small classes)</li>
    <li>Fewer bugs related to state management</li>
    <li>Faster onboarding for new team members</li>
    <li>More reusable components</li>
    <li>Better separation of concerns</li>
  </ul>

  <h2>Tools and Resources</h2>

  <h3>Static Analysis Tools</h3>
  <ul>
    <li><strong>SonarQube:</strong> Can enforce complexity and size limits</li>
    <li><strong>ReSharper:</strong> Detects code smells and suggests refactorings</li>
    <li><strong>StyleCop:</strong> Enforces coding standards</li>
    <li><strong>FxCop:</strong> Analyzes .NET assemblies for design issues</li>
  </ul>

  <h3>Learning Resources</h3>
  <ul>
    <li><a href="https://www.cs.helsinki.fi/u/luontola/tdd-2009/ext/ObjectCalisthenics.pdf" target="_blank" rel="noopener">Original Object Calisthenics Paper</a></li>
    <li><a href="https://williamdurand.fr/2013/06/03/object-calisthenics/" target="_blank" rel="noopener">William Durand's Object Calisthenics Guide</a></li>
    <li><a href="https://refactoring.guru/" target="_blank" rel="noopener">Refactoring Guru: Design Patterns and Principles</a></li>
    <li><a href="https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882" target="_blank" rel="noopener">Clean Code by Robert C. Martin</a></li>
  </ul>

  <h2>Conclusion</h2>

  <p>Object Calisthenics is a powerful training tool for improving your object-oriented design skills. While not all rules should be followed strictly in production code, practicing with these constraints helps you develop better design intuition and habits.</p>

  <p>Start by applying these rules in coding exercises and katas. As you become more comfortable, you'll find yourself naturally writing cleaner, more maintainable code even when you're not strictly following all nine rules.</p>

  <p>Remember: the goal is not perfection, but continuous improvement. Each rule addresses a specific code smell or design problem. Understanding the "why" behind each rule is more important than blindly following them.</p>

  <p><em>Practice these rules regularly, and you'll develop the muscle memory for writing excellent object-oriented code.</em></p>
  </div>
      `,
  category: "Programming",
  tags: ["Object-Oriented Programming", "Clean Code", "Design Principles", "Best Practices", "C#"],
  image: "/articles/ObjectCalisthenics.png",
  featured: true,
  status: "Published",
  date: "January 30, 2026",
};

export default objectCalisthenicsArticle;
