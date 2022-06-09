# CSS - 溢出省略

## 限定 N 行

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

<div class="example-box">
  <p style="width:300px;display: -webkit-box;
overflow: hidden;
white-space: normal!important;
text-overflow: ellipsis;
word-wrap: break-word;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;">日历中的历法又分为阴历、阳历和阴阳合历,三种。 阳历亦即太阳历,其历年为一个回归年,现时国际通用的公历(格里高利历)和中国的干支历即属于太阳历这类。</p>
</div>

---

## 单行居中显示文字，多行居左显示，最多两行超过用省略号结尾

<style>
.line-clamp{
  width: 400px;
  border: 1px solid #000;
}
.line-clamp h2{
  text-align: center;
  margin: 0!important;
  color: #ee2746!important;
  font-size: 1.3em!important;
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
.line-clamp b{
  display: block;
  text-align: center;
}
</style>

<div class="example-box">
  <div class="line-clamp">
    <h2><p><b>单行居中显示文字。<b></p></h2>
    <h2><p>单行居中显示文字，多行居左显示。</p></h2>
    <h2><p>单行居中显示文字，多行居左显示，最多两行，超过用省略号结尾。</p></h2>
  </div>
</div>

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

## 整块文本溢出省略

<iframe height="300" style="width: 100%;" scrolling="no" title="整块文本溢出省略" src="https://codepen.io/firefly1984982452/embed/oNEapae?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/oNEapae">
  整块文本溢出省略</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

◆ 核心：

`span`标签变成`display: inline-block;`，父标签正常的用溢出换行的代码，为了兼容`iOS/Safari`，加上`display: -webkit-box;`下面的代码实现兼容。

---
