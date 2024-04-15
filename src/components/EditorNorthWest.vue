<template>
  <div class="container my-2">
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
        <div
            class="table-responsive m-5 flip-card-front"
            v-if="algorithmStore.northWestDataOutput"
          >
            <table class="table table-hover table-bordered border-primary align-middle text-center">
              <thead class="table-info">
                <tr>
                  <th></th>
                  <th v-for="(value, key) in algorithmStore.northWestDataOutput.solution" :key="key">
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
      </div>
  </div>
</template>

<script>
import { reactive, toRefs, ref, watchEffect } from "vue";
import { useRouter } from "vue-router";
import { useAlgorithmStore } from "../stores/algorithm";

export default {
  props: {
    nodes: {
      type: Object,
      required: true,
    },
    edges: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { nodes, edges } = toRefs(props);

    const state = reactive({
      tableData: [],
      maximize: false,
    });

    watchEffect(() => {
      const edgeValues = Object.values(edges.value || {});
      const nodeValues = nodes.value || {};

      // Crear un mapa de nodos a filas
      const nodeToRow = new Map();
      const columnNodes = new Set();
      edgeValues.forEach(edge => {
        const sourceName = nodeValues[edge.source].name;
        const targetName = nodeValues[edge.target].name;
        if (!nodeToRow.has(sourceName)) {
          nodeToRow.set(sourceName, []);
        }
        nodeToRow.get(sourceName).push({ target: targetName, label: parseInt(edge.label, 10) });
        columnNodes.add(targetName);
      });

      // Crear la tabla
      const tableData = Array.from(nodeToRow.entries()).map(([source, edges]) => {
        const row = [source];
        edges.forEach(edge => {
          row.push(edge.label);
        });
        row.push(""); // Para la columna "Oferta"
        return row;
      });

      // Crear la fila de "Demanda"
      const demandRow = ["Demanda", ...new Array(tableData[0].length - 1).fill("")];

      state.tableData = [
        ["", ...Array.from(columnNodes), "Oferta"],
        ...tableData,
        demandRow,
      ];
    });

    const algorithmStore = useAlgorithmStore();

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


    return {
      ...toRefs(state),
      algorithmStore,
      solveNorthWest,
      addRow,
      addColumn,
      removeRow,
      removeColumn,
      toggleMaximize,
    };
  },
};
</script>