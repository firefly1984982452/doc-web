# CSS - 文本效果

## 【1】文字及段落

### 【1.1】text

- text-align: -webkit-match-parent; // 匹配父元素样式
- text-align: center | left | right | justify; // 文本对齐方式
- text-align-last: center | left | right; // 段落最后一行对齐方式
- text-decoration: overline | underline | line-through; // 文本线条的简写
- text-decoration-color: #fff; // 线条颜色
- text-decoration-line: overline | underline | line-through; // 线条位置
- text-decoration-style: solid | double | dotted | dashed | wavy ; 线条样式
- text-decoration-skip: ink | spaces | edges; // 文字和线的覆盖关系
- text-underline-position: under; // 下划线位置
- text-underline-offset: 5px; // 下划线偏移值
- text-indent: 2em; // 段落第 1 行缩进，开头空 2 格
- text-overflow: ellipsis | clip | 'string'【仅 firefox】; // 文字超出
- text-shadow: 2px 2px #ff0; // 文字阴影
- text-transform: uppercase | lowercase | capitaliza; // 文字转换大小写
- text-rendering: optimizeSpeed; // 连字形式【英文的 fi 会分开】

### 【1.2】font

- font-variant: small-caps(小型大写字母字体); // 字体变体
- font-variant-ligatures: no-common-ligatures; // 连字形式【英文的 fi 会分开】
- font-variant-numeric: slashed-zero; // 数字 0 显示为中间有斜杠，好和 o 区分

◆ `font-variant: small-caps`

<div class="example-box">
  <p>This</p>
  <p style="font-variant: small-caps">This</p>
</div>

◆ `font-variant-ligatures: no-common-ligatures`

<div class="example-box">
  <p>fight</p>
  <p style="text-rendering: optimizeSpeed;">fight</p>
</div>

◆ [链接：MDN 中 font-variant-numeric 的不同值对比](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-variant-numeric)

## 【2】行内元素文字间距自动调整

```html
<style>
  div {
    width: 100px;
    text-align: justify;
    text-align-last: justify;
  }
</style>
<body>
  <divs>姓名</divs>
  <div>家庭住址</div>
</body>
```

<div class="example-box">
  <p style="width: 200px; text-align: justify; text-align-last: justify">姓名</p>
  <p style="width: 200px; text-align: justify; text-align-last: justify">家庭住址</p>
</div>

!> `text-align-last:justify;`火狐浏览器下无效！

## 【2】文字从右到左效果

◆ 区别：

- text-align: right
- direction: rtl
- unicode-bidi: bidi-override【依赖于 direction】

```html
<p style="text-align: right">
  我向来是不惮以最坏的恶意来推测中国人的,然而我还不料,也不信竟会下劣凶残到这地步。
</p>
<p style="direction: rtl">
  我向来是不惮以最坏的恶意来推测中国人的,然而我还不料,也不信竟会下劣凶残到这地步。
</p>
<p style="direction: rtl; unicode-bidi: bidi-override">
  我向来是不惮以最坏的恶意来推测中国人的,然而我还不料,也不信竟会下劣凶残到这地步。
</p>
```

<div class="example-box">
  <p style="text-align: right">
    我向来是不惮以最坏的恶意来推测中国人的,然而我还不料,也不信竟会下劣凶残到这地步。
  </p>
  <p style="direction: rtl">
    我向来是不惮以最坏的恶意来推测中国人的,然而我还不料,也不信竟会下劣凶残到这地步。
  </p>
  <p style="direction: rtl; unicode-bidi: bidi-override">
    我向来是不惮以最坏的恶意来推测中国人的,然而我还不料,也不信竟会下劣凶残到这地步。
  </p>
</div>

## 【3】文字换行与截断

- word-wrap: break-word; // 如果单词太长会自动换行。
- overflow-wrap: break-word; // 功能上同，W3C 新写法。
- overflow-wrap: anywhere; // 任何地方都可以换行[功能参考](https://www.zhangxinxu.com/wordpress/2020/03/css-overflow-wrap-anywhere/)
- white-space: nowrap; // 段落中的文本不换行（会截断）。
- word-break: keep-all; //【默认】单词放不下会自动换行【文字截断】。
- word-break: break-all; // 单词放不下会折断换行，铺满元素【文字截断】。

◆ 效果图：

![image](https://s1.ax1x.com/2022/03/17/q9ylHP.jpg)

- [效果预览](https://firefly1984982452.github.io/my-web-page/word-break.html)
- [源码地址](https://github.com/firefly1984982452/my-web-page/blob/master/word-break.html)

## 【4】盒装饰器中断

- box-decoration-break: clone; // 盒装饰器中断【复制】
- box-decoration-break: slice; // 盒装饰器中断【默认】

◆ 效果图：

![image](https://s1.ax1x.com/2022/03/17/q9yt3Q.jpg)

- [效果预览](https://firefly1984982452.github.io/my-web-page/box-decoration-break.html)
- [源码地址](https://github.com/firefly1984982452/my-web-page/blob/master/box-decoration-break.html)

## 【5】文字间距

- word-spacing:30px; // 单词与单词之间的距离。
- letter-spacing:-3px; // 字母与字母之间的距离。

<div class="example-box">
  <p >默认：I am a programer</p>
  <p  style="word-spacing:30px;">间距：I am a programer</p>
  <p  style="letter-spacing:-3px;">间距：I am a programer</p>
</div>

## 【6】`hyphens`：文字连字符换行

◆ 功能：连字符换行

◆ 与`text-align: justify`的区别

<div class="example-box">
<p  style="width: 100px; hyphens: auto;border:1px solid">An extreme ly long English word</p>
<p  style="width: 100px; text-align: justify; text-align-last: justify;border:1px solid">An extreme ly long English word</p>
</div>

```html
<p style="width: 100px; hyphens: auto;border:1px solid">An extreme ly long English word</p>
<p style="width: 100px; text-align: justify; text-align-last: justify;border:1px solid">
  An extreme ly long English word
</p>
```

## 【7】`line-clamp`：限制文本行数

必须加上`-webkit-`

```css
-webkit-line-clamp: 3;
```

---
