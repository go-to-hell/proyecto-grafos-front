import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";
import Dashboard from "../views/Dashboard.vue";
import GraphsHome from "../views/GraphsHome.vue";
import Editor from "../views/Editor.vue";
import Members from "../views/Members.vue";
import Graphs from "../views/Graphs.vue";
import Johnson from "../views/Johnson.vue";
import EditorJohnson from "../views/EditorJohnson.vue";
import Assignation from "../views/Assignation.vue";
import EditorAssignation from "../views/EditorAssignation.vue";

const routes = [
  {
    path: "/",
    component: Dashboard,
  },
  {
    path: "/editor",
    component: Editor,
  },
  {
    path: "/members",
    component: Members,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/signup",
    component: SignUp,
  },
  {
    path: "/graphs_home",
    component: GraphsHome,
  },
  {
    path: "/graphs",
    component: Graphs,
  },
  {
    path: "/johnson",
    component: Johnson,
  },
  {
    path: "/editorjohnson",
    component: EditorJohnson,
  },
  {
    path: "/assignation",
    component: Assignation,
  },
  {
    path: "/editor_assignation",
    component: EditorAssignation,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
