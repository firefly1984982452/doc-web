# CSS - 单位

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

## 【3】视口的相对单位

- `vm`：1/100 的视口宽度；
- `vh`：1/100 的视口高度；
- `vmax`：当前`vw`和`vh`中较大的一个值；
- `vmin`：当前`vw`和`vh`中较小的一个值；
- `vmin`、`vmax`的作用：在做移动端页面开发时，会使得文字大小在横竖屏下保持一致。

## 【4】`min-inline-size`、`max-inline-size`：最小/最大直列大小

```html
<!DOCTYPE html>
<html>
  <head>
    <title>CSS | max-inline-size Property</title>
    <style>
      h1 {
        color: green;
      }

      div {
        background-color: green;
        width: 200px;
        height: 20px;
      }

      .one {
        max-inline-size: 10px;
        background-color: cyan;
      }
    </style>
  </head>

  <body>
    <center>
      <h1>Geeksforgeeks</h1>
      <b>CSS | max-inline-size Property</b>
      <br />
      <br />
      <div>
        <p class="one">A Computer Science Portal for Geeks</p>
      </div>
    </center>
  </body>
</html>
```

## 移动端最快使用 rem 的方法

```css
html {
  font-size: calc(100vw / 7.5);
}
p {
  width: 7.5rem;
}
```
