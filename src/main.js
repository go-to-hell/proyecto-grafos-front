import { createApp } from "vue";
import { createPinia } from "pinia";

import router from "./router";
import App from "./App.vue";
import VNetworkGraph from "v-network-graph";
import VueSweetAlert from "vue-sweetalert2";

import "v-network-graph/lib/style.css";
import "bootswatch/dist/sketchy/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "sweetalert2/dist/sweetalert2.min.css";
import "animate.css/animate.min.css";

createApp(App)
  .use(createPinia())
  .use(router)
  .use(VNetworkGraph)
  .use(VueSweetAlert)
  .mount("#app");
