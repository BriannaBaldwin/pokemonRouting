import Vue from "vue";
import VueRouter from "vue-router";

import FireType from "./components/Fire";
import WaterType from "./components/Water";
import GrassType from "./components/Grass";
import ElectricType from "./components/Electric";
import PsychicType from "./components/Psychic";

import BlastoiseCard from "./components/water/BlastoiseCard";
import PsyduckCard from "./components/water/PsyduckCard";

import CharizardCard from "./components/fire/CharizardCard";
import NinetailsCard from "./components/fire/NinetailsCard";

import VenusaurCard from "./components/grass/VenusaurCard";

import PikachuCard from "./components/electric/PikachuCard";

import MewCard from "./components/psychic/MewCard";

import NotFound from "./components/NotFound";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: CharizardCard },
  { path: "/fire", component: FireType },
  { path: "/water", component: WaterType },
  { path: "/grass", component: GrassType },
  { path: "/electric", component: ElectricType },
  { path: "/psychic", component: PsychicType },

  { path: "/charizard", component: CharizardCard },
  { path: "/ninetails", component: NinetailsCard },

  { path: "/blastoise", component: BlastoiseCard },
  { path: "/psyduck", component: PsyduckCard },

  { path: "/venusaur", component: VenusaurCard },

  { path: "/pikachu", component: PikachuCard },

  { path: "/mew", component: MewCard },
  
  { path: "*", component: NotFound }
];

export default new VueRouter({
  mode: "history",
  routes
});
