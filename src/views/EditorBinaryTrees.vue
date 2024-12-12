<template>
  <div class="my-3">
    <div class="container d-flex justify-content-between mb-4 mt-5">
      <div>
        <h1 class="mt-4">Árboles Binarios</h1>
        <h5>Ingrese números para armar su árbol binario:</h5>
      </div>
      <div class="my-auto">
        <button
          type="button"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-custom-class="custom-tooltip"
          data-bs-title="Ingresar."
          class="btn btn-info me-3"
          id="addData"
          @click="openInputOrderModal"
        >
          Ingresar Datos
        </button>
        <button
          type="button"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-custom-class="custom-tooltip"
          data-bs-title="PreOrden."
          id="preOrder"
          class="btn btn-success me-3"
          @click="printPreOrder"
        >
          PreOrden
        </button>
        <button
          type="button"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-custom-class="custom-tooltip"
          data-bs-title="InOrden."
          id="inOrder"
          class="btn btn-warning me-3"
          @click="printInOrder"
        >
          InOrden
        </button>
        <button
          type="button"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-custom-class="custom-tooltip"
          data-bs-title="PostOrden."
          id="postOrder"
          class="btn btn-danger me-3"
          @click="printPostOrder"
        >
          PostOrden
        </button>
      </div>
    </div>

    <!-- Delete Modal -->
    <!-- <div
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
    </div> -->

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
              ¡Hola! 😄 ¡Bienvenido a la rama de Árboles Binarios! 🌐✨ Aquí te
              dejamos una guía rápida para que domines esta herramienta como un
              pro:
            </p>
            <p>✨ ¡Bienvenido a tu Editor de Árboles Favorito! 🚀</p>
            <img
              src="../assets/AgregarHoja.png"
              alt="AgregarHoja"
              class="img-fluid"
            />
            <p>
              <strong>Agregar Hojas 🧩</strong><br />
              ¡Haz clic en el área que indica “agregar hoja del árbol” y coloca
              el número que desees para dar inicio a tu árbol! Luego haz clic en
              la fecha para poder mostrar esta hoja en el gráfico y poder
              agregar hojas nuevas de la misma manera.
            </p>
            <img
              src="../assets/PreInPost.png"
              alt="PreInPost"
              class="img-fluid"
            />
            <p>
              <strong> Orden del arbol 🗑️</strong><br />
              ¿Quieres ver como quedan ordenadas las hojas que ingresaste? Pues
              estos botones están para ello, Selecciona el botón dependiendo del
              tipo de orden que desees que se te muestre.
            </p>
            <p>
              <img src="../assets/DFS.png" alt="DFS" class="img-fluid" />
            </p>
            <p>
              <strong>DFS 🗡️</strong><br />
              Selecciona esta opción para poder ver el DFS del árbol binario que
              acabas de crear, esta opción te mostrará el Preorden, Postorden e
              InOrden en uno sólo
            </p>

            <img src="../assets/Datos.png" alt="Datos" class="img-fluid" />
            <p>
              <strong>Ingresar Datos 🚦</strong><br />
              Selecciona esta opción y podrás ingresar manualmente los datos de
              PostOrden e InOrden para que se construya el árbol binario a
              partir de ellos.
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
            <img src="../assets/GyA.jpg" alt="GyA" class="img-fluid" />
            <p>
              <strong>Guardar y Abrir 📂</strong><br />
              No dejes que tus obras maestras se pierdan. Guarda y abre archivos
              localmente para retomar tus épicas creaciones.
            </p>
            <p>
              ¡Y eso es básicamente todo! Ahora, ve y conquista el mundo de los
              grafos con tu creatividad desbordante. ¡Buena suerte, maestro del
              grafo! 🚀🎨
            </p>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
          OK
        </button>
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

  <!-- Input To Order Binary Tree -->
  <div
    class="modal fade"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
    id="inputToOrderModal"
  >
    <div
      class="modal-dialog modal-dialog-centered modal-dialog-scrollable animate__animated animate__backInDown"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Ingresar Árbol Binario</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="d-flex text-center justify-content-center">
            <i class="bi bi-info-circle-fill me-1" style="font-size: 1.2em"></i>
            <p>
              Ingrese números separados por comas para armar su Árbol Binario.
            </p>
          </div>
          <div class="mb-3">
            <label for="postOrderInput" class="col-form-label">
              PostOrden:
            </label>
            <input
              type="text"
              class="form-control"
              id="postOrderInput"
              v-model="postOrderUserInput"
              @input="validateUserInput"
              placeholder="Ingrese Árbol Binario en PostOrden"
            />
          </div>
          <div class="mb-3">
            <label for="inOrderInput" class="col-form-label">InOrden:</label>
            <input
              type="text"
              class="form-control"
              id="inOrderInput"
              v-model="inOrderUserInput"
              @input="validateUserInput"
              placeholder="Ingrese Árbol Binario en InOrden"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-danger"
            data-bs-dismiss="modal"
          >
            Cancelar
          </button>
          <button
            type="button"
            data-bs-dismiss="modal"
            class="btn btn-success"
            @click="handleUserInputOrder"
          >
            OK
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
    <div class="container editor-content border border-3 border-success">
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
        <button class="btn btn-outline-warning w-100 py-2" @click="panToCenter">
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
      data-bs-placement="left"
      data-bs-custom-class="custom-tooltip"
      data-bs-title="Ingrese la hoja del árbol binario y presione el botón."
    >
      <label for="binaryTreeLeaf" class="form-label">Hoja(s) del árbol:</label>
      <div class="input-group">
        <input
          type="text"
          id="binaryTreeLeaf"
          class="form-control"
          v-model="userLeafInput"
          @input="validateUserInput"
          placeholder="Hoja(s) del árbol binario"
          aria-label="Hoja del árbol binario"
          aria-describedby="button-addNode"
        />
        <button
          class="btn btn-success bi bi-arrow-up-circle"
          style="font-size: 1.3em"
          type="button"
          id="button-addNode"
          @click="startAddingNode"
        ></button>
      </div>
    </div>
    <div class="d-flex gap-2 gap-md-5 mb-2 mb-md-0">
      <button
        type="button"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        data-bs-custom-class="custom-tooltip"
        data-bs-title="Mostrar DFS."
        class="bi bi-123 rounded-circle py-3 px-4"
        :class="
          treeStore.tree.root ? 'btn btn-warning' : 'btn btn-outline-warning'
        "
        @click="showBFS"
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
import { useFileStore } from "../stores/file.js";
import { useTreeStore } from "../stores/tree.js"; // import the tree store
import * as bootstrap from "bootstrap";
import SweetAlert from "sweetalert2";
import dagre from "dagre/dist/dagre.min.js"; // import dagre library
import { event } from "jquery";

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

