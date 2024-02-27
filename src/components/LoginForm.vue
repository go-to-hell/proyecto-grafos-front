<template>
    <form @submit.prevent="submitForm" class="container mt-5">
        <!-- Top Content -->
        <h2 class="mb-4 fs-1 fw-light">Iniciar Sesión</h2>
        <p class="mb-4 fw-light">
            Ingresa a tu cuenta para crear, cargar y descargar grafos.
        </p>
    
        <div class="form-group">
            <input
                type="text"
                :class="inputClasses"
                placeholder="Ingresa tu dirección email"
                v-model="email"
                autofocus
            />
            <input
                type="password"
                :class="inputClasses"
                placeholder="Ingresa tu contraseña"
                v-model="password"
            />
        </div>
    
        <!-- Middle Content -->
        <div class="d-flex flex-column mt-4 mt-md-2">
            <a class="text-danger mb-3 text-end" href="/">¿Olvidaste tu contraseña?</a>
            <button
                :class="buttonClasses"
                type="submit"
            >
                Iniciar Sesión
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
            const inputClasses = computed(() => 'form-control mb-3');
            const buttonClasses = computed(() => 'btn btn-primary w-full md:w-auto d-flex justify-content-center align-items-center p-6 space-x-4 font-weight-bold text-white rounded-md px-9 bg-black shadow-black-100 hover-bg-opacity-90 shadow-sm hover-shadow-lg border transition hover-translate-y-0.5 duration-150');

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
