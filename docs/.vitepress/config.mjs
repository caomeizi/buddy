import { defineConfig } from 'vitepress'

// 文档站配置：顶部导航、左侧目录、搜索、右侧锚点导航均在此维护
export default defineConfig({
  lang: 'zh-CN',
  // GitHub Pages 路径：
  // - 主站仓库（仓库名 = 用户名.github.io）保持 '/'
  // - 项目站（仓库名如 docs）需改为 '/仓库名/'，例如 base: '/docs/'
  base: '/',
  title: 'CodeBuddy',
  description: 'AI 智能编程助手产品文档',
  // 需在 git 仓库中才会显示「最后更新时间」；未安装 git 或非 git 仓库时保持 false
  lastUpdated: false,

  themeConfig: {
    // 顶部右侧本地全文搜索（无需第三方服务，离线可用）
    search: {
      provider: 'local'
    },

    // 顶部一级导航标签
    nav: [
      { text: 'IDE', link: '/guide/intro', activeMatch: '/guide/' },
      { text: '插件', link: '/' },
      { text: 'CLI', link: '/' },
      { text: 'WorkBuddy', link: '/' },
      { text: 'WorkBuddy 小程序', link: '/' },
      { text: 'WorkBuddy 移动端', link: '/' },
      { text: 'WorkBuddy Enterprise', link: '/' }
    ],

    // 左侧分组目录：与 docs 下的 Markdown 文件一一对应
    // collapsed: true 表示默认折叠；新增章节在对应分组的 items 里追加即可
    sidebar: [
      {
        text: '入门指南',
        collapsed: false,
        items: [
          { text: '简介', link: '/guide/intro' },
          { text: '安装和登录', link: '/guide/install' },
          { text: '快速开始', link: '/guide/quick-start' }
        ]
      },
      {
        text: '使用指南',
        collapsed: true,
        items: [
          { text: '使用指南', link: '/guide/usage' }
        ]
      },
      {
        text: '平台接入指南',
        collapsed: false,
        items: [
          { text: '微信 ClawBot 接入指南（推荐）', link: '/platform/wechat-clawbot' }
        ]
      },
      {
        text: '高级功能',
        collapsed: false,
        items: [
          { text: '模型配置', link: '/advanced/model-config' },
          { text: 'Plan 模式', link: '/advanced/plan-mode' },
          { text: 'Subagents', link: '/advanced/subagents' },
          { text: 'Skills', link: '/advanced/skills' },
          { text: 'Hooks', link: '/advanced/hooks' }
        ]
      },
      {
        text: '账号',
        collapsed: true,
        items: [
          { text: '账号概览', link: '/account/overview' }
        ]
      }
    ],

    // 右侧页内锚点导航（TOC），自动抓取正文二、三级标题
    outline: {
      level: [2, 3],
      label: '快速导航'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    darkModeSwitchLabel: '主题'
  }
})
