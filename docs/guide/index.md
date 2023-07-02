<!--
 * @Description: 
 * @Version: 2.0
 * @Author: Zhangwenxin
 * @Date: 2023-07-01 13:57:47
 * @LastEditors: Zhangwenxin
 * @LastEditTime: 2023-07-02 12:56:49
-->
# 如何创建一个vitepress项目并启动🧝

## 步骤1 创建并进入一个目录
```sh
$ mkdir vitepress-learn && cd vitepress-learn
```
## 步骤2  创建并进入一个目录（我这边是使用yarn）
```sh
yarn init
```

## 步骤3 本地安装 VitePress
```sh
yarn add --dev vitepress
```

## 步骤4 在目录下新建docs文件夹
```
vitepress-learn
│   package.json   
│
└───docs
│   │   
│   │   index.md
│   │
│   └───.vitepress
│       │   config.js
│       │   sidebar.js
│       │   ...
```
## 步骤5 在 package.json.添加一些script
```sh
{
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs"
  }
}
```

## 步骤 6: 在本地服务器上启动文档站点

```sh
yarn docs:dev
```
VitePress 会在 http://localhost:3000启动一个热重载的开发服务器。

现在，你应该有了一个基本的单功能强大的 VitePress 文档站点了。