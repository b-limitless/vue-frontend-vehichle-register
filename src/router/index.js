import { createRouter, createWebHashHistory } from "vue-router";

import Vehicle from "../components/vehicle";
import Brand from "../components/brand"; 
import Model from "../components/model";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Vehicle,
  },
  {
    path: "/brands",
    name: "Brands",
    component: Brand,
  },
  {
    path: "/models",
    name: "Models",
    component: Model,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
