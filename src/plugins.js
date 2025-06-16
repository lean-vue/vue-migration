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

// vue-scrollTo
import VueScrollTo from "vue-scrollTo";
Vue.use(VueScrollTo);

// vue-popperjs
// See usage in @/views/plugins/PopperView.vue

// vue2-touch-events
import Vue2TouchEvents from "vue2-touch-events";
Vue.use(Vue2TouchEvents);

// vuedraggable
// See usage in @/views/plugins/DraggableView.vue

// vee-validate
/*
import { ValidationObserver, ValidationProvider, extend } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "Bitte fülle dieses Feld aus",
});
extend("email", {
  ...email,
  message: "Bitte gebe eine korrekte Email-Adresse an",
});
// Register it globally
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
*/
