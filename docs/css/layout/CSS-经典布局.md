# CSS-经典布局

- [阮一峰的博客链接](https://www.ruanyifeng.com/blog/2020/08/five-css-layouts-in-one-line.html)

## 【1】空间居中布局

<iframe height="300" style="width: 100%;" scrolling="no" title="01. Centered AF" src="https://codepen.io/una/embed/YzyYbBx?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/una/pen/YzyYbBx">
  01. Centered AF</a> by Una Kravets (<a href="https://codepen.io/una">@una</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

```css
.container {
  display: grid;
  place-items: center;
}
```

## 【2】并列式布局

核心：`flex: 0 1 150px;`

<iframe height="300" style="width: 100%;" scrolling="no" title="02. Deconstructed Pancake" src="https://codepen.io/una/embed/WNQdBza?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/una/pen/WNQdBza">
  02. Deconstructed Pancake</a> by Una Kravets (<a href="https://codepen.io/una">@una</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

```css
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.item {
  flex: 0 1 150px;
  margin: 5px;
}
```

## 【3】两栏式布局

<iframe height="300" style="width: 100%;" scrolling="no" title="03. Sidebar Says" src="https://codepen.io/una/embed/gOaNeWL?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/una/pen/gOaNeWL">
  03. Sidebar Says</a> by Una Kravets (<a href="https://codepen.io/una">@una</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

```css
.container {
  display: grid;
  grid-template-columns: minmax(150px, 25%) 1fr;
}
```

## 【4】三明治布局

<iframe height="300" style="width: 100%;" scrolling="no" title="04: Pancake Stack (Header, Main, Footer)" src="https://codepen.io/una/embed/bGVXPWB?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/una/pen/bGVXPWB">
  04: Pancake Stack (Header, Main, Footer)</a> by Una Kravets (<a href="https://codepen.io/una">@una</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

```css
.container {
  display: grid;
  grid-template-rows: auto 1fr auto;
}
```

## 【5】圣杯布局

<iframe height="300" style="width: 100%;" scrolling="no" title="05: Holy Grail" src="https://codepen.io/una/embed/mdVbdBy?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/una/pen/mdVbdBy">
  05: Holy Grail</a> by Una Kravets (<a href="https://codepen.io/una">@una</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

```html
<div class="container">
  <header />
  <div />
  <main />
  <div />
  <footer />
</div>
```

```css
.container {
  display: grid;
  grid-template: auto 1fr auto / auto 1fr auto;
}
```

---

# 左边定宽，右边自适应

- 使用`flex`
- 右边的`width: calc(100% - 100px)`
- 使用`float`

---

# 满屏背景和固定宽度

```css
main {
  width: 1000px; // 可不写
  margin: 0 calc(50% - 500px;);
}
```

<iframe height="300" style="width: 100%;" scrolling="no" title="不写width来居中内容" src="https://codepen.io/firefly1984982452/embed/rNJqJVW?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/rNJqJVW">
  不写width来居中内容</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
---
