# CSS - reset.css


- [reseter.min.css在线链接](https://cdnjs.cloudflare.com/ajax/libs/reseter.css/2.0.0/reseter.min.css)
- [normalize.min.css在线链接](https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css)

作者推荐了`normalize.css`替代传统的`reset.css`。 [链接](https://github.com/chokcoco/iCSS/issues/5)

reset.css

```
/* reset */
html,body,h1,h2,h3,h4,h5,h6,div,dl,dt,dd,ul,ol,li,p,blockquote,pre,hr,figure,table,caption,th,td,form,fieldset,legend,input,button,textarea,menu{margin:0;padding:0;}
header,footer,section,article,aside,nav,hgroup,address,figure,figcaption,menu,details{display:block;}
table{border-collapse:collapse;border-spacing:0;}
caption,th{text-align:left;font-weight:normal;}
html,body,fieldset,img,iframe,abbr{border:0;}
i,cite,em,var,address,dfn{font-style:normal;}
[hidefocus],summary{outline:0;}
li{list-style:none;}
h1,h2,h3,h4,h5,h6,small{font-size:100%;}
sup,sub{font-size:83%;}
pre,code,kbd,samp{font-family:inherit;}
q:before,q:after{content:none;}
textarea{overflow:auto;resize:none;}
label,summary{cursor:default;}
a,button{cursor:pointer;}
h1,h2,h3,h4,h5,h6,em,strong,b{font-weight:bold;}
del,ins,u,s,a,a:hover{text-decoration:none;}
body,textarea,input,button,select,keygen,legend{font:12px/1.14 arial,\5b8b\4f53;color:#333;outline:0;}
body{background:#fff;}
a,a:hover{color:#333;}
```

修改版的 CSS reset

```
body{margin: 0; font: 12px/22px Arial,"微软雅黑"; color: #333;}
header,footer,section,article,aside,nav,figure{display:block}

ul,ol{margin: 0;padding: 0;list-style: none;}
p,dl,dd{margin: 0;}
h1,h2,h3,h4{margin: 0;font-size: 100%;}

img{border:none;}
a{color: #21a557;cursor: pointer; text-decoration: none; }
a:active,a:hover{outline: none;}
a:hover{text-decoration: underline;}

strong{font-weight:normal;}
em,i{font-style:normal;}

table{border-collapse: collapse; table-layout: fixed;border-spacing:0;}
th,td{padding: 0;}
button,input{box-sizing: border-box;padding: 0;border: none;background: none;}
```

Normalize.css

```
html {
  /*统一行高*/
  line-height: 1.15;
  /*防止在winPhone和ISO中，因旋转屏幕而造成的字体大小的改变*/
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

body {
  /*去除margin*/
  margin: 0;
}

article,aside,footer,header,nav,section,figcaption,figure,main{
  /*重置IE8-浏览器的display*/
  display: block;
}

h1 {
  /*统一字体大小及margin*/
  font-size: 2em;
  margin: 0.67em 0;
}

figure {
  /*重置IE8浏览器的margin*/
  margin: 1em 40px;
}

hr {
  /*重置firefox浏览器的box-sizing*/
  box-sizing: content-box;
  height: 0;
  /*重置IE浏览器的overflow*/
  overflow: visible;
}

pre {
  /*统一字体大小及字体系统*/
  font-family: monospace, monospace;
  font-size: 1em;
}

a {
  /*移除IE10中的灰色背景*/
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}

abbr[title] {
  /*移除Chrome57- and Firefox 39-中的border-bottom*/
  border-bottom: none;
  /*统一text*/-decoration
  text-decoration: underline;
  text-decoration: underline dotted;
}

b,strong {
  /*统一字体重量*/
  font-weight: bolder;
}

code,kbd,samp {
  /*统一字体系列及字体大小*/
  font-family: monospace, monospace;
  font-size: 1em;
}

dfn {
  /*重置Android4.3-浏览器的字体样式*/
  font-style: italic;
}

mark {
  /*重置IE8-浏览器的背景颜色及文本颜色*/
  background-color: #ff0;
  color: #000;
}

small {
  /*统一字体大小*/
  font-size: 80%;
}

sub,sup {
  /*去除sub、sup对行高的影响*/
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  /*统一位置*/
  bottom: -0.25em;
}

sup {
  /*统一位置*/
  top: -0.5em;
}

audio,video {
  /*重置IE8-浏览器的display    */
  display: inline-block;
}

audio:not([controls]) {
  /*重置iOS 4-7中的display及height*/
  display: none;
  height: 0;
}

img {
  /*重置IE9-浏览器的border-style*/
  border-style: none;
}

svg:not(:root) {
  /*重置IE浏览器中的overflow*/
  overflow: hidden;
}

button,input,optgroup,select,textarea {
  /*统一样式*/
  /*移除Firefox and Safari中的margin*/
  font-family: sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

button,input {
  /*重置IE浏览器中的overflow*/
  overflow: visible;
}

button,select {
  /*重置firefox浏览器中的text-transform*/
  text-transform: none;
}

button,html [type="button"], [type="reset"],[type="submit"] {
  /*重置webkit浏览器的appearance属性*/
  -webkit-appearance: button;
}

button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner {
  /*重置firefox浏览器中的border和padding*/
  border-style: none;
  padding: 0;
}

button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring {
  /*统一outline*/
  outline: 1px dotted ButtonText;
}

fieldset {
  /*重置firefox浏览器的padding*/
  padding: 0.35em 0.75em 0.625em;
}

legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}

progress {
  /*重置IE9-浏览器的display*/
  display: inline-block;
  /*重置Chrome*/, Firefox浏览器的vertical-align
  vertical-align: baseline;
}
textarea {
  /*移除IE浏览器中默认的垂直滚动条*/
  overflow: auto;
}

[type="checkbox"],[type="radio"] {
  /*重置IE9-浏览器的box-sizing及padding    */
  box-sizing: border-box;
  padding: 0;
}

[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button {
  /*修正Chrome中增加和减量按钮的光标样式*/
  height: auto;
}

[type="search"] {
  /*重置Chrome and Safari的appearance和outline-offset*/
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

[type="search"]::-webkit-search-cancel-button,[type="search"]::-webkit-search-decoration {
  /*在macOS上删除Chrome和Safari中的内填充和取消按钮。*/
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  /*在iOS和Safari中，纠正无法点击的类型。*/
  -webkit-appearance: button;
  font: inherit;
}

details, menu {
  /*重置IE8-浏览器的display*/
  display: block;
}

summary {
  /*统一display*/
  display: list-item;
}

canvas {
  /*重置IE8-浏览器的display*/
  display: inline-block;
}

template {
  /*重置IE浏览器的display*/
  display: none;
}

[hidden] {
  /*重置IE9-浏览器的display    */
  display: none;
}
```
