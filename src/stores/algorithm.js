// Importa las librerías necesarias
import { defineStore } from 'pinia';
import { useAuthStore } from './auth';

export const useAlgorithmStore = defineStore('algorithm', {

  // Estado inicial de la tienda
  state: () => ({
    nodes: {},
    edges: {},
    layouts: {},
    adjacencyMatrixDataOutput: null, // New state property
  }),

  // Acciones de la tienda
  actions: {
    // Función para cargar los datos del algoritmo desde el servidor
    async loadAdjMatrix(adjacencyMatrixDataInput) {
      const authStore = useAuthStore();
    
      const response = await fetch('http://localhost:8081/graph/adjMatrix', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${authStore.accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(adjacencyMatrixDataInput)
      });

      this.adjacencyMatrixDataOutput = await response.json();
    
      // Save the adjacency matrix data to the state
      this.adjacencyMatrixDataOutput = response.data;
    }
  }
});