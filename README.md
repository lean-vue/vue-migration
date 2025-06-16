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
