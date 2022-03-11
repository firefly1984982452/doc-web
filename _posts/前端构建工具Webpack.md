---
title: 前端构建工具Webpack
date: 2021-08-11 15:19:56
categories:
- program
---

# 一、链接

- [阮一峰的教程](https://github.com/ruanyf/webpack-demos)

- [技术胖的教程](https://jspang.com/detailed?id=32)

- [源码](https://github.com/firefly1984982452/pd-webpack-demo)

# 二、学习 webpack 的对应版本

截至 2021 年 8 月 24 日，`webpack` 和 `webpack-dev-server` 的版本都到了 `5.x` 以上，但是之前成熟的课程都是 `3.x` 的样子，所以我就阮一峰的经典版本安装测试。

```
"devDependencies": {
  "autoprefixer": "7.1.2",
  "babel-core": "^6.26.3",
  "babel-loader": "^8.2.2",
  "babel-preset-es2015": "^6.24.1",
  "css-loader": "0.28.9",
  "extract-text-webpack-plugin": "^3.0.2",
  "file-loader": "1.1.6",
  "html-webpack-plugin": "2.30.1",
  "open-browser-webpack-plugin": "0.0.5",
  "postcss-loader": "2.0.8",
  "purify-css": "^1.2.5",
  "purifycss-webpack": "^0.7.0",
  "style-loader": "0.19.1",
  "uglifyjs-webpack-plugin": "1.1.6",
  "url-loader": "0.6.2",
  "webpack": "3.10.0",
  "webpack-dev-server": "2.11.1"
}
```

# 三、用到的 module 模块

- `babel-loader`：解析 `ES6`、`ES7` 等新语法；
- `css-loader`：将 `css` 插入到页面的`style`标签等；
- `file-loader`：解析项目中的 `url` 引入，根据我们的配置，修改打包后文件引用路径；
- `postcss-loader`：`CSS` 工具集，此 demo 中用支了 `postcss-loader` 中的 `autoprefixer`；
- `style-loader`：处理 `css` 文件中的`url()`等；
- `url-loader`：会将引入的图片编码，生成 `dataURl`；

◆ module 模块用法

- `test`：用于匹配处理文件的扩展名的表达式，这个选项是必须进行配置的；
- `use`：`loader`名称，就是你要使用模块的名称，这个选项也必须进行配置，否则报错；
- `include/exclude`:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）；
- `query`：为`loaders`提供额外的设置选项（可选）。

# 四、webpack 模板

```
module.exports={
  //入口文件的配置项
  entry:{},
  //出口文件的配置项
  output:{},
  //模块：例如解读CSS,图片如何转换，压缩
  module:{},
  //插件，用于生产模版和各项功能
  plugins:[],
  //配置webpack开发服务功能
  devServer:{}
}
```

# 五、入口和出口配置

```
const path = require('path');
module.exports={
  entry:{
    entry:'./src/entry.js'
  },
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'bundle.js'
  },
}
```

## 配置 webpack 之前打包

◆ src/main.js

```
document.getElementById('title').innerHTML='Hello Webpack';
```

◆ 将 main.js 文件打包为 bundle.js

```
webpack main.js bundle.js
```

## 配置 webpack 之后打包

◆ 配置`webpack.config.js` 文件

```
module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  }
};
```

◆ 使用命令

```
webpack
```

# 六、多入口、多出口配置

```
const path = require('path');
module.exports={
  entry:{
    entry:'./src/entry.js',
    entry2:'./src/entry2.js'
  },
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'[name].js'
  },
}
```

# 七、服务和热更新

◆ 先下载

```
npm i webpack-dev-server –save-dev
```

◆ 再配置 `webpack.config.js` 文件

```
devServer:{
  //设置基本目录结构
  contentBase:path.resolve(__dirname,'dist'),
  //服务器的IP地址，可以使用IP也可以使用localhost
  host:'localhost',
  //服务端压缩是否开启
  compress:true,
  //配置服务端口号
  port:1717
}
```

◆ 最后配置 `package.json` 文件

```
"scripts": {
    "server":"webpack-dev-server"
 },
```

◆ 这时使用 `npm run server` 就可以运行项目并热更新了。

# 八、打包 css 文件

减少 `http` 的请求数，就是把多个 `css` 文件打包到一个 `js` 里

◆ 定义`./src/css/index.css`文件

```
body{
  background-color: red;
  color: white;
}
```

◆ 在`/src/entery.js`中引入

```
import css from './css/index.css';
```

◆ 下载`style-loader`和`css-loader`

```
npm i -D style-loader css-loader
```

◆ 配置 `webpack.config.js`文件

```
module:{
  rules: [
    {
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ]
    }
  ]
},
```

# 九、打包 js 文件

`webpack` 版本里默认已经集成 `uglifyjs-webpack-plugin`，不需要再次安装

◆ 配置 `webpack.config.js`文件

```
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports={
  plugins: [
    new UglifyJsPlugin(),
  ]
}
```

# 十、打包 HTML 文件

◆ 先把 dist 中的 html 文件剪切到 src 目录中，并去掉我们的 JS 引入代码（webpack 会自动为我们引入 JS）

◆ 下载 `html-webpack-plugin`

```
npm i -D html-webpack-plugin
```

◆ 配置 `webpack.config.js` 文件

```
const htmlPlugin = require('html-webpack-plugin')
module.exports={
  plugins: [
    new htmlPlugin({
      minify:{
        removeAttributeQuotes:true
      },
      hash:true,
      template:'./src/index.html'
    })
  ]
}
```

- `minify`：是对 html 文件进行压缩，removeAttrubuteQuotes 是却掉属性的双引号。
- `hash`：为了开发中 js 有缓存效果，所以加入 hash，这样可以有效避免缓存 JS。
- `template`：是要打包的 html 模版路径和文件名称。

# 十一、css 图片处理

◆ 安装 `url-loader`

```
npm i -D url-loader
```

◆ 配置`webpack.config.js` 文件

```
module:{
  rules: [
    {
      test:/\.(png|jpg|gif)/ ,
      use:[{
          loader:'url-loader',
          options:{
              limit:500000
          }
      }]
    }
  ]
},
```

- `test`:`/.(png|jpg|gif)/`是匹配图片文件后缀名称。
- `use`：是指定使用的 `loader` 和 `loader` 的配置参数。
- `limit`：是把小于 `500000B` 的文件打成 `Base64` 的格式，写入 `JS`。

# 十二、SCSS 文件的打包

◆ 安装 `node-sass` 和 `sass-loader`

```
npm i -D node-sass sass-loader
```

◆ 配置`webpack.config.js` 文件

```
{
  test: /\.scss$/,
  use: ["style-loader" , "css-loader" , "sass-loader"]
}
```

# 十三、自动处理 CSS3 属性前缀

◆ 安装 `postcss-loader` 和 `autoprefixer`（自动添加前缀的插件）

```
npm install --save-dev postcss-loader autoprefixer
```

◆ 在项目根目录新建 `postcss.config.js` 配置文件

```
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}
```

◆ 配置`webpack.config.js` 文件

```
{
  test: /\.css$/,
  use: extractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      { loader: 'css-loader', options: { importLoaders: 1 } },
      'postcss-loader'
    ]
  })
}
```

# 十四、添加 Babel 支持

◆ 安装

```
npm i -D babel-core babel-loader babel-preset-es2015 babel-preset-react
```

◆ 配置`webpack.config.js` 文件

```
{
  test:/\.(jsx|js)$/,
  use:{
    loader:'babel-loader',
    options:{
      presets:[
        "es2015","react"
      ]
    }
  },
  exclude:/node_modules/
}
```
