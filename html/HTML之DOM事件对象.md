---
title: HTML之DOM对象
date: 2021-08-18 11:36:34
categories:
  - program
---

# 链接

- [菜鸟教程](https://www.runoob.com/jsref/dom-obj-event.html)
- [MDN-事件参考](https://developer.mozilla.org/zh-CN/docs/Web/Events)

# 事件对象的使用

以`onbeforeunload` 为例：

1. 在`<body>`中直接使用`onbeforeunload`

```
<body onbeforeunload="return myFunction()">

<script>
function myFunction() {
	return "我在这写点东西...";
}
</script>
```

2. 绑定 `window`对象

```
window.onbeforeunload = function (e) {
  e = e || window.event;
  // 兼容IE8和Firefox 4之前的版本
  if (e) {
    e.returnValue = '关闭提示';
  }
  // Chrome, Safari, Firefox 4+, Opera 12+ , IE 9+
  return '关闭提示';
};
```

3. 在 `addEventListener` 中监听 `beforeunload`

```
window.addEventListener("beforeunload", function (event) {
	event.returnValue = "我在这写点东西...";
});
```

# 一、鼠标事件

- `oncontextmenu`：右击
- `ondblclick`：双击

单击

- `onclick`：单击（松开鼠标）
- `onmousedown` 鼠标按钮被按下（并未松开鼠标时）
- `onmouseup` 鼠标按键被松开（松开鼠标，优先于`onclick`事件）

移入移出

- `onmouseenter` 移入
- `onmouseleave` 移出
- `onmousemove` 鼠标被移动。
- `onmouseover` 移入（支持冒泡）
- `onmouseout` 移出（支持冒泡）

## 【1】`onmousedown`、`onmouseup`、`onclick`鼠标点击的区别

◆ 优先级顺序

1. `onmousedown`
2. `onmouseup`
3. `onclick`

◆ 区别样式及代码

<p style="font-size:20px;color:#f00;" onmousedown="console.log(1)" onmouseup="console.log(2)" onclick="console.log(3)">
  点击后勿松开，然后松开后查看先后顺序
</p>

```
<p onmousedown="console.log(1)" onmouseup="console.log(2)" onclick="console.log(3)">
  点击后勿松开，然后松开后查看先后顺序
</p>
```

## 【2】`onmouseenter`、`onmousemove`、`onmouseover`鼠标移入移出的区别

◆ 优先级顺序

1. `onmouseover`
2. `onmouseenter`
3. `onmousemove`
4. `onmouseout`
5. `onmouseleave`

◆ 区别样式及代码

```
<!DOCTYPE html>
<html>

<head>
	<style>
		div {
			width: 100px;
			height: 100px;
			border: 1px solid black;
			margin: 10px;
			float: left;
			padding: 30px;
			text-align: center;
			background-color: lightgray;
		}

		p {
			background-color: white;
		}
	</style>
</head>

<body>
	<h3>该实例演示了 onmousemove, onmouseenter 和 onmouseover 的不同。</h3>
	<p> onmousemove 鼠标移动到 div 元素上。</p>
	<p> mouseenter 事件中有在鼠标指针进入 div 元素。 </p>
	<p> onmouseover 鼠标指针进入 div 元素,在子元素上也会触发(p 和 span)。</p>
	<div
		onmouseover="console.log(1)"
		onmouseenter="console.log(2)"
		onmousemove="console.log(3)"
		onmouseout="console.log(4)"
		onmouseleave="console.log(5)">
		<p>测试优先级</p>
	</div>
	<div onmousemove="myMoveFunction()">
		<p>onmousemove: <br> <span id="demo">鼠标移动到我这!</span></p>
	</div>
	<div onmouseenter="myEnterFunction()">
		<p>onmouseenter: <br> <span id="demo2">标移动到我这!</span></p>
	</div>
	<div onmouseover="myOverFunction()">
		<p>onmouseover: <br> <span id="demo3">标移动到我这!</span></p>
	</div>
	<script>
		var x = y = z = 0;
		function myMoveFunction() {
			document.getElementById("demo").innerHTML = z += 1;
		}
		function myEnterFunction() {
			document.getElementById("demo2").innerHTML = x += 1;
		}
		function myOverFunction() {
			document.getElementById("demo3").innerHTML = y += 1;
		}
	</script>
</body>

</html>
```

# 二、键盘事件

- `onkeydown` 按下键盘（捕获键值的 `keyCode` 不区分大小写）
- `onkeyup` 松开键盘
- `onkeypress` 按下并松开键盘（优先级高于 `onkeyup`），只能识别`数字`和`英文`，系统按钮（例如，箭头键和功能键）无法得到识别

## 【1】`onkeydown`、`onkeypress`、`onkeyup`键盘按下的区别

◆ 优先级顺序

1. `onkeydown`
2. `onkeypress`
3. `onkeyup`

◆ 区别样式及代码

<p style="font-size:20px;color:#f00;">
在输入框中按下普通键盘，再按下<kbd>Delete</kbd><kbd>Ctrl</kbd><kbd>Shift</kbd>和<kbd>↑</kbd><kbd>→</kbd><kbd>↓</kbd><kbd>←</kbd>键查看变化，再查看输入中英文时的变化
</p>
<input type="text" onkeydown="console.log(1)" onkeypress="console.log(2)" onkeyup="console.log(3)">
<br />
<br />

```
<input type="text" onkeydown="console.log(1)" onkeypress="console.log(2)" onkeyup="console.log(3)">
```

# 三、框架/对象（Frame/Object）事件

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

```
<img src="image.gif" onerror="myFunction()">
<p id="demo"></p>
<p>如果在加载图片时发生错误则触发函数 myFunction() 函数会弹出提示窗口。</p>

<script>
function myFunction() {
	document.getElementById("demo").innerHTML = "无法加载图片。";
}
</script>
```

## 【2】`onhashchange`用法

```
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

**电脑如果点关闭按钮后直接关闭了，可刷新时点取消重新加载网站后重试。**

```
window.addEventListener("beforeunload", function (event) {
     event.returnValue = "我在这写点东西...";
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

关闭时速度太快，看不到 `console` 信息，所以加上 `debugger` 来辅助查看信息。

```
<a href="http://www.baidu.com">跳转到百度</a>
<script>
	// 页面完成加载
	window.onload = function () {
		console.log(1);
	}
	// 页面显示
	window.onpageshow = function () {
		console.log(2);
	}
	// 页面跳转之前、关闭之前
	window.onbeforeunload = function () {
		debugger
		console.log(3);
	}
	// 页面隐藏
	window.onpagehide = function () {
		console.log(4);
	}
	// 当用户离开页面
	window.onunload = function () {
		console.log(5);
	}
</script>
```

# 四、表单事件

- `onblur` 元素失去焦点
- `onchange` 表单元素的内容改变( `<input>`, `<keygen>`, `<select>`, 和 `<textarea>`)
- `oninput` 输入
- `onreset` 重置表单
- `onsearch` 用户向搜索域输入文本时按<kbd>Enter</kbd>键触发 ( `<input="search">`)
- `onselect` 用户选取文本 ( `<input>` 和 `<textarea>`)
- `onsubmit` 表单提交

聚焦

- `onfocus` 元素获取焦点
- `onfocusin` 元素即将获取焦点
- `onfocusout` 元素即将失去焦点

## 【1】`onfocus`、`onfocusin`、`onfocusout`键盘按下的区别

◆ 优先级顺序

1. `onfocus`
2. `onfocusin`
3. `onfocusout`

◆ 区别样式及代码

<p style="font-size:20px;color:#f00;">
 打开<kbd>F12</kbd>查看获取焦点前后的信息
</p>
<input type="text" onfocus="console.log(1)" onfocusin="console.log(2)" onfocusout="console.log(3)" />
<br />
<br />

```
<input type="text" onfocus="console.log(1)" onfocusin="console.log(2)" onfocusout="console.log(3)" />
```

# 五、剪贴板事件

- `oncopy`：拷贝
- `oncut`：剪切
- `onpaste`：粘贴

# 六、打印事件

- `onafterprint`：已打印，或打印窗口已关闭
- `onbeforeprint`：打印前

# 七、拖动事件

拖动目标

- `ondragstart` 开始拖动元素时
- `ondrag` 元素正在拖动
- `ondragend` 完成元素的拖动

释放目标

- `ondragenter` 拖动的元素进入放置目标
- `ondragover` 拖动元素在放置目标上
- `ondragleave` 拖动元素离开放置目标
- `ondrop` 拖动元素放置在目标区域

◆ 优先级顺序

1. `ondragstart`
2. `ondrag`
3. `ondragenter`
4. `ondragover`
5. `ondragleave`
6. `ondrop`
7. `ondragend`

◆ 示例

[菜鸟教程-示例](https://www.runoob.com/try/try.php?filename=tryjsref_ondrag_all)

# 八、多媒体（Media）事件

- `onabort` 视频/音频终止加载。
- `oncanplay` 可以开始播放
- `oncanplaythrough` 可开始播放无需缓冲
- `ondurationchange` 时长已修改
- `onemptied` 当期播放列表为空
- `onended` 播放结束
- `onerror` 发生错误
- `onloadeddata` 加载当前帧
- `onloadedmetadata` 元数据加载完
- `onloadstart` 开始寻找指定视频
- `onpause` 已暂停
- `onplay` 开始播放
- `onplaying` 暂停或缓冲后重新开始播放
- `onprogress` 下载指定视频时播放
- `onratechange` 播放速度改变
- `onseeked` 重新定位了播放位置
- `onseeking` 重新定位视频
- `onstalled` 媒体数据不可用
- `onsuspend` 读取媒体数据终止
- `ontimeupdate` 播放位置发生改变
- `onvolumechange` 音量发生改变
- `onwaiting` 等待中，正在缓冲

◆ 示例

<p style="font-size:20px;color:#f00;">
 打开<kbd>F12</kbd>查看视频播放信息
</p>

<video 
	autoplay 
	muted 
	controls 
	oncanplay="console.log('可以开始播放')" 
	oncanplaythrough="console.log('可开始播放无需缓冲')" 
	ondurationchange="console.log('时长已修改')" 
	onended="console.log('播放结束')" 
	onerror="console.log('发生错误')" 
	onloadeddata="console.log('加载当前帧')" 
	onloadedmetadata="console.log('元数据加载完')" 
	onloadstart="console.log('开始寻找指定视频')"
	onpause="console.log('已暂停')" 
	onplay="console.log('开始播放')" 
	onplaying="console.log('暂停或缓冲后重新开始播放')" 
	onprogress="console.log('下载指定视频时播放')" 
	onratechange="console.log('播放速度改变')" 
	onseeked="console.log('重新定位了播放位置')" 
	onseeking="console.log('重新定位视频')"
	onstalled="console.log('媒体数据不可用')" 
	onsuspend="console.log('读取媒体数据终止')" 
	ontimeupdate="console.log('播放位置发生改变')" 
	onvolumechange="console.log('音量发生改变')" 
	onwaiting="console.log('等待中，正在缓冲')"> <source src="https://www.w3school.com.cn/i/movie.mp4" type="video/mp4"> </video> <br /> <br />

◆ 源码

```
<video
	autoplay
	muted
	controls
	oncanplay="console.log('可以开始播放')"
	oncanplaythrough="console.log('可开始播放无需缓冲')"
	ondurationchange="console.log('时长已修改')"
	onended="console.log('播放结束')"
	onerror="console.log('发生错误')"
	onloadeddata="console.log('加载当前帧')"
	onloadedmetadata="console.log('元数据加载完')"
	onloadstart="console.log('开始寻找指定视频')"
	onpause="console.log('已暂停')"
	onplay="console.log('开始播放')"
	onplaying="console.log('暂停或缓冲后重新开始播放')"
	onprogress="console.log('下载指定视频时播放')"
	onratechange="console.log('播放速度改变')"
	onseeked="console.log('重新定位了播放位置')"
	onseeking="console.log('重新定位视频')"
	onstalled="console.log('媒体数据不可用')"
	onsuspend="console.log('读取媒体数据终止')"
	ontimeupdate="console.log('播放位置发生改变')"
	onvolumechange="console.log('音量发生改变')"
	onwaiting="console.log('等待中，正在缓冲')">
	<source src="https://www.w3school.com.cn/i/movie.mp4" type="video/mp4">
</video>
```

# 九、动画事件

- `animationend`：`CSS动画`结束播放
- `animationiteration`：`CSS动画`重复播放
- `animationstart`：`CSS动画`开始播放

◆ 示例

[菜鸟教程-示例](https://www.runoob.com/try/try.php?filename=tryjsref_animationstart)

# 十、过渡事件

- `transitionend`：`CSS过渡`完成后

# 十一、其他事件

- `onmessage`：从对象(`WebSocket`, `Web Worker`, `Event Source` 或者`子 frame` 或`父窗口`)接收到消息
- `onmousewheel` 已废弃。 使用 `onwheel` 事件替代
- `ononline`：浏览器在线，有网络
- `onoffline` 浏览器离线，无网络
- `onpopstate` 窗口的浏览历史（`history` 对象）发生改变。
- `onshow`：不兼容
- `onstorage` `Web Storage`更新
- `ontoggle`：打开或关闭 `<details>` 元素
- `onwheel` 鼠标滚轮在元素上下滚动

◆ `onmessage`

`postMessage`和`onmessage`是`HTML5`的方法，用来解决跨页面通信，或者通过`iframe`嵌套的不同页面的通信的。`postMessage`为发送方，`onmessage`为接收方。

[链接](https://www.cnblogs.com/super-yu/p/9480589.html)

# 十二、事件对象

常量

- `CAPTURING-PHASE` 当前事件阶段为捕获阶段
- `AT-TARGET` 当前事件是目标阶段,在评估目标事件
- `BUBBLING-PHASE` 当前的事件为冒泡阶段

属性

- `bubbles`：是否是起泡事件类型
- `cancelable`：是否可取消
- `target`：元素
- `timeStamp`：时间戳
- `type`：类型

方法

- `createEvent()`：创建事件对象
- `initEvent()`：初始化事件对象
- `addEventListener()`：设置事件监听
- `handleEvent()`：处理事件对象内部逻辑
- `dispatchEvent()`：触发事件监听
- `removeEventListener()` 移除事件监听

冒泡事件和阻止默认事件

- `preventDefault()`：阻止默认事件
- `stopPropagation()`：阻止如`<a>`的默认`href`事件

◆ 事件对象的源码

```
<html>

<head>
</head>

<body>
	<p id="elementID">click</p>
	<script type="text/javascript">
		// 创建事件.
		var event = document.createEvent('Event');

		// 初始化一个点击事件，可以冒泡，无法被取消
		event.initEvent('click', true, false);

		// 可以绑定简单的函数
		var fn1 = function (e) {
			console.log(e);
		}
		// 也可以绑定复杂的由handleEvent处理的函数
		var fn2 = {
			name: 'foo',
			handleEvent: function (e) {
				console.log(e.type);
				switch (e.type) {
					case "click":
						console.log("click event");
						break;
					case "mousedown":
						console.log("mousedown event");
						break;
				}
			}
		};

		var p = document.getElementById('elementID')

		// 设置事件监听
		p.addEventListener('click', fn2, false);
		p.addEventListener('mousedown', fn2, false);

		// 触发事件监听
		p.dispatchEvent(event);

		// 3秒后取消事件监听
		setTimeout(() => {
			p.removeEventListener('click', fn2, false)
		}, 3000);
	</script>
</body>

</html>
```

# 十三、鼠标/键盘事件对象

## 属性

鼠标事件：`MouseEvent`（点击或鼠标移入）

- `altKey`：<kbd>ALT</kbd> 键是否被按下
- `shiftKey`：<kbd>SHIFT</kbd> 键是否被按下。
- `ctrlKey`：<kbd>CTRL</kbd> 键是否被按下。
- `metaKey`：<kbd>meta</kbd> 键是否被按下（Mac 中的<kbd>command</kbd>键，Windows 中的<kbd>Windows</kbd>键）
- `button`：哪个鼠标按钮被点击（1、2、3 分另代表左、中、右）。
- `clientX`：元素的水平坐标。
- `clientY`：元素的垂直坐标。
- `screenX`：鼠标指针的水平坐标。
- `screenY`：鼠标指针的垂直坐标。
- `Location`：返回按键在设备上的位置
- `relatedTarget`：返回与事件的目标节点相关的节点（鼠标移入时才有）。

键盘事件：`KeyboardEvent`

- `key`：返回按下的值。
- `charCode`：返回字母代码。
- `keyCode`：返回字母代码。
- `which`：返回字母代码。

◆ `charCode`、`keyCode`、`which`的区别

1. `keyCode`不支持 Firefox
2. `which`不支持 IE9，且被大多数编译器弃用。

## 方法

- `initMouseEvent()`：初始化鼠标事件对象【禁用】
- `initKeyboardEvent()`：初始化键盘事件对象【禁用】
