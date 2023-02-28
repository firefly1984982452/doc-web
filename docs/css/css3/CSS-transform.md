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

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS rotate：旋转" src="https://codepen.io/firefly1984982452/embed/OJQBvKO?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/OJQBvKO">
  CSS rotate：旋转</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

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

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS perspective：梯形效果" src="https://codepen.io/firefly1984982452/embed/YzeJLzp?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/YzeJLzp">
  CSS perspective：梯形效果</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

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

<iframe height="300" style="width: 100%;" scrolling="no" title="优化后的perspective：梯形效果" src="https://codepen.io/firefly1984982452/embed/VwQExLm?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/VwQExLm">
  优化后的perspective：梯形效果</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


## scale


[数据大屏适配](https://juejin.cn/post/7148733509744459790)

**js**

```js
//数据大屏自适应函数
const handleScreenAuto = () => {
    const designDraftWidth = 1920;//设计稿的宽度
    const designDraftHeight = 960;//设计稿的高度
    //根据屏幕的变化适配的比例
    const scale = document.documentElement.clientWidth / document.documentElement.clientHeight < designDraftWidth / designDraftHeight ?
        (document.documentElement.clientWidth / designDraftWidth) :
        (document.documentElement.clientHeight / designDraftHeight);
    //缩放比例
    (document.querySelector('#screen') as any).style.transform = `scale(${scale}) translate(-50%)`;
}

//React的生命周期 如果你是vue可以放到mountd或created中
useEffect(() => {
    //初始化自适应  ----在刚显示的时候就开始适配一次
    handleScreenAuto();
    //绑定自适应函数   ---防止浏览器栏变化后不再适配
    window.onresize = () => handleScreenAuto();
    //退出大屏后自适应消失   ---这是react的组件销毁生命周期，如果你是vue则写在deleted中。最好在退出大屏的时候接触自适应
    return () => window.onresize = null;
}, [])
```
**html**

```html
<div className="screen-wrapper">
  <div className="screen" id="screen">

  </div>
</div>
```

**css**

```css
/*--除了设计稿的宽高是根据您自己的设计稿决定以外，其他复制粘贴就完事*/  
.screen-root {
  height: 100%;
  width: 100%;
  .screen {
      display: inline-block;
      width: 1920px;  //设计稿的宽度
      height: 960px;  //设计稿的高度
      transform-origin: 0 0;
      position: absolute;
      left: 50%;
  }
}
```
