# CSS - user-select 用户选择

```css
user-select: auto | text | none | contain | all;
```

有时候用`<p>`标签默认鼠标能选中文字，这时可以使用`user-select: none`来禁止点击文字之后处于选中状态，也能避免复制能操作。

<div class="example-box">
  <p style="user-select: none">无法选中</p>
</div>
