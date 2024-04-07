<template>
  <div class="container my-4">
    <div class="position-absolute top-0 start-0 m-1">
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
    <div class="d-flex justify-content-between mb-4">
      <div>
        <h1>Algoritmo North West</h1>
        <h5>Para empezar, llene la siguiente tabla de costos:</h5>
      </div>
      <div class="d-block text-center">
        <div class="form-check form-switch mb-3">
          <input
            class="form-check-input"
            type="checkbox"
            id="maximizeSwitch"
            v-model="maximize"
          />
          <label class="form-check-label" for="maximizeSwitch">
            {{ maximize ? "Minimizar" : "Maximizar" }}
          </label>
        </div>
        <button type="button" class="btn btn-success" @click="solveNorthWest">
          Resolver
        </button>
      </div>
    </div>
    <div class="table-responsive">
      <table
        class="table table-striped bg-light table-bordered border-info align-middle text-center"
      >
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
              class="text-center my-auto"
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
              class="text-center my-auto"
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
              class="form-control text-center"
              v-model="tableData[rowIndex][cellIndex]"
            />
          </td>
          <td class="bg-info-subtle">
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
            class="bg-info-subtle"
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
    </div>
    <button class="btn btn-primary me-4" @click="addRow">Añadir Fila</button>
    <button class="btn btn-secondary" @click="addColumn">Añadir Columna</button>
    <table
      class="table table-striped table-bordered"
      v-if="algorithmStore.northWestDataOutput"
    >
      <tr>
        <th></th>
        <th
          v-for="(value, key) in algorithmStore.northWestDataOutput.solution.A"
          :key="key"
        >
          {{ key }}
        </th>
      </tr>
      <tr
        v-for="(row, rowIndex) in algorithmStore.northWestDataOutput.solution"
        :key="`solution-row-${rowIndex}`"
      >
        <th>{{ rowIndex }}</th>
        <td
          v-for="(cell, cellIndex) in row"
          :key="`solution-cell-${cellIndex}`"
        >
          {{ cell }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { useAlgorithmStore } from "../stores/algorithm";
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

    const algorithmStore = useAlgorithmStore();
    const router = useRouter();

    const goBack = () => {
      router.go(-1);
    };

    const solveNorthWest = () => {
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
      algorithmStore.loadNorthWestAlgorithm(northWestDataInput, state.maximize);
      console.log(algorithmStore.northWestDataOutput);
    };

    const addRow = () => {
      const columns = state.tableData[0].length;
      const newRow = new Array(columns).fill("");
      state.tableData.length = state.tableData.length + 1;
      state.tableData[state.tableData.length - 1] =
        state.tableData[state.tableData.length - 2];
      state.tableData[state.tableData.length - 2] = newRow;
      //   state.tableData.push(newRow);
    };

    const addColumn = () => {
      for (let i = 0; i < state.tableData[0].length; i++) {
        state.tableData[i][state.tableData[i].length] =
          state.tableData[i][state.tableData[i].length - 1];
        state.tableData[i][state.tableData[i].length - 2] = "";
      }
      //   state.tableData.forEach((row) => {
      //     console.log(row.length);
      //   });
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
      goBack,
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
