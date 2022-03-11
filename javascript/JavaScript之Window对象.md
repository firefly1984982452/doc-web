---
title: JavaScript之Window对象
date: 2020-12-09 15:44:34
categories:
  - program
---

# ◆ 属性篇

# 一、performance 性能

1. 计算页面加载完成所需要的总时间

```
performance.timing.loadEventEnd - performance.timing.navigationStart
```

# 二、history：历史记录

1. `history.length`：历史列表中的网址数

2. `history.back`：上一下

3. `history.forword`：下一个

4. `history.go`：加载历史中某个具体的页面

# 三、数据存储：`cookie`，`localStorage`，`sessionStorage`，`indexDB`

| 特性 | cookie | localStorage | sessionStorage | indexDB |
| :-: | :-: | :-: | :-: | :-: |
| 数据生命周期 | 一般由服务器生成，可以设置过期时间 | 除非被清理，否则一直存在 | 页面关闭就清理 | 除非被清理，否则一直存在 |
| 数据存储大小 | 4K | 5M | 5M | 无限 |
| 与服务端通信 | 每次都会携带在 header 中，对于请求性能影响 | 不参与 | 不参与 | 不参与 |
| 调用 | `document.cookie` | `window.localStorage` | `window.sessionStorage` | `window.indexDB` |

# 四、location：当前 URL

## 【1】属性

```
{
    "href":"http://0.0.0.0:8080/elder/checkInEdit?elderId=579&amp;nursingLevel=5",
    "origin":"http://0.0.0.0:8080",
    "protocol":"http:",
    "host":"0.0.0.0:8080",
    "hostname":"0.0.0.0",
    "port":"8080",
    "pathname":"/elder/checkInEdit",
    "search":"?elderId=579&amp;nursingLevel=5",
    "hash":""
}
```

## 【2】方法

- `location.reload()`：刷新
- `location.replace`：替换

## 【3】扩展：获取`location.search`的对象值

用 `Object.fromEntries` 和 `URLSearchParams` 可变为普通对象

```
window.location.search = '?roomId=9&status=1&taskId=7&serviceId=1109';
var str = window.location.search.substr(1);
var p = new URLSearchParams(str);
var param = Object.fromEntries(p);
```

# 五、navigator：浏览器对象

1. `navigator.userAgent`：当前浏览器

```
export function detectiveBrowse() {
  var ua = navigator.userAgent.toLowerCase();
  var s;
  (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1]:
    (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
    (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
    (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
    (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
}
```

---

# 六、窗口

