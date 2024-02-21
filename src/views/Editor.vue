<template>
    <div class="editor-container">

        <div class="editor-content">
            <!-- Editor Content -->
            <v-network-graph ref="graph" v-model:zoom-level="zoomLevel" v-model:selected-nodes="selectedNodes"
                v-model:selected-edges="selectedEdges" :nodes="nodes" :edges="edges" :layouts="layouts" :configs="configs"
                :event-handlers="eventHandlers">
                <Background pattern-color="#990000" />
            </v-network-graph>
        </div>

        <div class="editor-sidebar">
            <!-- Sidebar Content -->
            <button class="action-button" @click="addNode">Agregar Nodo</button>
            <button class="action-button" :disabled="selectedNodes.length === 0" @click="removeNode">Eliminar Nodos</button>
            <button class="action-button" :disabled="selectedNodes.length !== 2" @click="addEdge">Agregar Arista</button>
            <button class="action-button" :disabled="selectedEdges.length === 0" @click="removeEdge">Eliminar
                Aristas</button>

            <!-- View Controls -->
            <div class="control-buttons">
                <button @click="panToCenter">Centrar</button>
                <button @click="fitToContents">Ajustar</button>
                <button @click="zoomIn">Acercar</button>
                <button @click="zoomOut">Alejar</button>
            </div>

            <!-- Configuration checkboxes -->
            <div class="config-checkboxes">
                <label><input type="checkbox" v-model="configs.view.panEnabled" /> Pan habilitado</label>
                <label><input type="checkbox" v-model="configs.view.zoomEnabled" /> Zoom habilitado</label>
                <label><input type="checkbox" v-model="configs.node.draggable" /> Node arrastrable</label>
            </div>

            <!-- Selection Controls -->
            <div class="demo-control-panel">
                <button class="action-button" :disabled="isBoxSelectionMode" @click="startBoxSelection">Iniciar
                    selección</button>
                <button class="action-button" :disabled="!isBoxSelectionMode" @click="stopBoxSelection">Detener
                    selección</button>
            </div>

            <!-- Save controls -->
            <div class="demo-control-panel">
                <button class="action-button" @click="saveGraph">Guardar</button>
            </div>
        </div>
    </div>
</template> 

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { Nodes, Edges, VNetworkGraphInstance, EventHandlers, defineConfigs } from 'v-network-graph';
import { VueFlow } from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import data from '../data/initial-data.js';


const graph = ref<VNetworkGraphInstance | null>(null);
const nodes: Nodes = reactive({ ...data.nodes });
const edges: Edges = reactive({ ...data.edges });
const nextNodeIndex = ref(Object.keys(nodes).length + 1);
const nextEdgeIndex = ref(Object.keys(edges).length + 1);
const selectedNodes = ref<string[]>([]);
const selectedEdges = ref<string[]>([]);
const zoomLevel = ref(1);
const layouts = reactive(data.layouts);

const addNode = () => {
    const nodeId = `node${nextNodeIndex.value}`;
    const name = `N${nextNodeIndex.value}`;
    nodes[nodeId] = { name };
    nextNodeIndex.value++;
};

const removeNode = () => {
    for (const nodeId of selectedNodes.value) {
        delete nodes[nodeId];
    }
};

const addEdge = () => {
    if (selectedNodes.value.length !== 2) return;
    const [source, target] = selectedNodes.value;
    const edgeId = `edge${nextEdgeIndex.value}`;
    edges[edgeId] = { source, target };
    nextEdgeIndex.value++;
};

const removeEdge = () => {
    for (const edgeId of selectedEdges.value) {
        delete edges[edgeId];
    }
};

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
                color: '#0000ff20',
                strokeWidth: 1,
                strokeColor: '#aaaaff',
                strokeDasharray: '0',
            },
        },
    },
    node: {
        selectable: true,
        draggable: true,
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
    'view:mode': (mode) => {
        // Observa eventos de cambio de modo
        isBoxSelectionMode.value = mode === 'box-selection';
    },
};

const startBoxSelection = () => graph.value?.startBoxSelection({
    stop: 'click', // Trigger to exit box-selection mode
    type: 'append', // Behavior when a node is within a selection rectangle
    withShiftKey: 'invert', // `type` value if the shift key is pressed
});

const stopBoxSelection = () => graph.value?.stopBoxSelection();

const saveGraph = () => {
    const graphData = {
        nodes: nodes,
        edges: edges,
        layouts: layouts,
    };

    // Download data as JSON file
    const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(graphData, null, 2))}`;
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute('href', dataStr);
    downloadAnchorNode.setAttribute('download', 'graph-data.json');
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
    
};
</script>

<style scoped>
.editor-container {
    display: flex;
    height: 100vh;
}

.editor-content {
    flex: 1;
    padding: 20px;
    cursor: grab;
}

.editor-sidebar {
    width: 300px;
    padding: 20px;
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

.zoom-slider {
    margin-bottom: 10px;
}

.config-checkboxes label {
    display: block;
    margin-bottom: 5px;
}
</style>