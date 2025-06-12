import Vue from "vue";

// v-viewer
import "viewerjs/dist/viewer.css";
import VueViewer from "v-viewer";
Vue.use(VueViewer);

//  vue-clickaway (besser pro Component registrieren)
import { mixin as clickaway } from "vue-clickaway";
Vue.mixin(clickaway);

// vue-js-toggle-button (oder nur die Komponente)
import ToggleButton from "vue-js-toggle-button";
Vue.use(ToggleButton);

// vue-js-modal
import VModal from "vue-js-modal";
Vue.use(VModal);

// vue-mq
import VueMq from "vue-mq";
Vue.use(VueMq, {
  breakpoints: {
    sm: 480,
    md: 720,
    lg: 960,
    xl: Infinity,
  },
});
