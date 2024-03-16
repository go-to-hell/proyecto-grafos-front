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
                <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
                </li>
                <li class="nav-item">
                <button class="nav-link w-100" @click="goGraphs">Grafos</button>
                </li>
            </ul>
            <button class="btn btn-success d-block d-md-inline-block mx-2 my-2" @click="goLogin">Ingresar</button>
            <button class="btn btn-info d-block d-md-inline-block mx-2 my-2" @click="goSignUp">Registrarse</button>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    goGraphs() {
      // Implementar la lógica aquí
    },
    goLogin() {
      // Implementar la lógica aquí
    },
    goSignUp() {
      // Implementar la lógica aquí
    }
  }
}
</script>

<style scoped>
/* Aquí puedes añadir estilos específicos para este componente */
</style>