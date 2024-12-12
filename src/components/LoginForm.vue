<template>
  <form @submit.prevent="submitForm" class="container mt-5">
    <h2 class="mb-4 mb-md-5 fs-1 fw-light">Iniciar Sesión</h2>
    <p class="mb-4 fw-light">
      Ingresa a tu cuenta para crear, cargar y descargar grafos.
    </p>
    <div class="form-group">
      <input
        type="text"
        :class="inputClasses"
        id="loginUsernameField"
        placeholder="Ingresa tu nombre de usuario"
        v-model="username"
        autofocus
      />
      <input
        type="password"
        :class="inputClasses"
        id="loginPasswordField"
        placeholder="Ingresa tu contraseña"
        v-model="password"
      />
    </div>
    <div class="d-flex flex-column mt-4 mt-md-2">
      <a class="text-danger mt-1 mb-4 text-end" href="/">
        ¿Olvidaste tu contraseña?
      </a>
      <button :class="buttonClasses" id="loginButton" type="submit">
        Iniciar Sesión
      </button>
    </div>
  </form>
</template>

<script>
import { ref, computed } from "vue";
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";
import { useLoaderStore } from "../stores/common/loaderStore";
import SweetAlert from "sweetalert2";

export default {
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();
    const loaderStore = useLoaderStore();

    // Utilizando ref para los campos del formulario
    const username = ref("");
    const password = ref("");

    // Computando las clases
    const inputClasses = computed(() => "form-control mb-3");
    const buttonClasses = computed(
      () =>
        "btn btn-primary w-full md:w-auto d-flex justify-content-center align-items-center p-6 space-x-4 font-weight-bold text-white rounded-md px-9 bg-black shadow-black-100 hover-bg-opacity-90 shadow-sm hover-shadow-lg border transition hover-translate-y-0.5 duration-150"
    );

    // Método para manejar el envío del formulario
    const submitForm = async () => {
      if (!username.value || !password.value) {
        showSimpleAlert(
          "Error",
          "Por favor ingrese sus credenciales completas.",
          "error"
        );
      } else {
        const user = { username: username.value, password: password.value };
        loaderStore.pageIsLoading();
        if (await authStore.checkUser(user)) {
          username.value = "";
          password.value = "";
          showConfirmAlert(
            "Éxito!",
            "Inicio de sesión exitoso.",
            "success",
            false,
            2500
          );
          router.push("/cableway_project");
        } else {
          showSimpleAlert(
            "Error",
            "Usuario o contraseña incorrectos.",
            "error"
          );
        }
        loaderStore.pageIsLoaded();
      }
    };

    const showSimpleAlert = (alertTitle, alertText, alertIcon) => {
      SweetAlert.fire({
        title: alertTitle,
        text: alertText,
        icon: alertIcon,
        showClass: {
          popup: `
          animate__animated
          animate__fadeInDown`,
        },
        hideClass: {
          popup: `
          animate__animated
          animate__fadeOutDown`,
        },
      });
    };

    const showConfirmAlert = (
      alertTitle,
      alertText,
      alertIcon,
      showConfButton,
      timer
    ) => {
      SweetAlert.fire({
        title: alertTitle,
        text: alertText,
        icon: alertIcon,
        showConfirmButton: showConfButton,
        timer: timer,
        showClass: {
          popup: `
          animate__animated
          animate__flipInX`,
        },
        hideClass: {
          popup: `
          animate__animated
          animate__flipOutX`,
        },
      });
    };

    // Retornando las propiedades y métodos
    return {
      username,
      password,
      inputClasses,
      buttonClasses,
      submitForm,
      showSimpleAlert,
      showConfirmAlert,
    };
  },
};
</script>
