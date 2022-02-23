---
title: CSS之实现各种功能
date: 2021-01-07 17:19:32
categories:
  - program
---

<style>
  p.example{
    color:#f00;
    border: 1px solid;
  }
  div.example{
    border: 1px solid #f00;
  }
</style>

# 【1】

---

# 【2】限定 N 行

```
display: -webkit-box;
overflow: hidden;
white-space: normal!important;
text-overflow: ellipsis;
word-wrap: break-word;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;

单行
.table tbody > tr > td.name{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
 }
```

◆ 示例：

<p class="example" style="width:300px;display: -webkit-box;
overflow: hidden;
white-space: normal!important;
text-overflow: ellipsis;
word-wrap: break-word;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;">日历中的历法又分为阴历、阳历和阴阳合历,三种。 阳历亦即太阳历,其历年为一个回归年,现时国际通用的公历(格里高利历)和中国的干支历即属于太阳历这类。</p>

---

# 【3】新版本上线（指导蒙版）

```
position: absolute;
box-shadow: rgba(0, 0, 0, 0.75) 10px 1px 1px 99px;
z-index: 100;
width: 367px;
height: 143px;
left: 40px;
top: 12px;
```

![Image.png](https://wx2.sinaimg.cn/mw690/0069qZtTgy1gho4b225hlj30k60ffn1c.jpg)

---

# 【4】CSS 做三角形

```
width: 0;
height: 0;
border-color: #f60 transparent transparent transparent;
border-style: solid;
border-width: 10px;
```

◆ 示例：

<div class="example">
<div style="width: 0;
height: 0;
border-color: #f60 transparent transparent transparent;
border-style: solid;
border-width: 20px;"></div>
</div>

---

# 【5】检查边距

```
*{
  background: #000 !important;
  color: #0f0 !important;
  outline: solid #f00 1px !important;
}
```

![a7b789a9gy1fow4hu8khhj206203qwea.jpg](https://wx1.sinaimg.cn/mw690/0069qZtTgy1gho4csuijuj306203qdfx.jpg)

---

# 【6】

# 【7】左边定宽，右边自适应

- 使用`flex`
- 右边的`width: calc(100% - 100px)`
- 使用`float`

---

# 【8】单行居中显示文字，多行居左显示，最多两行超过用省略号结尾

◆ 示例：

<style>
.line-clamp{
  width: 300px;
}
.line-clamp h2{
  text-align: center;
}
.line-clamp p{
  display: inline-block;
  text-align: left;
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.line-clamp em{
  display: block;
  text-align: center;
}
</style>

<div class="example line-clamp">
  <h2><p><em>单行居中，多行居左<em></p></h2>
  <h2><p>上呼吸道感染，咽喉痛无发热</p></h2>
  <h2><p>老人主诉头晕多日，饭后胸闷，结合体检情况，考虑为交感神经。</p></h2>
</div>

◆ 解析：

前 2 项条件：

```
<h2><p>咽喉痛无发热</p></h2>
<h2><p>上呼吸道感染，咽喉痛无发热</p></h2>
<h2><p>老人主诉头晕多日，饭后胸闷，结合体检情况，考虑为交感神经。</p></h2>

...

h2{
  text-align: center;
}
p{
  text-align: left;
  display: inline-block;
}
```

第 3 项条件关键代码

```
display: -webkit-box; // 设置display，将对象作为弹性伸缩盒子模型显示
-webkit-line-clamp: 2; // 限制在一个块元素显示的文本的行数
-webkit-box-orient: vertical; // 规定框的子元素应该被水平或垂直排列
```

配合 `overflow : hidden` 和 `text-overflow: ellipsis` 即可实现 `webkit` 内核下的多行省略

```
p {
    display: inline-block;
    text-align: left;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

h2{
    text-align: center;
}
```

但是单行也会居左，而不是居中，所以要同样再嵌套一层。

```
<h2><p><em>单行居中，多行居左<em></p></h2>
```

◆ 代码：

```

<style>
.line-clamp{
  width: 300px;
}
.line-clamp h2{
  text-align: center;
}
.line-clamp p{
  display: inline-block;
  text-align: left;
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.line-clamp em{
  display: block;
  text-align: center;
}
</style>

<div class="example line-clamp">
  <h2><p><em>单行居中，多行居左<em></p></h2>
  <h2><p>上呼吸道感染，咽喉痛无发热</p></h2>
  <h2><p>老人主诉头晕多日，饭后胸闷，结合体检情况，考虑为交感神经。</p></h2>
</div>
```

---

# 【9】满屏背景和固定宽度

```
main{
  width: 1000px; // 可不写
  margin:0 calc(50% - 500px;)
}
```

---

# 【10】紧贴底部的页脚

## 方法 1：中间内容用 calc

```
header{
  height: 100px;
  background-color: #bbf;
}
.main{
  background-color: #fbb;
  min-height: calc(100% - 200px);
}
footer{
  height: 100px;
  background-color: #bfb;
}
```

## 方法 2：用 flex

```
body{
  display: flex;
  flex-direction: column;
}

header{
  height: 100px;
}
.main{
  background-color: #fbb;
  flex:1;
}
footer{
  height: 100px;
}
```

---

# 【11】table 表格控制列宽

`table-layout: fixed;`

通常都是根据内容多少自动计算宽度的。

---

# 【12】`background-clip: padding-box;`实现半透明边框

◆ 示例：

<div style="height:100px;border: 10px solid rgba(255, 255, 255, 0.5);
background: #fbb;">
默认
</div>

<div style="height:100px;border: 10px solid rgba(255, 255, 255, 0.5);
background: #fbb;background-clip: content-box;">
background-clip: padding-box;或background-clip: content-box;
</div>

◆ 代码：

```
border: 10px solid rgba(255, 255, 255, 0.5);
background: #fbb;
background-clip: padding-box;
```

实现： `background-clip: padding-box;`或`background-clip: content-box;`，因为默认是：`background-clip: border-box;`，边框的颜色与背景重合，所以无效。

---

# 【14】reset.css

作者推荐了`normalize.css`替代传统的`reset.css`。 [链接](https://github.com/chokcoco/iCSS/issues/5)

---

# 【15】居中的多种方法

## 【1】预览

[案例预览](https://firefly1984982452.github.io/css-center/) [案例下载地址](https://github.com/firefly1984982452/css-center)

## 【2】布局

### 【2.1】设置背景宽和高都是 100%

```
html,body{
	height: 100%;
}
.box {
	height: 100%;
}

```

### 【2.2】html 页面

```
<div class="box">
	<div class="item">
		item
	</div>
</div>
```

### 【2.3】基础的 CSS

```
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
html,body{
	height: 100%;
}
.box {
	width: 100%;
	height: 100%;
	background-color: #f7b2bb;
}

.item {
	width: 50%;
	height: 100px;
	background-color: #1296db;
	text-align: center;
	line-height: 100px;
	color: #fff;
}
```

**tips:因为我的布局很简单，页面也不多，所以我用了`*`号选择器**

## 【3】absolute 方法实现

### 【3.1】固定宽高

```
.box{
	position: relative;
}
.item{
	position: absolute;
	width: 200px;
	height: 100px;
	left: 50%;
	top: 50%;
	margin-left: -100px;
	margin-top: -50px;
}
```

### 【3.2】百分比宽高

```
.box{
	position: relative;
}
.item{
	width: 50%;
	height: 20%;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
}
```

**重点：`transform: translate(-50%,-50%);`**

## 【3】块级元素实现水平居中

```
.box{
	position: relative;
}
.item{
	width: 50%;
	margin: 0 auto;
}
```

## 【4】flex 方法实现

```
.box{
	display: flex;
	justify-content: center;
	align-items: center;
}
.item{

}
```

## 【5】文本居中

- 文字水平居中：`text-align:center;`

- 文字垂直居中：`line-height:height`

---

# 【16】最后一个 li 不显示 border（类推）

## 【1】方法一：`first-child`

```
li{border-top:1px solid #000;}
li:first-child{border-top:none;}
```

## 【2】方法二：`*+*`

```
li+li{
    border-top: 1px dashed #999;
}
```

## 【3】方法三：`:not(:last-child)`

```
li:not(:last-child)...
```

---

# 【16】更改自带的 scorll 滚动条样式

```
::-webkit-scrollbar{
    width: .07rem;
    height: .07rem;
}
/* //定义滑块 内阴影+圆角 */
::-webkit-scrollbar-thumb{
    border-radius: 1em;
    background-color: #D8D8D8;
}
/* //定义滚动条轨道 内阴影+圆角 */
::-webkit-scrollbar-track{
    border-radius: 1em;
    background-color: transparent;
}
```

---

# 【17】CSS 水波特效动画

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      @keyframes wave {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      body {
        position: relative;
      }
      .water-waves {
        position: absolute;
        top: 0;
        left: 0;
        width: 190px;
        height: 190px;
        border-radius: 50%;
        border: 1px solid #38abe9;
        overflow: hidden;
      }
      .water-wave {
        position: absolute;
        top: 40%;
        left: 0;
        width: 205px;
        height: 250px;
        border-radius: 33%;
        position: absolute;
        left: -50px;
        opacity: 0.3;
      }

      .water-wave1 {
        top: 35%;
        background-color: rgba(0, 161, 246, 0.8);
        animation: wave 10s linear infinite;
      }
      .water-wave2 {
        top: 38%;
        background-color: rgba(3, 110, 172, 0.6);
        animation: wave 9s linear infinite;
      }
      .water-wave3 {
        top: 40%;
        background-color: rgba(4, 78, 127, 0.8);
        animation: wave 7s linear infinite;
      }
    </style>
  </head>
  <body>
    <div class="water-waves">
      <div class="water-wave water-wave1"></div>
      <div class="water-wave water-wave2"></div>
      <div class="water-wave water-wave3"></div>
    </div>
  </body>
</html>

```

---

# 【18】用 radial-gradient 和 linear-gradient 实现单个 div 下渐变进度条

```
.rate {
  width: 500px;
  --c: #3200ff;
  --p: 60%;
  height: 50px;
  background-color: #eee;
  border-radius: 30px;
  background-image: radial-gradient(
      closest-side circle at var(--p),
      var(--c),
      var(--c) 100%,
      transparent
    ),
    linear-gradient(to right,#fbb,var(--c));
  background-size: 100%,var(--p);
  background-repeat: no-repeat;
}
```

---

# 【19】用 flex 和 after 中的 padding 实现定宽高比例

```
.box{
  background-color: #fbf;
  width: 100px;
  display: flex;
}
.box::after{
  content: '';
  padding-bottom: 150%;
}

...

<div class="box">这是定宽比例</div>
```

---

# 【20】outline 属性实现悬浮时高亮

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      list-style: none;
    }
    ul{
      width: 300px;
    margin: auto;
    }
    li{
      border: 10px solid #bff;
      height: 50px;
    }
    li+li{
      margin-top: -10px;
    }
    li:hover{
      outline: 1000px solid #00000099;
      outline-offset: -10px;
    }
  </style>
</head>
<body>
  <ul>
    <li>01</li>
    <li>02</li>
    <li>03</li>
    <li>04</li>
    <li>05</li>
    <li>06</li>
    <li>07</li>
    <li>08</li>
  </ul>
</body>
</html>
```

---

# 【21】border 边框动效

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <style>
      .content {
        width: 200px;
        height: 200px;
        background-color: #fbb;
        position: relative;
      }
      .content::before {
        position: absolute;
        content: "";
        top: -5px;
        left: -5px;
        right: -5px;
        bottom: -5px;
        border: 5px solid #bbf;
      }
      .content::before {
        animation: move 5s infinite linear;
      }
      @keyframes move {
        0%,
        100% {
          clip-path: inset(0 5px 200px 5px);
        }
        25% {
          clip-path: inset(5px 0 5px 200px);
        }
        50% {
          clip-path: inset(200px 5px 0 5px);
        }
        75% {
          clip-path: inset(5px 200px 5px 0);
        }
      }
    </style>
  </head>
  <body>
    <div class="content"></div>
  </body>
</html>
```

---

# 【22】整块文本溢出省略

◆ 效果：

<section style="width: 300px; height: 80px; border: 1px solid #bbf">
  <p
    style="
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    "
  >
    <span
      style="background-color: #bfb; display: inline-block; padding: 10px"
      >CSS3</span
    >
    <span
      style="background-color: #bfb; display: inline-block; padding: 10px"
      >JavaScript</span
    >
    <span
      style="background-color: #bfb; display: inline-block; padding: 10px"
      >HTML5</span
    >
    <span
      style="background-color: #bfb; display: inline-block; padding: 10px"
      >前端工程师</span
    >
  </p>
</section>

◆ 代码：

```
<style>
  section {
    width: 300px;
    height: 80px;
    border: 1px solid #bbf;
  }
  .person-card__desc {
    width: 100%;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  span {
    background-color: #bfb;
    display: inline-block;
    padding: 10px;
  }
</style>
</head>
<body>
<section>
  <p class="person-card__desc">
    <span>CSS3</span>
    <span>JavaScript</span>
    <span>HTML5</span>
    <span>前端工程师</span>
  </p>
</section>
</body>
```

◆ 核心：

`span`标签变成`display: inline-block;`，父标签正常的用溢出换行的代码，为了兼容`iOS/Safari`，加上`display: -webkit-box;`下面的代码实现兼容。

---

# 【23】上下左右箭头

◆ 示例：

<style>
  .arrow{
    width: 20px;
    height: 20px;
    border-top: 1px solid #c3c8d6;
    border-right: 1px solid #c3c8d6;
  }
</style>

<div class="example" style="padding:10px;">
  <div class="arrow" style="transform: rotate(-45deg);"></div>
  <div class="arrow" style="transform: rotate(135deg);"></div>
  <br />
  <div class="arrow" style="transform: rotate(-135deg);"></div>
  <br />
  <div class="arrow" style="transform: rotate(45deg);"></div>
</div>

◆ 代码：

```
width: 20px;
height: 20px;
border-top: 1px solid #c3c8d6;
border-right: 1px solid #c3c8d6;
// 上
transform: rotate(-45deg);
// 下
transform: rotate(135deg);
// 左
transform: rotate(-135deg);
// 右
transform: rotate(45deg);
```

---

# 【24】自定义下划线

## 【24.1】text-decoration

```
text-decoration: underline;
```

## 【24.2】border

```
border-bottom: 1px solid #f00;
```

## 【24.3】background

```
background: linear-gradient(gray, gray) no-repeat;
background-size: 100% 1px;
background-position: 0 1.1em;
```

---

# 【25】自定义复选框

◆ 示例：

<style>
  .awesome-box input[type="checkbox"] {
    /* display: none; */
    position: absolute;
    clip: rect(0, 0, 0, 0);
  }

  .awesome-box label {
    font-size: 40px;
  }

  .awesome-box input[type="checkbox"]+label::before {
    content: "\a0";
    display: inline-block;
    vertical-align: 0.2em;
    width: 0.8em;
    height: 0.8em;
    margin-right: 0.2em;
    border-radius: 0.2em;
    background: silver;
    text-indent: 0.15em;
    line-height: 0.65em;
  }

  .awesome-box input[type="checkbox"]:checked+label::before {
    content: "\2713";
    background: yellowgreen;
  }

  .awesome-box input[type="checkbox"]:focus+label::before {
    box-shadow: 0 0 0.1em 0.1em #fbb;
  }

  .awesome-box input[type="checkbox"]:disabled+label::before {
    background: #f00;
    box-shadow: none;
    color: #555;
  }
</style>

<div class="example awesome-box">
  <input type="checkbox" id="awesome" />
  <label for="awesome">点击选中</label>
</div>

◆ 代码：

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
    <style>
      input[type="checkbox"] {
        /* display: none; */
        position: absolute;
        clip: rect(0, 0, 0, 0);
      }
      label {
        font-size: 40px;
      }
      input[type="checkbox"] + label::before {
        content: "\a0";
        display: inline-block;
        vertical-align: 0.2em;
        width: 0.8em;
        height: 0.8em;
        margin-right: 0.2em;
        border-radius: 0.2em;
        background: silver;
        text-indent: 0.15em;
        line-height: 0.65em;
      }
      input[type="checkbox"]:checked + label::before {
        content: "\2713";
        background: yellowgreen;
      }
      input[type="checkbox"]:focus + label::before {
        box-shadow: 0 0 0.1em 0.1em #fbb;
      }
      input[type="checkbox"]:disabled + label::before {
        background: #f00;
        box-shadow: none;
        color: #555;
      }
    </style>
  </head>
  <body>
    <input type="checkbox" id="awesome" />
    <label for="awesome">Awesome</label>
  </body>
</html>
```

---

# 自定义图片对比控件

[效果预览地址](https://firefly1984982452.github.io/my-web-page/image-contrast.html)

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>自定义图片对比控件</title>
    <style>
      .box {
        width: 500px;
        height: 500px;
        border: 1px solid;
        display: flex;
      }
      .img-box {
        margin: auto;
        position: relative;
        width: 400px;
        height: 400px;
        display: inline-block;
      }
      img {
        display: block;
        width: 400px;
        height: 400px;
      }
      .bg-box {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 40%;
        overflow: hidden;
      }
      input {
        position: absolute;
        bottom: 5px;
        width: 95%;
        left: 2.5%;
      }
    </style>
  </head>
  <body>
    <div class="box">
      <div class="img-box">
        <div class="bg-box" id="show">
          <img class="bottom" src="./test.png" alt="" srcset="" />
        </div>
        <img class="top" src="./test3.png" alt="" srcset="" />
        <input id="slider" type="range" onmousemove="changeSlider()" />
      </div>
    </div>
    <script>
      let slider = document.getElementById("slider");
      function changeSlider() {
        console.log(slider.value);
        let show = document.getElementById("show");
        show.style.width = slider.value + "%";
      }
    </script>
  </body>
</html>
```

---

# 【26】沿环形路径平移的动画

[效果预览地址](https://firefly1984982452.github.io/my-web-page/circle-animation.html)

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>沿环形路径平移的动画</title>
    <style>
      main {
        width: 500px;
        height: 500px;
        border: 1px solid;
        display: flex;
      }
      .box {
        height: 400px;
        width: 400px;
        background-color: #fbb;
        margin: auto;
        border-radius: 50%;
      }
      .box1 {
        background-color: #fbf;
        text-align: center;
        line-height: 50px;
        margin-left: 44%;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        animation: spin 5s infinite linear;
        transform-origin: 50% 200px;
      }
      .img {
        width: 50px;
        height: 50px;
        animation: spin1 5s infinite linear;
      }
      @keyframes spin {
        to {
          transform: rotate(1turn);
        }
      }
      @keyframes spin1 {
        from {
          transform: rotate(1turn);
        }
      }
    </style>
  </head>
  <body>
    <main>
      <div class="box">
        <div class="box1">
          <div class="img">hello</div>
        </div>
      </div>
    </main>
  </body>
</html>

```

---

# 【27】椭圆环绕动效

## 链接

[学习链接](https://www.cnblogs.com/lin494910940/p/14051631.html)

[效果链接](https://firefly1984982452.github.io/my-web-page/oval-around.html)

## 思路

单个球的环绕运动

```
.area>.ball1{
    animation: anmiteX 12s linear 0s infinite alternate,
    anmiteY 12s linear 0s infinite alternate;
}
/* 动画 */
/* 在X轴上的移动 */
@keyframes  anmiteX{
    from{
        left: 100px;
    }
    to{
        left: 1000px;
    }
}
/* 在轴上Y的移动 */
@keyframes  anmiteY{
    from{
        top: 100px;
    }
    to{
        top: 600px;
    }
}
```

此时只是叠加动画，加上 6 秒的时间差之后才有上右下左的环绕效果：

```
animation: anmiteX 12s linear -6s infinite alternate,/* 叠加上6秒时间差 */
          anmiteY 12s linear 0s infinite alternate;
```

再加上贝塞尔曲线。

## 源码

```
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title></title>
</head>

<body>
    <style>
        .area {
            width: 1000px;
            height: 400px;
            border: 1px solid #f00;
        }

        .area>.ball {
            width: 100px;
            height: 60px;
            position: absolute;
            border-radius: 60px;
            background-image: linear-gradient(to top, blue, lightblue);
            box-shadow: 0px 0px 20px #0000ff5c;
        }

        /* 在X轴上的移动 */
        @keyframes anmiteX {
            from {
                left: 100px;
            }

            to {
                left: 800px;
            }
        }

        /* 在轴上Y的移动 */
        @keyframes anmiteY {
            from {
                top: 100px;
            }

            to {
                top: 300px;
            }
        }
    </style>

    <div class="area">
    </div>
    <script type="text/javascript">
        // nameArr 球的名称，runtime 运行一圈的时间.warmballArr 爆满的球素组
        function addBall(num, runtime) {
            let _parentbox = document.getElementsByClassName('area')[0];
            let _innerHtml = "";
            for (let i = 0; i < num; i++) {
                let _xtime = parseFloat(runtime / 4);
                let _ytime = parseFloat(runtime / num);
                let _style = `
             animation: anmiteX `+ (runtime / 2) + `s cubic-bezier(0.36, 0, 0.64, 1) -` + (_xtime + (i * _ytime)) + `s infinite alternate,
             anmiteY `+ (runtime / 2) + `s cubic-bezier(0.36, 0, 0.64, 1) -` + (i * _ytime) + `s infinite alternate;
             `;
                _innerHtml += `
                <div class=" ball`+ (i + 1) + ` ball " Style="` + _style + `">
                </div>`
            }
            _parentbox.innerHTML = _innerHtml;
        }
        addBall(10, 24);
    </script>
</body>

</html>
```
