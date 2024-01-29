<template>
    <form @submit.prevent="submitForm">
        <!-- Top Content -->
        <h2 class="font-mono mb-5 text-4xl font-bold">Iniciar Sesión</h2>
        <p class="mb-12 font-sans font-light text-gray-600">
        Ingresa a tu cuenta para crear, cargar y descargar grafos.
        </p>

        <div class="flex flex-col">
            <input
            type="text"
            placeholder="Ingresa tu dirección email"
            :class="inputClasses"
            v-model="email"
            />

            <input
            type="password"
            placeholder="Ingresa tu contraseña"
            :class="inputClasses"
            v-model="password"
            />
        </div>

        <!-- Middle Content -->
        <div class="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
        <div class="font-thin text-red-light">¿Olvidaste tu contraseña?</div>
            <button 
                :class="buttonClasses" 
                type="submit"
            >
                <span>Iniciar Sesión</span>
            </button>
        </div>
    </form>
</template>

<script>
    import { ref, computed} from 'vue';
    import { useAuthStore } from '../stores/auth';
    import { useRouter } from 'vue-router';

    export default {
        setup() {
            const authStore = useAuthStore();
            const router = useRouter();

            // Utilizando ref para los campos del formulario
            const email = ref('');
            const password = ref('');

            // Computando las clases
            const inputClasses = computed(() => 'w-full p-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light mt-6');
            const buttonClasses = computed(() => 'w-full md:w-auto flex justify-center items-center p-6 space-x-4 font-sans font-bold text-white rounded-md px-9 bg-black shadow-black-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150');

            // Método para manejar el envío del formulario
            const submitForm = () => {
                console.log('Enviando formulario...');
                if (email.value.length > 0 && password.value.length > 0) {
                    const user = { email: email.value, password: password.value };

                    if (authStore.checkUser(user)) {
                        email.value = '';
                        password.value = '';
                        router.push('/dashboard');
                    } else {
                        alert('Usuario o contraseña incorrectos');
                    }
                }
            };

            // Retornando las propiedades y métodos
            return {
                email,
                password,
                inputClasses,
                buttonClasses,
                submitForm,
            };
        },
    };
</script>
