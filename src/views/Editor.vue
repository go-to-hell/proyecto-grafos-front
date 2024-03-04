<template>
  <div class="container-all">
    <div class="editor-sidebar">
      <!-- Sidebar Content -->
      <h2 class="text-center mb-3">Funciones</h2>

      <!-- Rename Node Modal -->
      <div class="modal" tabindex="-1" id="renameNodeModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Renombrar nodo</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <input type="text" class="form-control" v-model="newNodeName" placeholder="Ingrese el nuevo nombre del nodo">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" class="btn btn-primary" @click="renameNode">Guardar cambios</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Rename Edge Modal -->
      <div class="modal" tabindex="-1" id="renameEdgeModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Renombrar arista</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <input type="text" class="form-control" v-model="newEdgeName" placeholder="Ingrese el nuevo nombre de la arista">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" class="btn btn-primary" @click="renameEdge">Guardar cambios</button>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="confirmDeleteModal" tabindex="-1" aria-labelledby="confirmDeleteModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="confirmDeleteModalLabel">Confirmar Eliminación</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>¿Está seguro de querer borrar el elemento?</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" class="btn btn-primary" @click="confirmDelete">Confirmar</button>
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
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <input type="text" class="form-control" v-model="fileNameToSave" placeholder="Ingrese el nombre del archivo a guardar">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" class="btn btn-primary" @click="saveGraph">Guardar</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Help Center Modal -->
      <div class="modal fade" tabindex="-1" id="helpCenterModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Centro de Ayuda</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>¡Hola! 😄 ¡Bienvenido al increíble mundo de los grafos! 🌐✨ Aquí te dejamos una guía rápida para que domines esta herramienta como un pro:</p>
              <p>✨ ¡Bienvenido a tu Editor de Grafos Favorito! 🚀</p>
              <p><strong>Agregar Nodos 🧩</strong><br>
                ¡Haz clic en el botón "Agregar" y comienza a crear tu obra maestra! Luego, simplemente dale clic en el área de dibujo para soltar esos nodos como si fueran confeti.</p>
              <p><strong>Eliminar Nodos 🗑️</strong><br>
                ¿Te arrepentiste de ese nodo? Haz clic en él y presiona "Eliminar" o simplemente usa la mágica tecla "Delete" en tu teclado.</p>
              <p><strong>Agregar Aristas ➡️</strong><br>
                Haz clic en dos nodos y crea una conexión con el botón "Agregar Arista". ¡Conecta tus ideas de manera brillante!</p>
              <p><strong>Eliminar Aristas 🗡️</strong><br>
                Selecciona una arista y presiona "Eliminar Arista" o utiliza la tecla "Delete". ¡Desconecta sin esfuerzo tus conexiones menos útiles!</p>
              <p><strong>Dirección de Aristas 🚦</strong><br>
                Selecciona una arista y elige su destino con los botones de dirección. ¡Controla el flujo de la conexión con estilo!</p>
              <p><strong>Centrar y Ajustar 🔄</strong><br>
                ¡No más caos desordenado! Utiliza los botones para centrar y ajustar tu grafo y obtener una vista panorámica.</p>
              <p><strong>Zoom In & Zoom Out 🔍</strong><br>
                Acércate a la acción con "Zoom In" o toma una vista general con "Zoom Out". ¡Tu grafo, tu perspectiva!</p>
              <p><strong>Iniciar Selección 🎯</strong><br>
                ¿Quieres destacar varios nodos a la vez? Activa "Iniciar Selección" y desata tu poder de selección masiva.</p>
              <p><strong>Renombrar Nodos y Aristas 🏷️</strong><br>
                Dale a tus nodos y aristas nombres épicos. Haz clic en ellos, edita el nombre y sé el narrador de tu propio grafo.</p>
              <p><strong>Enlazar Nodos con Shift+Alt+e 🌐</strong><br>
                Selecciona dos nodos y mantén presionadas las teclas Shift+Alt+e para enlazarlos con una arista.</p>
              <p><strong>Guardar y Abrir 📂</strong><br>
                No dejes que tus obras maestras se pierdan. Guarda y abre archivos localmente para retomar tus épicas creaciones.</p>
              <p><strong>Matriz de Adyacencia 📊</strong><br>
                Haz clic en "Matriz de Adyacencia" para explorar la estructura subyacente de tu obra maestra en forma de matriz.</p>
              <p>¡Y eso es básicamente todo! Ahora, ve y conquista el mundo de los grafos con tu creatividad desbordante. ¡Buena suerte, maestro del grafo! 🚀🎨</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal">OK</button>
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
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <pre id="adjacencyMatrix"></pre>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">OK</button>
            </div>
          </div>
        </div>
      </div>

      <!-- View Controls -->
      <div>
        <div class="d-flex gap-3">
          <button 
            :class="isAddingNode === true ? 'btn btn-info bi bi-plus-lg w-100 py-2 mt-1' : 'btn btn-outline-info bi bi-plus-lg w-100 py-2 mt-1'" 
            @click="startAddingNode">
            Agregar Nodo
          </button>
          <button class="bi bi-trash w-100 py-2 mt-1" :class="selectedNodes.length > 0 ? 'btn btn-info' : 'btn btn-outline-info'" @click="handleDeletion">Eliminar Nodo</button>
        </div>
        <div class="d-flex gap-3">
          <button class="bi bi-plus-lg w-100 py-2 mt-1"
            :class="selectedNodes.length === 1 || selectedNodes.length === 2 ? 'btn btn-info' : 'btn btn-outline-info'" 
            @click="edgeAdditionButton">
            Agregar Arista
          </button>
          <button class="bi bi-trash w-100 py-2 mt-1" :class="selectedEdges.length > 0 ? 'btn btn-info' : 'btn btn-outline-info'" @click="handleDeletion">Eliminar Arista</button>
        </div>
        <div class="d-flex gap-3 my-3">
          <button class="bi bi-arrow-right w-100 py-2 mt-1"
            :class="selectedEdges.length === 1 ? 'btn btn-info' : 'btn btn-outline-info'"
            @click="setUnidirectionalRightEdge"
          ></button>
          <!-- <button class="bi bi-arrow-left w-100 py-2 mt-1" 
            :class="selectedEdges.length === 1 ? 'btn btn-info' : 'btn btn-outline-info'"
          ></button> -->
          <button class="bi bi-arrows w-100 py-2 mt-1"
            :class="selectedEdges.length === 1 ? 'btn btn-info' : 'btn btn-outline-info'"
            @click="setBidirectionalEdge"
          ></button>
          <button class="bi bi-dash w-100 py-2 mt-1"
            :class="selectedEdges.length === 1 ? 'btn btn-info' : 'btn btn-outline-info'"
            @click="setUndirectedEdge"
          ></button>
        </div>
        <div class="my-3">
          <button class="btn btn-outline-info w-100 py-2" @click="panToCenter">Centrar</button>
          <button class="btn btn-outline-info w-100 py-2 mt-2" @click="fitToContents">Ajustar</button>
        </div>
        <div class="d-flex gap-3">
          <button class="btn btn-outline-info bi bi-plus-circle w-100 py-2 mt-1" @click="zoomIn"></button>
          <button class="btn btn-outline-info bi bi-dash-circle w-100 py-2 mt-1" @click="zoomOut"></button>
        </div>

        <button
          :class="isBoxSelectionMode ? 'btn btn-info w-100 py-2 mt-3' : 'btn btn-outline-info w-100 py-2 mt-3'"
          @click="toggleBoxSelection"
        >
          {{ isBoxSelectionMode ? 'Detener selección' : 'Iniciar selección' }}
        </button>

        <button
          :class="selectedNodes.length === 1 ? 'btn btn-info w-100 py-2 mt-2' : 'btn btn-outline-info w-100 py-2 mt-2'"
          @click="openRenameModal"
        >
          Renombrar Nodo
        </button>

        <button
          :class="selectedEdges.length === 1 ? 'btn btn-info w-100 py-2 mt-2' : 'btn btn-outline-info w-100 py-2 mt-2'"
          @click="openRenameEdgeModal"
        >
          Renombrar Arista
        </button>

        <button class="btn btn-outline-info w-100 py-2 mt-2" @click="openFileNameModal">
          Guardar Archivo
        </button>
        <input type="file" class="upload-file my-2 mt-2 form-control" @change="loadGraph" accept=".json" />
        <button class="btn btn-outline-info w-100 py-2 mt-2" @click="openGraphFile">Abrir Archivo</button>
        <p class="alert alert-info alert-dismissible fade show mt-2" v-if="fileNameSaved">Archivo seleccionado: {{ fileNameSaved }}</p>

        <button class="btn btn-outline-info w-100 py-2 mt-2" @click="openAdjacencyMatrixModal">Matriz de Adyacencia</button>
      </div>

      <!-- Bootstrap alert for saveGraph success/error -->
      <div v-if="saveGraphSuccess" class="alert alert-success alert-dismissible fade show mt-2" role="alert">
        El grafo ha sido guardado exitosamente.
        <button type="button" class="btn-close" @click="saveGraphSuccess = false"></button>
      </div>
      <div v-if="saveGraphError" class="alert alert-info alert-dismissible fade show mt-2" role="alert">
        Error al guardar el grafo.
        <button type="button" class="btn-close" @click="saveGraphError = false"></button>
      </div>

      <!-- Bootstrap alert for loadGraph success/error -->
      <div v-if="loadGraphSuccess" class="alert alert-success alert-dismissible fade show mt-2" role="alert">
        El grafo ha sido cargado exitosamente.
        <button type="button" class="btn-close" @click="loadGraphSuccess = false"></button>
      </div>
      <div v-if="loadGraphError" class="alert alert-info alert-dismissible fade show mt-2" role="alert">
        Error al cargar el grafo.
        <button type="button" class="btn-close" @click="loadGraphError = false"></button>
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
          @keydown="edgeAdditionKey"
        >
        <template #edge-label="{ edge, hovered, selected, ...slotProps }">
          <v-edge-label 
            :class="{ hovered, selected }"
            :text="edge.label"
            align="center"
            vertical-align="above"
            v-bind="slotProps"
          />
        </template>
          <Background />
        </v-network-graph>
      </div>
    </div>
  </div>
  <button
    @click="goBack"
    class="btn btn-primary position-absolute top-0 end-0 mt-3 me-3"
  >
    <i class="bi bi-arrow-left"></i>
  </button>

  <div class="rounded-buttons">
    <button @click="openHelp" class="btn btn-primary rounded m-1">
      <i class="bi bi-question-lg"></i>
    </button>
    <button @click="openSettings" class="btn btn-primary rounded m-1">
      <i class="bi bi-exclamation-lg"></i>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted, computed } from "vue";
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
import { Modal } from 'bootstrap';

