# CodeBuddy 文档站（VitePress 骨架）

基于 VitePress 搭建的产品文档站，布局对应：顶部导航 + 左侧分组目录 + 中间正文 + 右侧锚点导航。

## 本地运行

```bash
# 安装依赖（首次）
npm install

# 本地开发预览，默认 http://localhost:5173
npm run docs:dev

# 构建生产静态文件，输出到 docs/.vitepress/dist
npm run docs:build

# 本地预览构建产物
npm run docs:preview
```

## 写作方式

- 正文全部是 `docs/` 下的 Markdown 文件，改完保存即可在预览页看到效果。
- **新增章节**：在对应目录新建 `.md`，再到 `docs/.vitepress/config.mjs` 的 `sidebar` 对应分组 `items` 里加一条 `{ text: '标题', link: '/路径/文件' }`。
- **顶部导航**：在 `config.mjs` 的 `nav` 数组维护。
- **右侧目录**：自动抓取正文的二级（`##`）、三级（`###`）标题，无需手动配置。
- **搜索**：已开启本地全文搜索，无需第三方服务。

## 目录结构

```
docs/
├── .vitepress/
│   └── config.mjs        # 导航、侧栏、搜索、TOC 配置
├── guide/                # 入门指南
│   ├── intro.md
│   ├── install.md
│   ├── quick-start.md
│   └── usage.md
├── platform/             # 平台接入指南
│   └── wechat-clawbot.md
├── advanced/             # 高级功能
│   ├── model-config.md
│   ├── plan-mode.md
│   ├── subagents.md
│   ├── skills.md
│   └── hooks.md
├── account/
│   └── overview.md
└── index.md              # 首页
```

## 部署上线（对外公开）

`npm run docs:build` 产出的是纯静态文件（`docs/.vitepress/dist`），可免费部署到：

- **Vercel / Netlify**：导入 Git 仓库，构建命令 `npm run docs:build`，输出目录 `docs/.vitepress/dist`。
- **GitHub Pages**：推送 `dist` 目录到 Pages 分支即可。
- 部署后绑定自己的域名即可对外访问。
