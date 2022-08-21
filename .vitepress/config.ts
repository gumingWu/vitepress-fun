import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'VitePress-Fun',
  themeConfig: {
    logo: '/cat.png',
    siteTitle: 'VitePress-Fun',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/gumingWu/vitepress-fun' }
    ],

    footer: {
      message: '其实我也不知道写啥注脚',
      copyright: '那我就随便写个吧',
    }
  }
})