import fileService from "../services/fileService.js";

const router = useRouter();

const goBack = () => {
  router.go(-1);
};

const graph = ref<VNetworkGraphInstance | null>(null);
let nodes: Nodes = reactive({ ...data.nodes });
let edges: Edges = reactive({ ...data.edges });
let layouts = reactive(data.layouts);

const nextNodeIndex = ref(Object.keys(nodes).length + 1);
const nextEdgeIndex = ref(Object.keys(edges).length + 1);
const selectedNodes = ref<string[]>([]);
const selectedEdges = ref<string[]>([]);
const zoomLevel = ref(1);

const panToCenter = () => graph.value?.panToCenter();
const fitToContents = () => graph.value?.fitToContents();
const zoomIn = () => graph.value?.zoomIn();
const zoomOut = () => graph.value?.zoomOut();

let sourceEdgeType = ref("");
let targetEdgeType = ref("");

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
      radius: 16,
      width: 32,
      height: 32,
      borderRadius: 4,
      strokeWidth: 0,
      strokeColor: "#000000",
      strokeDasharray: "0",
      color: "#4466cc",
    },
    hover: {
      type: "circle",
      radius: 16,
      width: 32,
      height: 32,
      borderRadius: 4,
      strokeWidth: 0,
      strokeColor: "#000000",
      strokeDasharray: "0",
      color: "#dd2288",
    },
    selected: {
      type: "circle",
      radius: 16,
      width: 32,
      height: 32,
      borderRadius: 4,
      strokeWidth: 0,
      strokeColor: "#000000",
      strokeDasharray: "0",
      color: "#4466cc",
>>>>>>> 454a89f63301c1711385a73c1d06be66c0c62799
    },
    label: {
      visible: true,
      fontFamily: "Sans serif",
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
      color: "#4466cc",
      dasharray: "0",
      linecap: "butt",
      animate: false,
      animationSpeed: 50,
    },
    hover: {
      width: 4,
      color: "#3355bb",
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
    gap: 5,
    type: "straight",
    margin: 2,
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
      radius: 14,
      offset: 16,
      angle: 180,
      isClockwise: true,
    },
    keepOrder: "horizontal",
  },
});

