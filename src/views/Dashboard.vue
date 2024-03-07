<template>
  <div>
    <!-- NavBar -->
    <nav class="navbar sticky-top navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand fw-bold mx-4 mx-md-5" href="#">GRAFOS</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarToggler">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-center">
            <li class="nav-item me-md-3">
              <router-link to="/dashboard" class="nav-link active" aria-current="page">Dashboard</router-link>
            </li>
            <li class="nav-item">
              <button class="nav-link w-100" @click="goEditor">Crear</button>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2 bg-body-tertiary"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-success" type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </nav>

    <!-- Content Container -->
    <div class="bg-white p-5">
      <h1>Saludos!</h1>
      <p>Bienvenido a nuestra página dedicada a los algoritmos.</p>
    </div>

    <!-- Rounded Buttons -->
    <div class="rounded-buttons">
      <button @click="openHelp" class="btn btn-primary rounded m-1">
        <i class="bi bi-question-lg"></i>
      </button>
      <router-link to="/perfil" class="btn btn-primary rounded m-1">
        <i class="bi bi-exclamation-lg"></i>
      </router-link>
    </div>

    <!-- Help Center Modal -->
    <div class="modal fade" tabindex="-1" ref="helpCenterModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Centro de Ayuda</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>¡Hola! 😄 ¡Bienvenido al increíble mundo de los grafos! 🌐✨ Aquí te dejamos una guía rápida para que domines esta herramienta como un pro:</p>
            <!-- Contenido del Centro de Ayuda... (se omite para abreviar) -->
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">OK</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Perfil Modal -->
    <div class="modal fade" tabindex="-1" ref="perfilModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Perfil</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <!-- Contenido del perfil aquí -->
            <p>¡Bienvenido a tu perfil!</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Carrusel de Imágenes -->
    <div id="imageCarousel" class="carousel slide mt-4" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="d-flex">
            <img src="../assets/Grafos.jpg" class="d-block w-25" alt="Grafos">
            <div class="ms-3">
              <h2>¿Qué es un Grafo?</h2>
              <p>Los grafos son estructuras discretas que constan de vértices y aristas que conectan entre si esos vértices.  Por lo tanto un grafo G costa de dos partes: 1)  Un conjunto V = V (G) cuyos elementos se denominan vértices, puntos o nodos de G.</p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="d-flex">
            <img src="../assets/Algoritmo.jpg" class="d-block w-25" alt="Algoritmos">
            <div class="ms-3">
              <h2>¿Qué es un Algoritmo?</h2>
              <p>Se llaman algoritmos el conjunto de instrucciones sistemáticas y previamente definidas que se utilizan para realizar una determinada tarea. Estas instrucciones están ordenadas y acotadas a manera de pasos a seguir para alcanzar un objetivo.</p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="d-flex">
            <img src="../assets/AyG.png" class="d-block w-25" alt="AyG">
            <div class="ms-3">
              <h2>Relación entre Grafos y Algoritmos</h2>
              <p>Los algoritmos de grafos son un conjunto de instrucciones que recorren (visitan los nodos de) un grafo. Algunos algoritmos son usados para hallar un nodo específico o el camino entre dos nodos dados. Los grafos son estructuras de datos muy útiles que se usan para modelar varios problemas. Estos algoritmos tienen aplicaciones directas en sitios de redes sociales, modelado de máquinas de estado y más.</p>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#imageCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#imageCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Siguiente</span>
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";
import UserlistService from "../services/userlistService";

export default {
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();
    const helpCenterModal = ref(null);
    const perfilModal = ref(null);

    const goEditor = () => {
      router.push("/editor");
    };

    const openHelp = () => {
      helpCenterModal.value.toggle();
    };

    const openSettings = () => {
      // Redirige al perfil cuando se abre la configuración
      router.push("/perfil");
    };

    return {
      authStore,
      goEditor,
      openHelp,
      openSettings,
      helpCenterModal,
      perfilModal,
    };
  },

  mounted() {
    const userlistService = new UserlistService();
    console.log("Dashboard mounted, Listing users");
    const usr_list = userlistService.getUsers();
    console.log(usr_list);
  },
};
</script>

<style scoped>
  .nav-item:hover {
    background-color: lightslategray;
    transition: 0.5s;
  }

  .rounded-buttons {
    position: absolute;
    bottom: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  /* Estilo para el carrusel de imágenes */
  #imageCarousel img {
    height: 250px; 
    width: auto;   
    object-fit: cover;
  }

  #imageCarousel h2,
  #imageCarousel p {
    color: black; /* Cambiado a negro */
  }
</style>
