# vue-migration

## Projekt-Aufbau

Das Projekt ist ansatzweise an die übermittelte `package.json`-Datei angeglichen:

- Alle Vue2 Plugins wurden übernommen
- Das E2E-Testing wurde vom CLI Plugin losgelöst
- Zusätzliche Dev-Toolchain wurde übernommen

Unterschiede sind:

- Kein Einbau der für die Migration weitgehend irrelevanten Third-Party Libraries.
- Storybook 7 habe ich nicht zum laufen bekommen. Deshalb nur Version 6
- Unit-Tests mit Jest sind aber drin über das CLI Plugin

## Ausgangspunkt:

NPM install result:

- added 2765 packages, and audited 2766 packages in 1m
- 71 vulnerabilities (7 low, 36 moderate, 28 high)

## Migrations-Schritte

### 1. Installation Vue 3 und Compat-Build aka Migration-Build

```sh
npm i -f vue@3 @vue/compat
```

Das Force-Flag (`-f`) ist notwendig, da sonst einige Peer-Abhängigkeiten die
Installation abbrechen lassen.

Prinzipiell ist wichtig, dass die gleiche Versionsnummer haben. Die oft
ebenfalls erwähnte Installation von `@vue/compiler-sfc` ist seit Vue 3.2.13
nicht mehr notwendig.

### 2. Vue-Module durch den Compat-Build ersetzen

Siehe `vue.config.js` Zeile 8

### 3. Kompabilitäts-Modus auf Vue 2 einstellen

- Compiler: siehe `vue.config.js` Zeile 10 bis 22
- Runtime: siehe `main.js` Zeile 6 bis 9

### Problem 1: Storybook Plugin

Das installierte Storybook-Plugin `vue-cli-plugin-storybook` erwartet jetzt auch
die Storybook-Unterstützung für Vue 3, die aber noch nicht installiert ist.
Deshalb zunächst einfach diese Zeile 62 aus der `package.json` entfernen.

### 4. Anwendung im Dev-Modus staren

`npm run serve`

#### Console-Warnungen

Drei Filter (in einer Datei) die verwendet werden

#### Browser

Zunächst funktionert das Routing nicht. Deshalb lässt sich die Anwendung
schlecht ausprobieren. Mit manueller Eingabe der Links ergibt sich folgendes
Ergebnis für die Plugin-Seiten

- [x] V-Viewer
- [x] Clickaway
- [x] Toggle Btn
- [x] Modal
- [ ] Media Query (mq) - Stürzt ab
- [x] ScrollTo
- [ ] Popper - Stürzt ab
- [x] Touch Events
- [ ] Draggable - Stürzt beim Drag ab
- [ ] Vee Validate - Validierung klappt nicht, auch gültige Werte werden abgewiesen

### 5. Global App Instanz beheben

Da der fehlerhafte Router die App jetzt stark ausbremst, müssen wir sehr früh
die globale App-Instanz entfernen.

Zunächst wird der in Vue 3 nutzlose Production-Hinweis gelöscht.

Und dann eine diskrete Vue-App Instanz erzeugt:

```js
import { createApp } from "vue";

const app = createApp({
  router,
  store,
  ...App,
});

app.mount("#app");
```

### 6. Router Upgrade

`npm i -f vue-router@4`

Und dann in der `router/index.js` den Code ändern zu einer Router-Instanz.
Dabei den gewünschten History-Modus auswählen:

```js
// Die folgenden Zeilen entfernen
// import Vue from "vue";
// import import VueRouter from "vue-router";
// Vue.use(VueRouter);

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory({ base: process.env.BASE_URL }),
  routes,
});
```

Dann den Router als App-Plugin einbinden in der `main.js`:

```js
app.use(router);
```

Und natürlich aus der `createApp`-Methode entfernen.

Nun funktioniert in Teilen das Routing wieder (Home und About). Da meine
Plugin-Seite aber im Layout einen Vuex-Zugriff macht, muss als
nächstes auch die Ecosystem-Library `Vuex` aktualisiert werden.

### 7. Vuex Upgrade

`npm i -f vuex@4`

In der `store/index.js` eine Vuex 4 Store-Instanz erzeugen:

```js
import { createStore } from "vuex";

const store = createStore({
// ...
})

//...
```

Und natürlich in der `main.js` das Plugin korrekt laden:

```js
const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
```

Nun lässt sich die App erstmal komplett bedienen - bis auf die nicht funktionierenden Plugins
der Liste oben.

### 8. Plugins

In diesem Projekt sind keine weiteren Deprecations eingebaut - zumindest nicht
durch mich absichtlich konstruiert. Einige stecken natürlich in der Verwendung
der Plugins drin, wie zum Beispiel die drei Filter-Anwendungen beim `vue-mq` - Plugin.

Die Migration solcher *eigener* Code-Deprecations erfolgt nach dem gestern demonstrierten
Muster.

Beispielhaft liefere ich hier schon einmal Ideen zur Migration der Plugins für:

- vee-validate
- vue-js-modal
- vue-mq

#### 8.1 Vee-Validate v3

Nutzung der neuen Version 4 - Alternativen: https://github.com/vuejs/awesome-vue?tab=readme-ov-file#validation

`npm i -f vee-validate@4`

Falls ähnlich wie in v3 vordefinierte Validatoren genutzt werden sollen:

`npm i -f @vee-validate/rules`

Die Anpassungen sind im einzelnen:

- Neu-Implentierung des Views: `views/plugins/ValidateView.vue` - wesentlich cleaner
- Bereitstellung der globalen Filter: `plugin-v3.js`
- Keine globalen Komponenten
- Aufräumen des alten Plugin-Codes: `plugin.js`

#### 8.2 vue-mq

Es gibt einen Fork des Projektes: https://github.com/craigrileyuk/vue3-mq
Er scheint relativ aktiv weiter entwickelt zu werden, Homepage ist:
https://craigrileyuk.github.io/vue3-mq/

Der `mq`-Filter wurde natürlich nicht übernommen. Hier muss man sich
selbst etwas stricken.

Der Nachbau aller Funktionalitäten mit `useMediaquery` aus `@vueuse/core` halte ich
für zu aufwändig.

```js
npm uninstall -f vue-mq
npm i -f vue3-mq
```

Leider sieht die Verwendung in der aktuellen Version 4 schon wieder ganz anders
aus. Das ist und wird dann aufwändig, wenn man viele Nutzungen hat. Dann entweder
auf pures CSS ausweichen wo es geht. Oder sich *Helper*-Direktiven bzw. Komponenten
bauen, die den alten Namen tragen.

Bitte jetzt auch die Variation der Plugin-Registrierung beachten in `plugins-v3.js` und `main.js`.
