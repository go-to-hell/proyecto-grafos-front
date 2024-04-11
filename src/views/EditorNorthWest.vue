<template>
  <div class="container my-2">
    <div class="top-0 start-0 m-1">
      <button
        type="button"
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        data-bs-custom-class="custom-tooltip"
        data-bs-title="Ir atrás."
        class="btn btn-primary bi bi-arrow-left mb-1"
        @click="goBack"
      ></button>
    </div>
    <div class="d-flex justify-content-between align-items-center mb-4 mt-3">
      <div>
        <h1 class="text-primary">Algoritmo North West</h1>
        <h5 class="text-secondary">Para empezar, llene la siguiente tabla de costos:</h5>
      </div>
      <div class="d-block text-center">
        <div class="form-check form-switch mb-3">
          <input class="form-check-input" type="checkbox" id="maximizeSwitch" v-model="maximize" />
          <label class="form-check-label text-info" for="maximizeSwitch">
            {{ maximize ? "Minimizar" : "Maximizar" }}
          </label>
        </div>
        <button type="button" class="btn btn-success" @click="solveNorthWest">
          Resolver
        </button>
      </div>
    </div>
    <div class="table-responsive m-5">
      <table class="table table-hover bg-light table-bordered border-primary align-middle text-center">
        <tr v-for="(row, rowIndex) in tableData" :key="rowIndex">
          <td v-for="(cell, cellIndex) in row" :key="cellIndex">
            <!-- Check if rowIndex is 0 or cellIndex is 0 -->
            <input
              v-if="rowIndex !== 0 && cellIndex !== 0"
              type="text"
              class="form-control text-center"
              v-model="tableData[rowIndex][cellIndex]"
            />
            <p
              v-else-if="cellIndex === tableData[rowIndex].length - 1"
              class="text-center my-auto bg-warning"
              v-text="tableData[rowIndex][cellIndex]"
            ></p>
            <input
              v-else-if="rowIndex === 0 && cellIndex === row.length - 1"
              type="text"
              class="form-control text-center"
              v-model="tableData[rowIndex][cellIndex]"
              value="Oferta"
              readonly
            />
            <p
              v-else-if="rowIndex === tableData.length - 1"
              class="text-center my-auto bg-warning"
              v-text="tableData[rowIndex][cellIndex]"
            ></p>
            <input
              v-else-if="rowIndex === row.length - 1 && cellIndex === 0"
              type="text"
              class="form-control text-center"
              v-model="tableData[rowIndex][cellIndex]"
              value="Demanda"
              readonly
            />
            <input
              v-else-if="rowIndex === 0 && cellIndex === 0"
              type="text"
              class="form-control text-center"
              v-model="tableData[rowIndex][cellIndex]"
              readonly
            />
            <input
              v-else
              type="text"
              class="form-control text-center bg-success text-white"
              v-model="tableData[rowIndex][cellIndex]"
            />
          </td>
          <td class="bg-info">
            <button
              type="button"
              class="btn btn-danger bi-x-circle"
              v-if="rowIndex !== 0 && rowIndex !== tableData.length - 1"
              @click="removeRow(rowIndex)"
            ></button>
          </td>
        </tr>
        <tr>
          <td
            v-for="(cell, cellIndex) in tableData[0]"
            :key="cellIndex"
            class="bg-info"
          >
            <button
              type="button"
              class="btn btn-danger bi-x-circle"
              v-if="cellIndex !== 0 && cellIndex !== tableData[0].length - 1"
              @click="removeColumn(cellIndex)"
            ></button>
          </td>
        </tr>
      </table>
      <button class="btn btn-primary me-4" @click="addRow">Añadir Fila</button>
      <button class="btn btn-secondary" @click="addColumn">Añadir Columna</button>
    </div>

    <h1 class="mt-5" v-if="algorithmStore.northWestDataOutput">Solución:</h1>
      <div class="mb-4" v-if="algorithmStore.northWestDataOutput">
        <h4>Estado: {{ algorithmStore.northWestDataOutput.status }}</h4>
        <h4>Objetivo: {{ algorithmStore.northWestDataOutput.objective }}</h4>
        <button type="button" class="btn btn-primary rounded-circle btn-lg m-2" @click="toggleCardView">
          <i class="bi bi-arrow-repeat"></i>
        </button>
      </div>
        <div class="flip-card-container">
          <div class="flip-card">
            <div
              class="table-responsive m-5 flip-card-front"
              v-if="algorithmStore.northWestDataOutput"
            >
              <table class="table table-hover table-bordered border-primary align-middle text-center">
                <thead class="table-info">
                  <tr>
                    <th></th>
                    <th v-for="(value, key) in algorithmStore.northWestDataOutput.solution.a" :key="key">
                      {{ key }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(row, rowIndex) in algorithmStore.northWestDataOutput.solution" :key="`solution-row-${rowIndex}`">
                    <th class="table-warning">{{ rowIndex }}</th>
                    <td v-for="(cell, cellIndex) in row" :key="`solution-cell-${cellIndex}`">
                      {{ cell }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="flip-card-back">
              <div class="border border-dark">
                <v-network-graph
                  :nodes="nodes"
                  :edges="edges"
                  :layouts="layouts"
                  :configs="configs"
                  :layers="layers"
                >
                <template #edge-label="{ edge, ...slotProps }">
                  <v-edge-label :text="edge.label" align="center" vertical-align="above" v-bind="slotProps" />
                </template>
                </v-network-graph>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, ref } from "vue";
import { useRouter } from "vue-router";
import { useAlgorithmStore } from "../stores/algorithm";
import * as vNG from "v-network-graph";

export default {
  setup() {
    const state = reactive({
      tableData: [
        ["", "w", "x", "y", "z", "Oferta"],
        ["a", 10, 10, 40, 10, 30],
        ["b", 40, 10, 30, 20, 50],
        ["c", 60, 30, 20, 10, 30],
        ["Demanda", 10, 40, 20, 40, 110],
      ],
      maximize: false,
    });

    const layers = {
      badge: "nodes",
    };

    const nodesData = {
      node1: { name: "Node 1", active: true },
      node2: { name: "Node 2", active: false },
      node3: { name: "Node 3", active: true },
      node4: { name: "Node 4", active: false },
    };

    const edgesData = {
      edge1: { source: "node1", target: "node2", label: "1 Gbps" },
      edge2: { source: "node2", target: "node3", label: "100 Mbps" },
      edge3: { source: "node2", target: "node4", label: "100 Mbps" },
    };

    const layoutsData = {
      nodes: {
        node1: { x: 0, y: 0 },
        node2: { x: 80, y: 80 },
        node3: { x: 160, y: 0 },
        node4: { x: 240, y: 80 },
      },
    };

    const configsData = vNG.defineConfigs({
      view: {
        panEnabled: false,
        zoomEnabled: false,
        boxSelectionEnabled: false,
      },
      node: {
        normal: {
          type: "rect",
          width: 32,
          height: 32,
          borderRadius: 6,
          color: "#ffffff",
          strokeWidth: 1,
          strokeColor: "#888888",
        },
        label: {
          visible: true,
          fontSize: 15,
          lineHeight: 1.1,
          color: "#000000",
          margin: 4,
          direction: "south",
          text: "name",
          directionAutoAdjustment: true,
          background: {
            visible: false,
            color: "#ffffff",
            padding: {
              vertical: 1,
              horizontal: 4,
            },
            borderRadius: 2,
          },
        },
        hover: {
          color: "#eeeeee",
        },
      },
      edge: {
        selectable: true,
        normal: {
          width: 3,
          color: "#14a2b8",
          dasharray: "0",
          linecap: "butt",
          animate: false,
          animationSpeed: 50,
        },
        hover: {
          width: 4,
          color: "#3355bb",
          dasharray: "0",
          linecap: "butt",
          animate: false,
          animationSpeed: 50,
        },
        selected: {
          width: 3,
          color: "#dd8800",
          dasharray: "6",
          linecap: "round",
          animate: false,
          animationSpeed: 50,
        },
        gap: 5,
        type: "straight",
        margin: 2,
        marker: {
          source: {
            type: "none",
            width: 4,
            height: 4,
            margin: -1,
            offset: 0,
            units: "strokeWidth",
            color: null,
          },
          target: {
            type: "arrow",
            width: 4,
            height: 4,
            margin: -1,
            offset: 0,
            units: "strokeWidth",
            color: null,
          },
        },
      },
    });

    let nodes = reactive({ ...nodesData });
    let layouts = ref({ ...layoutsData });
    let edges = edgesData;
    const configs = configsData;

    const algorithmStore = useAlgorithmStore();
    const router = useRouter();

    const goBack = () => {
      router.go(-1);
    };

    const solveNorthWest = async () => {
      const targets = state.tableData[0].slice(1, -1);
      const origins = state.tableData.slice(1, -1).map((row) => row[0]);
      const costs = state.tableData.slice(1, -1).map((row) => row.slice(1, -1));
      const supplyArray = state.tableData
        .slice(1, -1)
        .map((row) => row[row.length - 1]);
      const demandArray = state.tableData[state.tableData.length - 1].slice(
        1,
        -1
      );

      // Create an object for "supply" and "demand"
      const supply = origins.reduce(
        (obj, key, index) => ({ ...obj, [key]: supplyArray[index] }),
        {}
      );
      const demand = targets.reduce(
        (obj, key, index) => ({ ...obj, [key]: demandArray[index] }),
        {}
      );

      // Create an object "northWestDataInput"
      const northWestDataInput = {
        Origins: origins,
        Targets: targets,
        supply: supply,
        demand: demand,
        costs: costs,
      };

      // Pass "northWestDataInput" to the function "loadNorthWestAlgorithm"
      await algorithmStore.loadNorthWestAlgorithm(
        northWestDataInput,
        state.maximize
      );
      console.log(
        "North West Data Output:",
        algorithmStore.northWestDataOutput
      );

      for (const nodeId in nodes) {
        delete nodes[nodeId];
      }

      for (const edgeId in edges) {
        delete edges[edgeId];
      }

      nextNodeIndex.value = 1;
      nextEdgeIndex.value = 1;
      // Actualizar los nodos y las aristas con la salida del algoritmo
      const solution = algorithmStore.northWestDataOutput.solution;
      let nodes = {};
      let edges = {};
      let nodeIndex = 1;
      let edgeIndex = 1;

      // Crear un nodo para cada fila y columna
      for (const row in solution) {
        for (const column in solution[row]) {
          const value = solution[row][column];
          const node = `node${nodeIndex}`;
          nodes[node] = { name: `${row}-${column}`, active: true };
          nodeIndex++;

          // Crear una arista para cada celda con un valor
          if (value) {
            const edge = `edge${edgeIndex}`;
            edges[edge] = {
              source: `node${row}`,
              target: `node${column}`,
              label: value,
            };
            edgeIndex++;
          }
        }
      }

      // Actualizar los nodos y las aristas en el estado
      Object.assign(state.nodes, nodes);
      Object.assign(state.edges, edges);

      // Calcular la disposición de los nodos
      let layout = calculateLayout(nodes);

      // Actualizar la disposición en el estado
      Object.assign(state.layouts.nodes, layout);
    };

    // Función para calcular la disposición de los nodos
    const calculateLayout = (nodes) => {
      let layout = {};
      const keys = Object.keys(nodes);
      const length = keys.length;
      const gap = 100 / (length + 1);

      // Colocar los nodos en dos columnas
      for (let i = 0; i < length; i++) {
        const key = keys[i];
        const x = i < length / 2 ? 0 : 100;
        const y = gap * (i % (length / 2) + 1);
        layout[key] = { x, y };
      }

      return layout;
    };

    const addRow = () => {
      const columns = state.tableData[0].length;
      const newRow = new Array(columns).fill("");
      state.tableData.length = state.tableData.length + 1;
      state.tableData[state.tableData.length - 1] =
        state.tableData[state.tableData.length - 2];
      state.tableData[state.tableData.length - 2] = newRow;
    };

    const addColumn = () => {
      for (let i = 0; i < state.tableData[0].length; i++) {
        state.tableData[i][state.tableData[i].length] =
          state.tableData[i][state.tableData[i].length - 1];
        state.tableData[i][state.tableData[i].length - 2] = "";
      }
    };

    const removeRow = (index) => {
      state.tableData.splice(index, 1);
    };

    const removeColumn = (cellIndex) => {
      state.tableData.forEach((row) => {
        row.splice(cellIndex, 1);
      });
    };

    const toggleMaximize = () => {
      state.maximize = !state.maximize;
    };

    const toggleCardView = () => {
      const card = document.querySelector('.flip-card');
      card.classList.toggle('flipped');
    };

    return {
      ...toRefs(state),
      goBack,
      algorithmStore,
      solveNorthWest,
      addRow,
      addColumn,
      removeRow,
      removeColumn,
      toggleMaximize,
      nodes,
      edges,
      layouts,
      configs,
      nodesData,
      edgesData,
      layoutsData,
      configsData,
      layers,
      toggleCardView,
      calculateLayout,
    };
  },
};
</script>

<style scoped>
.flip-card-container {
  perspective: 1000px; /* Permite perspectiva 3D */
}

.flip-card {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card.flipped {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  backface-visibility: hidden;
  padding: 20px; /* Agrega margen alrededor del contenido */
}

.flip-card-front {
  z-index: 2;
}

.flip-card-back {
  transform: rotateY(180deg);
}

</style>