# CSS - grid

- [阮一峰的学习链接-grid](http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)
- [其它学习链接-grid](https://juejin.cn/post/6854573220306255880#heading-22)

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

### 【3】grid-row-gap 属性、grid-column-gap 属性以及 grid-gap 属性

### 【4】grid-template-areas 属性

### 【5】grid-auto-flow 属性

### 【6】justify-items 属性、align-items 属性以及 place-items 属性

### 【7】justify-content 属性、align-content 属性以及 place-content 属性

### 【8】grid-auto-columns 属性和 grid-auto-rows 属性

### 【1】place-content

`place-content` 属性是`align-content` 和 `justify-content`的简写。

`place-items`和`place-self`上同。

```css
display: grid;
place-content: center;
```

## 【3】grid-template-columns 更多属性

### 【3.1】响应式布局`auto-fit`和`auto-fill`

```css
width: 100%;
height: 400px;
display: grid;
grid-gap: 10px;
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

### 【3.2】跨越所有列`1 / -1`

```css
.fullwidth {
  grid-column: 1 / -1;
}
```

重点：`1 / -1`是指从第 1 列开始，直到最后一列结束，即铺满整行。

### 【3.3】grid-template-areas 的使用

<iframe height="400" style="width: 100%;" scrolling="no" title="CSS grid grid-template-areas" src="https://codepen.io/firefly1984982452/embed/oNEmMzd?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/oNEmMzd">
  CSS grid grid-template-areas</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## 三、项目属性
