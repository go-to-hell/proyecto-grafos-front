<template>
    <div class="flex flex-col items-start justify-start w-full py-12 space-y-6">
        <button
            @click="goBack"
            class="absolute top-0 left-0 flex items-center justify-center w-12 h-12 mt-6 ml-6 text-gray-500 rounded-full shadow-md hover:bg-gray-100"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="5" y1="12" x2="11" y2="18" />
                <line x1="5" y1="12" x2="11" y2="6" />
            </svg>
        </button>


        <h2 class="font-mono mb-5 text-4xl font-bold">Registrarse</h2>

        <p class="mb-12 font-sans font-light text-gray-600">
        Crea una nueva cuenta para acceder a todas las funciones.
        </p>
    </div>
    <form @submit.prevent="submitForm">

        <div class="flex flex-col">
            <input
            type="text"
            placeholder="Ingresa tu nombre"
            :class="inputClasses"
            v-model="name"
            />

            <input
            type="text"
            placeholder="Ingresa tu apellido"
            :class="inputClasses"
            v-model="lastname"
            />

            <input
            type="email"
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

            <input
            type="password"
            placeholder="Ingresa nuevamente tu contraseña"
            :class="inputClasses"
            v-model="repeatedPassword"
            />
        </div>

        <div class="flex flex-col items-center justify-center mt-6 space-y-6 md:flex-row md:space-y-0">
            <button :class="buttonClasses" type="submit">
                <span>Registrarse</span>
            </button>
        </div>
    </form>
</template>

<script>
    import { ref, computed } from 'vue';
    import { useAuthStore } from '../stores/auth';
    import { useRouter } from 'vue-router';

    export default {
        setup() {
            const authStore = useAuthStore();
            const router = useRouter();

            const name = ref('');
            const lastname = ref('');
            const email = ref('');
            const password = ref('');
            const repeatedPassword = ref('');

            const inputClasses = computed(() =>
                'w-full p-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light mt-6'
            );

            const buttonClasses = computed(() =>
                'w-full md:w-auto flex justify-center items-center p-6 space-x-4 font-sans font-bold text-white rounded-md px-9 bg-black shadow-black-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150'
            );

            const submitForm = () => {
                console.log('Enviando formulario...');
                if (email.value.length > 0 && password.value.length > 0) {
                    if (password.value === repeatedPassword.value) {
                        authStore.addUser({
                            name: name.value,
                            lastname: lastname.value,
                            email: email.value,
                            password: password.value,
                        });
                        // Lógica adicional, como enviar datos al servidor, etc.

                        name.value = '';
                        lastname.value = '';
                        email.value = '';
                        password.value = '';
                        repeatedPassword.value = '';
                        router.push('/');
                    } else {
                        alert('Las contraseñas no coinciden');
                    }
                } else {
                    alert('Por favor, completa todos los campos');
                }
            };

            const goBack = () => {
                router.go(-1);
            };

            return {
                name,
                lastname,
                email,
                password,
                repeatedPassword,
                inputClasses,
                buttonClasses,
                submitForm,
                goBack,
            };
        },
    };
</script>