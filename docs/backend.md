# Erstellen eines Backends

## Erstellen einer SpringBoot-Applikation
Eine neue Spring-Boot-Applikation kann einfach mit dem [Spring Initializr](https://start.spring.io/) erstellt werden. Als Dependency sollte mindestes "Spring Web" oder "Spring Reactive Web" ausgewählt werden.

```./mvnw spring-boot:run -Drun.jvmArguments='-Dserver.port=8088'```

Die erzeugte Spring Applikation beinhaltet noch keine Logik. Zum testen sollte als ersten ein Rest-Controller erzeugt werden (siehe [Anleitung](https://spring.io/guides/gs/rest-service/)).

## Einbinden und Konfigurieren von Spring Security

Achtung: Vor Spring Security 5.2 gab es ein extra Projekt (Spring Security OAuth) für die Unterstütztung von OAuth/OIDC in Spring. Dieses Projekt ist aber deprecated, wird nicht mehr weiterentwickelt und sollte nicht mehr verwendet werden. Es finden sich im Web aber noch oft Anleitungen dazu.

Sobald der ungesicherte Rest-Service erreicht werden kann, kann er durch Spring-Security angesichert werden. Dazu sind die folgenden Schritte notwendig (siehe [Anleitung](https://docs.spring.io/spring-security/site/docs/5.2.x/reference/html/oauth2.html#oauth2resourceserver))

* Hinzufügen der Dependencies ```spring-security-oauth2-resource-server``` und ```spring-security-oauth2-jose``` 
* Konfigurieren des Authentisierungsserver ```spring.security.oauth2.resourceserver.jwt.issuer-uri=http://localhost:8080/realms/Test-Applikation/```
* Konfigurieren von CORS damit wir den Request vom Frontend ausführen können (siehe [Anleitung](https://docs.spring.io/spring-security/site/docs/5.2.x/reference/html/integrations.html#cors))

Zusätzlich kann noch das Log-Level erhöht werden, sodass allfällige Fehlermeldungen geloggt werden: ```logging.level.org.springframework.security=DEBUG```

## Rollen in Spring Security

In Spring Security können einfach Rechteüberprüfungen mittels Rollen durchgeführt werden, z.B. mittels ```@PreAuthorize("hasAuthority('roles')")``` (siehe auch [Spring Security Dokumentation](https://docs.spring.io/spring-security/site/docs/5.2.x/reference/html/authorization.html#el-access)). Da in OIDC kein Standard vorgiebt wie Rollen übertragen werden sollen muss ein eigener ```GrantedAuthoritiesExtractor ``` erstelle werden, siehe [Spring Security Dokumentation](https://docs.spring.io/spring-security/site/docs/5.2.x/reference/html/oauth2.html#oauth2resourceserver-jwt-authorization-extraction).

## Aufrufen von gesicherten Backends

Wenn ein Microservice ein anders Backend aufrufen will, muss es ebenfalls einen Token mitschicken. Dazu gibt es 2 Möglichkeiten:

* Den erhaltenen Token weiterschicken ("Token-Propagation"). Dies kann einfach in den WebClient integriert werden, siehe [Spring Security Dokumentation](https://docs.spring.io/spring-security/site/docs/5.2.x/reference/html/oauth2.html#bearer-token-propagation)
* Mittels Client-Credentials einen eigenen Token bekommen und diesen mitschicken, siehe [Spring Security Dokumentation](https://docs.spring.io/spring-security/site/docs/5.2.x/reference/html/oauth2.html#oauth2Client-client-creds-grant)

Am einfachsten kann dies getestet werden, indem ein Request auf den Server selbst durchgeführt wird, so muss kein zweites Backend erstellt werden.

Achtung: Das RestTeamplate wird von Spring nicht mehr weiterentwickelt (siehe [RestTemplate Javadoc](https://docs.spring.io/spring-framework/docs/current/javadoc-api/index.html?org/springframework/web/client/RestTemplate.html)) und sollte in Zukunft nicht mehr verwendet werden. Statdessen kann auch im MVC-Stack der [WebClient](https://www.baeldung.com/spring-5-webclient) verwendet werden. Dazu muss aber der ```spring-boot-starter-webflux``` importiert werden.

## Andere Technologien
Für (fast) alle anderen Technologie-Stacks stehen OIDC-Libraries zur Verfügung, z.B.:
* [express-openid-connect für express.js](https://www.npmjs.com/package/express-openid-connect)
* [Microsoft.AspNetCore.Authentication.JwtBearer für ASP.NET](https://www.nuget.org/packages/Microsoft.AspNetCore.Authentication.JwtBearer)
* [php-jwt für php](https://github.com/firebase/php-jwt)
* [Flask-OpenID für Python](https://pythonhosted.org/Flask-OpenID/)
* [Micronaut Security](https://guides.micronaut.io/latest/micronaut-security-jwt-maven-java.html)
* [Quarkus](https://quarkus.io/guides/security-openid-connect)
* [go-oidc für Golang](https://github.com/coreos/go-oidc)
