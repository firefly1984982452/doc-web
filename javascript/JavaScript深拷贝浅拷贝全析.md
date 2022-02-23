---
title: JavaScript深拷贝浅拷贝全析
date: 2020-07-31 10:19:32
categories: 
- program
---

# 浅拷贝

用浅拷贝如果改变obj2的对象，obj1不会再改变，它们不会引用一个值，但如果对象里面还有对象，就会失效，它们是同一个引用。

1. 用`Object.create`克隆对象

2. 数组用`concat`

3. 对象用`assign`

4. 扩展运算符（`...`）

## 【1】用`Object.create`克隆对象

**用法：**

```
var obj1 = {a:2,b:{name:'小明'}};
var obj2 = Object.create(obj1);

```

**详解：**

```
var obj1 = {a:2,b:{name:'小明'}};
var obj2 = Object.create(obj1);
obj2.a = 3;
obj2.b.name = '小红';
console.log(obj1,obj2);
```

**结果：**

![image](https://img2020.cnblogs.com/blog/919128/202007/919128-20200731133016520-25880925.png)

**结论：**

obj1对象中的一级对象a:2并没有受影响，但二级对象b已经受影响。所以**`Object.create`克隆的对象也只能实现一级对象的深拷贝**。


## 【2】数组用concat

**用法：**

```
[].concat(arr)
```

**详解：**

```
var arr = [{id:1,name:'1',other:{sex:'男'}}]
var brr = [].concat(arr);
brr[0].id = 2;
brr[0].other.sex = '女';
console.log(arr[0],brr[0])
```
**结果：**

![image](![image](https://img2020.cnblogs.com/blog/919128/202007/919128-20200731132657850-1056830592.png))

**结论：**

arr的一级对象(id)和对象里面的对象(other.sex)都是引用同一个指针，不能实现深拷贝。


## 【3】对象用assign

**用法：**

```
var obj1 = {a: 1}
var obj2 = Object.assign({}, obj1)
```

**详解：**

```
var obj = {id:1,name:{a:'xx'},fn:function(){},un:undefined};
var obj2 = Object.assign({}, obj);
obj2.id = 2;
obj2.name.a = 'obj2';
console.log(obj,obj2)
```
**结果：**

![image](https://img2020.cnblogs.com/blog/919128/202007/919128-20200731111401682-688288366.png)

**结论：**

obj的一级对象(id)的确不受影响，但对象里面的对象(name.a)还是引用同一个指针，不能实现深拷贝。

## 【4】扩展运算符（...）

**用法：**

```
var obj1 = {a: 1}
var obj2 = {...obj1}
```

**详解：**

```
var obj = {id:1,name:{a:'xx'},fn:function(){},un:undefined};
var obj2 = {...obj};
obj2.id = 2;
obj2.name.a = 'obj2';
console.log(obj,obj2)
```
**结果：**

![image](https://img2020.cnblogs.com/blog/919128/202007/919128-20200731111401682-688288366.png)

**结论：**

obj的一级对象(id)的确不受影响，但对象里面的对象(name.a)还是引用同一个指针，不能实现深拷贝。

---

# 深拷贝

1. `JSON.parse(JSON.stringify())`

2. `MessageChannel`

3. `lodash.cloneDeep`

用深拷贝的话，就算对象里面还有对象，也不会是同一个引用，但是会忽略`undefined`和`function`，用方法3不会忽略`function`和`undefined`。

## 【1】JSON.parse(JSON.stringify())


```
var obj1 = {a: 1}
obj2 = JSON.parse(JSON.stringify(obj1))
```


## 【2】MessageChannel

```
var obj = {id:1,name:{a:'xx'}};

function structuralClone(obj) {
    return new Promise((resolve) => {
        const {port1, port2} = new MessageChannel();
        port2.onmessage = ev => resolve(ev.data);
        port1.postMessage(obj);
    })
}
structuralClone(obj).then(res=>{
    console.log(res);
    var obj3 = res;
    obj3.name.a = 'obj3';
    console.log(obj,obj3);
})

<!-- 用promise是为了好传数据 -->
```

![image](https://img2020.cnblogs.com/blog/919128/202007/919128-20200731133645338-66683973.png)

## 【3】用lodash.cloneDeep

```
import _ from 'lodash'
var obj = {id:1,name:{a:'xx'},fn:function(){},un:undefined};
var obj2 = _.cloneDeep(obj);
obj2.name.a = 'obj2';
console.log(obj,obj2)
```

![image](https://wx2.sinaimg.cn/mw690/0069qZtTgy1ghcrk94yhdj30dm033aa5.jpg)
