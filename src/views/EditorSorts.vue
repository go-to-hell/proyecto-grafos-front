<template>
  <div class="sorts-container">
    <!-- Botón de retorno -->
    <button class="btn back-button" @click="goBack">
      <span style="font-size: 20px; color: white;">&#8592;</span>
      Volver
    </button>

    <h2>Algoritmos de Ordenamiento</h2>

    <div class="input-container">
      <label for="inputNumbers">Ingrese los números (separados por coma) o genere aleatorio:</label>
      <input type="text" id="inputNumbers" v-model="inputNumbers">
      <button @click="openRandomArrayModal" class="btn btn-secondary" id="randomArrayButton">Generar Aleatorio</button>
      <button @click="openFileNameModal" class="btn btn-secondary" id="saveArrayButton">Guardar Arreglo</button>
      <button @click="loadArray" class="btn btn-secondary" id="loadArrayButton">Cargar Arreglo</button>
    </div>
    <div class="input-container">
      <label for="animationDelay">Delay de la animación:</label>
      <input type="range" id="animationDelay" v-model.number="animationDelay" min="0" max="1000" step="10"
        @input="updateDelay" />
      <span>{{ animationDelay }} ms</span>
    </div>

    <div class="buttons-container">
      <button @click="runSort('selectionSort')" :disabled="isSorting || isLoading" class="btn btn-primary">Selection
        Sort</button>
      <button @click="runSort('insertionSort')" :disabled="isSorting || isLoading" class="btn btn-primary">Insertion
        Sort</button>
      <button @click="runSort('mergeSort')" :disabled="isSorting || isLoading" class="btn btn-primary">Merge
        Sort</button>
      <button @click="runSort('shellSort')" :disabled="isSorting || isLoading" class="btn btn-primary">Shell
        Sort</button>
      <button @click="stopSort" :disabled="!isSorting" class="btn btn-danger">Detener</button>
      <button type="button" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip"
        data-bs-title="Ayuda."
        class="btn btn-dark bi bi-question-lg position-absolute end-0 me-5 rounded-circle py-2 px-3 d-none d-lg-block"
        @click="openHelp"></button>
    </div>

    <div v-if="sortedArray.length > 0" class="result-container">
      <h3 v-if="sortType">Resultado de {{ sortType }}</h3>
      <p>Pasos realizados: {{ stepCount }}</p>
      <div class="numbers-container">
        <div v-for="(value, index) in sortedArray" :key="index" class="number-container"
          :style="{ width: `${calculateElementWidth()}%` }">
          <div class="bar-container">
            <div class="bar" :style="{ height: `${calculateBarHeight(value)}px`, backgroundColor: 'red' }"></div>
          </div>
          <div :class="['box', comparingColor(index)]">
            <span style="color: darkred;">{{ value }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Show original array -->
    <div v-if="originalArray.length > 0" class="original-container">
      <h3>Arreglo Original</h3>
      <div class="numbers-container">
        <div v-for="(value, index) in originalArray" :key="index" class="number-container"
          :style="{ width: `${calculateElementWidth()}%` }">
          <div class="bar-container">
            <div class="bar" :style="{ height: `${calculateBarHeight(value)}px`, backgroundColor: 'red' }"></div>
          </div>
          <div class="box">
            <span style="color: darkred;">{{ value }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal to generate a random array-->
    <div class="modal" :class="{ 'd-block': randomArrayModal }">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Generar Arreglo Aleatorio</h5>
            <button type="button" class="btn-close" @click="closeRandomArrayModal"></button>
          </div>
          <div class="modal-body">
            <label>Ingrese la cantidad de elementos aleatorios:</label>
            <input type="number" v-model.number="randomArraySize" min="1">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="generateRandomArray">Generar</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal for saving the array -->
    <div class="modal" :class="{ 'd-block': fileNameModal }">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Guardar Arreglo</h5>
            <button type="button" class="btn-close" @click="closeFileNameModal"></button>
          </div>
          <div class="modal-body">
            <label>Ingrese el nombre del archivo:</label>
            <input type="text" v-model="fileName">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="saveArray">Guardar</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal para mostrar un mensaje de error -->
    <div class="modal" :class="{ 'd-block': errorModal }">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Error</h5>
            <button type="button" class="btn-close" @click="closeErrorModal"></button>
          </div>
          <div class="modal-body">
            <p>{{ errorMessage }}</p>
          </div>
        </div>
      </div>

      <!-- <button
      
    type="button"
    class="btn btn-dark bi bi-question-lg position-absolute end-0 me-5 rounded-circle py-2 px-3 d-none d-lg-block"
    @click="openHelp"
  ></button> -->
    </div>
    <!-- Modal para el Centro de Ayuda -->
    <div class="modal fade" id="helpCenterModal" tabindex="-1">
      <div class="modal-dialog modal-dialog-scrollable animate__animated animate__bounce">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Centro de Ayuda</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>
              ¡Hola! 😄 ¡Bienvenido al increíble mundo de los Sorts! 🌐✨ Aquí
              te dejamos una guía rápida para que domines esta herramienta como
              un pro:
            </p>
            <img src="../assets/Array.png" alt="Array" class="img-fluid" />
            <p>
              <strong>Arrays </strong><br />
              Ingresa en este espacio una lista de números (separados por comas) y deja que el programa se encargue. ¿No
              tienes una lista para anotar? Genera una aleatoria. ¿Tienes una ya guardada? Pues cargala en formato txt
              desde tu dispositivo.
            </p>
            <img src="../assets/sorts2.jpg" alt="Sorts" class="img-fluid" />
            <p>
              <strong>Sorts</strong><br />
              Una vez ya tienes tu array colocado, selecciona por que metodo de ordenamiento quieres que este se ordene
              presionando una de las opciones. La opción que elijas te mostrará una animacion de como se ordenan esos
              numeros mediante el metodo seleccionado y la cantidad de pasos que tardó en ordenarlo (a la cual puedes
              ajustarle la velocidad). ¿Te equivocaste de método? No hay problema, pulsa el botón de detener y aquí no
              habrá pasado NADA
            </p>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">OK</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap';
import * as bootstrap from "bootstrap";
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      inputNumbers: '',
      sortedArray: [],
      originalArray: [],
      sortType: '',
      currentIndex: -1,
      comparingIndices: [],
      isLoading: false,
      isSorting: false,
      stepCount: 0,
      randomArrayModal: false,
      helpCenterModal: false,
      randomArraySize: 10,
      fileNameModal: false,
      fileName: 'arrayData.txt',
      errorModal: false,
      errorMessage: '',
      animationDelay: 50, // Valor inicial para el retardo de la animación
    };
  },
  mounted() {
    const helpCenterModalElement = document.getElementById("helpCenterModal");
    this.helpCenterModal = new Modal(helpCenterModalElement);
  },
  methods: {
    async runSort(type) {
      if (this.isSorting || this.isLoading) return;

      this.isSorting = true;
      this.isLoading = true;

      if (!this.inputNumbers && !this.originalArray.length) {
        this.showErrorModal('Ingrese al menos un número o cargue un arreglo.');
        this.isSorting = false;
        this.isLoading = false;
        return;
      }

      const numbersArray = this.inputNumbers.split(',').map(num => parseInt(num.trim()));
      const arrayToSort = numbersArray.length ? numbersArray : this.originalArray.slice();

      if (!arrayToSort.every(num => !isNaN(num))) {
        this.showErrorModal('Ingrese números válidos separados por coma.');
        this.isSorting = false;
        this.isLoading = false;
        return;
      }

      this.stepCount = 0;
      this.sortType = type;
      this.sortedArray = [...arrayToSort]; // Reset array
      this.originalArray = [...arrayToSort]; // Save Original array
      await this.animateSort(type, this.sortedArray);
      this.isSorting = false; // Set the sort to finished
      this.isLoading = false;
    },
    async stopSort() {
      this.isSorting = false;
      this.sortedArray = [...this.originalArray]; // Restore original array
      this.isLoading = false; // Deactivate loading state
      this.stepCount = 0; // Restart counter
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
      Swal.fire({
        title: 'Ordenamiento Completo',
        text: `El ordenamiento ${type} ha sido completado.`,
        icon: 'success',
        confirmButtonText: 'OK'
      });
    },
    async mergeSort(arr, l, r) {
      if (l < r && this.isSorting) {
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

      while (i < left.length && j < right.length && this.isSorting) {
        this.comparingIndices = [k, l + i];
        await this.sleep(this.animationDelay); // Adjust delay as needed
        this.stepCount++;
        if (left[i] <= right[j]) {
          arr[k++] = left[i++];
        } else {
          arr[k++] = right[j++];
        }
        this.sortedArray = [...arr]; // Update sorted array for visualization
        await this.sleep(this.animationDelay); // Adjust delay as needed
        this.stepCount++;
      }

      while (i < left.length && this.isSorting) {
        arr[k++] = left[i++];
        this.sortedArray = [...arr]; // Update sorted array for visualization
        await this.sleep(this.animationDelay); // Adjust delay as needed
        this.stepCount++;
      }

      while (j < right.length && this.isSorting) {
        arr[k++] = right[j++];
        this.sortedArray = [...arr]; // Update sorted array for visualization
        await this.sleep(this.animationDelay); // Adjust delay as needed
        this.stepCount++;
      }

      this.comparingIndices = [];
      this.currentIndex = -1;
    },
    async selectionSort(arr) {
      for (let i = 0; i < arr.length - 1 && this.isSorting; i++) {
        let minIndex = i;
        this.currentIndex = i;
        await this.sleep(this.animationDelay); // Adjust delay as needed
        this.stepCount++;
        for (let j = i + 1; j < arr.length && this.isSorting; j++) {
          this.comparingIndices = [i, j];
          await this.sleep(this.animationDelay); // Adjust delay as needed
          this.stepCount++;
          if (arr[j] < arr[minIndex]) {
            minIndex = j;
          }
        }
        this.comparingIndices = [];
        if (minIndex !== i && this.isSorting) {
          this.swap(arr, i, minIndex);
          await this.sleep(this.animationDelay); // Adjust delay as needed
          this.stepCount++;
        }
      }
      this.currentIndex = -1;
    },
    async insertionSort(arr) {
      this.stepCount = 0;
      for (let i = 1; i < arr.length && this.isSorting; i++) {
        let current = arr[i];
        let j = i - 1;
        this.currentIndex = i;
        await this.sleep(this.animationDelay); // Adjust delay as needed
        this.stepCount++;
        while (j >= 0 && arr[j] > current && this.isSorting) {
          this.comparingIndices = [j, j + 1];
          await this.sleep(this.animationDelay); // Adjust delay as needed
          this.stepCount++;
          arr[j + 1] = arr[j];
          j--;
        }
        arr[j + 1] = current;
        await this.sleep(this.animationDelay); // Adjust delay as needed
        this.stepCount++;
      }
      this.currentIndex = -1;
      this.comparingIndices = []; // Restablecer los índices de comparación
    },
    async shellSort(arr) {
      const n = arr.length;
      this.stepCount = 0;
      for (let gap = Math.floor(n / 2); gap > 0 && this.isSorting; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n && this.isSorting; i++) {
          const temp = arr[i];
          let j = i;
          this.currentIndex = i;
          this.sortedArray = [...arr];
          this.stepCount++;
          await this.sleep(this.animationDelay);

          while (j >= gap && arr[j - gap] > temp && this.isSorting) {
            this.comparingIndices = [j, j - gap];
            this.sortedArray = [...arr];
            this.stepCount++;
            await this.sleep(this.animationDelay);
            arr[j] = arr[j - gap];
            j -= gap;
          }

          arr[j] = temp;
          this.comparingIndices = [];
          this.currentIndex = -1;
          this.sortedArray = [...arr];
          this.stepCount++;
          await this.sleep(this.animationDelay);
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
      this.$router.push('/sorts');
    },
    comparingColor(index) {
      if (this.comparingIndices.includes(index)) {
        return 'salmon'; // Color for comparing elements
      } else if (this.currentIndex === index) {
        return 'dark-red'; // Color for current element
      } else {
        return 'light-red'; // Default color
      }
    },
    openRandomArrayModal() {
      this.randomArrayModal = true;
    },
    closeRandomArrayModal() {
      this.randomArrayModal = false;
    },
    openFileNameModal() {
      this.fileNameModal = true;
    },
    closeFileNameModal() {
      this.fileNameModal = false;
    },
    showErrorModal(message) {
      this.errorMessage = message;
      this.errorModal = true;
    },
    closeErrorModal() {
      this.errorModal = false;
    },
    generateRandomArray() {
      const numberOfElements = this.randomArraySize;

      if (!isNaN(numberOfElements) && numberOfElements > 0) {
        const randomArray = [];
        for (let i = 0; i < numberOfElements; i++) {
          randomArray.push(Math.floor(Math.random() * 100)); // Generates Random numbers between 0 an 99
        }
        this.inputNumbers = randomArray.join(', '); // Update the arrays input bar with the random generated array
        this.closeRandomArrayModal();
      } else {
        this.showErrorModal(`Ingrese un número válido para generar un array aleatorio.`);
      }
    },
    saveArray() {
      const numbersArray = this.inputNumbers.split(',').map(num => parseInt(num.trim()));
      if (!numbersArray.every(num => !isNaN(num))) {
        this.showErrorModal('Ingrese números válidos separados por coma.');
        return;
      }

      const content = numbersArray.join(', ');
      const blob = new Blob([content], { type: 'text/plain' });

      // Asks the user to introduce the file name
      if (!this.fileName) {
        this.showErrorModal('Nombre de archivo no válido.');
        return;
      }

      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = this.fileName;
      a.click();

      URL.revokeObjectURL(a.href);
      this.closeFileNameModal();
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
          this.sortedArray = [...array];
          this.originalArray = [...array];
          this.inputNumbers = this.sortedArray.join(', '); //Updates the input bar with the loaded array
          this.$forceUpdate();
        };
        reader.readAsText(file);
      };
      input.click();
    },
    calculateBarHeight(value) {
      const maxValue = Math.max(...this.sortedArray);
      return (value / maxValue) * 200;
    },
    calculateElementWidth() {
      const totalElements = this.sortedArray.length || this.originalArray.length || 1;
      return 100 / totalElements;
    },
    openHelp() {
      this.helpCenterModal?.show();
    },
  },
};
</script>

<style scoped>
.sorts-container {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid darkred;
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
  margin-bottom: 10px;
}

.buttons-container {
  display: flex;
  justify-content: center;
}

.buttons-container button {
  margin: 0 10px;
  font-size: 16px;
  margin-top: 10px;
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
  border: 1px solid darkred;
  border-radius: 3px;
  font-size: 16px;
  display: flex;
  align-items: center;
}

.bar-container {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 200px;
}

.bar {
  width: 30px;
  background-color: red;
  transition: height 0.3s ease-in-out;
}

.back-button {
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: darkred;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
}

.dark-red {
  color: darkred;
}

.light-red {
  color: lightcoral;
}

.salmon {
  background-color: salmon;
}
</style>
