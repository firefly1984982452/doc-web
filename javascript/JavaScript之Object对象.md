---
title: JavaScript之Object对象
date: 2020-08-05 15:44:34
categories:
- program
---

# 一、对象的增删改查

## 【1】增/改

```
var obj = {};
obj.id = 1;
```

## 【2】删

```
delete obj.id;
```

## 【3】查

◆ 1. 普通的查询

```
obj.id; // 1
```

◆ 2. 用可选链操作符`?.`查

```
let obj =  {
  attr: {
      name: 'kingsaj'
  }
}
```

获取 name 的值

```
let n_val = obj.attr.name
```

如果这样直接获取可能会报错，导致程序异常，所以我们需要对 obj 、attr 此次验证
即：

```
let n_val = obj && obj.attr && obj.attr.name
```

**用可选链操作符`?.`**

```
let n_val = obj?.attr?.name
```


---

# 二、合并多个对象

## 【1】用`Object.assign`

```
let obj = Object.assign({a:3},{b:4},{c:5});
obj; // {a: 3, b: 4, c: 5}
```

## 【2】用`(```)`可以合并多个对象


```
let obj = {...{a:3},...{b:4},...{c:5}}
obj; // {a: 3, b: 4, c: 5}
```

---

# 三、深拷贝

[链接](https://firefly1984982452.github.io/2020/07/31/JavaScript%E6%B7%B1%E6%8B%B7%E8%B4%9D%E6%B5%85%E6%8B%B7%E8%B4%9D%E5%85%A8%E6%9E%90/)

方法 1：`JSON.parse(JSON.stringify())`

方法 2：`MessageChannel`

方法 3：`lodash.cloneDeep`

---

# 四、遍历

- `Object.keys()`

- `Object.values()`

- `for...in`

---

# 五、`Object.definedProperty`：定义属性

递归遍历对象用`defineProperty`实现`vue`双向绑定

```
var obj = {
id:1,
info:{
    sex:'女',
    name:'小红'
},
arr:['吃饭','喝水']
};
function observer(obj) {
console.log(obj)
if(typeof obj === 'object'){
    for(let i in obj){
    definedReactive(obj,i,obj[i]);
    }
}
}
function definedReactive(obj,key,value) {
observer(value);
Object.defineProperty(obj,key,{
    get(){
    console.log('获取：'+key)
    return value;
    },
    set(newValue){
    observer(newValue);
    console.log(key + '- 数据改变了');
    value = newValue;
    }
})
}
observer(obj);

obj.id = 1; // 修改对象监听成功
delete obj.info.name; // 删除对象监听失败
obj.arr.push(2); // 添加数组监听失败
obj.arr.slice(1); // 修改数组监听失败

```

---

# 六、`Object.fromEntries`：把序列化的字符串反转为对象


```
window.location.search = '?roomId=9&status=1&taskId=7&serviceId=1109';
var str = window.location.search.substr(1);
var p = new URLSearchParams(str);
var param = Object.fromEntries(p);
```

---

# 七、防篡改对象

`preventExtensions`：不能增，能删改
`seal`：不能增删，能改
`freeze`:不能增删改

|     对象属性      | 增  | 删  | 改  |
| :---------------: | :-: | :-: | :-: |
| preventExtensions |  ×  |  ✓  |  ✓  |
|       seal        |  ×  |  ×  |  ✓  |
|      freeze       |  ×  |  ×  |  ×  |

## 不可扩展对象`preventExtensions`

**`Object.preventExtensions`**不能增，能删改

```
var obj = {a:1,b:2};
Object.preventExtensions(obj);
obj.c = 3;
console.log(obj.c); // undefined
delete obj.a;
console.log(obj); // {b: 2} 删除成功
obj.b = 'hello'
console.log(obj); // {b: "hello"} 修改成功
```

检测是否不可扩展**`Object.isExtensible(obj)`**

(`false`是不可扩展，`true`是正常对象)

```
Object.isExtensible(obj);// false
```

## 密封的对象`seal`

**`Object.seal`**不能增删，能改

```
var obj = {a:1,b:2};
Object.seal(obj);
obj.c = 3;
console.log(obj.c); // undefined
delete obj.a;
console.log(obj); // {a:1,b:2} 删除失败
obj.b = 'hello'
console.log(obj); // {a:1,b: "hello"} 修改成功
```

检测是否密封**Object.isSealed(obj)**

(`false`是正常，`true`是已经密封了)

```
Object.isSealed(obj);// true
```

## 冻结的对象`freeze`

**`Object.freeze`**不能增删改

```
var obj = {a:1,b:2};
Object.freeze(obj);
obj.c = 3;
console.log(obj.c); // undefined
delete obj.a;
console.log(obj); // {a:1,b:2} 删除失败
obj.b = 'hello'
console.log(obj); // {a:1,b:2} 修改失败
```

检测是否冻结**Object.isFrozen(obj)**

(`false`是正常，`true`是已经冻结了)

```
Object.isFrozen(obj);// true
```

---

# 八、`Object.entries`：分割对象

```
const obj = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]
```

---


# 九、`Object.is()`：对象比较

比如之前判断一个值是否为`NaN`的话可能会用`Number.isNaN()`，现在用`Object.is(NaN, NaN)`也能达到一样的效果。

---

# 十、判断对象`{}`是否为空

```
if(Object.keys(obj).length === 0){...}
```

---

# 十一、对象 key 值构建

```
var a = 'name'
var b = {
    [a] : '小明'
}

结果：

b = {
    name: '小明'
}
```

---
