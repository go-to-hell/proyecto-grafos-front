// Importa las librerías necesarias
import { defineStore } from 'pinia';
import { useAuthStore } from './auth';
import axios from 'axios';

export const useAlgorithmStore = defineStore('algorithm', {

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
      /* const edgesWithIntLabels = this.edges.map(edge => ({
        ...edge,
        label: parseInt(edge.label, 10)
      })); */
      const body = {
        nodes: this.nodes,
        edges: this.edges,
        layouts: this.layouts
      };

      console.log('body', JSON.stringify(body));
    
      const response = await fetch('http://localhost:8081/graph/adjMatrix', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${authStore.accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
    
      // Save the adjacency matrix data to the state
      this.adjacencyMatrixData = response.data;
    }
  }
});