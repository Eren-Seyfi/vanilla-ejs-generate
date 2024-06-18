# EJS Şablon Projesi

Bu proje, EJS şablonlarını kullanarak dosya izleyici ile EJS dosyalarını HTML'e dönüştüren ve genel varlıkları bir çıktı dizinine kopyalayan basit bir kurulum örneği sunar. Proje ayrıca düzenli aralıklarla çıktı dizinini temizleme ve yeniden oluşturma özelliği içerir.

## Özellikler

- EJS şablonlarını HTML'e dönüştürür.
- Genel varlıkları (CSS, JS, resimler vb.) çıktı dizinine kopyalar.
- Kaynak dizinindeki değişiklikleri izler ve çıktı dizinini buna göre günceller.
- Düzenli aralıklarla çıktı dizinini temizler ve yeniden oluşturur.

## Kurulum

1. Depoyu klonlayın:

   ```bash
   git clone https://github.com/Eren-Seyfi/vanilla-ejs-generate.git
   cd ejs-template-project
   ```

2. Bağımlılıkları yükleyin:

   ```bash
   npm install
   ```

3. Projeyi çalıştırın:

   ```bash
   npm start
   ```

## Yapı

- **src**: EJS şablonları ve genel varlıkları içeren kaynak dizini.
  - **templates**: `layouts`, `partials`, `components` ve `pages` içerir.
  - **public**: CSS ve JS dosyaları gibi genel varlıkları içerir.
- **www**: Dönüştürülmüş HTML ve kopyalanmış varlıkların saklandığı çıktı dizini.
- **bootstrap.js**: Projeyi kurmak, değişiklikleri izlemek ve şablonları dönüştürmek için ana betik.
- **structure.json**: Yapıyı ve ayarları tanımlayan yapılandırma dosyası.

## Layouts Nasıl Çalışır:

Bu projede, EJS şablonları modüler bir yapı sağlamak için layout'lara (düzenlere) ayrılmıştır. Layout dosyaları templates/layouts dizininde yer alır. Her sayfa EJS dosyası, dosya adında layout adını belirterek hangi layout dosyasına ait olduğunu belirtir, örneğin, index.main.ejs, main.ejs layout'unun kullanılacağını gösterir.

Şablonlar render edildiğinde, layout dosyası sayfa içeriğini sarmak için kullanılır. Bu, farklı sayfalar arasında tutarlı başlık, altbilgi ve navigasyon bölümleri sağlar. Örneğin, bir index.main.ejs dosyası, main.ejs layout'u ile sarılacak ve bu layout'u kullanan tüm sayfalar için aynı başlık ve altbilgi kullanılacaktır.

## Yapılandırma

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

- **inputDir**: Kaynak dizin.
- **outputDir**: Çıktı dizin.
- **interval**: Çıktı dizinini temizlemek ve yeniden oluşturmak için milisaniye cinsinden aralık.
- **mainTemplate**: Ana EJS şablonunun yolu.
- **pagesDir**: EJS sayfa şablonlarını içeren dizin.
- **templates**: Şablonların yapısı.
- **public**: Genel varlıkların yapısı.

## Betikler

- **start**: Ana betiği (`bootstrap.js`) çalıştırır.
