import { defineStore } from "pinia";
import { useAuthStore } from "./auth";
import axios from "axios";

export const useAlgorithmStore = defineStore("algorithm", {
  state: () => ({
    nodes: {},
    edges: {},
    layouts: {},
    adjacencyMatrixDataOutput: null,
    johnsonCriticalPathDataOutput: null,
    criticalNodes: [],
    criticalEdges: [],
    edgeSlackList: [],
    assignmentDataOutput: null,
    northWestDataOutput: null,
    kruskalsTreeEdgesDataOutput: null,
    dijkstraDataOutput: null,
  }),

  actions: {
    async loadAdjMatrix(adjacencyMatrixDataInput) {
      const authStore = useAuthStore();

      const response = await axios.post(
        "http://localhost:8081/graph/adjMatrix",
        adjacencyMatrixDataInput,
        {
          headers: {
            Authorization: `Bearer ${authStore.accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      this.adjacencyMatrixDataOutput = response.data;
    },

    async loadJohnsonCriticalPath(johnsonCriticalPathDataInput) {
      const authStore = useAuthStore();
      const response = await axios.post(
        "http://localhost:8081/algorithms/johnsonCriticalPath",
        johnsonCriticalPathDataInput,
        {
          headers: {
            Authorization: `Bearer ${authStore.accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      this.johnsonCriticalPathDataOutput = response.data;

      // Actualiza los nodos en el estado
      this.nodes = {};
      response.data.activities.forEach((edge) => {
        if (!this.nodes[edge.originNodeName]) {
          this.nodes[edge.originNodeName] = {
            name: edge.originNodeName,
            critical: edge.critical,
          };
        }
      });

      // Obtiene nodos críticos de la respuesta
      this.criticalNodes = response.data.criticalPathNodes;

      // Guarda los nodos críticos en el estado
      /* this.criticalNodes = Object.values(this.nodes)
        .filter((node) => node.critical)
        .map((node) => node.name)
        .sort(); // Ordena los nodos críticos */

      // Obtiene los bordes críticos de la respuesta
      this.criticalEdges = response.data.criticalPathEdges;

      // Guarda los bordes críticos en el estado
      /* this.criticalEdges = response.data
        .filter((edge) => edge.critical)
        .map((edge) => edge.edgeId)
        .sort(); // Ordena los bordes críticos */

      console.log(this.criticalNodes);
      console.log(this.criticalEdges);

      // Guarda la información de slack y edgeId en una lista
      this.edgeSlackList = response.data.activities.map((edge) => {
        return {
          edgeId: edge.edgeId,
          slack: edge.slack,
          earlyStart: edge.earlyStart,
          earlyFinish: edge.earlyFinish,
          lateStart: edge.lateStart,
          lateFinish: edge.lateFinish,
        };
      });

      console.log(this.edgeSlackList);
    },

    getCriticalPath() {
      // Devuelve la ruta crítica como una cadena de texto
      return this.criticalNodes.join(" -> ");
    },

    getCriticalEdges() {
      // Devuelve los bordes críticos como un array
      return this.criticalEdges;
    },

    getEdgeSlackList() {
      // Devuelve la lista de slack y edgeId
      return this.edgeSlackList;
    },
    
    async loadAssignmentAlgorithm(assignmentDataOutput, maximize) {
      const authStore = useAuthStore();
      const response = await axios.post(
        `http://localhost:8081/algorithms/assignationOptimization?maximize=${maximize}`,
        assignmentDataOutput,
        {
          headers: {
            Authorization: `Bearer ${authStore.accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      this.assignmentDataOutput = response.data;
    },

    async loadNorthWestAlgorithm(northWestDataInput, maximize) {
      const authStore = useAuthStore();
      const response = await axios.post(
        `http://localhost:8000/transportation/?maximize=${maximize}`,
        northWestDataInput,
        {
          headers: {
            Authorization: `Bearer ${authStore.accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      this.northWestDataOutput = response.data;
    },
    async loadKruskalsTreeEdges(kruskalsTreeEdgesDataInput, maximize) {
      //console.log(kruskalsTreeEdgesDataInput);
      //console.log("maximize", maximize);
      const authStore = useAuthStore();
      const response = await axios.post(
        `http://localhost:8000/spanning_tree/?maximize=${maximize}`,  
        kruskalsTreeEdgesDataInput,
        {
          headers: {
            Authorization: `Bearer ${authStore.accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      this.kruskalsTreeEdgesDataOutput = response.data.paths;
    },
    getKruskalsTreeEdges() {
      return this.kruskalsTreeEdgesDataOutput;
  },
  
  async loadDijkstra(dijkstraDataInput, maximize, startNode, endNode) {
    try {
      const authStore = useAuthStore(); // Supongamos que useAuthStore() devuelve el objeto de autenticación necesario
  
      // Realiza una solicitud POST a la URL con los parámetros maximize y startNode
      console.log(dijkstraDataInput);
      console.log("maximize", maximize);
      console.log("startNode", startNode);
      
      try {
        const response = await axios.post(
          `http://localhost:8000/dijkstra/?startNode=${startNode}&endNode=${endNode}&maximize=${maximize}`,
          dijkstraDataInput,
          {
            headers: {
              Authorization: `Bearer ${authStore.accessToken}`,
              "Content-Type": "application/json",
            },
          }
        );

        // Guarda la salida de la respuesta en dijkstraDataOutput
        console.log("salida", response.data);
        this.dijkstraDataOutput = response.data;
      } catch (error) {
        // Si ocurre un error, imprime el mensaje de error y propaga el error para manejarlo en el componente
        console.error('Error in loadDijkstra:', error.message);
        throw error;
      }
      
    } catch (error) {
      // Si ocurre un error, imprime el mensaje de error y propaga el error para manejarlo en el componente
      console.error('Error en loadDijkstra:', error.message);
      throw error;
    }
  },
  
  // Función para obtener los nodos resultantes del algoritmo de Dijkstra
  getDijkstraNodes() {
    // Retorna los nodos (vertices) de la salida almacenada en dijkstraDataOutput
    return this.dijkstraDataOutput.nodes;
  },
  
  // Función para obtener las aristas (caminos) resultantes del algoritmo de Dijkstra
  getDijkstraEdges() {
    // Retorna las aristas (caminos) de la salida almacenada en dijkstraDataOutput
    return this.dijkstraDataOutput.targetPath;
  }
  },
});
