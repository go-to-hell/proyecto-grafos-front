import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import SignUp from '../views/SignUp.vue';
import Dashboard from '../views/Dashboard.vue';
import Editor from '../views/Editor.vue';
import Perfil from '../views/Perfil.vue';


const routes = [
    {
        path: '/',
        component: Login,
    },
    { 
        path: '/signup', 
        component: SignUp 
    },
    {
        path: '/dashboard',
        component: Dashboard,
    },
    {
        path: '/editor',
        component: Editor,
    },
    {
        path: "/perfil",
        component: Perfil,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