// Use the tree store to store the tree disposition of the graph
const treeStore = useTreeStore();
const nodeSize = 50; // dagre uses this later

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
    selectable: false,
    draggable: false,
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
    selectable: false,
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
var postOrderUserInput = ref("");
var inOrderUserInput = ref("");

// Validate User Input ----------------------------------------------------
const validateUserInput = () => {
  userLeafInput.value = userLeafInput.value.replace(/[^0-9,]/g, "");
  postOrderUserInput.value = postOrderUserInput.value.replace(/[^0-9,\.]+/, "");
  inOrderUserInput.value = inOrderUserInput.value.replace(/[^0-9,\.]+/, "");
};

// Adding Node -------------------------------------------------------------
const handleNodeAddition = async (number: number) => {
  if (graph.value) await treeStore.insertNode(number);
};

// New function to adapt the layout of the tree
// install dagre library `npm install dagre`
async function treelayout() {
  if (nodes.length) return;
  if (!edges) return;
  // clear current graph
  for (const nodeId in nodes) {
    delete nodes[nodeId];
  }

  for (const edgeId in edges) {
    delete edges[edgeId];
  }

  // get correct display from store
  const graphToDisplay = await treeStore.getGraphDisplay();
  graphToDisplay.nodes.forEach((node) => {
    nodes[node.id] = node;
  });
  graphToDisplay.edges.forEach((edge) => {
    edges[edge.id] = edge;
  });
  console.log("nodes:", nodes);
  console.log("edges:", edges);
  // convert graph
  // ref: https://github.com/dagrejs/dagre/wiki
  const g = new dagre.graphlib.Graph();
  // Set an object for the graph label
  g.setGraph({
    rankdir: "TB",
    nodesep: nodeSize * 2,
    edgesep: nodeSize,
    ranksep: nodeSize * 2,
  });

  // Default to assigning a new object as a label for each new edge.
  g.setDefaultEdgeLabel(() => ({ weight: 1 })); // Add a 'weight' property to the default edge label

  // Add nodes to the graph. The first argument is the node id. The second is
  // metadata about the node. In this case we're going to add labels to each of
  // our nodes.
  console.log("nodes:", nodes);

  Object.entries(nodes).forEach(([nodeId, node]) => {
    g.setNode(nodeId, { label: node.name, width: nodeSize, height: nodeSize });
  });

  console.log("g:", g);

  console.log("edges:", edges);
  // Add edges to the graph.
  Object.values(edges).forEach((edge) => {
    g.setEdge(edge.source, edge.target);
  });

  console.log("g:", g);

  dagre.layout(g);

  g.nodes().forEach((nodeId: string) => {
    // update node position
    const x = g.node(nodeId).x;
    const y = g.node(nodeId).y;
    layouts.nodes[nodeId] = { x, y };
  });

  //fit to contents
  fitToContents();
}

