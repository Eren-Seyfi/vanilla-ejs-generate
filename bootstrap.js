const ejs = require("ejs");
const fs = require("fs");
const path = require("path");

// structure.json dosyasını oku
const structure = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "structure.json"), "utf8")
);

// Dizinleri ve dosyaları oluşturmak için fonksiyon
function createStructure(basePath, structure) {
  for (const key in structure) {
    const fullPath = path.join(basePath, key);
    // Dizin yoksa oluştur
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
      console.log(`Directory created: ${fullPath}`);
    }
    // Eğer bir dizi ise dosyaları oluştur
    if (Array.isArray(structure[key])) {
      structure[key].forEach((file) => {
        const filePath = path.join(fullPath, file);
        if (!fs.existsSync(filePath)) {
          let content = "";
          // main.ejs dosyasının içeriği
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
            // index.ejs dosyasının içeriği
            content = `
<h2>Home Page</h2>
<p>Welcome to the Home Page!</p>
                        `;
          } else if (file === "about.ejs") {
            // about.ejs dosyasının içeriği
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
      // Eğer nesne ise, recursive olarak içeriye git
      createStructure(fullPath, structure[key]);
    }
  }
}

// Proje kök dizininde yapıyı oluştur
const inputDir = path.resolve(__dirname, structure.inputDir || "");
createStructure(inputDir, {
  templates: structure.templates,
  public: structure.public,
});

// EJS dosyasını HTML'e çeviren bir fonksiyon
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

// outputDir dizininin var olup olmadığını kontrol et, yoksa oluştur
const outputDir = path.resolve(__dirname, structure.outputDir || "www");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// templates/pages dizinindeki tüm ejs dosyalarını oku
const templatesDir = path.join(inputDir, "templates/pages");
const templates = fs
  .readdirSync(templatesDir)
  .filter((file) => file.endsWith(".ejs"));

// Her template için render işlemini yap
templates.forEach((template) => {
  const templatePath = path.join(templatesDir, template);
  const outputPath = path.join(outputDir, template.replace(".ejs", ".html"));

  // EJS dosyasının içeriğini oku
  const bodyContent = fs.readFileSync(templatePath, "utf-8");

  // main.ejs layout'unu dahil et
  const data = {
    title: template.replace(".ejs", ""),
    body: bodyContent,
  };

  const mainTemplatePath = path.join(inputDir, "templates/layouts/main.ejs");
  renderTemplate(mainTemplatePath, outputPath, data);
});