let isAddingNode = ref(false);

const handleNodeAddition = () => {
  if (isAddingNode.value && graph.value) {
    const nodeId = `node${nextNodeIndex.value}`;
    const name = `Nodo ${nextNodeIndex.value}`;
    
    // Get the mouse position in DOM coordinates
    const domPoint = { x: mousePosition.value.x, y: mousePosition.value.y };

    // Get the position of the SVG element in the DOM
    const svgElement = graph.value.$el;
    const svgRect = svgElement.getBoundingClientRect();

    // Subtract the SVG element's offset from the mouse coordinates
    const svgPoint = {
      x: domPoint.x - svgRect.left,
      y: domPoint.y - svgRect.top,
    };

    // Translate the coordinates from SVG to DOM
    const svgToDomPoint = graph.value.translateFromDomToSvgCoordinates(svgPoint);

    // Add node and its position
    nodes[nodeId] = { id: nodeId, name, x: svgToDomPoint.x, y: svgToDomPoint.y };
    layouts.nodes[nodeId] = { x: svgToDomPoint.x, y: svgToDomPoint.y };
    
    nextNodeIndex.value++;
  }
};


function startAddingNode() {
  isAddingNode.value = !isAddingNode.value;
};

const mousePosition = ref({ x: 0, y: 0 });

