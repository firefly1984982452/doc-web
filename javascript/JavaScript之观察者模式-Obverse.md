---
title: JavaScript之观察者模式-Obverse
date: 2020-12-08 15:44:34
categories: 
- program
---

# 知识点

- `ResizeObserver`：resize监听
- `MutationObserver`:监听DOM节点的变动
- `InterSectionObserver`：异步视口观察
- `PerformanceObserver`：监测性能
- `ReportingObserver`：汇报


# 一、ResizeObserver：resize监听

`window.resize`下监听某`DOM`的改变：

```
<textarea style="width: 100%;" id="main"></textarea>

...

let mainEl = document.querySelector('#main');
var ro = new ResizeObserver( entries => {
  console.log(entries);
})
ro.observe(mainEl);
```

# 二、MutationObserver:监听DOM节点的变动

## 【1】基本使用

```
<body>
    <div id="content">
      hi
    </div>
    <script>
      var callback = function(mutationList, observer) {
        for(var mutation of mutationList) {
          console.log(mutation)
        }
      };
      var observer = new MutationObserver(callback);
      var targetNode = document.getElementById('content');
      observer.observe(targetNode.firstChild,{
        characterData: true
      })
      setTimeout(() => {
        targetNode.firstChild.data = 'hello'
      },3000)
    </script>
</body>
```

3秒钟之后，id为`content`的`DOM`变成了`'hello'`，此时的`MutationObserver`就已经监听到了改变，可以进行下一步的操作。

## 【2】实现vue.$nexttick

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

# 三、InterSectionObserver：异步视口观察

学习链接：

- [链接1](http://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html)

- [链接2](https://www.jianshu.com/p/84a86e41eb2b)

## 【1】使用API

```
/**
  * 新建实例
  * callback：回调函数
  * option：配置项，非必填
  */
var io = new InterSectionObserver(callback,option);

// 开始观察
io.observe(document.getElementById('imgID'));

// 停止观察
io.unobserve(element);

// 关闭观察器
io.disconnect();
```

## 【2】返回IntersectionObserverEntry对象

`IntersectionObserverEntry`对象提供目标元素的信息，一共有六个属性。

```
{
  time: 3893.92,
  rootBounds: ClientRect {
    bottom: 920,
    height: 1024,
    left: 0,
    right: 1024,
    top: 0,
    width: 920
  },
  boundingClientRect: ClientRect {
     // ...
  },
  intersectionRect: ClientRect {
    // ...
  },
  intersectionRatio: 0.54,
  target: element
}
```

每个属性的含义如下。

```
time：可见性发生变化的时间，是一个高精度时间戳，单位为毫秒
target：被观察的目标元素，是一个 DOM 节点对象
rootBounds：根元素的矩形区域的信息，getBoundingClientRect()方法的返回值，如果没有根元素（即直接相对于视口滚动），则返回null
boundingClientRect：目标元素的矩形区域的信息
intersectionRect：目标元素与视口（或根元素）的交叉区域的信息
intersectionRatio：目标元素的可见比例，即intersectionRect占boundingClientRect的比例，完全可见时为1，完全不可见时小于等于0
```

## 【3】懒加载图片实例

```
const io = new IntersectionObserver(callback);
let imgs = document.querySelectorAll('[data-src]');
function callback(entries){
  entries.forEach((item) => {
    if(item.isIntersecting){
      item.target.src = item.target.dataset.src
      io.unobserve(item.target)
    }

  })
}

imgs.forEach((item)=>{
  io.observe(item)
})
```
