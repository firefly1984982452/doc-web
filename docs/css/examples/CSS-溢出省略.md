# CSS - 溢出省略

## 一、限定 N 行

```css
div {
  display: -webkit-box;
  overflow: hidden;
  white-space: normal !important;
  text-overflow: ellipsis;
  word-wrap: break-word;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

/* 单行 */
.table tbody > tr > td.name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS - 溢出省略 - 限定 N 行" src="https://codepen.io/firefly1984982452/embed/mdXQVOw?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/mdXQVOw">
  CSS - 溢出省略 - 限定 N 行</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

## 二、单行居中显示文字，多行居左显示，最多两行超过用省略号结尾

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS - 溢出省略 - 单行居中显示文字，多行居左显示，最多两行超过用省略号结尾" src="https://codepen.io/firefly1984982452/embed/wvyQMJj?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/wvyQMJj">
  CSS - 溢出省略 - 单行居中显示文字，多行居左显示，最多两行超过用省略号结尾</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

解析：

前 2 项条件：

```html
<h2><p>咽喉痛无发热</p></h2>
<h2><p>上呼吸道感染，咽喉痛无发热</p></h2>
<h2><p>老人主诉头晕多日，饭后胸闷，结合体检情况，考虑为交感神经。</p></h2>
```

```css
h2 {
  text-align: center;
}
p {
  text-align: left;
  display: inline-block;
}
```

第 3 项条件关键代码

```css
display: -webkit-box; // 设置display，将对象作为弹性伸缩盒子模型显示
-webkit-line-clamp: 2; // 限制在一个块元素显示的文本的行数
-webkit-box-orient: vertical; // 规定框的子元素应该被水平或垂直排列
```

配合 `overflow : hidden` 和 `text-overflow: ellipsis` 即可实现 `webkit` 内核下的多行省略

```css
p {
  display: inline-block;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

h2 {
  text-align: center;
}
```

但是单行也会居左，而不是居中，所以要同样再嵌套一层。

```css
<h2><p><em>单行居中，多行居左<em></p></h2>
```

```html
<style>
.line-clamp{
  width: 300px;
}
.line-clamp h2{
  text-align: center;
}
.line-clamp p{
  display: inline-block;
  text-align: left;
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.line-clamp em{
  display: block;
  text-align: center;
}
</style>

<div class="example line-clamp">
  <h2><p><em>单行居中，多行居左<em></p></h2>
  <h2><p>上呼吸道感染，咽喉痛无发热</p></h2>
  <h2><p>老人主诉头晕多日，饭后胸闷，结合体检情况，考虑为交感神经。</p></h2>
</div>
```

---

## 三、整块文本溢出省略

<iframe height="300" style="width: 100%;" scrolling="no" title="整块文本溢出省略" src="https://codepen.io/firefly1984982452/embed/oNEapae?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/oNEapae">
  整块文本溢出省略</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

◆ 核心：

`span`标签变成`display: inline-block;`，父标签正常的用溢出换行的代码，为了兼容`iOS/Safari`，加上`display: -webkit-box;`下面的代码实现兼容。

---
