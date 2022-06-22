# InterSectionObserver：异步视口观察

学习链接：

- [链接 1](http://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html)

- [链接 2](https://www.jianshu.com/p/84a86e41eb2b)

## 【1】使用 API

```js
/**
 * 新建实例
 * callback：回调函数
 * option：配置项，非必填
 */
var io = new InterSectionObserver(callback, option);

// 开始观察
io.observe(document.getElementById('imgID'));

// 停止观察
io.unobserve(element);

// 关闭观察器
io.disconnect();
```

## 【2】返回 IntersectionObserverEntry 对象

`IntersectionObserverEntry`对象提供目标元素的信息，一共有六个属性。

```json
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

- time：可见性发生变化的时间，是一个高精度时间戳，单位为毫秒
- target：被观察的目标元素，是一个 DOM 节点对象
- rootBounds：根元素的矩形区域的信息，getBoundingClientRect()方法的返回值，如果没有根元素（即直接相对于视口滚动），则返回 null
- boundingClientRect：目标元素的矩形区域的信息
- intersectionRect：目标元素与视口（或根元素）的交叉区域的信息
- intersectionRatio：目标元素的可见比例，即 intersectionRect 占 boundingClientRect 的比例，完全可见时为 1，完全不可见时小于等于 0

## 【3】懒加载图片实例

```js
const io = new IntersectionObserver(callback);
let imgs = document.querySelectorAll('[data-src]');
function callback(entries) {
  entries.forEach((item) => {
    if (item.isIntersecting) {
      item.target.src = item.target.dataset.src;
      io.unobserve(item.target);
    }
  });
}

imgs.forEach((item) => {
  io.observe(item);
});
```
