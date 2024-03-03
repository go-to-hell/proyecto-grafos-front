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

      <!-- View Controls -->
      <div>
        <div class="d-flex gap-3">
          <button 
            :class="isAddingNode === true ? 'btn btn-danger bi bi-plus-lg w-100 py-2 mt-1' : 'btn btn-outline-danger bi bi-plus-lg w-100 py-2 mt-1'" 
            @click="startAddingNode">
          </button>
          <button class="btn btn-outline-danger bi bi-trash w-100 py-2 mt-1" @click="zoomOut"></button>
        </div>
        <div class="d-flex gap-3 my-3">
          <button class="btn btn-outline-danger bi bi-arrow-right w-100 py-2 mt-1" @click="zoomIn"></button>
          <button class="btn btn-outline-danger bi bi-arrows w-100 py-2 mt-1" @click="zoomOut"></button>
          <button class="btn btn-outline-danger bi bi-chevron-compact-up w-100 py-2 mt-1" @click="zoomOut"></button>
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
const nodes: Nodes = reactive({ ...data.nodes });
const edges: Edges = reactive({ ...data.edges });
const nextNodeIndex = ref(Object.keys(nodes).length + 1);
const nextEdgeIndex = ref(Object.keys(edges).length + 1);
const selectedNodes = ref<string[]>([]);
const selectedEdges = ref<string[]>([]);
const zoomLevel = ref(1);
const layouts = reactive(data.layouts);

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

// const removeNode = () => {
//   for (const nodeId of selectedNodes.value) {
//     delete nodes[nodeId];
//   }
// };

const handleDeletion = () => {
  if (selectedNodes.value.length > 0) {
    const names = selectedNodes.value.map((n) => nodes[n].name).join(", ");
    console.log(nodes);
    const confirmed = confirm(`¿Está seguro de querer borrar [${names}]?`);
    if (confirmed) {
      selectedNodes.value.forEach((n) => delete nodes[n]);
    }
  } else if (selectedEdges.value.length > 0) {
    const ids = selectedEdges.value.join(", ");
    const confirmed = confirm(`¿Está seguro de querer borrar [${ids}]?`);
    if (confirmed) {
      selectedEdges.value.forEach((e) => delete edges[e]);
    }
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

// const removeEdge = () => {
//   for (const edgeId of selectedEdges.value) {
//     delete edges[edgeId];
//   }
// };

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

const saveGraph = () => {
  const file_service = new fileService();
  const graphData = {
    nodes: nodes,
    edges: edges,
    layouts: layouts,
  };

  // Upload data to server as JSON file
  const data_blob = new Blob([JSON.stringify(graphData)], {
    type: "text/json",
  });

  const response = file_service.upload(data_blob, "graph-data.json");

  if (response) {
    alert("El grafo ha sido guardado exitosamente.");
  } else {
    alert("Error al guardar el grafo.");
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
  /* cursor: grab; */
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
