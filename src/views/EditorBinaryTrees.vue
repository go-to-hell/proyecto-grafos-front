<template>
  <div class="my-4">
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
    <div class="container d-flex justify-content-between mb-4 mt-5 mt-md-0">
      <div>
        <h1>Árboles Binarios</h1>
        <h5>Ingrese números para ir armando su árbol binario:</h5>
      </div>
      <div class="my-auto">
        <input
          type="radio"
          class="btn-check"
          name="options-outlined"
          id="binary-tree-preOrder"
          autocomplete="off"
          value="preorder"
          v-model="binaryTreeOrder"
        />
        <label
          class="btn btn-outline-success me-3"
          for="binary-tree-preOrder"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-custom-class="custom-tooltip"
          data-bs-title="PreOrden."
        >
          PreOrden
        </label>
        <input
          type="radio"
          class="btn-check"
          name="options-outlined"
          id="binary-tree-inOrder"
          autocomplete="off"
          value="inorder"
          v-model="binaryTreeOrder"
        />
        <label
          class="btn btn-outline-warning me-3"
          for="binary-tree-inOrder"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-custom-class="custom-tooltip"
          data-bs-title="InOrden."
        >
          InOrden
        </label>
        <input
          type="radio"
          class="btn-check"
          name="options-outlined"
          id="binary-tree-postOrder"
          autocomplete="off"
          value="postorder"
          v-model="binaryTreeOrder"
        />
        <label
          class="btn btn-outline-danger me-3"
          for="binary-tree-postOrder"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-custom-class="custom-tooltip"
          data-bs-title="PostOrden."
        >
          PostOrden
        </label>
      </div>
    </div>
    <!-- Delete Modal -->
    <div
      class="modal fade"
      id="confirmDeleteModal"
      tabindex="-1"
      aria-labelledby="confirmDeleteModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="confirmDeleteModalLabel">
              Confirmar Eliminación
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p>¿Está seguro de querer borrar el elemento?</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancelar
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="confirmDelete"
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Clear All Modal -->
    <div
      class="modal fade"
      id="confirmClearAllModal"
      tabindex="-1"
      aria-labelledby="confirmClearAllModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="confirmClearAllModalLabel">
              Confirmar Limpieza
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p>¿Está seguro de querer limpiar todo?</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancelar
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="confirmClearAll"
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Help Center Modal -->
    <div class="modal fade" tabindex="-1" id="helpCenterModal">
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Centro de Ayuda</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p>
              ¡Hola! 😄 ¡Bienvenido al increíble mundo de los grafos! 🌐✨ Aquí
              te dejamos una guía rápida para que domines esta herramienta como
              un pro:
            </p>
            <p>✨ ¡Bienvenido a tu Editor de Grafos Favorito! 🚀</p>
            <img
              src="../assets/AgregarN.jpg"
              alt="AgregarN"
              class="img-fluid"
            />
            <p>
              <strong>Agregar Nodos 🧩</strong><br />
              ¡Haz clic en el botón "Agregar" y comienza a crear tu obra
              maestra! Luego, simplemente dale clic en el área de dibujo para
              soltar esos nodos como si fueran confeti.
            </p>
            <img
              src="../assets/EliminarN.jpg"
              alt="EliminarN"
              class="img-fluid"
            />
            <p>
              <strong>Eliminar Nodos 🗑️</strong><br />
              ¿Te arrepentiste de ese nodo? Haz clic en él y presiona "Eliminar"
              o simplemente usa la mágica tecla "Delete" en tu teclado.
            </p>
            <p>
              <strong>Agregar Aristas ➡️</strong><br />
              Haz clic en dos nodos y crea una conexión con el botón "Agregar
              Arista". ¡Conecta tus ideas de manera brillante!
            </p>
            <img
              src="../assets/EliminarA.jpg"
              alt="EliminarA"
              class="img-fluid"
            />
            <p>
              <strong>Eliminar Aristas 🗡️</strong><br />
              Selecciona una arista y presiona "Eliminar Arista" o utiliza la
              tecla "Delete". ¡Desconecta sin esfuerzo tus conexiones menos
              útiles!
            </p>
            <img
              src="../assets/Direccion.jpg"
              alt="Direccion"
              class="img-fluid"
            />
            <p>
              <strong>Dirección de Aristas 🚦</strong><br />
              Selecciona una arista y elige su destino con los botones de
              dirección. ¡Controla el flujo de la conexión con estilo!
            </p>
            <img src="../assets/CyA.jpg" alt="CyA" class="img-fluid" />
            <p>
              <strong>Centrar y Ajustar 🔄</strong><br />
              ¡No más caos desordenado! Utiliza los botones para centrar y
              ajustar tu grafo y obtener una vista panorámica.
            </p>
            <img src="../assets/Zoom.jpg" alt="Zoom" class="img-fluid" />
            <p>
              <strong>Zoom In & Zoom Out 🔍</strong><br />
              Acércate a la acción con "Zoom In" o toma una vista general con
              "Zoom Out". ¡Tu grafo, tu perspectiva!
            </p>
            <img
              src="../assets/Seleccion.jpg"
              alt="Seleccion"
              class="img-fluid"
            />
            <p>
              <strong>Iniciar Selección 🎯</strong><br />
              ¿Quieres destacar varios nodos a la vez? Activa "Iniciar
              Selección" y desata tu poder de selección masiva.
            </p>
            <img
              src="../assets/Renombrar.jpg"
              alt="Renombrar"
              class="img-fluid"
            />
            <p>
              <strong>Renombrar Nodos y Aristas 🏷️</strong><br />
              Dale a tus nodos y aristas nombres épicos. Haz clic en ellos,
              edita el nombre y sé el narrador de tu propio grafo.
            </p>
            <p>
              <strong>Enlazar Nodos con Shift+Alt+e 🌐</strong><br />
              Selecciona dos nodos y mantén presionadas las teclas Shift+Alt+e
              para enlazarlos con una arista.
            </p>
            <img src="../assets/GyA.jpg" alt="GyA" class="img-fluid" />
            <p>
              <strong>Guardar y Abrir 📂</strong><br />
              No dejes que tus obras maestras se pierdan. Guarda y abre archivos
              localmente para retomar tus épicas creaciones.
            </p>
            <p>
              <strong>Matriz de Adyacencia 📊</strong><br />
              Haz clic en "Matriz de Adyacencia" para explorar la estructura
              subyacente de tu obra maestra en forma de matriz.
            </p>
            <p>
              ¡Y eso es básicamente todo! Ahora, ve y conquista el mundo de los
              grafos con tu creatividad desbordante. ¡Buena suerte, maestro del
              grafo! 🚀🎨
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- File name to save -->
    <div class="modal" tabindex="-1" id="fileNameToSave">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Guardar archivo</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <input
              type="text"
              class="form-control"
              v-model="fileNameToSave"
              placeholder="Ingrese el nombre del archivo a guardar"
            />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancelar
            </button>
            <button type="button" class="btn btn-primary" @click="saveGraph">
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Bootstrap alert for saveGraph success/error -->
    <div style="width: fit-content; margin: auto">
      <div
        v-if="saveGraphError"
        class="alert alert-danger alert-dismissible fade show mt-2"
        role="alert"
      >
        Error al guardar el grafo.
        <button
          type="button"
          class="btn-close"
          @click="saveGraphError = false"
        ></button>
      </div>

      <!-- Bootstrap alert for loadGraph success/error -->
      <div
        v-if="loadGraphSuccess"
        class="alert alert-success alert-dismissible fade show mt-2"
        role="alert"
      >
        El grafo ha sido cargado exitosamente.
        <button
          type="button"
          class="btn-close"
          @click="loadGraphSuccess = false"
        ></button>
      </div>
      <div
        v-if="loadGraphError"
        class="alert alert-danger alert-dismissible fade show mt-2"
        role="alert"
      >
        Error al cargar el grafo.
        <button
          type="button"
          class="btn-close"
          @click="loadGraphError = false"
        ></button>
      </div>

      <!-- Bootstrap alert to show File Name Saved -->
      <div
        v-if="fileNameSaved"
        class="alert alert-info alert-dismissible fade show mt-2"
        role="alert"
      >
        Archivo seleccionado: {{ fileNameSaved }}
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>

    <div class="editor-container">
      <div class="container editor-content border border-5">
        <!-- Editor Content -->
        <v-network-graph
          tabindex="0"
          ref="graph"
          v-model:zoom-level="zoomLevel"
          v-model:selected-nodes="selectedNodes"
          v-model:selected-edges="selectedEdges"
          :nodes="nodes"
          :edges="edges"
          :layouts="layouts"
          :configs="configs"
          :event-handlers="eventHandlers"
          @keyup.delete="handleDeletion"
          @mousemove="updateMousePosition"
          @click="handleNodeAddition"
          @keydown="edgeAdditionKey"
        >
          <template
            #override-node-label="{
              //   nodeId,
              scale,
              text,
              //   x,
              //   y,
              //   config,
              //   textAnchor,
              //   dominantBaseline,
            }"
          >
            <text
              x="0"
              y="0"
              :font-size="20 * scale"
              text-anchor="middle"
              dominant-baseline="central"
              fill="#ffffff"
              >{{ text }}
            </text>
            <!-- <text
              x="0"
              y="0"
              :font-size="config.fontSize * scale"
              :text-anchor="textAnchor"
              :dominant-baseline="dominantBaseline"
              :fill="config.color"
              :transform="`translate(${x} ${y})`"
              >{{ nodeId }}</text
            > -->
          </template>
          <!-- <template #edge-label="{ edge, hovered, selected, ...slotProps }">
              <v-edge-label
                :class="{ hovered, selected }"
                :text="edge.label"
                align="center"
                vertical-align="above"
                v-bind="slotProps"
              />
            </template> -->
          <Background />
        </v-network-graph>
      </div>
    </div>

    <!-- More Functions Button -->
    <button
      type="button"
      data-bs-toggle="tooltip"
      data-bs-placement="left"
      data-bs-custom-class="custom-tooltip"
      data-bs-title="Ir atrás."
      class="btn btn-primary bi bi-arrow-left position-absolute top-0 end-0 m-1"
      @click="goBack"
    ></button>

    <span
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight"
      aria-controls="offcanvasRight"
    >
      <button
        class="btn btn-primary bi bi-list position-absolute sticky-top top-0 start-0 m-1"
        type="button"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        data-bs-custom-class="custom-tooltip"
        data-bs-title="Funciones Extra."
      ></button>
    </span>

    <div
      class="offcanvas offcanvas-start"
      data-bs-backdrop="static"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title fw-bold" id="offcanvasRightLabel">
          Funciones Extra...
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <div>Seleccione la función que desee.</div>
        <div class="my-3">
          <button
            @click="openHelp"
            data-bs-dismiss="offcanvas"
            class="btn btn-outline-warning w-100 py-2 mb-2 d-lg-none"
          >
            Centro de Ayuda
          </button>
          <button
            class="btn btn-outline-warning w-100 py-2"
            @click="panToCenter"
          >
            Centrar
          </button>
          <button
            class="btn btn-outline-warning w-100 py-2 mt-2"
            @click="fitToContents"
          >
            Ajustar
          </button>
        </div>
        <div class="d-flex gap-3">
          <button
            class="btn btn-outline-warning bi bi-plus-circle w-100 py-2 mt-1"
            @click="zoomIn"
          ></button>
          <button
            class="btn btn-outline-warning bi bi-dash-circle w-100 py-2 mt-1"
            @click="zoomOut"
          ></button>
        </div>
        <button
          data-bs-dismiss="offcanvas"
          :class="
            isBoxSelectionMode
              ? 'btn btn-warning w-100 py-2 mt-3'
              : 'btn btn-outline-warning w-100 py-2 mt-3'
          "
          @click="toggleBoxSelection"
        >
          {{ isBoxSelectionMode ? "Detener selección" : "Iniciar selección" }}
        </button>
        <button
          class="btn btn-outline-warning w-100 py-2 mt-2"
          data-bs-dismiss="offcanvas"
          @click="openFileNameModal"
        >
          Guardar Archivo
        </button>
        <input
          type="file"
          class="upload-file my-2 mt-2 form-control"
          @change="loadGraph"
          accept=".json"
        />
        <button
          class="btn btn-outline-warning w-100 py-2 mt-2"
          data-bs-dismiss="offcanvas"
          @click="openGraphFile"
        >
          Abrir Archivo
        </button>
        <button @click="goBack" class="btn btn-outline-warning w-100 py-2 mt-2">
          Ir a inicio
        </button>
      </div>
    </div>

    <!-- View Controls -->
    <div
      class="d-md-flex d-block gap-5 w-100 justify-content-center position-absolute sticky-bottom bg-warning bg-opacity-10 py-3 px-3 py-md-4 px-md-5"
    >
      <div
        class="w-25 mb-2 mb-md-0"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        data-bs-custom-class="custom-tooltip"
        data-bs-title="Ingrese la hoja del árbol binario y presione Enter."
      >
        <label for="binaryTreeLeaf" class="form-label">Hoja del árbol:</label>
        <input
          type="text"
          id="binaryTreeLeaf"
          class="form-control"
          v-model="userLeafInput"
          @input="validateUserInput"
          placeholder="Hoja del árbol binario"
        />
      </div>
      <div class="d-flex gap-2 gap-md-5 mb-2 mb-md-0">
        <button
          type="button"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-custom-class="custom-tooltip"
          data-bs-title="Eliminar."
          class="bi bi-trash rounded-circle py-3 px-4"
          :class="
            selectedEdges.length > 0 || selectedNodes.length > 0
              ? 'btn btn-warning'
              : 'btn btn-outline-warning'
          "
          @click="handleDeletion"
        ></button>
      </div>
      <div class="d-flex gap-2 gap-md-5">
        <button
          type="button"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-custom-class="custom-tooltip"
          data-bs-title="Guardar."
          class="btn btn-outline-warning bi bi-floppy rounded-circle py-3 px-4"
          @click="openFileNameModal"
        ></button>
        <button
          type="button"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-custom-class="custom-tooltip"
          data-bs-title="Abrir."
          class="btn btn-outline-warning bi bi-folder2-open rounded-circle py-3 px-4"
          @click="openGraphFile"
        ></button>
        <button
          type="button"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-custom-class="custom-tooltip"
          data-bs-title="Limpiar."
          class="btn btn-outline-warning bi bi-file-earmark-x rounded-circle py-3 px-4"
          @click="handleClearAll"
        ></button>
        <button
          type="button"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-custom-class="custom-tooltip"
          data-bs-title="Ayuda."
          class="btn btn-success bi bi-question-lg position-absolute end-0 me-5 rounded-circle py-2 px-3 d-none d-lg-block"
          @click="openHelp"
        ></button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted, computed, watch } from "vue";
