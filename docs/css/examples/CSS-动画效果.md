# CSS - 动画效果

## 空间动画

- [原文链接](https://css-tricks.com/recreating-the-apple-music-hits-playlist-animation-in-css/)

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/firefly1984982452/embed/JjpmMbX?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/JjpmMbX">
  Untitled</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## border 边框动效

<iframe height="300" style="width: 100%;" scrolling="no" title="border边框动效" src="https://codepen.io/firefly1984982452/embed/eYVPyrN?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/eYVPyrN">
  border边框动效</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## 沿环形路径平移的动画

<iframe height="300" style="width: 100%;" scrolling="no" title="沿环形路径平移的动画" src="https://codepen.io/firefly1984982452/embed/poaxpBv?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/poaxpBv">
  沿环形路径平移的动画</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## 椭圆环绕动效

- [学习链接](https://www.cnblogs.com/lin494910940/p/14051631.html)

- [效果链接](https://firefly1984982452.github.io/my-web-page/oval-around.html)

<iframe height="300" style="width: 100%;" scrolling="no" title="椭圆环绕动效" src="https://codepen.io/firefly1984982452/embed/jOZeYjN?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/jOZeYjN">
  椭圆环绕动效</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## 思路

单个球的环绕运动

```css
.area > .ball1 {
  animation: anmiteX 12s linear 0s infinite alternate, anmiteY 12s linear 0s infinite alternate;
}
/* 动画 */
/* 在X轴上的移动 */
@keyframes anmiteX {
  from {
    left: 100px;
  }
  to {
    left: 1000px;
  }
}
/* 在轴上Y的移动 */
@keyframes anmiteY {
  from {
    top: 100px;
  }
  to {
    top: 600px;
  }
}
```

此时只是叠加动画，加上 6 秒的时间差之后才有上右下左的环绕效果：

```css
animation: anmiteX 12s linear -6s infinite alternate, /* 叠加上6秒时间差 */ anmiteY 12s linear 0s
    infinite alternate;
```

再加上贝塞尔曲线。

## 自定义复选框

<iframe height="300" style="width: 100%;" scrolling="no" title="自定义复选框" src="https://codepen.io/firefly1984982452/embed/abqREXp?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/abqREXp">
  自定义复选框</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## 上下左右箭头

<iframe height="300" style="width: 100%;" scrolling="no" title="上下左右箭头" src="https://codepen.io/firefly1984982452/embed/MWQPrzw?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/MWQPrzw">
  上下左右箭头</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

```css
width: 20px;
height: 20px;
border-top: 1px solid #c3c8d6;
border-right: 1px solid #c3c8d6;
// 上
transform: rotate(-45deg);
// 下
transform: rotate(135deg);
// 左
transform: rotate(-135deg);
// 右
transform: rotate(45deg);
```

---
