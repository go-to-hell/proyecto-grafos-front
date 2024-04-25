<template>
  <NavBar />
  <div class="container">
    <h5 class="mb-4 mt-3">Seleccione el algoritmo que desee desarrollar:</h5>
    <div class="bg-info-subtle py-3">
      <Card
        :imageSource="0"
        imageAlt="Grafos"
        cardTitle="Grafos"
        cardText="Los grafos son estructuras matemáticas que consisten en conjuntos de nodos (también llamados vértices) conectados entre sí por líneas (llamadas aristas). Estos nodos y aristas pueden representar una variedad de relaciones entre objetos o entidades. Los grafos se utilizan en una amplia gama de aplicaciones, desde representar redes de computadoras hasta modelar relaciones sociales o rutas de transporte. Su versatilidad los hace fundamentales en áreas como la informática, las matemáticas aplicadas y la ingeniería de sistemas."
        buttonText="Ir a Grafos"
        @button_clicked="goGraphs"
      />
      <Card
        :imageSource="1"
        imageAlt="Algoritmo de Johnson"
        cardTitle="Algoritmo de Johnson"
        cardText="El algoritmo de Johnson encuentra los caminos más cortos entre todos los pares de nodos en un grafo ponderado, incluso con ciclos negativos. Utiliza Bellman-Ford para manejar ciclos negativos y luego ajusta los pesos de las aristas antes de usar Dijkstra para encontrar los caminos más cortos. Es eficiente para grafos densos y es una opción segura cuando hay posibilidad de ciclos negativos."
        buttonText="Ir a Johnson"
        @button_clicked="goJohnson"
      />
      <Card
        :imageSource="2"
        imageAlt="Algoritmo de Asignación"
        cardTitle="Algoritmo de Asignación"
        cardText="El algoritmo de asignación es un método para asignar recursos a tareas de manera óptima, maximizando un criterio específico. Se utiliza comúnmente en situaciones donde hay recursos limitados y tareas que deben ser completadas. Se basa en crear una matriz de costos o beneficios y encontrar la asignación que minimice o maximice este valor total. Es una herramienta clave para optimizar la eficiencia en la asignación de recursos."
        buttonText="Ir a Asignación"
        @button_clicked="goAssignment"
      />
      <Card
        :imageSource="3"
        imageAlt="Algoritmo North West"
        cardTitle="Algoritmo North West"
        cardText="El algoritmo North West es una técnica básica para resolver problemas de asignación. Comienza en la esquina superior izquierda de una matriz de costos y asigna recursos secuencialmente hacia abajo y hacia la derecha, siguiendo las restricciones de oferta y demanda. Es una forma simple de obtener una solución inicial para problemas logísticos y de distribución."
        buttonText="Ir a North West"
        @button_clicked="goNorthWest"
      />
      <Card
        :imageSource="4"
        imageAlt="Algoritmos de Ordenamiento"
        cardTitle="Algoritmos de Ordenamiento"
        cardText="Selection Sort: Encuentra el elemento más pequeño y lo coloca al principio de la lista. Luego, busca el siguiente elemento más pequeño y lo coloca después del primero. Repite este proceso hasta que la lista esté ordenada. Insertion Sort: Toma cada elemento de la lista y lo inserta en su posición correcta en una sublista ordenada, expandiendo gradualmente la sublista ordenada hasta que toda la lista esté ordenada. Merge Sort: Divide la lista en mitades, ordena cada mitad por separado y luego combina las mitades ordenadas en una sola lista ordenada. Shell Sort: Es una mejora del algoritmo de inserción que divide la lista en subgrupos más pequeños y los ordena utilizando el algoritmo de inserción. Luego, combina estos subgrupos y realiza otro paso de ordenamiento. Este proceso continúa hasta que toda la lista esté ordenada. Shell Sort es eficiente para listas grandes y está diseñado para mejorar el rendimiento del algoritmo de inserción al reducir el número de intercambios necesarios."
        buttonText="Ir a Ordenamiento"
        @button_clicked="goSorts"
      />
      <Card
        :imageSource="5"
        imageAlt="Algoritmo Árboles Binarios"
        cardTitle="Algoritmo Árboles Binarios"
        cardText="Son estructuras de datos en forma de árbol donde cada nodo tiene, como máximo, dos hijos: uno izquierdo y uno derecho. El nodo superior se conoce como raíz. Los nodos sin hijos se llaman hojas. Los árboles binarios se utilizan para organizar y almacenar datos de manera jerárquica, lo que permite búsquedas eficientes, inserciones y eliminaciones. Además, pueden ser de varios tipos, como árboles binarios de búsqueda (BST), árboles AVL, árboles rojo-negro, entre otros, cada uno con diferentes reglas y características de balanceo y ordenamiento."
        buttonText="Ir a Árboles Binarios"
        @button_clicked="goBinaryTrees"
      />
      <Card
        :imageSource="6"
        imageAlt="Algoritmo de Kruskal"
        cardTitle="Algoritmo de Kruskal"
        cardText="El algoritmo de Kruskal es un algoritmo voraz utilizado para encontrar el árbol de expansión mínima de un grafo conexo y no dirigido.<br>Este árbol de expansión mínima conecta todos los vértices del grafo con el mínimo costo total de aristas.<br>El algoritmo sigue estos pasos:<br>1. Ordenar las aristas por peso.<br>2. Inicializar el árbol de expansión mínima.<br>3. Recorrer las aristas ordenadas.<br>4. Agregar aristas al árbol si no forman ciclos.<br>5. Repetir hasta conectar todos los vértices.<br>Este algoritmo garantiza encontrar el árbol de expansión mínima al seleccionar la arista de menor peso en cada paso sin formar ciclos.<br>La complejidad temporal suele ser O(E log E), donde E es el número de aristas en el grafo, debido al paso de ordenar las aristas por peso."
        buttonText="Ir a Kruskal"
        @button_clicked="goKruskal"
      />
      <Card
        :imageSource="7"
        imageAlt="Algoritmo de Dijkstra"
        cardTitle="Algoritmo de Dijkstra"
        cardText="El algoritmo de Dijkstra es un método para encontrar el camino más corto desde un vértice de inicio dado hacia todos los demás vértices en un grafo con pesos no negativos.<br>El algoritmo funciona mediante la construcción de una estructura de datos llamada 'cola de prioridad' (generalmente implementada con un heap binario) para mantener un conjunto de vértices cuyas distancias más cortas desde el vértice de inicio ya se han determinado.<br>El algoritmo procede de la siguiente manera:<br>1. Inicializar la distancia del vértice de inicio como 0 y todas las demás distancias como infinito.<br>2. Agregar todos los vértices al conjunto de vértices no visitados.<br>3. Mientras queden vértices no visitados:<br>   a. Seleccionar el vértice no visitado con la distancia más corta.<br>   b. Para cada vecino del vértice seleccionado, actualizar la distancia más corta si la distancia actual desde el vértice de inicio, pasando por el vértice seleccionado, es menor que la distancia registrada anteriormente.<br>   c. Marcar el vértice seleccionado como visitado.<br>4. Una vez que todos los vértices hayan sido visitados, el camino más corto desde el vértice de inicio hacia todos los demás vértices estará determinado.<br>El algoritmo de Dijkstra es óptimo para grafos con pesos no negativos y puede encontrar el camino más corto desde un único vértice a todos los demás en tiempo O(V log V + E), donde V es el número de vértices y E es el número de aristas en el grafo."
        buttonText="Ir a Dijkstra"
        @button_clicked="goDijkstra"
      />
      <Card
        :imageSource="7"
        imageAlt="Competencias"
        cardTitle="Competencias"
        cardText="En esta sección podrás competir con otros usuarios en la resolución de problemas de algoritmos y estructuras de datos. Cada competencia consta de varios problemas que deberás resolver en un tiempo limitado. Al finalizar, podrás ver tu puntaje y compararlo con otros participantes. ¡Demuestra tus habilidades y compite para ser el mejor!"
        buttonText="Ir a Competencias"
        @button_clicked="goCompet"
      />
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Card from "../components/Card.vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/auth";

export default {
  components: {
    NavBar,
    Card,
  },
  data() {
    return {
      router: useRouter(),
      authStore: useAuthStore(),
    };
  },
  methods: {
    goGraphs() {
      this.router.push("/graphs");
    },
    goJohnson() {
      this.router.push("/johnson");
    },
    goAssignment() {
      this.router.push("/assignment");
    },
    goNorthWest() {
      this.router.push("/north_west");
    },
    goSorts() {
      this.router.push("/sorts");
    },
    goBinaryTrees() {
      this.router.push("/binary_trees");
    },
    goKruskal() {
      this.router.push("/kruskal");
    },
    goDijkstra() {
      this.router.push("/dijkstra");
    },
    goCompet() {
      this.router.push("/compet");
    }
  },
};
</script>
