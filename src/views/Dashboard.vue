<template>
    <!-- Global Container -->
    <div class="flex items-center justify-center min-h-screen bg-red">
        <!-- Card Container -->
        <div class="bg-white p-6 m-3 space-y-10 shadow-2xl rounded-3xl md:p-40 relative">

            <!-- Botón de Retroceso o Cierre de Sesión -->
            <button
                @click="goBack"
                class="absolute top-0 left-0 flex items-center justify-center w-12 h-12 mt-6 ml-6 text-gray-500 rounded-full shadow-md hover:bg-gray-100"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg" 
                    class="w-6 transform rotate-180"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path d="M15 3h5a2 2 0 012 2v14a2 2 0 01-2 2h-5M10 17l5-5-5-5M15 12H3" />
                </svg>
            </button>

            <div>
                <!-- Mostrar mensaje de bienvenida si el usuario ha iniciado sesión -->
                <p class="font-mono" v-if="authStore.currentUser">Bienvenido al dashboard {{ authStore.currentUser.name }}.</p>
                <!-- Mostrar mensaje si el usuario no ha iniciado sesión -->
                <p class="font-mono" v-else>No has iniciado sesión.</p>
                <!-- Contenido del dashboard -->
            </div>

            <!-- Search Container -->
            <div class="flex flex-col justify-between space-y-5 md:flex-row md:space-y-0">
                <!-- Input y contenedor de SVG -->
                <div class="flex justify-between border-b m-3">
                    <!-- Agregado: etiqueta label para mejorar la accesibilidad -->
                    <label for="search" class="sr-only">Buscar</label>
                    <input
                        type="text"
                        id="search"
                        class="ml-6 border-none md:w-80 placeholder:font-thin focus:outline-none"
                        placeholder="Search"
                    />
                    <button>
                        <!-- SVG mejorado con etiqueta title para mejorar la accesibilidad -->
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-8 text-gray-300 duration-200 hover:scale-110"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            title="Buscar"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="10" cy="10" r="7" />
                            <line x1="21" y1="21" x2="15" y2="15" />
                        </svg>
                    </button>
                </div>

                <!-- Botón de Cierre de Sesión -->
                <button
                    @click="goEditor"
                    class="w-full md:w-auto flex justify-center items-center p-6 space-x-4 font-sans font-bold text-white rounded-md px-9 bg-black shadow-black-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150"
                >
                    Crear
                </button>
            </div>

        </div>
    </div>
</template>

<script>
    import { useAuthStore } from "../stores/auth";
    import { useRouter } from 'vue-router';
    
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
    };
</script>
