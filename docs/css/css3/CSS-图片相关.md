# CSS - 图片相关

## 【1】`object-fit`

- [效果预览](https://firefly1984982452.github.io/my-web-page/object-fit.html)

◆ **语法**

- `fill`【默认】：不按比例拉伸至填满容器；
- `contain`：保持比例缩放；
- `cover`：保持比例剪切；
- `none`：保持原有长和宽；
- `scale-down`：保持比例，取`contain`和`cover`谁的尺寸更小。

◆ **示例**

![image](https://s1.ax1x.com/2022/03/17/q9ybgH.jpg)

## 【2】`image-set`

```css
background-image: -webkit-image-set(url("./cute.png") 2x, url("./yellow.jpeg") 3x);
```

选取移动端符合响应式条件的图片。

## 【3】`background-blend-mode`

背景的颜色混合模式，有 16 个值可取：【normal（默认值，即不混合）, multiply, screen, overlay, darken, lighten, color-dodge, color-burn, hard-light, soft-light, difference, exclusion, hue, saturation, color and luminosity（显示单色效果）】。

可以显示多张背景图片的混合，或者背景图片和颜色的混合。

```css
background-image: url(...g);
background-color: #51b7d3;
background-blend-mode: luminosity;
```

或

```css
background: url(img/pattern.png), url(img/jellyfish.jpg), #f07e32;
background-blend-mode: screen;
```

## 【4】`object-position`

与 `background-position`写法一样，区别是`object-position`用于对象，一般用图片，而`background-position`只能用在背景里面。

```css
img {
  height: 100px;
  width: 100px;
  object-fit: contain;
  object-position: top 70px;
}
```

<div class="example-box">
  <div class="item" style="width:200px;height:150px;">
    <img src="https://s1.ax1x.com/2022/03/11/bIszGj.png" style="
      object-fit: none;
      object-position: 15px 10%;"/>
  </div>
</div>

[实例链接](https://www.runoob.com/try/try.php?filename=trycss3_object-position)

## 【5】`vertical-align`：文字对齐图片方式

- vertical-align: text-top; // 文字对齐图片顶部
- vertical-align: text-bottom; // 默认文字对齐图片底部

```html
<p>
  文字与图片对齐
  <img
    style="vertical-align: text-top;"
    src="https://s1.ax1x.com/2022/03/11/bI6bE8.png"
    width="100"
    height="100"
  />
  设置为顶部对齐
</p>
```

<div class="example-box">
  <p>
    文字与图片对齐
    <img style="vertical-align: text-top;" src="https://s1.ax1x.com/2022/03/11/bI6bE8.png" width="100" height="100" />
    设置为顶部对齐
  </p>
  <p>
    文字与图片对齐
    <img style="vertical-align: text-bottom;" src="https://s1.ax1x.com/2022/03/11/bI6bE8.png" width="100" height="100" />
    设置为底部对齐
  </p>
</div>

## 【6】`image-orientation`：纠正图片的方向

## 【7】`image-rendering`：像素化图片像素

```css
image-rendering: auto;
image-rendering: crisp-edges;
image-rendering: pixelated;
```

<div class="example-box">
  <div class="grid-box">
    <div class="item">
      <p>原图：</p>
      <img src="https://s1.ax1x.com/2022/03/17/qC3YBd.png"/>
    </div>
    <div class="item">
      <p>放大后：</p>
      <img style="width:100px;height:100px;" src="https://s1.ax1x.com/2022/03/17/qC3YBd.png"/>
    </div>
    <div class="item">
      <p>image-rendering: auto;</p>
      <img style="width:100px;height:100px;image-rendering: auto;" src="https://s1.ax1x.com/2022/03/17/qC3YBd.png"/>
    </div>
    <div class="item">
      <p>image-rendering: crisp-edges;</p>
      <img style="width:100px;height:100px;image-rendering: crisp-edges;" src="https://s1.ax1x.com/2022/03/17/qC3YBd.png"/>
    </div>
    <div class="item">
      <p>image-rendering: pixelated;</p>
      <img style="width:100px;height:100px;image-rendering: pixelated;" src="https://s1.ax1x.com/2022/03/17/qC3YBd.png"/>
    </div>
  </div>
</div>

---
