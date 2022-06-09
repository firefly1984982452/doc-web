# CSS - background

- `background-origin`：区域起源
- `background-clip`：区域剪辑
- `background-image`：图片
- `background-position`：位置
- `background-attachment`：背景依附
- `background-repeat`：背景重复

## 【1】`background-origin`：区域起源

属性：

- `content-box`：`padding`值会起效，以`padding`开始的单位开始显示背景；
- `padding-box`：`padding`不会影响背影，直接从`border`里面开始显示背影；
- `border-box`：`border`不会影响背景，直接把`border`的内容也算在背影里面，背景会减去`border`的长度。

```html
<div class="box" style="background-origin: content-box;">内容文字</div>
<div class="box" style="background-origin: padding-box;">内容文字</div>
<div class="box" style="background-origin: border-box;">内容文字</div>
```

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS background-origin" src="https://codepen.io/firefly1984982452/embed/mdXzxPJ?default-tab=" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/mdXzxPJ">
  CSS background-origin</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## 【2】`background-clip`：区域剪辑

属性：

- `content-box`：`padding`值会起效，以`padding`开始的单位开始显示背景，`padding`的部分会被剪掉；
- `padding-box`：`padding`不会影响背影，直接从`border`里面开始显示背影；
- `border-box`：`border`会影响背景，和`padding-box`的效果一样。
<iframe height="300" style="width: 100%;" scrolling="no" title="CSS background-clip：区域剪辑" src="https://codepen.io/firefly1984982452/embed/PoQyRKb?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/PoQyRKb">
  CSS background-clip：区域剪辑</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### `background-clip: padding-box;`实现半透明边框

<div class="example-box">

  <div style="height:100px;border: 10px solid rgba(255, 255, 255, 0.5);
  background: #fbb;">
  默认
  </div>

  <div style="height:100px;border: 10px solid rgba(255, 255, 255, 0.5);
  background: #fbb;background-clip: content-box;">
  background-clip: padding-box;或background-clip: content-box;
  </div>

</div>

```css
border: 10px solid rgba(255, 255, 255, 0.5);
background: #fbb;
background-clip: padding-box;
```

实现： `background-clip: padding-box;`或`background-clip: content-box;`，因为默认是：`background-clip: border-box;`，边框的颜色与背景重合，所以无效。

---

## 【3】`background-image`：图片

属性：

- `url()`：图片地址
- `linear-gradient()`渐变背景

背景图片可以有多个，可以摆放在任意位置

```css
background-image: url("1.png"), url("2.png"), url("3.png"), url("4.png");
background-repeat: no-repeat;
background-size: 0.2rem 0.2rem;
background-position: 0 0, 100% 0, 0 100%, 100% 100%;
/* 或写成下面这样 */
background-position: top left, top right, bottom left, bottom right;
```

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS background-image" src="https://codepen.io/firefly1984982452/embed/NWyOYXa?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/NWyOYXa">
  CSS background-image</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## 【4】`background-position`：位置

让背景图在距离右边和底部都是 20px，如图：

![image](https://s1.ax1x.com/2022/03/17/q9sy6A.jpg)

### 【4.1】background-position

方法一：

```css
background: url(img_url) no-repeat;
background-position: bottom 20px right 20px;
```

方法二：

```css
padding: 20px;
background: url(img_url) no-repeat;
background-position: bottom right;
background-origin: content-box;
```

`background-origin: content-box;`和`padding:20px`结合起来的效果和方法一一样。

### 【4.2】calc

```css
background: url(img_url) no-repeat;
background-position: calc(100% - 20px, 100% - 20px);
```

## 【5】`background-attachment`：背景依附

背景依附，默认为`scroll`，随背景滚动

```css
background-attachment: fixed; // 背景不会随内容滚动
```

◆ 例子：用`background-attachment`实现滚动提示

<iframe height="300" style="width: 100%;" scrolling="no" title="background-attachment" src="https://codepen.io/firefly1984982452/embed/JjMYQzz?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/JjMYQzz">
  background-attachment</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

```css
background-image: radial-gradient(at top, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));
background-repeat: no-repeat;
background-size: 100% 15px;
background-attachment: local, scroll;
```

## 【6】`background-repeat`：背景重复

◆ 属性

- `repeat`【默认】：平铺满整个容器，可能会造成背景图片显示不全。
- `repeat-x`： 背景图片沿容器的 X 轴平铺。
- `repeat-y`：背景图片沿容器的 Y 轴平铺。
- `no-repeat`：背景图片不做任何平铺。
- `round`：升缩背景图片适应容器大小。
- `space`：平均分配相邻图片之间的空间。

<iframe height="450" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/firefly1984982452/embed/VwQEXNj?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/VwQEXNj">
  Untitled</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
