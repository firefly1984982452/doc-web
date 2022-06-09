# CSS - Functions

## css 比较函数：`min()`、`max()`、`clamp()`

可以择优选择一个最合适的尺寸，不仅用于 width，还可以用于 `font-size` 等值。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      body > * {
        color: #fff;
        height: 100px;
        background-color: #f00;
        margin: 10px 0;
        text-align: center;
      }

      header {
        width: min(50%, 500px);
      }

      main {
        width: max(50%, 500px);
      }

      footer {
        width: clamp(100px, 50%, 500px);
      }
    </style>
  </head>

  <body>
    <header>min(50%, 500px)</header>
    <main>mxn(50%, 500px)</main>
    <footer>clamp(100px,50%, 500px)</footer>
  </body>
</html>
```

---

## 移动端环境变量函数 `env()`和`constant()`

`env()`和`constant()`，是`IOS11`新增特性，`Webkit`的`css`函数，用于设定安全区域与边界的距离，有 4 个预定义变量：

- `safe-area-inset-left`：安全区域距离左边边界的距离
- `safe-area-inset-right`：安全区域距离右边边界的距离
- `safe-area-inset-top`：安全区域距离顶部边界的距离
- `safe-area-inset-bottom` ：安全距离底部边界的距离

H5 网页设置`viewport-fit=cover`的时候才生效，小程序里的`viewport-fit`默认是`cover`

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
```

```css
height: calc(96rpx+ constant(safe-area-inset-bottom)); //兼容 IOS<11.2
height: calc(96rpx + env(safe-area-inset-bottom)); //兼容 IOS>11.2
padding-bottom: constant(safe-area-inset-bottom); //兼容 IOS<11.2
padding-bottom: env(safe-area-inset-bottom); //兼容 IOS>11.2
```
