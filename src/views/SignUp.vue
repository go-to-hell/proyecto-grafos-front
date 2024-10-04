<template>
  <!-- Global Container -->
  <div class="background full-height d-flex align-items-center justify-content-center">
    <!-- Go Back Button -->
    <div>
      <button
        @click="goBack"
        class="btn btn-primary position-absolute top-0 start-0 mt-3 ms-3"
      >
        <i class="bi bi-arrow-left"></i>
      </button>
    </div>
    <!-- Card Container -->
    <div class="mx-auto p-4 col-md-4 bg-body-tertiary rounded-4">
      <!-- SignUp Form -->
      <SignUpForm />

      <!-- Border -->
      <div class="border-bottom border-secondary"></div>

      <p class="py-3 text-center fw-light">&Oacute; regístrate con...</p>

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
    </div>
  </div>
</template>

<script>
// import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";
import SocialButton from "../components/SocialButton.vue";
import SignUpForm from "../components/SignUpForm.vue";

export default {
  components: {
    SocialButton,
    SignUpForm,
  },
  setup() {
    const router = useRouter();

    const goBack = () => {
      router.push('/cableway_project');
    };

    return {
      goBack,
    };
  },
};
</script>

<style scoped>
body, html {
  height: 100%;
  margin: 0;
  padding: 0;
}

.full-height {
  min-height: 100vh;
}
.background {
  position: relative;
  background-color: #000;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: #000
    url("https://www.transparenttextures.com/patterns/stardust.png");
  animation: space 120s linear infinite;
  padding: 2% 0;
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
