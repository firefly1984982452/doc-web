# CSS - transition 过渡

可以直接写`transition:all 2s;`来过渡所有样式。

```css
<style>
  div {
    width: 100px;
    height: 100px;
    background: red;
    position: relative;
    /* 简写 */
    /* transition: width 2s linear 1s; */

    /* 属性名称 */
    transition-property: width;
    /* 持续时间 */
    transition-duration: 2s;
    /* 曲线 */
    transition-timing-function: linear;
    /* 延迟时间 */
    transition-delay: 1s;
  }

  div:hover {
    width: 300px;
  }
</style>
```

```html
<div></div>
```

**曲线：animation-timing-function**

- `linear`：速度从头至尾相同。
- `ease`：【默认】低速开始和结束，中间速度快。
- `ease-in`：低速开始。
- `ease-out`：低速结束。
- `ease-in-out`：低速开始和结束
