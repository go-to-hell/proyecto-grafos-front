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
import NorthWest from "../views/NorthWest.vue";
import EditorNorthWestGraph from "../views/EditorNorthWestGraph.vue";
import BinaryTrees from "../views/BinaryTrees.vue";
import EditorBinaryTrees from "../views/EditorBinaryTrees.vue";
import Sorts from "../views/Sorts.vue";
import EditorSorts from "../views/EditorSorts.vue";
import EditorTrees from "../views/EditorTrees.vue";
import Kruskal from "../views/Kruskal.vue";
import EditorKruskal from "../views/EditorKruskal.vue";
import Dijkstra from "../views/Dijkstra.vue";
import EditorDijkstra from "../views/EditorDijkstra.vue";
import Compet from "../views/Compet.vue";
import EditorCompet from "../views/EditorCompet.vue";

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
    path: "/editor_johnson",
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
  {
    path: "/north_west",
    component: NorthWest,
  },
  {
    path: "/north_west_graph",
    component: EditorNorthWestGraph,
  },
  {
    path: "/sorts",
    component: Sorts,
  },
  {
    path: "/editor_sorts",
    component: EditorSorts,
  },
  {
    path: "/editor_trees",
    component: EditorTrees,
  },
  {
    path: "/binary_trees",
    component: BinaryTrees,
  },
  {
    path: "/editor_binary_trees",
    component: EditorBinaryTrees,
  },
  {
    path: "/kruskal",
    component: Kruskal,
  },
  {
    path: "/editor_kruskal",
    component: EditorKruskal,
  },
  {
    path: "/dijkstra",
    component: Dijkstra,
  },
  {
    path: "/editor_dijkstra",
    component: EditorDijkstra,
  },
  {
    path: "/compet",
    component: Compet,
  },
  {
    path: "/editor_compet",
    component: EditorCompet,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
