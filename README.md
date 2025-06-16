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
