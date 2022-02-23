---
title: JavaScript控制对象
date: 2020-09-18 18:50:17
categories: 
- program
---

# 一、使用getter与setter控制属性访问

```
function Ninja() {
    let skillLevel;
    this.getSkillLevel = () => {
        console.log('get')
        return skillLevel;
    }
    this.setSkillLevel = value => {
        console.log('set');
        skillLevel = value;
    }
}
const nijia = new Ninja();
nijia.setSkillLevel(100)
console.log(nijia, nijia.getSkillLevel() == 100);
```

## 【1】定义getter与setter

在`JavaScript`中，可以通过两种方式定义`getter`和`setter`：

1. 通过对象字面量定义，或在`ES6`的`class`中定义。
2. 通过使用内置的`Object.defineProperty`方法。

```
const ninjaCollection = {
    ninjas: ['a','b','c'],
    get firstNinja(){
        console.log('get');
        return this.ninjas[0];
    },
    set firstNinja(value){
        console.log('set');
        this.ninjas[0] = value;
    }
}
console.log(ninjaCollection);
```

### 【1.1在ES6的class中使用getter和setter

```
class NinjoCollection {
    constructor(){
        this.ninjas = ['a','b','c'];
    }
    get firstNinja() {
        console.log('get');
        return this.ninjas[0];
    }
    set firstNinja(value) {
        console.log('set');
        this.ninjas[0] = value;
    }
}
const ninjiaoCollectionClass = new NinjoCollection();
console.log(ninjiaoCollectionClass.firstNinja === 'a');
ninjiaoCollectionClass.firstNinja = 'hello';
console.log(ninjiaoCollectionClass.firstNinja);
```

### 【1.2】Object.defineProperty

控制私有变量，下例中`_skillLevel`是私有的，`skillLevel`是公有的。
```
function Ninja() {
    let _skillLevel = 0;
    Object.defineProperty(this, 'skillLevel', {
        get: () => {
            console.log('get');
            return _skillLevel;
        },
        set: value => {
            console.log('set');
            _skillLevel = value;
        }
    })
}
const ninja = new Ninja();

console.log(typeof ninja._skillLevel);
```

## 【2】使用getter与setter检验属性

```
function Ninja() {
    let _skillLevel = 0;
    Object.defineProperty(this, 'skillLevel', {
        get: () => {
            console.log('get');
            return _skillLevel;
        },
        set: value => {
            console.log('set');
            if(!Number.isInteger(value)){
                throw new TypeError('必须为整数!')
            }
            _skillLevel = value;
        }
    })
}

try {
    const ninja = new Ninja();
    ninja.skillLevel = 23.3;
} catch (error) {
    console.log(error)
}
```

## 【3】使用getter与setter定义如何计算属性值

```
const nameObj = {
    name: 'a',
    clan: 'b',
    get fullTitle(){
        return this.name + '-' + this.clan;
    },
    set fullTitle(value){
        const segments = value.split(" ");
        this.name = segments[0];
        this.clan = segments[1];
    }
};
console.log(nameObj.name == 'a');
```


# 二、使用代理控制`Proxy`访问

通过`Proxy`构造器创建代理

```
const emperor = {name: 'pdd'};
const representative = new Proxy(emperor, {
    get : (target, key) => {
        console.log('get:' + key);
        return key in target ? target[key] : 'error!';
    },
    set: (target, key, value) => {
        console.log('set:' + key);
        target[key] = value;
    }
});
console.log(emperor.name === 'pdd',representative.name === 'pdd'); // true true
console.log(emperor.name1,representative.name1); // undefined "error!"
```

## 【1】使用代理记录日志

上同

## 【2】使用代理检测性能-apply

**代理的作用有利于原函数的复用**

假设不用代理：

判断一个数是否大于2
```
function isPrime(number){
    if(number < 2) {
        return false;
    } else {
        return true;
    }
}
```
写完后如果要检测该函数的性能，执行了多久，这时就要修改代码，加上`console.time`和`console.timeEnd`，**不利于代码的复用**，如下：

```
function isPrime(number){
    console.time('isPrime');
    if(number < 2) {
        console.timeEnd('isPrime');
        return false;
    } else {
        console.timeEnd('isPrime');
        return true;
    }
}
```

或

```
function isPrime(number){
    if(number < 2) {
        return false;
    } else {
        return true;
    }
}
// 正常打印
function test1(num){
    console.time('test')
    const result = isPrime(num);
    console.timeEnd('test');
    return result;
}
// 隔2秒后再获取时间
function test2(num){
    console.time('test')
    setTimeout(() => {
        const result = isPrime(num);
        console.timeEnd('test');
        return result;
    }, 2000);
}
test1(23); // test: 0.00390625 ms
test2(23); // test: 2001.0390625 ms
```

**用代理解决**：

```
function isPrime(number){
    if(number < 2) {
        return false;
    } else {
        return true;
    }
}
// 正常打印
isPrime1 = new Proxy(isPrime, {
    apply: (target, thisArg, args) => {
        console.time('isPrime');
        const result = target.apply(thisArg, args);
        console.timeEnd('isPrime');
        return result;
    }
})
// 隔2秒后再获取时间
isPrime2 = new Proxy(isPrime, {
    apply: (target, thisArg, args) => {
        console.time('isPrime');
        setTimeout(() => {
            const result = target.apply(thisArg, args);
            console.timeEnd('isPrime');
            return result;
        }, 2000); 
    }
})
isPrime1(23); // isPrime: 0.00390625 ms
isPrime2(23); // isPrime: 2001.0390625 ms
```

## 【3】使用代理计算值-apply

**apply方法拦截函数的调用、call和apply操作**。

```
function sum (a,b) { return a+b };
var proxy = new Proxy(sum, {
    apply(target, thisArg, args) {
        // return Reflect.apply(...arguments) * 2;
        // 或
        return target.apply(thisArg, args) * 2;
    }
})
// 以下调用全都是*2后的结果
proxy(1,2); // 6
proxy.call(null, 4,5); // 18
proxy.apply(null, [29,239]); // 536
Reflect.apply(proxy, null, [32,10]); // 84
```

## 【4】apply实现负数组

```
function createNegativeArrayProxy(array) {
    return new Proxy(array, {
        get: (target, index) => {
            index = index < 0 ? target.length + Number(index) : index;
            return target[index];
        }
    })
}
var arr = createNegativeArrayProxy(['a', 'b', 'c', 'd']);
console.log(arr[1],arr[-2]); // b c
```

普通方法实现暂时想不到，下标也无法获取。

## 【5】proxy总结

- 代理可以代理`对象`、`函数`、`数组`；

- 代理的过程中，可以在`get`和`set`中进行拦截和设置新的参数方法；

- 代理的过程中，可以通过`apply`绑定拦截原来的函数。

[JS Proxy 的优势以及使用场景](https://www.suibianlu.com/c/p/14220.html)


# 三、总结

1. 使用访问器方法（`getter`和`setter`）可以控制对象
- 通过内容的`Object.definedProperty`方法访问属性
- 通过对象字面量中使用`get`和`set`语法
- 通过`ES6`的`class`语法
<br />
- 读取对象时会隐式调用`get`，写入对象时会隐式调用`set`
- `get`可以定义计算属性，`set`可以实现数据验证与日志记录


2. 使用代理（`proxy`）可以控制对象
- 代理可以定义对象交互时的行为
- 所有的交互行为必须通过代理


3. 使用代理（`proxy`）可以实现以下内容
- 日志记录
- 性能测量
- 数据校验
- 数组负索引


4. 使用代理（`proxy`）效率不高，需进行性能测验