# undefined 和 void0

`undefined`和`void 0`

`undefined`在闭包时可更改：

```js
(() => {
  let undefined = 1;
  console.log(undefined);
})();
```

`void 任何值`永远都是`undefined`
