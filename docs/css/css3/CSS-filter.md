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

[codepen 代码地址](https://codepen.io/firefly1984982452/pen/XWVXJmy)
