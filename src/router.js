import Vue from "vue";
import VueRouter from "vue-router";

import FireType from "./components/Fire";
import WaterType from "./components/Water";
import GrassType from "./components/Grass";
import ElectricType from "./components/Electric";
import PsychicType from "./components/Psychic";

import BlastoiseCard from "./components/water/BlastoiseCard";
import PsyduckCard from "./components/water/PsyduckCard";
import VaporeonCard from "./components/water/VaporeonCard";

import CharizardCard from "./components/fire/CharizardCard";
import NinetailsCard from "./components/fire/NinetailsCard";
import FlareonCard from "./components/fire/FlareonCard";
import MoltresCard from "./components/fire/MoltresCard";
import ArcanineCard from "./components/fire/ArcanineCard";

import VenusaurCard from "./components/grass/VenusaurCard";
import TangelaCard from "./components/grass/TangelaCard";
import ExeggutorCard from "./components/grass/ExeggutorCard";
import VileplumeCard from "./components/grass/VileplumeCard";

import PikachuCard from "./components/electric/PikachuCard";
import ZapdosCard from "./components/electric/ZapdosCard";
import JolteonCard from "./components/electric/JolteonCard";

import MewCard from "./components/psychic/MewCard";
import AlakazamCard from "./components/psychic/AlakazamCard";

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
  { path: "/flareon", component: FlareonCard },
  { path: "/moltres", component: MoltresCard },
  { path: "/arcanine", component: ArcanineCard },

  { path: "/blastoise", component: BlastoiseCard },
  { path: "/psyduck", component: PsyduckCard },
  { path: "/vaporeon", component: VaporeonCard },

  { path: "/venusaur", component: VenusaurCard },
  { path: "/tangela", component: TangelaCard },
  { path: "/exeggutor", component: ExeggutorCard },
  { path: "/vileplume", component: VileplumeCard },

  { path: "/pikachu", component: PikachuCard },
  { path: "/zapdos", component: ZapdosCard },
  { path: "/jolteon", component: JolteonCard },

  { path: "/mew", component: MewCard },
  { path: "/alakazam", component: AlakazamCard },
  
  { path: "*", component: NotFound }
];

export default new VueRouter({
  mode: "history",
  routes
});
