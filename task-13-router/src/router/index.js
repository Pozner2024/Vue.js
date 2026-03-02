import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BrasilView from "../views/BrasilView.vue";
import PanamaView from "../views/PanamaView.vue";
import HawaiiView from "../views/HawaiiView.vue";
import JamaicaView from "../views/JamaicaView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/brazil", name: "brazil", component: BrasilView },
    { path: "/panama", name: "panama", component: PanamaView },
    { path: "/hawaii", name: "hawaii", component: HawaiiView },
    { path: "/jamaica", name: "jamaica", component: JamaicaView },
  ],
});

export default router;
