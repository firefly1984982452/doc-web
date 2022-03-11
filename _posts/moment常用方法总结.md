---
title: moment常用方法总结
date: 2020-10-19 13:50:17
categories: 
- program
---

# 完整日期

```
yyyy-MM-DD HH:mm:ss
```

# 当前周

```
getCurrWeekDays () {
    let weekOfday = parseInt(this.$moment().format('d')) // 计算今天是这周第几天
    let start = this.$moment().subtract(weekOfday-1, 'days').format('YYYY-MM-DD') // 周一日期
    let end = this.$moment().add(7 - weekOfday, 'days').format('YYYY-MM-DD') // 周日日期
    return [start,end]
},
```

# 当前月

```
getCurrMonthDays () {
    let start = this.$moment().add('month', 0).format('YYYY-MM') + '-01'
    let end = this.$moment(start).add('month', 1).add('days', -1).format('YYYY-MM-DD')
    return [start,end]
},
```

# 当前季度

```
getCurrJiDays () {
    let start = this.$moment().startOf('quarter').format("YYYY-MM-DD")
    let end = this.$moment().endOf('quarter').format("YYYY-MM-DD")
    return [start,end]
},
```

# 当前年

```
getCurrYearDays () {
    let start = this.$moment().format('YYYY-01-01')
    let end = this.$moment().format('YYYY-12-31')
    return [start,end]
},
```