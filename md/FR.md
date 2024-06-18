
# Projet de modèle EJS

Ce projet démontre une configuration simple pour utiliser des modèles EJS avec un observateur de fichiers qui rend les fichiers EJS en HTML et copie les ressources publiques dans un répertoire de sortie. Le projet comprend également une fonctionnalité permettant de vider et de régénérer le répertoire de sortie à intervalles réguliers.

## Fonctionnalités

- Rendre les modèles EJS en HTML.
- Copier les ressources publiques (CSS, JS, images, etc.) dans le répertoire de sortie.
- Surveiller les modifications dans le répertoire source et mettre à jour le répertoire de sortie en conséquence.
- Vider et régénérer le répertoire de sortie à intervalles réguliers.

## Installation

1. Cloner le dépôt:

   ```bash
   git clone https://github.com/yourusername/ejs-template-project.git
   cd ejs-template-project
   ```

2. Installer les dépendances:

   ```bash
   npm install
   ```

3. Exécuter le projet:

   ```bash
   npm start
   ```

## Structure

- **src**: Répertoire source contenant des modèles EJS et des ressources publiques.
  - **templates**: Contient `layouts`, `partials` et `pages`.
  - **public**: Contient des ressources publiques telles que des fichiers CSS et JS.
- **www**: Répertoire de sortie où sont stockés les HTML rendus et les ressources copiées.
- **bootstrap.js**: Script principal pour configurer le projet, surveiller les modifications et rendre les modèles.
- **structure.json**: Fichier de configuration définissant la structure et les paramètres.

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

- **inputDir**: Le répertoire source.
- **outputDir**: Le répertoire de sortie.
- **interval**: Intervalle en millisecondes pour vider et régénérer le répertoire de sortie.
- **mainTemplate**: Chemin vers le modèle EJS principal.
- **pagesDir**: Répertoire contenant les modèles de pages EJS.
- **templates**: Structure des modèles.
- **public**: Structure des ressources publiques.

## Scripts

- **start**: Exécute le script principal (`bootstrap.js`).
