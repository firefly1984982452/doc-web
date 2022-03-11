---
title: CSS之网页布局
date: 2021-03-24 14:19:32
categories:
  - program
---

# 一、正常布局流

---

# 二、弹性盒子：flex

## 规范

```
<div class="box">
  <div class="item"></div>
</div>
```

## 示例

```
.box{
  width: 400px;
  height: 400px;
  border: 1px solid #f7b2bb;
  display: flex;
  /*flex-direction: row;//方向
  flex-wrap: wrap; //换行 */
  flex-flow: row wrap;
  justify-content: space-between;//内容
  align-content: space-between;//
}
.item{
  width: 100px;
  height: 100px;
  background: #f7b2bb;
  color: #fff;
  border: 1px solid #eee;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /*flex-grow: 3;*/
}
```

## flex 居中最简单的一种方式

```
.father {
  display: flex;
}
.child {
  margin: auto;
}
```

## flex 中最后一个元素右对齐

```
.father{
  justify-content:space-between;
}
.child{
  margin-left: auto;
}
```

## 语法

### 【1】容器的属性

- `flex-direction`：方向
- `flex-wrap`：是否换行
- `flex-flow`：`flex-direction`属性和`flex-wrap`属性的简写形式
- `justify-content`：项目在主轴对齐方式
- `align-items`：项目在交叉轴对齐方式
- `align-content`：项目在多根轴线的对齐方式

### 【2】项目的属性

- `order`：排序
- `flex-grow`：放大比例
- `flex-shrink`：缩小比例
- `flex-basis`：占用主轴空间、初始空间
- `flex`：是`flex-grow`、`flex-shrink`和`flex-basis`的缩写
- `align-self`：单个项目的不一样的方式

## gap

```
ul {
  display: flex;
  border: 1px solid #f00;
  flex-wrap: wrap;
  gap: 20px 50px;
}

li {
  width: 300px;
  height: 300px;
  border: 1px solid #f00;
}
```

---

## flex 中的 `justify-content: space-evenly`

◆ **均匀分布**

```
justify-content: space-between; // 两端
justify-content: space-around; // 两端间隙相等，项目中间的间隙比较大
justify-content: space-evenly; // 两端与项目中间的间隙一样大
```

◆ 区别：

