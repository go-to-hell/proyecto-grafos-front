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
        <input type="file" @change="uploadFile" class="form-control mb-2 mb-md-0 me-md-3">
        <button class="btn btn-primary mb-2 mb-md-0 me-md-2" type="button" @click="submitFile">
          <i class="bi bi-upload"></i> Subir proyecto
        </button>
      </form>
      <p v-if="!authStore.isLoggedIn" class="mt-4">
        Para ver tus grafos guardados, por favor inicia sesión.
      </p>
      <div class="row">
        <div class="col-md-4" v-for="file in fileStore.files" :key="file.fileId">
          <div class="card">
            <img class="card-img-top" src="../assets/Grafos.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">{{ file.filename }}</h5>
              <p class="card-text">Uploaded by: {{ file.uploader.username }}</p>
              <p class="card-text">Upload date: {{ file.uploadDate }}</p>
              <a :href="file.fileUrl" class="btn btn-primary">Download</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useAuthStore } from "../stores/auth";
import { useFileStore } from "../stores/file";
import { useRouter } from "vue-router";
import NavBar from '../components/NavBar.vue';

export default {
  components: {
    NavBar,
  },
  setup() {
    const authStore = useAuthStore();
    const fileStore = useFileStore();
    const router = useRouter();
    const fileToUpload = ref(null);

    const goEditor = () => {
      router.push("/editor");
    };

    const uploadFile = (event) => {
      fileToUpload.value = event.target.files[0];
    };

    const submitFile = async () => {
      if (fileToUpload.value) {
        await fileStore.uploadFile(fileToUpload.value);
        fileStore.listFiles();
      }
    };

    fileStore.listFiles();

    return {
      authStore,
      fileStore,
      goEditor,
      uploadFile,
      submitFile,
    };
  },
};
</script>