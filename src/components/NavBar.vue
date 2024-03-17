<template>
    <!-- NavBar -->
    <nav class="navbar sticky-top navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div class="container-fluid">
            <a class="navbar-brand fw-bold mx-4 mx-md-5" href="#">Algoritmos</a>
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
                <router-link :class="{'active': $route.path === '/'}" to="/" class="nav-link" aria-current="page">Inicio</router-link>
                </li>
                <li class="nav-item">
                <button :class="{'active': $route.path === '/graphs'}" class="nav-link w-100" @click="goGraphs">Grafos</button>
                </li>
            </ul>
            <button v-if="!authStore.isLoggedIn" class="btn btn-success d-block d-md-inline-block mx-2 my-2" @click="goLogin">Ingresar</button>
            <button v-if="!authStore.isLoggedIn" class="btn btn-info d-block d-md-inline-block mx-2 my-2" @click="goSignUp">Registrarse</button>
            <button v-if="authStore.isLoggedIn" class="btn btn-danger d-block d-md-inline-block mx-2 my-2" @click="logout">Cerrar sesión</button>
            </div>
        </div>
    </nav>
</template>

<script>
import { ref } from 'vue';
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";

export default {
  props: ['authStore'],
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    const goGraphs = () => {
      router.push("/graphs");
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
      goGraphs,
      goLogin,
      goSignUp,
      logout,
      authStore
    };
  }
}
</script>