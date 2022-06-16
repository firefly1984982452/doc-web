# CSS - 单位

**常用**

- px：像素
- %：百分比
- em：`em`是相当于`html,body`里面的`font-size`的`倍数`
- rem：相对 `html` 元素的 `font-size` 大小
- vh：视口高
- vm：视口宽
- vmax：当前`vw`和`vh`中较大的一个值；
- vmin：当前`vw`和`vh`中较小的一个值；
- vw：就是`vmin`

**不常用**

- ch：相对于数字 0 的大小（推荐用 em 代替）
- ex：相对长度单位（1em 的一半）
- gd：
- in：英寸（1in = 2.54cm = 25.4 mm = 72pt = 6pc）
- cm：厘米
- mm：毫米
- pc：派卡
- pt：磅（物理长度，71 分之一英寸）
- q：1/4 毫米

---

## 【1】em

`em`是相当于`html,body`里面的`font-size`的`倍数`

如：

```css
html,
body {
  font-size: 20px;
}
p {
  font-size: 2em;
}
```

此时`<p>`标签的`font-size`就是`40px`；

但是如果`<p>`标签里面还包含了一个`<p>`标签，如：`<p><p>no!</p>I'm not going.</p>`，此时最里面的`<p>`标签的`font-size`就是`60px`;

---

## 【2】rem

```js
(function () {
  //首先取得当得屏幕宽度
  var width = window.screen.width;
  var scaleSize = 100,
    designSize = 375;
  //用当得宽度除以（设计尺寸除以缩放尺寸）
  var size = width / (designSize / scaleSize);
  //设置font-size
  document.getElementsByTagName("html")[0].style.fontSize = size + "px";
})();
```

---

## 【3】视口的相对单位

- `vm`：1/100 的视口宽度；
- `vh`：1/100 的视口高度；
- `vmax`：当前`vw`和`vh`中较大的一个值；
- `vmin`：当前`vw`和`vh`中较小的一个值；
- `vmin`、`vmax`的作用：在做移动端页面开发时，会使得文字大小在横竖屏下保持一致。

---

## 【4】`min-inline-size`、`max-inline-size`：最小/最大直列大小

<iframe height="300" style="width: 100%;" scrolling="no" title="max-inline-size和width的区别" src="https://codepen.io/firefly1984982452/embed/GRQPVJo?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/GRQPVJo">
  max-inline-size和width的区别</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

## ch 单位

◆ ch 的规则

- 1ch = 1 个英文 = 1 个数字
- 2ch = 1 个中文
- 1ch = 数字 0 的宽度，是宽度，不是高度
- ch 是相对单位，会随着`font-size`变化
- **规则复杂，推荐用 em 代替**

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/firefly1984982452/embed/PoQXMpW?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/PoQXMpW">
  Untitled</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

## 移动端最快使用 rem 的方法

```css
html {
  font-size: calc(100vw / 7.5);
}
p {
  width: 7.5rem;
}
```
