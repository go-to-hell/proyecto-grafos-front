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
    <tr v-for="(row, index) in tableData" :key="index">
        <td v-for="(cell, cellIndex) in row" :key="cellIndex">
        <input type="text" class="form-control" v-model="tableData[index][cellIndex]">
        </td>
        <td>
        <button class="btn btn-danger" @click="removeRow(index)">Remove Row</button>
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
</div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
data() {
    return {
    tableData: [
        ["", "", ""], // Example initial row
        ["", "", ""]
    ],
    maximize: false
    };
},
methods: {
    addRow() {
        // Get the length of the first row to know how many columns there are
        const columns = this.tableData[0].length;
        // Create a new row with the same number of columns
        const newRow = new Array(columns).fill("");
        // Add the new row to the table data
        this.tableData.push(newRow);
    },
    addColumn() {
    this.tableData.forEach(row => {
        row.push("");
    });
    },
    removeRow(index) {
    this.tableData.splice(index, 1);
    },
    removeColumn(cellIndex) {
    this.tableData.forEach(row => {
        row.splice(cellIndex, 1);
    });
    },
    toggleMaximize() {
    this.maximize = !this.maximize;
    }
},
setup() {
    const router = useRouter();

    const goBack = () => {
    router.go(-1);
    };

    return {
    goBack,
    };
},
};
</script>

<style scoped>
.container {
padding: 20px;
background-color: #f8f9fa;
border-radius: 5px;
}
.table {
margin-top: 20px;
}
.btn {
margin-right: 10px;
margin-top: 10px;
}
.form-check {
display: flex;
align-items: center;
justify-content: center;
margin-top: 10px;
}
</style>
