import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'vue-hbs-admin',
  description: '提供现成的开箱解决方案及丰富的示例，提高开发效率。',
  base: '/',
  srcDir: 'src',

  head: [],

  themeConfig: {
    repo: 'Hongbusi/vue-hbs-admin-docs',
    docsDir: 'src',
    docsBranch: 'main',

    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    nav: [
      { text: '教程', link: '/', activeMatch: '^/$|^/guide/' },
      { text: '贡献指南', link: '/contribution-guide' }
    ],

    sidebar: {
      '/': getGuideSidebar(),
      '/guide/': getGuideSidebar()
    }
  }
})

function getGuideSidebar() {
  return [
    {
      text: '介绍',
      children: [
        { text: 'vue-hbs-admin', link: '/' }
      ]
    }
  ]
}
