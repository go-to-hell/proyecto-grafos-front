<template>
<div class="container">
    <!-- More Functions Button -->
    <div class="d-flex flex-column top-0 end-0 m-1">
    <button
        type="button"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        data-bs-custom-class="custom-tooltip"
        data-bs-title="Ir atrás."
        class="btn btn-primary bi bi-arrow-left mb-1"
        @click="goBack"
    ></button>

    <button
        type="button"
        class="btn btn-success"
        @click="solveNorthWest"
    >
        Resolver
    </button>

    <div class="form-check form-switch">
        <input
        class="form-check-input"
        type="checkbox"
        id="maximizeSwitch"
        v-model="maximize"
        />
        <label class="form-check-label" for="maximizeSwitch">
        {{ maximize ? 'Minimizar' : 'Maximizar' }}
        </label>
    </div>
    </div>
    <table class="table table-striped table-bordered">
        <tr v-for="(row, rowIndex) in tableData" :key="rowIndex">
            <td v-for="(cell, cellIndex) in row" :key="cellIndex">
            <!-- Check if rowIndex is 0 or cellIndex is 0 -->
            <input v-if="rowIndex !== 0 && cellIndex !== 0" type="text" class="form-control" v-model="tableData[rowIndex][cellIndex]">
            <input v-else-if="rowIndex === 0 && cellIndex === row.length - 1" type="text" class="form-control" v-model="tableData[rowIndex][cellIndex]" value="Suministrar" readonly>
            <input v-else-if="rowIndex === row.length - 1 && cellIndex === 0" type="text" class="form-control" v-model="tableData[rowIndex][cellIndex]" value="Demanda" readonly>
            <input v-else-if="rowIndex === 0 && cellIndex === 0" type="text" class="form-control" v-model="tableData[rowIndex][cellIndex]" readonly>
            <input v-else type="text" class="form-control" v-model="tableData[rowIndex][cellIndex]">
            </td>
            <td>
            <button class="btn btn-danger" @click="removeRow(rowIndex)">Remove Row</button>
            </td>
        </tr>
        <tr>
            <td v-for="(cell, cellIndex) in tableData[0]" :key="cellIndex">
            <button class="btn btn-danger" @click="removeColumn(cellIndex)">Remove Column</button>
            </td>
        </tr>
    </table>
    <button class="btn btn-primary" @click="addRow">Add Row</button>
    <button class="btn btn-secondary" @click="addColumn">Add Column</button>
    <table class="table table-striped table-bordered" v-if="algorithmStore.northWestDataOutput">
        <tr>
            <th></th>
            <th v-for="(value, key) in algorithmStore.northWestDataOutput.solution.A" :key="key">{{ key }}</th>
        </tr>
        <tr v-for="(row, rowIndex) in algorithmStore.northWestDataOutput.solution" :key="`solution-row-${rowIndex}`">
            <th>{{ rowIndex }}</th>
            <td v-for="(cell, cellIndex) in row" :key="`solution-cell-${cellIndex}`">
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
            ["", "w", "x", "y", "z", "Suministrar"],
            ["a", 10, 10, 40, 10, 30],
            ["b", 40, 10, 30, 20, 50],
            ["c", 60, 30, 20, 10, 30],
            ["Demanda", 10, 40, 20, 40, 110],
        ],
        maximize: false
    });

    const algorithmStore = useAlgorithmStore();
    const router = useRouter();

    const goBack = () => {
        router.go(-1);
    };

    const solveNorthWest = () => {
        const targets = state.tableData[0].slice(1, -1);
        const origins = state.tableData.slice(1, -1).map(row => row[0]);
        const costs = state.tableData.slice(1, -1).map(row => row.slice(1, -1));
        const supplyArray = state.tableData.slice(1, -1).map(row => row[row.length - 1]);
        const demandArray = state.tableData[state.tableData.length - 1].slice(1, -1);

        // Create an object for "supply" and "demand"
        const supply = origins.reduce((obj, key, index) => ({...obj, [key]: supplyArray[index]}), {});
        const demand = targets.reduce((obj, key, index) => ({...obj, [key]: demandArray[index]}), {});

        // Create an object "northWestDataInput"
        const northWestDataInput = {
            Origins: origins,
            Targets: targets,
            supply: supply,
            demand: demand,
            costs: costs
        };

        // Pass "northWestDataInput" to the function "loadNorthWestAlgorithm"
        algorithmStore.loadNorthWestAlgorithm(northWestDataInput, state.maximize);
        console.log(algorithmStore.northWestDataOutput);
    };

    const addRow = () => {
        const columns = state.tableData[0].length;
        const newRow = new Array(columns).fill("");
        state.tableData.push(newRow);
    };

    const addColumn = () => {
        state.tableData.forEach(row => {
            row.push("");
        });
    };

    const removeRow = (index) => {
        state.tableData.splice(index, 1);
    };

    const removeColumn = (cellIndex) => {
        state.tableData.forEach(row => {
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
        toggleMaximize
    };
},
};
</script>
