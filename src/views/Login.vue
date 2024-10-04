<template>
  <div class="row m-0 full-height">
    <!-- Left Side (Custom Design) -->
    <div class="col-md-6 p-0">
      <div class="h-100 w-100 bg-black text-white text-center">
        <!-- stars -->
        <div class="space-art d-flex align-items-center justify-content-center flex-column">
          <div class="fs-1 fw-bold my-3 my-md-5">Proyecto Grafos</div>
          <img
            class="w-75 pb-4"
            src="../assets/graph-art-login.png"
            alt="graph"
          />
        </div>
        <!-- Go Back Button -->
        <div>
          <button
            @click="goBack"
            class="btn btn-primary position-absolute top-0 start-0 mt-3 ms-3"
          >
            <i class="bi bi-arrow-left"></i>
          </button>
        </div>
      </div>
    </div>
    <!-- Right Side (Form) -->
    <div class="col-md-6 bg-body-tertiary d-flex align-items-center justify-content-center">
      <div class="px-md-5 pb-5">
        <!-- Login Form -->
        <LoginForm />

        <!-- Social Buttons -->
        <p class="pt-4 pb-3 text-center fw-light">&Oacute; ingresa con...</p>

        <!-- Buttons Container -->
        <div class="d-sm-flex d-grid gap-3 justify-content-center mb-4">
          <SocialButton
            class="bg-info-subtle"
            icon="bi-facebook"
            button-text="Facebook"
          />

          <SocialButton
            class="bg-danger-subtle"
            icon="bi-google"
            button-text="Google"
          />
        </div>

        <p class="py-2 text-center fw-light">
          Si aún no tienes una cuenta puedes registrarte aquí
        </p>
        <div class="d-flex justify-content-center">
          <button
            @click="signUp"
            class="btn btn-primary p-3 mx-1"
            type="submit"
          >
            <span>Regístrate</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
body, html {
  height: 100%;
  margin: 0;
  padding: 0;
}

.full-height {
  min-height: 100vh;
}
.space-art {
  position: relative;
  background-color: #000;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: #000
    url("https://www.transparenttextures.com/patterns/stardust.png");
  animation: space 120s linear infinite;
}

.space-art::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("https://www.transparenttextures.com/patterns/stardust.png");
  opacity: 0.5;
  mix-blend-mode: screen;
  animation: space 120s linear infinite;
}

.space-art::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    ellipse at center,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  opacity: 0.7;
  mix-blend-mode: overlay;
}

@keyframes space {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 10000px 5000px;
  }
}
</style>

<script>
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";
import SocialButton from "../components/SocialButton.vue";
import LoginForm from "../components/LoginForm.vue";

export default {
  components: {
    LoginForm,
    SocialButton,
  },

  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    const signUp = () => {
      router.push("/signup");
    };

    const goBack = () => {
      console.log("redirecionando a cableway_project");
      router.push("/cableway_project");
    };

    return {
      authStore,
      signUp,
      goBack,
    };
  },
};
</script>
