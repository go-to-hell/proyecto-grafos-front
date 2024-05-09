<template>
  <div>
    <!-- Rename Node Modal -->
    <div
      class="modal fade"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
      id="renameNodeModal"
    >
      <div
        class="modal-dialog modal-dialog-scrollable modal-dialog-centered animate__animated animate__backInDown"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Ingrese valores para el algoritmo:</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body d-flex">
            <input
              type="number"
              class="form-control me-3"
              v-model="newNodeNamePart1"
              placeholder="Primer Número"
            />
            <input
              type="number"
              class="form-control"
              v-model="newNodeNamePart2"
              placeholder="Segundo Número"
            />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-danger"
              data-bs-dismiss="modal"
            >
              Cancelar
            </button>
            <button type="button" class="btn btn-success" @click="renameNode">
              Guardar cambios
            </button>
          </div>
        </div>
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
      <div class="modal-dialog modal-dialog-centered">
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
              class="btn btn-outline-danger"
              data-bs-dismiss="modal"
            >
              Cancelar
            </button>
            <button
              type="button"
              class="btn btn-success"
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
      <div class="modal-dialog modal-dialog-centered">
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
              class="btn btn-outline-danger"
              data-bs-dismiss="modal"
            >
              Cancelar
            </button>
            <button
              type="button"
              class="btn btn-success"
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
      <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
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
              src="../assets/RenombrarN.png"
              alt="Renombrar"
              class="img-fluid"
            />
            <p>
              <strong>Renombrar Nodos 🏷️</strong><br />
              Dale a tus nodos los valores que necesites para poder encontrar el centroide
            </p>
            <img src="../assets/ResolverC.png" alt="Resolver" class="img-fluid" />
            <p>
              <strong>Resolver Compet 🏆</strong><br />
              ¡Haz clic en el botón "Resolver Compet" y veras como el centroide aparece en tu pantalla con los valores y coordenadas correspondientes! 🎩✨
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
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-success"
              data-bs-dismiss="modal"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- File name to save -->
    <div class="modal fade" tabindex="-1" id="fileNameToSave">
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
              class="btn btn-outline-danger"
              data-bs-dismiss="modal"
            >
              Cancelar
            </button>
            <button type="button" class="btn btn-success" @click="saveGraph">
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Adjacency Matrix -->
    <div class="modal fade" tabindex="-1" id="adjacencyMatrixModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Matriz de Adyacencia</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div class="modal-body">
            <div id="adjacencyMatrix"></div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
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
      <div class="editor-content">
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
        >
          <template
            #override-node-label="{
              nodeId,
              x,
              y,
              scale,
              textAnchor,
              dominantBaseline,
              text,
              config,
            }"
          >
            <text :font-size="12" text-anchor="middle" fill="#ffffff"
              >{{ layouts.nodes[nodeId].x.toFixed(2) }},
              {{ layouts.nodes[nodeId].y.toFixed(2) }}</text
            >
            <text
              x="0"
              y="0"
              :font-size="config.fontSize * scale"
              :text-anchor="textAnchor"
              :dominant-baseline="dominantBaseline"
              :fill="config.color"
              :transform="`translate(${x} ${y})`"
              >{{ text }}</text
            >
          </template>
          <Background />
        </v-network-graph>
      </div>
    </div>

    <!-- More Functions Button -->
    <div class="position-absolute top-0 end-0 m-1 text-center">
      <button
        type="button"
        class="btn btn-primary bi bi-arrow-left mb-3"
        @click="goBack"
      ></button>
      <div class="mt-3">
        <span data-bs-toggle="modal" data-bs-target="#AssignmentModal"
          ><button
            type="button"
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            data-bs-custom-class="custom-tooltip"
            data-bs-title="Resolver."
            class="btn btn-success"
            @click="solveCompet"
          >
            Resolver compet
          </button>
        </span>
      </div>
    </div>

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
            class="btn btn-outline-success w-100 py-2 mb-2 d-lg-none"
          >
            Centro de Ayuda
          </button>
          <button
            class="btn btn-outline-success w-100 py-2"
            @click="panToCenter"
          >
            Centrar
          </button>
          <button
            class="btn btn-outline-success w-100 py-2 mt-2"
            @click="fitToContents"
          >
            Ajustar
          </button>
        </div>
        <div class="d-flex gap-3">
          <button
            class="btn btn-outline-success bi bi-plus-circle w-100 py-2 mt-1"
            @click="zoomIn"
          ></button>
          <button
            class="btn btn-outline-success bi bi-dash-circle w-100 py-2 mt-1"
            @click="zoomOut"
          ></button>
        </div>
        <button
          data-bs-dismiss="offcanvas"
          :class="
            isBoxSelectionMode
              ? 'btn btn-warning w-100 py-2 mt-3'
              : 'btn btn-outline-success w-100 py-2 mt-3'
          "
          @click="toggleBoxSelection"
        >
          {{ isBoxSelectionMode ? "Detener selección" : "Iniciar selección" }}
        </button>
        <button
          class="btn btn-outline-success w-100 py-2 mt-2"
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
          class="btn btn-outline-success w-100 py-2 mt-2"
          data-bs-dismiss="offcanvas"
          @click="openGraphFile"
        >
          Abrir Archivo
        </button>
        <button @click="goBack" class="btn btn-outline-success w-100 py-2 mt-2">
          Ir a inicio
        </button>
      </div>
    </div>

    <!-- View Controls -->
    <div
      class="d-md-flex d-block gap-5 w-100 justify-content-center position-absolute sticky-bottom bg-info bg-opacity-10 py-3 px-3 py-md-4 px-md-5"
    >
      <div class="d-flex gap-2 gap-md-5 mb-2 mb-md-0">
        <button
          type="button"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-custom-class="custom-tooltip"
          data-bs-title="Agregar Nodo."
          class="bi bi-node-plus rounded-circle py-3 px-4"
          :class="
            isAddingNode === true
              ? 'btn btn-warning'
              : 'btn btn-outline-success'
          "
          @click="startAddingNode"
        ></button>
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
              : 'btn btn-outline-success'
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
          data-bs-title="Ingresar valores."
          class="bi bi-pencil-square rounded-circle py-3 px-4"
          v-show="selectedNodes.length === 1"
          :class="
            selectedNodes.length === 1 || selectedEdges.length === 1
              ? 'btn btn-warning'
              : 'btn btn-outline-success'
          "
          @click="openRenameModal"
        ></button>
        <button
          type="button"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-custom-class="custom-tooltip"
          data-bs-title="Guardar."
          class="btn btn-outline-success bi bi-floppy rounded-circle py-3 px-4"
          @click="openFileNameModal"
        ></button>
        <button
          type="button"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-custom-class="custom-tooltip"
          data-bs-title="Abrir."
          class="btn btn-outline-success bi bi-folder2-open rounded-circle py-3 px-4"
          @click="openGraphFile"
        ></button>
        <button
          type="button"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-custom-class="custom-tooltip"
          data-bs-title="Limpiar."
          class="btn btn-outline-success bi bi-file-earmark-x rounded-circle py-3 px-4"
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

    <!-- Self-loop label -->
    <div>
      <div v-for="(node, nodeId) in nodes" :key="nodeId">
        <div v-for="(edge, edgeId) in edges" :key="edgeId">
          <div
            v-if="edge.source === nodeId && edge.target === nodeId"
            class="self-loop-label"
          >
            <span class="self-loop-label-text">{{ edge.label }}</span>
          </div>
        </div>
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
} from "v-network-graph";
import * as vNG from "v-network-graph";
import { Background } from "@vue-flow/background";
import data from "../data/initial-data.js";
import { useRouter } from "vue-router";
import { Modal } from "bootstrap";
import { useFileStore } from "../stores/file";
import * as bootstrap from "bootstrap";