import {
  Nodes,
  Edges,
  VNetworkGraphInstance,
  EventHandlers,
  defineConfigs,
  Edge,
} from "v-network-graph";
import { Background } from "@vue-flow/background";
import data from "../data/initial-data.js";
import { useRouter } from "vue-router";
import { Modal } from "bootstrap";
import { useAlgorithmStore } from "../stores/algorithm";
import { useFileStore } from "../stores/file";
import * as bootstrap from "bootstrap";
import TreeNode from "../data/BinaryTrees/treeNode.js";
import BinaryTree from "../data/BinaryTrees/BinaryTree.js";

const router = useRouter();
const fileStore = useFileStore();

const goBack = () => {
  router.go(-1);
};

const graph = ref<VNetworkGraphInstance | null>(null);
let nodes: Nodes;
let edges: Edges;
let layouts;

if (fileStore.graphData) {
  nodes = reactive({ ...fileStore.graphData.nodes });
  edges = reactive({ ...fileStore.graphData.edges });
  layouts = reactive(fileStore.graphData.layouts);
} else {
  nodes = reactive({ ...data.nodes });
  edges = reactive({ ...data.edges });
  layouts = reactive(data.layouts);
}

const nextNodeIndex = ref(Object.keys(nodes).length + 1);
const nextEdgeIndex = ref(Object.keys(edges).length + 1);
const selectedNodes = ref<string[]>([]);
const selectedEdges = ref<string[]>([]);
const zoomLevel = ref(1);

