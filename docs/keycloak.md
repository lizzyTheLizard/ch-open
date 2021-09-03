# Installieren und Aufsetzten von Keycloak

Keycloak kann einfach gestartet werden mittels

```
docker run \
	-p 8080:8080 \
	-e KEYCLOAK_USER=<USERNAME> \
	-e KEYCLOAK_PASSWORD=<PASSWORD>\
	 jboss/keycloak
```

Keycloak kann dann unter [http://localhost:8080](http://localhost:8080) erreicht werden.


Weiterführende Links:
* [Keycloak-Image auf Docker Hub](https://hub.docker.com/r/jboss/keycloak/)
* [Get started with Keycloak on Docker](https://www.keycloak.org/getting-started/getting-started-docker)
* [Keycloak Dokumentation](https://www.keycloak.org/documentation)

Auf jeden Fall solltet ihr die [Events](https://www.keycloak.org/docs/latest/server_admin/index.html#auditing-and-events) einschalten, um Probleme debuggen zu können. 

# Testen mit sp-Test
Um Keycloak zu testen, könnt ihr den Test-Client den  ihr auf [Github](https://github.com/lizzyTheLizard/sp-test) findet verwenden. Dazu müsst ihr folgendes tun:
* In Keycloak einen neuen Realm anlegen (z.B. Test-Applikation)
* In diesem Realm einen Benutzer erstellen
* In diesem Realm einen Client erstellen (Name sp-test) und die URL von sp-test als erlaubte Redirect-URI (http://localhost:3001/consumer.html) und Origin (http://localhost:3001) hinzufügen
* sp-test auschecken und mittels ```npm install && export PORT=3001 && npm start``` starten. Ihr könnte dann unter [localhost:3001/oidc](http://localhost:3001/oidc) einen OIDC-Flow starten
* Gebt dort folgende Werte ein:
* * Authentication Code-Flow
* * Auth-Endpunkt http://localhost:8080/auth/realm/Test-Applikation/protocol/oidc/auth
* * ClientId sp-test
* Keycloak sollte euch nun nach Benutzername und Passwort fragen
* Danach müsst ihr als Token-Endpunkt http://localhost:8080/auth/realm/Test-Applikation/protocol/oidc/token angeben
* Ihr solltet nun einen Access- und ID-Token sehen
* Um Implicit-Flow zu testen, müsste ihr dies für den Client in Keycloak freischalten. Danach könnt ihr "Implicit-Flow" auswählen und erhaltet direkt einen ID-Token
* Um Client-Credentials zu testen, müsst ihr einen 2ten Client in Keycloak anlegen (z.B. sp-test-cc). Dieser muss auf "confidential" gesetzt werden und der "Service-Account" muss aktiviert werden. Dann könnt ihr das Client-Secret aus dem Tab "Credentials" kopieren und ein Client-Credential-Flow unter [localhost:3001/clientCredentials](http://localhost:3001/clientCredentials) starten
