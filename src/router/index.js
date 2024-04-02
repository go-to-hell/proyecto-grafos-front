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
import Assignment from "../views/Assignment.vue";
import EditorAssignment from "../views/EditorAssignment.vue";

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
    path: "/assignment",
    component: Assignment,
  },
  {
    path: "/editor_assignment",
    component: EditorAssignment,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
