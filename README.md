# Informationen zu dem Workshop-Tagen CH-Open 2021

# Vorbedingungen und Informationen

## Docker installieren
Docker existiert für MacOS, Windows und Linux. Auf Windows oder Mac können die vorgefertigten Pakete ("Docker Desktop") verwendet werden. Unter Linux kann Docker mit den System-Tools installiert werden.
* [Install Docker Desktop on Mac](https://docs.docker.com/desktop/mac/install/)
* [Install Docker Desktop on Windows](https://docs.docker.com/desktop/windows/install/)
* [Install Docker Engine on Ubuntu](https://docs.docker.com/engine/install/ubuntu/)

Unter Linux kann Docker noch für den aktuellen Benutzer freigeschalten werden, sodass kein "sudo" mehr notwendig ist: [Post-installation steps for Linux](https://docs.docker.com/engine/install/linux-postinstall/)


Um zu testen ob docker funktioniert kann folgender Befehl ausgeführt werden:

```docker run docker/whalesay cowsay boo```

Dies sollte ein ASCI-Bild des Docker-Logos (ein Walfisch) ausgeben.

## Frontend-IDE Installieren
Falls ihr eine andere Frontend-Technologie verwendet => Kein Problem. Ihr müsst aber in der Lage sein ein Javascript-Frontend zu starten und zu verändern. Falls ihr noch keine oder nur wenig Erfahrung habt, würde ich euch Angular und VSCode empfehlen.

* Dazu müsst ihr zuerst Node.JS installieren. Für MacOS und Windows steht ein [Installer](https://nodejs.org/en/download/) zur Verfügung, für Linux kann dies über den Packet-Manager installiert werden ([Anleitung](https://github.com/nodesource/distributions/blob/master/README.md))
* Angular stellt eine CLI zur Verfügung, die erstellen eines Programmes vereinfacht. Sie kann mir ```sudo npm install -g @angular/cli``` installiert werden
* VSCode ist eine IDE OpenSource von Microsoft die für MacOS, Windows und Linux zur Verfügung steht: [Download Visual Studio Code](https://code.visualstudio.com/download)

## Backend-IDE Installieren
Falls ihr eine andere Backend-Technologie verwendet => Kein Problem. Ihr müsst aber in der Lage sein ein Rest-API zu erstellen und zu verändern. Falls ihr noch keine oder nur wenig Erfahrung habt, würde ich euch Java und Sprint Boot empfehlen.

* Dazu müsst ihr zuerst Java installieren, z.B. mittels [AdoptOpenJDK](https://adoptopenjdk.net/). Ihr solltet mindenstens Java 11 installiert haben. Unter Linux könnt ihr OpenJDK über die Packet-Quellen installieren z.B. für [Ubuntu](https://wiki.ubuntuusers.de/Java/Installation/OpenJDK/)
* Als IDE kann auch VS-Code verwendet werden, besser geeignet ist aber IntelliJ. Ihr könnt die Open Source Community Edition für Windows oder MacOS [herunterladen](https://www.jetbrains.com/de-de/idea/download/). Unter Linux könnt ihr IntelliJ z.B. als [Standalone](https://www.jetbrains.com/help/idea/installation-guide.html#standalone) installieren


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
