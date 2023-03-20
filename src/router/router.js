import { createRouter, createWebHistory } from "vue-router";
import MyList from "../views/MyList.vue";
import Home from "../views/Home.vue";
import Details from "../views/Details.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/movies/:id",
    name: "Details",
    component: Details,
  },
  {
    path: "/mylist",
    name: "MyList",
    component: MyList,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
