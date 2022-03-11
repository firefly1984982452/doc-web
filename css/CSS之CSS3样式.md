---
title: CSS之CSS3样式
date: 2021-01-07 14:19:32
categories:
  - program
---

<style>
  p.example{
    color:#f00;
    border: 1px solid;
  }
  div.example{
    border: 1px solid #f00;
  }
</style>

- [MDN 全元素](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

# 一、选择器

## 【1】伪元素、伪类选择器

[预览效果](https://firefly1984982452.github.io/my-web-page/select-page.html)

[源码](https://github.com/firefly1984982452/my-web-page/blob/master/select-page.html)

### 【1.1】伪元素

- ::after【后文内容】
- ::before【前文内容】
- ::first-letter【首字母】
- ::first-line【首行】
- ::selection【选中文字】
- ::default【默认】
- ::marker【标记】

### 【1.2】伪类

- :hover【悬浮】
- :root【根元素】
- :target【目标】

### 【1.3】伪类【form 验证】

- :checked【选中某项】
- :disabled【不能用】
- :enabled【能用】
- :empty【空内容】
- :focus【聚焦】
- :focus-within【聚焦内容】
- :in-range【在范围内】
- :out-of-range【超出范围】
- :invalid/valid/required【验证】
- :placeholder-shown【提示内容】
- :read-only【只读】
- :read-write【只写】

### 【1.4】伪类【link 链接】

- :active【点击时】
- :link【链接】
- :visited【访问过】
- :any-link【任意链接】

### 【1.5】伪类【父子兄弟元素】

- :first-child【首个子元素】
- :last-child【末个子元素】
- :nth-child【第 n 个子元素】
- :nth-last-child【倒数第 n 个子元素】
- :only-child【仅有 1 个子元素】
- :first-of-type【首个类型元素】
- :last-of-type【末个同类型元素】
- :nth-of-type【第 n 个同类型元素】
- :nth-last-of-type【倒数第 n 个同类型元素】
- :only-of-type【仅有 1 个同类型元素】
- :not【不包含】

## 【2】`:focus`与`:focus-within`

如果只使用`:focus`，它不能包含子元素的聚焦事件（比如输入框、按钮聚焦）。

以下内容无效：

```
.container:focus input {
  width: 230px;
}
```

用:focus-within 解决：

```
.container:focus-within input {
  width: 230px;
}
```

当父元素聚焦时，`input`内容也会随之改变。

**例子：不同的登录状态**

![image](https://user-images.githubusercontent.com/8554143/43560900-2ef72358-9647-11e8-8123-ecfc45828c3d.gif)

```
img{
  display: none;
  position: fixed;
  top: 0;
  left: 0;
}
.g-container{
  margin: 200px 0 0 0;
}
.g-username:focus-within img{
  display: block;
}
.g-password:focus-within img{
  display: block;
}

...

<div class="g-container">
    <h2>登录</h2>
    <div class="g-username">
        <input name="loginPhoneOrEmail" maxlength="64" placeholder="请输入手机号或邮箱" class="input">
        <img src="https://b-gold-cdn.xitu.io/v3/static/img/greeting.1415c1c.png" class="g-username">
    </div>

    <div class="g-password">
        <input name="loginPassword" type="password" maxlength="64" placeholder="请输入密码" class="input">
        <img src="https://b-gold-cdn.xitu.io/v3/static/img/blindfold.58ce423.png" class="g-password">
    </div>
</div>
```

## 【3】`:root`选择器

```
:root{
  color: red;
}
html{
  color: green;
}
```

最后出来的颜色是`red`，`:root`选择器代表是根元素，代表`html`，但优先级比`html`高。

## 【4】`::backdrop`：全屏下的对象样式

1.用于 `dialog` 弹框

```
dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.8);
}
```

2.用于 `video` 全屏

```
video::backdrop {
  background-color: #f00;
}
```

## 【5】`:fullscreen`：全屏样式

```
div:fullscreen{
  color: #ff0;
}
```

## 【6】`:is`:是否选择器

原来的写法：

```
section h1,
section h2,
article h1 {
  color: #f00;
}
```

使用`:is`优化后的写法：

```
:is(section,article) :is(h1,h2){
  color: #f00;
}
```

## 【7】:nth-child 选择器

- 偶数标签：`:nth-child(2n)`或`:nth-child(even)`
- 奇数标签：`:nth-child(2n-1)`或`nth-child(odd)`
- 从第 6 个 至最后一个：`:nth-child(n+6)`
- 第 1 个到第 6 个：`:nth-child(-n+6)`
- 第 6 个到第 9 个：`:nth-child(n+6):nth-child(-n+9)`

---

# 二、边框

- `text-emphasis`
- `border-radius`
- `box-shadow`
- `border-image`
- `border-style`

## 【0】`text-emphasis`：强调文字

◆ 示例：

<p class="example" style="text-emphasis: open green;-webkit-text-emphasis: open green;">你好，hello world.</p>

◆ 代码：

```
text-emphasis: 'x';
text-emphasis: '点';
text-emphasis: '\25B2';
text-emphasis: '*' #555;
text-emphasis: 'foo';

text-emphasis: filled;
text-emphasis: open;
text-emphasis: filled sesame;
text-emphasis: open sesame;

text-emphasis: filled sesame #555;


-webkit-text-emphasis-position: under;
```

## 【1】box-shadow

`box-shadow: 50px 50px 0 20px #ffb;`

◆ 示例图：

![image](https://wx3.sinaimg.cn/mw690/0069qZtTgy1gj0nvzcynqj308y069dfn.jpg)

◆ 解析：

```
参数1：X轴，图中为30，因为50-20=30；
参数2：Y轴，图中为30，因为50-20=30；
参数3：模糊距离
参数4：阴影大小，默认可省略不写时为0。
参数4：颜色。
```

## 【2】border-image

`border-image-repeat`: 重复（`repeat`）、拉伸（`stretch`）或铺满（`round`）。

```
border-image: url(border.png) 30 round;
```

## 【3】半透明边框

`rgba`或`hsla`

```
color: hsla(1,0%,100%,.2);
border: solid 3px;
border-color: rgba(255,255,0,.2);
```

## 【4】多重边框

### 【4.1】用 box-shadow

![image](https://wx3.sinaimg.cn/large/0069qZtTgy1gizk2ty7otj304304aa9x.jpg)

```
background: #fbfb;
box-shadow: 0 0 0 5px #f00, 0 0 0 10px #ff0, 0 0 0 15px #00f;
```

### 【4.2】用 outline

![image](https://wx4.sinaimg.cn/mw1024/0069qZtTgy1gizka5updnj3042044746.jpg)

```
background: #fbfb;
outline: 5px solid #ff0;
border: 5px solid #f00;
```

◆ **outline 和 border 的区别**：

- `outline`不占空间，`border`占空间
- 设置圆角（`border-radius`）之后，`border`边框会贴紧，`outline`不会
- `outline-set`可以设置边距

◆ **区别的图片**

![image](https://wx1.sinaimg.cn/mw1024/0069qZtTgy1gizkad0s9lj304k04aweg.jpg)

◆ **区别的代码**:

```
background: #fbfb;
outline: 5px solid #ff0;
border: 5px solid #f00;
border-radius: 50%;
outline-offset: 10px;
```

◆ `outline-offset`：偏移

```
outline: 1px dashed #f00;
outline-offset: -10px;
```

## 【5】border-style 属性

[效果](https://www.w3school.com.cn/tiy/t.asp?f=csse_border-style)

- `none`：无；
- `hidden`：同“`none`”，在 `table` 中能解决边框冲突；
- `dotted`：点；
- `dashed`：虚线；
- `solid`：实线；
- `double`：双实线；
- `inset`：3D 内边框;
- `outset`：3D 外边框;
- `groove`：凹槽边框；
- `ridge`：垄状边框；

## 【6】信封边框

<div
  style="
    width: 200px;
    height: 100px;
    padding: 1em;
    border: 10px solid transparent;
    background: linear-gradient(white, white) padding-box, repeating-linear-gradient(-45deg, black 0, black 25%, white 0, white 50%);
    background-size: 0.6em 0.6em;
  "
></div>

```
.box {
  width: 200px;
  height: 100px;
  padding: 1em;
  border: 10px solid transparent;
  background: linear-gradient(white, white) padding-box, repeating-linear-gradient(-45deg, black 0, black 25%, white 0, white 50%);
  background-size: 0.6em 0.6em;
}
```

## 【7】重复边框背景图片

[链接](https://dabblet.com/gist/c73fd4ea4b592a05c004)

```
border: 10px solid;
border-image: 33.3% url("./test.jpg") round;
```

## 【8】border-radius 中斜杠`/`的用法

◆ 自适应椭圆

<div class="box" style="width: 300px; height: 100px; background-color: #fbb; border-radius: 20% / 50%"></div>

```
width: 300px;
height: 100px;
background-color: #fbb;
border-radius: 20% / 50%;
```

◆ 半圆

<div class="box" style="width: 50px; height: 100px; background-color: #fbb; border-radius: 0 100% 100% 0 / 50%"></div>

```
width: 50px;
height: 100px;
background-color: #fbb;
border-radius: 0 100% 100% 0 / 50%
```

◆ 其它形状

<div class="box" style="width: 300px; height: 100px; background-color: #fbb; border-radius: 10% 50% / 50% 10%"></div>

```
width: 300px;
height: 100px;
background-color: #fbb;
border-radius: 10% 50% / 50% 10%;
```

◆ 斜杠`/`的用法

[链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-radius)

```
border-radius: 1em/5em;

/* 等价于： */

border-top-left-radius:     1em 5em;
border-top-right-radius:    1em 5em;
border-bottom-right-radius: 1em 5em;
border-bottom-left-radius:  1em 5em;
```

`border-top-left-radius: 1em 5em;`意思是：`top`为`1em`，`left`为`5em`。

---

# 三、背景：`background`

## 【1】区域起源：background-origin

背景区域的位置，有如下属性：

- `content-box`：`padding`值会起效，以`padding`开始的单位开始显示背景；

- `padding-box`：`padding`不会影响背影，直接从`border`里面开始显示背影；

- `border-box`：`border`不会影响背景，直接把`border`的内容也算在背影里面，背景会减去`border`的长度。

![image](https://wx3.sinaimg.cn/large/0069qZtTgy1gmojvywhjdj30nj09q0vi.jpg)

## 【2】区域剪辑：background-clip

背景区域的位置，有如下属性：

- `content-box`：`padding`值会起效，以`padding`开始的单位开始显示背景，**`padding`的部分会被剪掉**；

- `padding-box`：`padding`不会影响背影，直接从`border`里面开始显示背影；

- `border-box`：`border`**会**影响背景，和`padding-box`的效果一样。

![image](https://wx4.sinaimg.cn/large/0069qZtTgy1gmojw61vn4j30nr0arq4z.jpg)

**对比：**

![image](https://wx2.sinaimg.cn/large/0069qZtTgy1gmojwa6l61j30re0iv79f.jpg)

## 【3】图片：background-image

背景图，有如下属性：

- `url()`：图片地址
- `linear-gradient()`渐变背景

背景图片可以有多个，可以摆放在任意位置

```
background: url('1.png'),
            url('2.png'),
            url('3.png'),
            url('4.png');
background-repeat: no-repeat;
background-size: 0.2rem 0.2rem;
background-position: 0 0, 100% 0, 0 100%, 100% 100%;
<!-- 或写成下面这样 -->
background-position: top left, top right, bottom left, bottom right;
```

## 【4】位置：background-position

让背景图在距离右边和底部都是 20px，如图：

![image](https://wx4.sinaimg.cn/mw690/0069qZtTgy1gizlk17h0ej303b03i74d.jpg)

### 【4.1】background-position

方法一：

```
background: url(img_url) no-repeat;
background-position: bottom 20px right 20px;
```

方法二：

```
padding: 20px;
background: url(img_url) no-repeat;
background-position: bottom right;
background-origin: content-box;
```

`background-origin:content-box;`和`padding:20px`结合起来的效果和方法一一样。

### 【4.2】calc

```
background: url(img_url) no-repeat;
background-position: calc(100% - 20px, 100% - 20px);
```

## 【5】背景依附：background-attachment

背景依附，默认为`scroll`，随背景滚动

```
background-attachment: fixed; // 背景不会随内容滚动
```

用`background-attachment`实现滚动提示

![image](https://wx2.sinaimg.cn/large/0069qZtTgy1gmf5vn5ch4j307l07igln.jpg)

```
background-image: radial-gradient(at top, rgba(0,0,0,0.2), rgba(0,0,0,0));
background-repeat: no-repeat;
background-size: 100% 15px;
background-attachment: local, scroll;
```

## 【6】背景重复：background-repeat

◆ **属性**

- `repeat`【默认】：平铺满整个容器，可能会造成背景图片显示不全。
- `repeat-x`： 背景图片沿容器的 X 轴平铺。
- `repeat-y`：背景图片沿容器的 Y 轴平铺。
- `no-repeat`：背景图片不做任何平铺。
- `round`：升缩背景图片适应容器大小。
- `space`：平均分配相邻图片之间的空间。

◆ **示例**

![image](https://wx3.sinaimg.cn/large/0069qZtTgy1gnbbuxfn3aj31hb0sk154.jpg)

[效果预览](https://firefly1984982452.github.io/my-web-page/background-repeat.html)

---

# 四、转换：`transform`

[所有旋转效果](https://c.runoob.com/codedemo/3391)

```
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
transform: scale(.5);
/* 椭圆 */
transform: rotate3d(1, 0, 0, 83deg);

```

也可以所有属性合并：

```
transform: rotate(45deg) translate(20px, 10px) scale(.5) skew(45deg);
```

◆ 使用`transform: translateZ(0)` 用 GPU 硬件加速提升性能

使用 `translatZ` 之后，变成了 3D 效果，走 GPU 渲染，开始硬件开速。

## 【1】`rotate`：旋转

**rotate(10turn)代表转 10 圈**

<div class="box" style="margin: 60px 0 0 60px; width: 300px; border: 1px solid #bbf; transform: rotate(45deg); overflow: hidden">
  <img src="https://wx1.sinaimg.cn/mw690/0069qZtTgy1go96k54t3lj30ru0rqx6p.jpg" style="width: 100%; transform: rotate(-45deg) scale(1.5)" />
</div>

### 【1.1】菱形

```
.lin{
  width: 200px;
  height: 200px;
  overflow: hidden;
  transform: rotate(45deg);
}
.lin > img{
  width: 100%;
  height: 100%;
  transform: rotate(-45deg)scale(1.5);
}
```

**如果不用`scale(1.5)`的话就是八角形**。

### 【1.2】长方形

```
.lin-long > img{
  clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  transition: ls clip-path;
}
.lin-long > img:hover{
  clip-path: polygon(0 0 , 100% 0, 100% 100%, 0 100%);
}
```

## 【2】`skewX`：倾斜

`transform: skewX(-45deg);` // 平形四边形

**skewX 默认会把字体内容也旋转，解决方式是加伪元素**

```
.box{
  position: relative;
  width: 100px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  z-index: 0;
}
.box::before{
  content: '';
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

![image](https://wx2.sinaimg.cn/mw690/0069qZtTgy1gj0mzj9rt8j307o041t8i.jpg)

`transform: perspective(30px)rotateX(5deg);`

同样会导致内容变成梯形，所以用伪元素生成

```
.border{
  width: 200px;
  height: 100px;
  position: relative;
}
.border::before{
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
```

## 【4】`matrix`：矩阵

`skew`、`scale`、`rotate`、`translate` 等全都是由 `matrix` 矩阵实现的。

```
transform: matrix(2, 2, 0, 2, 45, 0);
```

---

# 五、多边形裁剪路径：`clip-path`

可以裁剪图片

[效果预览](https://firefly1984982452.github.io/my-web-page/clip-path.html)

## 【1】矩形：inset

◆ 语法：

```
clip-path:inset(上 右 下 左); // 4个值
clip-path:inset(上右下左); // 1个值
clip-path:inset(上 左右 下); // 3个值
clip-path:inset(下 左右); // 2个值
clip-path:inset(上右下左 round 圆角); // 值+圆角【border-radius】
```

◆ 示例：

![image](https://wx2.sinaimg.cn/mw690/0069qZtTgy1gnbaa0b9f5j30ok09oaa8.jpg)

```
clip-path: inset(10px 20px 0px 5px); // 矩形
clip-path: inset(25% 5px round 5px 25%);// 其它
```

## 【2】圆形：circle

◆ 语法：

```
clip-path:circle(半径 at x y);
```

◆ 示例：

![image](https://wx3.sinaimg.cn/mw690/0069qZtTgy1gnaii751tlj30kk08l0st.jpg)

```
clip-path: circle(50% at 50% 50%); // 正圆
clip-path: circle(); // 正圆-简写
clip-path: circle(50% at 0 100%); // 其它形状圆
```

## 【3】椭圆：ellipse

◆ 语法：

```
clip-path:ellipse(x y at 圆心x 圆心y);
```

◆ 示例：

![image](https://wx1.sinaimg.cn/mw690/0069qZtTgy1gnairkejmxj30k508hjrf.jpg)

```
clip-path: clip-path: ellipse(30% 20% at 50% 50%);; // 正圆
clip-path: ellipse(40% 20% at 20% 70%); // 其它形状
```

## 【4】多边形：polygon

◆ 语法：

```
clip-path:polygon(x1 y1, x2 y2, x3 y3,...);
```

◆ 示例：

1. 多边形

![image](https://wx4.sinaimg.cn/mw690/0069qZtTgy1gnai8f18pkj309605nt8m.jpg)

```
clip-path: polygon(0 0, 90% 0, 100% 25%, 100% 100%, 10% 100%, 0 85%);
```

2. 三角形

![image](https://wx3.sinaimg.cn/mw690/0069qZtTgy1gnai8jg39zj308e05nwed.jpg)

```
clip-path: (0 100%, 50% 0, 100% 100%);
```

三角形原理：

![image](https://wx2.sinaimg.cn/mw690/0069qZtTgy1gnai89f7bqj30hk0dxt94.jpg)

---

# 六、各种阴影

## 【1】边框阴影：box-shadow

### 【1.1】单侧阴影

![image](https://wx3.sinaimg.cn/mw690/0069qZtTgy1gj0ob24z97j306y03qmwy.jpg)

```
box-shadow: 15px 0 5px -10px #000;
```

| `h-shadow` | `v-shadow` | `blur` | `spread` | `color` |     `insect`     |
| :--------: | :--------: | :----: | :------: | :-----: | :--------------: |
|  水平阴影  |  垂直阴影  |  模糊  | 阴影尺寸 |  颜色   | 外阴影转到内阴影 |

### 【1.2】多侧阴影

![image](https://wx2.sinaimg.cn/mw690/0069qZtTgy1gj0ob7xfq6j307d03sjr7.jpg)

```
box-shadow: 15px 0 5px -10px #000, -15px 0 5px -10px #000;
```

## 【2】文字阴影：text-shadow

![image](https://wx4.sinaimg.cn/mw690/0069qZtTgy1gj0ojj9giyj305602i3yg.jpg)

```
text-shadow: 5px 5px 5px #f00;
```

参数：x 轴、y 轴、阴影、颜色。

**文字效果**

```
/* 凸起印刷效果 */
text-shadow: 0 1px 1px rgba(0, 0, 100, 0.8);
/* 文字外发光效果 */
text-shadow: 0 0 0.1rem, 0 0 0.3rem;
/* 文字凸起效果 */
text-shadow: 0 1px hsl(0, 0%, 85%), 0 2px hsl(0, 0%, 80%), 0 3px hsl(0, 0%, 75%), 0 4px hsl(0, 0%, 70%);
```

## 【3】多边形阴影：drop-shadow

◆ 文字也会有阴影

![image](https://wx4.sinaimg.cn/mw690/0069qZtTgy1gj0ol4gog9j305l03amx2.jpg)

```
width: 0;
height: 0;
border: 100px solid ;
border-color: transparent transparent red;
filter: drop-shadow(5px 5px 5px #000);
```

参数：x 轴、y 轴、阴影、颜色。

◆ 图标换色

```
filter: drop-shadow(#f00 20px 0)
```

## 【4】通过阴影弱化背景

```
box-shadow: 0 0 0 50vmax rgba(0,0,0,.8);
```

重点：用伪元素设置 blur

```
.cover{
  width: 600px;
  height: 500px;
  position: relative;
}
.cover::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 600px;
  height: 500px;
  filter: blur(5px);
  background: url('./floor.jpeg') center center no-repeat;
  z-index: -1;
}
.content{
  position: absolute;
  left: 30%;
  top: 50%;
  width: 300px;
  height: 100px;
  border: 1px solid #fbb;
}
<div class="cover">
  <div class="content">我是内容</div>
</div>
```

---

# 七、渐变：`gradient`

1. `line-gradient`：线性渐变

2. `radial-gradient`：径向渐变

3. `conic-gradient`：圆锥形渐变

4. `repeating-line-gradient`：重复线性渐变

5. `repeating-radial-gradient`：重复径向渐变

与`background-size`组合的话，可以生成条纹背景。

## 【1】linear-gradient

### 【1.1】linear-gradient：条纹背景

#### 背景为上下 2 色分割

![image](https://wx2.sinaimg.cn/mw690/0069qZtTgy1gj0f2emiabj308x05lq2r.jpg)

`background-image: linear-gradient(#ff0 50%, #f00 50%)`

#### 背景 2 色平铺

![image](https://wx3.sinaimg.cn/mw690/0069qZtTgy1gj0f2jukxkj308v05pt8r.jpg)

```
background: linear-gradient(#ff0 50%, #f00 50%);
background-size: 100% 50%;
```

#### 背景 2 色任意角度平铺

![image](https://wx1.sinaimg.cn/mw690/0069qZtTgy1gj0f30zb6bj308t05nn04.jpg)

```
background-image: repeating-linear-gradient(60deg,yellow 0%,yellow 5%,green 0%,green 10%);
```

### 【1.2】linear-gradient：切角效果

![image](https://wx3.sinaimg.cn/mw690/0069qZtTgy1gj0m36t5cij306q068web.jpg)

```
width: 200px;
height: 200px;
background:#ffb;
background: linear-gradient(135deg, transparent 15px,#fbb 0) top left,
      linear-gradient(-135deg, transparent 15px,#fbb 0) top right,
      linear-gradient(-45deg, transparent 15px, #fbb 0) bottom right,
      linear-gradient(45deg, transparent 15px, #fbb 0) bottom left;
background-size:50% 50%;
background-repeat:no-repeat;
```

## 【2】repeating-linear-gradient

背景 2 色任意角度平铺

![image](https://wx1.sinaimg.cn/mw690/0069qZtTgy1gj0f30zb6bj308t05nn04.jpg)

```
background-image: repeating-linear-gradient(60deg,yellow 0%,yellow 5%,green 0%,green 10%);
```

## 【3】radial-gradient 与 linear-gradient 类似

## 【4】conic-gradient

### 【4.1】饼图

<div
  style="
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: conic-gradient(pink 0 30%, yellow 0 70%, lime 0 100%);
  "
></div>

```
background: conic-gradient(pink 0 30%, yellow 0 70%, lime 0 100%);
```

### 【4.2】伪圆环效果

<div
  style="
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: conic-gradient(pink 0 30%, yellow 0 70%, lime 0 100%);
    display: flex;
    align-items: center;
    justify-content: center;
  "
>
  <div
    style="
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background-color: #fff;
    "
  >
  </div>
</div>

---

# 八、文本效果

## 【1】文字及段落

### 【1.1】text

- text-align: -webkit-match-parent; // 匹配父元素样式

- text-align: center | left | right | justify; // 文本对齐方式

- text-align-last: center | left | right; // 段落最后一行对齐方式

- text-decoration: overline | underline | line-through; // 文本线条的简写

- text-decoration-color: #fff; // 线条颜色

- text-decoration-line: overline | underline | line-through; // 线条位置

- text-decoration-style: solid | double | dotted | dashed | wavy ; 线条样式

- text-decoration-skip: ink | spaces | edges; // 文字和线的覆盖关系

- text-underline-position: under; // 下划线位置

- text-underline-offset: 5px; // 下划线偏移值

- text-indent: 2em; // 段落第 1 行缩进，开头空 2 格

- text-overflow: ellipsis | clip | 'string'【仅 firefox】; // 文字超出

- text-shadow: 2px 2px #ff0; // 文字阴影

- text-transform: uppercase | lowercase | capitaliza; // 文字转换大小写

- text-rendering: optimizeSpeed; // 连字形式【英文的 fi 会分开】

### 【1.2】font

- font-variant: small-caps(小型大写字母字体); // 字体变体
- font-variant-ligatures: no-common-ligatures; // 连字形式【英文的 fi 会分开】
- font-variant-numeric: slashed-zero; // 数字 0 显示为中间有斜杠，好和 o 区分

◆ `font-variant: small-caps`效果：

<p class="example" style="font-size:3em;">This</p>
<p class="example" style="font-size:3em;font-variant: small-caps">This</p>

◆ `font-variant-ligatures: no-common-ligatures`效果：

<p class="example" style="font-size:3em;">fight</p>
<p class="example" style="font-size:3em;text-rendering: optimizeSpeed;">fight</p>

◆ [链接：MDN 中 font-variant-numeric 的不同值对比](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-variant-numeric)

## 【2】行内元素文字间距自动调整

◆ 效果：

<p class="example" style="width: 100px; text-align: justify; text-align-last: justify">姓名</p>
<p class="example" style="width: 100px; text-align: justify; text-align-last: justify">家庭住址</p>

◆ 代码：

```
<style>
  div {
    width: 100px;
    text-align:justify;
    text-align-last:justify;
  }
</style>
<body>
  <divs>姓名</divs>
  <div>家庭住址</div>
</body>
```

## 【2】文字从右到左效果

◆ 区别：

- text-align: right
- direction: rtl
- unicode-bidi: bidi-override【依赖于 direction】

◆ 效果：

<p class="example" style="text-align: right">
  我向来是不惮以最坏的恶意来推测中国人的,然而我还不料,也不信竟会下劣凶残到这地步。
</p>
<p class="example" style="direction: rtl">
  我向来是不惮以最坏的恶意来推测中国人的,然而我还不料,也不信竟会下劣凶残到这地步。
</p>
<p class="example" style="direction: rtl; unicode-bidi: bidi-override">
  我向来是不惮以最坏的恶意来推测中国人的,然而我还不料,也不信竟会下劣凶残到这地步。
</p>

◆ 代码：

```
<p style="text-align: right">
  我向来是不惮以最坏的恶意来推测中国人的,然而我还不料,也不信竟会下劣凶残到这地步。
</p>
<p style="direction: rtl">
  我向来是不惮以最坏的恶意来推测中国人的,然而我还不料,也不信竟会下劣凶残到这地步。
</p>
<p style="direction: rtl; unicode-bidi: bidi-override">
  我向来是不惮以最坏的恶意来推测中国人的,然而我还不料,也不信竟会下劣凶残到这地步。
</p>
```

## 【3】文字换行与截断

- word-wrap: break-word; // 如果单词太长会自动换行。
- overflow-wrap: break-word; // 功能上同，W3C 新写法。
- overflow-wrap: anywhere; // 任何地方都可以换行[功能参考](https://www.zhangxinxu.com/wordpress/2020/03/css-overflow-wrap-anywhere/)
- white-space: nowrap; // 段落中的文本不换行（会截断）。

- word-break: keep-all; //【默认】单词放不下会自动换行【文字截断】。
- word-break: break-all; // 单词放不下会折断换行，铺满元素【文字截断】。

◆ 效果图：

![image](https://wx1.sinaimg.cn/mw2000/0069qZtTgy1gx43wj1frpj32ko0ts1kx.jpg)

◆ [效果预览](https://firefly1984982452.github.io/my-web-page/word-break.html)

◆ [源码地址](https://github.com/firefly1984982452/my-web-page/blob/master/word-break.html)

## 【4】盒装饰器中断

- box-decoration-break: clone; // 盒装饰器中断【复制】
- box-decoration-break: slice; // 盒装饰器中断【默认】

◆ 效果图：

![image](https://wx2.sinaimg.cn/orj360/0069qZtTgy1gx43neotd9j30ju0g0dm6.jpg)

◆ [效果预览](https://firefly1984982452.github.io/my-web-page/box-decoration-break.html)

◆ [源码地址](https://github.com/firefly1984982452/my-web-page/blob/master/box-decoration-break.html)

## 【5】文字间距

- word-spacing:30px; // 单词与单词之间的距离。
- letter-spacing:-3px; // 字母与字母之间的距离。

◆ 效果预览：

<p class="example">默认：I am a programer</p>
<p class="example" style="word-spacing:30px;">间距：I am a programer</p>
<p class="example" style="letter-spacing:-3px;">间距：I am a programer</p>

## 【6】文字连字符换行：`hyphens`

◆ 功能：连字符换行

◆ 与`text-align: justify`的区别

<p class="example" style="width: 100px; hyphens: auto;border:1px solid">An extreme ly long English word</p>
<p class="example" style="width: 100px; text-align: justify; text-align-last: justify;border:1px solid">An extreme ly long English word</p>

```
<p style="width: 100px; hyphens: auto;border:1px solid">An extreme ly long English word</p>
<p style="width: 100px; text-align: justify; text-align-last: justify;border:1px solid">An extreme ly long English word</p>
```

## 【7】line-clamp：限制文本行数

必须加上`-webkit-`

```
-webkit-line-clamp: 3;
```

---

# 九、文字环绕：shape

`shape-outside`属性使得行内（`inline`）的内容，围绕`outside`指定的曲线排列，可以用多边形``里面的属性。

`shape-margin`属性指定`shape-outside`与内容之间的`margin`。

`shape-image-threshold`属性指定[透明度值](https://developer.mozilla.org/zh-CN/docs/Web/CSS/shape-image-threshold)。

【1】圆形文字环绕

![image](https://wx2.sinaimg.cn/large/0069qZtTgy1gnadz5a2rlj30ih06kt9g.jpg)

```
.circle {
  width: 250px;
  height: 250px;
  background-color: #fbb;
  border-radius: 50%;
  float: left;
  shape-outside: circle();
}
```

【2】三角形文字环绕

![image](https://wx2.sinaimg.cn/large/0069qZtTgy1gnadzmmpw3j30j406oaas.jpg)

```
.circle {
  width: 250px;
  height: 250px;
  background-color: #fbb;
  border-radius: 50%;
  float: left;
  clip-path: polygon(0 100%, 50% 0, 100% 100%);
  shape-outside: polygon(0 100%, 50% 0, 100% 100%);
}
```

---

# 十、动画：`animation`

## 【1】写法

```
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

...

<div> content </div>
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

```
@keyframes typing {
  from {
    width: 0;
  }
}
p{
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  animation: typing 18s;
}
```

## 【4】其它组合

### 【4.1】backface-visibility：背面向屏幕时是否可见

```
<!DOCTYPE html>
<html>
  <head>
    <style>
    div
    {
      width:100px;
      height:100px;
      background: url('https://image.youbankeji.com/test/12/2021/01/05/6970b7294f674d6eb6a32425fdaca066.jpeg!avatar');
      background-size:100% 100%;
      animation:myfirst 15s;
      backface-visibility: hidden;
    }

    @keyframes myfirst
    {
      from {transform:rotateY(0deg);}
      to {transform:rotateY(360deg);}
    }

    </style>
  </head>
  <body>
  	<div>文字</div>
  </body>
</html>
```

## 【5】使用 requestAnimationFrame 手动反复调用动画

```
this.$refs.ref_trademark.className = 'trademark'
window.requestAnimationFrame(() => {
  window.requestAnimationFrame(() => {
    this.$refs.ref_trademark.className = 'trademark animation'
  })
})
```

---

# 十一、过渡：`transition`

可以直接写`transition:all 2s;`来过渡所有样式。

```
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

...

<div></div>
```

**曲线：animation-timing-function**

- `linear`：速度从头至尾相同。
- `ease`：【默认】低速开始和结束，中间速度快。
- `ease-in`：低速开始。
- `ease-out`：低速结束。
- `ease-in-out`：低速开始和结束

---

# 十二、滤镜：`filter`

[filter 所有效果](https://www.runoob.com/try/try.php?filename=trycss_ex_images_filters)

◆ 常用：

- blur：高斯模糊

- drop-shadow：阴影

多个`filter`滤镜一起使用：**加空格**

```
filter: blur(4px) brightness(0.3);
```

## 进阶 - 毛玻璃效果

◆ 方法一：`backdrop-filter`

```
backdrop-filter: blur(10px);
```

注：`backdrop-filter`中其它属性大多只是[颜色变化](https://cloud.tencent.com/developer/section/1072021)。

```
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

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      body,
      main::before {
        background: url("./test.jpg") no-repeat;
        background-size: 500px 500px;
      }

      main {
        position: relative;
        background: rgba(0, 0, 0, 0.2);
        width: 300px;
        height: 300px;
      }

      main::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        filter: blur(20px);
      }
    </style>
  </head>
  <body>
    <main>hello world</main>
  </body>
</html>

```

---

# 十三、混合模式：`mix-blend-mode`

## 所有效果

[mix-blend-moe 所有效果](https://www.runoob.com/try/try.php?filename=trycss_mix-blend-mode-all)

## isolation：隔离

[示例](https://www.zhangxinxu.com/study/201601/css3-isolation-isolate.html)

```
isolation: isolate;
```

---

# 十四、图片相关

## 【1】`object-fit`

[效果预览](https://firefly1984982452.github.io/my-web-page/object-fit.html)

◆ **语法**

- `fill`【默认】：不按比例拉伸至填满容器；
- `contain`：保持比例缩放；
- `cover`：保持比例剪切；
- `none`：保持原有长和宽；
- `scale-down`：保持比例，取`contain`和`cover`谁的尺寸更小。

◆ **示例**

![image](https://wx3.sinaimg.cn/large/0069qZtTgy1gnbgsxvddej31hb0ng1b9.jpg)

## 【2】`image-set`

```
background-image: -webkit-image-set(url('./cute.png') 2x, url('./yellow.jpeg') 3x);
```

选取移动端符合响应式条件的图片。

## 【3】`background-blend-mode`

背景的颜色混合模式，有 16 个值可取：【normal（默认值，即不混合）, multiply, screen, overlay, darken, lighten, color-dodge, color-burn, hard-light, soft-light, difference, exclusion, hue, saturation, color and luminosity（显示单色效果）】。

可以显示多张背景图片的混合，或者背景图片和颜色的混合。

```
background-image: url(...g);
background-color: #51B7D3;
background-blend-mode: luminosity;
```

或

```
background: url(img/pattern.png), url(img/jellyfish.jpg), #f07e32;
background-blend-mode: screen;
```

## 【4】`object-position`

与 `background-position`写法一样，区别是`object-position`用于对象，一般用图片，而`background-position`只能用在背景里面。

```
img {
  height: 100px;
  width: 100px;
  object-fit: contain;
  object-position: top 70px;
}
```

## 【5】`vertical-align`：文字对齐图片方式

```
vertical-align: text-top; // 文字对齐图片顶部
vertical-align: text-bottom; // 默认文字对齐图片底部
```

◆ 效果预览：

<p class="example">
  文字与图片对齐
  <img style="vertical-align: text-top;" src="https://wx2.sinaimg.cn/mw2000/0069qZtTgy1gqmp3kbrbsj30dw0dwt9o.jpg" width="100" height="100" />
  设置为顶部对齐
</p>
<p class="example">
  文字与图片对齐
  <img style="vertical-align: text-bottom;" src="https://wx2.sinaimg.cn/mw2000/0069qZtTgy1gqmp3kbrbsj30dw0dwt9o.jpg" width="100" height="100" />
  设置为底部对齐
</p>

◆ 源码：

```
<p class="example">
  文字与图片对齐
  <img style="vertical-align: text-top;" src="https://wx2.sinaimg.cn/mw2000/0069qZtTgy1gqmp3kbrbsj30dw0dwt9o.jpg" width="100" height="100" />
  设置为顶部对齐
</p>
```

## 【6】`image-orientation`：纠正图片的方向

## 【7】`image-rendering`：增强图像渲染

```
image-rendering: auto;
image-rendering: crisp-edges;
image-rendering: pixelated;
```

---

# 十五、其它

## 【1】`resize` 属性

<p class="example" style="resize:both;overflow: hidden;">resize属性规定是否由用户调整元素大小</p>

```
resize:both;
overflow: hidden;
```

条件：

- 子元素要比父元素大；

- 一定要写上`overflow: hidden;`

## 【2】z-index 属性

如果父元素的 z-index 很低，并且被其它元素遮住，那子元素的 z-index 再大也不会显示在最上面。

```

.A{
  z-index:1;
  .a{
    z-index:99;
  }
}
.B{
  z-index:2;
}
```

---

# 十六、`-webkit-box-reflect`：倒影

- [MDN](https://developer.mozilla.org/de/docs/Web/CSS/-webkit-box-reflect)

![image](https://images2015.cnblogs.com/blog/857662/201609/857662-20160926120127360-1912773451.png)

```
img{
  -webkit-box-reflect: below;
}
```

**仅 chrome 生效**

---

# 十七、`mask`：面具

[学习链接](https://www.zhangxinxu.com/wordpress/2017/11/css-css3-mask-masks/)

**目前一定要用-webkit-来兼容**

- mask-image：面具图像
- mask-mode：面具模型
- mask-repeat：面具重复
- mask-position：面具位置
- mask-clip：面具裁剪
- mask-size：面具大小
- mask-composite：面具复合

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <style>
      img {
        width: 100%;
        height: 100%;

        border: 20px solid #f00;

        -webkit-mask-image: url("https://firefly1984982452.github.io/my-web-page/animation.png");
        mask-image: url("https://firefly1984982452.github.io/my-web-page/animation.png");

        /* firefox 可用 */
        mask-mode: luminance;

        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;

        -webkit-mask-position: right top;
        mask-position: right top;

        -webkit-mask-clip: border-box;
        mask-clip: border-box;

        -webkit-mask-size: 40% 50%;
        mask-size: 40% 50%;

        /* firefox 可用 */
        mask-composite: exclude;
      }
    </style>
  </head>
  <body>
    <img src="https://wx1.sinaimg.cn/mw690/0069qZtTgy1go96k54t3lj30ru0rqx6p.jpg" alt="" srcset="" />
  </body>
</html>
```

---

# 十八、`@media`：媒体查询

## 【1】any-hover

[学习链接](https://www.zhangxinxu.com/wordpress/2020/01/css-any-hover-media/)

在 PC 端 hover 时背景会变色，在不具备 hover 的设备上（如移动端）下划线会消失。

css

```
@media (any-hover: hover) {
  a:hover{
    background: yellow;
  }
}
@media (any-hover: none) {
  a {
    text-decoration: none;
  }
}
```

html

```
<a href="#">在PC端hover时背景会变色，在不具备hover的设备上（如移动端）下划线会消失。</a>
```

## 【2】any-pointer

在 PC 端 点击 input 时与在不具备 hover 的设备上（如移动端）点击时不同的效果。

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      input[type="checkbox"]:checked {
        background: gray;
      }

      @media (any-pointer: fine) {
        input[type="checkbox"] {
          -moz-appearance: none;
          -webkit-appearance: none;
          appearance: none;
          width: 15px;
          height: 15px;
          border: 1px solid blue;
        }
      }

      @media (any-pointer: coarse) {
        input[type="checkbox"] {
          -moz-appearance: none;
          -webkit-appearance: none;
          appearance: none;
          width: 30px;
          height: 30px;
          border: 2px solid red;
        }
      }
    </style>
  </head>
  <body>
    <input id="test" type="checkbox" />
    <label for="test">Look at me!</label>
  </body>
</html>
```

## 【3】aspect-ratio：纵横比

```
@media (aspect-ratio: 1/1) {
  div {
    color: red;
  }
}
@media (min-aspect-ratio: 8/5) {
  div {
    background: yellow;
  }
}
@media (max-aspect-ratio: 2/1) {
  div {
    border: 2px solid blue;
  }
}
```

## 【4】display-mode：全屏样式

```

@media all and (display-mode: fullscreen) {
  body {
    color: #fff;
    background-color: #f00;
    margin: 0;
    border: 5px solid #f0f;
  }
}
```

## 【5】prefers-color-scheme：适配主题

- [链接 1](https://zhuanlan.zhihu.com/p/374506516)

- [链接 2](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)

目前我测试 chrome、firefox、safari 浏览器兼容性均不能实现这个功能。

## 【6】prefers-reduced-motion：减少动画

---

# 十九、`appearance`：修改默认样式

## 【1】更改`<button />`的默认样式为无

◆ 示例：

<div class="example">
  <button>button 样式</button>
  <br />
  <button style="appearance:none;">文本样式</button>
</div>

◆ 代码：

```
{
appearance:none;
-webkit-appearance:none;
-moz-appearance:none;
}

...

<button>一些文本。</button>

```

## 【2】更改`<input />`默认的大小和边框样式

◆ 示例：

<style>

input#test {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  width: 30px;
  height: 30px;
  border: 2px solid red;
}
</style>

<div class="example">
  <input type="checkbox" />默认复选框
  <br />
  <input id="test" type="checkbox" />更改默认复选框
</div>

◆ 代码：

```
input#test {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  width: 30px;
  height: 30px;
  border: 2px solid red;
}

...

<input id="test" type="checkbox" />
```

---

# 二十、css 比较函数：`min()`、`max()`、`clamp()`

可以择优选择一个最合适的尺寸，不仅用于 width，还可以用于 font-size 等值。

```
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<style>
		body>* {
			color: #fff;
			height: 100px;
			background-color: #f00;
			margin: 10px 0;
			text-align: center;
		}

		header {
			width: min(50%, 500px);
		}

		main {
			width: max(50%, 500px);
		}

		footer {
			width: clamp(100px, 50%, 500px);
		}
	</style>
</head>

<body>
	<header>min(50%, 500px)</header>
	<main>mxn(50%, 500px)</main>
	<footer>clamp(100px,50%, 500px)</footer>
</body>

</html>
```

---

# 二十一、`will-change`：性能优化

[will-change 链接](https://developer.mozilla.org/en-US/docs/Web/CSS/will-change) [animation 事件监听](https://www.runoob.com/try/try.php?filename=tryjsref_animationstart)

两者结合的实例：

```
<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<title>test</title>
	<style>
		#myDIV {
			margin: 25px;
			width: 550px;
			height: 100px;
			background: orange;
			position: relative;
			font-size: 20px;
			will-change: transform, opacity;
		}

		@keyframes mymove {
			from {
				top: 0px;
				transform: scale(1);
				opacity: 1;
			}

			to {
				top: 200px;
				transform: scale(.7);
				opacity: .7;
			}
		}
	</style>
</head>

<body>
	<p>该实例使用了addEventListener() 方法为 DIV 元素添加"animationstart", "animationiteration" 和 "animationend" 事件。</p>
	<p>该实例使用了will-change优化性能。</p>
	<div id="myDIV" onclick="myFunction()">点我开始动画</div>
	<script>
		var x = document.getElementById("myDIV")
		function myFunction() {
			x.style.animation = "mymove 4s 2";
		}
		x.addEventListener("animationstart", myStartFunction);
		x.addEventListener("animationiteration", myIterationFunction);
		x.addEventListener("animationend", myEndFunction);
		function myStartFunction() {
			this.innerHTML = "animationstart 事件触发 - 动画已经开始";
			this.style.backgroundColor = "pink";
		}
		function myIterationFunction() {
			this.innerHTML = "animationiteration 事件触发 - 动画重新播放";
			this.style.backgroundColor = "lightblue";
		}
		function myEndFunction() {
			this.innerHTML = "animationend 事件触发 - 动画已经完成";
			this.style.willChange = 'auto'
			this.style.backgroundColor = "lightgray";
		}
	</script>
</body>

</html>
```

---

# 二十二、`preserve`

[学习链接](https://www.cnblogs.com/coco1s/p/15178959.html)

1. transform-style: preserve-3d; // 子元素将保留其 3D 位置。

2. perspective-origin: x-axis y-axis; // 设置位置

```
// x-axis : 定义该视图在 x 轴上的位置。默认值：50%
// y-axis : 定义该视图在 y 轴上的位置。默认值：50%
```

3. perspective: number|none;

# 二十三、移动端环境变量函数 `env()`和`constant()`

`env()`和`constant()`，是`IOS11`新增特性，`Webkit`的`css`函数，用于设定安全区域与边界的距离，有 4 个预定义变量：

- `safe-area-inset-left`：安全区域距离左边边界的距离
- `safe-area-inset-right`：安全区域距离右边边界的距离
- `safe-area-inset-top`：安全区域距离顶部边界的距离
- `safe-area-inset-bottom` ：安全距离底部边界的距离

H5 网页设置`viewport-fit=cover`的时候才生效，小程序里的`viewport-fit`默认是`cover`

```
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
```

```
height: calc(96rpx+ constant(safe-area-inset-bottom));//兼容 IOS<11.2

height: calc(96rpx + env(safe-area-inset-bottom));//兼容 IOS>11.2

padding-bottom: constant(safe-area-inset-bottom);//兼容 IOS<11.2

padding-bottom: env(safe-area-inset-bottom);//兼容 IOS>11.2

```
