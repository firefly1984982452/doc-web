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
