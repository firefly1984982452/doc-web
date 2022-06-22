# `<script>`标签

## 【1】`<noscript>`

`<noscript>`标签：当页面不支持`script`或禁用了`script`时会显示`<noscript>`里面的内容。

## 【2】`<script>`中的`async`和`defer`

1. `<script src="script.js"></script>`：读到就立即执行。

2. `<script async src="script.js"></script>`：和 DOM 并行进行（异步）。

3. `<script defer src="script.js"></script>`：和 DOM 并行进行（异步），但在所有`script.js`的执行解析完后，`DOMContentLoaded`事件触发完成之前。
