# CSS - 交互优化

## 【1】scroll-behavior

- [学习链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/scroll-behavior)

当用户手动导航时设置更平滑的滚动。

```css
scroll-behavior: smooth;
```

## 【2】scroll-snap-type

- [学习链接](https://www.cnblogs.com/coco1s/p/11993942.html)

值：

- `mandatory`【默认】：滚动结束后强制停在指定的地方。

- `proximity`【接近】：滚动结束后可能停在结束的地方，也可以会偏移一些（配合`scroll-snap-align`一起使用）。

一般用在父元素上。

## 【3】scroll-snap-align

方向：`start`/`center`/`end`。

一般用在子元素上。

## 【4】scroll-margin/scroll-padding

## 【5】overflow-anchor：滚动锚点

- [学习链接](https://www.zhangxinxu.com/wordpress/2020/08/css-overflow-anchor/)

```css
overflow-anchor: auto; // 默认，自动
overflow-anchor: none; // 禁止滚动锚点
```

## 【6】touch-action：触摸操作

- `touch-action: none;` 禁止有任何操作，此时的 scroll 无效
- `touch-action: pan-x;` 此时只有 x 轴能滑动，y 粙是滑动不了的。

- [其它](https://developer.mozilla.org/zh-CN/docs/Web/CSS/touch-action)
