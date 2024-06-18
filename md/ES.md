
# Proyecto de Plantilla EJS

Este proyecto demuestra una configuración simple para usar plantillas EJS con un observador de archivos que renderiza archivos EJS en HTML y copia activos públicos en un directorio de salida. El proyecto también incluye una función para limpiar y regenerar el directorio de salida a intervalos regulares.

## Características

- Renderiza plantillas EJS en HTML.
- Copia activos públicos (CSS, JS, imágenes, etc.) en el directorio de salida.
- Observa los cambios en el directorio fuente y actualiza el directorio de salida en consecuencia.
- Limpia y regenera el directorio de salida a intervalos regulares.

## Instalación

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/yourusername/ejs-template-project.git
   cd ejs-template-project
   ```

2. Instalar dependencias:

   ```bash
   npm install
   ```

3. Ejecutar el proyecto:

   ```bash
   npm start
   ```

## Estructura

- **src**: Directorio fuente que contiene plantillas EJS y activos públicos.
  - **templates**: Contiene `layouts`, `partials` y `pages`.
  - **public**: Contiene activos públicos como archivos CSS y JS.
- **www**: Directorio de salida donde se almacenan el HTML renderizado y los activos copiados.
- **bootstrap.js**: Script principal para configurar el proyecto, observar cambios y renderizar plantillas.
- **structure.json**: Archivo de configuración que define la estructura y las configuraciones.

## Configuración

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

- **inputDir**: El directorio fuente.
- **outputDir**: El directorio de salida.
- **interval**: Intervalo en milisegundos para limpiar y regenerar el directorio de salida.
- **mainTemplate**: Ruta a la plantilla principal de EJS.
- **pagesDir**: Directorio que contiene las plantillas de páginas EJS.
- **templates**: Estructura de las plantillas.
- **public**: Estructura de los activos públicos.

## Scripts

- **start**: Ejecuta el script principal (`bootstrap.js`).
