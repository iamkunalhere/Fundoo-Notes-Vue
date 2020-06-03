import Vue from "vue";
import VueRouter from "vue-router";
import Registration from "../components/Registration";
import Login from "../components/Login";
import ForgetPassword from "../components/ForgetPassword";

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
  },
  {
    path: "/forgetPassword",
    name: "ForgetPassword",
    component: ForgetPassword
  }
];

const router = new VueRouter({
  routes
});

export default router;
