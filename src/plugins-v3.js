import { Vue3Mq } from "vue3-mq";
import "viewerjs/dist/viewer.css";
import VueViewer from "v-viewer";

// Vee Validate Global Validators
import { configure, defineRule } from "vee-validate";
import { required, email, min } from "@vee-validate/rules";

defineRule("required", required);
defineRule("email", email);
defineRule("min", min);

configure({
  generateMessage: (ctx) => {
    if (ctx.rule?.name === "required") {
      return "Bitte fülle dieses Feld aus";
    }
    if (ctx.rule?.name === "min") {
      return `Es müssen mind. ${ctx.rule?.params?.[0]} Zeichen sein.`;
    }
    if (ctx.rule?.name === "email") {
      return "Bitte gebe eine korrekte Email-Adresse an";
    }
    return `Das Feld ${ctx.field} ist ungültig`;
  },
});

// Im folgenden werden alle Plugins initialisiert über eine Helper-Funktion,
// damit die Registrierung nicht in der main.js erfolgen muss
export function registerPlugins(app) {
  app.use(Vue3Mq, {
    global: true,
  });
  app.use(VueViewer);
}
