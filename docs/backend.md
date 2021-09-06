# Erstellen eines Backends

## Erstellen einer SpringBoot-Applikation
Eine neue Spring-Boot-Applikation kann einfach mit dem [Spring Initializr](https://start.spring.io/) erstellt werden. Als Dependency sollte mindestes "Spring Web" oder "Spring Reactive Web" ausgewählt werden.

```./mvnw spring-boot:run -Drun.jvmArguments='-Dserver.port=8088'```

Die erzeugte Spring Applikation beinhaltet noch keine Rest-Controller, als erstes sollte einer erzeugt werden (siehe [Anleitung](https://spring.io/guides/gs/rest-service/)).

## Einbinden und Konfigurieren von Spring Security

Achtung: Vor Spring Security 5.2 gab es ein extra Projekt (Spring Security OAuth) für die Unterstütztung von OAuth/OIDC in Spring. Dieses Projekt ist aber deprecated und wird nicht mehr weiterentwickelt. Es finden sich im Web aber noch oft Anleitungen dazu.

Sobald der ungesicherte Rest-Service erreicht werden kann, kann er durch Spring-Security angesichert werden. Dazu sind die folgenden Schritte notwendig (siehe [Anleitung](https://docs.spring.io/spring-security/site/docs/5.2.12.RELEASE/reference/html/oauth2.html#oauth2resourceserver))

* Hinzufügen der Dependencies ```spring-security-oauth2-resource-server``` und ```spring-security-oauth2-jose``` 
* Konfigurieren des Authentisierungsserver ```spring.security.oauth2.resourceserver.jwt.issuer-uri=http://localhost:8080/realms/Test-Applikation/```

Zusätzlich kann noch das Log-Level erhöht werden, sodass allfällige Fehlermeldungen geloggt werden: ```logging.level.org.springframework.security=DEBUG```


## Rollen in Spring Security

## Erweiterungen

## Andere Technologien
Für (fast) alle anderen Technologie-Stacks stehen OIDC-Libraries zur Verfügung, z.B.:
* [express-openid-connect für express.js](https://www.npmjs.com/package/express-openid-connect)
* [Microsoft.AspNetCore.Authentication.JwtBearer für ASP.NET](https://www.nuget.org/packages/Microsoft.AspNetCore.Authentication.JwtBearer)
* [php-jwt für php](https://github.com/firebase/php-jwt)
* [Flask-OpenID für Python](https://pythonhosted.org/Flask-OpenID/)
* [Micronaut Security](https://guides.micronaut.io/latest/micronaut-security-jwt-maven-java.html)
* [Quarkus](https://quarkus.io/guides/security-openid-connect)
* [go-oidc für Golang](https://github.com/coreos/go-oidc)
