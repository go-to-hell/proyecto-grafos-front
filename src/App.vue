<template>
  <div id="app">
    <router-view />
    <div class="overlay" v-show="isLoading">
      <div class="section">
        <div class="loader"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useAuthStore } from "./stores/auth";
import { useLoaderStore } from "./stores/common/loaderStore";

export default {
  setup() {
    const authStore = useAuthStore();
    const loaderStore = useLoaderStore();

    const isLoading = computed(() => {
      return loaderStore.isLoading;
    });

    return {
      authStore,
      isLoading,
    };
  },
};
</script>

<style scoped>
.overlay {
  display: block;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  cursor: progress;
  z-index: 5;
}

.section {
  width: 100%;
  height: 100%;
  padding: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loader {
  width: 40px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(farthest-side, #ed303c 94%, #0000),
    radial-gradient(farthest-side, #3b8183 94%, #0000),
    radial-gradient(farthest-side, #fad089 94%, #0000),
    radial-gradient(farthest-side, #ff9c5b 94%, #0000), #ed303c;
  background-size: 105% 105%;
  background-repeat: no-repeat;
  animation: l5 2s infinite;
}
@keyframes l5 {
  0% {
    background-position: 50% -50px, -40px 50%, 50% calc(100% + 50px),
      calc(100% + 50px) 50%;
  }
  20%,
  25% {
    background-position: 50% -50px, -50px 50%, 50% calc(100% + 50px), 50% 50%;
  }
  45%,
  50% {
    background-position: 50% -50px, -50px 50%, 50% 50%, 50% 50%;
  }
  75%,
  75% {
    background-position: 50% -50px, 50% 50%, 50% 50%, 50% 50%;
  }
  95%,
  100% {
    background-position: 50% 50%, 50% 50%, 50% 50%, 50% 50%;
  }
}
</style>
