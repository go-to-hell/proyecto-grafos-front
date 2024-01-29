import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import SignUp from '../views/SignUp.vue';
import Dashboard from '../views/Dashboard.vue';
import Editor from '../views/Editor.vue';

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
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
