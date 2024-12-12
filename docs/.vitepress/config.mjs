import { defineConfig } from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar'; // 自动生成侧边栏
// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    plugins: [
      AutoSidebar({
        // 自动侧边栏配置
        collapsed: true,
      })
    ]
  },
  head: [
    [
      'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
      {
        rel: 'icon',
        href: 'logo.png'
      }
    ]
  ],
  markdown: {
    lineNumbers: true, //为所有代码启动行号
    theme: {
      light: "vitesse-light",
      dark: "vitesse-dark",
    },
  },
  title: "ytd127",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    nav: [
      { text: '首页', link: '/' },
      { text: '个人作品', link: '/markdown-examples' },
      { text: 'vue', link: '/vue/vue2/01.md' }
    ],



    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
