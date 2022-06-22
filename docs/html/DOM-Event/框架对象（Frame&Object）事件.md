# 框架对象（Frame&Object）事件

- `onabort`：图像的加载被中断（没找到实例）。
- `onerror`：在加载文档或图像时发生错误。 ( `<object>`, `<body>`和 `<frameset>`)
- `onhashchange`：`URL` 的锚部分发生修改。
- `onresize`：窗口调整大小
- `onscroll`：文档滚动

加载完成

- `onload`：页面或图像完成加载。
- `onpageshow`：用户访问页面
- `onbeforeunload`：即将离开页面（刷新或关闭）
- `onpagehide`：用户离开当前网页跳转到另外一个页面
- `onunload`：用户退出页面。 ( `<body>` 和 `<frameset>`)

## 【1】`onerror`用法

```html
<img src="image.gif" onerror="myFunction()" />
<p id="demo"></p>
<p>如果在加载图片时发生错误则触发函数 myFunction() 函数会弹出提示窗口。</p>

<script>
  function myFunction() {
    document.getElementById('demo').innerHTML = '无法加载图片。';
  }
</script>
```

## 【2】`onhashchange`用法

```html
<a href="#id1">id1</a>
<a href="#id2">id2</a>
<h1 id="id1">第一个</h1>
<h1 id="id2">第二个</h1>
<script>
  window.onhashchange = function (e) {
    console.log(e);
  };
</script>
```

## 【3】`onbeforeunload` 用法

!> 电脑如果点关闭按钮后直接关闭了，可刷新时点取消重新加载网站后重试。

```js
window.addEventListener('beforeunload', function (event) {
  event.returnValue = '我在这写点东西...';
});
```

## 【4】`onload`、`onpageshow`、`onbeforeunload`、`onpagehide`、`onunload`的区别

◆ 优先级顺序

1. `onload`
2. `onpageshow`
3. `onbeforeunload`
4. `onpagehide`
5. `onunload`

◆ 区别样式及代码

?> 关闭时速度太快，看不到 `console` 信息，所以加上 `debugger` 来辅助查看信息。

```html
<a href="http://www.baidu.com">跳转到百度</a>
<script>
  // 页面完成加载
  window.onload = function () {
    console.log(1);
  };
  // 页面显示
  window.onpageshow = function () {
    console.log(2);
  };
  // 页面跳转之前、关闭之前
  window.onbeforeunload = function () {
    debugger;
    console.log(3);
  };
  // 页面隐藏
  window.onpagehide = function () {
    console.log(4);
  };
  // 当用户离开页面
  window.onunload = function () {
    console.log(5);
  };
</script>
```
