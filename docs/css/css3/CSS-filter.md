# CSS - filter 滤镜

- [filter 所有效果](https://www.runoob.com/try/try.php?filename=trycss_ex_images_filters)

◆ 常用：

- blur：高斯模糊
- drop-shadow：阴影

!> 多个`filter`滤镜一起使用：**加空格**

```css
filter: blur(4px) brightness(0.3);
```

## 进阶 - 毛玻璃效果

◆ 方法一：`backdrop-filter`

```css
backdrop-filter: blur(10px);
```

注：`backdrop-filter`中其它属性大多只是[颜色变化](https://cloud.tencent.com/developer/section/1072021)。

```css
backdrop-filter: contrast(40%);
backdrop-filter: drop-shadow(4px 4px 10px blue);
backdrop-filter: grayscale(30%);
backdrop-filter: hue-rotate(120deg);
backdrop-filter: invert(70%);
backdrop-filter: opacity(20%);
backdrop-filter: sepia(90%);
backdrop-filter: brightness(60%);
backdrop-filter: saturate(80%);
```

◆ 方法二：在`::before`里面加传统`filter`

<iframe height="300" style="width: 100%;" scrolling="no" title="::before里面的filter效果" src="https://codepen.io/firefly1984982452/embed/XWVXJmy?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/XWVXJmy">
  ::before里面的filter效果</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
