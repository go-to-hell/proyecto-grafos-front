<template>
  <div class="container-all">
    <div class="editor-sidebar">
      <!-- Sidebar Content -->
      <h2 class="text-center mb-3">Funciones</h2>
      <!-- <button class="action-button" @click="addNode">Agregar Nodo</button> -->
      <!-- <button
        class="action-button"
        :disabled="selectedNodes.length === 0"
        @click="removeNode"
      >
        Eliminar Nodos
      </button> -->
      <!-- <button
        class="action-button"
        :disabled="selectedNodes.length !== 2"
        @click="addEdge"
      >
        Agregar Arista
      </button> -->
      <!-- <button
        class="action-button"
        :disabled="selectedEdges.length === 0"
        @click="removeEdge"
      >
        Eliminar Aristas
      </button> -->

      <!-- View Controls -->
      <div class="control-buttons">
        <div>
          <button @click="panToCenter">Centrar</button>
          <button @click="fitToContents">Ajustar</button>
        </div>
        <div class="d-flex gap-3">
          <button class="bi bi-plus-circle-fill" @click="zoomIn"></button>
          <button class="bi bi-dash-circle-fill" @click="zoomOut"></button>
        </div>
      </div>

      <!-- Configuration checkboxes -->
      <div class="py-3">
        <div class="d-flex gap-4">
          <input
            type="checkbox"
            name="panEnabled"
            id="panEnabled"
            v-model="configs.view.panEnabled"
          />
          <label for="panEnabled">Pan habilitado</label>
        </div>
        <div class="d-flex gap-4">
          <input
            type="checkbox"
            name="zoomEnabled"
            id="zoomEnabled"
            v-model="configs.view.zoomEnabled"
          />
          <label for="zoomEnabled">Zoom habilitado</label>
        </div>
        <div class="d-flex gap-4">
          <input
            type="checkbox"
            name="draggable"
            id="draggable"
            v-model="configs.node.draggable"
          />
          <label for="draggable">Node arrastrable</label>
        </div>
      </div>

      <!-- Selection Controls -->
      <div class="demo-control-panel">
        <button
          class="action-button"
          :disabled="isBoxSelectionMode"
          @click="startBoxSelection"
        >
          Iniciar selección
        </button>
        <button
          class="action-button"
          :disabled="!isBoxSelectionMode"
          @click="stopBoxSelection"
        >
          Detener selección
        </button>
      </div>

      <!-- Save controls -->
      <div class="demo-control-panel">
        <button class="action-button" @click="saveGraph">
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
          @click="handleNodeAddition"
          @keydown="handleEdgeAddition"
        >
          <Background pattern-color="#990000" />
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
import { ref, reactive } from "vue";
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

const handleNodeAddition = () => {
  const nodeId = `node${nextNodeIndex.value}`;
  const name = `Node ${nextNodeIndex.value}`;
  nodes[nodeId] = { id: nodeId, name: name };
  nextNodeIndex.value++;
};

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
    stop: "click", // Trigger to exit box-selection mode
    type: "append", // Behavior when a node is within a selection rectangle
    withShiftKey: "invert", // `type` value if the shift key is pressed
  });

const stopBoxSelection = () => graph.value?.stopBoxSelection();

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

.action-button {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 14px;
  color: #ffffff;
  background-color: #317dc9;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.control-buttons button {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 14px;
  color: #ffffff;
  background-color: #317dc9;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #5a9bdb;
}

.zoom-slider {
  margin-bottom: 10px;
}
</style>
