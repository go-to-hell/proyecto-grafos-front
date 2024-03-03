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
              <h5 class="modal-title">Rename Node</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <input type="text" class="form-control" v-model="newNodeName" placeholder="Enter new name">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" @click="renameNode">Save changes</button>
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

      <div class="modal" id="matrixModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Adjacency Matrix</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <pre id="adjacencyMatrix"></pre>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      <!-- View Controls -->
      <div>
        <div class="d-flex gap-3">
          <button 
            :class="isAddingNode === true ? 'btn btn-danger bi bi-plus-lg w-100 py-2 mt-1' : 'btn btn-outline-danger bi bi-plus-lg w-100 py-2 mt-1'" 
            @click="startAddingNode">
            Agregar
          </button>
          <button class="btn btn-outline-danger bi bi-trash w-100 py-2 mt-1" @click="handleDeletion">Eliminar</button>
        </div>
        <div class="d-flex gap-3 my-3">
          <button class="btn btn-outline-danger bi bi-arrow-right w-100 py-2 mt-1"></button>
          <button class="btn btn-outline-danger bi bi-arrows w-100 py-2 mt-1"></button>
          <button class="btn btn-outline-danger bi bi-chevron-compact-up w-100 py-2 mt-1"></button>
        </div>
        <div class="my-3">
          <button class="btn btn-outline-danger w-100 py-2" @click="panToCenter">Centrar</button>
          <button class="btn btn-outline-danger w-100 py-2 mt-2" @click="fitToContents">Ajustar</button>
        </div>
        <div class="d-flex gap-3">
          <button class="btn btn-outline-danger bi bi-plus-circle w-100 py-2 mt-1" @click="zoomIn"></button>
          <button class="btn btn-outline-danger bi bi-dash-circle w-100 py-2 mt-1" @click="zoomOut"></button>
        </div>

        <button
          :class="isBoxSelectionMode ? 'btn btn-danger w-100 py-2 mt-3' : 'btn btn-outline-danger w-100 py-2 mt-3'"
          @click="toggleBoxSelection"
        >
          {{ isBoxSelectionMode ? 'Detener selección' : 'Iniciar selección' }}
        </button>

        <button
          :class="selectedNodes.length === 1 ? 'btn btn-danger w-100 py-2 mt-2' : 'btn btn-outline-danger w-100 py-2 mt-2'"
          @click="openRenameModal"
        >
          Renombrar Nodo
        </button>

        <button class="btn btn-outline-danger w-100 py-2 mt-2" @click="saveGraph">
          Guardar Archivo
        </button>
        <input type="file" class="my-2 form-control" @change="loadGraph" accept=".json" />
      </div>

      <!-- Bootstrap alert for saveGraph success/error -->
      <div v-if="saveGraphSuccess" class="alert alert-success alert-dismissible fade show mt-2" role="alert">
        El grafo ha sido guardado exitosamente.
        <button type="button" class="btn-close" @click="saveGraphSuccess = false"></button>
      </div>
      <div v-if="saveGraphError" class="alert alert-danger alert-dismissible fade show mt-2" role="alert">
        Error al guardar el grafo.
        <button type="button" class="btn-close" @click="saveGraphError = false"></button>
      </div>

      <!-- Bootstrap alert for loadGraph success/error -->
      <div v-if="loadGraphSuccess" class="alert alert-success alert-dismissible fade show mt-2" role="alert">
        El grafo ha sido cargado exitosamente.
        <button type="button" class="btn-close" @click="loadGraphSuccess = false"></button>
      </div>
      <div v-if="loadGraphError" class="alert alert-danger alert-dismissible fade show mt-2" role="alert">
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
          @keydown="handleEdgeAddition"
        >
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
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from "vue";
import {
  Nodes,
  Edges,
  VNetworkGraphInstance,
  EventHandlers,
  defineConfigs,
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
    label: {
      visible: true,
      fontFamily: "Sans serif",
      fontSize: 12,
      lineHeight: 1.1,
      color: "#000000",
      margin: 4,
      direction: "south",
      text: "name",
    },
  },
  edge: {
    selectable: true,
    normal: {
      width: 3,
    },
  },
});

let isAddingNode = ref(false);

const handleNodeAddition = () => {
  if (isAddingNode.value && graph.value) {
    const nodeId = `node${nextNodeIndex.value}`;
    const name = `Node ${nextNodeIndex.value}`;
    
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
}

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


const handleEdgeAddition = (event: KeyboardEvent) => {
  if (selectedNodes.value.length !== 2) return;
  if (event.shiftKey && event.altKey && event.key.toLowerCase() === "e") {
    const [source, target] = selectedNodes.value;
    const edgeId = `edge${nextEdgeIndex.value}`;
    edges[edgeId] = { source, target };
    nextEdgeIndex.value++;
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

onMounted(() => {
  const modalElement = document.getElementById('renameNodeModal');
  renameNodeModal = new Modal(modalElement);
});

const newNodeName = ref('');

const renameNode = () => {
  if (!newNodeName.value) return;
  const nodeId = selectedNodes.value[0];
  nodes[nodeId].name = newNodeName.value;
  newNodeName.value = '';
  renameNodeModal.hide();
};

const saveGraphSuccess = ref(false);
const saveGraphError = ref(false);

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
    a.download = 'graph-data.json';

    // Append the link to the body and click it to trigger the download
    document.body.appendChild(a);
    a.click();

    // Remove the link from the body
    document.body.removeChild(a);

    saveGraphSuccess.value = true;
  } catch (error) {
    console.error('Error al guardar el grafo:', error);
    saveGraphError.value = true;
  }
};

const loadGraphSuccess = ref(false);
const loadGraphError = ref(false);

const loadGraph = async () => {
  const inputElement = document.querySelector('input[type="file"]');
  const file = (inputElement as HTMLInputElement)?.files?.[0];

  if (file) {
    try {
      console.log('File:', file);
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
</style>
