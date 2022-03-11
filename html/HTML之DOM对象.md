---
title: HTML之DOM对象
date: 2021-07-12 17:44:34
categories:
  - program
---

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="css,result" data-user="zshuai34" data-slug-hash="WNNzeZZ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="WNNzeZZ">
  <span>See the Pen <a href="https://codepen.io/zshuai34/pen/WNNzeZZ">
  WNNzeZZ</a> by zshuai34 (<a href="https://codepen.io/zshuai34">@zshuai34</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

# 链接

- [菜鸟教程](https://www.runoob.com/jsref/dom-obj-document.html)
- [w3cschool](https://www.w3school.com.cn/js/js_htmldom_document.asp)

# 一、DOM Dcoument 对象集合

元素

- `all`：所有标签
- `anchors`：[所有超链接（带 name 属性）](https://www.runoob.com/try/try.php?filename=tryjsref_doc_anchors)
- `embeds`：[文档中所有嵌入的内容（embed）集合](https://www.runoob.com/try/try.php?filename=tryjsref_doc_embeds)
- `forms`：[所有表单](https://www.runoob.com/try/try.php?filename=tryjsref_doc_forms)
- `images`：[所有图片](https://www.runoob.com/try/try.php?filename=tryjsref_doc_images)
- `links`：[所有链接](https://www.runoob.com/try/try.php?filename=tryjsref_doc_links)
- `scripts`：[所有脚本](https://www.runoob.com/try/try.php?filename=tryjsref_doc_scripts)

域名、地址

- `domain`：域名【`localhost`】
- `documentURI`：文档的位置【`http://localhost:8080/#/`】
- `baseURI`：基础 URI【`http://localhost:8080/#/`】
- `URL`：完整的 URL【`http://localhost:8080/#/`】

状态及信息

- `doctype`：文档类型声明
- `readyState`：文档状态 (载入中……)
- `cookie`：页面`cookie`
- `title`：名称
- `activeElement`：[当前获取焦点元素](https://www.runoob.com/try/try.php?filename=tryjsref_document_activeelement)
- `adoptNode`：[从另外一个文档返回 adapded 节点到当前文档](https://www.runoob.com/try/try.php?filename=tryjsref_document_adoptnode)
- `documentElement`：文档的根节点（如`HTML`）
- `implementation`：检查是否有功能`HTML DOM`
- `importNode()`：[把一个节点从另一个文档复制到该文档](https://www.runoob.com/try/try.php?filename=tryjsref_document_importnode)
- `inputEncoding`：文档的编码方式（如`UTF-8`）
- `lastModified`：最后修改的时间
- `normalize()`：[删除空文本节点，并连接相邻节点](https://www.runoob.com/try/try.php?filename=tryjsref_document_normalize)
- `visibilityState`：页面显示状态
- `hidden`：隐藏页面
- `referrer`：上一页地址

查找 HTML 元素

- `getElementById()`：指定 id 的第一个对象
- `getElementsByClassName()`：所有指定类名的元素集合
- `getElementsByName()`：指定名称的对象
- `getElementsByTagName()`：指定标签名的对象
- `querySelector()`：匹配指定的 CSS 选择器的第一元素
- `querySelectorAll()`：匹配的 CSS 选择器的所有元素节点列表

写入

- `write()`：写入
- `writeln()`：写入并换行
- `open()`：[打开一个流](https://www.runoob.com/try/try.php?filename=tryjsref_doc_open)，以收集来自任何 `write()` 或 `writeln()` 方法的输出
- `close()`：关闭用 `open()` 方法打开的输出流，并显示选定的数据

状态监听

- `addEventListener()`：添加监听
- `removeEventListener()`：移除监听

创建元素、节点

- `createElement()`：创建元素节点
- `createTextNode()`：创建文本节点
- `createAttribute()`：创建一个属性节点
- `createComment()`：可创建注释节点
- `createDocumentFragment()`：创建空的 `DocumentFragment` 对象，并返回此对象

---

## ◆ addEventListener

**addEventListener 的第 3 个参数**

[MDN 链接](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener)

第 3 个参数可为`useCapture`（`Boolean`），也可为`options`（`Object`）：

1. [useCapture](https://blog.csdn.net/u011456552/article/details/52610754)：为`true`时捕捉冒泡事件，`false` 就是从子元素到父元素，`true` 就是从父到子。

2. options

- 2.1 `capture`: 同 [useCapture]。
- 2.2 `once`: 只监听一次
- 2.3 `passive`: 设置为 `true` 时，表示 `listener` 永远不会调用 `preventDefault()`。如果 `listener` 仍然调用了这个函数，客户端将会忽略它并抛出一个控制台警告。

◆ `once`例子：

```
window.addEventListener('click', () => {
  console.log('click')
}, { once: true })
```

◆ `passive`例子：

```
<script>
document.getElementById("myAnchor").addEventListener("click", function (event) {
	event.preventDefault()
	console.log('禁止访问');
}, {
	passive: true
});
</script>


<a id="myAnchor" href="https://w3school.com.cn/" target="blank">访问 W3School.com.cn</a>

```

◆ 使用 `passive` 改善的滚屏性能

`passive` 的默认值为 `false` 时，性能会降低，所以某些浏览器（特别是 Chrome 和 Firefox）已经将 `passive` 的默认值改为了 `true`。这可以防止事件监听器，所以滚动页面时无法阻止页面呈现。

## ◆ visibilityState 和 hidden：页面隐藏状态

```
addEventListener('visibilitychange', function () {
  console.log(hidden,visibilityState)
  // 用户离开了当前页面
  if (visibilityState === 'hidden' || hidden === true) {
    title = '页面不可见';
  }

  // 用户打开或回到页面
  if (visibilityState === 'visible' || hidden === false) {
    title = '页面可见';
  }
});
```

区别

- `hidden`：是否隐藏，只返回`true`和`false`；
- `visibilityState`：具体状态，有`hidden`、`visible`、`prerender`（正在渲染中）

## ◆ referrer：上一页地址

返回上一页的地址，可以处理如移动端直接进入到详情页时，用`history.go(-1)`和`history.back()`无效时可用`referrer`

[直接进入此详情页时点返回会返回到首页](https://m.qidian.com/author/402631776)

```
if(document.referrer === '') {
  window.location.href = 'https://www.baidu.com/'
} else {
  history.back();
}
```

# 二、DOM Element 元素对象

属性

- `style`：元素的样式属性
- `tabIndex`：元素的标签顺序。
- `tagName`：标记名（大写）
- `textContent`：文本内容
- `title`：元素的 title 属性
- `id`：元素的 id。
- `lang`：元素的语言。
- `namespaceURI`：命名空间的 URI
- `attributes`：元素的属性数组
- `classList`：[元素的所有类名](https://www.runoob.com/try/try.php?filename=tryjsref_element_classlist_add)
- `className`：元素的 class 属性
- `dir`：[一个元素中的文本方向](https://www.runoob.com/try/try.php?filename=try_dom_body_dir)

其它操作

- `accessKey`：[alt+快捷键设置](https://www.runoob.com/try/try.php?filename=tryjsref_anchor_accesskey)
- `cloneNode()`：[克隆某个元素](https://www.runoob.com/try/try.php?filename=tryjsref_node_clonenode)
- `focus()`：[获取元素焦点](https://www.runoob.com/try/try.php?filename=tryjsref_html_blur)
- `blur()`：移除元素焦点

判断

- `contentEditable`：[元素的内容是否可编辑](https://www.runoob.com/try/try.php?filename=try_dom_body_contenteditable)
- `hasChildNodes()`：是否有任何子元素
- `hasFocus()`：是否获取焦点
- `isEqualNode()`：检查两个元素是否相等
- `isContentEditable`：元素内容是否可编辑
- `isDefaultNamespace()`：是否为默认命名空间
- `isSameNode()`：检查两个元素所有有相同节点
- `isSupported()`：是否支持指定特征

元素的增删改查操作

- `insertBefore()`：插入一个新的子元素在最前面
- `appendChild()`：[添加一个新的子元素](https://www.runoob.com/try/try.php?filename=tryjsref_node_appendchild)
- `firstChild`：[元素的第一个子节点](https://www.runoob.com/try/try.php?filename=tryjsref_node_firstchild)
- `lastChild`：最后一个子节点
- `nextSibling`：下一个节点（可为空）
- `nextElementSibling`：下一个兄弟元素（必须是同元素）
- `previousSibling`：上一个节点（可为空）
- `previousElementSibling`：上一个兄弟元素（必须是同元素）
- `nodeName`：元素的标记名（大写）
- `nodeType`：[元素的节点类型](https://www.runoob.com/jsref/prop-node-nodetype.html)
- `nodeValue`：元素的节点值
- `ownerDocument`：元素的根元素（文档对象）
- `parentNode`：元素的父节点
- `removeChild()`：删除一个子元素
- `replaceChild()`：替换一个子元素
- `children`：[元素的所有子元素](https://www.runoob.com/try/try.php?filename=tryjsref_element_children)
- `childNodes`：[元素的一个子节点的数组](https://www.runoob.com/try/try.php?filename=tryjsref_node_childnodes)
- `item()`：[【childNodes】基于文档树的索引](https://www.runoob.com/try/try.php?filename=tryjsref_nodelist_item)
- `length`：【childNodes】节点列表的节点数量

宽高及上下左右边距

- `clientHeight`：在页面上返回内容的可视高度（不包括边框，边距或滚动条）
- `clientWidth`：在页面上返回内容的可视宽度（不包括边框，边距或滚动条）
- `offsetHeight`：任何一个元素的高度包括边框和填充，但不是边距
- `offsetWidth`：元素的宽度，包括边框和填充，但不是边距
- `offsetLeft`：当前元素的相对水平偏移位置的偏移容器
- `offsetParent`：元素的偏移容器
- `offsetTop`：当前元素的相对垂直偏移位置的偏移容器
- `scrollHeight`：整个元素的高度（包括带滚动条的隐蔽的地方）
- `scrollLeft`：当前视图中的实际元素的左边缘和左边缘之间的距离
- `scrollTop`：当前视图中的实际元素的顶部边缘和顶部边缘之间的距离
- `scrollWidth`：元素的整个宽度（包括带滚动条的隐蔽的地方）

改变 HTML 元素

- `innerHTML`：元素的内容。
- `getAttribute()`：[元素的属性](https://www.runoob.com/try/try.php?filename=tryjsref_element_getattribute)
- `getAttributeNode()`：[指定属性节点](https://www.runoob.com/try/try.php?filename=tryjsref_element_getattributenode)
- `hasAttribute()`：是否存在某属性
- `hasAttributes()`：是否有任何属性
- `removeAttribute()`：删除指定的属性
- `removeAttributeNode()`：删除指定属性节点并返回移除后的节点。
- `setAttribute()`：设置或者改变指定属性并指定值。
- `setAttributeNode()`：设置或者改变指定属性节点。
- `setIdAttribute()`：
- `setIdAttributeNode()`：

## ◆ scrollLeft

js 设置向左滑动

```
this.$refs.ref.scrollLeft = 100
```

# 三、DOM 属性对象

# 四、DOM 事件对象

[链接](HTML之DOM事件对象)

# 五、DOM console 对象

## 链接

- [学习链接 1](https://markodenic.com/use-console-log-like-a-pro/)
- [学习链接 2](https://segmentfault.com/a/1190000004528137)
- [效果预览](https://firefly1984982452.github.io/my-web-page/console.html)
- [源码](https://github.com/firefly1984982452/my-web-page/blob/master/console.html)

## 方法及属性

- clear：清除
- %c：样式更改
- %s：字符串替换
- %i、%d：整数替换
- %o、%O：对象替换
- info、error、warn：模式
- count：次数
- dir、dirxml：属性的交互列表
- table：过滤筛选
- assert：失败时才显示的信息
- time：时间差
- group：组
- trace：追踪根源
- profile：性能分析

## 源码

```
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>

<body>
	<h1>打开<kbd>F12</kbd>查看console控制台信息</h1>
	<script>
		console.clear()
		console.log('%c 【clear】', 'font-size: 2em;color:#f00');

		console.log('%c 【%c、%s、%i、%d、%o、%O】', 'font-size: 2em;color:#f00');
		console.log('%d + %i = %s', '3', 2, 'hello');
		console.log('%o和%O都是个对象', { a: 3 }, { a: 4 });
		console.log('%c 自定义样式如：ERROR', 'color:#0f0');
		console.log('\n');
		console.log('\n');

		console.log('%c 【info、error、warn】', 'font-size: 2em;color:#f00');
		console.info('info【firefox浏览器下有明显样式变化】')
		console.error('error')
		console.warn('warn')
		console.log('\n');
		console.log('\n');

		console.log('%c 【count】', 'font-size: 2em;color:#f00');
		console.count('a')
		console.count('a')
		console.count('b')
		console.log('\n');
		console.log('\n');

		console.log('%c 【dir、dirxml】', 'font-size: 2em;color:#f00');
		console.log({ f1: 'foo', f2: 'bar' })
		console.dir({ f1: 'foo', f2: 'bar' })
		console.log(body)
		console.dirxml(body)
		console.dir(body)
		console.log('\n');
		console.log('\n');

		console.log('%c 【table】', 'font-size: 2em;color:#f00');
		var arr = [{ name: 'a', number: 89 }, { name: 'b', number: 73 }, { name: 'c', number: 454 }, { name: 'd', number: 2436 }]
		console.table(arr)
		console.table(arr, ['name'])
		console.log('\n');
		console.log('\n');

		console.log('%c 【assert】', 'font-size: 2em;color:#f00');
		console.assert(true, '条件成立时不会显示')
		console.assert(false, '条件不成立时才会显示')
		console.log('\n');
		console.log('\n');

		console.log('%c 【time】', 'font-size: 2em;color:#f00');
		console.time("时间差");
		var array = new Array(1000);
		for (var i = array.length - 1; i >= 0; i--) {
			array[i] = new Object();
		};
		console.timeEnd("时间差");
		console.log('\n');
		console.log('\n');


		console.log('%c 【group】', 'font-size: 2em;color:#f00');
		console.group('father')
		console.log('test');
		console.group('child')
		console.log('test-child');
		console.groupEnd('child')
		console.groupEnd('father')

		console.groupCollapsed('collapsed')
		console.log('test-collapsed');
		console.error('error');
		console.groupEnd()
		console.log('\n');
		console.log('\n');

		console.log('%c 【trace】', 'font-size: 2em;color:#f00');
		function fn1() {
			function fn2() {
				(() => {
					console.trace('fn1-fn2')
				})()
			}
			fn2()
		}
		fn1()
		console.log('\n');
		console.log('\n');

		console.log('%c 【profile】', 'font-size: 2em;color:#f00');
		console.profile('性能分析器');
		(() => {
			for (var i = 0; i < 10; i++) {
			}
			for (var i = 0; i < 190; i++) { }
		})()
		console.profileEnd();
		console.log('\n');
		console.log('\n');
	</script>
</body>

</html>
```
