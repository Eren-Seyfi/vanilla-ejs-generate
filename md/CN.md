
# EJS 模板项目

该项目演示了使用文件监视器使用 EJS 模板的简单设置，该文件监视器将 EJS 文件呈现为 HTML 并将公共资产复制到输出目录中。该项目还包括定期清除和重新生成输出目录的功能。

## 特点

- 将 EJS 模板呈现为 HTML。
- 将公共资产（CSS、JS、图像等）复制到输出目录。
- 监视源目录中的更改并相应地更新输出目录。
- 定期清除和重新生成输出目录。

## 安装

1. 克隆存储库：

   ```bash
   git clone https://github.com/yourusername/ejs-template-project.git
   cd ejs-template-project
   ```

2. 安装依赖项：

   ```bash
   npm install
   ```

3. 运行项目：

   ```bash
   npm start
   ```

## 结构

- **src**：包含 EJS 模板和公共资产的源目录。
  - **templates**：包含 `layouts`、`partials` 和 `pages`。
  - **public**：包含公共资产，例如 CSS 和 JS 文件。
- **www**：存储渲染的 HTML 和复制的资产的输出目录。
- **bootstrap.js**：设置项目、监视更改和呈现模板的主脚本。
- **structure.json**：定义结构和设置的配置文件。

## 配置

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

- **inputDir**：源目录。
- **outputDir**：输出目录。
- **interval**：清除和重新生成输出目录的时间间隔（毫秒）。
- **mainTemplate**：主 EJS 模板的路径。
- **pagesDir**：包含 EJS 页面模板的目录。
- **templates**：模板的结构。
- **public**：公共资产的结构。

## 脚本

- **start**：运行主脚本 (`bootstrap.js`)。
