# return 和闭包

## 【1】直接 return

```js
var a = 0;
function fn() {
  var a = 12;
  return a;
}
console.log(fn()); // 12
console.log(a); // 0
```

## 【2】return function

```js
var a = 0;
function fn() {
  var a = 12;
  return function () {
    return a;
  };
}
console.log(fn()()); // 12
console.log(a); // 0
```

## 【3】return 闭包

```js
var a = 0;
function fn() {
  var a = 12;
  return (function () {
    return a;
  })();
}
console.log(fn()); // 12
console.log(a); // 0
```

## 【4】区别

- 1.直接`return`返回的是变量，闭包返回的是执行环境（所以在`return function`部分就要`fn()()`这样调用 2 次）。
- 2.闭包不是为了让函数外部拿到内部变量，而是为了保护私有变量不被更改。
- 3.`return`出来的是一个值（`12`），不是变量本身（`a`），此处的`return`是取得私有变量值的一种方法，跟闭包没有严格关系。
