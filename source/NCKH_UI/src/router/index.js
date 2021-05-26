import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/home.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/profile.vue"),
  },
  {
    // will match everything
    path: "*",
    component: () => import("../views/not-found.vue"),
  },
  {
    path: "/upload-profile",
    name: "upload-profile",
    component: () => import("../views/upload-profile.vue"),
  },
  {
    path: "/package/new",
    name: "package-new",
    component: () => import("../views/package-form.vue"),
  },
  {
    path: "/user/profile",
    name: "user-profile",
    component: () => import("../views/user-profile.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
