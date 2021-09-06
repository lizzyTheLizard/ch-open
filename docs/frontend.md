# Erstellen eines Frontends

## Erstellen einer Angular Applikation

Eine neue Angular-Applikation kann einfach mit dem Angular CLI erstellt werden ([Angular Tutorial](https://angular.io/tutorial/toh-pt0)). Dazu sind die folgenden Schritte notwendig:
* Der Befehl ```ng new --defaults authentication-frontend``` erstellt eine neue Applikation mit dem Namen "authentication-frontend" in einem Ordner mit demselben Namen.
* Der Befehl ```ng serve --open``` in diesem neuen Ordner startet die Applikation sowie einen Browser der unter [localhost:4200](http://localhost:4200) auf die Applikation zugreift.
* Der Ordner kann auch direkt im VSCode geöffnet und bearbeitet werden, Änderungen werden direkt übernommen.
* Die zum Start angezeigte Seite kann befindet sich unter 'src/app/app.component.html', der dazugehörige JS-Code befindet sich unter 'src/app/app.component.ts'

## Anbinden OIDC (Basis)

Um einem Login zu triggern muss [angular-oauth2-oidc](https://www.npmjs.com/package/angular-oauth2-oidc) eingebunden werden. Dazu muss der folgende Befehl ausgeführt werden

```npm i angular-oauth2-oidc --save```

Es existiert auch eine [Anleitung](https://github.com/manfredsteyer/angular-oauth2-oidc#installing) wie angular-oauth2-oidc in eine eigene Angular-Applikation eigebunden werden kann. Grundsätzlich sind die folgenden Schritte notwendig:

* In der Datei 'src/app/app.module.ts' müssen die Module und HttpClientModule und OAuthModule importiert werden
* In der Datei 'app.component.ts' muss angular-oauth2-oidc konfiguriert werden. Danach kann mittels tryLogin() geprüft werden, ob ein dies ein Redirect-Aufruf ist und ob dieser erfolgreich war. In dem Fall können die Claims des aktuellen Benutzers geladen werden.
*  In der Datei 'app.component.html' muss ein Login-Button angelegt werden. Wenn er aufgerufen wird, muss in 'app.component.ts' die Funktion initLoginFlow ausgeführt werden.

Die Applikation kann nun geladen werden, mittels Login-Button kann ein Benutzer ein Login starten, wenn er eingeloggt ist kann z.B. der Benutzername angezeigt werden.

## Anbinden OIDC (Erweiterungen)

Diese Implementierung kann in verschiedener Hinsicht erweitert werden:
* Hinzufügen eines "Silent-Refresh", siehe auch [Dokumentation](https://github.com/manfredsteyer/angular-oauth2-oidc/blob/master/docs-src/silent-refresh.md)
* Manuelles durchführen eines "Silent-Refresh" beim laden
* Erkennen einer beendeten Session mittels [Events](https://github.com/manfredsteyer/angular-oauth2-oidc/blob/master/docs-src/events.md) und [Session-Checks](https://github.com/manfredsteyer/angular-oauth2-oidc/blob/master/docs-src/session-checks.md)
* Forcieren des Logins beim Laden ("AutoLogin")
* Einbinden [Guards](https://angular.io/api/router/CanActivate) ins Angular Routing

## Aufrufen eines Rest-Backends

Der Access-Token muss für Requests an das Backend mitgeschickt werden, darf aber nicht an andere Services geschickt werden. In angular-oauth2-oidc kann dies konfiguriert werden, siehe [Anleitung](https://github.com/manfredsteyer/angular-oauth2-oidc#calling-a-web-api-with-an-access-token)

## Andere Technologien

Für (fast) alle anderen Technologie-Stacks stehen OIDC-Libraries zur Verfügung, z.B.:
* [Vuex-oidc](https://www.npmjs.com/package/vuex-oidc) für Vue.JS
* [oidc-react](https://www.npmjs.com/package/oidc-react) für React.JS
* AppAuth für [Android](https://github.com/openid/AppAuth-Android) und [iOS](https://github.com/openid/AppAuth-iOS)
* Keycloak bietet auch direkt Adapter für verschiedene Technologien [Keycloak#supported-platforms](https://www.keycloak.org/docs/4.8/securing_apps/#supported-platforms)
