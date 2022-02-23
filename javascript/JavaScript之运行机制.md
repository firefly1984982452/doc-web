---
title: JavaScript之运行机制
date: 2020-12-08 15:44:34
categories: 
- program
---


[链接](https://www.cnblogs.com/cangqinglang/p/8963557.html)


**异步**：现在和将来的时间间隙
**并行**：能够同时发生的事情

并行：比如进程与线程，独立运行并且能同时运行。

```
fun : function(){
	func1();
	func2();
	http1();
	http2();
}
```

---

# 一、多进程

每个tab标签页有一个独立的进程（有的可能会合并）

比如：
- `Browser`进程：主进程；
- 第三方插件进程；
- `GPU`进程；
- 浏览器渲染进程。

---

# 二、单线程

浏览器的渲染进程是`多个线程`的，是多个，这些线程还是一个一个执行完了才执行下一个，所以`JS引擎是单线程`的。

比如：
- `GUI`渲染线程
- `JS`引擎线程
- 事件触发线程
- 定时触发器线程

---

# 三、浏览器渲染流程

**沉浸树（render树）**：

1. 处理`HTML`标签构建`DOM`树；
2. 处理`CSS`标签构建`CSSOM`树；
3. `DOM`和`CSSOM`树被组合形成渲染树（`render`树）；
4. 布局`render`树，计算尺寸、位置；
5. 绘制`render`树，绘制页面像素信息；
6. 发给图形处理器（`GPU`），显示在屏幕上。

**CSS是否会阻塞dom树渲染？**

由上面的流程可知，不知阻塞`DOM`树，但会阻塞`CSSOM`树。

---

# 四、事件循环（`Event Loop`）、宏任务（`macrotask`）、微任务（`microtask`）

事件循环（`Event Loop`）：执行完宏任务后，将微任务排队添加任务，执行后再循环检查有没有宏任务……所以整个过程称为事件循环。
宏任务（`macrotask`）：主代码、`setTimeout`、`setInterval`、`setImmediate(IE)`、`MessageChannel`
微任务（`microtask`）：`promise`、`process.nextTick`、`MutationObserver`

执行顺序：先宏任务--》执行结束后--》再执行所有微任务--》渲染--》下一个宏任务

```
console.log('start');

setTimeout(function() {
  console.log('1');
}, 10);

new Promise(resolve => {
    console.log('2');
    resolve();
    setTimeout(() => console.log('3'), 10);
}).then(function() {
    console.log('4')
})

console.log('end');
```

这里的执行顺序就是`start-->2-->end-->4-->1-->3`

**注意**：

```
promise是立即执行的，创建的时候就会执行，不存在将promise推入微任务；
resolve()是表示promise的状态为fullfilled，相当于只是定义了一个有状态的promise，并没有调用它；
promise调用then的前提是promise的状态为fullfilled；
只有promise调用then的时候，then里面的函数才会被推入微任务中。
```

---

# 五、WebWorker

## 【1】不使用时

```
<html>
<head>
    <meta charset="utf-8"/>
    <meta http-equiv="Content-Type" content="text/html; charset=GBK" />
    <title>计算</title>
</head>
<body>
    <p>打印1-9999的数：
      <div id="result"></div></p>
    <script type="text/javascript">
        var n = 0;
        while (n < 9999) 
        {
            n += 1;
            document.getElementById('result').innerHTML += (n + ", ");
        }
    </script>
</body>
</html>
```

## 【2】使用时

test.html
```
<!DOCTYPE html>
<html >
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>打印1-9999的数</title>
  </head>
  <body>
    <div id="app">
      打印1-9999的数：
      <div id="result" style="width: 1500px; height:auto; border:1px solid red; word-wrap: break-word; ">
    </div>
    <script>
      var worker = new Worker("./woker.js");
      worker.onmessage = function (event) {
        document.getElementById("result").innerHTML += event.data + ",";
      };
      worker.postMessage('data');
    </script>
  </body>
</html>

```

worker.js
```
onmessage = function (event) {
    var n = 1;
    while (n < 9999) {
        n += 1;
        postMessage(n);
    }
}
```

## 【3】总结

- 不使用时页面可能会卡6、7秒
- 使用后页面立马渲染DOM，下面的值可能还在加载，但上面已经能看到数据了。

创建`WebWorker`时，js引擎向浏览器申请开一个子线程（子线程是浏览器开的，完全受主线程控制，且不能操作DOM，只能把数据发送给主线程后，由主线程操作DOM）；
JS引擎是单线程的，本质上还是没有改变。

## 【4】更多

如果在本地运行，可能会找不到`webworker`，

`Uncaught DOMException: Failed to construct 'Worker'`

可以使用live-server搭建一个简单的本地服务器：

```
`npm install live-server -g`
`live-server`
```

---

# 六、setTimeout相关

`setTimeout`并不是由`JS`引擎计数的，因为单线程会阻塞，会影响计数的准确，因此通过单独线程来计时并触发。
`setTiemout`最小为4，不满会加成4。

`setTimeout`的时间假设设置为1000，不是说1秒后立马会执行，而是尽快执行，把任务添加到了队列中，如果排到它了，就立马执行。