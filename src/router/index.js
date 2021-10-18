import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/example.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  // {
  //   path: "/example",
  //   name: "example",
  //   component: () =>
  //     import("../views/example.vue")
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
