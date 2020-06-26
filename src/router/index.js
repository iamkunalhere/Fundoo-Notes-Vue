import Vue from "vue";
import VueRouter from "vue-router";
import Registration from "../components/Registration";
import Login from "../components/Login";
import ForgetPassword from "../components/ForgetPassword";
import ResetPassword from "../components/ResetPassword";
import Navbar from "../components/Navbar";
import TrashNotes from "../components/TrashNotes";
import ArchiveNotes from "../components/ArchiveNotes";
import NoteList from "../components/NoteList";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/registration",
    name: "Registration",
    component: Registration,
  },
  {
    path: "/forgetPassword",
    name: "ForgetPassword",
    component: ForgetPassword,
  },
  {
    path: "/resetpassword/:token",
    name: "ResetPassword",
    component: ResetPassword,
  },
  {
    path: "/navbar",
    name: "Navbar",
    component: Navbar,
    children: [
      {
        path: "",
        name: "NoteList",
        component: NoteList,
      },
      {
        path: "/notelist",
        name: "NoteList",
        component: NoteList,
      },
      {
        path: "/trashnotes",
        name: "TrashNotes",
        component: TrashNotes,
      },
      {
        path: "/archivenotes",
        name: "ArchiveNotes",
        component: ArchiveNotes,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
