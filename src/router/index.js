import Vue from "vue";
import VueRouter from "vue-router";
import Registration from "../components/Registration";
import Login from "../components/Login";
import ForgetPassword from "../components/ForgetPassword";
import ResetPassword from "../components/ResetPassword";
import Navbar from "../components/Navbar";
import CreateNote from "../components/CreateNote";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/registration",
    name: "Registration",
    component: Registration
  },
  {
    path: "/forgetPassword",
    name: "ForgetPassword",
    component: ForgetPassword
  },
  {
    path: "/resetpassword/:token",
    name: "ResetPassword",
    component: ResetPassword
  },
  {
    path: "/navbar",
    name: "Navbar",
    component: Navbar
  },
  {
    path: "/navbar/createNote",
    name: "CreateNote",
    component: CreateNote
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
