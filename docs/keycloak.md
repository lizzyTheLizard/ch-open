# Installieren und Aufsetzten von Keycloak

Wenn Docker installiert ist, kann Keycloak einfach gestartet werden mittels

```
docker run \
	-p 8080:8080 \
	-e KEYCLOAK_USER=admin \
	-e KEYCLOAK_PASSWORD=admin\
	 jboss/keycloak
```

Keycloak ist dann unter [http://localhost:8080](http://localhost:8080) erreicht werden und mit dem Benutzer admin/admin kann die Administrations-Konsole aufgerufen werden.

Weiterführende Links:
* [Get started with Keycloak on Docker](https://www.keycloak.org/getting-started/getting-started-docker)
* [Keycloak-Image auf Docker Hub](https://hub.docker.com/r/jboss/keycloak/)
* [Keycloak Dokumentation](https://www.keycloak.org/documentation)

# Testen mit sp-Test

Um Keycloak zu testen, könnt ihr den Test-Client [sp-test](https://github.com/lizzyTheLizard/sp-test) verwenden. Damit können verschiedene Login-Arten getestet und durchgespielt werden. Dazu müsst ihr sp-test auschecken und mittels ```npm install && export PORT=3001 && npm start``` starten. 

Damit ein Login möglich ist, muss in Keycloak ein neuer Realm angelegt werden (z.B. Test-Applikation) angelegt werden. In diesem Realm muss ein Benutzer (User) und einen Client erstellt werden Als Name für den Client kann z.B "sp-test" verwendet werden, die URL's von sp-test müssen als erlaubte Redirect-URI (http://localhost:3001/consumer.html) und Origin (http://localhost:3001) hinzugefügt werden.

Danach kann sp-test unter [localhost:3001/oidc](http://localhost:3001/oidc) aufegrufen werden. Dort müssen folgende Einstellungen getroffen werden:
* Authentication Code-Flow
* Auth-Endpunkt http://localhost:8080/auth/realms/Test-Applikation/protocol/oidc/auth
* ClientId "sp-test"

Keycloak sollte euch nun nach Benutzername und Passwort fragen. Nach dem erfolgreichen Login muss als Token-Endpunkt http://localhost:8080/auth/realms/Test-Applikation/protocol/oidc/token angeben werden und ihr erhaltet ein Access- und ID-Token


Um einen Implicit-Flow zu testen, müsste ihr dies für den Client in Keycloak freischalten. Danach könnt ihr in sp-test "Implicit-Flow" auswählen und erhaltet direkt einen ID-Token. Um Client-Credentials zu testen, muss ein zweiter Client mit z.B. dem Namen sp-test-cc angelegt werden. Dieser muss auf "confidential" gesetzt werden und der "Service-Account" muss aktiviert werden. Dann könnt ihr das Client-Secret aus dem Tab "Credentials" kopieren und ein Client-Credential-Flow unter [localhost:3001/clientCredentials](http://localhost:3001/clientCredentials) starten

Auf jeden Fall solltet ihr die [Events](https://www.keycloak.org/docs/latest/server_admin/index.html#auditing-and-events) in Keycloak einschalten, um Probleme debuggen zu können. 
