import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import data from "../data.json";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: HomeView },
    {
      path: "/destination/:id/:slug",
      name: "destination.show",
      component: () => import("@/views/DestinationShowView.vue"),
      props: (route) => ({
        ...route.params,
        id: Number(route.params.id),
      }),
      beforeEnter: (to, from, next) => {
        const id = Number(to.params.id);
        const destination = data.destinations.find(
          (item) => item.id === id,
        );
        if (!destination || destination.slug !== to.params.slug) {
          next({ name: "not-found" });
        } else {
          next();
        }
      },
      children: [
        {
          path: "experience/:experienceSlug",
          name: "experience.show",
          component: () => import("@/views/ExperiensShow.vue"),
          props: (route) => ({ ...route.params, id: route.params.id }),
        },
      ],
    },
    {
      path: "/destination/:pathMatch(.*)*",
      name: "destination-not-found",
      component: () => import("@/views/NotFound.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("@/views/NotFound.vue"),
    },
  ],
});

export default router;
