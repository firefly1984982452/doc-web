# HTML代码简写：Emmet(ZenCoding)和Pug语法

# 一、Emmet

- [参考原文](https://blog.csdn.net/seasunexpect/article/details/71124299)

# 一、DOM 添加

## 【1】子节点 `>`

- 语法：

```emmet
div>ul>li
```

- 结果：

```html
<div>
	<ul>
		<li></li>
	</ul>
</div>
```

## 【2】兄弟节点 `+`

- 语法：

```emmet
div+p
```

- 结果：

```html
<div></div>
<p></p>
```

## 【3】上线节点 `^`

- 语法：

```emmet
div>p>span^b
```

- 结果：

```html
<div>
	<p><span></span></p>
	<b></b>
</div>
```

# 【二】类和 ID

## 【1】ID `#`

- 语法：

```emmet
div#page
```

- 结果：

```html
<div id="page"></div>
```

## 【2】class `.`

- 语法：

```emmet
div.page
```

- 结果：

```html
<div class="page"></div>
```

## 【3】`.class#id`

- 语法

```emmet
div.class#id
```

- 结果：

```html
<div class="class" id="id"></div>
```

## 【4】`.class.class`

- 语法

```emmet
div.class.class
```

- 结果：

```html
<div class="class class"></div>
```

# 三、算法

## 【1】次数 `*`

- 语法：

```
ul>li*3
```

- 结果：

```html
<ul>
	<li></li>
	<li></li>
	<li></li>
</ul>
```

## 【2】分组 `()`

- 语法：

```emmet
div>(header>ul>li*2)+footer>p
```

- 结果：

```html
<div>
	<header>
		<ul>
			<li></li>
			<li></li>
		</ul>
	</header>
	<footer>
		<p></p>
	</footer>
</div>
```

## 【3】编号 `$`

- 语法：

```
ul>li.item$$$*3
```

- 结果：

```html
<ul>
	<li class="item001"></li>
	<li class="item002"></li>
	<li class="item003"></li>
</ul>
```

# 四、属性

## 【1】自定义属性 `[attr]`

- 语法：

```
td[title="hello" colspan=3]
a[href='www.baidu.com' target='_blank']
```

- 结果：

```html
<td title="hello" colspan="3"></td>
<a href="www.baidu.com" target="_blank"></a>
```

## 【2】改变编号基数和方向 `$@-`

- 语法：

```
ul>li.item$@-5*3
ul>li.item$@3*3
```

- 结果：

```html
<ul>
	<li class="item8"></li>
	<li class="item7"></li>
	<li class="item6"></li>
</ul>

<ul>
	<li class="item3"></li>
	<li class="item4"></li>
	<li class="item5"></li>
</ul>
```

# 五、文本 `{}`

- 语法：

```emmet
div{click me}
p>{click}+a{here}+{continue}
```

- 结果：

```html
<div>click me</div>
<p>click<a href="">here</a>continue</p>
```

# 六、隐式标签

- 语法：

```
ul>.test*2
```

- 结果：

```html
<ul>
	<li class="test"></li>
	<li class="test"></li>
</ul>
```

# 七、其它

**不能有空格**

练习

```emmet
div#invest>head-custom+div.balance>div.center>div.assetle.l>ul.manner_left>li.row.rows>span.row_left.l+a.row_middle.l{商品管理}^^^div.l.wind>div.windright>div.topHead>p.l.text{结算管理-列表}^div.notice>p.eggs.l+p.l.writing^div.end>div.topend>div.topLeft.l>p.l.finish{起止时间}+p.l.totals{起止时间}^div.topmiddle.l>div>sivable>p.cashes{店铺应收金额}^div.nesting>p*4^^div.topright>p.l.period{本期应结}+p.l.state{结算状态}
```

---

# 二、Pug

- [官方文档](https://www.pugjs.cn/api/getting-started.html)
- [入门](https://www.cnblogs.com/xiaohuochai/p/7222227.html)

# 一、下载

```bash
npm install pug-cli -g
```

# 二、编译

- 1.基础编译

```bash
pug index.pug
```

- 2.自动编译（默认为压缩版 HTML）

```bash
pug index.pug -w
```

- 3.编译为标准版 HTML

```bash
pug index.pug -P
```

- 4.路径设置

将 index.html 将输入到 a 目录下面

```bash
pug index.pug -o a
```

- 5.重命名

**这里的路径必须提前建立好，否则不会成功**

```bash
pug <xx.pug> <xx/xx.html>
```

- 6.全部命令

编译整个文件夹里面所有 pug 文件到 html 文件夹，并且所有文件是标准版 HTML

```bash
pug -w ./ -o ./html -P
```

# 三、结构语法

```pug
doctype html
html
  head
  body
    main
    ul.content
      -for(var i = 0;  i < 2; i ++)
        li=i+'个'

      - var list = ["Tres","Cuatro", "Cinco", "Seis"]
        each item,index in list
          li=`${index}：${item}`

      - var values = []
      each val in values
        li = val
      else
        li 没有内容

    .other
      img/
      a(href="baidu.com"): img
    |很多很多文字
    p 行内文字
    p
      |多个
    p
      |多
      |多
    input(
      type='checkbox'
      name='agreement'
      checked
    )
```
