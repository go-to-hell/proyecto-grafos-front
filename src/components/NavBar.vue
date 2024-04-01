<template>
  <!-- NavBar -->
  <nav
    class="navbar sticky-top navbar-expand-lg bg-primary"
    data-bs-theme="dark"
  >
    <div class="container-fluid">
      <router-link class="navbar-brand fw-bold mx-4 mx-md-5" to="/">
        Algoritmos
      </router-link>
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
            <router-link
              :class="{ active: $route.path === '/' }"
              to="/"
              class="nav-link"
              aria-current="page"
            >
              Inicio
            </router-link>
          </li>
          <li class="nav-item me-md-2" v-if="authStore.isLoggedIn">
            <router-link
              :class="{ active: $route.path === '/graphs_home' }"
              to="/graphs_home"
              class="nav-link w-100"
              @click="goGraphsHome"
            >
              Grafos
            </router-link>
          </li>
        </ul>
        <button
          v-if="!authStore.isLoggedIn"
          class="btn btn-success mx-auto d-block d-md-inline-block mx-md-2 my-2"
          @click="goLogin"
        >
          Ingresar
        </button>
        <button
          v-if="!authStore.isLoggedIn"
          class="btn btn-info mx-auto d-block d-md-inline-block mx-md-2 me-md-4 my-2"
          @click="goSignUp"
        >
          Registrarse
        </button>
        <button
          v-if="authStore.isLoggedIn"
          class="btn btn-danger mx-auto d-block d-md-inline-block mx-md-4 my-2"
          @click="logout"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";

export default {
  props: ["authStore"],
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    const goGraphsHome = () => {
      router.push("/graphs_home");
    };

    const goLogin = () => {
      router.push("/login");
    };

    const goSignUp = () => {
      router.push("/signup");
    };

    const logout = () => {
      authStore.logout();
      router.push("/");
    };

    return {
      goGraphsHome,
      goLogin,
      goSignUp,
      logout,
      authStore,
    };
  },
};
</script>
