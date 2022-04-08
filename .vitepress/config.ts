import { defineConfigWithTheme } from 'vitepress'
import baseConfig from '@vue/theme/config'
import type { Config } from '@vue/theme'
import { UserConfig } from 'vitepress'
import { NavbarFix } from './plugins/navbar'

export default defineConfigWithTheme<Config>({
  extends: baseConfig as () => UserConfig<Config>,

  lang: 'zh-CN',
  title: 'vue-hbs-admin',
  description: '提供现成的开箱解决方案及丰富的示例，提高开发效率。',
  base: '/',
  srcDir: 'src',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  themeConfig: {
    algolia: {
      indexName: 'Hongbusi',
      appId: '58YVUHI1VL',
      apiKey: '1bde22dfb8f411080436bd011af2c580'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Hongbusi/vue-hbs-admin' }
    ],

    editLink: {
      repo: 'Hongbusi/vue-hbs-admin-docs',
      text: 'Edit this page on GitHub'
    },

    nav: [
      { text: '教程', link: '/', activeMatch: '^/$|^/guide/' },
      { text: '贡献指南', link: '/contribution-guide' }
    ],

    sidebar: {
      '/guide/': getGuideSidebar(),
      '/': getGuideSidebar()
    }
  },

  vite: {
    define: {
      __VUE_OPTIONS_API__: false
    },
    plugins: [
      NavbarFix()
    ]
  },

  vue: {
    reactivityTransform: true
  }
})

function getGuideSidebar() {
  return [
    {
      text: '介绍',
      items: [
        { text: 'vue-hbs-admin', link: '/' }
      ]
    }
  ]
}
