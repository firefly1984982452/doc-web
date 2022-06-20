# CSS - position

- `relative`：略
- `absolute`：略
- `fixed`：略
- `sticky`

## abosolute

如果同时设置 left 和 right，相当于隐式的给了宽度。top 和 bottom 同理。

```css
position: absolute;
left: 30px;
right: 30px;
```

## sticky：粘性布局

```css
position: sticky;
top: 0;
```

`sticky`必须指定 `top`, `right`, `bottom` 或 `left` 四个阈值其中之一，才可使粘性定位生效。否则其行为与相对定位相同。
