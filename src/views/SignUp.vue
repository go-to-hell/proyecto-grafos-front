<template>
  <!-- Global Container -->
  <div class="background">
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
    <div class="mx-auto p-4 col-md-7 bg-body-tertiary rounded-4">
      <!-- SignUp Form -->
      <SignUpForm />

      <!-- Border -->
      <div class="border-bottom border-secondary"></div>

      <p class="py-3 text-center fw-light">&Oacute; regístrate con...</p>

      <!-- Buttons Container -->
      <div class="d-sm-flex d-grid gap-3 justify-content-center mb-4">
        <SocialButton
          class="bg-info-subtle"
          image-src="facebook.png"
          image-alt="Facebook Logo"
          button-text="Facebook"
        />
        <SocialButton
          class="bg-warning-subtle"
          image-src="google.png"
          image-alt="Google Logo"
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
      router.go(-1);
    };

    return {
      goBack,
    };
  },
};
</script>

<style scoped>
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
