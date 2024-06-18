
# EJS Template Project

This project demonstrates a simple setup for using EJS templates with a file watcher that renders EJS files to HTML and copies public assets to an output directory. The project also includes a feature to clear and regenerate the output directory at regular intervals.

## Features

- Renders EJS templates to HTML.
- Copies public assets (CSS, JS, images, etc.) to the output directory.
- Watches for changes in the source directory and updates the output directory accordingly.
- Clears and regenerates the output directory at regular intervals.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/ejs-template-project.git
   cd ejs-template-project
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the project:

   ```bash
   npm start
   ```

## Structure

- **src**: Source directory containing EJS templates and public assets.
  - **templates**: Contains `layouts`, `partials`, and `pages`.
  - **public**: Contains public assets like CSS and JS files.
- **www**: Output directory where the rendered HTML and copied assets are stored.
- **bootstrap.js**: Main script to set up the project, watch for changes, and render templates.
- **structure.json**: Configuration file defining the structure and settings.

## Configuration

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

- **inputDir**: The source directory.
- **outputDir**: The output directory.
- **interval**: Interval in milliseconds for clearing and regenerating the output directory.
- **mainTemplate**: Path to the main EJS template.
- **pagesDir**: Directory containing the EJS page templates.
- **templates**: Structure of the templates.
- **public**: Structure of the public assets.

## Scripts

- **start**: Runs the main script (`bootstrap.js`).
