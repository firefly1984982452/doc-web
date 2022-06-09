# CSS - pointer-events

## 【1】CSS 禁止鼠标点击

```css
pointer-events: none;
```

## 【2】鼠标穿透效果

简单例子：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
    <style>
      .top {
        width: 100px;
        height: 90px;
        position: absolute;
        top: 0;
        left: 65px;
        background: yellow;
        opacity: 0.5;
        pointer-events: none;
      }
    </style>
  </head>
  <body>
    <!-- 下方的链接 -->
    <ul>
      <li><a href="http://www.hangge.com">航歌</a></li>
      <li><a href="http://www.hangge.com">hangge.com</a></li>
    </ul>
    <!-- 上方黄色div -->
    <div class="top"></div>
  </body>
</html>
```

效果：

![image](https://www.hangge.com/blog_uploads/201711/2017112015003436986.png)

与地图交互的复杂效果：

```html
<template>
  <div class="page">
    <map1 class="map" />
    <home class="home-content" />
  </div>
</template>

<style lang="less" scoped>
  .page {
    width: 100%;
    height: 100%;
    position: relative;
    .map {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
    }
    .home-content {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      pointer-events: none;
      .left,
      .right {
        pointer-events: all;
      }
    }
  }
</style>
```

重点：`map`放在底层，`home`的`总DOM`设置为`none`，然后哪些地方需要点击就设置为`all`。

```css
.home {
  pointer-events: none;
  .left,
  .right {
    pointer-events: all;
  }
}
```

![image](https://s1.ax1x.com/2022/03/14/bOuGU1.jpg)
