---
title: CSS之工具：PostCSS、CSS in JS、CSS Moudles
date: 2021-08-09 10:19:32
categories:
- program
---

# 一、PostCSS

- [PostCSS 官网链接](https://www.postcss.com.cn/)

我理解到的`PostCSS`就是个工具集，比如里面的`autoprefixer`插件能自动补全前缀，`PostCSS Preset Env`能使用新特性

# 二、CSS in JS

[阮一峰的博客教程](https://www.ruanyifeng.com/blog/2017/04/css_in_js.html)

`CSS in JS` 是个库，里面有各种操作 `css` 的 `js` 函数，如：`polished.js`

`ellipsis`将超过指定长度的文本，使用省略号替代（查看完整代码）。

```
const styles = {
  ...polished.ellipsis('200px')
}
```

`hideText`用于隐藏文本，显示图片。

```
const styles = {
  'background-image': 'url(logo.png)',
  ...polished.hideText(),
};
```

`hiDPI`指定高分屏样式。

```
const styles = {
 [polished.hiDPI(1.5)]: {
   width: '200px',
 }
};
```

`retinaImage`为高分屏和低分屏设置不同的背景图。

```
const styles = {
 ...polished.retinaImage('my-img')
};
```

## 缺点

- 学习坡度很陡
- 简单静态页面一般用不着

# 三、CSS Moudles

[阮一峰的博客教程](https://www.ruanyifeng.com/blog/2016/06/css_modules.html)

## CSS Moudles 是什么

> CSS files in which all class names and animation names are scoped locally by default.

所以`CSS Modules`并不是一个正式的声明或者是浏览器的一个实现，而是通过构建工具（`webpack or Browserify`）来使所有的 `class` 达到 `scope` 的一个过程。

## CSS Moudles 如何使用

配置`webpack.config.js`：

```
module.exports = {
  entry: __dirname + '/index.js',
  output: {
    publicPath: '/',
    filename: './bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader?modules"
      },
    ]
  }
};
```

上面代码中，关键的一行是`style-loader!css-loader?modules`，它在`css-loader`后面加了一个查询参数`modules`，表示打开 `CSS Modules` 功能。

## CSS Moudles 解决什么问题

1. 全局命名冲突

App.css

```
.text {
    color: red;
}
```

main.html

```
import style from './App.css';
<h1 className={style.title}>
  Hello World
</h1>
```

编译之后：

```
<h1 class="_3zyde4l1yATCOkgn-DBWEL">
  Hello World
</h1>
```

2. 全局作用域

`CSS Modules` 允许使用`:global(.className)`的语法，声明一个全局规则。凡是这样声明的`class`，都不会被编译成哈希字符串。

`App.css`加入一个全局`class`。

```
.title {
  color: red;
}

:global(.title) {
  color: green;
}
```

此时，`:global(.className)`优先于普通 `class`。

3. Class 的继承

在 App.css 中，让`.title`继承`.className` 。

```
.className {
  background-color: blue;
}

.title {
  composes: className;
  color: red;
}

<!-- 或者 -->

.title {
  composes: className from './another.css';
  color: red;
}
```

此时，2 个`class`都会生效， `h1`的`class`也会编译成`<h1 class="_2DHwuiHWMnKTOYG45T0x34 _10B-buq6_BEOTOl9urIjf8">`

4. 输入变量(和 PostCSS 结合使用)

`CSS Modules` 支持使用变量，不过需要安装 `PostCSS` 和 `postcss-modules-values`。

```
$ npm install --save postcss-loader postcss-modules-values
```

把 `postcss-loader` 加入 `webpack.config.js`。
