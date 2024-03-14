<template>
  <div>
    <div class="text-center">
      <h2 class="fs-1 fw-bold my-3">Regístrate</h2>
      <p class="fw-light mb-4">
        ¡Crea una nueva cuenta para acceder a todas las funcionalidades!
      </p>
    </div>
    <form @submit.prevent="submitForm">
      <input
        type="text"
        placeholder="Ingresa tu nombre de usuario"
        :class="inputClasses"
        v-model="username"
        autofocus
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
      <button class="w-75 mx-auto my-4" :class="buttonClasses" type="submit">
        <span>Registrarse</span>
      </button>
    </form>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";

export default {
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    const username = ref("");
    const email = ref("");
    const password = ref("");
    const repeatedPassword = ref("");

    const inputClasses = computed(() => "form-control mb-3");
    const buttonClasses = computed(
      () =>
        "btn btn-primary w-full md:w-auto d-flex justify-content-center align-items-center p-6 space-x-4 font-weight-bold text-white rounded-md px-9 bg-black shadow-black-100 hover-bg-opacity-90 shadow-sm hover-shadow-lg border transition hover-translate-y-0.5 duration-150"
    );

    const submitForm = () => {
      console.log("Enviando formulario...");
      if (email.value.length > 0 && password.value.length > 0) {
        if (password.value === repeatedPassword.value) {
          authStore.addUser({
            username: username.value,
            email: email.value,
            password: password.value,
          });

          username.value = "";
          email.value = "";
          password.value = "";
          repeatedPassword.value = "";
          router.push("/");
        } else {
          alert("Las contraseñas no coinciden");
        }
      } else {
        alert("Por favor, completa todos los campos");
      }
    };

    return {
      username,
      email,
      password,
      repeatedPassword,
      inputClasses,
      buttonClasses,
      submitForm,
    };
  },
};
</script>
