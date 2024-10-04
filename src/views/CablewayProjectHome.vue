<template>
  <NavBarVue />
  <body>
    <nav
      class="navbar-collapse.justify-content-center navbar-dark bg-primary sticky-top"
    >
      <div class="d-flex justify-content-center">
        <img
          src="../assets/CablewayProjectImages/logo01.png"
          alt="Bajo Esquina Teleférico"
          width="580"
          height="70"
          class="d-inline-block align-text-top mt-2 animate__animated animate__lightSpeedInLeft"
        />
      </div>
    </nav>
    <br /><br />

    <!-- Help Center Modal -->
    <div class="modal fade" tabindex="-1" id="helpCenter">
      <div
        class="modal-dialog modal-dialog-scrollable animate__animated animate__jello"
      >
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
              ¡Hola! 😄 ¡Bienvenido al Proyecto "Bajo Esquina", basado en el
              Algoritmo de Dijkstra para que sepas como movilizarte de manera
              eficiente mediante el transporte de la empresa "Mi Teleférico"!
              🌐✨ Aquí te dejamos una guía rápida para que domines esta
              herramienta como un pro:
            </p>
            <p>
              ✨ ¡Bienvenido a <i class="text-success">Bajo Esquina</i> ! 🚠
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

    <div>
      <div class="container my-4">
        <div class="row">
          <div
            class="col-12 col-md-2 d-none d-md-flex justify-content-center align-items-center mb-3 mb-md-0"
          >
            <img
              src="../assets/CablewayProjectImages/UCBFlag.jpg"
              alt="UCB Flag"
              class="UCBFlag animate__animated animate__fadeIn animate__slower w-100"
              style="max-width: 200px"
            />
          </div>
          <div class="col-12 col-md-8 mb-3 mb-md-0">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe
                class="embed-responsive-item w-100"
                height="400"
                src="https://www.youtube.com/embed/uyGp0JKlktA?autoplay=1&mute=1&controls=0"
                title="EL ALTO - LA PAZ, Bolivia. Great experience with Mi Teleférico, longest cable car of the world."
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div
            class="col-12 col-md-2 d-none d-md-flex justify-content-center align-items-center"
          >
            <img
              src="../assets/CablewayProjectImages/UCBFlag.jpg"
              alt="UCB Flag"
              class="UCBFlag animate__animated animate__fadeIn animate__slower w-100"
              style="max-width: 200px"
            />
          </div>
        </div>
      </div>
      <div class="py-4 my-4 text-center">
        <button
          type="button"
          class="btn btn-warning btn-lg me-4 shadow"
          data-bs-toggle="modal"
          data-bs-target="#cablewayData"
        >
          Ingresar Datos
        </button>
        <button
          type="button"
          class="btn btn-success btn-lg shadow"
          data-bs-toggle="modal"
          data-bs-target="#helpCenter"
        >
          Ayuda<i class="bi bi-question-lg"></i>
        </button>
      </div>
      <div
        class="modal fade"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="cablewayData"
        aria-hidden="true"
        id="cablewayData"
      >
        <div
          class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable animate__animated animate__backInDown"
        >
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Ingresar Datos</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="container">
                <div>
                  <div class="accordion" id="uniqueAccordionID1">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingOne">
                        <button
                          class="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Escoja una tarjeta del teleferico
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        class="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#uniqueAccordionID1"
                      >
                        <div
                          class="accordion-body"
                          style="background-color: deepskyblue"
                        >
                          <fieldset>
                            <div class="row">
                              <div class="form-check col-md-4 col-sm-12">
                                <input
                                  v-model="cardtype"
                                  class="form-check-input"
                                  type="radio"
                                  name="tarjeta"
                                  id="tarjeta1"
                                  value="regular"
                                  checked
                                />
                                <label class="form-check-label label_tarjeta text-center" for="tarjeta1">
                                  <img
                                    class="tarjetas d-block mx-auto"
                                    src="../assets/CablewayProjectImages/tarjeta_normal.png"
                                  />
                                  Tarjeta Normal
                                </label>
                              </div>
                              <div class="form-check col-md-4 col-sm-12">
                                <input
                                  v-model="cardtype"
                                  class="form-check-input"
                                  type="radio"
                                  name="tarjeta"
                                  id="tarjeta2"
                                  value="student"
                                />
                                <label class="form-check-label label_tarjeta text-center" for="tarjeta2">
                                  <img
                                    class="tarjetas d-block mx-auto"
                                    src="../assets/CablewayProjectImages/tarjeta_estudiantil.png"
                                  />
                                  Tarjeta Estudiantil
                                </label>
                              </div>
                              <div class="form-check col-md-4 col-sm-12">
                                <input
                                  v-model="cardtype"
                                  class="form-check-input"
                                  type="radio"
                                  name="tarjeta"
                                  id="tarjeta3"
                                  value="senior"
                                />
                                <label class="form-check-label label_tarjeta text-center" for="tarjeta3">
                                  <img
                                    class="tarjetas d-block mx-auto"
                                    src="../assets/CablewayProjectImages/tarjeta_preferencial.png"
                                  />
                                  Tarjeta Preferencial
                                </label>
                              </div>
                            </div>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion" id="uniqueAccordionID2">
                    <div class="accordion-item" v-if="currentUser.username === 'admin'">
                      <h2 class="accordion-header" id="headingTwo">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <!-- TODO Map to v-model and add on backend -->
                          Escoja las líneas que no se encuentran disponibles
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#uniqueAccordionID2"
                      >
                        <div class="accordion-body bg-info-subtle">
                          <fieldset>
                            <div class="row">
                              <div class="col-md-4 col-sm-12">
                                <input
                                  type="checkbox"
                                  name="Azul"
                                  value="Azul"
                                  id="Azul"
                                  v-model="blueLine"
                                />
                                <label for="Azul" class="label_linea"
                                  ><img
                                    src="../assets/CablewayProjectImages/icono-azul.png"
                                    class="me-2"
                                  />
                                  Azul</label
                                >
                              </div>
                              <div class="col-md-4 col-sm-12">
                                <input
                                  type="checkbox"
                                  name="Cafe"
                                  id="Cafe"
                                  v-model="brownLine"
                                />
                                <label for="Cafe" class="label_linea"
                                  ><img
                                    src="../assets/CablewayProjectImages/icono-cafe.png"
                                    class="me-2"
                                  />
                                  Cafe</label
                                >
                              </div>
                              <div class="col-md-4 col-sm-12">
                                <input
                                  type="checkbox"
                                  name="Plateada"
                                  id="Plateada"
                                  v-model="silverLine"
                                />
                                <label for="Plateada" class="label_linea"
                                  ><img
                                    src="../assets/CablewayProjectImages/icono-plateada.png"
                                    class="me-2"
                                  />
                                  Plateada</label
                                >
                              </div>
                              <div class="col-md-4 col-sm-12">
                                <input
                                  type="checkbox"
                                  name="Naranja"
                                  id="Naranja"
                                  v-model="orangeLine"
                                />
                                <label for="Naranja" class="label_linea"
                                  ><img
                                    src="../assets/CablewayProjectImages/icono-naranja.png"
                                    class="me-2"
                                  />
                                  Naranja</label
                                >
                              </div>
                              <div class="col-md-4 col-sm-12">
                                <input
                                  type="checkbox"
                                  name="Roja"
                                  id="Roja"
                                  v-model="redLine"
                                />
                                <label for="Roja" class="label_linea"
                                  ><img
                                    src="../assets/CablewayProjectImages/icono-roja.png"
                                    class="me-2"
                                  />
                                  Roja</label
                                >
                              </div>
                              <div class="col-md-4 col-sm-12">
                                <input
                                  type="checkbox"
                                  name="Verde"
                                  id="Verde"
                                  v-model="greenLine"
                                />
                                <label for="Verde" class="label_linea"
                                  ><img
                                    src="../assets/CablewayProjectImages/icono-verde.png"
                                    class="me-2"
                                  />
                                  Verde</label
                                >
                              </div>
                              <div class="col-md-4 col-sm-12">
                                <input
                                  type="checkbox"
                                  name="Celeste"
                                  id="Celeste"
                                  v-model="skyBlueLine"
                                />
                                <label for="Celeste" class="label_linea"
                                  ><img
                                    src="../assets/CablewayProjectImages/icono-celeste.png"
                                    class="me-2"
                                  />
                                  Celeste</label
                                >
                              </div>
                              <div class="col-md-4 col-sm-12">
                                <input
                                  type="checkbox"
                                  name="Blanca"
                                  id="Blanca"
                                  v-model="whiteLine"
                                />
                                <label for="Blanca" class="label_linea"
                                  ><img
                                    src="../assets/CablewayProjectImages/icono-blanca.png"
                                    class="me-2"
                                  />
                                  Blanca</label
                                >
                              </div>
                              <div class="col-md-4 col-sm-12">
                                <input
                                  type="checkbox"
                                  name="Amarilla"
                                  id="Amarilla"
                                  v-model="yellowLine"
                                />
                                <label for="Amarilla" class="label_linea"
                                  ><img
                                    src="../assets/CablewayProjectImages/icono-amarilla.png"
                                    class="me-2"
                                  />
                                  Amarilla</label
                                >
                              </div>
                              <div class="col-md-4 col-sm-12">
                                <input
                                  type="checkbox"
                                  name="Morada"
                                  id="Morada"
                                  v-model="purpleLine"
                                />
                                <label for="Morada" class="label_linea"
                                  ><img
                                    src="../assets/CablewayProjectImages/icono-morada.png"
                                    class="me-2"
                                  />
                                  Morada</label
                                >
                              </div>
                            </div>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="form-group my-3">
                    <label>Origen: </label>
                    <select
                      v-model="startNode"
                      name="org1"
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option v-for="(node, key) in data.nodes" :value="key">
                        {{ node.name }}
                      </option>
                    </select>
                  </div>

                  <div class="form-group">
                    <label>Destino: </label>
                    <select
                      v-model="endNode"
                      name="org2"
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option v-for="(node, key) in data.nodes" :value="key">
                        {{ node.name }}
                      </option>
                    </select>
                  </div>

                  <div>
                    <div class="form-group my-3">
                      <label>Optimizar: </label>
                      <select
                        v-model="targetVariable"
                        name="opt"
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option value="time">Tiempo</option>
                        <option value="money">Dinero</option>
                        <option value="energy" v-if="currentUser.username === 'admin'">Energía</option>
                      </select>
                    </div>
                    <div class="form-group my-3" v-if="targetVariable === 'energy'">
                      <label>Energy Constraint: </label>
                      <input
                        v-model="energyConstraint"
                        type="number"
                        min="0"
                        max="1"
                        step="0.01"
                        class="form-control"
                        placeholder="0"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <div class="mx-auto">
                <button
                  type="button"
                  class="btn btn-outline-danger me-4"
                  data-bs-dismiss="modal"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  class="btn btn-success"
                  data-bs-dismiss="modal"
                  @click="findPathAndScroll"
                >
                  ENVIAR
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <h2 class="text-primary text-center">Mapa de Teleférico</h2>
    <h1 class="text-primary p-2">Valor óptimo estimado: {{ optimalValue }}</h1>
    <div class="d-flex">
      <div class="editor-container flex-grow-1">
        <div class="editor-content" id="bottom">
          <!-- Editor Content -->
          <v-network-graph
            ref="graph"
            :nodes="nodes"
            :edges="edges"
            :layouts="data.layouts"
            :configs="data.configs"
            :paths="paths"
          >
            <template #edge-label="{ edge, ...slotProps }">
              <v-edge-label
                :text="edge.label"
                align="center"
                vertical-align="above"
                v-bind="slotProps"
              />

            </template>

            <defs>
              <clipPath id="cablewayCircle" clipPathUnits="objectBoundingBox">
                <circle cx="0.5" cy="0.5" r="0.5" />
              </clipPath>
            </defs>

            <template
              #override-node="{
                nodeId,
                scale,
                config,
                edge,
                hovered,
                selected,
                ...slotProps
              }"
            >
              <!-- circle for filling background -->
              <circle
                class="cableway-circle"
                :r="config.radius * scale"
                fill="#ffffff"
                v-bind="slotProps"
              />
              <!--
              The base position of the <image /> is top left. The node's
              center should be (0,0), so slide it by specifying x and y.
            -->
              <image
                class="cableway-picture"
                :x="-config.radius * scale"
                :y="-config.radius * scale"
                :width="config.radius * scale * 2"
                :height="config.radius * scale * 2"
                :xlink:href="`src/assets/CablewayProjectImages/${nodes[nodeId].icon}`"
                clip-path="url(#cablewayCircle)"
              />
              <!-- circle for drawing stroke -->
              <circle
                class="cableway-circle"
                :r="config.radius * scale"
                fill="none"
                stroke="#808080"
                :stroke-width="1 * scale"
                v-bind="slotProps"
              />
            </template>
          </v-network-graph>
        </div>
      </div>
      <div class="controls-container">
        <div class="controls-header">
          <h5 class="controls-title fw-bold">Funciones</h5>
        </div>
        <div class="controls-body">
          <div>
            <button
              class="btn btn-outline-info w-100 py-2"
              @click="panToCenter"
            >
              Centrar
            </button>
            <button
              class="btn btn-outline-info w-100 py-2 mt-3"
              @click="fitToContents"
            >
              Ajustar
            </button>
          </div>
          <div class="d-flex gap-3">
            <button
              class="btn btn-outline-info bi bi-plus-circle w-100 py-2 mt-3"
              @click="zoomIn"
            ></button>
            <button
              class="btn btn-outline-info bi bi-dash-circle w-100 py-2 mt-3"
              @click="zoomOut"
            ></button>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import * as vNG from "v-network-graph";
