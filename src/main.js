import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { configureCompat } from "vue";
configureCompat({
  MODE: 3,
});

import "./assets/icon.font";
// import "./plugins";
import { registerPlugins } from "./plugins-v3";

const app = createApp(App);
app.use(router);
app.use(store);

registerPlugins(app);

app.mount("#app");
