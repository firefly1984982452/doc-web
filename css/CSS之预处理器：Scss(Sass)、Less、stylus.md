---
title: CSS之预处理器：Scss(Sass)、Less、stylus
date: 2021-08-09 10:19:32
categories:
- program
---

# 一、链接

- [Scss 官网链接](https://www.sass.hk/guide/)
- [Less 官网链接](https://less.bootcss.com/#%E6%A6%82%E8%A7%88)
- [Stylus 官网链接](https://stylus.zcopy.site/)
- [Stylus 其它教程](https://www.jianshu.com/p/5fb15984f22d)

# 二、Scss、Sass 的关系

`Scss`是`Sass`的升级版

`Sass`靠缩进表示嵌套关系

```
.father
    width:100px;
    .son
        width:50px;
```

`Scss`靠花括号表示嵌套关系

```
.father{
    width:100px;
    .son{
        width:50px;
    }
}
```

# 三、Scss(Sass)、Less、stylus 的安装与编译

## 在 Node.js 环境中使用

安装

```
npm install scss/ -g
npm install less -g
npm install stylus -g
```

编译成 css 文件

```
scss test.scss
less test.scss
stylus test.scss
```

## 在浏览器环境中使用

```
<link rel="stylesheet/less" type="text/css" href="styles.less" />
<script src="//cdnjs.cloudflare.com/ajax/libs/less.js/3.11.1/less.min.js" ></script>
```

# 四、常用语法

|       语法        |             Less             |         Scss         | Stylus | 备注 |
| :---------------: | :--------------------------: | :------------------: | :----: | :--: |
| 变量（Variables） |             `@`              |         `$`          | 直接写 |      |
|  混合（Mixins）   |         `.class();`          | `@mixin`和`@include` | 直接写 |      |
|  嵌套（Nesting）  |            `{ { } }`            |        `{ { } }`        |  缩进  |      |
|  函数(Functions)  | `.name {@functions ~IFFE}` |   `@function name`   |  缩进  |      |

## 【1】变量

以下 3 种模板均编译为：

```
#header {
  width: 10px;
  height: 20px;
}
```

- Less：`@`

```
@width: 10px;
@height: @width + 10px;
#header {
  width: @width;
  height: @height;
}
```

- Scss：`$`

```
$width: 10px;
$height: $width + 10px;
#header {
  width: $width;
  height: $height;
}
```

- Stylus：直接写

```
siteWidth = 10px
siteHeight = siteWidth + 10px
#header
  width siteWidth
  height siteHeight
```

## 【2】混合（Mixins）

- Less：`.public();`

```
.public {
  border-radius: 5px;
}
p {
  color: red;
  .public();
}
```

- Scss：`@mixin`和`@include`

```
@mixin rounded-corners {
  border-radius: 5px;
}
p {
  @include rounded-corners;
}
```

- Stylus

```
border-radius(n)
  border-radius n

p
  border-radius(5px)
```

## 【3】嵌套（Nesting）

- Less 和 Scss：`{ { } }`

```
header{
  p{
    color: #f00;
  }
}
```

- Stylus：缩进

```
header
  p
    color: #f00
```

## 【4】函数(Functions)

```
body{
  padding add(10px, 5)
}
```

- Less： `.name {@functions ~IFFE}`

```
.paletteMixin() {
  @functions: ~`(function() {
    this.palette = function() {
     console.log(6666);
    }
  })()`;
}<br>
// 函数定义好以后执行一下Mixin函数，使其内部定义的 @functions 变量名生效，即实例化此方法

.paletteMixin()；
```

调用 @functions 方法

```
.test {
    color: ~`palette()`;
}
```

- Scss：`@function name`

```
@function add(a,b) {
    @return a + b;
}
```

- Stylus：缩进

```
add(a, b)
  a + b
```

# 五、特性

- Stylus

冒号、分号、逗号、括号可有可无
