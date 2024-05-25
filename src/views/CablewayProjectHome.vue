<template>
  <NavBarVue />
  <div class="bg-info">
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
            <!-- <img
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
            <img
              src="../assets/AgregarA.jpg"
              alt="AgregarA"
              class="img-fluid"
            />
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
              src="../assets/RAS.png"
              alt="Resolver"
              class="img-fluid"
            />
            <p>
              <strong>Resplver Asignación</strong><br />
              Selecciona si quieres maximizar o minimizar la matriz de adyacencia que se genera y presiona la opción de resolver la asignación. El editor se encargará de resolverla y te mostrará un cuadro indicando cual es la asignación ideal para tu solicitud.
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
            <img
              src="../assets/MatrizAd.jpg"
              alt="MatrizAd"
              class="img-fluid"
            />
            <p>
              <strong>Matriz de Adyacencia 📊</strong><br />
              Haz clic en "Matriz de Adyacencia" para explorar la estructura
              subyacente de tu obra maestra en forma de matriz.
            </p>
            <p>
              ¡Y eso es básicamente todo! Ahora, ve y conquista el mundo de los
              grafos con tu creatividad desbordante. ¡Buena suerte, maestro del
              grafo! 🚀🎨
            </p> -->
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

    <div v-if="!destinos">
      <div>
        <img
          src="../assets/CablewayProjectImages/UCBFlag.jpg"
          alt=""
          class="UCBFlag animate__animated animate__fadeIn animate__slower end-0 me-3"
        />
        <iframe
          width="935"
          height="526"
          class="d-block mx-auto"
          style="border-radius: 15px; overflow: hidden"
          src="https://www.youtube.com/embed/uyGp0JKlktA?autoplay=1&mute=1&controls=0"
          title="EL ALTO - LA PAZ, Bolivia. Great experience with Mi Teleférico, longest cable car of the world."
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <img
          src="../assets/CablewayProjectImages/BolivianFlag.jpg"
          alt=""
          class="BolivianFlag animate__animated animate__fadeIn animate__slower"
        />
      </div>
      <div class="py-4 text-center">
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
                <form action="/" method="POST">
                  <div class="accordion" id="accordionExample">
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
                        data-bs-parent="#accordionExample"
                      >
                        <div
                          class="accordion-body"
                          style="background-color: deepskyblue"
                        >
                          <fieldset>
                            <div class="row">
                              <div class="form-check col-md-4 col-sm-12">
                                <input
                                  class="form-check -input"
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
                                  class="form-check -input"
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
                                  class="form-check -input"
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
                          Escoja las líneas que no se encuentran disponibles
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
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
                    <select
                      name="org1"
                      class="form-select"
                      aria-label="Default select example"
                    >
                      {% for e in estacionLinea %}
                      <option value="{{e}}">{{ e }}</option>
                      {% endfor%}
                    </select>
                  </div>

                  <div class="form-group">
                    <label>Destino: </label>
                    <select
                      name="org2"
                      class="form-select"
                      aria-label="Default select example"
                    >
                      {% for e in estacionLinea %}
                      <option value="{{e}}">{{ e }}</option>
                      {% endfor%}
                    </select>
                  </div>

                  <div class="form-group my-3">
                    <label>Optimizar: </label>
                    <select
                      name="opt"
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option value="Tiempo">Tiempo</option>
                      <option value="Dinero">Dinero</option>
                    </select>
                  </div>
                  <div class="mt-4 text-center">
                    <button type="submit" class="btn btn-success">
                      ENVIAR
                    </button>
                  </div>
                </form>
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
                  data-bs-dismiss="modal"
                  class="btn btn-success"
                  @click="handleDijkstraAlgorithm"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="destinos">
      <div class="container">
        {% if destinos %}
        <h1>Origen: ORIGEN</h1>
        <h1>Destino: DESTINO</h1>
        <h1>Optimizar: OPT</h1>
        {% endif %} {% if lineas_deshabilitadas %}
        <h1>Lineas deshabilitadas:</h1>
        {% for i in lineas_deshabilitadas%}
        <h3>{{ 1 }}</h3>
        {% endfor %} {% endif %}
      </div>
      <hr />
      {% if rutaPosible == False %}
      <div class="container">
        <h1>No existe una ruta disponible</h1>
      </div>
      {% else %}
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-6">
            {% if tiempo %}
            <h1>Tiempo total:</h1>
            <h5>TIEMPO minutos con TIEMPO segundos</h5>
            {% endif %} {% if precio %}
            <h1>Precio total:</h1>
            <h5>Bs PRECIO</h5>
            {% endif %}
          </div>

          <div class="col-sm-12 col-md-6 col-lg-6">
            <div class="row d-flex justify-content-center text-center">
              {% if tiempo %}
              <h1 class="mt-3 d-flex justify-content-start">Ruta a seguir:</h1>
              {% endif %}
              <div class="col"></div>
              <div class="col mt-3">
                {% if rutamin %} {% for e in rutamin %} {% if e!= destinos.0 %}
                <p id="arrow" class="me-5"></p>
                {% endif %}
                <h5 id="circle">{{ e }}</h5>
                {% endfor%} {% endif %}
              </div>
              <div class="col"></div>
            </div>
          </div>
        </div>
      </div>
      {% endif %}
    </div>

    <div class="container"></div>
    <br /><br />
  </div>
</template>

<script>
import NavBarVue from "../components/NavBar.vue";

export default {
  components: {
    NavBarVue,
  },
  data() {
    return {
      destinos: false,
    };
  },
  mounted() {
    window.scrollTo({ top: 100, behavior: "smooth" });
  },
  methods: {
    handleDijkstraAlgorithm() {
      this.destinos = true;
    },
  },
};
</script>

<style scoped>
#circle {
  width: 200px;
  height: 200px;
  line-height: 200px;
  border-radius: 50%;
  font-size: 20px;
  color: #000;
  text-align: center;
  background: #fff;
  font-family: "Nunito Sans";
  font-weight: bold;
}

#arrow {
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  margin-left: 45px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}

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
  background-color: rgb(71, 74, 232);
  color: #fff;
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
</style>
