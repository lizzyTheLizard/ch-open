# Vorbereitungen


## Docker installieren
Docker ist eine Open Source Software zur Container-Virtualisierung und wir werden sie verwenden, um Keycloak zu starten. Docker kann unter MacOS, Windows und Linux installiert werden. Auf Windows oder Mac stehen vorgefertigten Pakete ("Docker Desktop", [Install Docker Desktop on Mac](https://docs.docker.com/desktop/mac/install/) resp. [Install Docker Desktop on Windows](https://docs.docker.com/desktop/windows/install/)) zur Verfügung, unter Linux kann Docker mit den Paketmanager installiert werden (z.B. [Install Docker Engine on Ubuntu](https://docs.docker.com/engine/install/ubuntu/))

Unter Linux kann Docker noch für den aktuellen Benutzer freigeschalten werden, sodass kein "sudo" mehr notwendig ist: [Post-installation steps for Linux](https://docs.docker.com/engine/install/linux-postinstall/)

Um zu testen, ob Docker funktioniert kann folgender Befehl ausgeführt werden:

```docker run docker/whalesay cowsay boo```

Dies sollte ein ASCI-Bild des Docker-Logos (ein Walfisch) ausgeben.

## Frontend-IDE Installieren
Wir müssen für unsere Applikation ein Frontend erstellen und bearbeiten. Grundsätzlich könnt ihr dazu eure gewünschte Frontend-Technologie verwenden. Falls ihr noch keine oder nur wenig Erfahrung habt, würde ich euch Angular als Framework und VSCode als IDE empfehlen.

* Dazu müsst ihr zuerst Node.JS installieren. Für MacOS und Windows steht ein [Installer](https://nodejs.org/en/download/) zur Verfügung, für Linux kann dies über den Paketmanager installiert werden ([Anleitung für verschiedene Distributionen](https://github.com/nodesource/distributions/blob/master/README.md)
* Angular stellt eine CLI zur Verfügung, die das Erstellen eines Programmes vereinfacht. Sie kann mit ```sudo npm install -g @angular/cli``` installiert werden
* VSCode ist eine Open Source Entwicklungsumgebung von Microsoft die für MacOS, Windows und Linux zur Verfügung steht: [Download Visual Studio Code](https://code.visualstudio.com/download)

## Backend-IDE Installieren
Wir müssen für unsere Applikation ein Backend erstellen und bearbeiten. Grundsätzlich könnt ihr dazu eure gewünschte Backend -Technologie verwenden. Falls ihr noch keine oder nur wenig Erfahrung habt, würde ich euch Java und Sprint Boot empfehlen.

* Dazu müsst ihr zuerst Java installieren, auf MacOs und Windows z.B. mittels [AdoptOpenJDK](https://adoptopenjdk.net/). Ihr solltet mindestens Java 11 installiert haben. Unter Linux könnt ihr OpenJDK über den Paketmanager installieren ([Anleitung für Ubuntu](https://wiki.ubuntuusers.de/Java/Installation/OpenJDK/))
* Als IDE würde ich euch IntelliJ empfehlen. Ihr könnt die Open Source Community Edition für Windows oder MacOS [herunterladen](https://www.jetbrains.com/de-de/idea/download/). Unter Linux könnt ihr IntelliJ z.B. als [Standalone](https://www.jetbrains.com/help/idea/installation-guide.html#standalone) installieren
