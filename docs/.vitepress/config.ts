/*
 * @Description: 
 * @Version: 2.0
 * @Author: Zhangwenxin
 * @Date: 2023-07-01 10:53:10
 * @LastEditors: Zhangwenxin
 * @LastEditTime: 2023-07-02 20:56:43
 */
import { sidebar } from './sidebar';
import { resolve } from 'path'
import { genTemp } from '@ruabick/vite-plugin-gen-temp'
import { applyPlugins } from '@ruabick/md-demo-plugins'
import { defineConfigWithTheme } from 'vitepress'

export default defineConfigWithTheme({
    lang: 'zh-CN',
    base: '/vue-draggable/',
    themeConfig: {
        siteTitle: "vue-draggable",
        logo: "/logo.svg",
        sidebar,
        nav: [
            {
                text: "前端",             //导航标签的名字
                items: [                  //这种格式是有下拉菜单的版本
                    { text: "基础", link: "/articles/basic/index" },      //text代表每一项的名字，link是连接的位置
                    { text: "Vue", link: "/articles/vue/index" },
                ],
            },
        ],
        socialLinks: [{ icon: "github", link: "https://github.com/zwxyyds" }],       //右上角的社交标签，支持多种icon，具体可以查询官网，反正没有QQ和微信，放个git差不多意思意思就行了
    },
    vite: {
        server: {
            port: 8090
        },
        plugins: [genTemp()],
        resolve: {
            alias: {
                'vue-draggable': resolve('./src/')
            }
        }
    },
    markdown: {
        config: md => {
            applyPlugins(md)
        },
        theme: {
            light: 'github-light',
            dark: 'github-dark'
        }
    },
    buildEnd() {
        setTimeout(() => {
            process.exit(0)
        }, 2000)
    }
})