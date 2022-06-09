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

<div class="example-box" style="width: 50%">
  <div class="item bg-color-red" style="width: 100px;
  height: 100px;
  border-radius: 50%;
  float: left;
  shape-outside: circle();"></div>
  <p>Sometimes a web page's text content appears to be
    funneling your attention towards a spot on the page
    to drive you to follow a particular link. Sometimes
    you don't notice.</p>
</div>

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

<div class="example-box" style="width: 50%">
  <div class="item bg-color-red" style="width: 100px;
  height: 100px;
  float: left;
  clip-path: polygon(0 100%, 50% 0, 100% 100%);
  shape-outside: polygon(0 100%, 50% 0, 100% 100%);"></div>
  <p>Sometimes a web page's text content appears to be
    funneling your attention towards a spot on the page
    to drive you to follow a particular link. Sometimes
    you don't notice.</p>
</div>
