import Vue from "vue";

// v-viewer
import "viewerjs/dist/viewer.css";
import VueViewer from "v-viewer";
Vue.use(VueViewer);

//  vue-clickaway (besser pro Component registrieren)
import { mixin as clickaway } from "vue-clickaway";
Vue.mixin(clickaway);
