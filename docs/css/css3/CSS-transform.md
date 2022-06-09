# CSS - transform

- [所有旋转效果](https://c.runoob.com/codedemo/3391)

```css
/* 转换中心 */
transform-origin: top;
/* 旋转 */
transform: rotate(45deg);
/* 倾斜 */
transform: skew(45deg);
/* 梯形效果 */
transform: perspective(45deg);
/* 平移 */
transform: translate(20px, 10px);
/* 缩放 */
transform: scale(0.5);
/* 椭圆 */
transform: rotate3d(1, 0, 0, 83deg);
```

也可以所有属性合并：

```css
transform: rotate(45deg) translate(20px, 10px) scale(0.5) skew(45deg);
```

◆ 使用`transform: translateZ(0)` 用 GPU 硬件加速提升性能

使用 `translatZ` 之后，变成了 3D 效果，走 GPU 渲染，开始硬件开速。

## 【1】`rotate`：旋转

**rotate(10turn)代表转 10 圈**

<div class="example-box">
  <div class="box" style="margin: 60px 0 0 60px; width: 300px; border: 1px solid #bbf; transform: rotate(45deg); overflow: hidden">
    <img src="https://s1.ax1x.com/2022/03/11/bI6bE8.png" style="width: 100%; transform: rotate(-45deg) scale(1.5)" />
  </div>
</div>

### 【1.1】菱形

```css
.lin {
  width: 200px;
  height: 200px;
  overflow: hidden;
  transform: rotate(45deg);
}
.lin > img {
  width: 100%;
  height: 100%;
  transform: rotate(-45deg) scale(1.5);
}
```

**如果不用`scale(1.5)`的话就是八角形**。

### 【1.2】长方形

```css
.lin-long > img {
  clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  transition: ls clip-path;
}
.lin-long > img:hover {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}
```

## 【2】`skewX`：倾斜

`transform: skewX(-45deg);` // 平形四边形

**skewX 默认会把字体内容也旋转，解决方式是加伪元素**

```css
.box {
  position: relative;
  width: 100px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  z-index: 0;
}
.box::before {
  content: "";
  position: absolute;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
  background-color: #ffb;
  transform: skewX(-45deg);
}
```

## 【3】`perspective`：梯形效果

```css
transform: perspective(30px) rotateX(5deg);
```

<div class="example-box">
  <div class="item bg-color-green" style="width: 200px;transform: perspective(30px)rotateX(5deg); font-size:2em;">文字内容</div>
</div>

这样会导致文字内容变成梯形，所以用伪元素生成

```css
.border {
  width: 200px;
  height: 100px;
  position: relative;
}
.border::before {
  content: "";
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  background: #fbb;
  transform: perspective(30px) rotateX(5deg);
}
```

<style>

.perspective{
  position: relative;
  font-size:2em;
}
.perspective::before{
  content: '';
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  background:#fbb;
  transform: perspective(30px)rotateX(5deg);
}
</style>
<div class="example-box">
  <div class="item perspective" style="width: 200px;">文字内容</div>
</div>
