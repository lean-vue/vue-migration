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

