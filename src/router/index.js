import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/original-app/HomeView.vue";
import AppLayout from "../views/original-app/AppLayout.vue";
import PluginLayout from "../views/plugins/PluginLayout.vue";
import PluginHomeView from "../views/plugins/IndexView.vue";
import VViewerView from "../views/plugins/VViewerView.vue";
import ClickawayView from "../views/plugins/ClickawayView.vue";
import ToggleButtonView from "../views/plugins/ToggleButtonView.vue";
import ModalView from "@/views/plugins/ModalView.vue";
import MediaQueryView from "@/views/plugins/MediaQueryView.vue";
import ScrollToView from "@/views/plugins/ScrollToView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: AppLayout,
    children: [
      {
        path: "",
        name: "home",
        component: HomeView,
      },
      {
        path: "about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/original-app/AboutView.vue"
          ),
      },
    ],
  },
  {
    path: "/plugins",
    component: PluginLayout,
    children: [
      {
        path: "",
        component: PluginHomeView,
      },
      {
        path: "v-viewer",
        component: VViewerView,
      },
      {
        path: "clickaway",
        component: ClickawayView,
      },
      {
        path: "toggle-btn",
        component: ToggleButtonView,
      },
      {
        path: "modal",
        component: ModalView,
      },
      {
        path: "mq",
        component: MediaQueryView,
      },
      {
        path: "scroll-to",
        component: ScrollToView,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
