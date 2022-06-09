# CSS - width 和 height

## 【1】table

Table 表格中，定了 width，如果其它的内容很高，内容少的可能会撑成一列高。

![image](https://s1.ax1x.com/2022/03/14/bOuEEn.jpg)

## 【2】不适合用 width:100%的情况

![image](https://s1.ax1x.com/2022/03/14/bOup38.jpg)

子元素`width:100%`会获取父元素长度，如果设置了`width:100%`反而适得其反。

## 【3】按钮内文字会自动换行

## 【4】box-sizing

- `content-box`：默认值
- `border-box`：将`border`变成里面消化的值

## 【5】内联元素

- `display: inline-block;`会控制当前元素以自己的内容为长度，不受父元素影响。
- 内联元素如果`display`改为了`block`，不用再设置`width:100%`。

## 【6】让元素 heigth 支持 100%的方法

◆ 方法一：设置`html`和`body`

```css
html,
body {
  heigth: 100%;
}
```

◆ 方法二：使用绝对定位

```css
height: 100%;
position: absolute;
```

## 【7】max-width/min-width 和 max-height/min-height

- 特性 1：能超越`!important`。

如下例，最终生效的是`400px`。

```html
<img src="./floor.jpeg" style="width: 300px!important;" />
```

```css
img {
  min-width: 400px;
}
```

- 特性 2：`min-width` 覆盖 `max-width`。

如果`min-width`和`max-width`冲突时，取`min-width`的值。

```css
min-width: 400px;
max-width: 350px;
```

## 【8】width 自适应关键字

- `fill-available`：撑满空间，100%
- `fit-content`：内容最大宽度。文字超过会换行。
- `max-content`：内容最大宽度。如果文字超过显示区域了也不会换行，所以会有 200%的可能。
- `min-content`：内容最小宽度。比如图片是 200px，文字是 300px，就取 200px。

## 【9】line-height 深入理解

- `line-height: 20px;`：像素
- `line-height: normal;`：常规
- `line-height: inherit;`默认
- `line-height: 150%;`：百分比
- `line-height: 1.5;`：倍数