async function startAddingNode() {
  await userLeafInput.value.split(",").forEach(async (number) => {
    let num = parseInt(number);
    if (num && !isNaN(num)) {
      handleNodeAddition(num);
    }
    await treeStore.consolelogtree();
  });
  treeStore.generateDisplayTree();
  treelayout();

  userLeafInput.value = "";
}

// ------------------------------------------------------------------------

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

// Adding Edge -------------------------------------------------------------
// Deleted previous function created a new one
const connectToLastAddedNode = (nodeId, parentId) => {
  // Auto join parent to child node
  console.log("Parent:", parentId, "Child:", nodeId);
  let [source, target] = [parentId, nodeId];
  const edgeId = `edge${nextEdgeIndex.value}`;
  const label = ``;
  edges[edgeId] = { source, target, label };
  nextEdgeIndex.value++;
  selectedNodes.value = [];
};

// Tree BFS -------------------------------------------------------------
// Created a new function to show the BFS of the tree
const showBFS = async () => {
  if (treeStore.tree.root) {
    const preorder = (await treeStore.preOrderTraversal()).join(", ");
    const inorder = (await treeStore.inOrderTraversal()).join(", ");
    const postorder = (await treeStore.postOrderTraversal()).join(", ");
    SweetAlert.fire({
      title: `Preorder: ${preorder} \nInorder: ${inorder} \nPostorder: ${postorder}`,
      showClass: {
        popup: `
        animate__animated
        animate__fadeInDown`,
      },
      hideClass: {
        popup: `
        animate__animated
        animate__fadeOutDown`,
      },
    });
  } else {
    showSimpleAlert("Error", "No se encontró ningún árbol binario", "error");
  }
};

const printPreOrder = async () => {
  if (treeStore.tree.root) {
    const preorder = (await treeStore.preOrderTraversal()).join(", ");
    SweetAlert.fire({
      title: `Preorder: ${preorder}`,
      showClass: {
        popup: `
        animate__animated
        animate__fadeInDown`,
      },
      hideClass: {
        popup: `
        animate__animated
        animate__fadeOutDown`,
      },
    });
  } else {
    showSimpleAlert("Error", "No se encontró ningún árbol binario", "error");
  }
};

const printInOrder = async () => {
  if (treeStore.tree.root) {
    const inorder = (await treeStore.inOrderTraversal()).join(", ");
    SweetAlert.fire({
      title: `Inorder: ${inorder}`,
      showClass: {
        popup: `
        animate__animated
        animate__fadeInDown`,
      },
      hideClass: {
        popup: `
        animate__animated
        animate__fadeOutDown`,
      },
    });
  } else {
    showSimpleAlert("Error", "No se encontró ningún árbol binario", "error");
  }
};

const printPostOrder = async () => {
  if (treeStore.tree.root) {
    const postorder = (await treeStore.postOrderTraversal()).join(", ");
    SweetAlert.fire({
      title: `Postorder: ${postorder}`,
      showClass: {
        popup: `
        animate__animated
        animate__fadeInDown`,
      },
      hideClass: {
        popup: `
        animate__animated
        animate__fadeOutDown`,
      },
    });
  } else {
    showSimpleAlert("Error", "No se encontró ningún árbol binario", "error");
  }
};

const showSimpleAlert = (alertTitle, alertText, alertIcon) => {
  SweetAlert.fire({
    title: alertTitle,
    text: alertText,
    icon: alertIcon,
    showClass: {
      popup: `
        animate__animated
        animate__fadeInDown`,
    },
    hideClass: {
      popup: `
        animate__animated
        animate__fadeOutDown`,
    },
  });
};

const showConfirmAlert = (
  alertTitle,
  alertText,
  alertIcon,
  showConfButton,
  timer
) => {
  SweetAlert.fire({
    title: alertTitle,
    text: alertText,
    icon: alertIcon,
    showConfirmButton: showConfButton,
    timer: timer,
    showClass: {
      popup: `
      animate__animated
      animate__flipInX`,
    },
    hideClass: {
      popup: `
      animate__animated
      animate__flipOutX`,
    },
  });
};

let inputToOrderModal: Modal | null = null;

const openInputOrderModal = () => {
  inputToOrderModal?.show();
};

