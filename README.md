# 对公账户管理小知识（VitePress 文档站）

基于 VitePress 搭建的图文知识站，布局：顶部导航 + 左侧分组目录 + 中间正文（配图 + 要点）+ 右侧锚点导航。

## 本地运行

```bash
# 安装依赖（首次）
npm install

# 本地开发预览，默认 http://localhost:5173/buddy/
npm run docs:dev

# 构建生产静态文件，输出到 docs/.vitepress/dist
npm run docs:build

# 本地预览构建产物
npm run docs:preview
```

## 写作方式

- 章节正文在 `docs/bank/` 下的 Markdown 文件，每篇对应一张配图。
- 配图放在 `docs/public/images/bank/`（WebP 格式），Markdown 中用 `/images/bank/xx.webp` 引用，`base` 前缀会自动拼接。
- **新增章节**：在 `docs/bank/` 新建 `.md`，再到 `docs/.vitepress/config.mjs` 的 `sidebar` 对应分组 `items` 里加一条 `{ text: '标题', link: '/bank/文件' }`。
- **顶部导航**：在 `config.mjs` 的 `nav` 数组维护。
- **右侧目录**：自动抓取正文二级（`##`）、三级（`###`）标题，无需手动配置。
- **搜索**：已开启本地全文搜索，无需第三方服务。

## 配图处理脚本

- `scripts/optimize-images.mjs`：把原始 PNG 压缩为 1200px WebP（质量 80），输出到 `docs/public/images/bank/`。
- `scripts/gen-docs.mjs`：按内置章节数据批量生成 `docs/bank/*.md`，调整章节标题、要点后重新运行即可。

## 目录结构

```
docs/
├── .vitepress/
│   └── config.mjs          # 导航、侧栏、搜索、TOC 配置
├── bank/                   # 18 篇图文章节
│   ├── 01-intro.md
│   ├── 02-account-types.md
│   └── ...
├── public/
│   └── images/bank/        # 章节配图（WebP）
└── index.md                # 首页
```

## 部署上线（已配置 GitHub Pages）

- 线上地址：https://caomeizi.github.io/buddy/
- 远程仓库：https://github.com/caomeizi/buddy
- 部署方式：GitHub Actions（`.github/workflows/deploy.yml`）。推送到 `main` 分支后自动构建并发布到 Pages，无需手动上传。
- 仓库 **Settings → Pages** 的 Source 已设为 **GitHub Actions**。

### 以后更新内容

1. 修改 `docs/` 下的 Markdown 或替换配图，本地 `npm run docs:dev` 预览；
2. 提交并推送：
   ```bash
   git add .
   git commit -m "更新内容"
   git push
   ```
3. Actions 自动重新构建，约 1 分钟后线上地址生效。

### 其他可选部署

`npm run docs:build` 产出纯静态文件（`docs/.vitepress/dist`），也可改部署到 Vercel / Netlify / 自己的服务器或对象存储+CDN。若挂在域名子路径，记得同步调整 `docs/.vitepress/config.mjs` 里的 `base`。
