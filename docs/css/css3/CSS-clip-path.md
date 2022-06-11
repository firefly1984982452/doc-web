# CSS - clip-path 多边形裁剪路径

可以裁剪图片

效果预览：

<iframe height="500" style="width: 100%;" scrolling="no" title="clip-path 多边形裁剪路径" src="https://codepen.io/firefly1984982452/embed/GRQwpMo?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/GRQwpMo">
  clip-path 多边形裁剪路径</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## 【1】矩形：inset

◆ 语法：

```css
clip-path: inset(上 右 下 左); // 4个值
clip-path: inset(上右下左); // 1个值
clip-path: inset(上 左右 下); // 3个值
clip-path: inset(下 左右); // 2个值
clip-path: inset(上右下左 round 圆角); // 值+圆角【border-radius】
```

◆ 示例：

```css
clip-path: inset(10px 20px 0px 5px); // 矩形
clip-path: inset(25% 5px round 5px 25%); // 其它
```

## 【2】圆形：circle

◆ 语法：

```css
clip-path: circle(半径 at x y);
```

◆ 示例：

```css
clip-path: circle(50% at 50% 50%); // 正圆
clip-path: circle(); // 正圆-简写
clip-path: circle(50% at 0 100%); // 其它形状圆
```

## 【3】椭圆：ellipse

◆ 语法：

```css
clip-path: ellipse(x y at 圆心x 圆心y);
```

◆ 示例：

```css
clip-path: ellipse(30% 20% at 50% 50%); // 正圆
clip-path: ellipse(40% 20% at 20% 70%); // 其它形状
```

## 【4】多边形：polygon

◆ 语法：

```css
clip-path: polygon(x1 y1, x2 y2, x3 y3, ...);
```

◆ 示例：

1. 多边形

```css
clip-path: polygon(0 0, 90% 0, 100% 25%, 100% 100%, 10% 100%, 0 85%);
```

2. 三角形

```css
clip-path: polygon(0 100%, 50% 0, 100% 100%);
```

三角形原理：

![image](https://s1.ax1x.com/2022/03/17/q9yjbt.jpg)

---
