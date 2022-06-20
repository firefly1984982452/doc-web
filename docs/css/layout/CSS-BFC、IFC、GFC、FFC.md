# CSS - BFC、IFC、GFC、FFC

- BFC: 块级格式化上下文(block)
- IFC: 内联格式化上下文(inline)
- GFC: 网格布局格式化上下文(grid)
- FFC: 自适应格式化上下文(flex)

## 【1】BFC

- [CSDN 学习链接](https://blog.csdn.net/weixin_41819731/article/details/88594489)
- [张鑫旭学习链接](https://www.zhangxinxu.com/wordpress/2015/02/css-deep-understand-flow-bfc-column-two-auto-layout/)

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

```css
.content-box::after {
  clear: both;
  content: "";
  display: block;
}
```

邻近元素：

```css
.left {
  float: left;
}
.right {
  clear: both;
}
```

## 【2】IFC

不能有块级元素

## 【3】GFC

GridLayout 会有更加丰富的属性来控制行列

## 【4】FFC

Flexbox 定义了伸缩容器内伸缩项目该如何布局
