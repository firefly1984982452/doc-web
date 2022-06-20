# CSS - grid

- [阮一峰的学习链接-grid](http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)
- [其它学习链接-grid](https://juejin.cn/post/6854573220306255880)

## 一、基本使用

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/firefly1984982452/embed/NWyJGKm?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/NWyJGKm">
  Untitled</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## 二、容器属性

1. display 属性
2. grid-template-columns 属性和 grid-template-rows 属性
3. grid-row-gap 属性、grid-column-gap 属性以及 grid-gap 属性
4. grid-template-areas 属性
5. justify-items 属性、align-items 属性以及 place-items 属性
6. justify-content 属性、align-content 属性以及 place-content 属性
7. grid-auto-columns 属性和 grid-auto-rows 属性

### 【1】display 属性

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS grid display属性对比" src="https://codepen.io/firefly1984982452/embed/NWyJGMq?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/NWyJGMq">
  CSS grid display属性对比</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 【2】grid-template-columns 属性和 grid-template-rows 属性

- 固定的列宽和行高
- repeat()函数
- auto-fill 关键字
- auto -fit 关键字
- fr 关键字
- minmax()函数
- auto 关键字

#### 1.固定的列宽和行高

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS grid grid-template-columns 属性和 grid-template-rows 属性" src="https://codepen.io/firefly1984982452/embed/PoQLxjX?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/PoQLxjX">
  CSS grid grid-template-columns 属性和 grid-template-rows 属性</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

#### 2.auto-fill 和 auto -fit 关键字

```css
display: grid;
grid-template-columns: repeat(auto-fit, 100px);
/* 或 */
grid-template-columns: repeat(auto-fill, 100px);
```

重点：`grid-template-columns: repeat(auto-fit, 100px);`代表以 `100px` 为子元素长度，自动排一行的数量，当一行不够时自动换行。

**`auto-fit`和`auto-fill`的区别**

<iframe height="450" style="width: 100%;" scrolling="no" title="CSS grid auto-fill和auto-fit的使用和区别" src="https://codepen.io/firefly1984982452/embed/KKQJexO?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/KKQJexO">
  CSS grid auto-fill和auto-fit的使用和区别</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

#### 3.minmax()关键字

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS grid grid-template-columns minmax" src="https://codepen.io/firefly1984982452/embed/bGLZQJN?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/bGLZQJN">
  CSS grid grid-template-columns minmax</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

#### 4.auto 关键字

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS grid grid-template-columns auto关键字" src="https://codepen.io/firefly1984982452/embed/bGLZOGV?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/bGLZOGV">
  CSS grid grid-template-columns auto关键字</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 【3】grid-row-gap 属性、grid-column-gap 属性以及 grid-gap 属性

间距属性：略。

### 【4】grid-template-areas 属性

`grid-template-areas` 与 `grid-area` 属性一起使用。

◆ `grid-template-areas` 的使用

<iframe height="400" style="width: 100%;" scrolling="no" title="CSS grid grid-template-areas" src="https://codepen.io/firefly1984982452/embed/oNEmMzd?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/oNEmMzd">
  CSS grid grid-template-areas</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 【5】grid-auto-flow 属性

`grid-auto-flow`属性是设置先行后列还是还先列后行，使用例子如下：

<iframe height="700" style="width: 100%;" scrolling="no" title="CSS grid grid-auto-flow" src="https://codepen.io/firefly1984982452/embed/mdXggzd?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/mdXggzd">
  CSS grid grid-auto-flow</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 【6】justify-items 属性、align-items 属性以及 place-items 属性

- `justify-items`: 设置单元格内容的水平位置设置（左中右）；
- `align-items`: 设置单元格内容的垂直位置设置（上中下）；
- `place-items`:`justify-items`和`align-items`的简写。

### 【7】justify-content 属性、align-content 属性以及 place-content 属性

- `justify-content`: 设置整个内容区域在容器里面的水平位置设置（左中右）；
- `align-content`: 设置整个内容区域在容器里面的垂直位置设置（上中下）；
- `place-content`:`justify-content` 和 `align-content`的简写。

◆ `place-items`和`place-content`的区别

<iframe height="600" style="width: 100%;" scrolling="no" title="CSS grid place-items和place-content的区别" src="https://codepen.io/firefly1984982452/embed/NWymVKj?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/NWymVKj">
  CSS grid place-items和place-content的区别</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 【8】grid-auto-columns 属性和 grid-auto-rows 属性

<iframe height="600" style="width: 100%;" scrolling="no" title="CSS grid grid-auto-columns和grid-auto-rows" src="https://codepen.io/firefly1984982452/embed/mdXgYPP?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/mdXgYPP">
  CSS grid grid-auto-columns和grid-auto-rows</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## 三、项目属性

1. grid-column-start 属性、grid-column-end 属性、grid-row-start 属性以及 grid-row-end 属性
2. grid-area 属性
3. justify-self 属性、align-self 属性以及 place-self 属性

### 【1】grid-column-start 属性、grid-column-end 属性、grid-row-start 属性以及 grid-row-end 属性

- `grid-column-start`：列开始的位置；
- `grid-column-end`：列结束的位置；
- `grid-column`: 简写。
- `grid-row-start`：行开始的位置；
- `grid-row-end`：行结束的位置；
- `grid-row`：简写。

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS grid grid-column和grid-row的使用" src="https://codepen.io/firefly1984982452/embed/jOZRjyR?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/jOZRjyR">
  CSS grid grid-column和grid-row的使用</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

◆ `grid-column` 跨越所有列`1 / -1`

```css
.fullwidth {
  grid-column: 1 / -1;
}
```

重点：`1 / -1`是指从第 1 列开始，直到最后一列结束，即铺满整行。

◆ span 关键字

```
grid-column:span 4;
```

### 【2】grid-area 属性

略，和`grid-template-areas`一起使用。

### 【3】justify-self 属性、align-self 属性以及 place-self 属性

- `justify-self`：设置**单个**单元格内容的水平位置（左中右）；
- `align-self`：设置**单个**单元格内容的垂直位置（上中下）；
- `place-self`：`justify-self`和`align-self`的简写。

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS grid justify-self和align-self" src="https://codepen.io/firefly1984982452/embed/bGLJXdb?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/bGLJXdb">
  CSS grid justify-self和align-self</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

## 四、Grid 实例——实现响应式布局

### 【1】fr 实现等分响应式

`grid-template-columns: 1fr 1fr 1fr` 表示容器分为三等分

### 【2】repeat + auto-fit——固定列宽，改变列数量

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS grid auto-fit" src="https://codepen.io/firefly1984982452/embed/MWQRNEo?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/MWQRNEo">
  CSS grid auto-fit</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 【3】repeat + auto-fit + minmax——自适应

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS grid auto-fit minmax" src="https://codepen.io/firefly1984982452/embed/ZErZgaJ?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/ZErZgaJ">
  CSS grid auto-fit minmax</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 【4】repeat+auto-fit+minmax-span-dense 解决空缺问题

◆ 重点：`grid-auto-flow: row dense`

<iframe height="500" style="width: 100%;" scrolling="no" title="CSS grid auto-fit minmax-span-dense" src="https://codepen.io/firefly1984982452/embed/ZErZgrX?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/ZErZgrX">
  CSS grid auto-fit minmax-span-dense</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 【5】网页实例

<iframe height="400" style="width: 100%;" scrolling="no" title="CSS grid Page" src="https://codepen.io/firefly1984982452/embed/rNJbXPv?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/rNJbXPv">
  CSS grid Page</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
