<template>
    <!-- Global Container -->
    <div class="vh-100">
        <!-- Top Bar -->
        <nav class="navbar navbar-dark bg-dark p-3">
            <!-- Botón de Retroceso o Cierre de Sesión -->
            <button @click="goBack" class="btn btn-secondary">
                <i class="bi bi-arrow-left"></i>
            </button>

            <!-- Search Container -->
            <div class="d-flex">
                <!-- Input y contenedor de SVG -->
                <div class="d-flex border-bottom border-light">
                    <!-- Agregado: etiqueta label para mejorar la accesibilidad -->
                    <label for="search" class="visually-hidden">Buscar</label>
                    <input
                        type="text"
                        id="search"
                        class="border-0 ms-3 text-light bg-transparent"
                        placeholder="Search"
                    />
                    <button class="btn btn-secondary">
                        <i class="bi bi-search"></i>
                    </button>
                </div>

                <!-- Botón de Crear -->
                <button
                    @click="goEditor"
                    class="ms-3 btn btn-light"
                >
                    Crear
                </button>
            </div>
        </nav>

        <!-- Content Container -->
        <div class="bg-white p-5">
            <!-- Mostrar mensaje de bienvenida si el usuario ha iniciado sesión -->
            <p class="font-monospace" v-if="authStore.currentUser">Saludos, {{ authStore.currentUser.name }} bienvenido a nuestra página dedicada a los algoritmos.</p>
            <!-- Mostrar mensaje si el usuario no ha iniciado sesión -->
            <p class="font-monospace" v-else>No has iniciado sesión.</p>
            <!-- Contenido del dashboard -->
        </div>
    </div>
</template>
<script>
    import { useAuthStore } from "../stores/auth";
    import { useRouter } from 'vue-router';

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
                router.push('/editor');
            };

            return {
                authStore,
                goBack,
                goEditor,
            };
        },

        mounted() {
            const userlistService = new UserlistService();

            console.log('Dashboard mounted, Listing users');
            const usr_list = userlistService.getUsers();
            console.log(usr_list);
        }
    };
</script>
