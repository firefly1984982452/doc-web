# CSS - 选择器

- [MDN 全元素](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

## 一、伪元素、伪类选择器

- [预览效果](https://firefly1984982452.github.io/my-web-page/select-page.html)
- [源码](https://github.com/firefly1984982452/my-web-page/blob/master/select-page.html)

### 【1.1】伪元素

- ::after【后文内容】
- ::before【前文内容】
- ::first-letter【首字母】
- ::first-line【首行】
- ::selection【选中文字】
- ::default【默认】
- ::marker【标记】

### 【1.2】伪类

- :hover【悬浮】
- :root【根元素】
- :target【目标】

### 【1.3】伪类【form 验证】

- :checked【选中某项】
- :disabled【不能用】
- :enabled【能用】
- :empty【空内容】
- :focus【聚焦】
- :focus-within【聚焦内容】
- :in-range【在范围内】
- :out-of-range【超出范围】
- :invalid/valid/required【验证】
- :placeholder-shown【提示内容】
- :read-only【只读】
- :read-write【只写】

### 【1.4】伪类【link 链接】

- :active【点击时】
- :link【链接】
- :visited【访问过】
- :any-link【任意链接】

### 【1.5】伪类【父子兄弟元素】

- :first-child【首个子元素】
- :last-child【末个子元素】
- :nth-child【第 n 个子元素】
- :nth-last-child【倒数第 n 个子元素】
- :only-child【仅有 1 个子元素】
- :first-of-type【首个类型元素】
- :last-of-type【末个同类型元素】
- :nth-of-type【第 n 个同类型元素】
- :nth-last-of-type【倒数第 n 个同类型元素】
- :only-of-type【仅有 1 个同类型元素】
- :not【不包含】

---

## 二、`:focus`与`:focus-within`

如果只使用`:focus`，它不能包含子元素的聚焦事件（比如输入框、按钮聚焦）。

以下内容无效：

```css
.container:focus input {
  width: 230px;
}
```

用`:focus-within` 解决：

```css
.container:focus-within input {
  width: 230px;
}
```

当父元素聚焦时，`input`内容也会随之改变。

**例子：不同的登录状态**

![image](https://user-images.githubusercontent.com/8554143/43560900-2ef72358-9647-11e8-8123-ecfc45828c3d.gif)

```css
img {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
}
.g-container {
  margin: 200px 0 0 0;
}
.g-username:focus-within img {
  display: block;
}
.g-password:focus-within img {
  display: block;
}
```

```html
<div class="g-container">
  <h2>登录</h2>
  <div class="g-username">
    <input name="loginPhoneOrEmail" maxlength="64" placeholder="请输入手机号或邮箱" class="input" />
    <img src="https://b-gold-cdn.xitu.io/v3/static/img/greeting.1415c1c.png" class="g-username" />
  </div>

  <div class="g-password">
    <input
      name="loginPassword"
      type="password"
      maxlength="64"
      placeholder="请输入密码"
      class="input"
    />
    <img src="https://b-gold-cdn.xitu.io/v3/static/img/blindfold.58ce423.png" class="g-password" />
  </div>
</div>
```

---

## 三、`:root`选择器

```css
:root {
  color: red;
}
html {
  color: green;
}
```

最后出来的颜色是`red`，`:root`选择器代表是根元素，代表`html`，但优先级比`html`高。

---

## 四、`::backdrop`：全屏下的对象样式

1.用于 `dialog` 弹框

```css
dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.8);
}
```

2.用于 `video` 全屏

```css
video::backdrop {
  background-color: #f00;
}
```

---

## 五、`:fullscreen`：全屏样式

```css
div:fullscreen {
  color: #ff0;
}
```

---

## 六、`:is`:是否选择器

原来的写法：

```css
section h1,
section h2,
article h1 {
  color: #f00;
}
```

使用`:is`优化后的写法：

```css
:is(section, article) :is(h1, h2) {
  color: #f00;
}
```

---

## 七、:nth-child 选择器

- 偶数标签：`:nth-child(2n)`或`:nth-child(even)`
- 奇数标签：`:nth-child(2n-1)`或`nth-child(odd)`
- 从第 6 个 至最后一个：`:nth-child(n+6)`
- 第 1 个到第 6 个：`:nth-child(-n+6)`
- 第 6 个到第 9 个：`:nth-child(n+6):nth-child(-n+9)`

---
