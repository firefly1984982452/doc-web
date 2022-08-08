#  vue常用小组件总结

---

## 使用方法

```js
<boxTitle :title="'巡查任务'" />

import boxTitle from '@/components/common/box-title';

components: {
    boxTitle
},
```

## 左上角标题带图标

**效果**：

![bOKRF1.md.jpg](https://s1.ax1x.com/2022/03/14/bOKRF1.md.jpg)

**代码**：

```js
<template>
    <p class="title">
      <i></i>
      <span>{{title}}</span>
    </p>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    title: String
  },
  methods:{
  }
}
</script>

<style lang="less" scoped>
  .title{
    display: flex;
    height: 44px;
    line-height: 44px;
    align-items: center;
    margin: 0 40px 0 0;
    i{
      width: 15px;
      height: 24px;
      background: url('../../assets/images/icon-fire-title.png') no-repeat;
      background-size: 100%;
    }
    span {
      width: auto;
      height: 30px;
      font-size: 30px;
      color: #D7E4FF;
      letter-spacing: 0;
      font-weight:500;
      line-height: 30px;
      margin: 0 0 0 16px;
    }
  }
</style>
```

**使用**：

```html
<boxTitle :title="'巡查任务'" />
```

## 上下item项

**效果**：

![bOKgoR.jpg](https://s1.ax1x.com/2022/03/14/bOKgoR.jpg)

**代码**：

```html
<template>
  <div class="devices-item">
      <p  :style="'color:'+color">{{name}}</p>
      <div>{{title}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: [
    'title',
    'name',
    'color',
  ],
  methods:{
  }
}
</script>

<style lang="less" scoped>
.devices-item{
    height: 132px;
    direction: flex;
    flex-direction: row;
    justify-content: space-between;
    p{
        width: 180px;
        height: 74px;
        line-height: 74px;
        font-size: 60px;
        text-align: center;
        font-weight: bold;
    }
    div{
        width: auto;
        min-width: 180px;
        height: 42px;
        line-height: 42px;
        font-size: 30px;
        color: #D7E4FF;
        letter-spacing: 0;
        text-align: center;
    }
}
</style>
```

**使用**：

```html
<devicesItem :title="'总数'" :color="'#D7E4FF'" :name="123"/>
```