# CSS - flex

## 语法

### 【1】容器的属性

- `flex-direction`：方向
- `flex-wrap`：是否换行
- `flex-flow`：`flex-direction`属性和`flex-wrap`属性的简写形式
- `justify-content`：项目在主轴对齐方式
- `align-items`：项目在交叉轴对齐方式
- `align-content`：项目在多根轴线的对齐方式

### 【2】项目的属性

- `order`：排序
- `flex-grow`：放大比例
- `flex-shrink`：缩小比例
- `flex-basis`：占用主轴空间、初始空间
- `flex`：是`flex-grow`、`flex-shrink`和`flex-basis`的缩写
- `align-self`：单个项目的不一样的方式

## gap

```css
ul {
  display: flex;
  border: 1px solid #f00;
  flex-wrap: wrap;
  gap: 20px 50px;
}

li {
  width: 300px;
  height: 300px;
  border: 1px solid #f00;
}
```

---

## justify-content：分布属性

- justify-content: space-between; // 两端对齐
- justify-content: space-around; // 两端间隙相等，项目中间的间隙比较大
- justify-content: space-evenly; // 两端与项目中间的间隙一样大

◆ 区别：

![image](https://s1.ax1x.com/2022/03/14/bOuvqJ.jpg)

◆ **IOS 之类的兼容性用 before 和 after**

```css
container {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  //justify-content: space-evenly;
  &:before,
  &:after {
    content: "";
    display: block;
  }
}
```

## flex 居中最简单的一种方式

```css
.father {
  display: flex;
}
.child {
  margin: auto;
}
```

## flex 中最后一个元素右对齐

```css
.father {
  justify-content: space-between;
}
.child {
  margin-left: auto;
}
```
