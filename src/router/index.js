import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import SignUp from '../views/SignUp.vue';
import Dashboard from '../views/Dashboard.vue';
import Editor from '../views/Editor.vue';
import Members from '../views/Members.vue';
import Graphs from '../views/Graphs.vue';


const routes = [
    {
        path: '/',
        component: Dashboard,
    },
    {
        path: '/editor',
        component: Editor,
    },
    {
        path: "/members",
        component: Members,
    },
    {
        path: '/login',
        component: Login,
    },
    { 
        path: '/signup', 
        component: SignUp 
    },
    {
        path: '/graphs',
        component: Graphs,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
