/*
 * @Description: 
 * @Version: 2.0
 * @Author: Zhangwenxin
 * @Date: 2023-07-01 10:53:10
 * @LastEditors: Zhangwenxin
 * @LastEditTime: 2023-07-01 14:25:11
 */
import { sidebar } from './sidebar';
module.exports = {
    title: "blog",
    description: "Front end project and tips sharing",
    themeConfig: {
        siteTitle: "Vitepress-Learn",
        logo: "/logo.svg",
        sidebar,
        nav: [
            {
                text: "前端",             //导航标签的名字
                items: [                  //这种格式是有下拉菜单的版本
                    { text: "基础", link: "/articles/basic/index" },      //text代表每一项的名字，link是连接的位置
                    { text: "Vue", link: "/articles/vue/index" },
                    { text: "React", link: "/articles/react/index" },
                    { text: "小程序", link: "/articles/mini/index" },
                    { text: "Electron", link: "/articles/electron/index" },
                    { text: "Web3D", link: "/articles/web3d/index" },
                    { text: "其他", link: "/articles/other/vitepress/index" },
                ],
            },
            { text: "项目", link: "/intent/" },
        ],
        socialLinks: [{ icon: "github", link: "https://github.com/zwxyyds" }],       //右上角的社交标签，支持多种icon，具体可以查询官网，反正没有QQ和微信，放个git差不多意思意思就行了
    }
}