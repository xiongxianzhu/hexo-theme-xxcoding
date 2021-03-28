# hexo-theme-xxcoding

[![GitHub tag (latest Ver)](https://img.shields.io/github/tag/xiongxianzhu/hexo-theme-xxcoding.svg?style=flat-square)](https://github.com/xiongxianzhu/hexo-theme-xxcoding/tags)

[![Hexo version support is 5.4.0+](https://img.shields.io/badge/hexo-5.4.0%2B-blue.svg?style=flat-square)](https://hexo.io/)

打造一款属于自己的hexo主题

## 特征

- 响应式布局
- 扁平风格
- 基于[materialize](https://github.com/Dogfalo/materialize)进行[Material Design](https://material.io)

## 目录结构

```plain
$ tree -L 2
.
├── CHANGELOG.md
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── README_EN.md
├── _config.template.yml
├── _config.yml
├── languages
│   ├── en.yml
│   ├── zh-CN.yml
│   └── zh-TW.yml
├── layout
│   ├── 404.ejs
│   ├── _partial
│   ├── _widget
│   ├── about.ejs
│   ├── archive.ejs
│   ├── category.ejs
│   ├── index.ejs
│   ├── layout.ejs
│   ├── page.ejs
│   ├── post.ejs
│   ├── resume.ejs
│   ├── search.ejs
│   └── tag.ejs
├── scripts
└── source
    ├── css
    ├── fonts
    ├── img
    ├── js
    └── libs
```

## 安装

## 配置

## 插件

### 主题内置插件

```bash
bower install <package>
```

主题大部分本地插件库通过`bower`下载， 将插件库的核心文件如`dist`目录下的`*.min.css`, `*.min.js`及字体文件拷贝到本主题下的`./source/libs/<package>/`下。

- [jquery](https://github.com/jquery/jquery-dist)
- [materialize](https://github.com/Dogfalo/materialize)
- [animate.css](https://github.com/animate-css/animate.css)
- [prism](https://github.com/PrismJS/prism)
- [fontawesome](https://github.com/FortAwesome/Font-Awesome)

> hexo项目根目录下执行`npm install`时， 安装hexo会依赖安装prismjs， 本主题下的prism是自定义的css样式

#### 自定义代码高亮插件prism的样式

`./node_modules/prismjs/themes/prism-tomorrow.css`即本主题下的`./source/libs/prism/prism-tomorrow-night.css`样式

默认使用`prism-tomorrow-night.css`

配色参考：

- [tomorrow-theme](https://github.com/chriskempson/tomorrow-theme)

### 博客插件

```bash
npm install <package> --save
```

## 贡献

## 许可证

[![license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](./LICENSE)

> 本主题使用了 `MIT` 许可证进行开源许可。

## 预览

## 参考

- [hexo官方主题说明文档](https://hexo.io/zh-cn/docs/themes.html)
- [Materialize](https://materializecss.com/)
- [Material Design](https://material.io)
- [Materializecss色板](https://materializecss.com/color.html#palette)
- [gitignore.io](https://www.toptal.com/developers/gitignore)
- [shields.io](https://shields.io/)
- [bower.io](https://bower.io/)
- [EJS中文文档](https://ejs.bootcss.com/)
- [material icons](https://material.io/resources/icons/?style=baseline)

## 灵感

- [hexo-theme-matery](https://github.com/blinkfox/hexo-theme-matery)
- [hexo-theme-material](https://github.com/bolnh/hexo-theme-material)
- [hexo-theme-yilia](https://github.com/litten/hexo-theme-yilia)
- [Creating a Theme](https://www.youtube.com/watch?v=5ROIU_9dYe4&list=PLLAZ4kZ9dFpOMJR6D25ishrSedvsguVSm&index=11)
- [Material Design Themes](https://materialdesignthemes.com/)
- [creative tim](https://www.creative-tim.com/templates/free)
- [bootstrap](https://getbootstrap.com/)
- [Material UI调色板](https://www.materialui.co/colors)
