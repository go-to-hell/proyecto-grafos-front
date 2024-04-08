<template>
  <div class="sorts-container">
    <!-- Botón de retorno -->
    <button class="back-button" @click="goBack">
      <span style="font-size: 20px; color: white;">&#8592;</span>
      Volver
    </button>

    <h2>Algoritmos de Ordenamiento</h2>

    <div class="input-container">
      <label for="inputNumbers">Ingrese hasta 30 números (separados por coma) o genere aleatorio:</label>
      <input type="text" id="inputNumbers" v-model="inputNumbers">
      <button @click="saveArray">Guardar Arreglo</button>
      <button @click="loadArray">Cargar Arreglo</button>
      <button @click="generateRandomArray">Generar Aleatorio</button>
    </div>

    <div class="buttons-container">
      <button @click="runSort('selectionSort')" :disabled="isLoading">Selection Sort</button>
      <button @click="runSort('insertionSort')" :disabled="isLoading">Insertion Sort</button>
      <button @click="runSort('mergeSort')" :disabled="isLoading">Merge Sort</button>
      <button @click="runSort('shellSort')" :disabled="isLoading">Shell Sort</button>
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
            <div class="bar" :style="{ height: `${calculateBarHeight(value)}px` }"></div>
          </div>
          <div :class="['box', comparingColor(index)]">
            <span>{{ value }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Sección para mostrar el arreglo original -->
    <div v-if="originalArray.length > 0" class="original-container">
      <h3>Arreglo Original</h3>
      <div class="numbers-container">
        <div
          v-for="(value, index) in originalArray"
          :key="index"
          class="number-container"
        >
          <div class="bar-container">
            <div class="bar" :style="{ height: `${calculateBarHeight(value)}px` }"></div>
          </div>
          <div class="box">
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
      originalArray: [],
      sortType: '',
      currentIndex: -1,
      comparingIndices: [],
      isLoading: false
    };
  },
  methods: {
    async runSort(type) {
      if (this.isLoading) return;

      if (!this.inputNumbers && !this.originalArray.length) {
        alert('Ingrese al menos un número o cargue un arreglo.');
        return;
      }

      const numbersArray = this.inputNumbers.split(',').map(num => parseInt(num.trim()));
      const arrayToSort = numbersArray.length ? numbersArray : this.originalArray.slice();

      if (!arrayToSort.every(num => !isNaN(num))) {
        alert('Ingrese números válidos separados por coma.');
        return;
      }

      this.isLoading = true;
      this.sortType = type;
      this.sortedArray = [...arrayToSort]; // Reset the array
      this.originalArray = [...arrayToSort.slice(0, 30)]; // Store original array with up to 30 numbers
      await this.animateSort(type, this.sortedArray);
      this.isLoading = false;
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
        await this.sleep(200); // Adjust delay as needed
        if (left[i] <= right[j]) {
          arr[k++] = left[i++];
        } else {
          arr[k++] = right[j++];
        }
        this.sortedArray = [...arr]; // Update sorted array for visualization
        await this.sleep(200); // Adjust delay as needed
      }

      while (i < left.length) {
        arr[k++] = left[i++];
        this.sortedArray = [...arr]; // Update sorted array for visualization
        await this.sleep(200); // Adjust delay as needed
      }

      while (j < right.length) {
        arr[k++] = right[j++];
        this.sortedArray = [...arr]; // Update sorted array for visualization
        await this.sleep(200); // Adjust delay as needed
      }

      this.comparingIndices = [];
      this.currentIndex = -1;
    },
    async selectionSort(arr) {
      for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        this.currentIndex = i;
        await this.sleep(200); // Adjust delay as needed
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
          await this.sleep(200); // Adjust delay as needed
        }
      }
      this.currentIndex = -1;
    },
    async insertionSort(arr) {
      for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        this.currentIndex = i;
        await this.sleep(200); // Adjust delay as needed
        while (j >= 0 && arr[j] > current) {
          this.comparingIndices = [j, j + 1];
          await this.sleep(200); // Adjust delay as needed
          arr[j + 1] = arr[j];
          j--;
        }
        arr[j + 1] = current;
        await this.sleep(200); // Adjust delay as needed
      }
      this.currentIndex = -1;
    },
    async shellSort(arr) {
      const n = arr.length;
      for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i++) {
          const temp = arr[i];
          let j = i;
          this.currentIndex = i;
          await this.sleep(200); // Adjust delay as needed
          while (j >= gap && arr[j - gap] > temp) {
            arr[j] = arr[j - gap];
            j -= gap;
            await this.sleep(200); // Adjust delay as needed
          }
          arr[j] = temp;
          await this.sleep(200); // Adjust delay as needed
        }
      }
      this.currentIndex = -1;
    },
    swap(arr, i, j) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
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
    },
    generateRandomArray() {
      const maxLimit = 30;
      const numberOfElements = parseInt(prompt(`Ingrese la cantidad de elementos aleatorios (máximo ${maxLimit}):`, '10'));

      if (!isNaN(numberOfElements) && numberOfElements > 0 && numberOfElements <= maxLimit) {
        const randomArray = [];
        for (let i = 0; i < numberOfElements; i++) {
          randomArray.push(Math.floor(Math.random() * 100)); // Genera números aleatorios entre 0 y 99
        }
        this.inputNumbers = randomArray.join(', '); // Actualiza el campo de entrada con el array aleatorio generado
      } else {
        alert(`Ingrese un número válido entre 1 y ${maxLimit} para generar un array aleatorio.`);
      }
    },
    calculateBarHeight(value) {
      const maxValue = Math.max(...this.sortedArray);
      return (value / maxValue) * 200; // Ajustar la altura máxima de la barra
    },
    saveArray() {
      const numbersArray = this.inputNumbers.split(',').map(num => parseInt(num.trim()));
      if (!numbersArray.every(num => !isNaN(num))) {
        alert('Ingrese números válidos separados por coma.');
        return;
      }

      const content = numbersArray.join(', ');
      const blob = new Blob([content], { type: 'text/plain' });

      // Solicitar al usuario que ingrese el nombre del archivo
      const fileName = prompt('Ingrese el nombre del archivo:', 'arrayData.txt');
      if (!fileName) {
        alert('Nombre de archivo no válido.');
        return;
      }

      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = fileName;
      a.click();

      URL.revokeObjectURL(a.href);
    },
    loadArray() {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'text/plain';
      input.onchange = async (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = async (event) => {
          const content = event.target.result;
          const array = content.split(',').map(num => parseInt(num.trim()));
          this.sortedArray = [...array.slice(0, 30)]; // Limit to 30 elements
          this.originalArray = [...array.slice(0, 30)]; // Almacenar el arreglo original también
          this.inputNumbers = this.sortedArray.join(', '); // Actualizar el campo de entrada con el arreglo cargado
          this.$forceUpdate(); // Forzar la actualización de la vista
        };
        reader.readAsText(file);
      };
      input.click();
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
.result-container,
.original-container {
  margin-bottom: 20px;
}

.input-container label,
.result-container h3,
.original-container h3 {
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
}

.red {
  background-color: red;
}

.yellow {
  background-color: yellow;
}

.lightblue {
  background-color: lightblue;
}
</style>
