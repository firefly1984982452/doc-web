---
title: HTML5
date: 2021-02-18 14:19:32
categories:
  - program
---

学习链接： [阮一峰](https://wangdoc.com/html/)

参考书籍： [《HTML5 权威指南》](https://book.douban.com/subject/25786074/)

其它：我只记录了冷门的不常用的信息，其它基础的没有记录。

# 一、URL 部分

## 【1】`<base>`：设置相对 URL 的基础

作用：有`href`和`target`属性。

用法：

```
<head>
  <base href="https://wx3.sinaimg.cn/" target="_blank">
</head>

<body>
  <a href="https://www.baidu.com/">打开默认网址以外的网址：写全称</a>
  <a href="mw690/0069qZtTgy1gnbgsxvddej31hb0ng1b9.jpg">打开默认网址下的页面：写后缀</a>
  <img src="mw690/0069qZtTgy1gnbgsxvddej31hb0ng1b9.jpg" alt="" srcset="">
  <img src="https://wx3.sinaimg.cn/mw690/0069qZtTgy1gnbgsxvddej31hb0ng1b9.jpg" alt="" srcset="">
</body>
```

这时`<a>`标签不用再写`target="_blank"`也能直接新标签页打写，`<img>`标签不用再写网址前缀也可以直接获取到地址。如果想用默认地址以外的地址：**写全称**。

---

# 二、全局属性

1. id 中的`#`锚点
2. `title`：鼠标悬停时有提示文字
3. `tabindex`：按<kbd>tab</kbd>键之后按顺序遍历
4. `accessKey`：使用自定义键来聚焦
5. `hidden`：不渲染这个 DOM 元素
6. `dir`：文字的阅读方向
7. `contenteditable`：允许修改内容
8. `spellcheck`：打开拼写检查
9. `data-`：放置自定义数据

## 【1】id 中的`#`锚点

代码中有`<h1 id="test">测试</h1>`时，在浏览器直接后缀加上`#test`即可精准定位到指定 ID 地方。

## 【2】`title`：鼠标悬停时有提示文字

相当于`tooltip`。

```
<h1 title="版权说明">版权项：XXX</h1>
```

## 【3】`tabindex`：按<kbd>tab</kbd>键之后按顺序遍历


属性值：

- 负整数：可以获取焦点（如 javaScript 中的`focus()`方法），但按<kbd>tab</kbd>键之后不会参与遍历。这个值通常是`-1`。
- `0`：参与遍历，如果都是 0，按顺序遍历。
- 正整数：参与遍历，按顺序遍历。

**3 个值都有的情况下的顺序：**

1. `tabindex`为`0`；
2. 地址栏`url`；
3. `tabindex`为正整数。

**`tabindex`为负数时不参与**

## 【4】`accessKey`：使用自定义键来聚焦

```
<button accesskey="s">提交</button>
```

使用：

- window：使用<kbd>Alt</kbd> + `accessKey` (或者 <kbd>Shift</kbd> + <kbd>Alt</kbd> + `accessKey`) 

- macbook：使用<kbd>control</kbd> + <kbd>option</kbd> + `accessKey`。

## 【5】`hidden`：不渲染这个 DOM 元素

作用：不渲染这个 DOM 元素，相当于`display:none`。

```
<p hidden>本句不会显示在页面上。</p>
```

## 【6】`dir`：文字的阅读方向

有三个可能的值。

- `ltr`：从左到右阅读，比如英语。
- `rtl`：从右到左阅读，阿拉伯语、波斯语、希伯来语都属于这一类。
- `auto`：浏览器根据内容的解析结果，自行决定。

`rtl`从右到左阅读时，效果相当于`text-align:right`，起作用的属性是：`direction:rtl`。

## 【7】`contenteditable`：允许修改内容

```
<p contenteditable="true">阅读时是正常模式，鼠标点击后，本句内容可修改。</p>
```

## 【8】`spellcheck`：打开拼写检查

```
<p contenteditable="true" spellcheck="true">
英语单词 separate 容易写错成 seperate。
</p>
```

（**我在 chrome 和 firefox 下都无效，没找到原因:(**）

## 【9】`data-`：放置自定义数据

```
<style>
  h1[data-yeah]::before {
    content: attr(data-yeah);
  }
</style>

...

<h1 data-yeah='显示信息：'>data-yeah</h1>
```

---

# 三、网页的语义结构

```
<body>
  <header>页眉</header>
  <main>
    <article>
      <h1>文章标题</h1>
      <section>
        <h2>第一章</h2>
        <p>文章内容</p>
      </section>
    </article>
  </main>
  <aside>侧边栏</aside>
  <footer>页脚</footer>
</body>
```

`emmet` 速记：

```
body>header{页眉}+(main>article>h1{文章标题}+section>h2{第一章}+p{文章内容})+(aside{侧边栏})+footer{页脚}
```

---

# 四、文本标签

1. `<br>`和`<wbr>`：自动断行
2. `<pre>`：保留换行与空格
3. `<strong>`和`<b>`：加粗
4. `<em>`和`<i>`：斜线
5. `<sub>`、`<sup>`和`<var>`：下标、上标、代码或数学公式的变量
6. `<u>`和`<s>`：下划线和删除线
7. `<ins>`和`<del>`：下划线和删除线
8. `<code>`：代码块
9. `<kbd>`和`<samp>`：键盘代码和示例
10. `<mark>`：突出显示
11. `<small>`：最小字号显示（12px）
12. `<time>`和`<data>`：时间和数据
13. `<address>`：联系方式
14. `<abbr>`：缩写
15. `<dfn>`：术语
16. `<ruby>`：文字的语音注释

## 【1】`<br>`和`<wbr>`：自动断行

`<wbr>`标签可以自动断行。如果一行的宽度足够，则不断行；如果宽度不够，需要断行，就在`<wbr>`的位置的断行。

```
<p>
Fernstraßen<wbr>bau<wbr>privat<wbr>finanzierungs<wbr>gesetz
</p>
```

## 【2】`<pre>`：保留换行与空格

## 【3】`<strong>`和`<b>`：加粗

## 【4】`<em>`和`<i>`：斜线

## 【5】`<sub>`、`<sup>`和`<var>`：下标、上标、代码或数学公式的变量

- `<sub>`标签将内容变为下标。

- `<sup>`标签将内容变为上标。

- `<var>`标签表示代码或数学公式的变量。

```
<p>勾股定理是
  <var>a</var><sup>2</sup> + <var>b</var><sup>2</sup> = <var>c</var><sup>2</sup>
。</p>
```

## 【6】`<u>`和`<s>`：下划线和删除线

- `<u>`：下划线；

- `<s>`：删除线。

## 【7】`<ins>`和`<del>`：下划线和删除线

- `<ins>`：下划线；

- `<del>`：删除线。

这两个标签都有以下属性。

- `cite`：该属性的值是一个 `URL`，表示该网址可以解释本次删改。

- `datetime`：表示删改发生的时间。

```
<ins cite="./why.html" datetime="2018-05">
  <p>项目比原定时间提前两周结束。</p>
</ins>
```

## 【8】`<code>`：代码块

`<code>`表示代码，如果需要显示多行代码，需要放在`<pre>`标签里面。

```
<pre>
<code>
  let a = 1;
  console.log(a);
</code>
</pre>
```

## 【9】`<kbd>`和`<samp>`：键盘代码和示例

- `<kbd>`：键盘代码；

- `<samp>`：示例。

```
<p>Windows 可以按下
<kbd> <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Del</kbd> </kbd>
重启。</p>
```

```
<p>如果使用没有定义的变量，浏览器会报错：
<samp>Uncaught ReferenceError: foo is not defined</samp>。
</p>
```

## 【10】`<mark>`：突出显示

## 【11】`<small>`：最小字号显示（12px）

## 【12】`<time>`和`<data>`：时间和数据

- `<time>`：时间；

- `<data>`：数据。

```
<p>运动会预定<time datetime="2015-06-10">下周三</time>举行。</p>
```

```
<p>本次马拉松比赛第一名是<data value="39">张三</data></p>。
```

## 【13】`<address>`：联系方式

## 【14】`<abbr>`：缩写

它的`title`属性可以把缩写展示全。

```
<abbr title="HyperText Markup Language">HTML</abbr>
```

## 【15】`<dfn>`：术语

```
<p>
通过 TCP/IP 协议连接的全球性计算机网络，叫做
<dfn title="全球性计算机网络">Internet</dfn>。
</p>
```

## 【16】`<ruby>`：文字的语音注释

```
<ruby>
汉<rp>(</rp><rt>han</rt><rp>)</rp>
字<rp>(</rp><rt>zi</rt><rp>)</rp>
</ruby>
```

显示：

```
han zi
汉 字
```

---

# 五、列表标签

## 【1】`<ol>`：有序列表

```
1. 列表项 A
2. 列表项 B
3. 列表项 C
```

属性：

### 【1.1】reversed：倒序

```
<ol reversed>
  <li>列表项 A</li>
  <li>列表项 B</li>
  <li>列表项 C</li>
</ol>
```

产生的结果就是 3、2、1。

### 【1.2】start：起始编号

```
<ol start="5">
  <li>列表项 A</li>
  <li>列表项 B</li>
  <li>列表项 C</li>
</ol>
```

产生的结果就是 5、6、7。

### 【1.3】type：样式

- `a`：小写字母
- `A`：大写字母
- `i`：小写罗马数字
- `I`：大写罗马数字
- `1`：整数（默认值）

**即使编号是字母，`start`属性也依然使用整数。**

## 【2】`<dl>`、`<dt>`和`<dd>`

- `<dl>`：列表；

- `<dt>`：术语名；

- `<dd>`：解释。

```
<dl>
  <dt>CPU</dt>
  <dd>中央处理器</dd>

  <dt>Memory</dt>
  <dd>内存</dd>

  <dt>Hard Disk</dt>
  <dd>硬盘</dd>
</dl>
```

多个术语（`<dt>`）对应一个解释（`<dd>`），或者多个解释（`<dd>`）对应一个术语（`<dt>`），都是合法的。

### 【2.1】更多应用

**`<dl>`、`<dt>`和`<dd>`应用于属性列表并换行**

**示例：** ![image](https://wx4.sinaimg.cn/large/0069qZtTly1gqgsd0k45sj31g207g0tu.jpg)

**方法：**

1. 用`<div>`隔断换行，适用于 for 循环；
2. 用伪元素的`content: "\A";white-space: pre-wrap;`换行，适用于已知的属性列表。

**代码：**

```
<style>
  dl {
    columns: 3;
  }
  dd {
    margin: 0;
    font-weight: bold;
  }
  dt,
  dd {
    display: inline;
  }
  dd + dt::before {
    content: "\A";
    white-space: pre-wrap;
  }
  dd + dd::before {
    content: ",";
  }
</style>

...

<dl>
  <div>
    <dt>姓名1</dt>
    <dd>张三</dd>
  </div>
  <div>
    <dt>性别2</dt>
    <dd>男</dd>
  </div>
  <div>
    <dt>人员类型3</dt>
    <dd>普通人员</dd>
    <dd>健康人员</dd>
    <dd>病患人员</dd>
  </div>
  <div>
    <dt>联系方式4</dt>
    <dd>151****1111</dd>
  </div>
  <div>
    <dt>国家5</dt>
    <dd>中国</dd>
  </div>
  <div>
    <dt>民族6</dt>
    <dd>汉</dd>
  </div>
  <div>
    <dt>来访时间7</dt>
    <dd>昨天</dd>
  </div>
  <div>
    <dt>证件类型8</dt>
    <dd>身份证</dd>
  </div>
</dl>
```

---

# 六、图像标签

1. `alt`：图片的文字说明
2. `width`，`height`：宽度和高度
3. `referrerpolicy`：设置图片的`HTTP`请求时的`Referer`的头信息
4. `crossorigin`：是否采用跨域的形式下载图片
5. `loading`：懒加载
6. 响应式-`srcset`：设置不同像素时的图片地址
7. 响应式-`sizes`：适配不同屏幕时的图片
8. 响应式-`<picture>`：指定不同情况加载的图片
9. `<figure>`和`<figcapt>`：区块和说明

## 【1】`alt`：图片的文字说明

图片不显示时，图片的位置会显示该文本。

```
<img src="foo.jpg" alt="示例图片">
```

## 【2】`width`，`height`：宽度和高度

单位是像素或百分比。

## 【3】`referrerpolicy`：设置图片的`HTTP`请求时的`Referer`的头信息

## 【4】`crossorigin`：是否采用跨域的形式下载图片

有如下属性：

- `anonymous`：跨域请求不带有用户凭证（通常是 Cookie）。

- `use-credentials`：跨域请求带有用户凭证。

## 【5】`loading`：懒加载

有如下属性：

- `auto`：默认值，相当于没有使用`loading`属性。

- `lazy`：启动懒加载。

- `eager`：立即加载资源，无论它在页面的哪个位置。

## 【6】响应式-`srcset`：设置不同像素时的图片地址

```
<img srcset="foo-320w.jpg,
             foo-480w.jpg 1080w,
             foo-640w.jpg 1920w"
     src="foo-640w.jpg">
```

## 【7】响应式-`sizes`：适配不同屏幕时的图片

须与`srcset`属性一起使用。

```
<img srcset="foo-160.jpg 160w,
             foo-320.jpg 320w,
             foo-640.jpg 640w,
             foo-1280.jpg 1280w"
     sizes="(max-width: 440px) 100vw,
            (max-width: 900px) 33vw,
            254px"
     src="foo-1280.jpg">
```

## 【8】响应式-`<picture>`：指定不同情况加载的图片

```
<picture>
  <source media="(max-width: 500px)" srcset="cat-vertical.jpg">
  <source media="(min-width: 501px)" srcset="cat-horizontal.jpg">
  <img src="cat.jpg" alt="cat">
</picture>
```

## 【9】`<figure>`和`<figcapt>`：区块和说明

- `<figure>`：区块；

- `<figcapt>`：说明。

```
<figure>
  <img src="https://example.com/foo.jpg">
  <figcaption>示例图片</figcaption>
</figure>
```

---

# 七、视频标签

## 【1】属性

- `autoplay`：如果出现该属性，则视频在就绪后马上播放。
- `controls`：如果出现该属性，则向用户显示控件，比如播放按钮。
- `height`：设置视频播放器的高度。
- `loop`：如果出现该属性，则当媒介文件完成播放后再次开始播放。
- `muted`：规定视频的音频输出应该被静音。
- `poster`：规定视频下载时显示的图像，或者在用户点击播放按钮前显示的图像。
- `preload`：如果出现该属性，则视频在页面加载时进行加载，并预备播放。如果使用 "autoplay"，则忽略该属性。
- `src`：要播放的视频的 URL。
- `width`：设置视频播放器的宽度。

◆ `poster`：视频预览图

```
<video controls poster="/images/w3school.gif">
   <source src="movie.mp4" type="video/mp4">
   <source src="movie.ogg" type="video/ogg">
   Your browser does not support the video tag.
</video>
```

## 【2】用 canvas 实现 video 视频截图功能

- [链接](https://blog.csdn.net/weixin_43392489/article/details/114642055)

```
<video controls src="./assets/demo.mp4" width="400" height="300" id="video">
  Sorry, your browser doesn't support embedded videos.
</video>
<button onclick="screenShot()">Screenshot</button>
<script>
  function screenShot() {
    const video = document.getElementById('video');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0);

    // download picture
    const a = document.createElement('a');
    a.href = canvas.toDataURL('image/png');
    a.download = `${Date.now()}`;
    a.click();
  }
</script>
```

◆ 注意事项：

1. 浏览器需要一个服务器环境，否则 `canvas` 的 `toDataURL` 方法会报错。该方法是将其转换为 base64 格式的图片地址。

2. 可使用本地视频和 flv 格式的监控视频。

---

# 八、链接标签

## 【1】`<a>`：超级链接


### 【1.1】`href`

值：

- `URL`；

- `#id`锚点；

- 其它

### 【1.1.1】内容：`data:,`

```
<a href="data:,hello,world" download="hello.txt">下载hello.txt</a>
```

### 【1.1.2】邮件：`mailto:`

```
<a href="mailto:contact@example.com">联系我们</a>
```

邮件协议还允许指定其他几个邮件要素。

- `subject`：主题

- `cc`：抄送

- `bcc`：密送

- `body`：邮件内容

### 【1.1.3】电话:`tel:`

```
<a href="tel:13312345678">13312345678</a>
```

## 【1.2】`download`：下载

```
<a href="data:,hello,world" download="hello.txt">下载hello.txt</a>
```

## 【1.3】`rel` 属性

- noopener

[noopener](https://www.xinshouzhanzhang.com/rel-noopener.html):

当你使用`target="_blank"`打开一个新的标签页时，新页面的 window 对象上有一个属性`opener`，它指向的是前一个页面的 `window`对象，这样，后一个页面就获得了前一个页面的控制权，可以使用`window.opener.location.replace`更改前一个页面的`url`。简单来说就是，用户点击了一个超链接，该链接在新窗口打开的同时，竟然更改了前一个页面的链接。

这时候`rel="noopener"`闪亮登场，打开链接后你会发现`window.opener`已经被置为了`null`。

```
<a href="https://baidu.com/" target="_blank" rel="noopener">
	baidu.com
</a>
```

- nofollow

[nofollow](https://blog.csdn.net/qq_33981438/article/details/80909881)

不跟踪链接，利于 SEO 优化。

## 【2】`<link>`

- 用法 1：加载`CSS`
- 用法 2：加载网站的`favicon`图标文件

提供不同分辨率的图标文件：

```
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="favicon114.png">
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="favicon72.png">
```

使用 emoji 作为 Favicon

```
<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💩</text></svg>">
```

## 【2.1】media

```
<link rel="preload" as="image" href="map.png" media="(max-width: 600px)">
<link rel="preload" as="script" href="map.js" media="(min-width: 601px)">
```

## 【3】`<script>`

## 【3.1】type

`type`属性也可以设成`module`，表示这是一个 `ES6` 模块，不是传统脚本。

```
<script type="module" src="main.js"></script>
```

## 【3.2】nomodule

不支持 `ES6` 模块时，应使用`nomodule`属性。

```
<script type="module" src="main.js"></script>
<script nomodule src="fallback.js"></script>
```

## 【4】`<noscript>`

不支持`sciprt`时

```
<noscript>
  您的浏览器不能执行 JavaScript 语言，页面无法正常显示。
</noscript>
```

---

# 九、表格标签

**`<thead>`、`<tbody>`、`<tfoot>`** `<thead>`、`<tbody>`、`<tfoot>`都是块级容器元素，且都是`<table>`的一级子元素，分别表示表头、表体和表尾。

```
<table>
  <thead>... ...</thead>
  <tbody>... ...</tbody>
  <tfoot>... ...</tfoot>
</table>
```

---

# 十、表单标签

## 【1】`<fieldset>`和`<legend>`：控制标签

- `<fieldset>`：控件组；

- `<legend>`：控件组的标题。

```
<fieldset>
  <legend>学生情况登记</legend>
  <p>年龄：<input type="text" name="age"></p>
  <p>性别：<input type="text" name="gender"></p>
</fieldset>
```

## 【2】`<datalist>`：容器标签

```
<label for="ice-cream-choice">冰淇淋：</label>
<input type="text" list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice">

<datalist id="ice-cream-flavors">
  <option value="巧克力">
  <option value="椰子">
  <option value="薄荷">
  <option value="草莓">
  <option value="香草">
</datalist>
```

## 【3】`<input>`和`<output>`：输入输出标签

- `<input>`：输入；

- `<output>`：输出。

```
<input type="number" name="a" value="10"> +
<input type="number" name="b" value="10"> =
<output name="result">20</output>
```

## 【4】`<progress>`和`<meter>`：进度和指示器标签

- `<progress>`：进度；

- `<meter>`：指示器。

```
<progress id="file" max="100" value="70"> 70% </progress>
<meter id="file" max="100" value="70"> 70% </meter>
```

---

# 十一、`<input />`标签

## HTML5 input 标签所有 type

[预览效果](https://firefly1984982452.github.io/my-web-page/input-type.html)

[源码](https://github.com/firefly1984982452/my-web-page/blob/master/input-type.html)

元素

- button
- checkbox
- color
- date
- datetime
- datetime-local
- email
- file
- hidden
- image
- month
- number
- password
- radio
- range
- reset
- search
- submit
- tel
- text
- time
- url
- week

## HTML5 input 标签所有属性

[链接](https://www.runoob.com/tags/tag-input.html)

- maxlength：最大输入长度
- minlength：最小输入长度
- autocomplete：自动补全
- autofocus：自动聚焦
- disabled： 禁用
- name：名称
- max：最大值
- min：最小值
- step：步数
- size：字符长度
- required：是否必填
- readonly：是否只读
- placeholder：提示信息
- multiple：允许上传多个文件
- pattern：用正则表达式验证值

---

# 十二、其它标签

## 【1】`<dialog>`：对话框

```
<dialog open>
  Hello world
</dialog>
```

JS 操作：

```
const modal = document.querySelector('dialog');

// 对话框显示，相当于增加 open 属性
modal.showModal();

// 对话框关闭，相当于移除 open 属性
modal.close();
```

如果直接写了`<dialog open>`而不是用`modal.showModal()`显示 dialog 的话是无法使用`dialog::backdrop`伪无素的。

## 【2】`<details>`和`<summary>`：折叠内容与展开显示

- `<details>`：折叠内容

- `<summary>`：折叠内容的显示部分

```
<details open>
  <summary>这是标题</summary>
  这是一段解释文本。
</details>
```

**设置三角箭头样式**

```
summary::-webkit-details-marker {
  background: url(https://example.com/foo.svg);
  color: transparent;
}
```

或

```
summary::-webkit-details-marker {
  background: url(https://example.com/foo.svg);
  color: transparent;
}
```

---

# 十三、`<map>`标签

[链接](https://www.runoob.com/try/try.php?filename=tryhtml_areamap)

---

# 十四、`<figure>`、`<figcaption>`标签：独立的主流代码（如图片、代码等）

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/figure)

```
<figure>
		<figcaption>Get browser details using <code>navigator</code>.</figcaption>
		<pre>
	function NavigatorExample() {
		var txt;
		txt = "Browser CodeName: " + navigator.appCodeName;
		txt+= "Browser Name: " + navigator.appName;
		txt+= "Browser Version: " + navigator.appVersion ;
		txt+= "Cookies Enabled: " + navigator.cookieEnabled;
		txt+= "Platform: " + navigator.platform;
		txt+= "User-agent header: " + navigator.userAgent;
	}</pre>
	</figure>
```

# 十五、实体

|   字符   |  含义   |
| :------: | :-----: |
| `&nbsp;` | `空格`  |
|  `&#9;`  | `Tab格` |
| `&amp;`  |   `&`   |
|  `&lt;`  |   `<`   |
|  `&gt;`  |   `>`   |
| `&quot;` |   `"`   |
| `&qpos;` |   `'`   |

`&#9;`代表的 Tab 格只有在`<pre></pre>`中才生效。


---

# 十六、已废弃但可以了解一下的标签元素

## 【1】`<marquee>`：跑马灯

兼容性在各大浏览器都挺好，但MDN不推荐使用，以后也可能会删除。

<marquee>hello world , your canvas is good.</marquee>

```
<marquee >hello world , your canvas is good.</marquee>
```