# MutationObserver：监听 DOM 节点的变动

## 【1】基本使用

```html
<body>
  <div id="content">hi</div>
  <script>
    var callback = function (mutationList, observer) {
      for (var mutation of mutationList) {
        console.log(mutation);
      }
    };
    var observer = new MutationObserver(callback);
    var targetNode = document.getElementById('content');
    observer.observe(targetNode.firstChild, {
      characterData: true,
    });
    setTimeout(() => {
      targetNode.firstChild.data = 'hello';
    }, 3000);
  </script>
</body>
```

3 秒钟之后，id 为`content`的`DOM`变成了`'hello'`，此时的`MutationObserver`就已经监听到了改变，可以进行下一步的操作。

## 【2】实现 vue.$nexttick

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>example</title>
  </head>
  <body>
    <div id="app">
      <div v-if="isShow">
        <input type="text" ref="userName" />
      </div>
      <button @click="showInput">点击显示输入框</button>
    </div>
  </body>
</html>
<script src="https://gcore.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
  var app = new Vue({
    el: '#app',
    data: {
      isShow: false,
    },
    methods: {
      showInput() {
        this.isShow = true;
        this.mynextTick(() => {
          this.$refs.userName.focus();
        });
      },
      mynextTick(func) {
        var textNode = document.createTextNode(0); //新建文本节点
        var that = this;
        var callback = function (mutationsList, observer) {
          func.call(that);
          // 或
          // fanc();
        };
        var observer = new MutationObserver(callback);

        observer.observe(textNode, { characterData: true });
        textNode.data = 1; //修改文本信息，触发dom更新
      },
    },
  });
</script>
```
