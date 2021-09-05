# Erstellen eines Frontends

## Erstellen einer Angular Applikation

Eine neue Angular-Applikation kann einfach mit dem Angular CLI erstellt werden ([Angular Tutorial](https://angular.io/tutorial/toh-pt0)). Dazu sind die folgenden Schritte notwendig:
* Der Befehl ```ng new --defaults authentication-frontend``` erstellt eine neue Applikation mit dem Namen "authentication-frontend" in einem Ordner mit dem Namen.
* Der Angular
* Der Befehl ```ng serve --open``` in diesem neuen Ordner startet die Applikation sowie einen Browser der unter [localhost:4200](http://localhost:4200) auf die Applikation zugreift.
* Dieser Ordner kann auch direkt im VSCode geöffnet und bearbeitet werden, Änderungen werden direkt übernommen.
* Die zum Start angezeigte Seite kann befindet sich unter 'src/app/app.component.html', der dazugehörige JS-Code befindet sich unter 'src/app/app.component.ts'

## Anbinden OIDC (Basis)

Um einem Login zu triggern muss [angular-oauth2-oidc](https://www.npmjs.com/package/angular-oauth2-oidc) eingebunden werden. Dazu muss der folgende Befehl ausgeführt werden

```npm i angular-oauth2-oidc --save```

Es existiert auch eine [Anleitung](https://github.com/manfredsteyer/angular-oauth2-oidc#installing) wie angular-oauth2-oidc in eine eigene Angular-Applikation eigebunden werden kann. Grundsätzlich sind die folgenden Schritte notwendig:

* In der Datei 'src/app/app.module.ts' muss angular-oauth2-oidc geladen werden
  * Import
  * Configure
  * Check if Login-Request
* Im der Komponente app.component muss ein Login-Button eingebaut werden der den Login startet resp. die User-Informationen anzeigt.

## Anbinden OIDC (Erweiterungen)

Diese Implementierung kann in verschiedener hinsicht erweitert werden:
* Hinzufügen eines "Silent-Refresh"
* Hinzufügen eines "Auto-Logins"
* "Silent-Auto-Login"

## Aufrufen eines Rest-Backends

TODO
