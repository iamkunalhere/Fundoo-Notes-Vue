import Vue from "vue";
import VueRouter from "vue-router";
import Registration from "../components/Registration.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Registration
  }
];

const router = new VueRouter({
  routes
});

export default router;
