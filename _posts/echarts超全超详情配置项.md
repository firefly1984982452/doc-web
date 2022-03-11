---
title: echarts超全超详情配置项
date: 2020-09-08 14:35:18
categories:
- program
---

原 date: 2018-11-20 14:35:18

# 一、链接

- [官方 API 链接](https://echarts.apache.org/zh/option.html)

- [官方实例链接](https://echarts.apache.org/examples/zh/index.html)

- [官方 Gallery 更多实例链接](https://gallery.echartsjs.com/explore.html#sort=rank~timeframe=all~author=all)

- [Echarts-实现过的图](https://www.makeapie.com/explore.html?u=obd-oMh8dOJBM1AU_feLTKJcUeQxYXqhc2a&type=work#sort=rank~timeframe=all~author=all)

---

# 二、在 vue 中如何使用

## 【1】下载

```
npm install echarts --save
```

注意项：如果 echarts 用的是 5.0以上，对应的其它插件也要更新到最新版。

## 【2】写 echarts 组件

```
<template>
  <div :style="{width: width, height:height}">
      <div class="echarts" :id="domID" :style="{width: width,height:height,cursor: 'col-resize'}"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import { guid } from '../assets/js/common'
export default {
  data () {
    return {
      hasError: false,
      err: '',
      domID: 'd_' + guid(),
      option: null,
      chart: null
    }
  },
  props: {
    width: {
      default: '100%',
      type: String
    },
    height: {
      default: '100%',
      type: String
    },
    config: {
      default: '',
      type: String
    },
    hand: {
      default: 'false',
      type: String
    }
  },
  created () {
    this.option = require('../config/echartsConfig/' + this.config).option
  },
  mounted: function () {
    window.addEventListener(
        "resize",this.resizeB,false
    )
    try {
      if (this.option == null) {
        this.err = '找不到配置信息'
        this.hasError = true
      } else {
        this.chart = echarts.init(document.getElementById(this.domID))
        document.getElementById(this.domID).style.height = '100%'
        this.chart.setOption(this.option)
        this.chart.on('click', (params) => {
          this.$bus.emit('dataFromE', params)
          if (this.option.selfTitle === '事件统计') {
            if (params.componentType === 'xAxis') {
              this.option.xAxis.axisLabel.textStyle.color = (value, index) => {
                return value === params.value ? '#40F6B9' : '#89ADBF'
              }
              this.option.series[0].itemStyle.normal = {
                barBorderRadius: [5, 5, 0, 0],
                color: (value, index) => {
                  return value.name === params.value ? new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      {offset: 0, color: 'rgba(66,255,190,1)'},
                      {offset: 1, color: 'rgba(66,255,190,0.13)'}
                    ]
                  ) : new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      {offset: 0, color: 'rgba(0,226,255,1)'},
                      {offset: 1, color: 'rgba(0,193,255,0.13)'}
                    ]
                  )
                }
              }
            } else {
              this.option.xAxis.axisLabel.textStyle.color = (value, index) => {
                return value === params.name ? '#40F6B9' : '#89ADBF'
              }
              this.option.series[0].itemStyle.normal = {
                barBorderRadius: [5, 5, 0, 0],
                color: (value, index) => {
                  return value.name === params.name ? new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      {offset: 0, color: 'rgba(66,255,190,1)'},
                      {offset: 1, color: 'rgba(66,255,190,0.13)'}
                    ]
                  ) : new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      {offset: 0, color: 'rgba(0,226,255,1)'},
                      {offset: 1, color: 'rgba(0,193,255,0.13)'}
                    ]
                  )
                }
              }
            }
            this.chart.setOption(this.option)
          }
        })
      }
    } catch (e) {
      this.err = e.message
      this.hasError = true
    }
  },
  activated () {
    let timer = setTimeout(() => {
      this.raiseSroll()
      clearTimeout(timer)
    }, 400)
    window.onresize =() => {
        this.resizeB
    }
    window.addEventListener(
        "resize",this.resizeB,false
    )
  },
  deactivated () {
    window.removeEventListener("resize",this.resizeB);
    this.raiseSroll(false)
  },
  methods: {
    refresh: function () {
      this.chart.setOption(this.option)
    },
    dispatchAction (e) {
      setTimeout(() => {
        this.chart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: 0
        })
        this.chart.on('mouseout', (params) => {
          this.chart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: 0
          })
        })
        this.chart.on('mouseover', (params) => {
          if (params.name === e[0].name) {
            this.chart.dispatchAction({
              type: 'highlight',
              seriesIndex: 0,
              dataIndex: 0
            })
          } else {
            this.chart.dispatchAction({
              type: 'downplay',
              seriesIndex: 0,
              dataIndex: 0
            })
          }
        })
      }, 400)
      this.chart.setOption(this.option)
    },
    resizeB: function () {
      let timer1 = setTimeout(() => {
        this.chart.resize()
        // console.log('调用了改变echart自适应')
        this.refresh()
        clearTimeout(timer1)
      }, 400)
    }
  }
}
</script>

<style scoped>
.echarts {
  height: 100% !important;
}
.echarts div {
  height: 100% !important;
}
</style>
<style>
  .handClass>div>canvas{
    cursor: col-resize !important;
  }
</style>

```

## 【3】main.js 里面定义

和常规的注册全局组件一样的写法

```
// 引入echarts公用组件
import Ehcart from '@/components/echarts';
Vue.component('ehcart', Ehcart);
```

## 【4】在 vue 里面使用

```
<ehcart
  ref="echarts_nevel"
  config='test'
  height="3.58rem"
  width='100%'/>

let echart = this.$refs.echarts_nevel;
let resData = res.data;
echart.option.xAxis.data = resData.map(v => v.lx);
echart.option.series[0].data = resData.map(v => v.vx);
echart.resizeB(); // 如果要后期改变大小
echart.refresh();
```

## 【5】配置 echarts 具体内容

```
import {getAdapterFont} from '../../assets/js/common'
export const option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
        fontSize: getAdapterFont(20)
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
                {value: 135, name: '视频广告'},
                {value: 1548, name: '搜索引擎'}
            ]
        }
    ]
}
```

## 【6】echarts 其它公用方法 common.js

common.js

```
/*
生成guid
*/
export const guid = function () {
    let guid = ''
    for (let i = 1; i <= 32; i++) {
      let n = Math.floor(Math.random() * 16.0).toString(16)
      guid += n
    }
    return guid
  }

// 适配分辨率的echarts-一般字体
export const getAdapterFont = (e = 7) => {
    e = e || 0
    let wid = document.body.clientWidth
    if (wid < 3000) {
      return document.body.clientWidth / 1000 * e
    } else {
      return 1920 / 1000 * e * 1.5
    }
}
```

---

# 三、常见通用配置项

```
option = {
    // 标题组件，包含主标题和副标题
    title: {
        text: '世界人口总量',
        subtext: '数据来自网络'
    },

    // 图例组件
    legend: {
        data: ['2011年', '2012年']
    },

    // 上下左右及大小-设置图表占总面积的地方
    grid:{x: '5%', y: '2%', width: '80%', height: '90%'},

    dataset: {
        // 用 dimensions 指定了维度的顺序。直角坐标系中，
        // 默认把第一个维度映射到 X 轴上，第二个维度映射到 Y 轴上。
        // 如果不指定 dimensions，也可以通过指定 series.encode
        // 完成映射，参见后文。
        dimensions: ['product', '2015', '2016', '2017'],
        source: [
            {product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7},
            {product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1},
            {product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5},
            {product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1}
        ]
    },
    // grid坐标系的x轴
    xAxis: {
        type: 'category',
    },
    // grid坐标系的y轴
    yAxis: {
        type: 'category',
    },


    // 区域缩放
    dataZoom: [
        {
            type: 'slider',
            show: true,
            start: 0,
            end: 100,
            handleSize: 8
        },
    ],

    // 提示框组件
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },

    //工具栏。内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具。
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
        }
    },

    // 单独的数据集声明
    dataset: {
        // 用 dimensions 指定了维度的顺序。直角坐标系中，
        // 默认把第一个维度映射到 X 轴上，第二个维度映射到 Y 轴上。
        // 如果不指定 dimensions，也可以通过指定 series.encode
        // 完成映射，参见后文。
        dimensions: ['product', '2015', '2016', '2017'],
        source: [
            {product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7},
            {product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1},
            {product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5},
            {product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1}
        ]
    },

    // 系列列表。每个系列通过 type 决定自己的图表类型
    series: [
        {
            type: 'bar',
            startAngle: 300,
            minAngle: 15,
            radius: ['100%', '60%'],
            center: ['50%', '50%'],
            barWidth: 20
        },
        {
            type: 'bar',
            startAngle: 300,
            minAngle: 15,
            radius: ['100%', '60%'],
            center: ['50%', '50%'],
            barWidth: 20
        },
        {
            type: 'bar',
            startAngle: 300,
            minAngle: 15,
            radius: ['100%', '60%'],
            center: ['50%', '50%'],
            barWidth: 20
        }
    ],

    // 调色盘颜色列表。如果系列没有设置颜色，则会依次循环从该列表中取颜色作为系列颜色。
    color:['#4181E4','#5CCED4'],

    // 背景色，默认无背景。
    backgroundColor:'#eee',

    // 全局的字体样式。
    textStyle:{
      color:'#f00'
    }
};
```

---

# 四、组件其它设置

## 【1】颜色渐变

```
color:[new echarts.graphic.LinearGradient(
        0, 0, 0, 1,       //4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始
        [
            {offset: 0, color: '#459BF6'},
            {offset: 1, color: '#61D2D6'}
        ]                //数组, 用于配置颜色的渐变过程. 每一项为一个对象, 包含offset和color两个参数. offset的范围是0 ~ 1, 用于表示位置
    ),'#556783'],
```

## 【2】饼图最小区域面积

```
type: 'pie',
minAngle: 15,
```

## 【3】y 轴文字过长显示省略号

```
axisLabel: {
    textStyle: {
        fontSize: getAdapterFont(6),
        color: '#fff'
    },
    interval: 0,
    formatter: function(value) {
        if (value.length > 5) {
        return value.substring(0, 5) + "...";
        } else {
        return value;
        }
    }
},
```

---

# 五、js 控制 echarts

## 【1】`window.eventBus`实现 vue 页面与普通 js 数据通信

重点：用`window.eventBus`而不是`this.eventBus`，因为普通 js 里面的`this`是代表`vue`，而普通 js 获取不到`vue`的值。

main.js

```
// 引入eventBus
import EventBus from './bus/eventBus';
Vue.prototype.$eventBus = EventBus;

if (window) {
  window.$eventBus = EventBus;
}
```

page.vue

```
window.$eventBus.$emit('residenceData', resData.map(v => v.lx));
```

index.js

```
var attackSourcesName = [];
window.$eventBus.$on('residenceData',v=>{
    attackSourcesName = v;
})
```

![image](https://wx3.sinaimg.cn/large/0069qZtTgy1gij1jm6zqjj30zw0han25.jpg)

## 【2】echarts 与 elementUI 中的 carousel 走马灯结合的轮播

```
<el-carousel :interval="3000" arrow="always" class="img-box">
    <el-carousel-item
        v-for="(item,index) in 2"
        :key="index" >
        <div v-if="0 === index">
            <ehcart ref="echrts_educationals" config='home-service-educational' height="2.32rem" width='4.63rem'/>
        </div>
        <div v-if="1 === index">
            <ehcart ref="echarts_ages" config="home-ageCollection" height="2.32rem" width='4.63rem'/>
        </div>
    </el-carousel-item>
</el-carousel>

...

let echart1 = this.$refs.echrts_educationals[0];
echart1.option.series[0].data = [];
echart1.resizeB();
echart1.refresh();

let echart2 = this.$refs.echarts_ages[0];
echart2.option.xAxis[0].data = [];
echart2.resizeB();
echart2.refresh();
```

`resizeB`的具体方法：

```
resizeB: function () {
    let timer1 = setTimeout(() => {
        this.chart.resize()
        // console.log('调用了改变echart自适应')
        this.chart.setOption(this.option);
        clearTimeout(timer1)
    }, 400)
}
```

## 【3】普通的控制显示隐藏

用`v-if`，不要用`v-show`，这样就会重新生成`DOM`，而不是显示隐藏。

---

# 六、常用图表——折线图、柱状图、饼图

## 【1】折线图-line

```
option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        areaStyle:{}, // 添加区域表示有面积
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
};

```

## 【1.1】折线图最高值显示

```
markPoint: {
  symbol: 'circle',
  symbolSize: 1,
  label: {
    show: true,
    position: 'top',
    distance: 5,
    color: '#77D5FF',
    fontSize: 20
  },
  itemStyle: {
    color: '#50E3C2'
  },
  data: [{ type: 'max', name: '最大值' }]
},
```

## 【2】柱状图-bar

### 【2.1】柱状图横/竖向显示

竖向

```
xAxis: {
    type: 'category'
},
yAxis: {
    type: 'value',
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
},
```

横向

```
xAxis: {
    type: 'value'
},
yAxis: {
    type: 'category',
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
},
```

### 【2.2】堆叠

重点：所有数据有一个共同的`stack`，如`stack: '总量'`。

```
series: [
    {
        name: '联盟广告',
        type: 'bar',
        stack: '总量',
        data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
        name: '视频广告',
        type: 'bar',
        stack: '总量',
        data: [150, 212, 201, 154, 190, 330, 410]
    },
    {
        name: '搜索引擎',
        type: 'bar',
        stack: '总量',
        data: [820, 832, 901, 934, 1290, 1330, 1320]
    }
]
```

## 【3】饼图-pie

### 【3.1】普通饼图

重点：`type: 'pie',radius: '55%',`

```
series: [
    {
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        data: [
            {value: 335, name: '直接访问'},
            {value: 310, name: '邮件营销'},
            {value: 234, name: '联盟广告'},
            {value: 135, name: '视频广告'},
            {value: 1548, name: '搜索引擎'}
        ],
    }
]
```

### 【3.2】圆环饼图

重点：`type: 'pie',radius: ['50%', '70%'],`

```
series: [
    {
        name: '访问来源',
        type: 'pie',
        radius: ['50%', '70%'],
        data: [
            {value: 335, name: '直接访问'},
            {value: 310, name: '邮件营销'},
            {value: 234, name: '联盟广告'},
            {value: 135, name: '视频广告'},
            {value: 1548, name: '搜索引擎'}
        ]
    }
]
```

---

### 【3.3】饼图其它设置

- 鼠标悬浮时去掉动画

```
hoverAnimation:false,
```
