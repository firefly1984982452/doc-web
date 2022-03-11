---
title: CSS之SVG
date: 2021-03-05 13:19:32
categories:
- program
---

# 一、学习链接

- [阮一峰-SVG 教程](https://wangdoc.com/webapi/svg.html)

- [菜鸟教程-SVG 教程](https://www.runoob.com/svg/svg-rect.html)

- [菜鸟教程-SVG 实例](https://www.runoob.com/svg/svg-examples.html)

---

# 二、简介

## 【0】SVG 效果预览

![image](https://wx1.sinaimg.cn/large/0069qZtTgy1go955d2dz9j31kc0u0dsj.jpg)

[在线观看](https://firefly1984982452.github.io/my-web-page/svg.html)

[源码地址](https://github.com/firefly1984982452/my-web-page/blob/master/svg.html)

## 【1】SVG 的预定义形状

- 矩形 `<rect>`
- 圆形 `<circle>`
- 椭圆 `<ellipse>`
- 线 `<line>`
- 折线 `<polyline>`
- 多边形 `<polygon>`
- 路径 `<path>`

## 【2】SVG 的通用标准语法

- width：宽度；
- height：高度；
- fill：填充色；
- fill-opacity：填充颜色透明度；
- stroke：边框色；
- stroke-widt：边框的宽度；
- stroke-opacity：边框颜色的透明度；
- stroke-linecap：不同类型的开放路径的终结；
- stroke-dasharray：边框虚线；
- x：左侧位置；
- y：顶端位置；
- opacity：透明值。

<br />

**stroke-linecap：**

<svg>
  <g fill="none" stroke="black" stroke-width="6">
    <path stroke-linecap="butt" d="M5 20 l215 0" />
    <path stroke-linecap="round" d="M5 40 l215 0" />
    <path stroke-linecap="square" d="M5 60 l215 0" />
  </g>
</svg>

<br />

**stroke-dasharray：**

<svg>
  <g fill="none" stroke="black" stroke-width="4">
    <path stroke-dasharray="5,5" d="M5 20 l215 0" />
    <path stroke-dasharray="10,10" d="M5 40 l215 0" />
    <path stroke-dasharray="20,10,5,5,5,10" d="M5 60 l215 0" />
  </g>
</svg>

```
<svg>
  <g fill="none" stroke="black" stroke-width="6">
    <path stroke-linecap="butt" d="M5 20 l215 0" />
    <path stroke-linecap="round" d="M5 40 l215 0" />
    <path stroke-linecap="square" d="M5 60 l215 0" />
  </g>
</svg>

<svg>
  <g fill="none" stroke="black" stroke-width="4">
    <path stroke-dasharray="5,5" d="M5 20 l215 0" />
    <path stroke-dasharray="10,10" d="M5 40 l215 0" />
    <path stroke-dasharray="20,10,5,5,5,10" d="M5 60 l215 0" />
  </g>
</svg>
```

## 【3】使用

### 【3.1】直接写入`html`中

```
<!DOCTYPE html>
<html>
<head></head>
<body>
<svg
  id="mysvg"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 800 600"
  preserveAspectRatio="xMidYMid meet"
>
  <circle id="mycircle" cx="400" cy="300" r="50" />
</svg>
</body>
</html>
```

### 【3.2】写在独立文件中，用`<img>`、`<object>`、`<embed>`、`<iframe>`等标签插入网页。

```
<img src="circle.svg">
<object id="object" data="circle.svg" type="image/svg+xml"></object>
<embed id="embed" src="icon.svg" type="image/svg+xml">
<iframe id="iframe" src="icon.svg"></iframe>
```

### 【3.3】CSS 中使用 SVG

```
.logo {
  background: url(icon.svg);
}
```

### 【3.4】SVG 转为 BASE64 编码，然后作用 DATA URL 写入网页。

```
<img src="data:image/svg+xml;base64,[data]">
```

---

# 三、元素语法

## 【1】`<svg>`

SVG 代码都放在顶层标签`<svg>`之中，如果只想展示 SVG 图像的一部分，就要指定`viewBox`属性。

```
<svg width="100" height="100" viewBox="50 50 50 50">
  <circle id="mycircle" cx="50" cy="50" r="50" />
</svg>
```

## 【2】`<rect>`矩形

<svg>
  <rect x="0" y="0" height="100" width="200" style="stroke: #70d5dd; fill: #dd524b" />
</svg>

```
<svg>
  <rect x="0" y="0" height="100" width="200" style="stroke: #70d5dd; fill: #dd524b" />
</svg>
```

## 【3】`<circle>`圆形

- CX：圆中心的 x 坐标；
- CY：圆中心的 y 坐标；
- r：圆的半径。

  <svg>
  <circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red"/>
  </svg>

```
<svg>
  <circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red"/>
</svg>
```

## 【4】`<ellipse>`椭圆

- CX：圆中心的 x 坐标；
- CY：圆中心的 y 坐标；
- RX：水平半径；
- RY：垂直半径。

  <svg>
  <ellipse cx="300" cy="80" rx="100" ry="50" style="fill:yellow;stroke:purple;stroke-width:2"/>
  </svg>

```
<svg>
  <ellipse cx="300" cy="80" rx="100" ry="50" style="fill:yellow;stroke:purple;stroke-width:2"/>
</svg>
```

## 【5】`<line>`直线

- x1：x 轴定义线条的开始；
- y1：y 轴定义线条的开始；
- x2：x 轴定义线条的结束；
- y2：y 轴定义线条的结束。

<svg>
  <line x1="0" y1="0" x2="200" y2="200" style="stroke:rgb(255,0,0);stroke-width:2"/>
</svg>

```
<svg>
  <line x1="0" y1="0" x2="200" y2="200" style="stroke:rgb(255,0,0);stroke-width:2"/>
</svg>
```

## 【6】`<polygon>`多边形

<svg height="250" width="500">
  <polygon points="220,10 300,210 170,250 123,234" style="fill:lime;stroke:purple;stroke-width:1" />
</svg>

```
<svg height="250" width="500">
  <polygon points="220,10 300,210 170,250 123,234" style="fill:lime;stroke:purple;stroke-width:1" />
</svg>
```

## 【7】`<polyline>`曲线

<svg>
  <polyline points="0,40 40,40 40,80 80,80 80,120 120,120 120,160" style="fill:none;stroke:black;stroke-width:3" />
  <polyline points="20,20 40,25 60,40 80,120 120,140 200,180"style="fill:none;stroke:red;stroke-width:4" />
</svg>

```
<svg>
  <polyline points="0,40 40,40 40,80 80,80 80,120 120,120 120,160" style="fill:none;stroke:black;stroke-width:3" />
  <polyline points="20,20 40,25 60,40 80,120 120,140 200,180"style="fill:none;stroke:red;stroke-width:4" />
</svg>
```

## 【8】`<path>`路径

```
M = moveto【函数】
L = lineto【画线】
H = horizontal lineto【水平线】
V = vertical lineto【垂直线】
C = curveto【曲线到】
S = smooth curveto【平滑曲线】
Q = quadratic Bézier curve【二次Bézier曲线】
T = smooth quadratic Bézier curveto【光滑二次曲线Bézier曲线】
A = elliptical Arc【椭圆弧】
Z = closepath【闭合路径】
```

<svg>
    <path d="M150 0 L75 200 L225 200 Z" />
</svg>

```
<svg>
    <path d="M150 0 L75 200 L225 200 Z" />
</svg>
```

## 【9】`<text>`文本

<svg>
   <defs>
    <path id="path1" d="M75,20 a1,1 0 0,0 100,0" />
  </defs>
  <text x="10" y="100" style="fill:red;">
    <textPath xlink:href="#path1">I love SVG I love SVG</textPath>
  </text>
</svg>

```
<svg>
   <defs>
    <path id="path1" d="M75,20 a1,1 0 0,0 100,0" />
  </defs>
  <text x="10" y="100" style="fill:red;">
    <textPath xlink:href="#path1">I love SVG I love SVG</textPath>
  </text>
</svg>
```

---

# 四、元素滤镜

## 【1】`<defs>` 和 `<filter>`

- `<filter>`元素 id 属性定义一个滤镜的唯一名称；
- `<defs>`标签用于自定义形状

## 【2】`<feGaussianBlur>`模糊

<svg>
  <defs>
    <filter id="f1" x="0" y="0">
      <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
    </filter>
  </defs>
  <rect width="90" height="90" stroke="green" stroke-width="3"
  fill="yellow" filter="url(#f1)" />
</svg>

```
<svg>
  <defs>
    <filter id="f1" x="0" y="0">
      <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
    </filter>
  </defs>
  <rect width="90" height="90" stroke="green" stroke-width="3"
  fill="yellow" filter="url(#f1)" />
</svg>
```

## 【3】`<feOffset>`阴影

- [更多阴影效果](https://www.runoob.com/svg/svg-feoffset.html)

<svg>
  <defs>
    <filter id="f2" x="0" y="0" width="200%" height="200%">
      <feOffset result="offOut" in="SourceAlpha" dx="20" dy="20" />
      <feGaussianBlur result="blurOut" in="offOut" stdDeviation="10" />
      <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
    </filter>
  </defs>
  <rect width="90" height="90" stroke="green" stroke-width="3"
  fill="yellow" filter="url(#f2)" />
</svg>

```
<svg>
  <defs>
    <filter id="f2" x="0" y="0" width="200%" height="200%">
      <feOffset result="offOut" in="SourceAlpha" dx="20" dy="20" />
      <feGaussianBlur result="blurOut" in="offOut" stdDeviation="10" />
      <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
    </filter>
  </defs>
  <rect width="90" height="90" stroke="green" stroke-width="3"
  fill="yellow" filter="url(#f2)" />
</svg>
```

## 【4】`<linearGradient>`线性渐变

<svg>
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
      <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
    </linearGradient>
  </defs>
  <ellipse cx="200" cy="70" rx="85" ry="55" fill="url(#grad1)" />
</svg>

```
<svg>
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
      <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
    </linearGradient>
  </defs>
  <ellipse cx="200" cy="70" rx="85" ry="55" fill="url(#grad1)" />
</svg>
```

## 【5】`<radialGradient>`放射性渐变

<svg>
  <defs>
    <radialGradient id="grad2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
      <stop offset="0%" style="stop-color:rgb(255,255,255);
      stop-opacity:0" />
      <stop offset="100%" style="stop-color:rgb(0,0,255);stop-opacity:1" />
    </radialGradient>
  </defs>
  <ellipse cx="200" cy="70" rx="85" ry="55" fill="url(#grad2)" />
</svg>

```
<svg>
  <defs>
    <radialGradient id="grad2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
      <stop offset="0%" style="stop-color:rgb(255,255,255);
      stop-opacity:0" />
      <stop offset="100%" style="stop-color:rgb(0,0,255);stop-opacity:1" />
    </radialGradient>
  </defs>
  <ellipse cx="200" cy="70" rx="85" ry="55" fill="url(#grad2)" />
</svg>
```

---

# 五、更多元素标签

## 【1】`<g>`组

<svg width="300" height="100">
  <g id="myCircle">
    <text x="25" y="20">圆形</text>
    <circle cx="50" cy="50" r="20"/>
  </g>

  <use href="#myCircle" x="100" y="0" fill="blue" />
  <use href="#myCircle" x="200" y="0" fill="white" stroke="blue" />
</svg>

```
<svg width="300" height="100">
  <g id="myCircle">
    <text x="25" y="20">圆形</text>
    <circle cx="50" cy="50" r="20"/>
  </g>

  <use href="#myCircle" x="100" y="0" fill="blue" />
  <use href="#myCircle" x="200" y="0" fill="white" stroke="blue" />
</svg>
```

## 【2】`<pattern>`图案填充

<svg width="500" height="500">
  <defs>
    <pattern id="dots" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
      <circle fill="#bee9e8" cx="50" cy="50" r="35" />
    </pattern>
  </defs>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)" />
</svg>

```
<svg width="500" height="500">
  <defs>
    <pattern id="dots" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
      <circle fill="#bee9e8" cx="50" cy="50" r="35" />
    </pattern>
  </defs>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)" />
</svg>
```

## 【3】`<image>`图片

<svg viewBox="0 0 100 100" width="200" height="200">
  <image xlink:href="https://wx1.sinaimg.cn/mw690/0069qZtTgy1go96k54t3lj30ru0rqx6p.jpg"
    width="100%" height="100%"/>
</svg>

```
<svg viewBox="0 0 100 100" width="200" height="200">
  <image xlink:href="https://wx1.sinaimg.cn/mw690/0069qZtTgy1go96k54t3lj30ru0rqx6p.jpg"
    width="100%" height="100%"/>
</svg>
```

## 【4】`<animate>`动画

- `attributeName`：发生动画效果的属性名。

- `from`：单次动画的初始值。

- `to`：单次动画的结束值。

- `dur`：单次动画的持续时间。

- `repeatCount`：动画的循环模式。

<svg width="500px" height="100px">
  <rect x="0" y="0" width="100" height="100" fill="#feac5e">
    <animate attributeName="x" from="0" to="500" dur="2s" repeatCount="indefinite" />
  </rect>
</svg>

```
<svg width="500px" height="100px">
  <rect x="0" y="0" width="100" height="100" fill="#feac5e">
    <animate attributeName="x" from="0" to="500" dur="2s" repeatCount="indefinite" />
  </rect>
</svg>
```
