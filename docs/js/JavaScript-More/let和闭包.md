# let 和闭包

## 【1】let 劫持作用域

**用 var 时**

```js
console.log(str);
var str = 'hello';
```

打印出`undefined`。

相当于

```js
var str;
console.log(str);
str = 'hello';
```

用 var 的话，变量名会提升，但并不会赋值。

**用 let 时**

```js
console.log(str);
let str = 'hello';
```

报错`VM67161:1 Uncaught ReferenceError: str is not defined`

这里相当于直接`console.log('未定义变量名')`，此时的 let 已经劫持了 var 的作用域。

## 【2】用闭包作用域解释为什么用 let 的 for 循环可以劫持数据。

假设我们想每隔 1 秒分别打印 1、2、3、4、5。

```js
for (var i = 1; i < 6; i++) {
  console.log(i);
  setTimeout(() => {
    console.log('print' + i);
  }, 1000 * i);
}
```

会打印 1、2、3、4、5，然后每隔 1 秒打印一次`'print6'`.

因为`任务流`的关系，console.log(i)会先于 setTimeout 执行，等 for 循环的 6 次 console 执行完之后，队列里的 setTimeout 才会依次执行，而这个时候的 i 已经是 6 了。

用 let 可以劫持 i 的作用域。

```js
for (var i = 1; i < 6; i++) {
  let j = i;
  console.log(j);
  setTimeout(() => {
    console.log('print' + j);
  }, 1000 * j);
}
```

此时就是先打印 1、2、3、4、5，然后每隔 1 秒打印'print1'、'print2'...'print5'。但是，每次都会有新的 j 替代原来的 j，所以可以直接在 for 循环里面定义 let i = 1;

```js
for (let i = 1; i < 6; i++) {
  console.log(i);
  setTimeout(() => {
    console.log('print' + i);
  }, 1000 * i);
}
```