import data from "../data/cableway-data.js";
import NavBarVue from "../components/NavBar.vue";
import { useCablewayStore } from "../stores/cableway";
import { useAuthStore } from "../stores/auth.js";

let nodes: vNG.Nodes;
let edges: vNG.Edges;

nodes = reactive({ ...data.nodes });
edges = reactive({ ...data.edges });

var blueLine = ref(false);
var brownLine = ref(false);
var silverLine = ref(false);
var orangeLine = ref(false);
var redLine = ref(false);
var greenLine = ref(false);
var skyBlueLine = ref(false);
var whiteLine = ref(false);
var yellowLine = ref(false);
var purpleLine = ref(false);

// FUNCTEC
// Deshabilitar items según el usuario es administrador
const currentUser = useAuthStore().getCurrentUser();
console.log("Current User:", currentUser.username);

const unavailableCablewayLine = (
  isCablewayLineUnavailable: boolean,
  cablewayLine: string,
  unavailableLineImage: string,
  unavailableNodes: string[],
  edgesToDelete: string[]
) => {
  const deleteNodes = unavailableNodes;
  const deleteEdges = edgesToDelete;
  if (isCablewayLineUnavailable) {
    console.log(`${cablewayLine} Cableway Line NOT Available.`);
    for (const nodeId of deleteNodes) {
      nodes[nodeId].icon = unavailableLineImage;
    }
    for (const edgeId of deleteEdges) {
      delete edges[edgeId];
    }
  } else {
    for (const nodeId of deleteNodes) {
      nodes[nodeId].icon = data.nodes[nodeId].icon;
    }
  }
};

