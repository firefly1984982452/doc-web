# ResizeObserver：resize 监听

`window.resize`下监听某`DOM`的改变：

```html
<textarea style="width: 100%;" id="main"></textarea>
```

```js
let mainEl = document.querySelector('#main');
var ro = new ResizeObserver((entries) => {
  console.log(entries);
});
ro.observe(mainEl);
```
