# vanilla-ejs-generate
# git add *

# git commit -m "v0.04"

# git push

# EJS Template Project / EJS Şablon Projesi

This project demonstrates a simple setup for using EJS templates with a file watcher that renders EJS files to HTML and copies public assets to an output directory. The project also includes a feature to clear and regenerate the output directory at regular intervals.

Bu proje, EJS şablonlarını kullanarak dosya izleyici ile EJS dosyalarını HTML'e dönüştüren ve genel varlıkları bir çıktı dizinine kopyalayan basit bir kurulum örneği sunar. Proje ayrıca düzenli aralıklarla çıktı dizinini temizleme ve yeniden oluşturma özelliği içerir.

## Features / Özellikler

- Renders EJS templates to HTML.
- Copies public assets (CSS, JS, images, etc.) to the output directory.
- Watches for changes in the source directory and updates the output directory accordingly.
- Clears and regenerates the output directory at regular intervals.

- EJS şablonlarını HTML'e dönüştürür.
- Genel varlıkları (CSS, JS, resimler vb.) çıktı dizinine kopyalar.
- Kaynak dizinindeki değişiklikleri izler ve çıktı dizinini buna göre günceller.
- Düzenli aralıklarla çıktı dizinini temizler ve yeniden oluşturur.

## Installation / Kurulum

1. Clone the repository:

   Depoyu klonlayın:

   ```bash
   git clone https://github.com/yourusername/ejs-template-project.git
   cd ejs-template-project
   ```

2. Install dependencies:

   Bağımlılıkları yükleyin:

   ```bash
   npm install
   ```

3. Run the project:

   Projeyi çalıştırın:

   ```bash
   npm start
   ```

## Structure / Yapı

- **src**: Source directory containing EJS templates and public assets. / EJS şablonları ve genel varlıkları içeren kaynak dizini.
  - **templates**: Contains `layouts`, `partials`, and `pages`. / `layouts`, `partials` ve `pages` içerir.
  - **public**: Contains public assets like CSS and JS files. / CSS ve JS dosyaları gibi genel varlıkları içerir.
- **www**: Output directory where the rendered HTML and copied assets are stored. / Dönüştürülmüş HTML ve kopyalanmış varlıkların saklandığı çıktı dizini.
- **bootstrap.js**: Main script to set up the project, watch for changes, and render templates. / Projeyi kurmak, değişiklikleri izlemek ve şablonları dönüştürmek için ana betik.
- **structure.json**: Configuration file defining the structure and settings. / Yapıyı ve ayarları tanımlayan yapılandırma dosyası.

## Configuration / Yapılandırma

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

- **inputDir**: The source directory. / Kaynak dizin.
- **outputDir**: The output directory. / Çıktı dizin.
- **interval**: Interval in milliseconds for clearing and regenerating the output directory. / Çıktı dizinini temizlemek ve yeniden oluşturmak için milisaniye cinsinden aralık.
- **mainTemplate**: Path to the main EJS template. / Ana EJS şablonunun yolu.
- **pagesDir**: Directory containing the EJS page templates. / EJS sayfa şablonlarını içeren dizin.
- **templates**: Structure of the templates. / Şablonların yapısı.
- **public**: Structure of the public assets. / Genel varlıkların yapısı.

## Scripts / Betikler

- **start**: Runs the main script (`bootstrap.js`). / Ana betiği (`bootstrap.js`) çalıştırır.