const getUnavailableCablewayLines = () => {
  unavailableCablewayLine(
    blueLine.value,
    "Blue",
    "BlueLineUnavailable.jpg",
    ["node1", "node2", "node3", "node4", "node5"],
    ["edge1", "edge2", "edge3", "edge4", "edge53", "edge54", "edge55", "edge56"]
  );
  unavailableCablewayLine(
    brownLine.value,
    "Brown",
    "BrownLineUnavailable.jpg",
    ["node11", "node26"],
    ["edge25", "edge34"]
  );
  unavailableCablewayLine(
    silverLine.value,
    "Silver",
    "SilverLineUnavailable.jpg",
    ["node5", "node20", "node21"],
    ["edge5", "edge6", "edge44", "edge47"]
  );
  unavailableCablewayLine(
    orangeLine.value,
    "Orange",
    "OrangeLineUnavailable.jpg",
    ["node7", "node8", "node9", "node10"],
    ["edge17", "edge18", "edge19", "edge48", "edge49", "edge50"]
  );
  unavailableCablewayLine(
    redLine.value,
    "Red",
    "RedLineUnavailable.jpg",
    ["node5", "node6", "node7"],
    ["edge15", "edge16", "edge51", "edge52"]
  );
  unavailableCablewayLine(
    greenLine.value,
    "Green",
    "GreenLineUnavailable.jpg",
    ["node14", "node15", "node16", "node17"],
    ["edge12", "edge13", "edge14", "edge35", "edge36", "edge38"]
  );
  unavailableCablewayLine(
    skyBlueLine.value,
    "Skyblue",
    "SkyblueLineUnavailable.jpg",
    ["node14", "node13", "node24", "node25"],
    ["edge24", "edge26", "edge27", "edge28", "edge29", "edge32"]
  );
  unavailableCablewayLine(
    whiteLine.value,
    "White",
    "WhiteLineUnavailable.jpg",
    ["node10", "node11", "node12", "node13"],
    ["edge20", "edge21", "edge23", "edge30", "edge31", "edge33"]
  );
  unavailableCablewayLine(
    yellowLine.value,
    "Yellow",
    "YellowLineUnavailable.jpg",
    ["node14", "node18", "node19", "node20"],
    ["edge9", "edge10", "edge11", "edge39", "edge41", "edge43"]
  );
  unavailableCablewayLine(
    purpleLine.value,
    "Purple",
    "PurpleLineUnavailable.jpg",
    ["node21", "node22", "node23"],
    ["edge7", "edge8", "edge45", "edge46"]
  );
};

