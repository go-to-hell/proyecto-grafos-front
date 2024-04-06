<template>
  <div class="sorts-container">
    <!-- Botón de retorno -->
    <button class="back-button" @click="goBack">
      <span style="font-size: 20px; color: white;">&#8592;</span>
      Volver
    </button>

    <h2>Algoritmos de Ordenamiento</h2>

    <div class="input-container">
      <label for="inputNumbers">Ingrese los números (separados por coma):</label>
      <input type="text" id="inputNumbers" v-model="inputNumbers">
    </div>

    <div class="buttons-container">
      <button @click="runSort('selectionSort')">Selection Sort</button>
      <button @click="runSort('insertionSort')">Insertion Sort</button>
      <button @click="runSort('mergeSort')">Merge Sort</button>
      <button @click="runSort('shellSort')">Shell Sort</button>
    </div>

    <div v-if="sortedArray.length > 0" class="result-container">
      <h3 v-if="sortType">Resultado de {{ sortType }}</h3>
      <div class="numbers-container">
        <div
          v-for="(value, index) in sortedArray"
          :key="index"
          class="number-container"
        >
          <div class="bar-container">
            <div class="bar" :style="{ height: `${value * 10}px` }"></div>
          </div>
          <div class="box" :style="{ backgroundColor: comparingColor(index) }">
            <span>{{ value }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputNumbers: '',
      sortedArray: [],
      sortType: '',
      currentIndex: -1,
      comparingIndices: []
    };
  },
  methods: {
    async runSort(type) {
      if (!this.inputNumbers) {
        alert('Ingrese al menos un número.');
        return;
      }

      const numbersArray = this.inputNumbers.split(',').map(num => parseInt(num.trim()));

      if (!numbersArray.every(num => !isNaN(num))) {
        alert('Ingrese números válidos separados por coma.');
        return;
      }

      this.sortType = type;
      this.sortedArray = [...numbersArray]; // Reset the array
      await this.animateSort(type, this.sortedArray);
    },
    async animateSort(type, arr) {
      const n = arr.length;
      this.currentIndex = -1;
      this.comparingIndices = [];

      switch (type) {
        case 'selectionSort':
          await this.selectionSort(arr);
          break;
        case 'insertionSort':
          await this.insertionSort(arr);
          break;
        case 'mergeSort':
          await this.mergeSort(arr, 0, n - 1);
          break;
        case 'shellSort':
          await this.shellSort(arr);
          break;
        default:
          break;
      }
    },
    async selectionSort(arr) {
      for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        this.currentIndex = i;
        await this.sleep(500); // Adjust delay as needed
        for (let j = i + 1; j < arr.length; j++) {
          this.comparingIndices = [i, j];
          await this.sleep(200); // Adjust delay as needed
          if (arr[j] < arr[minIndex]) {
            minIndex = j;
          }
        }
        this.comparingIndices = [];
        if (minIndex !== i) {
          this.swap(arr, i, minIndex);
          await this.sleep(500); // Adjust delay as needed
        }
      }
      this.currentIndex = -1;
    },
    async insertionSort(arr) {
      for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        this.currentIndex = i;
        await this.sleep(500); // Adjust delay as needed
        while (j >= 0 && arr[j] > current) {
          this.comparingIndices = [j, j + 1];
          await this.sleep(200); // Adjust delay as needed
          arr[j + 1] = arr[j];
          j--;
        }
        arr[j + 1] = current;
        await this.sleep(500); // Adjust delay as needed
      }
      this.currentIndex = -1;
    },
    async mergeSort(arr, l, r) {
      if (l < r) {
        const mid = Math.floor((l + r) / 2);
        await this.mergeSort(arr, l, mid);
        await this.mergeSort(arr, mid + 1, r);
        await this.merge(arr, l, mid, r);
      }
    },
    async merge(arr, l, mid, r) {
      const left = arr.slice(l, mid + 1);
      const right = arr.slice(mid + 1, r + 1);
      let i = 0,
        j = 0,
        k = l;

      while (i < left.length && j < right.length) {
        this.comparingIndices = [k, l + i];
        await this.sleep(500); // Adjust delay as needed
        if (left[i] <= right[j]) {
          arr[k++] = left[i++];
        } else {
          arr[k++] = right[j++];
        }
        await this.sleep(500); // Adjust delay as needed
      }

      // Append remaining elements from left or right subarray
      while (i < left.length) {
        arr[k++] = left[i++];
        await this.sleep(500); // Adjust delay as needed
      }
      while (j < right.length) {
        arr[k++] = right[j++];
        await this.sleep(500); // Adjust delay as needed
      }
    },
    async shellSort(arr) {
      const n = arr.length;
      for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i++) {
          const temp = arr[i];
          let j = i;
          this.currentIndex = i;
          await this.sleep(500); // Adjust delay as needed
          while (j >= gap && arr[j - gap] > temp) {
            arr[j] = arr[j - gap];
            j -= gap;
            await this.sleep(500); // Adjust delay as needed
          }
          arr[j] = temp;
          await this.sleep(500); // Adjust delay as needed
        }
      }
      this.currentIndex = -1;
    },
    swap(arr, i, j) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      this.sortedArray = [...arr]; // Update the sorted array for visualization
    },
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    goBack() {
      this.$router.push('/graphs_home');
    },
    comparingColor(index) {
      if (this.comparingIndices.includes(index)) {
        return 'yellow'; // Color for comparing elements
      } else if (this.currentIndex === index) {
        return 'red'; // Color for current element
      } else {
        return 'lightblue'; // Default color
      }
    }
  }
};
</script>

<style scoped>
.sorts-container {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  position: relative;
}

.input-container,
.buttons-container,
.result-container {
  margin-bottom: 20px;
}

.input-container label,
.result-container h3 {
  display: block;
  margin-bottom: 10px;
}

.input-container input[type="text"] {
  width: 100%;
  padding: 8px;
  font-size: 16px;
}

.buttons-container {
  display: flex;
  justify-content: center;
}

.buttons-container button {
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.numbers-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.number-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
}

.box {
  padding: 8px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 16px;
  display: flex;
  align-items: center;
}

.bar-container {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 200px; /* Ajustar la altura máxima de la barra */
}

.bar {
  width: 30px;
  background-color: #007bff;
  transition: height 0.3s ease-in-out;
}

.back-button {
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>
