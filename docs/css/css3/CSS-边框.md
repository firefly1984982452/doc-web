# CSS - 边框

- `text-emphasis`：强调文字
- `border-radius`
- `box-shadow`：边框阴影
- `border-image`：边框图片
- `border-style`
- `rgba`或`hsla`：半透明边框

## 【0】`text-emphasis`：强调文字

<div class="example-box">
  <p style="text-emphasis: open green;-webkit-text-emphasis: open green;">你好，hello world.</p>
</div>

```css
text-emphasis: "x";
text-emphasis: "点";
text-emphasis: "\25B2";
text-emphasis: "*" #555;
text-emphasis: "foo";

text-emphasis: filled;
text-emphasis: open;
text-emphasis: filled sesame;
text-emphasis: open sesame;

text-emphasis: filled sesame #555;

-webkit-text-emphasis-position: under;
```

## 【1】`box-shadow`：边框阴影

```css
box-shadow: 50px 50px 0 20px #ffb;
```

<div class="example-box" style="height:150px">
  <div style="
    width:100px;
    heigth: 100px;
    background: #fbb;
    box-shadow: 50px 50px 0 20px #ffb;">hello</div>
</div>

◆ 解析：

```
参数1：X轴，图中为30，因为50-20=30；
参数2：Y轴，图中为30，因为50-20=30；
参数3：模糊距离
参数4：阴影大小，默认可省略不写时为0。
参数4：颜色。
```

## 【2】`border-image`：边框图片

`border-image-repeat`: 重复（`repeat`）、拉伸（`stretch`）或铺满（`round`）。

```css
border-image: url(border.png) 30 round;
```

<div class="example-box">
  <div style="
              width:250px;
              height:250px;
              border: solid 50px;
              border-image: url(https://s1.ax1x.com/2022/03/11/bI6bE8.png) 90 round;"></div>
</div>

## 【3】`rgba`或`hsla`：半透明边框

```css
border: solid 50px;
border-color: rgba(255, 255, 0, 0.2);
background: #fbb;
```

<div class="example-box">
  <div style="
              width:100px;
              height:100px;
              border: solid 30px;
              border-color: rgba(0,0,0,.2);
              background: #fbb;"></div>
</div>

## 【4】多重边框

### 【4.1】用 box-shadow

```css
background: #fbfb;
box-shadow: 0 0 0 5px #f00, 0 0 0 10px #ff0, 0 0 0 15px #00f;
```

<div class="example-box">
  <div style="
  width:100px;
  height:100px;
  background: #fbfb;
  box-shadow: 0 0 0 5px #f00, 0 0 0 10px #ff0, 0 0 0 15px #00f;
  margin:20px;">内容</div>
</div>

### 【4.2】用 outline

```css
background: #fbfb;
outline: 5px solid #ff0;
border: 5px solid #f00;
```

<div class="example-box">
  <div style="
  width:100px;
  height:100px;
  background: #fbfb;
  outline: 5px solid #ff0;
  border: 5px solid #f00;
  margin:10px;">内容</div>
</div>

`outline` 和 `border` 的区别

- `outline`不占空间，`border`占空间
- 设置圆角（`border-radius`）之后，`border`边框会贴紧，`outline`不会
- `outline-set`可以设置边距

<div class="example-box">
  <div style="
  width:100px;
  height:100px;
  background: #fbfb;
  outline: 5px solid #ff0;
  border: 5px solid #f00;
  border-radius: 50%;
  outline-offset: 10px;
  margin:20px;">内容</div>
</div>

区别的代码

```css
background: #fbfb;
outline: 5px solid #ff0;
border: 5px solid #f00;
border-radius: 50%;
outline-offset: 10px;
```

- `outline-offset`：偏移

```css
outline: 1px dashed #f00;
outline-offset: -10px;
```

## 【5】border-style 属性

[效果](https://www.w3school.com.cn/tiy/t.asp?f=csse_border-style)

- `none`：无；
- `hidden`：同“`none`”，在 `table` 中能解决边框冲突；
- `dotted`：点；
- `dashed`：虚线；
- `solid`：实线；
- `double`：双实线；
- `inset`：3D 内边框;
- `outset`：3D 外边框;
- `groove`：凹槽边框；
- `ridge`：垄状边框；

## 【6】信封边框

```css
.box {
  width: 200px;
  height: 100px;
  padding: 1em;
  border: 10px solid transparent;
  background: linear-gradient(white, white) padding-box, repeating-linear-gradient(
      -45deg,
      black 0,
      black 25%,
      white 0,
      white 50%
    );
  background-size: 0.6em 0.6em;
}
```

<div class="example-box">
  <div
    style="
      width: 200px;
      height: 100px;
      padding: 1em;
      border: 10px solid transparent;
      background: linear-gradient(white, white) padding-box, repeating-linear-gradient(-45deg, black 0, black 25%, white 0, white 50%);
      background-size: 0.6em 0.6em;
    "
  ></div>
</div>

## 【7】重复边框背景图片

- [链接](https://dabblet.com/gist/c73fd4ea4b592a05c004)

```css
border: 10px solid;
border-image: 33.3% url("./test.jpg") round;
```

## 【8】border-radius 中斜杠`/`的用法

◆ 自适应椭圆

```css
width: 300px;
height: 100px;
background-color: #fbb;
border-radius: 20% / 50%;
```

<div class="example-box">
  <div class="box bg-color-red" style="width: 300px; height: 100px; border-radius: 20% / 50%"></div>
</div>

◆ 半圆

```css
width: 50px;
height: 100px;
background-color: #fbb;
border-radius: 0 100% 100% 0 / 50%;
```

<div class="example-box">
  <div class="box bg-color-red" style="width: 50px; height: 100px; border-radius: 0 100% 100% 0 / 50%"></div>
</div>

◆ 其它形状

```css
width: 300px;
height: 100px;
background-color: #fbb;
border-radius: 10% 50% / 50% 10%;
```

<div class="example-box">
  <div class="box bg-color-red" style="width: 300px; height: 100px; border-radius: 10% 50% / 50% 10%"></div>
</div>

◆ 斜杠`/`的用法

- [链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-radius)

```css
border-radius: 1em/5em;
```

等价于：

```css
border-top-left-radius: 1em 5em;
border-top-right-radius: 1em 5em;
border-bottom-right-radius: 1em 5em;
border-bottom-left-radius: 1em 5em;
```

`border-top-left-radius: 1em 5em;`意思是：`top`为`1em`，`left`为`5em`。

---

## 【4】`matrix`：矩阵

`skew`、`scale`、`rotate`、`translate` 等全都是由 `matrix` 矩阵实现的。

```css
transform: matrix(2, 2, 0, 2, 45, 0);
```

---