const router = useRouter();
const fileStore = useFileStore();

const goBack = () => {
  router.go(-1);
};

const graph = ref<VNetworkGraphInstance | null>(null);
let nodes: Nodes;
let edges: Edges;
let layouts = ref<vNG.Layouts>({ nodes: {} /* empty */ });

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
    draggable: (node) => (node.isCompetNode ? false : true),
    normal: {
      type: "circle",
      radius: 40,
      width: 40,
      height: 40,
      borderRadius: 4,
      strokeWidth: 3,
      strokeColor: (node) => (node.isCompetNode ? "#F8FF6C" : "#E800FF"),
      strokeDasharray: "0",
      color: (node) => (node.isCompetNode ? "#FFC900" : "#7588FF"),
    },
    hover: {
      type: "circle",
      radius: 39,
      width: 40,
      height: 40,
      borderRadius: 4,
      strokeWidth: 2,
      strokeColor: (node) => (node.isCompetNode ? "#3258FF" : "#2ECFD9"),
      strokeDasharray: "0",
      color: (node) => (node.isCompetNode ? "#F3806B" : "#DC1CF0"),
    },
    selected: {
      type: "circle",
      radius: 39,
      width: 40,
      height: 40,
      borderRadius: 4,
      strokeWidth: 2,
      strokeColor: (node) => (node.isCompetNode ? "#3258FF" : "#00C6E1"),
      strokeDasharray: "0",
      color: (node) => (node.isCompetNode ? "#F3806B" : "#00DB6D"),
    },
    label: {
      visible: true,
      fontSize: 18,
      lineHeight: 1.2,
      color: "#333333",
      margin: 6,
      direction: "south",
      text: "name",
      directionAutoAdjustment: true,
      background: {
        visible: true,
        color: "#ffffff",
        padding: {
          vertical: 2,
          horizontal: 6,
        },
        borderRadius: 4,
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
      color: "#000000",
      dasharray: "0",
      linecap: "butt",
      animate: false,
      animationSpeed: 50,
    },
    hover: {
      width: 4,
      color: "#599db9",
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

// Adding Node -------------------------------------------------------------
let isAddingNode = ref(false);

const handleNodeAddition = () => {
  if (isAddingNode.value && graph.value) {
    const nodeId = `node${nextNodeIndex.value}`;
    const name = `0, 0`;

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

// Compet algorithm -------------------------------------------------------------
const solveCompet = () => {
  // Find and delete the existing compet node
  for (let nodeId in nodes) {
    if (nodes[nodeId].isCompetNode) {
      delete nodes[nodeId];
      delete layouts.nodes[nodeId];
      break;
    }
  }

  // Calculate the centroid for x, y
  let sumX = 0;
  let sumY = 0;
  let nodeCount = 0;

  // Calculate the centroid for a, b
  let sumA = 0;
  let sumB = 0;

  for (let nodeId in nodes) {
    sumX += nodes[nodeId].x;
    sumY += nodes[nodeId].y;

    const [a, b] = nodes[nodeId].name.split(",").map(Number);
    sumA += a;
    sumB += b;

    nodeCount++;
  }

  const centroidX = sumX / nodeCount;
  const centroidY = sumY / nodeCount;

  const centroidA = sumA / nodeCount;
  const centroidB = sumB / nodeCount;

  // Add a new node at the centroid
  const nodeId = `node${nextNodeIndex.value}`;
  const name = `${centroidA.toFixed(2)}, ${centroidB.toFixed(2)}`;

  nodes[nodeId] = {
    id: nodeId,
    name,
    x: centroidX,
    y: centroidY,
    isCompetNode: true,
  };
  layouts.nodes[nodeId] = { x: centroidX, y: centroidY };

  nextNodeIndex.value++;
};

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

// Event Handling -------------------------------------------------------------
const EVENTS_COUNT = 6;

const eventLogs = reactive<[string, string, string][]>([]);

var selfLoopEdgeLabel = document.getElementsByClassName(
  "self-loop-label-text"
) as HTMLCollectionOf<HTMLElement>;

const isBoxSelectionMode = ref(false);
const eventHandlers: EventHandlers = {
  "view:mode": (mode) => {
    isBoxSelectionMode.value = mode === "box-selection";
  },
  // Wildcard: capture all events -----------------------------------------
  "*": (type, event) => {
    const timestamp = new Date().toISOString();
    if (eventLogs.length > EVENTS_COUNT) {
      eventLogs.splice(EVENTS_COUNT, eventLogs.length - EVENTS_COUNT);
    }
    if (event instanceof Object && "event" in event) {
      Object.assign(event, { event: "(...)" });
    }
    eventLogs.unshift([timestamp, type, JSON.stringify(event)]);
  },
  // ----------------------------------------------------------------------
  "view:zoom": () => {
    for (var nodeId in nodes) {
      for (var edgeId in edges) {
        if (
          edges[edgeId].source === nodeId &&
          edges[edgeId].target === nodeId
        ) {
          locateSelLoopEdgeLabel(
            layouts.nodes[nodeId].x / zoomLevel.value - 110 + "px",
            layouts.nodes[nodeId].y / zoomLevel.value + 50 + "px"
          );
        }
      }
    }
  },
  "view:pan": (event) => {
    if (eventLogs.length > 1) {
      for (var nodeId in nodes) {
        for (var edgeId in edges) {
          if (
            edges[edgeId].source === nodeId &&
            edges[edgeId].target === nodeId
          ) {
            locateSelLoopEdgeLabel(
              layouts.nodes[nodeId].x + event.x / 2 + "px",
              layouts.nodes[nodeId].y + event.y / 2 + "px"
            );
          }
        }
      }
    }
  },
  "node:pointermove": () => {
    for (var nodeId in nodes) {
      for (var edgeId in edges) {
        if (
          edges[edgeId].source === nodeId &&
          edges[edgeId].target === nodeId
        ) {
          initialLocationSelLoopEdgeLabel();
        }
      }
    }
  },
};

const initialLocationSelLoopEdgeLabel = () => {
  for (var nodeId in nodes) {
    for (var edgeId in edges) {
      if (edges[edgeId].source === nodeId && edges[edgeId].target === nodeId) {
        locateSelLoopEdgeLabel(
          layouts.nodes[nodeId].x - 110 + "px",
          layouts.nodes[nodeId].y + 50 + "px"
        );
      }
    }
  }
};

const locateSelLoopEdgeLabel = (left: string, top: string) => {
  selfLoopEdgeLabel[0].style.left = left;
  selfLoopEdgeLabel[0].style.top = top;
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

// Modals elements -------------------------------------------------------------
const openRenameModal = () => {
  if (selectedNodes.value.length !== 1) return;
  renameNodeModal.show();
};

let renameNodeModal: Modal | null = null;
let nameFileToSaveModal: Modal | null = null;
let helpCenterModal: Modal | null = null;
let clearAllModal: Modal | null = null;

onMounted(() => {
  const modalElement = document.getElementById("renameNodeModal");
  renameNodeModal = new Modal(modalElement);

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

  initialLocationSelLoopEdgeLabel();
});

// Rename Node -------------------------------------------------------------
const newNodeNamePart1 = ref("");
const newNodeNamePart2 = ref("");
const newEdgeName = ref("");

const renameNode = () => {
  if (newNodeNamePart1.value === null || newNodeNamePart1.value === undefined || newNodeNamePart2.value === null || newNodeNamePart2.value === undefined) return;
  const nodeId = selectedNodes.value[0];
  nodes[nodeId].name = `${newNodeNamePart1.value}, ${newNodeNamePart2.value}`;
  newNodeNamePart1.value = "";
  newNodeNamePart2.value = "";
  renameNodeModal.hide();
};

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
.container-all {
  display: grid;
  grid-template-rows: 18% 1fr;
  grid-template-columns: auto;
}

.editor-container {
  display: flex;
  height: 100vh;
}

.editor-content {
  flex: 1;
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

.self-loop-label {
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
}

.self-loop-label-text {
  position: absolute;
}

.upload-file {
  display: none;
}

.event-logs {
  position: absolute;
  inset: auto 10px 10px auto;
  margin-left: 10px;
  margin-bottom: 150px;
  padding: 10px;
  background: #ffff0044;
  border-radius: 4px;
  font-size: 11px;
  font-family: monospace;
  line-height: 11px;
  pointer-events: none;
}
.event-logs div {
  word-break: break-all;
}
.event-type {
  font-weight: bold;
}

@media screen and (max-width: 600px) {
  .bi {
    font-size: 1.5em;
  }
}
</style>
