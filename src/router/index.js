import Vue from "vue";
import VueRouter from "vue-router";
import Registration from "../components/Registration";
import Login from "../components/Login"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Registration",
    component: Registration
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }
];

const router = new VueRouter({
  routes
});

export default router;
