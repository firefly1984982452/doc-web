# Web Animation API

css animation：

```js
.item1 {
  width: 100px;
  height: 100px;
  animation: rotate1 4s inifite ease running;
}

@keyframes rotate1 {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

...

<div class="item1"></div>
```

用 Web Animation API：

```js
<div class="item1"></div>
<script>
  var ani1 = [
    { transform: 'rotate(0deg)', backgroundColor: 'red' },
    { backgroundColor: 'blue', offset: 0.4 },
    { transform: 'rotate(360deg)', backgroundColor: 'red' }
  ];
  var aniOpt1 = {
    duration: 4000,
    iterations: Infinity,
    easing: 'ease-in-out'
  };
  var rotateApi = document.querySelector(".item1").animate(ani1, aniOpt1);
</script>
```

Web Animation API 更多的操作方法：

```js
rotateAni.play(); //播放
rotateAni.pause(); //暂停
rotateAni.finish(); //对于有限次的动画而言，直接停止动画，且跳到动画结束位置
rotateAni.cancel(); //取消动画过程，直接跳到动画的开始位置
rotateAni.reverse(); //让动画反向执行到动画执行的原点,会将playbackTate从1变成-1
```

Web Animation API 的事件监听：

event 方式：

```js
rotateAni.oncancel = function () {
  doSomething();
};
rotateAni.onfinish = function () {
  doSomething();
};
```

promise 方式：

```js
rotateAni.finished.then(() => {
  console.log(rotateApi);
});
```
