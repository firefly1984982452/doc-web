# CSS - mask 面具

- [学习链接](https://www.zhangxinxu.com/wordpress/2017/11/css-css3-mask-masks/)

!> 目前一定要用-webkit-来兼容

- mask-image：面具图像
- mask-mode：面具模型
- mask-repeat：面具重复
- mask-position：面具位置
- mask-clip：面具裁剪
- mask-size：面具大小
- mask-composite：面具复合

[codepen 代码地址](https://codepen.io/firefly1984982452/pen/YzYwPpw)

```css
img {
  width: 100%;
  height: 100%;
  border: 20px solid #f00;
  -webkit-mask-image: url("https://firefly1984982452.github.io/my-web-page/animation.png");
}
```

```html
<img src="https://s1.ax1x.com/2022/03/11/bI6bE8.png" alt="" srcset="" />
```

<div class="example-box" style="height:250px">
  <img style="-webkit-mask-image: url('https://firefly1984982452.github.io/my-web-page/animation.png');
  mask-image: url('https://firefly1984982452.github.io/my-web-page/animation.png');" 
  height="100px" 
  src="https://s1.ax1x.com/2022/03/11/bI6bE8.png">
</div>
