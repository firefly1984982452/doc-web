# CSS - @media 媒体查询

## 【1】any-hover

- [学习链接](https://www.zhangxinxu.com/wordpress/2020/01/css-any-hover-media/)

在 PC 端 hover 时背景会变色，在不具备 hover 的设备上（如移动端）下划线会消失。

```css
@media (any-hover: hover) {
  a:hover {
    background: yellow;
  }
}
@media (any-hover: none) {
  a {
    text-decoration: none;
  }
}
```

```html
<a href="#">在PC端hover时背景会变色，在不具备hover的设备上（如移动端）下划线会消失。</a>
```

## 【2】any-pointer

在 PC 端 点击 input 时与在不具备 hover 的设备上（如移动端）点击时不同的效果。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      input[type="checkbox"]:checked {
        background: gray;
      }

      @media (any-pointer: fine) {
        input[type="checkbox"] {
          -moz-appearance: none;
          -webkit-appearance: none;
          appearance: none;
          width: 15px;
          height: 15px;
          border: 1px solid blue;
        }
      }

      @media (any-pointer: coarse) {
        input[type="checkbox"] {
          -moz-appearance: none;
          -webkit-appearance: none;
          appearance: none;
          width: 30px;
          height: 30px;
          border: 2px solid red;
        }
      }
    </style>
  </head>
  <body>
    <input id="test" type="checkbox" />
    <label for="test">Look at me!</label>
  </body>
</html>
```

## 【3】aspect-ratio：纵横比

```css
@media (aspect-ratio: 1/1) {
  div {
    color: red;
  }
}
@media (min-aspect-ratio: 8/5) {
  div {
    background: yellow;
  }
}
@media (max-aspect-ratio: 2/1) {
  div {
    border: 2px solid blue;
  }
}
```

## 【4】display-mode：全屏样式

```css
@media all and (display-mode: fullscreen) {
  body {
    color: #fff;
    background-color: #f00;
    margin: 0;
    border: 5px solid #f0f;
  }
}
```

## 【5】prefers-color-scheme：适配主题

- [链接 1](https://zhuanlan.zhihu.com/p/374506516)
- [链接 2](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)

!> 目前测试 chrome、firefox、safari 浏览器兼容性均不能实现这个功能。

## 【6】prefers-reduced-motion：减少动画
