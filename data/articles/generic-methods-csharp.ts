import type { Article } from "@/lib/types";

const genericMethodsCSharpArticle: Article = {
  id: 5,
  title: "Generic Methods in C#: Type-Safe Reusable Code",
  slug: "generic-methods-csharp-type-safe-reusable-code",
  excerpt: "Understanding how generic methods enable type-safe, reusable code without sacrificing performance",
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

  .article-content ul, .article-content ol {
    margin: 1rem 0 1rem 1.5rem;
    padding-left: 1rem;
  }

  .article-content ul {
    list-style-type: disc;
  }

  .article-content ol {
    list-style-type: decimal;
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

  .article-content img {
    max-width: 100%;
    height: auto;
    margin: 2rem auto;
    display: block;
    border-radius: 8px;
  }
</style>

    <div class="article-content">
  <h1>Generic Methods in C#: Type-Safe Reusable Code</h1>
  
  <p><strong>Generic methods</strong> in C# allow you to write a single method that can work with different data types while maintaining type safety at compile time. Instead of writing multiple overloaded methods or using the <code>object</code> type (which requires casting and loses type safety), generics provide a powerful way to create flexible, reusable code.</p>

  <h2>What Are Generic Methods?</h2>

  <p>A generic method is a method that declares one or more type parameters, which are placeholders for actual types that will be specified when the method is called. The type parameter is defined using angle brackets <code>&lt;T&gt;</code> after the method name.</p>

  <pre><code class="language-csharp">
public T GetFirst&lt;T&gt;(T[] array)
{
    if (array == null || array.Length == 0)
        throw new ArgumentException("Array cannot be null or empty");
    
    return array[0];
}

// Usage
int[] numbers = { 1, 2, 3, 4, 5 };
int firstNumber = GetFirst(numbers);  // T is inferred as int

string[] names = { "Alice", "Bob", "Charlie" };
string firstName = GetFirst(names);   // T is inferred as string
  </code></pre>

  <h2>Why Use Generic Methods?</h2>

  <h3>1. Type Safety</h3>
  <p>Generic methods provide compile-time type checking, preventing runtime type errors:</p>

  <pre><code class="language-csharp">
// Without generics - requires casting and loses type safety
public object GetFirstObject(object[] array)
{
    return array[0];
}

int value = (int)GetFirstObject(numbers);  // Runtime error if wrong type

// With generics - type-safe
public T GetFirst&lt;T&gt;(T[] array)
{
    return array[0];
}

int value = GetFirst(numbers);  // Compile-time type checking
  </code></pre>

  <h3>2. Code Reusability</h3>
  <p>Write once, use with any type - no need for multiple overloaded methods:</p>

  <pre><code class="language-csharp">
// Instead of writing multiple methods:
public void SwapInt(ref int a, ref int b) { }
public void SwapString(ref string a, ref string b) { }
public void SwapDouble(ref double a, ref double b) { }

// Write one generic method:
public void Swap&lt;T&gt;(ref T a, ref T b)
{
    T temp = a;
    a = b;
    b = temp;
}
  </code></pre>

  <h3>3. Performance</h3>
  <p>Generics avoid boxing/unboxing overhead for value types, unlike using <code>object</code>:</p>

  <pre><code class="language-csharp">
// Boxing occurs - performance penalty
public void AddToList(object item)
{
    list.Add(item);  // Boxing for value types
}

// No boxing - better performance
public void AddToList&lt;T&gt;(T item)
{
    list.Add(item);  // No boxing needed
}
  </code></pre>

  <h2>Practical Examples</h2>

  <h3>Example 1: Generic Search Method</h3>

  <pre><code class="language-csharp">
public class SearchUtility
{
    public static int FindIndex&lt;T&gt;(T[] array, T value) where T : IEquatable&lt;T&gt;
    {
        for (int i = 0; i &lt; array.Length; i++)
        {
            if (array[i].Equals(value))
                return i;
        }
        return -1;
    }
}

// Usage
int[] numbers = { 10, 20, 30, 40, 50 };
int index = SearchUtility.FindIndex(numbers, 30);  // Returns 2

string[] words = { "apple", "banana", "cherry" };
int wordIndex = SearchUtility.FindIndex(words, "banana");  // Returns 1
  </code></pre>

  <h3>Example 2: Generic Comparison Method</h3>

  <pre><code class="language-csharp">
public class ComparisonHelper
{
    public static T GetMax&lt;T&gt;(T a, T b) where T : IComparable&lt;T&gt;
    {
        return a.CompareTo(b) &gt; 0 ? a : b;
    }

    public static T GetMin&lt;T&gt;(T a, T b) where T : IComparable&lt;T&gt;
    {
        return a.CompareTo(b) &lt; 0 ? a : b;
    }
}

// Usage
int maxNumber = ComparisonHelper.GetMax(10, 20);        // Returns 20
string maxString = ComparisonHelper.GetMax("apple", "banana");  // Returns "banana"
DateTime maxDate = ComparisonHelper.GetMax(DateTime.Now, DateTime.Today);
  </code></pre>

  <h3>Example 3: Generic Data Transformation</h3>

  <pre><code class="language-csharp">
public class DataTransformer
{
    public static TOutput[] Transform&lt;TInput, TOutput&gt;(
        TInput[] input, 
        Func&lt;TInput, TOutput&gt; converter)
    {
        TOutput[] output = new TOutput[input.Length];
        
        for (int i = 0; i &lt; input.Length; i++)
        {
            output[i] = converter(input[i]);
        }
        
        return output;
    }
}

// Usage
int[] numbers = { 1, 2, 3, 4, 5 };

// Convert int to string
string[] strings = DataTransformer.Transform(numbers, n => n.ToString());

// Convert int to double
double[] doubles = DataTransformer.Transform(numbers, n => n * 1.5);
  </code></pre>

  <h3>Example 4: Generic Repository Pattern</h3>

  <pre><code class="language-csharp">
public interface IRepository&lt;T&gt; where T : class
{
    T GetById(int id);
    IEnumerable&lt;T&gt; GetAll();
    void Add(T entity);
    void Update(T entity);
    void Delete(int id);
}

public class Repository&lt;T&gt; : IRepository&lt;T&gt; where T : class
{
    private readonly List&lt;T&gt; _data = new List&lt;T&gt;();

    public T GetById(int id)
    {
        // Implementation
        return _data.FirstOrDefault();
    }

    public IEnumerable&lt;T&gt; GetAll()
    {
        return _data;
    }

    public void Add(T entity)
    {
        _data.Add(entity);
    }

    public void Update(T entity)
    {
        // Implementation
    }

    public void Delete(int id)
    {
        // Implementation
    }
}

// Usage
var userRepository = new Repository&lt;User&gt;();
var productRepository = new Repository&lt;Product&gt;();
  </code></pre>

  <h2>Generic Constraints</h2>

  <p>Constraints allow you to specify requirements for type parameters:</p>

  <pre><code class="language-csharp">
// where T : struct - T must be a value type
public T? GetNullable&lt;T&gt;(bool hasValue, T value) where T : struct
{
    return hasValue ? value : null;
}

// where T : class - T must be a reference type
public T CreateInstance&lt;T&gt;() where T : class, new()
{
    return new T();
}

// where T : IComparable - T must implement IComparable
public T GetLargest&lt;T&gt;(T a, T b) where T : IComparable&lt;T&gt;
{
    return a.CompareTo(b) &gt; 0 ? a : b;
}

// Multiple constraints
public void Process&lt;T&gt;(T item) 
    where T : class, IDisposable, new()
{
    using (T instance = new T())
    {
        // Process
    }
}
  </code></pre>

  <h2>Advantages of Generic Methods</h2>

  <ul>
    <li><strong>Type Safety:</strong> Compile-time type checking prevents runtime errors</li>
    <li><strong>Code Reusability:</strong> Single implementation works with multiple types</li>
    <li><strong>Performance:</strong> No boxing/unboxing for value types</li>
    <li><strong>Maintainability:</strong> Less code duplication means easier maintenance</li>
    <li><strong>IntelliSense Support:</strong> Better IDE support and autocomplete</li>
    <li><strong>Refactoring Safety:</strong> Type changes are caught at compile time</li>
  </ul>

  <h2>Disadvantages and Limitations</h2>

  <ul>
    <li><strong>Learning Curve:</strong> Requires understanding of generic concepts and constraints</li>
    <li><strong>Complexity:</strong> Can make code harder to read for beginners</li>
    <li><strong>Debugging:</strong> Generic code can be more challenging to debug</li>
    <li><strong>Constraint Limitations:</strong> Cannot constrain to specific value types (e.g., only numeric types)</li>
    <li><strong>Code Bloat:</strong> JIT compiler generates specialized code for each type, increasing memory usage</li>
    <li><strong>Reflection Complexity:</strong> Working with generic types via reflection is more complex</li>
  </ul>

  <h2>When to Use Generic Methods</h2>

  <p>Use generic methods when:</p>

  <ul>
    <li>You need to write algorithms that work with multiple types</li>
    <li>Type safety is important (compile-time checking)</li>
    <li>You want to avoid code duplication across similar methods</li>
    <li>Performance is critical (avoiding boxing/unboxing)</li>
    <li>You're building reusable libraries or frameworks</li>
    <li>You need to work with collections of different types</li>
  </ul>

  <p>Avoid generic methods when:</p>

  <ul>
    <li>The logic is specific to one type only</li>
    <li>The added complexity doesn't justify the benefits</li>
    <li>You need type-specific behavior that can't be abstracted</li>
    <li>The team lacks experience with generics</li>
  </ul>

  <h2>Performance Impact</h2>

  <h3>Positive Performance Aspects</h3>

  <ul>
    <li><strong>No Boxing/Unboxing:</strong> Value types remain on the stack, avoiding heap allocation</li>
    <li><strong>Type Specialization:</strong> JIT compiler creates optimized code for each type</li>
    <li><strong>Inline Optimization:</strong> Generic methods can be inlined by the JIT compiler</li>
  </ul>

  <pre><code class="language-csharp">
// Performance comparison
public class PerformanceTest
{
    // Using object - requires boxing
    public static void AddToListObject(List&lt;object&gt; list, int value)
    {
        list.Add(value);  // Boxing occurs here
    }

    // Using generics - no boxing
    public static void AddToListGeneric&lt;T&gt;(List&lt;T&gt; list, T value)
    {
        list.Add(value);  // No boxing
    }
}

// Benchmark results (approximate):
// AddToListObject:   ~50ns per operation (with boxing)
// AddToListGeneric:  ~10ns per operation (no boxing)
  </code></pre>

  <h3>Potential Performance Considerations</h3>

  <ul>
    <li><strong>Code Size:</strong> Each type instantiation generates separate IL code</li>
    <li><strong>JIT Compilation Time:</strong> First call to a generic method with a new type requires JIT compilation</li>
    <li><strong>Memory Usage:</strong> Multiple type instantiations increase memory footprint</li>
  </ul>

  <p>However, these considerations are typically negligible compared to the benefits, especially for value types.</p>

  <h2>Best Practices</h2>

  <ol>
    <li><strong>Use Meaningful Type Parameter Names:</strong> Use <code>T</code> for single parameters, descriptive names for multiple (<code>TKey</code>, <code>TValue</code>)</li>
    <li><strong>Apply Appropriate Constraints:</strong> Use constraints to enable specific operations on type parameters</li>
    <li><strong>Consider Type Inference:</strong> Let the compiler infer types when possible</li>
    <li><strong>Document Generic Methods:</strong> Clearly explain type parameter requirements and constraints</li>
    <li><strong>Test with Multiple Types:</strong> Ensure your generic method works correctly with various types</li>
    <li><strong>Avoid Over-Engineering:</strong> Don't use generics if a simple solution suffices</li>
  </ol>

  <h2>Common Patterns</h2>

  <h3>Factory Pattern with Generics</h3>

  <pre><code class="language-csharp">
public class Factory
{
    public static T Create&lt;T&gt;() where T : new()
    {
        return new T();
    }

    public static T Create&lt;T&gt;(params object[] args) where T : class
    {
        return (T)Activator.CreateInstance(typeof(T), args);
    }
}
  </code></pre>

  <h3>Null-Safe Operations</h3>

  <pre><code class="language-csharp">
public static class NullSafeExtensions
{
    public static TResult SafeGet&lt;TSource, TResult&gt;(
        this TSource source,
        Func&lt;TSource, TResult&gt; selector,
        TResult defaultValue = default)
        where TSource : class
    {
        return source != null ? selector(source) : defaultValue;
    }
}

// Usage
string name = person.SafeGet(p => p.Name, "Unknown");
  </code></pre>

  <h2>Further Reading and Resources</h2>

  <ul>
    <li><a href="https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/generics/" target="_blank" rel="noopener">Microsoft Docs: Generics in C#</a></li>
    <li><a href="https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/generics/generic-methods" target="_blank" rel="noopener">Microsoft Docs: Generic Methods</a></li>
    <li><a href="https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/generics/constraints-on-type-parameters" target="_blank" rel="noopener">Microsoft Docs: Constraints on Type Parameters</a></li>
    <li><a href="https://www.amazon.com/CLR-via-Fourth-Developer-Reference/dp/0735667454" target="_blank" rel="noopener">CLR via C# by Jeffrey Richter</a></li>
    <li><a href="https://github.com/dotnet/runtime" target="_blank" rel="noopener">.NET Runtime Source Code</a> - See how generics are implemented in the BCL</li>
  </ul>

  <p><em>Generic methods are a cornerstone of modern C# development, enabling developers to write flexible, type-safe, and performant code. Understanding when and how to use them effectively is essential for building robust applications.</em></p>
  </div>
      `,
  category: "Programming",
  tags: ["C#", ".NET", "Generics", "Type Safety", "Performance"],
  image: "/articles/generic_method.png",
  featured: true,
  status: "Published",
  date: "January 14, 2026",
};

export default genericMethodsCSharpArticle;
