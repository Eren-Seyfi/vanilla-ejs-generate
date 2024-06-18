
# EJS-Vorlagenprojekt

Dieses Projekt zeigt eine einfache Einrichtung zur Verwendung von EJS-Vorlagen mit einem Dateiwächter, der EJS-Dateien in HTML rendert und öffentliche Assets in ein Ausgabeverzeichnis kopiert. Das Projekt umfasst auch eine Funktion zum Löschen und Neugenerieren des Ausgabeverzeichnisses in regelmäßigen Abständen.

## Funktionen

- Rendert EJS-Vorlagen in HTML.
- Kopiert öffentliche Assets (CSS, JS, Bilder usw.) in das Ausgabeverzeichnis.
- Überwacht Änderungen im Quellverzeichnis und aktualisiert das Ausgabeverzeichnis entsprechend.
- Löscht und regeneriert das Ausgabeverzeichnis in regelmäßigen Abständen.

## Installation

1. Klonen Sie das Repository:

   ```bash
   git clone https://github.com/yourusername/ejs-template-project.git
   cd ejs-template-project
   ```

2. Installieren Sie die Abhängigkeiten:

   ```bash
   npm install
   ```

3. Führen Sie das Projekt aus:

   ```bash
   npm start
   ```

## Struktur

- **src**: Quellverzeichnis mit EJS-Vorlagen und öffentlichen Assets.
  - **templates**: Enthält `layouts`, `partials` und `pages`.
  - **public**: Enthält öffentliche Assets wie CSS- und JS-Dateien.
- **www**: Ausgabeverzeichnis, in dem die gerenderten HTML- und kopierten Assets gespeichert werden.
- **bootstrap.js**: Hauptskript zur Einrichtung des Projekts, Überwachung von Änderungen und Rendern von Vorlagen.
- **structure.json**: Konfigurationsdatei, die die Struktur und Einstellungen definiert.

## Konfiguration

### structure.json

```json
{
  "inputDir": "src",
  "outputDir": "www",
  "interval": 10000,
  "mainTemplate": "templates/layouts/main.ejs",
  "pagesDir": "templates/pages",
  "templates": {
    "layouts": ["main.ejs"],
    "partials": ["header.ejs", "footer.ejs", "nav.ejs"],
    "pages": ["index.ejs", "about.ejs"]
  },
  "public": {
    "css": ["style.css"],
    "js": ["app.js"]
  }
}
```

- **inputDir**: Das Quellverzeichnis.
- **outputDir**: Das Ausgabeverzeichnis.
- **interval**: Intervall in Millisekunden zum Löschen und Neugenerieren des Ausgabeverzeichnisses.
- **mainTemplate**: Pfad zur Haupt-EJS-Vorlage.
- **pagesDir**: Verzeichnis, das die EJS-Seitenvorlagen enthält.
- **templates**: Struktur der Vorlagen.
- **public**: Struktur der öffentlichen Assets.

## Skripte

- **start**: Führt das Hauptskript (`bootstrap.js`) aus.
