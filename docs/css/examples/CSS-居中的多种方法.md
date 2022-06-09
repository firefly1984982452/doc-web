# CSS - 居中的多种方法

## 【1】预览

[案例预览](https://firefly1984982452.github.io/css-center/) [案例下载地址](https://github.com/firefly1984982452/css-center)

## 【2】布局

### 【2.1】设置背景宽和高都是 100%

```css
html,
body {
  height: 100%;
}
.box {
  height: 100%;
}
```

### 【2.2】html 页面

```html
<div class="box">
  <div class="item">item</div>
</div>
```

### 【2.3】基础的 CSS

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body {
  height: 100%;
}
.box {
  width: 100%;
  height: 100%;
  background-color: #f7b2bb;
}

.item {
  width: 50%;
  height: 100px;
  background-color: #1296db;
  text-align: center;
  line-height: 100px;
  color: #fff;
}
```

!> 因为我的布局很简单，页面也不多，所以我用了`*`号选择器

## 【3】absolute 方法实现

### 【3.1】固定宽高

```css
.box {
  position: relative;
}
.item {
  position: absolute;
  width: 200px;
  height: 100px;
  left: 50%;
  top: 50%;
  margin-left: -100px;
  margin-top: -50px;
}
```

### 【3.2】百分比宽高

```css
.box {
  position: relative;
}
.item {
  width: 50%;
  height: 20%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
```

!> 重点：`transform: translate(-50%,-50%);`

## 【3】块级元素实现水平居中

```css
.box {
  position: relative;
}
.item {
  width: 50%;
  margin: 0 auto;
}
```

## 【4】flex 方法实现

```css
.box {
  display: flex;
  justify-content: center;
  align-items: center;
}
.item {
}
```

## 【5】文本居中

- 文字水平居中：`text-align:center;`

- 文字垂直居中：`line-height:height`
