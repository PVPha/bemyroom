import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/user-infor",
    name: "UserInfor",
    component: User,
  },
  {
    path: "/write",
    name: "Write",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Write.vue"),
  },
  {
    path: "/read/:slug",
    name: "read",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Read.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
