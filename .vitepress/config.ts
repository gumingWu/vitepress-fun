import { defineConfig } from "vitepress";

// --vp-code-block-bg
export default defineConfig({
  title: "VitePress-Fun",
  markdown: {
    theme: {
      light: "vitesse-light",
      dark: "vitesse-dark",
    },
  },
  themeConfig: {
    logo: "/cat.png",
    siteTitle: "VitePress-Fun",

    socialLinks: [
      { icon: "github", link: "https://github.com/gumingWu/vitepress-fun" },
    ],

    sidebar: [
      {
        text: "基础",
        items: [{ text: "快速开始", link: "/guide/" }],
      },
    ],

    footer: {
      message: "其实我也不知道写啥注脚",
      copyright: "那我就随便写个吧",
    },
  },
});
