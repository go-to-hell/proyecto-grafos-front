<template>
  <!-- Global Container -->
  <div>
    <!-- NavBar -->
    <nav
      class="navbar sticky-top navbar-expand-lg bg-dark"
      data-bs-theme="dark"
    >
      <div class="container-fluid">
        <!-- Botón de Retroceso o Cierre de Sesión -->
        <button @click="goBack" class="btn btn-primary">
          <i class="bi bi-arrow-left"></i>
        </button>
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
              <a class="nav-link active" aria-current="page" href="#">
                Dashboard
              </a>
            </li>
            <li class="nav-item">
              <!-- Botón de Crear -->
              <button class="nav-link w-100" @click="goEditor">Crear</button>
            </li>
            <!-- <li class="nav-item"> -->
            <!-- <a class="nav-link" href="#">Opción</a> -->
            <!-- </li> -->
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
      <!-- Mostrar mensaje de bienvenida si el usuario ha iniciado sesión -->
      <div v-if="authStore.currentUser">
        <h1>Saludos, {{ authStore.currentUser.name }}!</h1>
        <p>Bienvenido a nuestra página dedicada a los algoritmos.</p>
      </div>
      <!-- Mostrar mensaje si el usuario no ha iniciado sesión -->
      <h1 class="text-center text-danger" v-else>No has iniciado sesión.</h1>
      <!-- Contenido del dashboard -->
    </div>
  </div>
</template>
<script>
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";

import UserlistService from "../services/userlistService";

export default {
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    const goBack = () => {
      authStore.logout();
      router.go(-1);
    };

    const goEditor = () => {
      router.push("/editor");
    };

    return {
      authStore,
      goBack,
      goEditor,
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
</style>
