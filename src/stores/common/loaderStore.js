import { defineStore } from "pinia";

export const useLoaderStore = defineStore({
  id: "loaderStore",
  state: () => ({
    isLoading: false,
  }),
  actions: {
    pageIsLoading() {
      this.isLoading = true;
    },
    pageIsLoaded() {
      this.isLoading = false;
    },
  },
});
