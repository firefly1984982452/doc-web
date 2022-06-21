# `<head>` 部分

## 【1】`<base>`：设置相对 URL 的基础

作用：有`href`和`target`属性。

用法：

```html
<head>
  <base href="https://www.baidu.cn/" target="_blank" />
</head>

<body>
  <a href="https://www.baidu.com/">打开默认网址以外的网址：写全称</a>
  <a href="img/PCfb_5bf082d29588c07f842ccde3f97243ea.png">打开默认网址下的页面：写后缀</a>
  <img src="img/PCfb_5bf082d29588c07f842ccde3f97243ea.png" alt="" srcset="" />
  <img src="https://www.baidu.com/img/PCfb_5bf082d29588c07f842ccde3f97243ea.png" alt="" srcset="" />
</body>
```

这时`<a>`标签不用再写`target="_blank"`也能直接新标签页打写，`<img>`标签不用再写网址前缀也可以直接获取到地址。如果想用默认地址以外的地址：**写全称**。

## 【1】禁止缓存

```html
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="0" />
```

## 【2】添加标签栏 logo

```html
<link rel="shortcut icon" type="image/x-icon" href="./static/logo.ico" rel="shortcut icon" />
```

!> `vue-cli` 项目中，要把`.ico` 文件放在 `static` 文件中，并重新编译运行

## 【3】自适应手机

```html
<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
```
