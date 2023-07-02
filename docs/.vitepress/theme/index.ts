/*
 * @Description: 
 * @Version: 2.0
 * @Author: Zhangwenxin
 * @Date: 2023-07-02 13:48:29
 * @LastEditors: Zhangwenxin
 * @LastEditTime: 2023-07-02 18:35:15
 */
import DemoBlock from '@ruabick/vitepress-demo-block'
import DefaultTheme from 'vitepress/theme'
import '@ruabick/vitepress-demo-block/dist/style.css'
import './styles';


export default {
    ...DefaultTheme,

    enhanceApp({ app }) {
        app.component('demo', DemoBlock)
    }
}