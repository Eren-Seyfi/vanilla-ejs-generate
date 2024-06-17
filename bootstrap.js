const ejs = require("ejs");
const fs = require("fs");
const path = require("path");
const chokidar = require("chokidar");

const structure = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "structure.json"), "utf8")
);

const inputDir = path.resolve(__dirname, structure.inputDir || "");
const outputDir = path.resolve(__dirname, structure.outputDir || "www");
const interval = structure.interval || 10000; // Milisaniye cinsinden izleme süresi
const mainTemplatePath = path.join(inputDir, structure.mainTemplate || "templates/layouts/main.ejs"); // Main template path
const pagesDir = path.join(inputDir, structure.pagesDir || "templates/pages"); // Pages directory

function createStructure(basePath, structure) {
  for (const key in structure) {
    const fullPath = path.join(basePath, key);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
      console.log(`Directory created: ${fullPath}`);
    }
    if (Array.isArray(structure[key])) {
      structure[key].forEach((file) => {
        const filePath = path.join(fullPath, file);
        if (!fs.existsSync(filePath)) {
          let content = "";
          if (file === "main.ejs") {
            content = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><%= title %></title>
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>
    <%- include('../partials/header') %>
    <%- include('../partials/nav') %>

    <main>
        <%- body %>
    </main>

    <%- include('../partials/footer') %>
    <script src="/js/app.js"></script>
</body>
</html>
            `;
          } else if (file === "index.ejs") {
            content = `
<h2>Home Page</h2>
<p>Welcome to the Home Page!</p>
            `;
          } else if (file === "about.ejs") {
            content = `
<h2>About Page</h2>
<p>Welcome to the About Page!</p>
            `;
          }
          fs.writeFileSync(filePath, content);
          console.log(`File created: ${filePath}`);
        }
      });
    } else if (typeof structure[key] === "object") {
      createStructure(fullPath, structure[key]);
    }
  }
}

function renderTemplate(templatePath, outputPath, data) {
  ejs.renderFile(templatePath, data, (err, str) => {
    if (err) {
      console.error(`Error rendering ${templatePath}:`, err);
      return;
    }
    fs.writeFile(outputPath, str, (err) => {
      if (err) {
        console.error(`Error writing ${outputPath}:`, err);
        return;
      }
      console.log(`Successfully rendered ${outputPath}`);
    });
  });
}

function renderAllTemplates() {
  const templates = fs
    .readdirSync(pagesDir)
    .filter((file) => file.endsWith(".ejs"));

  templates.forEach((template) => {
    const templatePath = path.join(pagesDir, template);
    const outputPath = path.join(outputDir, template.replace(".ejs", ".html"));

    const bodyContent = fs.readFileSync(templatePath, "utf-8");

    const data = {
      title: template.replace(".ejs", ""),
      body: bodyContent,
    };

    renderTemplate(mainTemplatePath, outputPath, data);
  });
}

function copyPublicDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyPublicDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
      console.log(`File copied: ${destPath}`);
    }
  }
}

function copyPublicAssets() {
  const publicSrcDir = path.join(inputDir, "public");
  const publicDestDir = path.join(outputDir, "public");
  copyPublicDir(publicSrcDir, publicDestDir);
}

function handleFileChange(filePath, action) {
  const relativePath = path.relative(inputDir, filePath);
  const destPath = path.join(outputDir, relativePath);

  if (relativePath.startsWith(structure.pagesDir) || relativePath.startsWith("public")) {
    console.log(`File change detected: ${action} ${filePath}`);
    renderAllTemplates();
    copyPublicAssets();
  } else if (relativePath.startsWith("templates")) {
    return; // templates klasöründeki diğer değişiklikleri yoksay
  } else {
    switch (action) {
      case 'add':
      case 'change':
        fs.copyFileSync(filePath, destPath);
        console.log(`File copied: ${destPath}`);
        break;
      case 'unlink':
        if (fs.existsSync(destPath.replace(".ejs", ".html"))) {
          fs.unlinkSync(destPath.replace(".ejs", ".html"));
          console.log(`File deleted: ${destPath.replace(".ejs", ".html")}`);
        }
        break;
      case 'addDir':
        if (!fs.existsSync(destPath)) {
          fs.mkdirSync(destPath);
          console.log(`Directory created: ${destPath}`);
        }
        break;
      case 'unlinkDir':
        if (fs.existsSync(destPath)) {
          fs.rmdirSync(destPath, { recursive: true });
          console.log(`Directory deleted: ${destPath}`);
        }
        break;
      default:
        break;
    }
  }
}

function startWatcher() {
  const watcher = chokidar.watch(inputDir, {
    persistent: true,
  });

  watcher.on('add', (filePath) => handleFileChange(filePath, 'add'));
  watcher.on('change', (filePath) => handleFileChange(filePath, 'change'));
  watcher.on('unlink', (filePath) => handleFileChange(filePath, 'unlink'));
  watcher.on('addDir', (dirPath) => handleFileChange(dirPath, 'addDir'));
  watcher.on('unlinkDir', (dirPath) => handleFileChange(dirPath, 'unlinkDir'));
}

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

createStructure(inputDir, {
  templates: structure.templates,
  public: structure.public,
});
renderAllTemplates();
copyPublicAssets();
startWatcher();

// structure.json dosyasındaki interval değerine göre izleme süresi
setInterval(() => {
  renderAllTemplates();
  copyPublicAssets();
}, interval);
