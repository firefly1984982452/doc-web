---
title: JavaScrip专业名词
date: 2020-08-03 10:19:32
categories: 
- program
---

# 一、transpiling

**转换+编译技术**

比如：`var obj = {foo}`相当于：`var obj = {foo : foo}`。
ES6的转换大部分是用`transpiling`。

---

# 二、字面量

`var obj = {}`，这个`{}`就是字面量。

---

# 三、字面值

**独立存在没有保存在变量中**

`var num = 2`，这个`2`就是字面值。

---

# 四、typeof

**询问的不是a的类型，而是a的当前值的类型**

**在JS中，只有值有类型，变量只是容器**。

`var a = 2`，`typeof`查询的是`2`。

---

# 五、IFEE（立即调用函数表达式）

`()()`

---

# 六、TDZ（临时死亡区）

**一个已经声明但没有初始化的变量**

```
console.log(b);
let b;
```

此时的b是undefined

---

# 七、垃圾回收（GC）

---

# 八、元编程

- 隐式类型转换：`12+''`

- 显式类型转换：`String(12)`

---

# 九、回调地狱

请求的回调有异步请求，该请求又有异步回调或请求，一直循环

---

# 十、尾调用

某个函数的最后一步是调用另一个函数

---

# 十一、RESTful / REST API / REST

通信、域名、API、版本、GET/POST等风格规范。

比如：

```
DELETE /orders/{orderId}

GET /cards/886333
```