# CSS - 最后一个 li 不显示 border

## 【1】方法一：`first-child`

```css
li {
  border-top: 1px solid #000;
}
li:first-child {
  border-top: none;
}
```

## 【2】方法二：`*+*`

```css
li + li {
  border-top: 1px dashed #999;
}
```

## 【3】方法三：`:not(:last-child)`

```css
li: not(: last-child)...;
```
