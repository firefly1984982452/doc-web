---
title: JavaScript之Number
date: 2020-06-05 11:19:32
categories:
- program
---

# 一、判断

1. `Number.isFinite`：是否为数字型
2. `Number.isInteger`：是否为整数
3. `Number.isNaN`：是否为`NaN`

## 【1】`Number.isFinite`：是否为数字型

之前判断一个值是否为数字类型都是用`typeof`，此处的 `isFinite`也有同样的效果

```
typeof 1.2 ; // 'number'
Number.isFinite(1.2) ; // true
```

## 【2】`Number.isInteger`：是否为整数


```
Number.isInteger(13)
```

## 【3】`Number.isNaN`：是否为`NaN`

```

console.log(Number.isNaN(NaN));       //true
```

◆ `window.isNaN`和`Number.isNaN`的区别

- `window.isNaN`：能否转换为数字
- `Number.isNaN`：是否`NaN`

```
//isNaN
console.log(isNaN(null));            //false
console.log(isNaN(true));            //false
console.log(isNaN(false));           //false
console.log(isNaN(0));               //false
console.log(isNaN(undefined));       //true
console.log(isNaN("AB"));            //true
console.log(isNaN({a: 1}));          //true
console.log(isNaN(NaN));             //true

//Number.isNaN
console.log(Number.isNaN(null));      //false
console.log(Number.isNaN(true));      //false
console.log(Number.isNaN(false));     //false
console.log(Number.isNaN(0));         //false
console.log(Number.isNaN(undefined)); //false
console.log(Number.isNaN("AB"));      //false
console.log(Number.isNaN({a: 1}));    //false
console.log(Number.isNaN(NaN));       //true
```

---

# 二、安全范围

整数的操作有一个安全范围，即 2 的 53 次方。`Math.pow(2, 53) - 1 = 9007199254740991`

1. `Number.MAX_SAFE_INTEGER`：最大安全范围

2. `Number.MIN_SAFE_INTEGER`：最小安全范围

3. `Number.isSafeInteger(12)`：是否在安全范围内

---

# 三、数值转换

1. `+'404'`
2. `Number()`
3. `parseInt()`
4. `parseFloat()`
5. 保留小数点后两位

◆ `Number()`和`parseInt()`的区别

```
Number('3e'); // NaN
parseInt('3e'); // 3
```

◆ `parseInt()`对其它进制进行取整转换

```
// 0X默认解读为16进制
parseInt('0x10'); // 16
```

◆ 保留小数点后两位

1. 四舍五入

```
parseFloat((a).toFixed(2));//toFixed只能针对数字类型才能使用
```

2. 非四舍五入

```
var b = parseFloat(price).toFixed(3);
this.all_price = b.substring(0,b.toString().length - 1);
```


---

# 四、toString：转为字符串/转换进制

◆ 基本用法：

1. 转为字符串

2. 转换进制

◆ `..`的用法：**转换 Number 类型**：

```
123..toString(2); // "1111011"
```

相当于：

```
(123).toString(2)
Number(123).toString(2)
```

---

# 五、toLocaleString：金钱格式化

```
Number(123456789).toLocaleString(); // '123,456,789'
```
---

# 六、进制转换（toString 和 parseInt）

十进制转二进制：

```
Number(99).toString(2); // "1100011"
```

二进制转十进制：

```
parseInt(101110,2); // 46
```

---

# 七、数字分隔符`_`

```
const largeNumber = 1_000_000_000;

console.log(largeNumber); // 1000000000"
```

---


# 八、BigInt：大整数

大整数会自动转为科学计数法，这时使用`BigInt`可以避免这种情况。

```
(BigInt(9007199254740991)*BigInt(9007199254740991)).toString();

// "81129638414606663681390495662081"
```

- 如果不使用 `toString()`，后面会自带 1 个 `n`，`10n==10`是`true`，`10n===10`是`false`；

- 不能再用`Number`转义，`Number`转义会自动转为科学计数法。
