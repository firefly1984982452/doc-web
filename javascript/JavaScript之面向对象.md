---
title: JavaScript之面向对象
date: 2020-12-07 15:44:34
categories:
- program
---

# 一、java 对象

```
// 创建类——“人”
public class People{
    int age;
}
// 创建类——“男人”
public class MenPeople extends People {

}
// 创建对象
MenPeople xm = new MenPeople();
xm.age = 15;
```

---

# 二、js 对象

`var xm = {age:15}`

[JS 中的类](https://www.jianshu.com/p/edf4d665d0df)

[JS 对象与 JAVA 对象的区别](https://www.cnblogs.com/yanyunpiaomaio/p/11025444.html)

---

# 三、JavaScript 面向对象

[参考](http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_encapsulation.html)

## 【1】封装

### 【1.1】生成对象

```
function Cat(name,color){
    this.name = name;
    this.color = color;
}
var cat1 = new Cat('大猫','黄色');
var cat2 = new Cat('小猫','黑色');

cat1; // Cat {name: "大猫", color: "黄色"} 指向Cat对象
cat2; // Cat {name: "小猫", color: "黑色"} 指向Cat对象
```

**相当于我们平时用的数组中的**：

```
var arr = new Array(3).fill(2);
var brr = new Array(5).fill(8);
arr; // (3) [2, 2, 2] 指向Array对象
brr; // (5) [8, 8, 8, 8, 8] 指向Array对象
```

只不过我们平时是直接用`var arr = [1,2]`的形式，和`new Array`是同一个意思。

## 【2】对象的构造函数

```
function Cat(name,color){
    this.name = name;
    this.color = color;
}
```

这段代码里面的`this.name = name`就是构造函数，可以直接用 es6 语法糖的形式写：

### 【2.1】es6 语法糖 class

```
class Cat{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}
var cat1 = new Cat('大猫','黄色');

cat1; // Cat {name: "大猫", color: "黄色"} 指向Cat对象
```

### 【2.2】constructor

所以，`cat1`实例含有`constructor`属性指向它(Cat)的`构造函数`。

```
cat1.constructor === Cat; // true
```

**相当于我们平时用的数组中的**：

```
[1,2].constructor === Array; // true
```

**其它**

```
[2].constructor(); // []
[2].constructor() === Array.prototype.constructor();
```

### 【2.3】instanceof

`JavaScript`还提供了`instanceof`运算符，验证`原型对象(Cat)`与`实例对象(cat1)`之间的关系。

```
cat1 instanceof Cat; // true
```

**相当于我们平时用的数组中的**：

```
[1,2] instanceof Array; // true
```

## 【3】原型对象添加方法

并不能说对象有原型，只能说对象的构造器有原型。

### 【3.1】直接添加造成的问题

```
function Cat(name,color){
    this.name = name;
    this.color = color;
    this.type = '猫科动物';
    this.eat = function(){
        console.log('吃鱼')
    }
}
var cat1 = new Cat('大猫','黄色');
var cat2 = new Cat('小猫','黑色');

cat1.eat == cat2.eat; // false

```

此时 eat 方法占用了太多内存，并且它们没有指向同一个引用地址，永远不会相等。参考数组的其实是相等的。

```
[1].push == [2].push; // true
```

### 【3.2】用 prototype 添加方法

```
function Cat(name,color){
    this.name = name;
    this.color = color;
}
Cat.prototype.type = '猫科动物';
Cat.prototype.eat = function(){
    console.log('吃鱼')
}
var cat1 = new Cat('大猫','黄色');
var cat2 = new Cat('小猫','黑色');

cat1.eat == cat2.eat; // true，它们是指向同一个内存地址下的方法
```

(就算不定义 Cat 的 prototype，Cat 也自带有 prototype 属性)

## 【4】prototype 模式的验证方法

### 【4.1】判断对象和实例的关系`isPrototypeOf`

```
Cat.prototype.isPrototypeOf(cat1); // true
```

**相当于我们平时用的数组中的**：

```
Array.prototype.isPrototypeOf([]); // true
```

### 【4.2】判断是本地属性还是 prototype 属性

```
cat1.hasOwnProperty('name'); // true
cat1.hasOwnProperty('type'); // false
```

### 【4.3】in

```
'name' in cat1; // true
```

**相当于我们平时用的数组中的**：

```
'push' in []; // true
```

### 【4.4】**proto**

一般情况下，实例对象的`__proto__`指向原型对象的`prototype`。 `prototype`被实例的`__proto__`指向 `__proto__`指向构造函数的`prototype` `__proto__`存在于实例和构造函数的原型对象，而不是实例与构造函数。如：

```
cat1.__proto__ === Cat.prototype; // true
```

**相当于我们平时用的数组中的**：

```
[].__proto__ === Array.prototype; // true
```

**其它情况**

```
function fn(){};
fn.__proto__ === Function.prototype; // true
```

把函数当作对象时，生成它的函数就是`Function`原型对象。

1. `Function`原型对象也同样适用此规则：

```
Function.__proto__ === Function.prototype; // true
Function.prototype.__proto__ == Object.prototype; // true 为了不指向自身的Function.prototype造成循环引用
```

2. `Object`函数也是一个`Function`函数：

```
Object.__proto__ === Function.prototype; // true
Object.prototype.__proto__ === null ; // true 为了不指向自身的Object.prototype造成循环引用
```

`Object.prototype.__proto__==null`是所有函数的终点

---

# 四、DOM 也有原型链

```
<html>
  <head>
    <title>dom原型测试</title>
  </head>
  <body>
    <div id="test">test dom</div>
    <script type="text/javascript">
      HTMLElement.prototype.hello = function(){
        console.log(this);
      }
      var div = document.getElementById('test');
      div.hello();
    </script>
  </body>
</html>
```

---

# 五、Object.create 实现类继承和克隆对象

## Object.create 实现类继承

### 先看不用 Object.create 来实现继承

```
function Pd(){
}
Pd.prototype = Array.prototype;
Pd.prototype.constructor = Pd;
var pdd = new Pd();
pdd.push(3);
console.log(pdd); // Pd [3] __proto__:Array(0)直接就是真正的数组的__proto__
```

效果：

![image.png](https://wx2.sinaimg.cn/mw690/0069qZtTgy1gho48t4y6vj30970i275q.jpg)

此时打印`Array.prototype.constructor`会发现变成了`undefined`，已经改动了原生的`Array`.

### 用 Object.create 实现继承

```
function Pd(){
}
Pd.prototype = Object.create(Array.prototype);
Pd.prototype.constructor = Pd;
var pdd = new Pd();
pdd.push(3);
console.log(pdd); // Pd [3] __proto__:Array[__proto__:Array(0)]就是__proto__里面包含真正的数组的__proto__
```

效果：

![image.png](https://wx1.sinaimg.cn/mw690/0069qZtTgy1gho49dgk5zj30d30irjt4.jpg)

### 区别

**写法**：

`Pd.prototype = Array.prototype;`和`Pd.prototype = Object.create(Array.prototype);`

**返回值**：

- `Pd [3] __proto__:Array(0)`直接就是真正的数组的`__proto__`;
- `Pd [3] __proto__:Array[__proto__:Array(0)]`就是`__proto__`里面包含真正的数组的`__proto__`。

### 用 Object.create 实现继承自己的类并带参数

```
function Cat(name,color){
    this.name = name;
    this.color = color;
}
var cat1 = new Cat('大猫','黄色');

function Pd(name,color){
    Cat.call(this,name,color);
}
Pd.prototype = Object.create(Cat.prototype);
Pd.prototype.constructor = Pd;
var pdd = new Pd('小猫','白色');

console.log(cat1,pdd); // Cat {name: "大猫", color: "黄色"} Pd {name: "小猫", color: "白色"}
```

### 用原生写法实现继承自己的类并带参数

```
function Cat(name,color){
    this.name = name;
    this.color = color;
}
var cat1 = new Cat('大猫','黄色');

function Pd(name,color){
  Cat.call(this,name,color);
}
Pd.prototype = Cat.prototype;
Pd.prototype.constructor = Pd;
var pdd = new Pd('小猫','白色');
console.log(cat1,pdd); // Cat {name: "大猫", color: "黄色"} Pd {name: "小猫", color: "白色"}
```

## 用 Object.create 克隆对象

```
var obj1 = {a:2,b:{name:'小明'}};
var obj2 = Object.create(obj1);
console.log(obj2); // {}
obj2.a = 3;
obj2.b.name = '小红';
console.log(obj1); // {a:2,b:{name:'小红'}};
```

结论：obj1 对象中的一级对象 a:2 并没有受影响，但二级对象 b 已经受影响。所以**Object.create 克隆的对象也只能实现一级对象的深拷贝**。

obj2 的具体值：

![image.png](https://wx1.sinaimg.cn/mw690/0069qZtTgy1gho49w7kobj306102wjra.jpg)

---

# 六、extends 继承

```
class Cat{
    constructor(){
        console.log('cat');
    }
}
class Child extends Cat{
};
var cat = new Cat();
var child = new Child();
```

继承所有参数：

```
class Cat{
    constructor(name){
        this.name = name;
    }
}
class Child extends Cat{
    constructor(name){
        super(name);
    }
};
var cat = new Cat('1');
var child = new Child('2');
console.log(cat,child); // Cat {name: "1"} Child {name: "2"}
```

---

# 七、`new.target`方法判断是否父类

```
class Cat{
    constructor(){
        console.log(new.target);
        if (new.target === Cat) {
            console.log('父类');
        } else {
            console.log('子类');
        }
    }
}
class Child extends Cat{
    constructor(){
        super();
    }
};
var cat = new Cat();
var child = new Child();
```

---

# 八、new Array()和[]比较

## 性能

```
var startTime=new Date().getTime();
var a2 = new Object();
for(var i = 0;i<10000000;i++){
    a2[i] = [];
}
var endTime=new Date().getTime();
console.log('[]输出耗时:',endTime-startTime);

var startTime2=new Date().getTime();
var a = new Object();
for(var i = 0;i<10000000;i++){
    a[i] = new Array();
}
var endTime2=new Date().getTime();
console.log('new Array()输出耗时:',endTime2-startTime2);
```

结果：

```
[]输出耗时: 304
new Array()输出耗时: 600
```

每次结果不同，但大约都是`new Array()`是`[]`的两倍，时间越大，差距越大。

(最好用时间差相减来计算时间，用`console.time`可能会有先后的问题导致不准确。)

## 写法

`[]`是字面量，JSON 格式的语法是引擎直接解释的； `new Array()`需要调用`Array`的构造器。

---

# 九、prototype 和 hasOwnProperty

```
Array.prototype.arr = function(){console.log('print arr')};
var a = [1,2,3];
a.arr(); // 'print arr'
Array.prototype.hasOwnProperty('arr'); // true
a.hasOwnProperty('arr'); // false
Array.hasOwnProperty('arr'); // false
```

# 十获取对象所有属性

- Object.keys

- Reflect.ownKeys

- Object.getOwnPropertyNames

```
var obj = {
	a: 1,
	b: 2
}
Object.defineProperty(obj, 'method', {
	value: function () {
	    alert("Non enumerable property")
	},
	enumerable: false
})

console.log(Object.keys(obj))
// ["a", "b"]
console.log(Reflect.ownKeys(obj))
// ["a", "b", "method"]
console.log(Object.getOwnPropertyNames(obj))
// ["a", "b", "method"]
```
