<template>
    <div>
    <NavBar />
    <div class="m-4">
        <form class="d-flex flex-column align-items-start" role="search">
        <div class="d-flex align-items-center mb-2 w-100">
            <input
            class="form-control me-3 bg-body-tertiary flex-grow-1"
            type="search"
            placeholder="Buscar..."
            aria-label="Buscar"
            />
            <button class="btn btn-primary me-2 flex-shrink-0" type="submit">
            <i class="bi bi-search"></i> Buscar
            </button>
            <button @click="goEditorSorts" class="btn btn-secondary flex-shrink-0" type="button">
            <i class="bi bi-plus-circle"></i> Crear
            </button>
        </div>
        <div class="d-flex align-items-center mt-2 w-100">
            <input type="file" @change="uploadFile" class="form-control me-3 flex-grow-1">
            <button class="btn btn-primary flex-shrink-0" type="button" @click="submitFile">
            <i class="bi bi-upload"></i> Subir proyecto
            </button>
        </div>
        </form>
        <p v-if="!authStore.isLoggedIn" class="mt-4">
        Para ver tus grafos guardados, por favor inicia sesión.
        </p>
        <div class="row">
        <div class="col-md-4 mt-4" v-for="file in fileStore.files" :key="file.fileId">
            <div class="card">
            <img class="card-img-top" src="../assets/Sorts.png" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{ file.filename }}</h5>
                <p class="card-text">Uploaded by: {{ file.uploader.username }}</p>
                <p class="card-text">Upload date: {{ file.uploadDate }}</p>
                <a @click="fileStore.downloadFile(file.fileId, file.filename)" class="btn btn-primary">Download</a>
                <a @click="loadGraph(file.fileId)" class="btn btn-secondary">Cargar gráfico</a>
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
import { useLoaderStore } from '../stores/common/loaderStore';

export default {
    components: {
    NavBar,
    },
    setup() {
    let classValue = 5;
    const authStore = useAuthStore();
    const fileStore = useFileStore();
    const router = useRouter();
    const fileToUpload = ref(null);
    const loaderStore = useLoaderStore();

    const goEditorSorts = () => {
        fileStore.clearGraphData();
        router.push("/editor_sorts");
    };

    const uploadFile = (event) => {
        fileToUpload.value = event.target.files[0];
        fileStore.listFiles(classValue);
    };

    const loadGraph = async (fileId) => {
        await fileStore.justTheTXT(fileId);
        router.push("/editor_sorts");
    };

    const submitFile = async () => {
        if (fileToUpload.value) {
        const formData = new FormData();
        formData.append('file', fileToUpload.value);
        await fileStore.uploadFile(formData, classValue);
        fileStore.listFiles(classValue);
        }
    };

    loaderStore.pageIsLoading();
    fileStore.listFiles(classValue);
    loaderStore.pageIsLoaded();

    return {
        authStore,
        fileStore,
        goEditorSorts,
        loadGraph,
        uploadFile,
        submitFile,
    };
    },
};
</script>