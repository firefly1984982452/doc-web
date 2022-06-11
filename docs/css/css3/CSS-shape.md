# CSS - shape 文字环绕

`shape-outside`属性使得行内（`inline`）的内容，围绕`outside`指定的曲线排列，可以用多边形``里面的属性。

`shape-margin`属性指定`shape-outside`与内容之间的`margin`。

`shape-image-threshold`属性指定[透明度值](https://developer.mozilla.org/zh-CN/docs/Web/CSS/shape-image-threshold)。

【1】圆形文字环绕

```css
.circle {
  width: 250px;
  height: 250px;
  background-color: #fbb;
  border-radius: 50%;
  float: left;
  shape-outside: circle();
}
```

【2】三角形文字环绕

```css
.item {
  width: 250px;
  height: 250px;
  background-color: #fbb;
  float: left;
  clip-path: polygon(0 100%, 50% 0, 100% 100%);
  shape-outside: polygon(0 100%, 50% 0, 100% 100%);
}
```

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS - shape 文字环绕" src="https://codepen.io/firefly1984982452/embed/JjpeYKw?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/JjpeYKw">
  CSS - shape 文字环绕</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
