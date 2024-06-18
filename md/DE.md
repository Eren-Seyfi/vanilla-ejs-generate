# EJS-Vorlagen-Projekt

Dieses Projekt bietet ein einfaches Setup-Beispiel, das EJS-Dateien mit dem File Tracker unter Verwendung von EJS-Vorlagen in HTML konvertiert und öffentliche Assets in ein Ausgabeverzeichnis kopiert. Das Projekt bietet auch die Möglichkeit, das Ausgabeverzeichnis regelmäßig zu bereinigen und neu zu erstellen.

## Merkmale

- Konvertiert EJS-Vorlagen in HTML.
- Kopiert generische Assets (CSS, JS, Bilder, etc.) in das Ausgabeverzeichnis.
- Überwacht Änderungen im Quellverzeichnis und aktualisiert das Ausgabeverzeichnis entsprechend.
- Säubert das Ausgabeverzeichnis regelmäßig und baut es neu auf.

## Installation

1) Klonen Sie das Repository:

   ```bash
   git clone https://github.com/Eren-Seyfi/vanilla-ejs-generate.git
   cd ejs-template-project
   ```

2. installieren Sie die Abhängigkeiten:

   ```bash
   npm install
   ```

3. starten Sie das Projekt:

   ```bash
   npm start
   ```

## Struktur

- **src**: Ressourcenverzeichnis mit EJS-Vorlagen und öffentlichen Assets.
  - **templates**: Enthält `layouts`, `partials`, `components` und `pages`.
  - **public**: Enthält öffentliche Assets wie CSS- und JS-Dateien.
- **www**: Ausgabeverzeichnis, in dem konvertiertes HTML und kopierte Assets gespeichert werden.
- **bootstrap.js**: Hauptskript zum Einrichten des Projekts, Verfolgen von Änderungen und Konvertieren von Vorlagen.
- **structure.json**: Konfigurationsdatei, die die Struktur und die Einstellungen definiert.

## Wie Layouts funktionieren:

In diesem Projekt sind die EJS-Vorlagen in Layouts unterteilt, um eine modulare Struktur zu schaffen. Die Layout-Dateien befinden sich im Verzeichnis templates/layouts. Jede EJS-Datei einer Seite gibt an, zu welcher Layout-Datei sie gehört, indem sie den Layout-Namen im Dateinamen angibt, z. B. index.main.ejs bedeutet, dass das Layout main.ejs verwendet wird.

Wenn Vorlagen gerendert werden, wird die Layout-Datei verwendet, um den Seiteninhalt zu umhüllen. Dadurch wird sichergestellt, dass die Kopf- und Fußzeilen sowie die Navigationsabschnitte auf den verschiedenen Seiten konsistent sind. Zum Beispiel wird eine index.main.ejs-Datei mit dem main.ejs-Layout umhüllt, und die gleiche Kopf- und Fußzeile wird für alle Seiten verwendet, die dieses Layout verwenden.

## Konfiguration

### structure.json

```json
{
  "inputDir": "src",
  "outputDir": "www",
  "interval": 5000,
  "mainTemplate": "templates/layouts/main.ejs",
  "pagesDir": "templates/pages",
  "templates": {
    "layouts": ["main.ejs", "example.ejs"],
    "partials": ["header.ejs", "footer.ejs", "nav.ejs"],
    "pages": [
      "index.main.ejs",
      "about.main.ejs",
      "index.example.ejs",
      "about.example.ejs"
    ],
    "components": []
  },
  "public": {
    "css": ["style.css"],
    "js": ["app.js"]
  }
}
```

- **inputDir**: Quellverzeichnis.
- **AusgabeVerzeichnis**: Ausgabeverzeichnis.
- **Intervall**: Intervall in Millisekunden, um das Ausgabeverzeichnis zu löschen und neu zu erstellen.
- **mainTemplate**: Pfad zur EJS-Hauptvorlage.
- **pagesDir**: Das Verzeichnis, das die EJS-Seitenvorlagen enthält.
- **templates**: Die Struktur der Vorlagen.
- **public**: Die Struktur der öffentlichen Entitäten.

## Skripte

- **start**: Führt das Hauptskript aus (`bootstrap.js`).

Übersetzt mit DeepL.com (kostenlose Version)