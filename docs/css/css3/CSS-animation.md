# CSS - animation 动画

## 【1】写法

```css
<style>
  div {
    width: 0px;
    height: 100px;
    background: red;
    position: relative;
    /* 全称名字 */
    /* animation: name duration timing-function delay iteration-count direction fill-mode;  */

    /* 全称简写 */
    /* animation: mymove 5s linear 1s 1 alternate backwards;  */

    /* 名称 */
    animation-name: mymove;
    /* 速度 */
    animation-duration: 5s;
    /* 曲线 */
    animation-timing-function: linear;
    /* 延迟 */
    animation-delay: 1s;
    /* 次数 */
    animation-iteration-count: 1 | infinite;
    /* 反向播放 */
    animation-direction: normal;
    /* 填充模式 */
    animation-fill-mode: both;
    /* 运行状态 */
    animation-play-state: running ;
  }

  /* 鼠标悬浮在动画上时暂停 */
  div:hover{
    animation-play-state: paused ;
  }

  @keyframes mymove {
    from {
      background-color: #fbb;
      width: 10px;
    }

    to {
      width: 300px;
    }
  }
</style>
```

```html
<div>content</div>
```

## 【2】属性解析

### 【2.1】曲线：animation-timing-function

- `linear`：速度从头至尾相同。
- `ease`：【默认】低速开始和结束，中间速度快。
- `ease-in`：低速开始。
- `ease-out`：低速结束。
- `ease-in-out`：低速开始和结束

**该属性还有个不常用的值：steps(10)代表次数，可以做逐帧动画。**

### 【2.2】反向播放：animation-direction

- `normal`：【默认】只正常播放
- `alternate`：轮流反向播放

### 【2.3】填充模式

[学习链接](https://www.w3cplus.com/css3/understanding-css-animation-fill-mode-property.html)

- `none`：【默认】无改变。
- `forwards`：保留最后一帧，不回到初始状态。
- `backwards`：延迟的等待时间内，元素的样式变为第一帧的样式。
- `both`：同时应用`forwards`和`backwards`的效果。

## 【3】更多用法

### 【3.1】模拟打字动画

用`width:0`到`width:100%`模拟出打字效果。

```css
@keyframes typing {
  from {
    width: 0;
  }
}
p {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  animation: typing 18s;
}
```

## 【4】其它组合

### 【4.1】backface-visibility：背面向屏幕时是否可见

[codepen 代码地址](https://codepen.io/firefly1984982452/pen/WNdrNow)

## 【5】使用 requestAnimationFrame 手动反复调用动画

```js
this.$refs.ref_trademark.className = "trademark";
window.requestAnimationFrame(() => {
  window.requestAnimationFrame(() => {
    this.$refs.ref_trademark.className = "trademark animation";
  });
});
```
