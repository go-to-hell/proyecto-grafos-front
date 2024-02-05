import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from "./router";
import App from './App.vue'
import VNetworkGraph from 'v-network-graph';

import 'v-network-graph/lib/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';

createApp(App).use(bootstrap).use(createPinia()).use(router).use(VNetworkGraph).mount('#app')