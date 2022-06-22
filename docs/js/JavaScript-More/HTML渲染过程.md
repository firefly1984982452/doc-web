# HTML 渲染过程

1. 解析 HTML，构成 DOM
2. 解析 CSS，形成 CSS 对象模型
3. 将 CSS 和 DOM 合并，构成渲染模型
4. 绘制

- 重绘：`corlor`、`border`、`visibility`：只会小变动；
- 重排（回流）：DOM 操作、CSS 属性改变、伪类操作，会大变动。
