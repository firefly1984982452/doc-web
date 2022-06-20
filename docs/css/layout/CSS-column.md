# CSS - column

- [MDN-学习链接](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)

```css
columns: 3;
```

```css
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
h1 {
  /* 跨越所有的列【一般用于标题】 */
  column-span: all;
}
section {
  /* 一整段内容不换页 */
  break-inside: avoid;
}
```

<div class="example-box">
  <div class="container" style="columns: 3;">
  <h1>Simple multicol example</h1>

  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate.
  Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse
  ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit
  quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>

</div>

</div>
