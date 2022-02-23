---
title: HTML5之canvas
date: 2021-03-09 15:43:32
categories:
- program
---

# 一、学习链接

- [阮一峰-canvas 教程](https://wangdoc.com/webapi/canvas.html)

- [菜鸟教程-canvas 教程](https://www.runoob.com/html/html5-canvas.html)

- [菜鸟教程-canvas 实例](https://www.runoob.com/w3cnote/html5-canvas-intro.html)

---

# 二、简介

## 【0】canvas 效果预览

![image](https://wx4.sinaimg.cn/large/0069qZtTgy1godp89sf40j31pl0u0kjl.jpg)

[在线观看](https://firefly1984982452.github.io/my-web-page/canvas.html)

[源码地址](https://github.com/firefly1984982452/my-web-page/blob/master/canvas.html)

## 【1】canvas 的通用标准语法

- width：宽度；
- height：高度；
- fill：填充色；
- stroke：边框色；

## 【2】使用

```
<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;">
    </canvas>
    <script>
      var c=document.getElementById("myCanvas");
      var ctx=c.getContext("2d");
      ctx.fillStyle="#FF0000";
      ctx.fillRect(0,0,150,75);
    </script>
  </body>
</html>
```

---

# 三、元素语法

## 【1】`<canvas>`

canvas 代码都放在顶层标签`<canvas>`之中，由 JS 生成内容，一般情况下没有内层标签。

```
<canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;">
</canvas>
```

## 【2】`rect`矩形

```
<canvas class="box" id="rect"> </canvas>

...

function rectFn() {
  let c = document.querySelector("#rect");
  let ctx = c.getContext("2d");
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(10, 10, 150, 75);
}
```

## 【3】`moveTo`矩形

```
<canvas class="box" id="moveTo"> </canvas>

...

function rectFn() {
  let c = document.querySelector("#moveTo");
  let ctx = c.getContext("2d");
  ctx.moveTo(10, 10);
  ctx.lineTo(150, 200);
  ctx.stroke();
}
```

## 【4】`arc`圆形

```
<canvas class="box" id="arc"> </canvas>

...

function rectFn() {
  let c = document.querySelector("#rect");
  let ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.arc(90, 50, 40, 0, 2 * Math.PI);
  ctx.stroke();
}
```

## 【5】text【文本】

```
<canvas class="box" id="text"> </canvas>

...

function rectFn() {
  let c = document.querySelector("#rect");
  let ctx = c.getContext("2d");
  ctx.font = "30px Arial";
  ctx.fillText("hello world", 10, 50);
  ctx.strokeText("hello world", 20, 100);
}
```

## 【6】gradient【渐变】

```
<canvas class="box" id="gradient"> </canvas>

...

function rectFn() {
  let c = document.querySelector("#rect");
  let ctx = c.getContext("2d");
  let grd = ctx.createLinearGradient(0, 0, 200, 0);
  grd.addColorStop(0, "#f00");
  grd.addColorStop(1, "#fff");

  ctx.fillStyle = grd;
  ctx.fillRect(10, 10, 150, 80);
}
```

## 【7】image【图像】

```
<img
  class="box"
  id="scream"
  src="https://wx1.sinaimg.cn/mw690/0069qZtTgy1go96k54t3lj30ru0rqx6p.jpg"
  width="250"
  height="300"
  style="display: none"
/>
<canvas class="box" id="image"> </canvas>

...

function rectFn() {
  let c = document.querySelector("#rect");
  let ctx = c.getContext("2d");
  let img = document.querySelector("#scream");
  img.onload = function () {
    ctx.drawImage(img, 0, 0, 300, 200);
  };
}
```

---

# 四、实例：canvas数据流动效

[效果预览](https://firefly1984982452.github.io/my-web-page/canvas-dataflow.html)

源码：

```
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
        .box {
            width: 500px;
            height: 300px;
        }
    </style>
</head>

<body>
    <div class="line">
        <canvas class="box" id="rect"> </canvas>
    </div>
    <script>
		var texts = '01'.split('');
		const FONTSIZE = 30
		const WIDTH = 500
		const HEIGHT = 300
		var arrs = new Array(parseInt(WIDTH/FONTSIZE)).fill(1)
	
		let c = document.querySelector("#rect");
		let ctx = c.getContext("2d");
		
		setInterval(()=>{
			basicFn()
			animationFn();
		},100)
		function basicFn(){
            ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
            ctx.fillRect(0, 0, WIDTH, HEIGHT);
			
            ctx.fillStyle = "rgba(255,255,255,1)";
			ctx.font = FONTSIZE + "px Arial";
		}
        function animationFn() {
			arrs.forEach((v,index)=>{
				var text = texts[Math.floor(Math.random()*texts.length)]
				ctx.fillText(text, index*FONTSIZE, arrs[index]*FONTSIZE);
				
				if (arrs[index]*FONTSIZE > HEIGHT || Math.random() > 0.95) {
				  arrs[index] = 0
				}
				arrs[index]++
			})
        }

    </script>
</body>

</html>
```

vue组件版源码：

```
<template>
  <div class="box" ref="container">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drops: [],
      fontSize: 40,
      texts: '0123456789'.split('')
    }
  },
  mounted() {
    this.$eventBus.$on('ref_matrix', (width, height) => {
      var canvas = this.$refs.canvas
      canvas.height = width
      canvas.width = height
      this.drops = new Array(parseInt(canvas.width / this.fontSize)).fill(1)
      setInterval(this.draw, 99)
    })
  },
  methods: {
    draw() {
      var ctx = this.$refs.canvas.getContext('2d')
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, this.$refs.canvas.width, this.$refs.canvas.height)
      ctx.fillStyle = 'rgba(255,255,255,1)'
      ctx.font = this.fontSize + 'px arial'
      for (var i = 0; i < this.drops.length; i++) {
        var text = this.texts[Math.floor(Math.random() * this.texts.length)]
        ctx.fillText(text, i * this.fontSize, this.drops[i] * this.fontSize)

        if (this.drops[i] * this.fontSize > this.$refs.canvas.height || Math.random() > 0.95) {
          this.drops[i] = 0
        }
        this.drops[i]++
      }
    }
  }
}
</script>

<style scoped>
.box {
  width: 100%;
  height: 100%;
  overflow: hidden;
  opacity: 0.2;
  border-radius: 50%;
}
</style>
```