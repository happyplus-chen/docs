import { defineConfig } from "vitepress";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "path";
import { mdPlugin } from "./utils/markdown";
import { viteMockServe } from 'vite-plugin-mock'
import { Nav, SideBar } from "../config";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: " JGDT_FE",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: Nav,

    sidebar: SideBar,

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
    outline: {
      label: "本页目录",
    },
  },
  markdown: {
    headers: {
      level: [0, 0],
    },
    // light: #f9fafb, dark: --vp-code-block-bg
    theme: { light: "github-light", dark: "github-dark" },
    config: (md) => mdPlugin(md),
  },
  vite: {
    plugins: [vueJsx(),
    viteMockServe({
      mockPath: 'mock'
    })],
    resolve: {
      alias: {
        JUI: resolve(__dirname, "../../", "packages"),
        '@': resolve(__dirname, "../../", "src"),
      },
    }
  },
});

