import { defineConfig } from 'vitepress'

// 文档站配置：顶部导航、左侧目录、搜索、右侧锚点导航均在此维护
export default defineConfig({
  lang: 'zh-CN',
  // GitHub Pages 项目站路径：https://caomeizi.github.io/buddy/
  base: '/buddy/',
  title: '对公账户管理小知识',
  description: '银行对公柜台账户管理科普图文：开户、日常使用、变更销户与合规风控',
  lastUpdated: false,

  themeConfig: {
    // 顶部右侧本地全文搜索（无需第三方服务，离线可用）
    search: {
      provider: 'local'
    },

    // 顶部一级导航
    nav: [
      { text: '首页', link: '/' },
      { text: '知识目录', link: '/bank/01-intro', activeMatch: '/bank/' }
    ],

    // 左侧分组目录：与 docs/bank 下的 Markdown 文件一一对应
    sidebar: [
      {
        text: '开篇',
        collapsed: false,
        items: [
          { text: '课堂小老师', link: '/bank/01-intro' }
        ]
      },
      {
        text: '一、认识账户',
        collapsed: false,
        items: [
          { text: '对公账户分四类', link: '/bank/02-account-types' },
          { text: '开户三原则', link: '/bank/03-opening-principles' }
        ]
      },
      {
        text: '二、开户办理',
        collapsed: false,
        items: [
          { text: '开户资料清单', link: '/bank/04-checklist' },
          { text: '开户流程一步步', link: '/bank/05-process' },
          { text: '这些情况不能开户', link: '/bank/06-cannot-open' },
          { text: '预留印鉴小知识', link: '/bank/07-seal' }
        ]
      },
      {
        text: '三、账户日常管理',
        collapsed: false,
        items: [
          { text: '信息变了要更新', link: '/bank/08-update' },
          { text: '销户前先清理', link: '/bank/09-close' },
          { text: '久悬不动户', link: '/bank/10-dormant' },
          { text: '对公要对账', link: '/bank/11-reconcile' },
          { text: '交易有规矩', link: '/bank/12-transaction-rules' },
          { text: '非柜面渠道要管控', link: '/bank/13-remote-channel' }
        ]
      },
      {
        text: '四、合规与风险防控',
        collapsed: false,
        items: [
          { text: '冻结扣划要依法', link: '/bank/14-freeze' },
          { text: '账户不能乱借', link: '/bank/15-no-lending' },
          { text: '重空要管好', link: '/bank/16-blank-vouchers' },
          { text: '柜面红线', link: '/bank/17-red-line' },
          { text: '一户一档，合规收尾', link: '/bank/18-archive' }
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
