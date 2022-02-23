---
title: CSS之进阶总结
date: 2020-12-07 14:19:32
categories:
  - program
---

<style>
  p.example{
    color:#f00;
    font-size:2em;
  }
</style>

# 一、CSS 的进化历史

- `Scss(Sass)`、`Less`、`stylus` 和 `PostCSS` 等 CSS 预处理器

  提供了变量，函数，运算，继承等。扩展性，复用性都有了很大的提升，解决了一些样式重用冗余的问题，但是对于命名混乱和全局污染问题的效果不大。

- `BEM` (`.block\_\_element–modifier`) 规范

  比较流行的 `class` 命名规则，部分解决了命名混乱的问题，但 `className` 定义起来比较冗长，要想用的好，还是有一定难度的。

- `CSS Modules`

  模块化 `CSS`，将依赖的 `CSS` 文件以模块的形式注入到 `JavaScript` 里，基本上解决了全局污染、命名混乱、样式重用和冗余的问题，但是还是以文档方式组织，维护起来比较麻烦。

- `CSS in JS`

  组件化，方便开发维护和测试

  JavaScript 和 CSS 可以方便的共享变量和方法

# 二、html `<head>`相关

## 【1】禁止缓存

```
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="0" />
```

## 【2】添加标签栏 logo

```
<link rel="shortcut icon" type="image/x-icon" href="./static/logo.ico" rel="shortcut icon" />
```

**tips:`vue-cli` 项目中，要把`.ico` 文件放在 `static` 文件中，并重新编译运行**

## 【3】自适应手机

```
<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
```

---

# 三、CSS 键盘鼠标相关

## 【1】CSS 禁止鼠标点击

```
pointer-events:none;
```

## 【2】禁用鼠标左键

```
$(document).ready(function(){
  $(document).bind('contextmenu', function(e){
    return false;
  })
})
```

## 【3】`pointer-events`实现鼠标穿透效果

简单例子：

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <style>
      .top {
          width: 100px;
          height: 90px;
          position: absolute;
          top: 0;
          left: 65px;
          background: yellow;
          opacity: 0.5;
          pointer-events: none;
      }
    </style>
  </head>
  <body>
    <!-- 下方的链接 -->
    <ul>
      <li><a href="http://www.hangge.com">航歌</a></li>
        <li><a href="http://www.hangge.com">hangge.com</a></li>
    </ul>
    <!-- 上方黄色div -->
    <div class="top"></div>
  </body>
</html>
```

效果：

![image](https://www.hangge.com/blog_uploads/201711/2017112015003436986.png)

与地图交互的复杂效果：

```
<template>
	<div class="page">
        <map1 class="map" />
        <home class="home-content" />
	</div>
</template>

<style lang="less" scoped>
.page {
	width: 100%;
	height: 100%;
	position: relative;
	.map{
		width:100%;
		height:100%;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
	}
	.home-content{
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
    pointer-events: none;
    .left,.right{
        pointer-events:all
    }
	}
}
</style>

```

重点：`map`放在底层，`home`的`总DOM`设置为`none`，然后哪些地方需要点击就设置为`all`。

```
.home{
    pointer-events: none;
    .left,.right{
        pointer-events:all
    }
}
```

![image](https://wx2.sinaimg.cn/large/0069qZtTgy1gij2iyzdf5j31hb0twu0x.jpg)

---

# 四、CSS 单位

## 【1】em

`em`是相当于`html,body`里面的`font-size`的`倍数`

如：

```
html,body{
	font-size: 20px;
}
p{
	font-size: 2em;
}
```

此时`<p>`标签的`font-size`就是`40px`；

但是如果`<p>`标签里面还包含了一个`<p>`标签，如：`<p><p>no!</p>I'm not going.</p>`，此时最里面的`<p>`标签的`font-size`就是`60px`;

## 【2】rem

```
(function() {
	//首先取得当得屏幕宽度
	var width = window.screen.width;
	var scaleSize = 100,
		designSize = 375;
		//用当得宽度除以（设计尺寸除以缩放尺寸）
	var size = width / (designSize / scaleSize);
	//设置font-size
	document.getElementsByTagName('html')[0].style.fontSize = (size) + 'px';
})();
```

## 【3】视口的相对单位

```
vm：1/100的视口宽度；
vh：1/100的视口高度；
vmax：当前vw和vh中较大的一个值；
vmin：当前vw和vh中较小的一个值；
vmin、vmax的作用：在做移动端页面开发时，会使得文字大小在横竖屏下保持一致。
```

