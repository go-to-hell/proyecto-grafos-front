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
    criticalEdges: [],
    assignmentDataOutput: null,
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

      // Guarda los bordes críticos en el estado
      this.criticalEdges = response.data
        .filter((edge) => edge.critical)
        .map((edge) => edge.edgeId);
    },

    getCriticalPath() {
      // Devuelve la ruta crítica como una cadena de texto
      return this.criticalEdges.join(" -> ");
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
  },
});
