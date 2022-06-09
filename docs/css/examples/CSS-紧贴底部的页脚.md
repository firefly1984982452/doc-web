# CSS - 紧贴底部的页脚

## 方法 1：中间内容用 calc

```css
header {
  height: 100px;
  background-color: #bbf;
}
.main {
  background-color: #fbb;
  min-height: calc(100% - 200px);
}
footer {
  height: 100px;
  background-color: #bfb;
}
```

## 方法 2：用 flex

```css
body {
  display: flex;
  flex-direction: column;
}

header {
  height: 100px;
}
.main {
  background-color: #fbb;
  flex: 1;
}
footer {
  height: 100px;
}
```
