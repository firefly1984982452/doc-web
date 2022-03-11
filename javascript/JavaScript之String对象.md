---
title: JavaScript之String对象
date: 2020-06-05 13:40:32
categories:
  - program
---

# 一、查询过滤检索

1. `charAt`：返回指定位置的字符
2. `charCodeAt`：返回 `uniccode/accsic` 编码
3. `fromCharCode`：将 `Unicode` 编码转为一个字符
4. `indexOf`：返回字符首次出现的位置
5. `lastIndexOf`：返回字符出现的倒数位置
6. `includes`：判断字符串中是否包含某字符串
7. `search`：返回字符首次出现的位置【检索和与正则】
8. `match`：返回匹配规则首次出现的位置【检索和与正则】
9. `matchAll`：返回匹配规则所有出现的位置【检索和与正则】

## 【1】`charAt`：返回指定位置的字符

```
'ewfwef'.charAt(5); // f
'ewfwef'[5]; // f
```

区别：

```
'ewfwef'.charAt(53); // ""
'ewfwef'[59]; // undefined
```

## 【2】`charCodeAt`：返回 `uniccode/accsic` 编码

```
'a'.charCodeAt(0); // 97
```

## 【3】`fromCharCode`：将 `Unicode` 编码转为一个字符

```
String.fromCharCode(65); // A
```

## 【4】`indexOf`：返回字符首次出现的位置

```
'abcc'.indexOf('c'); // 2
```

◆ `indexOf` 有可选的参数（即开始查询的位置）

```
'ab ab ab'.indexOf('a',1); // 3
```

## 【5】`lastIndexOf`：返回字符出现的倒数位置

上同，倒数。

## 【6】`includes`：判断字符串中是否包含某字符串

```
'abcc'.includes('c'); // true
```

## 【7】`search`：返回字符首次出现的位置【检索和与正则】

- 检索字符串

```
'hello world'.search('wor'); // 6
```

- 匹配正则

```
'hello world 2'.search(/\d/); // 11【返回下标】
```

## 【8】`match`：返回匹配规则首次出现的位置【检索和与正则】

- 检索字符串

```
'hello world'.match('world'); // ["world", index: 6, input: "hello world", groups: undefined]
```

- 匹配正则

```
"1 plus 2 equal 3".match(/\d/g); // ["1", "2", "3"]
```

## 【9】`matchAll`：返回匹配规则所有出现的位置【检索和与正则】

效果上同，返回所有符合条件的值的 `Iterator` 遍历器。

---

# 二、截取和分割

1. `split`：分割为数组
2. `substr`：截取（位置，个数）
3. `substring`：截取（开始位置，结束位置）
4. `slice`：截取（开始位置，结束位置）
5. `substr`、`substring`、`slice` 的区别

## 【1】`split`：分割为数组

```
'abcd'.split(''); // ["a", "b", "c", "d"]
```

## 【2】`substr`：截取（位置，个数）

```
'abcdefg'.substr(2,3); // "cde"
```

## 【3】`substring`：截取（开始位置，结束位置）

```
'abcdefg'.substring(2,3); // "c"
'abcdefg'.substring(2); // "cdefg"
'abcdefg'.substring(2,-9); // "ab"
```

## 【4】`slice`：截取（开始位置，结束位置）

```
'abcdefg'.slice(2,3); // "c"
'abcdefg'.slice(2); // "cdefg"
'abcdefg'.slice(2,-9); // ""
```

# 三、合并字符串

## 【1】concat()

```
'w'.concat('e'); // 'we'
```

## 【2】加号

```
'a'+'b'; // 'ab'
```

---

# 四、raw：模板字符串

```
String.raw`${2+3}`; // 5
```

```
var s = String.raw`hello\n`;

s === "hello\\n"; // true
```

---

# 五、repeat：重复并返回

```
'e'.repeat(30); // "eeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
```

# 六、replace 和 replaceAll：替换

```
'12333345'.replace('3','0'); // "12033345"
'12333345'.replaceAll('3','0'); // "12000045"
```

正则例子

## 【1】 多维数组扁平化为单维数组

```
const arr = [1, [1,2], [1,2,3]];
JSON.stringify(arr).replace(/(\[|\])/g,''); // "1,1,2,1,2,3"
```

