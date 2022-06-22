# try-catch

## `try...catch`无法用于异步代码

### 【1】同步代码

```js
try {
  foo();
} catch (error) {
  console.log('异常是：' + error);
}
```

此时会由 catch 捕捉到异常：

```
异常是：ReferenceError: foo is not defined
```

### 【2】异步代码

```js
function foo() {
  setTimeout(() => {
    bar.arr();
  }, 100);
}
try {
  foo();
} catch (error) {
  console.log(error);
}
```

此时无法捕捉，而是浏览器控制台报出未捕捉异常。

```
Uncaught ReferenceError: bar is not defined
```

### 【3】对比图

![image](https://s1.ax1x.com/2022/03/17/q9rvQA.jpg)
