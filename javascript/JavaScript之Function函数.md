---
title: JavaScript之Function函数
date: 2020-12-08 15:44:34
categories: 
- program
---

# 一、function和object

## 【1】function

```
var str = (()=> {
    var count = 0;
    function sum () { return ++count; };
    function reduce () {return --count;};
    return {
        sum,
        reduce
    }
})
```
此时的str是个function

简化下：

```
var str = (()=> {
    var count = 0;
    return {
        sum : ()=>{return ++count;},
        reduce : ()=>{return --count;}
    }
})();
str.sum(); // 1
```
此时的str是已经立即执行函数了，返回的是Object，是{sum:f,reduce:f}，注意，这里的str是获取不到count的，只有return的数据能获取到。

## 【2】Object

```
var obj = {
    count:0,
    sum : ()=>{return ++obj.count;},
    reduce : ()=>{return --obj.count;}
}
obj.sum(); // 1
```

这里的`obj`是`Object`，不同于`str`的是，它能获取到`count`，`object`里面的所有数据都能获取到。

## 【3】区别

- `Function`只有`return`的方法才能获取到（闭包）
- `Function`执行后返回的是对象


# 二、JavaScript函数调用及this参数

JS有4种方式调用函数

1. 作为一个函数(`function`)——`fn()`直接被调用
2. 作为一个方法(`methods`)——`obj.fn()`，关联在对象上调用，实现面向对象编程
3. 作为一个构造函数(`constructor`)——`new Fn()`，实例化一个新的对象
4. 通过`apply`或`call`方法调用

对应的this的指向：

- 函数调用：`window`或`undefined`
- 方法调用：obj对象
- 构造函数调用：实例化的对象
- `aplly`或`call`：第一个参数

详解：

## 【1】函数调用

```
function fn(){
    console.log(this);
}
fn(); // window
```

严格模式下：

```
function fn(){
    "use strict"
    console.log(this);
}
fn(); // undefined
```

## 【2】方法调用

```
var obj = {
    fn : function(){
        console.log(this);
    }
};
obj.fn() // 返回obj对象：{fn: ƒ}
```

## 【3】构造函数调用

```
function Cat(x,y){
    this.x = x;
    this.y = y;
    console.log(this);
}
var c = new Cat(1,2);

c // Cat{x:1,y:2} 指向c对象
```

es6写法

```
class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
        console.log(this);
    }
}
var p = new Point(1,2)

p // Point{x:1,y:2} 指向p对象
```

## 【4】aplly或call

```
var name = '张三';
var age = '24';
var obj = {
    name: this.name, // 此处的this指向window
    objAge: this.age, // 此处的this指向window
    fun: function(fm,t){
        console.log(this)
        console.log(this.name+'年龄 '+this.age + ' 来自'+fm+' 去往'+t); // 此处的fm和t就是要传入的参数
    }
}
var pd = {
    name: '彭丹',
    age:18
}
obj.fun.call(pd,'长沙','上海'); // 彭丹 年龄18 来自长沙 去往上海
obj.fun.apply(pd,['长沙','上海']); // 彭丹 年龄18 来自长沙 去往上海
obj.fun.bind(pd,'长沙','上海')(); // 彭丹 年龄18 来自长沙 去往上海
obj.fun.bind(pd,['长沙','上海'])(); // 彭丹 年龄18 来自长沙上海 去往undefined
```

`this`打印出来全都是`{name: "彭丹", age: 18}`，就是第一个参数。

---

# 三、`new Function`：函数构造器

与`构造函数`名字类似，但无太大关系。

普通生成

```
var p = new Function('x','y','return x+y');
p(2,3)
```

动态生成

```
createFunction(){
    let arr = Array.from(arguments);
    var params = arr.splice(0,arr.length-1);
    var body = arr[0];
    return new Function(params,body);
},
test(){
    var sum = this.createFunction('x','y','return x + y');
    var chen = this.createFunction('x','y','return x * y');
    console.log(sum(3,2)) // 5
    console.log(chen(3,2)) // 6
},
```

---

# 四、`generator`：函数生成器

```
function* test(){
    console.log(1);
    yield;
    console.log(2);
}
let item = test();
item.next();
setTimeout(()=>{
    item.next();
},3000)
1
隔3秒后
2
```

