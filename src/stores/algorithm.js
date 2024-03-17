// Importa las librerías necesarias
import { defineStore } from 'pinia';
import axios from 'axios';

// Define tu tienda
const useAlgorithmStore = defineStore('algorithm', {

  // Estado inicial de la tienda
  state: () => ({
    nodes: {},
    edges: {},
    layouts: {}
  }),

  // Acciones de la tienda
  actions: {
    // Función para cargar los datos del algoritmo desde el servidor
    async loadAlgorithmData() {
      const response = await axios.post('http://localhost:8081/graph/adjMatrix', {
        headers: {
          'Authorization': 'Bearer your_token_here',
          'Content-Type': 'application/json'
        },
        data: {
          nodes: this.nodes,
          edges: this.edges,
          layouts: this.layouts
        }
      });

      // Actualiza el estado de la tienda con los datos recibidos
      this.nodes = response.data.nodes;
      this.edges = response.data.edges;
      this.layouts = response.data.layouts;
    }
  }
});

// Exporta la tienda para que pueda ser utilizada en tus componentes
export default useAlgorithmStore;