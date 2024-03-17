<template>
  <div>
    <NavBar />
    <div class="m-4">
      <form class="d-flex flex-column flex-md-row align-items-center" role="search">
        <input
          class="form-control mb-2 mb-md-0 me-md-3 bg-body-tertiary"
          type="search"
          placeholder="Buscar..."
          aria-label="Buscar"
        />
        <button class="btn btn-primary mb-2 mb-md-0 me-md-2" type="submit">
          <i class="bi bi-search"></i> Buscar
        </button>
        <button @click="goEditor" class="btn btn-secondary" type="button">
          <i class="bi bi-plus-circle"></i> Crear
        </button>
      </form>
      <p v-if="!authStore.isLoggedIn" class="mt-4">
        Para ver tus grafos guardados, por favor inicia sesión.
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";
import NavBar from '../components/NavBar.vue';

export default {
  components: {
    NavBar,
  },
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    const goEditor = () => {
      router.push("/editor");
    };

    return {
      authStore,
      goEditor,
    };
  },
};
</script>