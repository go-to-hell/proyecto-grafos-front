import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from "./router";
import App from './App.vue'
import VNetworkGraph from 'v-network-graph';

import 'v-network-graph/lib/style.css';
import './style.css'



createApp(App).use(createPinia()).use(router).use(VNetworkGraph).mount('#app')