## 【2】 时间格式化

```
'yyyy-mm'.replace(/([a-z])/ig,($1)=>{return 0}); // "0000-00"
```

## 【3】 字符串转换为驼峰格式

```
var sName = 'font-size'
```

或

```
var sName = '-webkit-background-composite'

return sName.replace(/-[a-zA-Z]{1}/g, ($1, $2) => {
  return $2 === 0 ? $1[1] : $1.toUpperCase()[1]
})
```

## 【4】 颜色字符串 rgb 转换为 hex 方法

`rgb(255, 255, 255)` 转为 `#ffffff`

```
function rgb2hex(sRGB) {
    var reg = /^(rgb|RGB)/
    if (reg.test(sRGB)) {
      let arr = sRGB.replace(/(\(|\)|rgb|RGB| )*/g, '').split(',')
      let str = arr
        .map(v => {
          return ('0'+(Number(v).toString(16))).slice(-2)
        })
        .join('')
      return '#'+str
    } else {
      return sRGB
    }
}

rgb2hex('rgb(255, 255, 255)'); // '#ffffff'
```

---

# 七、大小写更换

## 【1】toLowerCase()

把字符串变为小写

```
'B'.toLowerCase(); // "b"
```

## 【2】toUpperCase()

把字符串变为大写

```
'a'.toUpperCase(); // "A"
```

---

# 八、trim：去掉两边的空字符串

```
' we '.trim(); // "we"
```

# 九、padStart() 和 padEnd() 进行补位

用法：

```
'x'.padStart(10,'ab'); // "ababababax"
```

示例：

```
'abc'.padStart(10, '0123456789'); // '0123456abc'
'1'.padStart(10, '0') // "0000000001"
'09-12'.padStart(10, 'YYYY-MM-DD') // "YYYY-09-12"
```

# 十、toLocaleString

## 【1】用法

```
number.toLocaleString([locales [, options]])
```

## 【2】不同类型

- string
- array
- date

```
number.toLocaleString([locales [, options]])
array.toLocaleString([locales [, options]])
date.toLocaleString([locales [, options]])
```

### 【2.1】array

array 和 number 类同

```
Number(1).toLocaleString('zh',{style:'currency',currency:'cny'}); // "¥1.00"
[1,2,3].toLocaleString('zh',{style:'currency',currency:'cny'}); // "¥1.00,¥2.00,¥3.00"
```

### 【2.2】date

```
new Date().toLocaleString(); // "2021/7/20下午2:39:35"
```

#### 【2.2.1】`locales`

不同时区

```
new Date().toLocaleString(); // "2021/7/20下午2:44:40"
new Date().toLocaleString('zh'); // "2021/7/20下午2:44:40"
new Date().toLocaleString('en-US'); // "7/20/2021, 2:44:14 PM"
new Date().toLocaleString('en-gb'); // "20/07/2021, 14:44:23"
new Date().toLocaleString('ko-kr'); // "2021. 7. 20. 오후 2:44:33"
```

#### 【2.2.2】`options`

- hour12 是否使用 12 小时的时间（而不是 24 小时的时间）。true\false; 默认值是语言环境相关的。
- timeZone 要使用的时区
- formatMatcher 要使用的格式匹配算法

```
var date = new Date()
date.toLocaleString(); // "2021/7/20下午2:51:24"
date.toLocaleString('zh',{ hour12: false }); // "2021/7/20 14:51:24"
date.toLocaleString('zh',{ timeZone: 'GMT' }); // "2021/7/20上午6:51:24"（格林威治标准时间）
date.toLocaleString('zh',{ timeZoneName: 'short' }); // "2021/7/20GMT+8 下午2:51:24"
date.toLocaleString('zh',{ timeZoneName: 'long' }); // "2021/7/20中国标准时间 下午2:51:24"
```

## 【3】不同参数

### 【3.1】`locales`

- `zh-Hans-CN`：中国（简写`zh`）
- `ja-Jp`：日本（简写`jp`）
- `zh-u-nu-hanidec`：中文十进制数字

国际简写

```
var num = 1234567890;
num.toLocaleString(); // '1,234,567,890'
num.toLocaleString('en-US'); // 效果相同 '1,234,567,890'
num.toLocaleString('zh'); // 效果相同 '1,234,567,890'
num.toLocaleString('jp'); // 效果相同 '1,234,567,890'
```

