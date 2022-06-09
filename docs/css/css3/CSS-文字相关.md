# CSS - 文字相关

1. 文字渐变
2. `-webkit-font-smoothing`：抗锯齿渲染
3. `-webkit-text-stroke`：文字描边
4. `text-shadow`：文字阴影
5. `-webkit-text-fill-color`：文字颜色
6. `font-size:10px`：
7. `font-face`：自定义字体
8. 垂直排版
9. `line-break`：断行规则
10. `font-display`：优化字体性能

## 【1】文字渐变

```css
background: linear-gradient(to bottom, #8af0ff, #3780e6);
-webkit-background-clip: text;
color: transparent;
```

<div class="example-box">
  <h1 style="background: linear-gradient(to bottom, #8AF0FF,#3780E6);-webkit-background-clip: text;color: transparent;">文字渐变</h1>
</div>

## 【2】`-webkit-font-smoothing`：抗锯齿渲染

属性值：

- `none`: 对像素低的文本好，会有严重的锯齿；
- `subpixel-antialiased`: 默认值，有轻微锯齿；
- `antialiased`: 抗锯齿很好。

```css
body {
  -webkit-font-smoothing: antialiased;
}
```

`Gecko`内核的抗锯齿效果：

`-moz-osx-font-smoothing: inherit | grayscale;`这个属性也是更清晰的作用。

## 【3】`-webkit-text-stroke`：文字描边

```css
-webkit-text-stroke: 1px #ff0;
```

<div class="example-box">
  <p style="-webkit-text-stroke:1px #ff0;">文字描边</p>
</div>

## 【4】`text-shadow`：文字阴影

```css
text-shadow: 5px 5px 5px #f00;
```

<div class="example-box">
  <p style="text-shadow: 5px 5px 5px #f00;">文字阴影</p>
</div>

## 【5】`-webkit-text-fill-color`：文字颜色

```css
-webkit-text-fill-color: red;
color: green;
```

<div class="example-box">
  <p style="-webkit-text-fill-color: red;color: green;">文字颜色</p>
</div>

它们俩同样都是设置文字颜色，但就算`color`在下面，也是`-webkit-text-fill-color`的权重更高，优先级更高。

## 【6】`font-size:10px`

字体如果需求是小于`12px`的话，可以先设置字体为`20px`，再使用`transfrom:scale(0.5)`进行缩放。（也可以使用图片，但不推荐）

## 【7】`font-face`：自定义字体

```css
@font-face {
  font-family: DIGITAL-Dream;
  src: url("../assets/font/DIGITAL-Dream.ttf");
}

a {
  font-family: "DIGITAL-Dream";
}
```

## 【8】垂直排版

```css
p {
  text-orientation: upright; // 数字横向显示
  writing-mode: vertical-lr; // 竖向排版
}
p span {
  text-combine-upright: all; // 数字联排
}
```

<div class="example-box" style="font-size:.8em;">
  <p style="writing-mode: vertical-lr;text-orientation: upright;">数字横向123</p>
  <hr />
  <p style="writing-mode: vertical-lr;">竖向2021排版</p>
  <hr />
  <p style="writing-mode: vertical-lr;">竖向<span style="text-combine-upright: all;">2021</span>排版</p>
</div>

## 【9】`line-break`：断行规则

- `line-break: auto;`：默认
- `line-break: loose;`：限制最小
- `line-break: normal;`：常规
- `line-break: strict;`：限制最大
- `line-break: anywhere;`：任意位置标点都可以换行

<div class="example-box">
  <b>除line-break: anywhere;以外的任意值：</b>
  <p style="width:200px;border:1px solid;">一二三四五六七八。九十</p>
  <b>line-break: anywhere;：</b>
  <p style="width:200px;border:1px solid;line-break: anywhere;">一二三四五六七八。九十</p>
</div>

## 【10】`font-display`：优化字体性能

- [链接](https://zhuanlan.zhihu.com/p/28369304)
