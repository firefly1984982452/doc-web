# CSS - gradient 渐变

1. `line-gradient`：线性渐变
2. `radial-gradient`：径向渐变
3. `conic-gradient`：圆锥形渐变
4. `repeating-line-gradient`：重复线性渐变
5. `repeating-radial-gradient`：重复径向渐变

与`background-size`组合的话，可以生成条纹背景。

## 【1】`line-gradient`：线性渐变

### 【1.1】`linear-gradient`：条纹背景

- 例 1：背景为上下 2 色分割

```css
background-image: linear-gradient(#ff0 50%, #f00 50%);
```

<div class="example-box">
  <div class="item" style="background-image: linear-gradient(#ff0 50%, #f00 50%)"></div>
</div>

- 例 2：背景 2 色平铺

```css
background: linear-gradient(#ff0 50%, #f00 50%);
background-size: 100% 50%;
```

<div class="example-box">
  <div class="item" style="background: linear-gradient(#ff0 50%, #f00 50%);background-size: 100% 50%;"></div>
</div>

- 例 3：四边虚化

```css
background-image: linear-gradient(
    to bottom,
    #000,
    rgba(36, 54, 78, 0) 15%,
    rgba(36, 54, 78, 0) 85%,
    #000
  ), linear-gradient(to right, #000, rgba(36, 54, 78, 0) 15%, rgba(36, 54, 78, 0) 85%, #000);
```

<div class="example-box">
  <div class="item" style="background-image: linear-gradient(to bottom, #000, rgba(36,54,78,0) 15%,rgba(36,54,78,0) 85%, #000),linear-gradient(to right, #000, rgba(36,54,78,0) 15%,rgba(36,54,78,0) 85%, #000);"></div>
</div>

### 【1.2】linear-gradient：切角效果

```css
width: 200px;
height: 200px;
background: #ffb;
background: linear-gradient(135deg, transparent 15px, #fbb 0) top left, linear-gradient(
      -135deg,
      transparent 15px,
      #fbb 0
    ) top right, linear-gradient(-45deg, transparent 15px, #fbb 0) bottom right, linear-gradient(
      45deg,
      transparent 15px,
      #fbb 0
    ) bottom left;
background-size: 50% 50%;
background-repeat: no-repeat;
```

<div class="example-box">
  <div class="item" style="background:#ffb;
background: linear-gradient(135deg, transparent 15px,#fbb 0) top left,
      linear-gradient(-135deg, transparent 15px,#fbb 0) top right,
      linear-gradient(-45deg, transparent 15px, #fbb 0) bottom right,
      linear-gradient(45deg, transparent 15px, #fbb 0) bottom left;
background-size:50% 50%;
background-repeat:no-repeat;"></div>
</div>

## 【2】repeating-linear-gradient

- 例：背景 2 色任意角度平铺

```css
background-image: repeating-linear-gradient(60deg, yellow 0%, yellow 5%, green 0%, green 10%);
```

<div class="example-box">
  <div class="item" style="background-image: repeating-linear-gradient(60deg,yellow 0%,yellow 5%,green 0%,green 10%);"></div>
</div>

## 【3】radial-gradient 与 linear-gradient 类似

## 【4】conic-gradient

### 【4.1】饼图

```css
background: conic-gradient(pink 0 30%, yellow 0 70%, lime 0 100%);
```

<div class="example-box">
  <div class="item"
    style="
      border-radius: 50%;
      background: conic-gradient(pink 0 30%, yellow 0 70%, lime 0 100%);
    "
  ></div>
</div>

### 【4.2】伪圆环效果

外元素

```css
background: conic-gradient(pink 0 30%, yellow 0 70%, lime 0 100%);
```

内元素

```css
background-color: #fff;
```

<div class="example-box">
  <div class="item" style="
      border-radius: 50%;
      background: conic-gradient(pink 0 30%, yellow 0 70%, lime 0 100%);
      display: flex;">
    <div style="
        width: 50px;
        height: 50px;
        margin: auto;
        border-radius: 50%;
        background-color: #fff;">
    </div>
  </div>
</div>