`zh-u-nu-hanidec`：中文十进制数字

```
var num = 12345
num.toLocaleString('zh-u-nu-hanidec'); // "一二,三四五"
num.toLocaleString('zh-u-nu-hanidec',{useGrouping: false}); // "一二三四五"
```

### 【3.2】`options`

1. style
2. currency
3. currencyDisplay
4. useGrouping
5. minimumIntegerDigits
6. minimumFractionDigits
7. maximumFractionDigits
8. minimumSignificantDigits
9. maximumSignificantDigits

#### 【3.2.1】style 格式化时使用的样式

- decimal 表示纯数字格式 为默认值
- currency 表示货币格式
- percent 表示百分比格式

```
Number(1345.2345).toLocaleString(); // "1,345.235"
Number(1345.2345).toLocaleString('zh',{style:'percent'}); // "134,523%"
Number(1345.2345).toLocaleString('zh',{style:'currency' , currency:'CNY' }) // "¥1,345.23"
```

#### 【3.2.2】currency 在货币格式化中使用的货币符号（如果 style 是“currency”,必须提供货币属性）

- USD 美元
- EUR 欧元
- CNY 人民币

```
Number(12345678).toLocaleString('zh',{style:'currency' , currency:'CNY' }); // "¥12,345,678.00"
Number(12345678).toLocaleString('zh',{style:'currency' , currency:'JPY' }); // "JP¥12,345,678"
Number(12345678).toLocaleString('zh',{style:'currency' , currency:'USD' }); // "US$12,345,678.00"
Number(12345678).toLocaleString('zh',{style:'currency' , currency:'EUR' }); // "€12,345,678.00"
```

#### 【3.2.3】currencyDisplay 货币格式化

- symbol 使用本地化的货币符号例如 € （默认）
- code 使用国际标准组织货币代码
- name 使用本地化的货币名称

```
Number(1).toLocaleString('zh',{style:'currency' , currency:'USD' }); // "US$1.00
Number(1).toLocaleString('zh',{style:'currency' , currency:'USD' ,currencyDisplay: 'code'}); // "USD 1.00"
Number(1).toLocaleString('zh',{style:'currency' , currency:'USD' ,currencyDisplay: 'name'}); // "1.00美元"
```

#### 【3.2.4】useGrouping 是否使用分组分隔符，默认：`true`

```
Number(1234.56).toLocaleString('zh'); // "1,234.56"
Number(1234.56).toLocaleString('zh', { useGrouping: false }); // "1234.56"
```

#### 【3.2.5】minimumIntegerDigits：指定整数最少位数

```
Number(123.456).toLocaleString('zh'); // "123.456"
Number(123.456).toLocaleString('zh',{minimumIntegerDigits: 5}); // "00,123.456"
```

#### 【3.2.6】minimumFractionDigits：指定小数点后最少位数

```
Number(123.456).toLocaleString('zh'); // "123.456"
Number(123.456).toLocaleString('zh',{minimumFractionDigits: 5}); // "123.45600"
```

#### 【3.2.7】maximumFractionDigits：小数位数的最大数目（四舍五入）

```
Number(123.456).toLocaleString('zh'); // "123.456"
Number(123.456).toLocaleString('zh',{maximumFractionDigits: 2}); // "123.46"
```

#### 【3.2.8】minimumSignificantDigits：使用的有效数字的最小数目

```
Number(123.456).toLocaleString('zh'); // "123.456"
Number(123.456).toLocaleString('zh',{minimumSignificantDigits: 10}); // "123.4560000"
```

#### 【3.2.9】maximumSignificantDigits：使用的有效数字的最大数量

```
Number(123.456).toLocaleString('zh'); // "123.456"
Number(123.456).toLocaleString('zh',{maximumSignificantDigits: 2}); // "120"
```

---

# 其它技巧

## 单行写一个评级组件

```
"★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate); //定义一个变量 rate 是 1 到 5 的值
```

## 利用`slice`时间格式化补 0

```
("0" + t.getHours()).slice(-2); // '01'
```

## 把字符串变为数组最快的方法

```
'abc'.split(' '); // ['abc']
```
