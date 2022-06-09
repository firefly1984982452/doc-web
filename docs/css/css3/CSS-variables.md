# CSS - variables 自定义属性（CSS 变量）

用`--`命名，用`val()`使用。

```css
:root {
  --main-color: #fbb;
}
p {
  color: var(--main-color);
}
```
