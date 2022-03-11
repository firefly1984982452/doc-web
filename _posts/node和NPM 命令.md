---
title: node和NPM 命令
date: 2021-08-04 18:35:14
categories:
- program
---


# mac下卸载node的命令

依次在终端执行下面的脚本

```
sudo npm uninstall npm -g
sudo rm -rf /usr/local/lib/node /usr/local/lib/node_modules /var/db/receipts/org.nodejs.*
sudo rm -rf /usr/local/include/node /Users/$USER/.npm
sudo rm /usr/local/bin/node
sudo rm /usr/local/share/man/man1/node.1
sudo rm /usr/local/lib/dtrace/node.d
```

# 安装node

[官网](https://nodejs.org/en/download/)

下载好之后自动有`node`和`npm`

# npm链接

- [官方文档](https://www.npmjs.com.cn/)
- [中文文档](https://cloud.tencent.com/developer/doc/1282)
- [入门](https://blog.csdn.net/qq_38490457/article/details/109739444)

# NPM 常用命令

## 【0】清理缓存后

```
npm cache clear --force
```

## 【1】config：配置淘宝镜像源

设置 npm 镜像源：

```
npm config set registry http://registry.npm.taobao.org
```

查看镜像源：

```
npm config get registry
```

proxy 错误之后重置后再设置镜像源

```
1、置空
npm config get proxy
npm config get https-proxy
如果返回值不为null，继续执行：
（这一步很重要，一定要保证两个命令的返回值都为null,话说回来，应该出现这个错误这两个返回值有不为null的）
npm config set proxy null
npm config set https-proxy null

2、设置
npm config set registry http://registry.cnpmjs.org/
```

设置 cnpm 镜像源：

```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

## 【2】全局命令

- `i` 是 `install` 的简写
- `-g` 与`--global` 是全局安装，不带 `-g` 会安装在个人文件夹
- `-S` 与 `--save` 的简写，安装包信息会写入 `dependencies` 中
- `-D` 与 `--save-dev` 的简写，安装包写入 `devDependencies` 中

`--save`和`--save-dev`的区别主要是，`devDependencies` 通常是开发的工具（例如测试的库），而 `dependencies` 则是与生产环境中的应用程序相关。

## 【3】install 安装软件包

```
npm install
```

安装单个软件包

```
npm install <package-name>
```

## 【4】uninstall:卸载软件包

```
npm uninstall
```

如果使用 `-S` 或 `--save` 标志，则此操作还会移除 `package.json` 文件中的引用。

```
npm uninstall -S <package-name>
npm uninstall -D <package-name>
```

如果该软件包是全局安装的，则需要添加 `-g` 或 `--global` 标志：

```
npm uninstall -g <package-name>
```

## 【5】outdated：查看有哪些过时的软件包

```
npm outdated
```

## 【6】update：更新软件包

```
npm update
```

更新单个软件包：

```
npm update <package-name>
```

更新至最新版本：

```
npm install npm@latest -g
```

## 【7】@：安装旧版软件包

可以使用 @ 语法来安装 npm 软件包的旧版本：

```
npm install <package>@<version>
```

```
npm install -g webpack@4.16.4
```

## 【8】version：软件包版本查看

列出软件包所有的以前的版本：

```
npm view <package> versions
```

最新的可用版本：

```
npm view [package_name] version
```

## 【9】list：项目所有软件包

所有已安装的 npm 软件包的最新版本：

```
npm list
```

`npm list -g` 适用于全局安装的软件包。

若要仅获取顶层的软件包（基本上就是告诉 `npm` 要安装并在 `package.json` 中列出的软件包），则运行 `npm list --depth=0`：

## 【10】软件包版本介绍

如果 `Node.js` 软件包中有一件很棒的事情，那就是它们都同意使用语义版本控制作为版本编号。

语义版本控制的概念很简单：所有的版本都有 3 个数字：`x.y.z`。

- 第一个数字是主版本。

- 第二个数字是次版本。

- 第三个数字是补丁版本。

当发布新的版本时，不仅仅是随心所欲地增加数字，还要遵循以下规则：

- 当进行不兼容的 API 更改时，则升级主版本。

- 当以向后兼容的方式添加功能时，则升级次版本。

- 当进行向后兼容的缺陷修复时，则升级补丁版本。

因为 `npm` 设置了一些规则，可用于在 `package.json` 文件中选择要将软件包更新到的版本（当运行 `npm update` 时）。

## 【12】显示文件夹的路径

- bin

```
npm bin
/Users/evalx/node_modules/.bin
```

- prefix

```
npm prefix
/Users/evalx
```

- root

```
npm root
/Users/evalx/node_modules
```

## 【13】doctor检查

检查出当前是否最新版本，是否有错误

```
npm doctor
```

# npm 查看全局包/路径 Mac 下默认的全局路径

```
/usr/local/lib/node_modules
```

# 使用软件包

```
const _ = require('lodash')
```

# package.json 文件

- `name` 设置了应用程序/软件包的名称。
- `version` 表明了当前的版本。
- `description` 是应用程序/软件包的简短描述。
- `main` 设置了应用程序的入口点。
- `private` 如果设置为 true，则可以防止应用程序/软件包被意外地发布到 npm。
- `scripts` 定义了一组可以运行的 node 脚本。
- `dependencies` 设置了作为依赖安装的 npm 软件包的列表。
- `devDependencies` 设置了作为开发依赖安装的 npm 软件包的列表。
- `engines` 设置了此软件包/应用程序在哪个版本的 Node.js 上运行。
- `browserslist` 用于告知要支持哪些浏览器（及其版本）。
