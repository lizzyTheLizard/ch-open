# Keycloak
## Installieren und Aufsetzten von Keycloak

Wenn Docker installiert ist, kann Keycloak einfach gestartet werden mittels

```
docker run \
	-p 8080:8080 \
	-e KEYCLOAK_USER=admin \
	-e KEYCLOAK_PASSWORD=admin\
	 jboss/keycloak
```

Keycloak kann dann unter [http://localhost:8080](http://localhost:8080) erreicht und über die Administrations-Konsole mit dem Benutzer "admin/admin" konfiguriert werden (siehe auch [Keycloak Server Administration Guide](https://www.keycloak.org/docs/latest/server_admin/index.html))

## Testen mit sp-Test

Um Keycloak zu testen, könnt ihr den Test-Client [sp-test](https://github.com/lizzyTheLizard/sp-test) verwenden. Damit können verschiedene Login-Arten getestet und durchgespielt werden. sp-test könnt ihr auschecken und mittels ```npm install``` und dann ``npm start``` starten. sp-test kann dann unter http://localhost:3000/oidc erreicht werden. 

Damit ein Login möglich ist, muss in Keycloak ein neuer Realm z.B. mit dem Namen "Test-Applikation" angelegt werden. Dort müssen folgende Einstellungen getroffen werden:

* In den Realms-Einstellungen muss die Selbstregistration von Benutzern und "Login" eingeschalten werden.
* Unter "Clients" muss ein neuer Client mit dem Namen "sp-test" und der Redirect-URI http://localhost:3000/consumer.html und Origin http://localhost:3000 hinzugefügt werden.

Danach kann sp-test unter [localhost:3000/oidc](http://localhost:3000/oidc) aufegrufen werden. Dort müssen folgende Einstellungen getroffen werden:
* Authentication Code-Flow
* Auth-Endpunkt http://localhost:8080/auth/realms/Test-Applikation/protocol/openid-connect/auth
* Token-Endpunkt http://localhost:8080/auth/realms/Test-Applikation/protocol/openid-connect/token
* ClientId "sp-test"

Keycloak sollte euch nun nach Benutzername und Passwort fragen. Nach dem erfolgreichen Login muss als  angeben werden und ihr erhaltet ein Access- und ID-Token. Diese könnt ihr mit jwt.io parsen um den Inhalt des Tokens zu lesen. Um einen Implicit-Flow zu testen, müsste ihr dies für den Client in Keycloak freischalten. Danach könnt ihr in sp-test "Implicit-Flow" auswählen und erhaltet direkt einen ID-Token. Um Client-Credentials zu testen, muss ein zweiter Client mit z.B. dem Namen sp-test-cc angelegt werden. Dieser muss auf "confidential" gesetzt werden und der "Service-Account" muss aktiviert werden. Dann könnt ihr das Client-Secret aus dem Tab "Credentials" kopieren und ein Client-Credential-Flow unter http://localhost:3000/clientCredentials starten.

Auf jeden Fall solltet ihr die [Events](https://www.keycloak.org/docs/latest/server_admin/index.html#auditing-and-events) in Keycloak einschalten, um Probleme debuggen zu können. 

## Weitere Themen

Sobald Keycloak funktioniert, kann die Konfiguration erweitert werden z.B. durch:

* Konfigurieren von eigenen [Realm](https://www.keycloak.org/docs/latest/server_admin/#realm-roles)- und [Client](https://www.keycloak.org/docs/latest/server_admin/#client-roles)-Roles
* Konfigurieren von [Token-Mapper](https://www.keycloak.org/docs/latest/server_admin/#_protocol-mappers) und eigenen [Client-Scopes](https://www.keycloak.org/docs/latest/server_admin/#_client_scopes)
* Anbinden eines [Social IDPs](https://www.keycloak.org/docs/latest/server_admin/index.html#social-identity-providers)
* Erstellen eines eigene [Themes](https://www.keycloak.org/docs/latest/server_development/index.html#_themes)
* Erstellen von [Keycloak-Plugins](https://www.keycloak.org/docs/latest/server_development/index.html#_extensions)

## Weiterführende Links:
* [Keycloak Dokumentation](https://www.keycloak.org/documentation)
* [Get started with Keycloak on Docker](https://www.keycloak.org/getting-started/getting-started-docker)
