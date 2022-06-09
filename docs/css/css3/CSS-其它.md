# CSS - 其它

## 【1】`resize` 属性

```css
resize: both;
overflow: hidden;
```

<div class="example-box">
  <p style="border:1px solid;resize:both;overflow: hidden;">resize属性规定是否由用户调整元素大小，拖动鼠标调整大小。</p>
</div>

!> 子元素要比父元素大；<br /> 一定要写上`overflow: hidden;`

## 【2】z-index 属性

如果父元素的 z-index 很低，并且被其它元素遮住，那子元素的 z-index 再大也不会显示在最上面。

```css
.A {
  z-index: 1;
  .a {
    z-index: 99;
  }
}
.B {
  z-index: 2;
}
```

## 【3】`-webkit-box-reflect`：倒影

- [MDN](https://developer.mozilla.org/de/docs/Web/CSS/-webkit-box-reflect)

!> 仅 chrome 生效

```css
img {
  -webkit-box-reflect: below;
}
```

<div class="example-box" style="height:250px">
  <img style="-webkit-box-reflect: below;" height="100px" src="https://s1.ax1x.com/2022/03/11/bI6bE8.png">
</div>

---
