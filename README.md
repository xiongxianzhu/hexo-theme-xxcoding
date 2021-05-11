<h1 align="center">hexo-theme-xxcoding</h1>

<div align="center">

打造一款属于自己的hexo主题

[![GitHub tag (latest Ver)](https://img.shields.io/github/tag/xiongxianzhu/hexo-theme-xxcoding.svg?style=flat-square)](https://github.com/xiongxianzhu/hexo-theme-xxcoding/tags)
[![Hexo version support is 5.4.0+](https://img.shields.io/badge/hexo-v5.4.0%2B-blue.svg?style=flat-square)](https://hexo.io/)
![node version](https://img.shields.io/badge/node-v14.16.0%2B-blue.svg?style=flat-square)
![npm version](https://img.shields.io/badge/npm-v6.14.11%2B-blue.svg?style=flat-square)
[![license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](./LICENSE)

</div>

简体中文 | [English](./README_EN.md)

## ✨ 特征

- [x] 🌈 响应式布局、 扁平风格、 高大上
- [x] 基于[materialize](https://github.com/Dogfalo/materialize)进行[Material Design](https://material.io)
- [x] [APlayer](https://aplayer.js.org/)音乐播放器
- [ ] [DaoVoice](https://www.daocloud.io/)在线聊天
- [ ] 数据统计与分析：[百度统计](https://tongji.baidu.com/web/welcome/login)、 谷歌分析、 CNZZ、 LeanCloud、 不蒜子网站统计
- [x] `lazyload` 图片懒加载
- [x] 评论系统： disqus、 Valine、 gitalk、 gitment、 livere、 畅言
- [x] `prismjs`代码高亮
- [ ] `resume` 简历
- [ ] `gallery` 相册
- [ ] `portfolio` 作品集
- [ ] `links` 友情链接
- [ ] `tagcloud` 标签云
- [ ] `timeline` 时间线
- [x] `TOC` 文章目录 [tocbot](https://github.com/tscanlin/tocbot)
- [x] 文章置顶`sticky`
- [ ] 文章打赏
- [ ] 🌍 国际化支持多语言， 目前支持`简体中文`、 `English`、 `繁体中文`
- [ ] 🎨 支持每个细节自定义主题
- [ ] 支持`emoji`表情
- [x] `live2d-widget`[看板娘](https://github.com/stevenjoezhang/live2d-widget)

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

## 📦 安装

## 🔨 配置

### 新建分类 categories 页

```bash
hexo new page categories
```

```plain
---
title: categories
date: 2021-04-15 22:46:55
type: categories
layout: categories
---

```

### 新建标签 tags 页

```bash
hexo new page tags
```

```plain
---
title: tags
date: 2021-04-15 22:53:20
type: tags
layout: tags
---
```

### 新建关于我 about 页

```bash
hexo new page about
```

```plain
---
title: about
date: 2021-04-15 22:53:27
type: about
layout: about
---
```

### 新建留言板 comments 页 (可选)

```bash
hexo new page comments
```

```plain
---
title: comments
date: 2021-04-15 22:53:27
type: comments
layout: comments
---
```

### 新建友情链接 frients 页 (可选)

```bash
hexo new page frients
```

```plain
---
title: frients
date: 2021-04-15 22:53:27
type: frients
layout: frients
---
```

### 新建时间线 timeline 页 (可选)

```bash
hexo new page timeline
```

```plain
---
title: timeline
date: 2021-04-15 22:53:27
type: timeline
layout: timeline
---
```

### 新建简历 resume 页 (可选)

```bash
hexo new page resume
```

```plain
---
title: resume
date: 2021-04-15 22:53:27
type: resume
layout: resume
---
```

### 新建Vlog vlog 页 (可选)

```bash
hexo new page vlog
```

```plain
---
title: vlog
date: 2021-04-15 22:53:27
type: vlog
layout: vlog
---
```

### 新建作品集 portfolio 页 (可选)

```bash
hexo new page portfolio
```

```plain
---
title: portfolio
date: 2021-04-15 22:53:27
type: portfolio
layout: portfolio
---
```

### 新建图库 galleries 页 (可选)

```bash
hexo new page galleries
```

```plain
---
title: galleries
date: 2021-04-15 22:53:27
type: galleries
layout: galleries
---
```

### 新建音乐库 musics 页 (可选)

```bash
hexo new page musics
```

```plain
---
title: musics
date: 2021-04-15 22:53:27
type: musics
layout: musics
---
```

### 新建视频库 videos 页 (可选)

```bash
hexo new page videos
```

```plain
---
title: videos
date: 2021-04-15 22:53:27
type: videos
layout: videos
---
```

### 新建图书库 books 页 (可选)

```bash
hexo new page books
```

```plain
---
title: books
date: 2021-04-15 22:53:27
type: books
layout: books
---
```

### 评论系统

- [Valine](https://valine.js.org/)

### 文章置顶

在`./node_modules/hexo-generator-index/lib/generator.js`文件中， 找到以下代码：

```js
sort(posts.data, (a, b) => (b.sticky || 0) - (a.sticky || 0));
```

可知, 在文章的`Front-matter`中添加属性`sticky`可实现置顶功能， 其中数值越大越靠前。示例：

```markdown
---
title: mac下安装go开发环境
date: 2021-03-18 11:15:11
tags:
    - go
    - mac
categories: go
permalink_id: install-go-on-mac
sticky: 10
---
```

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

#### 🎨 自定义代码高亮插件prism的样式

`./node_modules/prismjs/themes/prism-tomorrow.css`即本主题下的`./source/libs/prism/prism-tomorrow-night.css`样式

默认使用`prism-tomorrow-night.css`

配色参考：

- [tomorrow-theme](https://github.com/chriskempson/tomorrow-theme)

### 博客插件

```bash
npm install <package> --save
```

插件：

- hexo-deployer-git
- hexo-generator-feed
- hexo-generator-sitemap
- hexo-generator-search
- hexo-wordcount
- hexo-filter-github-emojis
- hexo-generator-feed
- hexo-baidu-url-submit
- hexo-permalink-pinyin

## data目录

```plain
hexo_project/source/_data
```

- 图库： gallery.yml
- 追加head： head.yml
- 友情链接： links.yml

## 🤝 贡献

## 许可证

[![license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](./LICENSE)

> 本主题使用了 `MIT` 许可证进行开源许可。

## 预览

## 🔗 链接

- [hexo官方主题说明文档](https://hexo.io/zh-cn/docs/themes.html)
- [Materialize](https://materializecss.com/)
- [Material Design](https://material.io)
- [Materializecss色板](https://materializecss.com/color.html#palette)
- [gitignore.io](https://www.toptal.com/developers/gitignore)
- [shields.io](https://shields.io/)
- [bower.io](https://bower.io/)
- [EJS中文文档](https://ejs.bootcss.com/)
- [material icons](https://material.io/resources/icons/?style=baseline)
- [fontawesome](https://fontawesome.com/v5.15.3/icons)

## 灵感

- [hexo-theme-matery](https://github.com/blinkfox/hexo-theme-matery)
- [hexo-theme-material](https://github.com/bolnh/hexo-theme-material)
- [hexo-theme-yilia](https://github.com/litten/hexo-theme-yilia)
- [hexo-theme-sakura](https://github.com/honjun/hexo-theme-sakura)
- [hexo-theme-zhaoo](https://github.com/zhaoo/hexo-theme-zhaoo)
- [Creating a Theme](https://www.youtube.com/watch?v=5ROIU_9dYe4&list=PLLAZ4kZ9dFpOMJR6D25ishrSedvsguVSm&index=11)
- [Material Design Themes](https://materialdesignthemes.com/)
- [creative tim](https://www.creative-tim.com/templates/free)
- [material-kit](https://demos.creative-tim.com/material-kit/index.html)
- [bootstrap](https://getbootstrap.com/)
- [Material UI调色板](https://www.materialui.co/colors)
- [Buttons](https://www.bootcss.com/p/buttons/)
- [docsify](https://docsify.js.org/#/zh-cn/)
- [Blog WordPress Themes](https://themeisle.com/wordpress-themes/blog/)
