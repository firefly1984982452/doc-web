# CSS - will-change 性能优化

- [will-change 链接](https://developer.mozilla.org/en-US/docs/Web/CSS/will-change) [animation 事件监听](https://www.runoob.com/try/try.php?filename=tryjsref_animationstart)

两者结合的实例：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>test</title>
    <style>
      #myDIV {
        margin: 25px;
        width: 550px;
        height: 100px;
        background: orange;
        position: relative;
        font-size: 20px;
        will-change: transform, opacity;
      }

      @keyframes mymove {
        from {
          top: 0px;
          transform: scale(1);
          opacity: 1;
        }

        to {
          top: 200px;
          transform: scale(0.7);
          opacity: 0.7;
        }
      }
    </style>
  </head>

  <body>
    <p>
      该实例使用了addEventListener() 方法为 DIV 元素添加"animationstart", "animationiteration" 和
      "animationend" 事件。
    </p>
    <p>该实例使用了will-change优化性能。</p>
    <div id="myDIV" onclick="myFunction()">点我开始动画</div>
    <script>
      var x = document.getElementById("myDIV");
      function myFunction() {
        x.style.animation = "mymove 4s 2";
      }
      x.addEventListener("animationstart", myStartFunction);
      x.addEventListener("animationiteration", myIterationFunction);
      x.addEventListener("animationend", myEndFunction);
      function myStartFunction() {
        this.innerHTML = "animationstart 事件触发 - 动画已经开始";
        this.style.backgroundColor = "pink";
      }
      function myIterationFunction() {
        this.innerHTML = "animationiteration 事件触发 - 动画重新播放";
        this.style.backgroundColor = "lightblue";
      }
      function myEndFunction() {
        this.innerHTML = "animationend 事件触发 - 动画已经完成";
        this.style.willChange = "auto";
        this.style.backgroundColor = "lightgray";
      }
    </script>
  </body>
</html>
```
