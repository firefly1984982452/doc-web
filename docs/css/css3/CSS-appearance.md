# CSS - appearance 修改默认样式

## 【1】更改`<button />`的默认样式为无

```css
button {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
```

<iframe height="300" style="width: 100%;" scrolling="no" title="更改&lt;button /&gt;的默认样式为无" src="https://codepen.io/firefly1984982452/embed/poaQjwd?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/poaQjwd">
  更改&lt;button /&gt;的默认样式为无</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## 【2】更改`<input />`默认的大小和边框样式

```css
input#test {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  width: 30px;
  height: 30px;
  border: 2px solid red;
}
```

```html
<input id="test" type="checkbox" />
```

<style>

input#test {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  width: 30px;
  height: 30px;
  border: 2px solid red;
}
</style>

<iframe height="300" style="width: 100%;" scrolling="no" title="更改&lt;input /&gt;默认的大小和边框样式" src="https://codepen.io/firefly1984982452/embed/LYQXpLo?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/LYQXpLo">
  更改&lt;input /&gt;默认的大小和边框样式</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