const panToCenter = () => graph.value?.panToCenter();
const fitToContents = () => graph.value?.fitToContents();
const zoomIn = () => graph.value?.zoomIn();
const zoomOut = () => graph.value?.zoomOut();

const configs = defineConfigs({
  view: {
    panEnabled: true,
    zoomEnabled: true,
    boxSelectionEnabled: true,
    selection: {
      box: {
        color: "#0000ff20",
        strokeWidth: 1,
        strokeColor: "#aaaaff",
        strokeDasharray: "0",
      },
    },
  },
  node: {
    selectable: true,
    draggable: true,
    normal: {
      type: "circle",
      radius: 32,
      width: 32,
      height: 32,
      borderRadius: 4,
      strokeWidth: 3,
      strokeColor: "#63C867",
      strokeDasharray: "0",
      color: "#5CE562",
    },
    hover: {
      type: "circle",
      radius: 28,
      width: 32,
      height: 32,
      borderRadius: 4,
      strokeWidth: 2,
      strokeColor: "#6FFF75",
      strokeDasharray: "0",
      color: "#73D279",
    },
    selected: {
      type: "circle",
      radius: 28,
      width: 32,
      height: 32,
      borderRadius: 4,
      strokeWidth: 2,
      strokeColor: "#73D2A7",
      strokeDasharray: "0",
      color: "#33DE90",
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
    focusring: {
      visible: true,
      width: 4,
      padding: 3,
      color: "#eebb00",
      dasharray: "0",
    },
  },
  edge: {
    selectable: true,
    hoverable: true,
    normal: {
      width: 3,
      color: "#9F8747",
      dasharray: "0",
      linecap: "butt",
      animate: false,
      animationSpeed: 50,
    },
    hover: {
      width: 4,
      color: "#FFD950",
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
    label: {
      fontSize: 15,
      fontFamily: "Sans serif",
      color: "#000000",
    },
    gap: 20,
    type: "curve",
    margin: 6,
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
    selfLoop: {
      radius: 24,
      offset: 16,
      angle: 270,
      isClockwise: true,
    },
    keepOrder: "horizontal",
  },
});

var userLeafInput = ref("");

// Validate User Input ----------------------------------------------------
const validateUserInput = () => {
  userLeafInput.value = userLeafInput.value.replace(/[^0-9]/g, "");
};

// Adding Node -------------------------------------------------------------
let isAddingNode = ref(true);

const handleNodeAddition = () => {
  if (isAddingNode.value && graph.value && userLeafInput.value !== "") {
    const binaryTree = new BinaryTree(
      new TreeNode(parseInt(userLeafInput.value), null, null)
    );
    console.log(binaryTree.root);
    // if (binaryTree.root !== null) {
    //   binaryTree.insert(parseInt(userLeafInput.value), binaryTree.root);
    // }
    const nodeId = `node${nextNodeIndex.value}`;
    const name = userLeafInput.value;

    const domPoint = { x: mousePosition.value.x, y: mousePosition.value.y };

    const svgElement = graph.value.$el;
    const svgRect = svgElement.getBoundingClientRect();

    const svgPoint = {
      x: domPoint.x - svgRect.left,
      y: domPoint.y - svgRect.top,
    };

    const svgToDomPoint =
      graph.value.translateFromDomToSvgCoordinates(svgPoint);

    nodes[nodeId] = {
      id: nodeId,
      name,
      x: svgToDomPoint.x,
      y: svgToDomPoint.y,
    };
    layouts.nodes[nodeId] = { x: svgToDomPoint.x, y: svgToDomPoint.y };

    nextNodeIndex.value++;
  }
};

function startAddingNode() {
  isAddingNode.value = !isAddingNode.value;
}

const mousePosition = ref({ x: 0, y: 0 });

const updateMousePosition = (event) => {
  mousePosition.value.x = event.clientX;
  mousePosition.value.y = event.clientY;
};

onMounted(() => {
  window.addEventListener("mousemove", updateMousePosition);
});

onUnmounted(() => {
  window.removeEventListener("mousemove", updateMousePosition);
});

// Deleting Node -------------------------------------------------------------
const confirmDeleteModal = ref<typeof Modal | null>(null);

onMounted(() => {
  const modalElement = document.getElementById("confirmDeleteModal");
  confirmDeleteModal.value = new Modal(modalElement);
});

const confirmDelete = () => {
  if (selectedNodes.value.length > 0) {
    selectedNodes.value.forEach((n) => delete nodes[n]);
  } else if (selectedEdges.value.length > 0) {
    selectedEdges.value.forEach((e) => delete edges[e]);
  }

  confirmDeleteModal.value?.hide();
};

const handleDeletion = () => {
  if (selectedNodes.value.length > 0 || selectedEdges.value.length > 0) {
    confirmDeleteModal.value?.show();
  }
};

// Adding Edge -------------------------------------------------------------
const edgeAdditionButton = () => {
  if (isAddingNode.value) {
    isAddingNode.value = false;
  }
  let [source, target] = ["", ""];
  if (selectedNodes.value.length === 1) {
    source = target = selectedNodes.value.toString();
  } else if (selectedNodes.value.length === 2) {
    [source, target] = selectedNodes.value.map((node) => node.toString());
  } else return;
  const edgeId = `edge${nextEdgeIndex.value}`;
  const label = `0`;
  edges[edgeId] = { source, target, label };
  nextEdgeIndex.value++;
  selectedNodes.value = [];
};

const edgeAdditionKey = (event: KeyboardEvent) => {
  if (event.shiftKey && event.altKey && event.key.toLowerCase() === "e") {
    edgeAdditionButton();
  }
};

// Event Handling -------------------------------------------------------------
const isBoxSelectionMode = ref(false);
const eventHandlers: EventHandlers = {
  "view:mode": (mode) => {
    isBoxSelectionMode.value = mode === "box-selection";
  },
};

const startBoxSelection = () =>
  graph.value?.startBoxSelection({
    stop: "click",
    type: "append",
    withShiftKey: "invert",
  });

const stopBoxSelection = () => graph.value?.stopBoxSelection();

const toggleBoxSelection = () => {
  if (isBoxSelectionMode.value) {
    stopBoxSelection();
  } else {
    if (isAddingNode.value) {
      isAddingNode.value = false;
    }
    startBoxSelection();
  }
};

let nameFileToSaveModal: Modal | null = null;
let helpCenterModal: Modal | null = null;
let clearAllModal: Modal | null = null;

onMounted(() => {
  const saveFileModalElement = document.getElementById("fileNameToSave");
  nameFileToSaveModal = new Modal(saveFileModalElement);

  const helpCenterModalElement = document.getElementById("helpCenterModal");
  helpCenterModal = new Modal(helpCenterModalElement);

  const clearAllModalElement = document.getElementById("confirmClearAllModal");
  clearAllModal = new Modal(clearAllModalElement);

  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  tooltipTriggerList.forEach((tooltipTriggerEl: Element) => {
    new bootstrap.Tooltip(tooltipTriggerEl as HTMLElement);
  });
});

// Save and Load Graph -------------------------------------------------------------
const saveGraphSuccess = ref(false);
const saveGraphError = ref(false);

const fileNameToSave = ref("");

const saveGraph = () => {
  try {
    const graphData = {
      nodes: nodes,
      edges: edges,
      layouts: layouts,
    };

    const jsonData = JSON.stringify(graphData, null, 2); // Indentation of 2 spaces
    const blob = new Blob([jsonData], { type: "application/json" });

    // Create a download link
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = fileNameToSave.value;

    // Append the link to the body and click it to trigger the download
    document.body.appendChild(a);
    a.click();

    // Remove the link from the body
    document.body.removeChild(a);

    saveGraphSuccess.value = true;

    fileNameToSave.value = "";
    nameFileToSaveModal.hide();
  } catch (error) {
    console.error("Error al guardar el grafo:", error);
    saveGraphError.value = true;
  }
};

const openFileNameModal = () => {
  nameFileToSaveModal.show();
};

const loadGraphSuccess = ref(false);
const loadGraphError = ref(false);

const fileNameSaved = ref("");

const loadGraph = async () => {
  const inputElement = document.querySelector('input[type="file"]');
  const file = (inputElement as HTMLInputElement)?.files?.[0];

  if (file) {
    try {
      console.log("File:", file);
      fileNameSaved.value = file.name;
      const fileContent = await file.text();
      console.log("File content:", fileContent);
      const graphData = JSON.parse(fileContent);

      // Update nodes, edges, and layouts with loaded data
      Object.assign(nodes, graphData.nodes);
      Object.assign(edges, graphData.edges);
      Object.assign(layouts, graphData.layouts);

      const nodesLength = Object.keys(nodes).length;
      const edgesLength = Object.keys(edges).length;
      console.log("Nodes length:", nodesLength);
      console.log("Edges length:", edgesLength);
      nextNodeIndex.value = nodesLength + 1;
      nextEdgeIndex.value = edgesLength + 1;

      // If a node or an edge does not exist in the JSON but it exists in the canvas, delete it
      for (const nodeId in nodes) {
        if (!graphData.nodes[nodeId]) {
          delete nodes[nodeId];
          delete layouts.nodes[nodeId];
        }
      }

      // Upload the file
      const fileResponse = await fileStore.uploadFile(file);
      console.log("File response:", fileResponse);

      loadGraphSuccess.value = true;
    } catch (error) {
      console.error("Error al cargar el grafo:", error);
      loadGraphSuccess.value = false;
    }
  }
};

const openGraphFile = () => {
  const inputElement = document.querySelector('input[type="file"]');
  (inputElement as HTMLInputElement).click();
};

// help modal -------------------------------------------------------------
const openHelp = () => {
  helpCenterModal.show();
};

// Clear All -------------------------------------------------------------
const confirmClearAll = () => {
  for (const nodeId in nodes) {
    delete nodes[nodeId];
  }

  for (const edgeId in edges) {
    delete edges[edgeId];
  }

  nextNodeIndex.value = 1;
  nextEdgeIndex.value = 1;

  clearAllModal?.hide();
};

const handleClearAll = () => {
  if (clearAllModal) {
    clearAllModal.show();
  }
};
</script>

<style scoped>
.editor-container {
  display: flex;
  height: 30em;
}

.v-network-graph:active {
  cursor: grab;
}

.editor-sidebar {
  padding: 10%;
  background-color: #f3f3f3;
}

.bi {
  font-size: 2em;
}

.zoom-slider {
  margin-bottom: 10px;
}

.upload-file {
  display: none;
}

@media screen and (max-width: 600px) {
  .bi {
    font-size: 1.5em;
  }
  .editor-container {
    height: 15em;
  }
}
</style>
