/*
 * @Description: 
 * @Version: 2.0
 * @Author: Zhangwenxin
 * @Date: 2023-07-01 14:09:43
 * @LastEditors: Zhangwenxin
 * @LastEditTime: 2023-07-02 20:30:29
 */
export const sidebar = {
    '/': [
        {
            text: '指南',
            items: [{ text: '快速上手', link: '/guide/' }]
        },
        {
            text: '演示',
            items: [{ text: '等待开发', link: '/show' }]
        },
        {
            text: '组件使用',
            items: [{ text: '基础', link: '/demo/basic/', activeMatch: '^/demo/' }]
        }
    ]
}
