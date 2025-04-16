import type { Article } from "@/lib/types";

const sampleArticles: Article[] = [
  {
    id: 1,
    title: "Algoritmos Aleatorizados",
    slug: "algoritmos-aleatorizados",
    excerpt:
      "A comprehensive guide to setting up your first Next.js 14 application with the App Router.",
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
  <h1>Já ouviu sobre "Algoritmos Aleatorizados"?</h1>
  
  </p>Você já se perguntou como sistemas de segurança conseguem ser imprevisíveis, ou como certos jogos geram desafios diferentes toda vez? Muitas dessas respostas estão nos algoritmos aleatorizados.<p>
  
  <p>Em termos gerais, algoritmos aleatorizados são algoritmos que incorporam um elemento de aleatoriedade como parte de sua lógica. Em vez de seguir um conjunto estrito de passos determinísticos (algoritmos que sempre produzem os mesmos resultados para as mesmas entradas), eles fazem escolhas aleatórias durante sua execução para decidir o próximo passo. Isso geralmente é implementado usando um gerador de números aleatórios.</p>

  <h2>Por que usar algoritmos aleatorizados?</h2>
  <p>Os algoritmos aleatorizados servem para diversos propósitos importantes:</p>
  <ul>
    <li><strong>Quebra de simetria:</strong> A aleatoriedade pode ser útil para evitar que diferentes partes de um sistema tomem as mesmas decisões simultaneamente, como em protocolos de rede.</li>
    <li><strong>Eficiência:</strong> Em muitas aplicações, algoritmos aleatorizados podem ser significativamente mais eficientes em termos de tempo de execução ou uso de memória do que os melhores algoritmos determinísticos conhecidos para o mesmo problema. Além disso, costumam ser mais simples de projetar e programar. Um exemplo é o algoritmo Quicksort aleatorizado, que escolhe os pivôs aleatoriamente e tem um tempo de execução esperado eficiente.</li>
    <li><strong>Aproximação de soluções:</strong> Alguns algoritmos aleatorizados, conhecidos como algoritmos de Monte Carlo, são usados para obter aproximações de soluções para problemas complexos através de amostragem aleatória. Esses algoritmos podem ter uma pequena probabilidade de retornar uma resposta incorreta. Se a probabilidade de erro for suficientemente baixa, a melhoria na eficiência pode valer a pena.</li>
    <li><strong>Verificação de igualdades:</strong> Algoritmos aleatorizados podem verificar igualdades algébricas ou matriciais de forma mais rápida do que os métodos determinísticos conhecidos.</li>
    <li><strong>Encontrar estruturas em grafos:</strong> Por exemplo, algoritmos aleatorizados podem ser usados para encontrar um conjunto de corte mínimo em um grafo.</li>
    <li><strong>Construção probabilística:</strong> O método probabilístico usa argumentos de aleatoriedade para provar a existência de certos objetos combinatórios, e essas provas podem às vezes ser convertidas em algoritmos aleatorizados eficientes para construir esses objetos.</li>
    <li><strong>Teste probabilístico:</strong> Em áreas como criptografia, algoritmos aleatorizados são usados para testes probabilísticos, como testes de primalidade.</li>
  </ul>

  <p>É importante notar que alguns algoritmos aleatorizados, chamados de algoritmos de <em>Las Vegas</em>, sempre retornam a resposta correta, mas seu tempo de execução é uma variável aleatória. Outros, os algoritmos de <em>Monte Carlo</em>, podem retornar uma resposta incorreta com uma certa probabilidade.</p>

  <h2>Exemplo: Randomized Quicksort</h2>
  <p>Deixo aqui um exemplo de Quicksort aleatorizado (Randomized Quicksort). Analisando o número esperado de comparações entre elementos durante a ordenação, chegamos que o número total de comparações depende de:</p>
  <ul>
    <li>Quão balanceadas são essas divisões;</li>
    <li>Quantas vezes cada elemento é comparado com os outros ao longo das chamadas recursivas.</li>
  </ul>

  <pre><code class="language-python">
import random

def randomized_quicksort(arr):
    if len(arr) <= 1:
        return arr

    # Escolhe um pivô aleatoriamente
    pivot_index = random.randint(0, len(arr) - 1)
    pivot = arr[pivot_index]

    # Divide a lista em três partes
    less = [x for x in arr if x < pivot]
    equal = [x for x in arr if x == pivot]
    greater = [x for x in arr if x > pivot]

    # Recursão
    return randomized_quicksort(less) + equal + randomized_quicksort(greater)

# Exemplo de uso
if __name__ == "__main__":
    lista = [9, 3, 7, 1, 4, 2, 8, 5, 6]
    print("Lista original:", lista)
    ordenada = randomized_quicksort(lista)
    print("Lista ordenada:", ordenada)
  </code></pre>

  <h2>Complexidade</h2>
  <p>Comentando sobre a complexidade de tempo do Quicksort, temos que a complexidade de tempo esperada do Quicksort aleatorizado para ordenar uma lista de <em>n</em> números distintos é de <code>O(n log n)</code>. Isso significa que, em média, o número de comparações realizadas pelo algoritmo cresce proporcionalmente a <em>n</em> multiplicado pelo logaritmo de <em>n</em>.</p>

  <p>No pior caso, o que é bem difícil de acontecer na versão aleatorizada, o Quicksort pode ter uma complexidade de tempo de <code>O(n^2)</code>. Isso ocorre, por exemplo, se o pivô escolhido repetidamente for um dos menores ou maiores elementos da lista. Embora exista um algoritmo determinístico relativamente complexo que encontra a mediana em tempo <code>O(n)</code>, o Quicksort aleatorizado é uma alternativa mais simples com um fator constante menor no tempo de execução linear.</p>

  <h2>Quando utilizar?</h2>
  <p>É interessante considerar o uso do Randomized Quicksort quando:</p>
  <ul>
    <li>Você quer desempenho médio confiável, mesmo com entradas difíceis.</li>
    <li>A entrada é muito variada ou imprevisível.</li>
    <li>O desempenho prático importa mais do que a estabilidade.</li>
    <li>Está em um sistema onde o espaço é importante (por ser in-place).</li>
  </ul>

  <p>Alguns cuidados precisam ser tomados, como evitar pseudo-aleatoriedade previsível se a segurança for um fator, ou chamadas repetidas para <code>random.randint()</code>, que adicionam um pequeno overhead, embora geralmente insignificante. Também é importante lembrar que o algoritmo não é estável.</p>

   <h2>Para saber mais:</h2>
<ul>
    <li>Probability and Computing de Michael Mitzenmacher.</li>
<ul>
  </div>

      `,
    category: "Ciencia da Computação",
    tags: ["Algoritmos", ""],
    image: "/articles/dados.jpg?height=400&width=800",
    featured: true,
    status: "Published",
    date: "April 16, 2025",
  },
];

export default sampleArticles;
