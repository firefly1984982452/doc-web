# CSS - appearance 修改默认样式

## 【1】更改`<button />`的默认样式为无

```css
button {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
```

<div class="example-box">
    <button>button 样式</button>
    <br />
    <button style="appearance:none;">文本样式</button>
</div>

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

<div class="example-box">
  <input type="checkbox" />默认复选框
  <br />
  <input id="test" type="checkbox" />更改默认复选框
</div>