## 【4】`min-inline-size`、`max-inline-size`：最小/最大直列大小

最小/最大直列大小

```
<!DOCTYPE html>
<html>

<head>
  <title>CSS | max-inline-size Property</title>
  <style>
    h1 {
      color: green;
    }

    div {
      background-color: green;
      width: 200px;
      height: 20px;
    }

    .one {
      max-inline-size: 10px;
      background-color: cyan;
    }
  </style>
</head>

<body>
  <center>
    <h1>Geeksforgeeks</h1>
    <b>CSS | max-inline-size Property</b>
    <br>
    <br>
    <div>
      <p class="one">
        A Computer Science Portal for Geeks
      </p>
    </div>
  </center>
</body>

</html>
```

## 移动端最快使用 rem 的方法

```
html {
  font-size: calc(100vw/7.5)
}
p{
  width: 7.5rem;
}
```

---

# 五、屏幕尺寸，分辨率，像素，PPI

[学习链接](https://zhuanlan.zhihu.com/p/26232703?utm_source=com.tencent.mtt)

## 【1】名词解释

- ppi【屏幕像素密度】：（pixels per inch）指每英雨所拥有的像素尺寸。
- inch【英寸】：屏幕尺寸。指屏幕对角线的长度，可由勾股定理求出宽和高的长度【**1 英寸=2.54 厘米**】。
- px【像素】：分辨率。由手机宽和高组成。

## 【2】公式

![image](https://pic4.zhimg.com/80/v2-7b4513532884954ac0eb9aa9823f59f7_720w.jpg)

## 【3】实例

以 iphoneXR 为例：

| 属性 |   参数    |
| :--: | :-------: |
| 像素 | 1792\*828 |
| 尺寸 | 6.1 英寸  |
| ppi  |    326    |

由公式得出：`Math.sqrt(Math.pow(1792,2)+Math.pow(828,2))/6.1 = 323ppi`，`323`和`326`值很相近。

还能算出以下属性：

| 属性 |       算法       |      计算       |    结果    |
| :--: | :--------------: | :-------------: | :--------: |
|  宽  | (像素/ppi)\*2.54 | (828/326)\*2.54 | 6.45 厘米  |
|  长  |    1792\*828     |    1792\*828    | 13.96 厘米 |

**更多：求 kindle 像素**

已知：

|   属性   |        参数         |
| :------: | :-----------------: |
|   尺寸   |       6 英寸        |
|   ppi    |         167         |
| 屏幕长度 |  123 毫米\*92 毫米  |
| 屏幕长度 | 12.3 厘米\*9.2 厘米 |

计算出宽和高的英寸对应的像素

```
高：(12.3/2.54)*167 = 808像素
宽：(9.2/2.54)*167 = 605像素
```

---

# 六、CSS 自定义属性（CSS 变量）

要点：

- `--`命名
- `val()`使用

使用：

```
:root{
  --main-color: #fbb;
}
p{
  color: var(--main-color);
}
```

---

# 七、width 和 height 相关知识点

## 【1】table

Table 表格中，定了 width，如果其它的内容很高，内容少的可能会撑成一列高。

![image](https://wx2.sinaimg.cn/mw690/0069qZtTgy1gj589b1p14j30aa08z75k.jpg)

## 【2】不适合用 width:100%的情况

![image](https://wx3.sinaimg.cn/mw690/0069qZtTgy1gj589e73jxj308i0bl3yn.jpg)

子元素`width:100%`会获取父元素长度，如果设置了`width:100%`反而适得其反。

## 【3】按钮内文字会自动换行

## 【4】box-sizing

- `content-box`：默认值
- `border-box`：将`border`变成里面消化的值

## 【5】内联元素

- `display: inline-block;`会控制当前元素以自己的内容为长度，不受父元素影响。

- 内联元素如果`display`改为了`block`，不用再设置`width:100%`。

## 【6】让元素 heigth 支持 100%的方法

◆ 方法一

```
html,body{heigth:100%}
```

◆ 方法二

使用绝对定位

```
height: 100%;
position: absolute;
```

## 【7】max-width/min-width 和 max-height/min-height

**超越!important**

```
<img src="./floor.jpeg" style="width: 300px!important;" />
img{min-width: 400px;}
```

最终生效的是`400px`。

**min-width 覆盖 max-width**

如果`min-width`和`max-width`冲突时，取`min-width`的值。

```
min-width: 400px;
max-width: 350px;
```

## 【8】width 自适应关键字

- `fill-available`：撑满空间，100%
- `fit-content`：内容最大宽度。文字超过会换行。
- `max-content`：内容最大宽度。如果文字超过显示区域了也不会换行，所以会有 200%的可能。
- `min-content`：内容最小宽度。比如图片是 200px，文字是 300px，就取 200px。

## 【9】line-height 深入理解

行高的几种值：`px`、`normal`、`%`、`number`、`inherit`

默认：

```
line-height: 20px;
line-height: normal;
line-height: 150%;
line-height: 1.5; // 资料上都是1，但chrome和firfox上应该都是1.5
```

---

# 八、宽高比：`aspect-ratio`

设置元素的宽高比为 `10:1`：

```
.box{
  aspect-ratio: 10 / 1;
}
```

---

# 九、文字相关

1. 文字渐变
2. 抗锯齿渲染：-webkit-font-smoothing
3. 文字描边：-webkit-text-stroke
4. 文字阴影：text-shadow
5. 文字颜色：-webkit-text-fill-color
6. font-size:10px
7. 自定义字体：font-face
8. 垂直排版
9. 断行规则：line-break
10. 优化字体性能：font-display

## 【1】文字渐变

◆ 示例：

<h1 style="background: linear-gradient(to bottom, #8AF0FF,#3780E6);-webkit-background-clip: text;color: transparent;">文字渐变</h1>

◆ 代码：

```
background: linear-gradient(to bottom, #8AF0FF,#3780E6);;
-webkit-background-clip: text;
color: transparent;
```

## 【2】抗锯齿渲染：-webkit-font-smoothing

`-webkit-font-smoothing`有 3 个属性值：

- `none`: 对像素低的文本好，会有严重的锯齿；
- `subpixel-antialiased`: 默认值，有轻微锯齿；
- `antialiased`: 抗锯齿很好。

抗锯齿：`body{-webkit-font-smoothing: antialiased;}`

`Gecko`内核的抗锯齿效果：

`-moz-osx-font-smoothing: inherit | grayscale;`这个属性也是更清晰的作用。

## 【3】文字描边：-webkit-text-stroke

◆ 示例：

<p class="example" style="-webkit-text-stroke:1px #ff0;">文字描边</p>

◆ 代码：

```
-webkit-text-stroke: 1px #ff0;
```

## 【4】文字阴影：text-shadow

◆ 示例：

<p class="example" style="text-shadow: 5px 5px 5px #f00;">文字阴影</p>

◆ 代码：

```
text-shadow: 5px 5px 5px #f00;
```

## 【5】文字颜色：-webkit-text-fill-color

◆ 示例：

<p class="example" style="-webkit-text-fill-color: red;color: green;">文字颜色</p>

◆ 代码：

```
a{
  -webkit-text-fill-color: red;
  color: green;
}
```

它们俩同样都是设置文字颜色，但就算`color`在下面，也是`-webkit-text-fill-color`的权重更高，优先级更高。

## 【6】font-size:10px

字体如果需求是小于`12px`的话，可以先设置字体为`20px`，再使用`transfrom:scale(0.5)`进行缩放。（也可以使用图片，但不推荐）

## 【7】自定义字体：font-face

```
@font-face {
    font-family: DIGITAL-Dream;
    src: url("../assets/font/DIGITAL-Dream.ttf");
}

a{
  font-family: 'DIGITAL-Dream';
}
```

## 【8】垂直排版

◆ 示例：

<p style="writing-mode: vertical-lr;text-orientation: upright;">数字横向123</p>
<hr />
<p style="writing-mode: vertical-lr;">竖向2021排版</p>
<hr />
<p style="writing-mode: vertical-lr;">竖向<span style="text-combine-upright: all;">2021</span>排版</p>

◆ 代码：

```
p{
  text-orientation: upright; // 数字横向显示
  writing-mode: vertical-lr; // 竖向排版
}
p span{
  text-combine-upright: all; // 数字联排
}
```

## 【9】断行规则：line-break

```
line-break: auto; // 默认
line-break: loose; // 限制最小
line-break: normal; // 常规
line-break: strict; // 限制最大
line-break: anywhere; // 任意位置标点都可以换行
```

## 【10】优化字体性能：font-display

[链接](https://zhuanlan.zhihu.com/p/28369304)

---

# 十、display 显示

[链接](https://blog.csdn.net/qq_42161935/article/details/99844944)

- `inline`
- `block`
- `inline-table`
- `table-cell`
- `flow-root`
- `flex`
- `grid`
- `content`

## 【1】inline

- 不会独占一行
- `width`和`height`无效
- `margin`和`padding`中的`left/right`有效，`top/bottom`无效

## 【2】block

- 独占一行
- `width`和`height`正常
- `marin`和`padding`正常

## 【3】inline-table

行内表格

## 【4】table-cell

所有内容在一行

## 【5】flow-root

撑开浮动的元素高度

## 【6】content

不产生边框、背景、颜色，只显示内容。

---

# 十一、CSS 关键字：initial、inherit、unset、revert 和 all

- [区别预览](https://firefly1984982452.github.io/my-web-page/css-keyword.html)

- [区别源码](https://github.com/firefly1984982452/my-web-page/blob/master/css-keyword.html)

- [学习博客链接](https://www.cnblogs.com/xiaohuochai/p/5464456.html)

## 【1】初始值：initial

```
html,body{
  color: red;
}
p{
  color: green;
}
.main p{
  color: initial;
}
```

设置了`color:initial`值的`<p>`的颜色既不是`red`也不是`green`，而是`黑色`。

## 【2】继承：inherit

```
html,body{
  color: red;
}
p{
  color: green;
}
.main p{
  color: inherit;
}
```

设置了`color:inherit`值的`<p>`的颜色继承了`html,body`是`red`。

## 【3】复原：unset

```
html,body{
  color: red;
}
p{
  color: green;
}
.main p{
  color: unset;
}
```

设置了`color:unset`值的`<p>`的颜色忽略了原来的`green`，读取了`html,body`的值`red`。

## 【4】恢复：revert

```
.revert li {
  list-style: none;
}

.revert ul li {
  list-style: revert;
}
```

此时的 `li` 恢复了默认有`list-style`的样子。

## 【5】所有：all

`all` 取值只能是 `initial`、`inherit`、`unset` 和 `revert`

```
<style>
.test{
    border: 1px solid black;
    padding: 20px;
    color: red;
}
.in{
/*  all: initial;
    all: inherit;
    all: unset;
    all: revert; */
}
</style>
<div class="test">
    <div class="in">测试文字</div>
</div>
```

---

# 十二、打印相关

## 【1】打印方法

`window.print();`

## 【2】局部打印

### 【2.1】media 属性

```
@media screen {
  /* 只对屏幕浏览有效 */
}

@media print {
  /* 只对打印有效 */
  	.noprint {
      display: none
    }
}
```

### 【2.2】媒体查询

```
<style type="text/css">
	@media print {
		.no{
			display: none;
		}
	}
</style>
```

## 【3】页眉页脚

```
@media print {
  header {
    display: table-header-group;
  }

  footer {
    display: table-footer-group;

  }
}
```

## 【4】打印方向

```
<style type="text/css" media="print">
@page {
  size: landscape !important;
}
</style>
```

横向打印：`size: landscape` 竖向打印：`size: portrait` 自动【默认】：`size: auto`

## 【5】分页

分页符属性用来设置页面的分页（即另起一页），共有三个相关属性。

`page-break-before`：元素之前分页 `page-break-after`：元素之后分页 `page-break-inside`：元素内部分页这三个属性的值都是两个：`always`（生效）和`avoid`（避免）。

```
h1 {
  /* 总是在 h1 元素之前分页 */
  page-break-before: always;
}

section.city-map {
  /* 在元素之前和之后分页，即该元素单独占据一页 */
  page-break-before: always;
  page-break-after: always;
}

table {
  /* 表格尽可能不要分页 */
  page-break-inside: avoid;
}
```

## 【6】重复表格的表头

用`<thead>`元素定义表头，`<tbody>`元素定义表的数据

```
<table>
  <thead>
    <tr>
      <th>City</th>
      <th>Population</th>
  </thead>
  <tbody>
    <tr>
      <td>Sydney</td>
      <td>4.627 million (2018)</td>
    </tr>
  </tbody>
</table>
```

## 【7】只设置打印文档时第一页的样式

```
@page :first {
  margin-left: 50%;
  margin-top: 50%;
}
```

注意：你不能用所有的 CSS 属性`:first`。您只能更改文档的边距，`orphans`, `widows` 和分页符。所有其他的 CSS 属性将被忽略。

## 【8】`:left`和`:right`

页面左右是由文档的主要书写方向决定的。例如，如果第一页的主要书写方向是从左到右，那么它将是一个`:right`页面，如果它具有从右到左的主要书写方向，那么它将是一个`:left`页面。

---

# 十三、@supports 支持

`supports`命令用来判断浏览器是否支持某项 CSS 功能。

例：

当浏览器支持`text-overflow: '***';`时末尾便显示`'***'`，不支持时显示`'...'`。

（仅火狐支持`text-overflow: '***';`，其它浏览均会显示`'...'`）

```
.info {
  width: 300px;
  height: 50px;
  border: solid 1px #222;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: '***';
}

@supports (text-overflow: '***') {
  .info {
    text-overflow: '***';
  }
}

@supports not (text-overflow: '***') {
  .info {
    text-overflow: ellipsis;
  }
}

...

<div class="info">"these vulnerabilities occur when untrusted data is sent"</div>
```

---

# 十四、简写属性

**4 个值：上右下左(时钟)；2 个值：右/左和上下（x 轴和 y 轴）；**

## 4 个值

如：`margin`、`padding`、`border-width`。

当`margin`和`padding`简写为`2`个值时，代表的是`上/下`和`左/右`。

## 2 个值

如：`text-shodow`、`background-position`.

---

# 十五、HTML 默认字体大小 14px

```
font-size: 14px;
```

---

# 十六、`content: ''` 的妙用

[链接](https://echeverra.cn/2021/08/06/css-content/)

# 十七、counter 计数器

[MDN-counter](<https://developer.mozilla.org/zh-CN/docs/Web/CSS/counter()>) [MDN-counters](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters) [其它博客](https://blog.csdn.net/lhjuejiang/article/details/79823803)

## 【1】属性

- `counter-reset`：重置。
- `counter-increment`：递增。
- `counter-set`：暂时无用。

### 【1.1】counter-reset：重置

参数：

- `name`：名称（必填）。
- `start`：从哪个数字开始计数（非必填），默认为 0。

例子：

```
<style>
    p{counter-reset:count 4;}
    p:after{
        content:counter(count);
    }
</style>

<p>3的后面是：</p>
```

显示：

```
3的后面是：4
```

### 【1.2】counter-increment：递增

（`counter-increment`可以写在父元素上，也可以写在子元素上。）

参数：

- `name`：名称（必填）。
- `number`：递增数量（非必填），默认为 1。

例子：

```
<style>
    p{counter-reset:count 3; counter-increment:count;}
    p:after{
        content:counter(count);
    }
</style>

<p>3的后面是：</p>
```

显示：

```
3的后面是：4
```

## 【2】函数

函数：

- `counter`
- `counters`

### 【2.1】counter

参数：

- `name`：名称（必填）。
- `style`：数字的其它样式（非必填），如罗马数字等。

例子：

```
<style>
    p{counter-reset:count 1 count1 3; counter-increment:count 2 count1}
    p:after{
        content:counter(count) counter(count1);
    }
</style>

<div>
    <p>33的后面是：</p>
    <span></span>
</div>

```

显示：

```
33的后面是：34
```

### 【2.2】counters

写法：

```
counters(name, string, style) string
```

参数：

- `name`：名称（必填）。
- `string`：字符（必填）。
- `style`：数字的其它样式（非必填），如罗马数字等。

例子：

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Demo</title>
  <style>
    li {
      list-style: none;
    }

    .father {
      padding-left: 20px;
      counter-reset: countS;
    }

    .son:before {
      content: counters(countS, '-') '.';
      counter-increment: countS;
    }
  </style>
</head>

<body>
  <ul class="father">
    <li class="son">唐代
      <ul class="father">
        <li class="son">李白</li>
        <li class="son">杜甫</li>
        <li class="son">白居易</li>
      </ul>
    </li>
    <li class="son">宋代
      <ul class="father">
        <li class="son">苏门三父子
          <ul class="father">
            <li class="son">苏洵</li>
            <li class="son" style="display: none;">苏轼</li>
            <li class="son">苏辙</li>
          </ul>
        </li>
        <li class="son">辛弃疾</li>
        <li class="son">李清照</li>
      </ul>
    </li>
    <li class="son">元代</li>
    <li class="son">明代</li>
  </ul>
</body>

</html>
```

结果：

![image](https://wx2.sinaimg.cn/large/0069qZtTgy1gnru0idw6rj308n094q31.jpg)

## 【3】其它

- `display`的值为`none`或`hidden`时，不会增加数值；
- 属性和函数都可以命名多个，中间留空格即可。

---

# 十八、content 中的特殊字符及图标

[网址](https://blog.csdn.net/qq_41995919/article/details/112377349)

---

# 十九、交互优化

## 【1】scroll-behavior

[学习链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/scroll-behavior)

当用户手动导航时设置更平滑的滚动。

```
scroll-behavior: smooth;
```

## 【2】scroll-snap-type

[学习链接](https://www.cnblogs.com/coco1s/p/11993942.html)

值：

- mandatory【默认】：滚动结束后强制停在指定的地方。

- proximity【接近】：滚动结束后可能停在结束的地方，也可以会偏移一些（配合`scroll-snap-align`一起使用）。

一般用在父元素上。

## 【3】scroll-snap-align

方向：start/center/end。

一般用在子元素上。

## 【4】scroll-margin/scroll-padding

## 【5】overflow-anchor：滚动锚点

[学习链接](https://www.zhangxinxu.com/wordpress/2020/08/css-overflow-anchor/)

```
overflow-anchor: auto; // 默认，自动
overflow-anchor: none; // 禁止滚动锚点
```

## 【6】touch-action：触摸操作

- `touch-action: none;` 禁止有任何操作，此时的 scroll 无效
- `touch-action: pan-x;` 此时只有 x 轴能滑动，y 粙是滑动不了的。

[其它](https://developer.mozilla.org/zh-CN/docs/Web/CSS/touch-action)

---

# 二十、caret-color：插入光标颜色

- [学习链接](https://www.zhangxinxu.com/wordpress/2018/01/css-caret-color-first-line/)

```

input.custom { caret-color: #0f0; }

```

---

# 二十一、user-select：用户选择

```

user-select: auto | text | none | contain | all;

```

有时候用`<p>`标签默认鼠标能选中文字，这时可以使用`user-select: none`来禁止点击文字之后处于选中状态，也能避免复制能操作。

---

# 二十二、all：级联和继承

```

<style>
  section {
    color: blue;
    font-family: sans-serif;
    font-weight: bold;
  }

  .widget {
    all: initial;
  }
</style>

...

<section>
  <p>This is a section!</p>

  <aside class="widget">
    <p>This is a little widget.</p>
  </aside>
<section>
```

---

# 二十三、CSS 插件之 gsap 数字动画

```
npm install gsap@2.0.2

最新版本我尝试的时候不行，也许不同环境下可以
```

```
<input v-model="number" type="text" step="20">
<p>{{ animatedNumber }}</p>
...
import { TweenLite } from 'gsap/TweenMax'
export default {
  data() {
    return {
      number: 0,
      tweenedNumber: 0
    }
  },

  computed: {
    animatedNumber: function() {
      return this.tweenedNumber.toFixed(0);
    }
  },
  watch: {
    number: function(newValue) {
      TweenLite.to(this.$data, 2, { tweenedNumber: newValue })
    }
  },
}
```

---

# CSS 其它案例

## 空间动画

[链接](https://css-tricks.com/recreating-the-apple-music-hits-playlist-animation-in-css/)

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    body {
      background-color: #25272c;
      display: grid;
      place-items: center;
      height: 100vh;
    }

    .container {
      background-color: #eb5bec;
      width: 300px;
      height: 400px;
      display: grid;
      place-items: center;
      border-radius: 16px;
      position: relative;
      overflow: hidden;
    }

    .box {
      position: absolute;
      width: 100px;
      height: 100px;
      opacity: 0.5;
      background-color: #471e45;
      animation: grow 10s linear infinite;
    }

    .box {
      animation-delay: 1s;
    }

    .box:nth-child(2) {
      animation-delay: 2s;
    }

    .box:nth-child(3) {
      animation-delay: 3s;
    }

    .box:nth-child(4) {
      animation-delay: 4s;
    }

    .box:nth-child(5) {
      animation-delay: 5s;
    }

    .box:nth-child(6) {
      animation-delay: 6s;
    }

    .box:nth-child(7) {
      animation-delay: 7s;
    }

    .box:nth-child(8) {
      animation-delay: 8s;
    }

    .box:nth-child(9) {
      animation-delay: 9s;
    }

    .box:nth-child(10) {
      animation-delay: 10s;
    }

    @keyframes grow {
      from {
        opacity: .5;
        transform: scale(0);
      }

      to {
        opacity: 0;
        transform: scale(3.85);
      }
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="box">01</div>
    <div class="box">02</div>
    <div class="box">03</div>
    <div class="box">04</div>
    <div class="box">05</div>
    <div class="box">06</div>
    <div class="box">07</div>
    <div class="box">08</div>
    <div class="box">09</div>
    <div class="box">10</div>
  </div>
</body>

</html>
```
