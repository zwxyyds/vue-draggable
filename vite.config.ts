/*
 * @Description: 
 * @Version: 2.0
 * @Author: Zhangwenxin
 * @Date: 2023-07-02 19:45:20
 * @LastEditors: Zhangwenxin
 * @LastEditTime: 2023-07-02 19:48:53
 */
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import packageJson from './package.json'
// import UnoCSS from 'unocss/vite'
export default defineConfig({
    plugins: [vue(), dts()],
    server: {
        port: 5230
    },
    build: {
        lib: {
            entry: resolve(__dirname, './src/index.ts'),
            name: 'vue-draggable',
            // the proper extensions will be added
            fileName: 'vue-draggable'
        },
        rollupOptions: {
            // 确保外部化处理那些你不想打包进库的依赖
            // @ts-ignore
            external: ['vue', ...Object.keys(packageJson.peerDependencies || {})],
            output: {
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    vue: 'Vue'
                }
            }
        }
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    }
})
