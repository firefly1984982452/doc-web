# CSS - 关键字：initial、inherit、unset、revert 和 all

- [区别预览](https://firefly1984982452.github.io/my-web-page/css-keyword.html)
- [区别源码](https://github.com/firefly1984982452/my-web-page/blob/master/css-keyword.html)
- [学习博客链接](https://www.cnblogs.com/xiaohuochai/p/5464456.html)

## 【1】初始值：initial

```css
html,
body {
  color: red;
}
p {
  color: green;
}
.main p {
  color: initial;
}
```

设置了`color:initial`值的`<p>`的颜色既不是`red`也不是`green`，而是`黑色`。

## 【2】继承：inherit

```css
html,
body {
  color: red;
}
p {
  color: green;
}
.main p {
  color: inherit;
}
```

设置了`color:inherit`值的`<p>`的颜色继承了`html,body`是`red`。

## 【3】复原：unset

```css
html,
body {
  color: red;
}
p {
  color: green;
}
.main p {
  color: unset;
}
```

设置了`color:unset`值的`<p>`的颜色忽略了原来的`green`，读取了`html,body`的值`red`。

## 【4】恢复：revert

```css
.revert li {
  list-style: none;
}

.revert ul li {
  list-style: revert;
}
```

此时的 `li` 恢复了默认有`list-style`的样子。

## 【5】所有：all

`all` 取值只能是 `initial`、`inherit`、`unset` 和 `revert`

```css
<style>
.test{
    border: 1px solid black;
    padding: 20px;
    color: red;
}
.in{
/*  all: initial;
    all: inherit;
    all: unset;
    all: revert; */
}
</style>
<div class="test">
    <div class="in">测试文字</div>
</div>
```