const cablewayStore = useCablewayStore();
const graph = ref<vNG.Instance | null>(null);
const paths = ref<vNG.Paths>({});

const panToCenter = () => graph.value?.panToCenter();
const fitToContents = () => graph.value?.fitToContents();
const zoomIn = () => graph.value?.zoomIn();
const zoomOut = () => graph.value?.zoomOut();

const startNode = ref("");
const endNode = ref("");
const cardtype = ref("");
const targetVariable = ref("");
const energyConstraint = ref(0);
const optimalValue = ref<string | null>(null);

const findPathAndScroll = async () => {
  await findPath();
  scrollToBottom();
};

const secondsToTime = (secondsString: string) => {
  const seconds = parseInt(secondsString);
  const minutes = Math.floor(seconds / 60);
  const secondsLeft = seconds % 60;
  return `${minutes}:${secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft}`;
};

const findPath = async () => {
  paths.value = {};
  edges = reactive({ ...data.edges });
  getUnavailableCablewayLines();
  const cablewayData = {
    nodes: nodes,
    edges: edges,
    layouts: data.layouts,
  };
  console.log("CablewayData:", cablewayData);

  await cablewayStore.dijkstraCableway(
    cablewayData,
    startNode.value,
    endNode.value,
    cardtype.value,
    targetVariable.value,
    energyConstraint.value
  );

  edges = reactive({ ...cablewayStore.edges });

  optimalValue.value = cablewayStore.optimalValue;

  paths.value = cablewayStore.optimalPath;
  console.log(cablewayStore.optimalValue);
  console.log(cablewayStore.optimalPath);
  console.log(cablewayStore.edges);
};


