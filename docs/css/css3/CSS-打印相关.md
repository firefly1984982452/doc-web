# CSS - 打印相关

## 【1】打印方法

```js
window.print();
```

## 【2】局部打印

### 【2.1】media 属性

```css
@media screen {
  /* 只对屏幕浏览有效 */
}

@media print {
  /* 只对打印有效 */
  .noprint {
    display: none;
  }
}
```

### 【2.2】媒体查询

```css
<style type="text/css">
	@media print {
		.no{
			display: none;
		}
	}
</style>
```

## 【3】页眉页脚

```css
@media print {
  header {
    display: table-header-group;
  }

  footer {
    display: table-footer-group;
  }
}
```

## 【4】打印方向

```css
<style type="text/css" media="print">
@page {
  size: landscape !important;
}
</style>
```

- 横向打印：`size: landscape`；
- 竖向打印：`size: portrait`；
- 自动【默认】：`size: auto`。

## 【5】分页

分页符属性用来设置页面的分页（即另起一页），共有三个相关属性。

- `page-break-before`：元素之前分页；
- `page-break-after`：元素之后分页；
- `page-break-inside`：元素内部分页。

这三个属性的值都是两个：`always`（生效）和`avoid`（避免）。

```css
h1 {
  /* 总是在 h1 元素之前分页 */
  page-break-before: always;
}

section.city-map {
  /* 在元素之前和之后分页，即该元素单独占据一页 */
  page-break-before: always;
  page-break-after: always;
}

table {
  /* 表格尽可能不要分页 */
  page-break-inside: avoid;
}
```

## 【6】重复表格的表头

用`<thead>`元素定义表头，`<tbody>`元素定义表的数据

```html
<table>
  <thead>
    <tr>
      <th>City</th>
      <th>Population</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Sydney</td>
      <td>4.627 million (2018)</td>
    </tr>
  </tbody>
</table>
```

## 【7】只设置打印文档时第一页的样式

```css
@page :first {
  margin-left: 50%;
  margin-top: 50%;
}
```

!> 你不能用所有的 CSS 属性`:first`。您只能更改文档的边距，`orphans`, `widows` 和分页符。所有其他的 CSS 属性将被忽略。

## 【8】`:left`和`:right`

页面左右是由文档的主要书写方向决定的。例如，如果第一页的主要书写方向是从左到右，那么它将是一个`:right`页面，如果它具有从右到左的主要书写方向，那么它将是一个`:left`页面。

---

## 【9】print-color-adjust：打印颜色调整

<iframe height="300" style="width: 100%;" scrolling="no" title="color-adjust" src="https://codepen.io/firefly1984982452/embed/mdXvLZW?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/mdXvLZW">
  color-adjust</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
