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
      response.data.forEach((edge) => {
        if (!this.nodes[edge.originNodeName]) {
          this.nodes[edge.originNodeName] = {
            name: edge.originNodeName,
            critical: edge.critical,
          };
        }
      });

      // Guarda los nodos críticos en el estado
      this.criticalNodes = Object.values(this.nodes)
        .filter((node) => node.critical)
        .map((node) => node.name)
        .sort();

      // Guarda los bordes críticos en el estado
      this.criticalEdges = response.data
        .filter((edge) => edge.critical)
        .map((edge) => edge.edgeId)
        .sort();

      // Guarda la información de slack y edgeId en una lista
      this.edgeSlackList = response.data.map((edge) => {
        return {
          edgeId: edge.edgeId,
          slack: edge.slack,
        };
      });
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
  },
});
