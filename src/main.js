import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { configureCompat } from "vue";
configureCompat({
  MODE: 2,
});

import "./assets/icon.font";
import "./plugins";

const app = createApp({
  store,
  ...App,
});

app.use(router);
app.mount("#app");
