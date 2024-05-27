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
          <div class="col-12 col-md-2 d-none d-md-flex justify-content-center align-items-center mb-3 mb-md-0">
            <img
              src="../assets/CablewayProjectImages/UCBFlag.jpg"
              alt="UCB Flag"
              class="UCBFlag animate__animated animate__fadeIn animate__slower w-100"
              style="max-width: 200px;"
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
          <div class="col-12 col-md-2 d-none d-md-flex justify-content-center align-items-center">
            <img
              src="../assets/CablewayProjectImages/UCBFlag.jpg"
              alt="UCB Flag"
              class="UCBFlag animate__animated animate__fadeIn animate__slower w-100"
              style="max-width: 200px;"
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
                                  value="1"
                                  checked
                                />
                                <label
                                  class="form-check-label label_tarjeta text-center"
                                  for="tarjeta1"
                                >
                                  <img
                                    class="tarjetas d-block mx-auto"
                                    src="../assets/CablewayProjectImages/tarjeta_normal.png"
                                  />
                                  Tarjeta Normal
                                </label>
                              </div>
                              <div class="form-check col-md-4 col-sm-12">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="tarjeta"
                                  id="tarjeta2"
                                  value="2"
                                />
                                <label
                                  class="form-check-label label_tarjeta text-center"
                                  for="tarjeta2"
                                >
                                  <img
                                    class="tarjetas d-block mx-auto"
                                    src="../assets/CablewayProjectImages/tarjeta_estudiantil.png"
                                  />
                                  Tarjeta Estudiantil
                                </label>
                              </div>
                              <div class="form-check col-md-4 col-sm-12">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="tarjeta"
                                  id="tarjeta3"
                                  value="3"
                                />
                                <label
                                  class="form-check-label label_tarjeta text-center"
                                  for="tarjeta3"
                                >
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
                    <div class="accordion-item">
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
                                <input type="checkbox" name="Cafe" id="Cafe" />
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
                                <input type="checkbox" name="Roja" id="Roja" />
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
                    <select v-model="startNode" name="org1" class="form-select" aria-label="Default select example">
                      <option v-for="(node, key) in data.nodes" :value="key">{{ node.name }}</option>
                    </select>
                  </div>
                
                  <div class="form-group">
                    <label>Destino: </label>
                    <select v-model="endNode" name="org2" class="form-select" aria-label="Default select example">
                      <option v-for="(node, key) in data.nodes" :value="key">{{ node.name }}</option>
                    </select>
                  </div>

                  <div class="form-group my-3">
                    <label>Optimizar: </label>
                    <select
                      v-model="timeOrMoney"
                      name="opt"
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option value="time">Tiempo</option>
                      <option value="money" disabled>Dinero</option>
                    </select>
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
                <button type="button" class="btn btn-success"  data-bs-dismiss="modal" @click="findPathAndScroll">
                  ENVIAR
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr/>
    <h2 class="text-primary text-center">Mapa de Teleférico</h2>
    <h1 class="text-primary p-2">Tiempo estimado: {{ optimalValue }}</h1>
    <div class="d-flex">
      <div class="editor-container flex-grow-1">
        <div class="editor-content" id="bottom">
          <!-- Editor Content -->
          <v-network-graph
            ref="graph"
            :nodes="data.nodes"
            :edges="data.edges"
            :layouts="data.layouts"
            :configs="data.configs"
            :paths="paths"
          >
          <template #edge-label="{ edge, ...slotProps }">
            <v-edge-label :text="secondsToTime(edge.label)" align="center" vertical-align="above" v-bind="slotProps" />
          </template>
          
          <defs>
            <clipPath id="cablewayCircle" clipPathUnits="objectBoundingBox">
              <circle cx="0.5" cy="0.5" r="0.5" />
            </clipPath>
          </defs>

          <template #override-node="{ nodeId, scale, config, edge, hovered, selected, ...slotProps}">
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
              :xlink:href="`src/assets/CablewayProjectImages/${data.nodes[nodeId].icon}`"
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
          <h5 class="controls-title fw-bold">
            Funciones
          </h5>
        </div>
        <div class="controls-body">
          <div>
            <button class="btn btn-outline-info w-100 py-2" @click="panToCenter">
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
import { ref } from "vue"
import * as vNG from "v-network-graph"
import data from "../data/cableway-data.js";
import NavBarVue from "../components/NavBar.vue";
import { useCablewayStore } from "../stores/cableway";

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
const timeOrMoney = ref("");
const optimalValue = ref<string | null>(null);

const findPathAndScroll = async () => {
  await findPath();
  scrollToBottom();
}

const secondsToTime = (secondsString: string) => {
  const seconds = parseInt(secondsString);
  const minutes = Math.floor(seconds / 60);
  const secondsLeft = seconds % 60;
  return `${minutes}:${secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft}`; 
}

const findPath = async () => {
  await cablewayStore.dijkstraCableway(startNode.value, endNode.value, cardtype.value, timeOrMoney.value);
  optimalValue.value = cablewayStore.optimalValue;

  paths.value = {};
  paths.value = cablewayStore.optimalPath;
  console.log(cablewayStore.optimalValue);
  console.log(cablewayStore.optimalPath);
}

const scrollToBottom = () => {
  const element = document.getElementById('bottom');
  element?.scrollIntoView({ behavior: 'smooth' });
}
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
