# CSS - 各种阴影

- `box-shadow`：边框阴影
- `text-shadow`：文字阴影
- `drop-shadow`：多边形阴影
- 通过阴影弱化背景

## 【1】`box-shadow`：边框阴影

### 【1.1】单侧阴影

```css
box-shadow: 15px 0 5px -10px #000;
```

<div class="example-box">
  <div class="item" style="box-shadow: 15px 0 5px -10px #000;">文字内容</div>
</div>

| `h-shadow` | `v-shadow` | `blur` | `spread` | `color` |     `insect`     |
| :--------: | :--------: | :----: | :------: | :-----: | :--------------: |
|  水平阴影  |  垂直阴影  |  模糊  | 阴影尺寸 |  颜色   | 外阴影转到内阴影 |

### 【1.2】多侧阴影

```css
box-shadow: 15px 0 5px -10px #000, -15px 0 5px -10px #000;
```

<div class="example-box">
  <div class="item" style="box-shadow: 15px 0 5px -10px #000, -15px 0 5px -10px #000;">文字内容</div>
</div>

## 【2】`text-shadow`：文字阴影

```css
text-shadow: 5px 5px 5px #f0f;
```

<div class="example-box">
  <p style="text-shadow: 5px 5px 5px #f0f;">文字内容</p>
</div>

参数：x 轴、y 轴、阴影、颜色。

**文字效果**

```css
/* 凸起印刷效果 */
text-shadow: 0 1px 1px rgba(0, 0, 100, 0.8);
/* 文字外发光效果 */
text-shadow: 0 0 0.1rem, 0 0 0.3rem;
/* 文字凸起效果 */
text-shadow: 0 1px hsl(0, 0%, 85%), 0 2px hsl(0, 0%, 80%), 0 3px hsl(0, 0%, 75%), 0 4px hsl(0, 0%, 70%);
```

## 【3】`drop-shadow`：多边形阴影

!> 文字也会有阴影

```css
width: 0;
height: 0;
border: 100px solid;
border-color: transparent transparent #338fff;
filter: drop-shadow(5px 5px 5px #000);
```

<div class="example-box">
  <div style="width: 0;
height: 0;
border: 100px solid ;
border-color: transparent transparent #338fff;
filter: drop-shadow(5px 5px 5px #000);"></div>
  <p style="filter: drop-shadow(5px 5px 5px #000);">文字内容</p>
</div>

参数：x 轴、y 轴、阴影、颜色。

◆ 实例：图标换色

```css
filter: drop-shadow(#f00 20px 0);
transform: translate(-20px, 0);
```

<style>
.icon{ 
  width:100px; 
  margin:0 auto; 
  position:relative; 
  overflow:hidden;
}
.icon img{ 
  display:block; 
  margin:0 auto; 
  position:relative; 
  filter: drop-shadow(100px 0 #f00); 
}
.icon:hover img{
  transform: translate(-100px, 0);
}
</style>
<div class="example-box">
  <p>鼠标悬浮变色</p>
  <div class="icon">
    <img src="https://s1.ax1x.com/2022/03/17/qC38je.png" style="" />
  </div>
</div>

## 【4】通过阴影弱化背景

```css
box-shadow: 0 0 0 50vmax rgba(0, 0, 0, 0.8);
```

重点：用伪元素设置 blur

<iframe height="300" style="width: 100%;" scrolling="no" title="用伪元素设置 blur" src="https://codepen.io/firefly1984982452/embed/mdpVdyo?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/mdpVdyo">
  用伪元素设置 blur</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

重点代码：

```css
.cover{
  position: relative;
}
.cover::before{
  position: absolute;
  filter: blur(5px);
  background: url('./floor.jpeg') center center no-repeat;
  z-index: -1;
}
.content{
  position: absolute;
}
<div class="cover">
  <div class="content">我是内容</div>
</div>
```

---
