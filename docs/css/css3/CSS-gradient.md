# CSS - gradient 渐变

1. `line-gradient`：线性渐变
2. `radial-gradient`：径向渐变
3. `conic-gradient`：圆锥形渐变
4. `repeating-line-gradient`：重复线性渐变
5. `repeating-radial-gradient`：重复径向渐变

与`background-size`组合的话，可以生成条纹背景。

## 【1】`line-gradient`：线性渐变

### 【1.1】`linear-gradient`：条纹背景

- 例 1：背景为上下 2 色分割

```css
background-image: linear-gradient(#ff0 50%, #f00 50%);
```

- 例 2：背景 2 色平铺

```css
background: linear-gradient(#ff0 50%, #f00 50%);
background-size: 100% 50%;
```

- 例 3：四边虚化

```css
background-image: linear-gradient(
    to bottom,
    #000,
    rgba(36, 54, 78, 0) 15%,
    rgba(36, 54, 78, 0) 85%,
    #000
  ), linear-gradient(to right, #000, rgba(36, 54, 78, 0) 15%, rgba(36, 54, 78, 0) 85%, #000);
```

<iframe height="300" style="width: 100%;" scrolling="no" title="linear-gradient：条纹背景" src="https://codepen.io/firefly1984982452/embed/WNMaJwg?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/WNMaJwg">
  linear-gradient：条纹背景</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 【1.2】linear-gradient：切角效果

<iframe height="300" style="width: 100%;" scrolling="no" title="linear-gradient：切角效果" src="https://codepen.io/firefly1984982452/embed/qBxJYPq?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/qBxJYPq">
  linear-gradient：切角效果</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## 【2】repeating-linear-gradient

- 例：背景 2 色任意角度平铺

```css
background-image: repeating-linear-gradient(60deg, yellow 0%, yellow 5%, green 0%, green 10%);
```

<iframe height="300" style="width: 100%;" scrolling="no" title="repeating-linear-gradient" src="https://codepen.io/firefly1984982452/embed/YzeJLYr?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/YzeJLYr">
  repeating-linear-gradient</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## 【3】radial-gradient 与 linear-gradient 类似

## 【4】conic-gradient

### 【4.1】饼图

```css
background: conic-gradient(pink 0 30%, yellow 0 70%, lime 0 100%);
```

### 【4.2】伪圆环效果

外元素

```css
background: conic-gradient(pink 0 30%, yellow 0 70%, lime 0 100%);
```

内元素

```css
background-color: #fff;
```

<iframe height="300" style="width: 100%;" scrolling="no" title="conic-gradient" src="https://codepen.io/firefly1984982452/embed/KKQGRRj?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/KKQGRRj">
  conic-gradient</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
