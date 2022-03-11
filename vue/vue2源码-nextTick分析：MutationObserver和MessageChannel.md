---
title: vue2源码-nextTick分析：MutationObserver和MessageChannel
date: 2020-11-16 14:35:18
categories: 
- program
---

# 为什么要用nextTick

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
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
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    var app = new Vue({
        el: '#app',
        data: {
            isShow: false
        },
        methods:{
            showInput(){
                this.isShow = true
                this.$refs.userName.focus()
            }
        }

    })
</script>
```

运行结果是报错，找不到节点。也就是说，当你执行到isShow=true时，此时dom节点尚未更新，只能等待dom更新后，你才能执行下面的focus。


# 用MessageChannel实现

```

<!DOCTYPE html>

<html lang="en-zh">
  <head>
    <meta charset="utf-8" />
    <style type="text/css">
    </style>
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

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
  var app = new Vue({
    el: '#app',
    data: {
      isShow: false
    },
    methods: {
      showInput(){
        this.isShow = true;
        this.myNextTick(() => {
          this.$refs.userName.focus();
        })
      },
      myNextTick(fanc){
        var that = this;
        const ch = new MessageChannel();
        const port1 = ch.port1;
        const port2 = ch.port2;

        port2.onmessage = (() => {
          fanc();
        })
        port1.postMessage(1);

      }
    }
  })
</script>

```

# 用MutationObserver实现

```

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
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
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    var app = new Vue({
        el: '#app',
        data: {
            isShow: false
        },
        methods:{
            showInput(){
                this.isShow = true
                this.mynextTick(()=>{
                    this.$refs.userName.focus()
                })

            },
            mynextTick(func){
                var textNode = document.createTextNode(0)//新建文本节点
                var that = this
                var callback = function(mutationsList, observer) {
                    func.call(that);
                    // 或
                    // fanc();
                }
                var observer = new MutationObserver(callback);

                observer.observe(textNode,{characterData:true })
                textNode.data = 1//修改文本信息，触发dom更新
            }
        }

    })
</script>
```

# 为何弃用MessageChannel使用MutationObserver

![image](https://wx2.sinaimg.cn/large/0069qZtTgy1gkr7tz3w2mj31al0pwn9d.jpg)

vue2中在2018年12月20号用MutationObser替换了MessageChannel（有很多博客说是相反的，但查git上的时间线是这样的），把2个都使用下对比便知结果：

因为MutationObserver是宏任务，MessageChannel是微任务，比它先执行，选用它肯定考虑了这部分因素。

```
<!DOCTYPE html>

<html lang="en-zh">
  <head>
    <meta charset="utf-8" />
    <style type="text/css">
    </style>
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

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
  var app = new Vue({
    el: '#app',
    data: {
      isShow: false
    },
    methods: {
      showInput(){
        this.isShow = true;
        this.myNextTick1(() => {
          this.$refs.userName.focus();
        })
        this.myNextTick2(() => {
          this.$refs.userName.focus();
        })
      },
      myNextTick1(fanc){
        var that = this;
        const ch = new MessageChannel();
        const port1 = ch.port1;
        const port2 = ch.port2;

        port2.onmessage = (() => {
          console.log('1')
          fanc();
        })
        port1.postMessage(1);

      },
      myNextTick2 (fanc) {
        var that = this;
        var textNode = document.createTextNode('0');
        var callback = function(mutationList, observer){
          console.log('2')
          fanc();
        }
        var observer = new MutationObserver(callback);
        observer.observe(textNode, {characterData: true});
        textNode.data = 1;
      }
    }
  })
</script>
```

打印出来：

```
2
1
```

并不是按顺序执行，而是先宏任务`MutationObserver`，再微任务`MessageChannel`。