![image](https://wx2.sinaimg.cn/mw690/0069qZtTgy1gidesq1po8j30970c4mxc.jpg)

◆ **IOS 之类的兼容性用 before 和 after**

```
container{
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;
       //justify-content: space-evenly;
      &:before,
      &:after {
          content: '';
          display: block;
    }
}
```

---

# 三、网格布局：grid

## 【1】基本使用

```
display: grid;
<!-- 列的排列 -->
grid-template-columns: 1fr 1fr 1fr 1fr;
<!-- 列间距 -->
grid-column-gap: 0.4rem;
<!-- 行的排列 -->
grid-template-rows: 1fr 1fr 1fr;
<!-- 行间距 -->
grid-row-gap: 0.3rem;
```

- [阮一峰的学习链接-grid](http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)
- [其它-grid](https://juejin.cn/post/6854573220306255880#heading-22)

## 【2】place-content

`place-content` 属性是`align-content` 和 `justify-content`的简写。

`place-items`和`place-self`上同。

```
display: grid;
place-content: center;
```

## 【3】grid-template-columns 更多属性

### 【3.1】响应式布局`auto-fit`

```
width: 100%;
height: 400px;
display: grid;
grid-gap: 10px;
grid-template-columns: repeat(auto-fit, 100px);
```

重点：`grid-template-columns: repeat(auto-fit, 100px);`代表以 `100px` 为子元素长度，自动排一行的数量，当一行不够时自动换行。

### 【3.2】跨越所有列`1 / -1`

```
.fullwidth {
  grid-column: 1 / -1;
}
```

重点：`1 / -1`是指从第 1 列开始，直到最后一列结束，即铺满整行。

---

# 四、浮动布局：float

---

# 五、定位：position

- `relative`：略
- `absolute`：略
- `fixed`：略
- `sticky`

## abosolute

如果同时设置 left 和 right，相当于隐式的给了宽度。top 和 bottom 同理。

```
position: absolute;
left: 30px;
right: 30px;
```

## sticky：粘性布局

重点：

```
position: sticky;
top: 0;
```

`sticky`必须指定 `top`, `right`, `bottom` 或 `left` 四个阈值其中之一，才可使粘性定位生效。否则其行为与相对定位相同。

---

# 六、多列布局：column

[MDN-学习链接](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)

```
columns: 3;
```

```
.main {
  color: #f00;
  /* 设置列数 */
  column-count: 2;
  /* 设置每列宽度 */
  column-width: 200px;
  /* 间隙大小 */
  column-gap: 20px;
  /* 间隙样式 */
  column-rule: 1px dotted #000;
}
h1{
  /* 跨越所有的列【一般用于标题】 */
  column-span: all;
}
section{
  /* 一整段内容不换页 */
  break-inside: avoid;
}
```

---

# 七、BFC、IFC、GFC、FFC

- BFC: 块级格式化上下文(block)
- IFC: 内联格式化上下文(inline)
- GFC: 网格布局格式化上下文(grid)
- FFC: 自适应格式化上下文(flex)

## 【1】BFC

- [CSDN 学习链接](https://blog.csdn.net/weixin_41819731/article/details/88594489)
- [张鑫旭学习链接](https://www.zhangxinxu.com/wordpress/2015/02/css-deep-understand-flow-bfc-column-two-auto-layout/))

### 【1.1】原则

`BFC`是特性（功能），不是定义。

◆ 表现原则：内部再怎样变化不会影响外部元素。

◆ BFC 要做的是：在内部元素样式变化之后，用代码将它变统一

◆ BFC 要实现的 2 个功能：

- 父元素包裹住子元素
- 兄弟元素之间划清界限

### 【1.2】怎样触发

- 根元素或其它包含它的元素
- 浮动元素 (元素的 float 不是 none)
- 绝对定位元素 (元素具有 position 为 absolute 或 fixed)
- 内联块 (元素具有 display: inline-block)
- 表格单元格 (元素具有 display: table-cell，HTML 表格单元格默认属性)
- 表格标题 (元素具有 display: table-caption, HTML 表格标题默认属性)
- 具有 overflow 且值不是 visible 的块元素，
- display: flow-root
- column-span: all 应当总是会创建一个新的格式化上下文，即便具有 column-span: all 的元素并不被包裹在一个多列容器中。

### [1.3]怎样清除浮动

◆ 清除浮动方法

- 1、使用空元素`clear:both`
- 2、父元素`overflow:hidden`
- 3、使用邻近元素`clear:both`
- 4、使用伪类`:before`元素`clear:both`
- 5、父元素`display: flow-root`

父元素：

```
.content-box::after{
  clear: both;
  content: '';
  display: block;
}
```

邻近元素：

```
.left{
  float: left;
}
.right{
  clear: both;
}
```

## 【2】IFC

不能有块级元素

## 【3】GFC

GridLayout 会有更加丰富的属性来控制行列

## 【4】FFC

Flexbox 定义了伸缩容器内伸缩项目该如何布局

---

# 八、content-visibility：内容可见性

和`visibility: hidden;`有类似效果，能够占位。其它用处没有测出来。

css

```
<style>
  .hidden {
    content-visibility: hidden;
    contain-intrinsic-size: 0 500px;
  }
  .visible {
    content-visibility: visible;
  }
  p {
    display: none;
  }
  div {
    visibility: hidden;
  }
</style>
```

html

```
<main>
  <p>3223</p>
  <div>test</div>
  <section class="hidden">555</section>
  <section class="visible">666</section>
</main>
```

# 九、五种 CSS 经典布局

[阮一峰的博客链接](https://www.ruanyifeng.com/blog/2020/08/five-css-layouts-in-one-line.html)

◆ 【1】空间居中布局

[CodePen](https://codepen.io/una/pen/YzyYbBx) 示例

```
.container {
    display: grid;
    place-items: center;
}
```

◆ 【2】并列式布局

核心：`flex: 0 1 150px;`

[CodePen](https://codepen.io/una/pen/WNQdBza) 示例

```
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.item{
   flex: 0 1 150px;
   margin: 5px;
}
```

◆ 【3】两栏式布局

[CodePen](https://codepen.io/una/pen/gOaNeWL) 示例

```
.container {
    display: grid;
    grid-template-columns: minmax(150px, 25%) 1fr;
}
```

◆ 三明治布局

[CodePen](https://codepen.io/una/pen/bGVXPWB) 示例

```
.container {
    display: grid;
    grid-template-rows: auto 1fr auto;
}
```

◆ 圣杯布局

[CodePen](https://codepen.io/una/pen/mdVbdBy) 示例

HTML

```
<div class="container">
    <header/>
    <div/>
    <main/>
    <div/>
    <footer/>
</div>
```

CSS

```
.container {
    display: grid;
    grid-template: auto 1fr auto / auto 1fr auto;
}
```