[链接](https://blog.51cto.com/dapengtalk/1883928)

- 窗口可见区域宽（控制台不算）：`innerWidth` / `document.body.clientWidth` / `document.body.offsetWidth` / `document.body.scrollWidth`
- 窗口可见区域高（控制台不算）：`innerHeight` / `document.body.clientHeight` / `document.body.offsetHeight` / `document.body.scrollHeight`
- 窗口总区域宽（控制台算）：`outerWidth`
- 窗口总区域高（控制台算）：`outerHeight`
- 浏览器：`screen`
- 浏览器距离 Left：`screenLeft` / `screenX`
- 浏览器距离 Top：`screenTop` / `screenY`

```
let clientScreenMsg =
`窗口可见区域宽（控制台不算）：window.innerWidth：${window.innerWidth}\n` +
`窗口可见区域高（控制台不算）：window.innerHeight：${window.innerHeight}\n` +
`网页可见区域宽(body)：document.body.clientWidth：${document.body.clientWidth}\n` +
`网页可见区域高(body)：document.body.clientHeight：${document.body.clientHeight}\n` +
`网页可见区域宽(body)，包括border、margin等：document.body.offsetWidth：${document.body.offsetWidth}\n` +
`网页可见区域高(body)，包括border、margin等：document.body.offsetHeight：${document.body.offsetHeight}\n` +
`网页正文全文宽，包括有滚动条时的未见区域：document.body.scrollWidth：${document.body.scrollWidth}\n` +
`网页正文全文高，包括有滚动条时的未见区域：document.body.scrollHeight：${document.body.scrollHeight}\n\n\n` +

`窗口总区域宽（控制台算）：window.outerWidth：${window.outerWidth}\n` +
`窗口总区域高（控制台算）：window.outerHeight：${window.outerHeight}\n\n\n` +

`网页被卷去的Top(滚动条)：document.documentElement.scrollTop：${document.documentElement.scrollTop}\n` +
`网页被卷去的Left(滚动条)：document.documentElement.scrollLeft：${document.documentElement.scrollLeft}\n` +
`浏览器距离Left：window.screenLeft / screenX：${window.screenLeft}、${window.screenX}\n` +
`浏览器距离Top：window.screenTop / screenY：${window.screenTop}、${window.screenY}\n` +
`屏幕分辨率的宽：window.screen.width：${window.screen.width}\n` +
`屏幕分辨率的高：window.screen.height：${window.screen.height}\n` +
`屏幕可用工作区的宽：window.screen.availWidth：${window.screen.availWidth}\n` +
`屏幕可用工作区的高：window.screen.availHeight：${window.screen.availHeight}\n`;
console.log(clientScreenMsg);
```

- devicePixelRatio: 设备像素比

一般的电脑显示器都是 1 倍，但有部分笔记本电脑的分辨率是 2 倍。

# 七、Number和window通用的属性

1. `window.isFinite`：是否为数字型
2. `window.isInteger`：是否为整数
3. `window.isNaN`：是否为`NaN`

这些属性既可以通过`window`调用，也可以通过`Number`调用。

4. `window.Infinity` 无穷大

---

# ◆ 方法篇

# 八、英文 base64 转码：`btoa` 和 `atob` 实现

```
var string = 'Hello World!';
btoa(string) // "SGVsbG8gV29ybGQh"
atob('SGVsbG8gV29ybGQh') // "Hello World!"
```

# 九、中文 base64 转码：`escape`、`encodeURI` 和 `encodeURIComponent` 实现

```
function b64Encode(str) {
  return btoa(encodeURIComponent(str));
}

function b64Decode(str) {
  return decodeURIComponent(atob(str));
}

b64Encode('你好') // "JUU0JUJEJUEwJUU1JUE1JUJE"
b64Decode('JUU0JUJEJUEwJUU1JUE1JUJE') // "你好"

```

其中，`encodeURIComponent`换成`escape`和`encodeURI`都可以实现此功能

区别：

1. `escape`适合不含 URI 的纯`string`；
2. `encodeURIComponent`会把 `http://`编码成`http%3A%2F%2F`而`encodeURI`却不会。

# 十、计时器

- `setInterval()`
- `setTimeout()`
- `setImmediate()`（IE 用）

# 十一、取消计时器

- `clearInterval()`
- `clearTimeout()`
- `clearImmediate()`（IE 用）

# 十二、重绘更新动画

- `window.requestAnimationFrame`
- `window.cancelAnimationFrame`

用法：

1. 使用 `requestAnimationFrame` 手动反复调用动画
2. 使用 `requestAnimationFrame` 染几万条数据并不卡住界面
3. JS 使用 `requestAnimationFrame` 加载 `animation` 动画

# 十三、打印：print

```
window.print();
```

# 十四、MessageChannel：管道通信

## 【1】MessageChannel 的基本使用

```
const {port1, port2} = new MessageChannel();
port1.onmessage = function(d) {
    console.log(`port1接收的消息是：${d.data}`);
}
port2.onmessage = function(d) {
    console.log(`port2接收的消息是：${d.data}`);
}
port1.postMessage('port1发送的消息');
port2.postMessage('port2发送的消息');
```

port1 发送的由 port2 接收，port2 发送的由 port1 接收。

也就是说，传过去的对象，接收到的时候已经不是原来的引用和指针了，这个时候再 return 出来，就是一个新的对象，所以肯定能实现深拷贝。

## 【2】使用 MessageChannel 实现深拷贝

```
var obj = {id:1,name:{a:'xx'}};

function structuralClone(obj) {
    return new Promise((resolve) => {
        const {port1, port2} = new MessageChannel();
        port2.onmessage = ev => resolve(ev.data);
        port1.postMessage(obj);
    })
}
structuralClone(obj).then(res=>{
    console.log(res);
    var obj3 = res;
    obj3.name.a = 'obj3';
    console.log(obj,obj3);
})

<!-- 用promise是为了好传数据 -->
```

## 【3】MessageChannel 实现 vue.$nexttick

```
<!DOCTYPE html>

<html lang="en-zh">
  <head>
    <meta charset="utf-8" />
    <style type="text/css">
    </style>
  </head>
  <body>
    <div id="app">
      <div v-if="isShow">
          <input type="text" ref="userName" />
      </div>
      <button @click="showInput">点击显示输入框</button>
    </div>
  </body>
</html>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
  var app = new Vue({
    el: '#app',
    data: {
      isShow: false
    },
    methods: {
      showInput(){
        this.isShow = true;
        this.myNextTick(() => {
          this.$refs.userName.focus();
        })
      },
      myNextTick(fanc){
        var that = this;
        const ch = new MessageChannel();
        const port1 = ch.port1;
        const port2 = ch.port2;

        port2.onmessage = (() => {
          fanc();
        })
        port1.postMessage(1);

      }
    }
  })
</script>

```

---

# 十五、window.postMessage

知识点：

- `addEventListener`监听的必须是`'message'`
- `window.postMessage`发送的必须是自己的`域名`

[学习链接](https://blog.csdn.net/weixin_40650646/article/details/81777398)

需求：在页面 a,里打开新窗口 b，在 b 窗口里点击 postMessage 按钮，能够在 a 页面收到发来的消息

页面 A：

```
<button onClick="test()">open</button>

...

<script>
    function test() {

        let op = window.open('b.html', '_blank'); //打开新窗口，并建立窗口的引用变量op

        function receiveMessage(event) {
            console.log('event', event);
        }

        op.addEventListener("message", receiveMessage, false); //监听新开窗口发来的消息
    }
</script>
```

页面 B：

```
window.postMessage("hi there!", location.origin);
```

此时点击页面 B 的发送消息按钮就能在页面 A 接收消息了。

---

# 十六、window.showOpenFilePicker：显示打开文件的弹框

上传文件，达到`<input type="file">`的功能

[链接](https://www.zhangxinxu.com/study/202108/button-picker-file-upload.php)

---

# 十七、HTML 事件属性

[HTML 事件属性列表](https://www.w3school.com.cn/tags/html_ref_eventattributes.asp)

所有的事件都可以由 window 监听：

```
window.addEventListener('storage', (e) => {})
```

# `windows.copy`