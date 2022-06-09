# CSS - scorll

## 更改自带的 scorll 滚动条样式

```css
::-webkit-scrollbar {
  width: 0.07rem;
  height: 0.07rem;
}
/* //定义滑块 内阴影+圆角 */
::-webkit-scrollbar-thumb {
  border-radius: 1em;
  background-color: #d8d8d8;
}
/* //定义滚动条轨道 内阴影+圆角 */
::-webkit-scrollbar-track {
  border-radius: 1em;
  background-color: transparent;
}
```
