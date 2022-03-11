---
title: HTML代码简写：Emmet(ZenCoding)和Pug语法
date: 2018-05-02 10:51:17
categories:
- program
---

# 一、Emmet

[参考原文](https://blog.csdn.net/seasunexpect/article/details/71124299)

# DOM 添加

## 子节点 '>'

- 语法：

```
div>ul>li
```

- 结果：

```
<div>
	<ul>
		<li></li>
	</ul>
</div>
```

## 兄弟节点 '+'

- 语法：

```
div+p
```

- 结果：

```
<div></div>
<p></p>
```

## 上线节点 '^'

- 语法：

```
div>p>span^b
```

- 结果：

```
<div>
	<p><span></span></p>
	<b></b>
</div>
```

# 类和 ID

## ID '#'

- 语法：

```
div#page
```

- 结果：

```
<div id="page"></div>
```

## class '.'

- 语法：

```
div.page
```

- 结果：

```
<div class="page"></div>
```

## '.class#id'

- 语法

```
div.class#id
```

- 结果：

```
<div class="class" id="id"></div>
```

## '.class.class'

- 语法

```
div.class.class
```

- 结果：

```
<div class="class class"></div>
```

# 算法

## 次数 '`*`'

- 语法：

```
ul>li*3
```

- 结果：

```
<ul>
	<li></li>
	<li></li>
	<li></li>
</ul>
```

## 分组 '()'

- 语法：

```
div>(header>ul>li*2)+footer>p
```

- 结果：

```
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

## 编号 '$'

- 语法：

```
ul>li.item$$$*3
```

- 结果：

```
<ul>
	<li class="item001"></li>
	<li class="item002"></li>
	<li class="item003"></li>
</ul>
```

# 属性

## 自定义属性 '[attr]'

- 语法：

```
td[title="hello" colspan=3]
a[href='www.baidu.com' target='_blank']
```

- 结果：

```
<td title="hello" colspan="3"></td>
<a href="www.baidu.com" target="_blank"></a>
```

## 改变编号基数和方向 '$@-'

- 语法：

```
ul>li.item$@-5*3
ul>li.item$@3*3
```

- 结果：

```
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

# 文本 '{}'

- 语法：

```
div{click me}
p>{click}+a{here}+{continue}
```

- 结果：

```
<div>click me</div>
<p>click<a href="">here</a>continue</p>
```

# 隐式标签

- 语法：

```
ul>.test*2
```

- 结果：

```
<ul>
	<li class="test"></li>
	<li class="test"></li>
</ul>
```

# 其它

**不能有空格**

练习

```
div#invest>head-custom+div.balance>div.center>div.assetle.l>ul.manner_left>li.row.rows>span.row_left.l+a.row_middle.l{商品管理}^^^div.l.wind>div.windright>div.topHead>p.l.text{结算管理-列表}^div.notice>p.eggs.l+p.l.writing^div.end>div.topend>div.topLeft.l>p.l.finish{起止时间}+p.l.totals{起止时间}^div.topmiddle.l>div>sivable>p.cashes{店铺应收金额}^div.nesting>p*4^^div.topright>p.l.period{本期应结}+p.l.state{结算状态}
```

---

# 二、Pug

# 链接

- [官方文档]https://www.pugjs.cn/api/getting-started.html)
- [入门](https://www.cnblogs.com/xiaohuochai/p/7222227.html)

# 下载

```
npm install pug-cli -g
```

# 编译

- 1.基础编译

```
pug index.pug
```

- 2.自动编译（默认为压缩版 HTML）

```
pug index.pug -w
```

- 3.编译为标准版 HTML

```
pug index.pug -P
```

- 4.路径设置

将 index.html 将输入到 a 目录下面

```
pug index.pug -o a
```

- 5.重命名

**这里的路径必须提前建立好，否则不会成功**

```
pug <xx.pug> <xx/xx.html>
```

- 6.全部命令

编译整个文件夹里面所有 pug 文件到 html 文件夹，并且所有文件是标准版 HTML

```
pug -w ./ -o ./html -P
```

# 结构语法

```
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
