<template>
  <NavBar />
  <div class="container">
    <h1 class="mt-4 mb-4">¡Bienvenid@ a los grafos!</h1>
    <h5 class="mb-4">Seleccione el algoritmo que desee desarrollar:</h5>
    <div>
      <Card
        imageSource="https://real-statistics.com/wp-content/uploads/2021/01/network-diagram-nodes-edges.png"
        imageAlt="Grafos"
        cardTitle="Grafos"
        cardText="Los grafos son estructuras matemáticas que consisten en conjuntos de nodos (también llamados vértices) conectados entre sí por líneas (llamadas aristas). Estos nodos y aristas pueden representar una variedad de relaciones entre objetos o entidades. Los grafos se utilizan en una amplia gama de aplicaciones, desde representar redes de computadoras hasta modelar relaciones sociales o rutas de transporte. Su versatilidad los hace fundamentales en áreas como la informática, las matemáticas aplicadas y la ingeniería de sistemas."
        buttonText="Ir a Grafos"
        @button_clicked="goGraphs"
      />
      <Card
        imageSource="https://miro.medium.com/v2/resize:fit:828/format:webp/1*yL2HVntFTax9knfwnlbAKw.png"
        imageAlt="Algoritmo de Johnson"
        cardTitle="Algoritmo de Johnson"
        cardText="El algoritmo de Johnson encuentra los caminos más cortos entre todos los pares de nodos en un grafo ponderado, incluso con ciclos negativos. Utiliza Bellman-Ford para manejar ciclos negativos y luego ajusta los pesos de las aristas antes de usar Dijkstra para encontrar los caminos más cortos. Es eficiente para grafos densos y es una opción segura cuando hay posibilidad de ciclos negativos."
        buttonText="Ir a Johnson"
        @button_clicked="goJohnson"
      />
      <Card
        imageSource="https://i.stack.imgur.com/paL7Z.png"
        imageAlt="Algoritmo de Asignación"
        cardTitle="Algoritmo de Asignación"
        cardText="El algoritmo de asignación es un método para asignar recursos a tareas de manera óptima, maximizando un criterio específico. Se utiliza comúnmente en situaciones donde hay recursos limitados y tareas que deben ser completadas. Se basa en crear una matriz de costos o beneficios y encontrar la asignación que minimice o maximice este valor total. Es una herramienta clave para optimizar la eficiencia en la asignación de recursos."
        buttonText="Ir a Asignación"
        @button_clicked="goAssignation"
      />
      <Card
        imageSource=""
        imageAlt="Algoritmo North West"
        cardTitle="Algoritmo North West"
        cardText="Algoritmo North West"
        buttonText="Ir a North West"
        @button_clicked="goNorthWest"
      />
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Card from "../components/Card.vue";
import { useRouter } from "vue-router";

export default {
  components: {
    NavBar,
    Card,
  },
  data() {
    return {
      router: useRouter(),
    };
  },
  methods: {
    goGraphs() {
      this.router.push("/graphs");
    },
    goJohnson() {
      this.router.push("/johnson");
    },
    goAssignation() {
      this.router.push("/assignation");
    },
    goNorthWest() {
      this.router.push("/");
    },
  },
};
</script>

<style scoped>
.card {
  width: 50rem;
}
</style>
