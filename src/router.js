import Vue from "vue";
import VueRouter from "vue-router";

import FireType from "./components/Fire";
import WaterType from "./components/Water";

import BlastoiseCard from "./components/BlastoiseCard";
import CharizardCard from "./components/CharizardCard";
import VenusaurCard from "./components/VenusaurCard";
import PikachuCard from "./components/PikachuCard";
import NotFound from "./components/NotFound";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: CharizardCard },
  { path: "/charizard", component: CharizardCard },
  { path: "/blastoise", component: BlastoiseCard },
  { path: "/venusaur", component: VenusaurCard },
  { path: "/pikachu", component: PikachuCard },
  { path: "/fire", component: FireType },
  { path: "/water", component: WaterType },
  { path: "*", component: NotFound }
];

export default new VueRouter({
  mode: "history",
  routes
});
