---
title: List去重统计的算法
date: 2020-08-28 15:44:34
categories: 
- program
---

# 题：将list变成arry

```
const list = [
    { name: '1', type:1 },
    { name: '1', type:1 },
    { name: '1', type:1 },
    { name: '1', type:2 },
    { name: '1', type:2 },
    { name: '2', type:2 },
    { name: '2', type:2 },
    { name: '2', type:2 }
]
const arry = [
    { name: '1', type:1, total:3 },
    { name: '1', type:2, total:2 },
    { name: '2', type:2, total:3 },
]
```

# 6月12号解题


最原始的写法，写了4个for循环，每个都嵌套了2层。


思路：

```
1.只留下所有name，将所有name下的type合并
2.将name下的type遍历，统计不同的type的值和总数
3.遍历刚刚统计的typeList，计算对应的type和total，push到data里
4.删除原来的统计数据
```

```
      let arr =  [
        { name: '1', type:1 },
        { name: '1', type:1 },
        { name: '1', type:1 },
        { name: '1', type:2 },
        { name: '1', type:2 },
        { name: '2', type:2 },
        { name: '2', type:2 },
        { name: '2', type:2 }
      ]
      let data = [];
      // 只留下所有name，将所有name下的type合并
      for (var i = 0; i< arr.length; i ++) {
        let index = data.findIndex(ele => ele.name == arr[i].name);
        if (index == -1) {
          data.push(arr[i])
        } else {
          data[index].type = typeof data[index].type == 'number' ? [data[index].type] : data[index].type;
          data[index].type.push(arr[i].type);
        }
      }

      // 当前data是: [{name: "1",type:[1, 1, 1, 2, 2]},{name: "2",type: [2, 2, 2]}]

      // 将name下的type遍历，统计不同的type的值和总数
      for (var i = 0; i < data.length; i ++) {
        if (typeof data[i].type !== 'number') {
          data[i].typeList = [];
          for (var j = 0 ; j < data[i].type.length; j ++) {
            let index = data[i].typeList.findIndex(ele => ele.val == data[i].type[j])
            if (index !== -1) {
              ++data[i].typeList[index].total;
            } else {
              let item = {
                val :  data[i].type[j],
                total : 1
              }
              data[i].typeList.push(item)
            }
          }
        } else {
          data[i].total = 1;
        }
      }

      // 当前data是: [
      //   {
      //     name: "1",
      //     type:[1, 1, 1, 2, 2],
      //     typeList:[{val: 1, total: 3},{val: 2, total: 2}]
      //   },
      //   {
      //     name: "2",
      //     type: [2, 2, 2],
      //     typeList:[{val: 2, total: 3}]
      //   }
      // ]

      // 遍历刚刚统计的typeList，计算对应的type和total，push到data里
      for (var i = 0; i< data.length; i ++ ){
        if (typeof data[i].type !== 'number') {
          for(var j = 0; j < data[i].typeList.length; j ++) {
            let item = {
              name: data[i].name,
              type: data[i].typeList[j].val,
              total: data[i].typeList[j].total
            }
            data.push(item)
          }
        }
      }

      // 当前data是：
      //   [{name: "1", type: Array(5), typeList: Array(2)},
      //   {name: "2", type: Array(3), typeList: Array(1)},
      //   {name: "1", type: 1, total: 3},
      //   {name: "1", type: 2, total: 2},
      //   {name: "2", type: 2, total: 3}

      // 删除原来的统计数据
      let length = data.length
      for (var i = 0; i< length; i ++ ){
        if (typeof data[i].type !== 'number') {
          data.splice(i,1);
          --length;
          --i;
        }
      }

      // 当前data是：
      // [{name: "1", type: 1, total: 3},
      // {name: "1", type: 2, total: 2},
      // {name: "2", type: 2, total: 3}]

      console.log(data)
```

# 8月28日二解

```
const arr = [];
var item = {
    name: list[0].name,
    type: list[0].type,
    total: 0
}
list.forEach(val => {
    if(val.name == item.name && val.type == item.type) {
        ++item.total;
    } else {
        arr.push(item);
        item = {
            name: val.name,
            type: val.type,
            total: 1

        }
    }
})
arr.push(item);
console.log(arr);
```

# 别人写的

![image](https://wx4.sinaimg.cn/mw690/0069qZtTgy1gi6oba2y5ej30qu064q6r.jpg)

```
var ary = list.reduce((item, next) => {
    var isHas = item.find(v => v.name === next.name && v.type === next.type);
    if(isHas == undefined) {
        next.total = list.filter(v => v.name == next.name && v.type == next.type).length
        item.push(next);
    }
    return item;
},[])
```