const scrollToBottom = () => {
  const element = document.getElementById("bottom");
  element?.scrollIntoView({ behavior: "smooth" });
};
</script>

<style scoped>
input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.label_linea {
  border: 1px solid #fff;
  padding: 10px;
  display: block;
  position: relative;
  margin: 10px;
  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border-radius: 10px;
  background-color: rgb(236, 252, 255);
}

.label_linea::before {
  background-color: white;
  color: white;
  content: " ";
  display: block;
  border-radius: 50%;
  border: 1px solid grey;
  position: absolute;
  top: -5px;
  left: -5px;
  width: 25px;
  height: 25px;
  text-align: center;
  line-height: 28px;
  transition-duration: 0.4s;
  transform: scale(0);
}

.label_linea img {
  height: 50px;
  width: 50px;
  transition-duration: 0.2s;
  transform-origin: 50% 50%;
}

:checked + .label_linea {
  border-color: rgb(0, 255, 13);
}

:checked + .label_linea::before {
  content: "✓";
  background-color: rgb(0, 194, 0);
  transform: scale(1);
}

.tarjetas {
  width: 100px;
}

.btn-lg {
  border-radius: 30px;
}

.btn-lg:hover {
  border: 3px solid white;
  transition: 0.3s;
}

.UCBFlag {
  width: 15.8%;
  position: absolute;
  top: 20%;
}

.BolivianFlag {
  width: 17%;
  height: 97%;
  position: absolute;
  top: 20%;
}

input[type="radio"] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.label_tarjeta {
  border: 1px solid #fff;
  padding: 10px;
  display: block;
  position: relative;
  margin: 10px;
  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border-radius: 10px;
  background-color: rgb(0, 0, 0);
  color: #f8f4f4;
}

.label_tarjeta::before {
  background-color: white;
  color: white;
  content: " ";
  display: block;
  border-radius: 50%;
  border: 1px solid grey;
  position: absolute;
  top: -5px;
  left: -5px;
  width: 25px;
  height: 25px;
  text-align: center;
  line-height: 28px;
  transition-duration: 0.4s;
  transform: scale(0);
}

.label_tarjeta img {
  width: 100px;
  transition-duration: 0.2s;
  transform-origin: 50% 50%;
}

:checked + .label_tarjeta {
  border-color: rgb(0, 255, 13);
}

:checked + .label_tarjeta::before {
  content: "✓";
  background-color: rgb(0, 194, 0);
  transform: scale(1);
}

.editor-container {
  display: flex;
  height: 75vh;
}

.editor-content {
  flex: 1;
}

.controls-container {
  width: 200px; /* Ancho del contenedor de controles */
  border-left: 1px solid #ccc; /* Línea divisoria entre el editor y los controles */
}

.controls-header {
  padding: 5px; /* Espaciado alrededor del encabezado */
  border-bottom: 1px solid #ccc; /* Línea divisoria entre el encabezado y el cuerpo */
}

.controls-body {
  padding: 10px; /* Espaciado alrededor del cuerpo */
}

.cableway-circle,
.cableway-picture {
  transition: all 0.1s linear;
}

.cableway-picture {
  pointer-events: none;
}
</style>
