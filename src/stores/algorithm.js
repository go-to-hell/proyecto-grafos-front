// Importa las librerías necesarias
import { defineStore } from 'pinia';
import { useAuthStore } from './auth';
import axios from 'axios';

const useAlgorithmStore = defineStore('algorithm', {

  // Estado inicial de la tienda
  state: () => ({
    nodes: {},
    edges: {},
    layouts: {},
    adjacencyMatrixData: null, // New state property
  }),

  // Acciones de la tienda
  actions: {
    // Función para cargar los datos del algoritmo desde el servidor
    async loadAdjMatrix() {
      const authStore = useAuthStore();
    
      // Convertir la propiedad 'label' de cada 'edge' a un entero
      const edgesWithIntLabels = this.edges.map(edge => ({
        ...edge,
        label: parseInt(edge.label, 10)
      }));
    
      const response = await axios.post('http://localhost:8081/graph/adjMatrix', {
        headers: {
          'Authorization': `Bearer ${authStore.accessToken}`,
          'Content-Type': 'application/json'
        },
        data: {
          nodes: this.nodes,
          edges: edgesWithIntLabels,
          layouts: this.layouts
        }
      });
    
      // Save the adjacency matrix data to the state
      this.adjacencyMatrixData = response.data;
    }
  }
});

// Exporta la tienda para que pueda ser utilizada en tus componentes
export default useAlgorithmStore;