---
title: CSS之高性能代码与优化
date: 2021-01-07 14:19:32
categories:
- program
---

# 一、CSS 编码技巧

## 【1】尽量减少代码重复

- `line-height`写倍数
- `font-size`写百分比

当某些值相互依赖时，应该把它们的相互关系用代码表达出来。

比如`line-height`写倍数、`font-size`写百分比更利于维护。

```
font-size:20px;
height:20px;
line-heigth:20px;
```

换成

```
font-size: 150%;
height:20px;
line-heigth:1.5;
```

## 【2】代码易维护 vs．代码量少

比如：我们不需要左边框

```
border-width: 1px 1px 1px 0;
border-color: #fff;
border-style: solid;
```

但下次要把`1px`改为`2px`的话要改 3 次，可以直接优化成：

```
border-width: 1px;
border-left-width: 0;
border-color: #fff;
border-style: solid;
```

## 【3】currentColor

```
p{
  color: red;
  border: solid 1px currentColor;
  // 或直接简化
  border: solid 1px;
}
```

p 标签的边框会直接获取到 color 的颜色。

## 【4】合理使用简写

```
background: red;
background-color: red;
```

这 2 者的差距在后者如果在添加`background-image`之类的属性就会导致不一样的效果。

---

# 二、文档分析注释

## 目录注释

```
/*--*\
引入的CSS目录
\*--*/
/**
 * css/base.css--------------引入cssReset
 * font-family-config.css----引入配置字体的css
 * public.css----------------引入全局公用的css
 */
import './assets/css/base.css';
import './config/font-family-config.css';
import './assets/css/public.css';
```

## 具体 CSS 文件的注释

```
/*-------*\
  $主框架
\*-------*/
.page{}




/*-------*\
 $标题菜单
\*-------*/
.title{}




/*------------*\
 $滚动栏样式重置
\*------------*/

::-webkit-scrollbar{}
```

中间最好留 5 行以上，好在全览时看起来像个段落。

---

# 三、CSS 编写顺序

1. Reset；
2. DOM 元素，如 ul、li；
3. 对象和抽象内容；
4. 子元素
5. 修补异常

---

# 四、CSS 命名

## 命名规范

下划线（ `__` ）代表子元素；连字符（ `-` ）代表不同状态；

```
.ul{}
.ul_li{}
.ul_li-display{}
```

## BEM 命名法

块（Block）、元素（Element）、修饰符（Modifier）例：`class="button button--state-danger"`

---

# 五、优先级及优化

## 优先级

```
!important
内联
Id
Class
标签
越清楚优先级越高
```

## 优化

尽量不要使用`!important`，下次会使用更多的`!important`去覆盖它。

---

# 六、CSS 样式继承

- 文字相关：`font-family`、`color`、`font-size`、`font-style`等。
- 列表相关：`list-style`、`list-style-type`、`list-style-position`等。
- 表格相关：`border-spacing`。

**比如`border`不能继承是因为不通用，有的得加上，有的加上得删掉。**

---

# 七、SEO 优化和增加可读性

- 鼠标样式随功能变化；

如不可点击时可改为`cursor: not-allowed;`

[所有的鼠标样式](https://www.w3school.com.cn/tiy/t.asp?f=eg_csse_cursor)
