# JavaScript 之进阶总结

# 前端路由和后端路由

- 前端路由（`#`）：`hash` 值或 `pushStatu`
- 后端路由（`/`）：通过 `URL` 跳转到具体的 `html` 页面，每次跳转都重新访问服务端，服务端返回页面。

---

# `typeof null`为什么返回`object`

`null`是空对象指针，所以`typeof null`返回的是`object`，

`'null'`变为`null`：`JSON.parse('null')`

---

# 用 iframe 实现 HTML 在线编辑

```html
<!DOCTYPE html>
<html>
  <head> </head>

  <body>
    <textarea name="" id="data" cols="100" rows="20">
      <!DOCTYPE html>
        <html>
          <head>
          </head>
          <body>
            <b>3</b>
          </body>
          <script>console.log(1)</script>
        </html>
    </textarea>
    <button onclick="run()">运行</button>
    <hr />
    <iframe name="hello" style="width: 100%; height: 100%"></iframe>

    <script>
      function run() {
        var outDom = window.hello.document;
        outDom.open();
        var inDom = document.getElementById('data');
        outDom.write(inDom.value);
        outDom.close();
      }
    </script>
  </body>
</html>
```

---

# 实现数字递增动画

## 【1】`html`版

<iframe height="300" style="width: 100%;" scrolling="no" title="JS实现数字递增动画" src="https://codepen.io/firefly1984982452/embed/VwQqPKg?default-tab=js%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/firefly1984982452/pen/VwQqPKg">
  JS实现数字递增动画</a> by 彭丹丹 (<a href="https://codepen.io/firefly1984982452">@firefly1984982452</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## 【2】`vue`组件版

numberAnimation.vue

```js
<template>
  <div>
    <p class="EX-Medium">{{ number }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      number: 0
    }
  },
  props: {
    valueNumber: {
      default: 0,
      type: Number
    },
    timeTotal: {
      default: 1500,
      type: Number
    }
  },
  mounted() {
    this.NumAutoPlusAnimation({
      time: this.timeTotal,
      num: this.valueNumber
    })
  },
  methods: {
    NumAutoPlusAnimation(options) {
      var finalNum = options.num, //要显示的真实数值
        step = finalNum / (options.time / 30) /*每30ms增加的数值--*/,
        count = 0

      var timer = setInterval(() => {
        count += step
        if (count >= finalNum) {
          clearInterval(timer)
          count = finalNum
        }
        this.number = Math.floor(count).toLocaleString()
      }, 30)
    }
  }
}
</script>
```

main.js

```js
import numberAnimation from './components/public/numberAnimation.vue';
Vue.component('numberAnimation', numberAnimation);
```

test.vue

```js
<numberAnimation :valueNumber="53667.4" />
```

---

# 全屏

```js
document.querySelector('body').requestFullscreen(); // 全屏
document.exitFullscreen(); // 退出全屏
```

---

# `{变量}`方法可以快速使变量变成对象

```js
const num = 123;
var a = { num };
console.log(a); // {num:123}
```

---

# `event.getModifierState('CapsLock')`检测到当前开启了大写键盘，而不是用`shift`生成的大写字母

```js
const passwordInput = document.getElementById('password');
passwordInput.addEventListener('keyup', function (event) {
  if (event.getModifierState('CapsLock')) {
    console.log('检测到当前开启了大写键盘，而不是用shift生成的大写字母');
  }
});
```

---

# 可终止条件`true && doSomething();`

```js
// 原来的：
if (true) {
  doSomething();
}
// 优化成：
true && doSomething();
```

---

# `undefined`和`void 0`

`undefined`在闭包时可更改：

```js
(() => {
  let undefined = 1;
  console.log(undefined);
})();
```

`void 任何值`永远都是`undefined`

# 禁用鼠标左键

```js
$(document).ready(function () {
  $(document).bind('contextmenu', function (e) {
    return false;
  });
});
```