const handleUserInputOrder = () => {
  if (!postOrderUserInput.value && !inOrderUserInput.value) {
    showSimpleAlert(
      "Error",
      "Ingrese los valores requeridos por favor.",
      "error"
    );
  }

  const postOrder = postOrderUserInput.value.split(",");
  const inOrder = inOrderUserInput.value.split(",");
  console.log("PostOrder:", postOrder);
  console.log("InOrder:", inOrder);

  if (postOrder.length !== inOrder.length) {
    showSimpleAlert(
      "Error",
      "Los tamaños de los recorridos no coinciden.",
      "error"
    );
    return;
  }

  // parse the strings to numbers
  const postOrderInts = postOrder.map((element) => parseInt(element));
  const inOrderInts = inOrder.map((element) => parseInt(element));

  // Check both arrays have the same elements
  const postOrderSet = new Set(postOrderInts);
  const inOrderSet = new Set(inOrderInts);
  postOrderSet.forEach((element) => {
    if (!inOrderSet.has(element)) {
      showSimpleAlert(
        "Error",
        "Los elementos de los recorridos no coinciden.",
        "error"
      );
      return;
    }
  });

  // Clear the previous tree
  treeStore.clearTree();

  // Generate the tree
  treeStore.generateFromPostorderAndInorder(postOrderInts, inOrderInts);

  // Generate the display tree
  treeStore.generateDisplayTree();
  treelayout();

  // Close the modal
  inputToOrderModal?.hide();

  postOrderUserInput.value = inOrderUserInput.value = "";
};

// Event Handling -------------------------------------------------------------
// const isBoxSelectionMode = ref(false);
// const eventHandlers: EventHandlers = {
//   "view:mode": (mode) => {
//     isBoxSelectionMode.value = mode === "box-selection";
//   },
// };

// const startBoxSelection = () =>
//   graph.value?.startBoxSelection({
//     stop: "click",
//     type: "append",
//     withShiftKey: "invert",
//   });

// const stopBoxSelection = () => graph.value?.stopBoxSelection();

// const toggleBoxSelection = () => {
//   if (isBoxSelectionMode.value) {
//     stopBoxSelection();
//   } else {
//     if (isAddingNode.value) {
//       isAddingNode.value = false;
//     }
//     startBoxSelection();
//   }
// };

// Modals elements -------------------------------------------------------------
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

  const inputToOrderElement = document.getElementById("inputToOrderModal");
  inputToOrderModal = new Modal(inputToOrderElement);

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

const saveGraph = async () => {
  try {
    const preorderData = await treeStore.preOrderTraversal();
    const inorderData = await treeStore.inOrderTraversal();
    const postorderData = await treeStore.postOrderTraversal();

    const jsonData = {
      preorder: preorderData,
      inorder: inorderData,
      postorder: postorderData,
    };

    const Json = JSON.stringify(jsonData, null, 2);
    const blob = new Blob([Json], { type: "application/json" });

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

    nameFileToSaveModal.hide();

    showConfirmAlert(
      "Éxito!",
      `Archivo ${fileNameToSave.value} guardado correctamente.`,
      "success",
      false,
      2400
    );
    fileNameToSave.value = "";
  } catch (error) {
    console.error("Error al guardar el grafo:", error);
    saveGraphError.value = true;
    showConfirmAlert(
      "Error",
      `Error al guardar el archivo ${fileNameToSave.value}.`,
      "error",
      false,
      2400
    );
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
      const filedataparsed = JSON.parse(fileContent);

      // Clear the previous tree
      treeStore.clearTree();
      for (const nodeId in nodes) {
        delete nodes[nodeId];
      }
      for (const edgeId in edges) {
        delete edges[edgeId];
      }

      // Generate the tree from the preorder attribute in the json
      const preorderData = filedataparsed.preorder;

      for (const number of preorderData) {
        handleNodeAddition(number);
      }

      //place the display tree
      treeStore.generateDisplayTree();
      treelayout();

      // Upload the file
      const fileResponse = await fileStore.uploadFile(file);
      console.log("File response:", fileResponse);

      loadGraphSuccess.value = true;
      // showConfirmAlert(
      //   "Éxito!",
      //   `Archivo ${fileNameSaved.value} recuperado correctamente.`,
      //   "success",
      //   false,
      //   2400
      // );
    } catch (error) {
      console.error("Error al cargar el grafo:", error);
      loadGraphSuccess.value = false;
      // showConfirmAlert(
      //   "Error",
      //   `Error al recuperar el archivo ${fileNameSaved.value}.`,
      //   "error",
      //   false,
      //   2400
      // );
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

  treeStore.clearTree();

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
  height: 27em;
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