const updateMousePosition = (event) => {
  mousePosition.value.x = event.clientX;
  mousePosition.value.y = event.clientY;
};

onMounted(() => {
  window.addEventListener('mousemove', updateMousePosition);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', updateMousePosition);
});


const confirmDeleteModal = ref<Modal | null>(null);

onMounted(() => {
  const modalElement = document.getElementById('confirmDeleteModal');
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

const edgeAdditionButton = () => {
  let [source, target] = ["", ""];
  if (selectedNodes.value.length === 1) {
    source = target = selectedNodes.value.toString();
  } else if (selectedNodes.value.length === 2) {
    [source, target] = selectedNodes.value.map(node => node.toString());
  } else return;
  const edgeId = `edge${nextEdgeIndex.value}`;
  const label = `Arista ${nextEdgeIndex.value}`;
  edges[edgeId] = { source, target, label };
  nextEdgeIndex.value++;
};

const edgeAdditionKey = (event: KeyboardEvent) => {
  if (event.shiftKey && event.altKey && event.key.toLowerCase() === "e") {
    edgeAdditionButton();
  }
};

const isBoxSelectionMode = ref(false);
const eventHandlers: EventHandlers = {
  "view:mode": (mode) => {
    // Observa eventos de cambio de modo
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
    startBoxSelection();
  }
};

const openRenameModal = () => {
  if (selectedNodes.value.length !== 1) return;
  renameNodeModal.show();
};

let renameNodeModal = null;
let remaneEdgeModal = null;
let nameFileToSaveModal = null;
let helpCenterModal = null;
let adjacencyMatrixModal = null;

onMounted(() => {
  const modalElement = document.getElementById('renameNodeModal');
  renameNodeModal = new Modal(modalElement);

  const saveFileModalElement = document.getElementById("fileNameToSave");
  nameFileToSaveModal = new Modal(saveFileModalElement);

  const helpCenterModalElement = document.getElementById("helpCenterModal");
  helpCenterModal = new Modal(helpCenterModalElement);

  const adjacencyMatrixModalElement = document.getElementById("adjacencyMatrixModal");
  adjacencyMatrixModal = new Modal(adjacencyMatrixModalElement);

  const remaneEdgeModalElement = document.getElementById("renameEdgeModal");
  remaneEdgeModal = new Modal(remaneEdgeModalElement);
});

const newNodeName = ref('');
const newEdgeName = ref("");

const renameNode = () => {
  if (!newNodeName.value) return;
  const nodeId = selectedNodes.value[0];
  nodes[nodeId].name = newNodeName.value;
  newNodeName.value = '';
  renameNodeModal.hide();
};

const renameEdge = () => {
  if (!newEdgeName.value) return;
  const edgeId = selectedEdges.value[0];
  edges[edgeId].label = newEdgeName.value;
  newEdgeName.value = "";
  remaneEdgeModal.hide();
};

const openRenameEdgeModal = () => {
  if (selectedEdges.value.length !== 1) return;
  remaneEdgeModal.show();
};

const setUnidirectionalEdges = () => {
  if (selectedEdges.value.length !== 1) return;
  // sourceEdgeType = "none";
  // targetEdgeType = "arrow";
};

const setBidirectionalEdge = () => {
  if (selectedEdges.value.length !== 1) return;
  // sourceEdgeType = "none";
  // targetEdgeType = "arrow";
};

const setUndirectedEdge = () => {
  if (selectedEdges.value.length !== 1) return;
  // sourceEdgeType = "none";
  // targetEdgeType = "arrow";
};

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
    const blob = new Blob([jsonData], { type: 'application/json' });

    // Create a download link
    const a = document.createElement('a');
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
    console.error('Error al guardar el grafo:', error);
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
      console.log('File:', file);
      fileNameSaved.value = file.name;
      const fileContent = await file.text();
      console.log('File content:', fileContent);
      const graphData = JSON.parse(fileContent);

      // Update nodes, edges, and layouts with loaded data
      Object.assign(nodes, graphData.nodes);
      Object.assign(edges, graphData.edges);
      Object.assign(layouts, graphData.layouts);

      // If a node or an edge does not exist in the JSON but it exists in the canvas, delete it
      for (const nodeId in nodes) {
        if (!graphData.nodes[nodeId]) {
          delete nodes[nodeId];
          delete layouts.nodes[nodeId];
        }
      }

      loadGraphSuccess.value = true;
    } catch (error) {
      console.error('Error al cargar el grafo:', error);
      loadGraphError.value = true;
    }
  }
};

const openGraphFile = () => {
  const inputElement = document.querySelector('input[type="file"]');
  (inputElement as HTMLInputElement).click();
};

const openHelp = () => {
  helpCenterModal.show();
};

const openAdjacencyMatrixModal = () => {
  adjacencyMatrixModal.show();
};
</script>

<style scoped>
.container-all {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 18% 1fr;
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

.zoom-slider {
  margin-bottom: 10px;
}

.rounded-buttons {
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.upload-file {
  display: none;
}
</style>
