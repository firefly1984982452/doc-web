#  JavaScript之RegExp正则表达式

- [学习链接-廖雪峰](https://www.liaoxuefeng.com/wiki/1022910821149312/1023021582119488)
- [学习链接-菜鸟教程](https://www.runoob.com/regexp/regexp-syntax.html)

---

## 一、新建

```js
var re1 = /ABC\-001/;
var re2 = new RegExp('ABC\\-001');

re1; // /ABC\-001/
re2; // /ABC\-001/
```

re2 转义，2 个`\\`会变成 1 个`\`。

`new RegExp('a','g')`等同于`/a/g`

---

## 二、使用

### 【1】test

```js
/\d/.test(3); // true
```

### 【2】exec

**使用**

```js
/\d/.exec('3e'); // ["3", index: 0, input: "3e", groups: undefined]
```

**非全局模式**

```js
var str = "1a1b1c";
var reg = /1./;
reg.exec(str)[0]; // "1a"
reg.exec(str)[0]; // "1a"
```

**全局模式**

```js
var str = "1a1b1c";
var reg = /1./g;
reg.exec(str)[0]; // "1a"
reg.exec(str)[0]; // "1b"
```

依次返回所有符合条件的值。

### 【3】match

**使用**

```js
'3e'.match(/\d/); // ["3", index: 0, input: "3e", groups: undefined]
```

**非全局模式**

```js
var str = "1a1b1c";
var reg = /1./;
str.match(reg); // ['1a']
str.match(reg); // ['1a']
```

**全局模式**

```js
'1a1b1c'.match(/1./g); // ["1a", "1b", "1c"]
```

一次返回所有符合条件的值。

---

## 三、模式

### 【1】`g`：全局

```js
'this is an\n ant good'.match(/an/g); // ["an", "an"]
```

### 【2】`i`：不区别大小写

```js
'catCat'.match(/cat/gi); // ["cat", "Cat"]
```

### 【3】`m`：多行模式

```js
'test\nbbs'.match(/^b/gm); // ['b]
```

### 【4】`s`：使圆点`.`能匹配换行符

```js
// 不使用时：
"google\ntest".match(/google./g); // null

// 使用时：
"google\ntest".match(/google./sg); // ["google↵"]
```

### 【5】`u`：unicode 编码

**【5.1】unicode 编码有多少字符**

大多数情况是 1 个字符：

```js
'\u0061' === 'a'; // true
```

但有些特殊字和表情文字就是多个字符：

```js
'\ud842\udfb7' === '𠮷'; // true
'\ud83e\udd2a\u0020' === "🤪 "; // true
```

**【5.2】使用**

1 个字符的话，使用`u`和不使用`u`没有区别：

```js
'人'.match(/^.$/g); // ["人"]
'人'.match(/^.$/gu); // ["人"]
```

多个字符需要使用`u`才能匹配到：

```js
'𠮷'.match(/^.$/g); // null
'𠮷'.match(/^.$/gu); // ["𠮷"]

'🤪'.match(/^.$/g); // null
'🤪'.match(/^.$/gu); // ["🤪"]
```

### 【6】`y`：粘连

`y`与`g`的区别：

```js
var s = 'aaa_aa_a';
var r1 = /a+/g;
var r2 = /a+/y;

r1.exec(s) // ["aaa"]
r2.exec(s) // ["aaa"]

r1.exec(s) // ["aa"]
r2.exec(s) // null
```

`y`要求必须从剩余字符串头部开始匹配：

```js
var s = 'aaa_aa_a';
var r = /a+_/y;

r.exec(s) // ["aaa_"]
r.exec(s) // ["aa_"]
```

`y`与`g`联用，返回所有符合条件的数据：

```js
'a1a2a3'.match(/a\d/gy) // ["a1", "a2", "a3"]
```

### 【7】属性

- `flags`：返回正则的所有修饰符
- `stricky`：返回是否用了`y`修饰符
- `unicode`：返回是否用了`u`修饰符

---

## 四、语法

### 【1】普通字符

|     字符      |                   描述                   |                             例子                             |
| :-----------: | :--------------------------------------: | :----------------------------------------------------------: |
| `[ABC]`中括号 |  [abc]表示匹配 a、b、c 中的任意一个字符  |        `'google'.match(/[oe]/g); // ["o", "o", "e"]`         |
|   `[^ABC]`    |     匹配**除了**`[...]`中的所有字符      |      `'google'.match(/[^aeiou]/g); // ["g", "g", "l"]`       |
|    `[A-Z]`    |               所有大写字母               |        `'ABC is first'.match(/[A-Z]+/g); // ["ABC"]`         |
|    `[a-z]`    |               所有小写字母               | `'abc is first'.match(/[a-z]+/g); // ["abc", "is", "first"]` |
|    `[0-9]`    |                 所有数字                 |     `'010-12345'.match(/[0-9]+/g); // ["010", "12345"]`      |
|      `.`      | 匹配除换行符（`\n\r`）以外的任何单个字符 |              `'hi'.match(/./g); // ["h", "i"]`               |

### 【2】非打印字符

| 字符 |                     描述                     |                         例子                          |
| :--: | :------------------------------------------: | :---------------------------------------------------: |
| `\s` |                 所有空白字符                 |           `'hi you'.match(/\s/g); // [" "]`           |
| `\S` |                所有非空白字符                | `'hi you'.match(/\S/g); // ["h", "i", "y", "o", "u"]` |
| `\w` | 匹配字母、数字、下划线，等价于`[a-zA-Z0-9_]` |       `'b_ 2'.match(/\w/g); // ["b", "_", "2"]`       |
| `\W` |                   除了上面                   |                           -                           |
| `\d` |                   所有数字                   |   `'010-12345'.match(/\d+/g); // ["010", "12345"]`    |
| `\D` |                   除了数字                   |                           -                           |
| `\f` |                  匹配换页符                  |                                                       |
| `\n` |                  匹配换行符                  |                                                       |
| `\r` |                  匹配回车符                  |                                                       |
| `\t` |                  匹配制表符                  |                                                       |
| `\v` |                匹配垂直制表符                |                        &nbsp;                         |

### 【3】特殊字符

|  字符  |                描述                 |                                    例子                                     |
| :----: | :---------------------------------: | :-------------------------------------------------------------------------: |
|  `$`   | 行的结束<br>`\d$`表示必须以数字结束 |                 `/c$/g.test('abc'); // true（是否以c结束）`                 |
|  `^`   | 行的开头<br>`\d$`表示必须以数字开头 |                 `/a$/g.test('abc'); // true（是否以a开头）`                 |
|  `()`  |                分组                 | `/^(\d{3})-(\d{3,8})$/.exec('010-12345'); // ['010-12345', '010', '12345']` |
|  `[]`  |                范围                 |                            `[0-9]`代表范围是数字                            |
|  `{}`  |              匹配长度               |                           `{0,9}`代表长度 0-9 个                            |
|  `*`   |        匹配出现 0 次或 N 次         |               `/a0*/g.test('a9'); // true(a开头，0出现了0次)`               |
|  `+`   |        匹配出现 1 次或 N 次         |              `/a0*/g.test('a9'); // false(a开头，0出现了0次)`               |
|  `?`   |        匹配出现 0 次或 1 次         |               `/a0?/g.test('a2'); // true(a开头，0出现了0次)`               |
|  `\`   |              特殊字符               |              匹配如`$`之类的字符<br>`/\$/g.test('$'); // true`              |
| &#124; |                 或                  |           匹配 A 或 B<br>`'abc'.match(/a竖线b/g); // ["a", "b"]`            |

### 【4】断言

|     名称     | 语法  |          释义           |    写法     |                        例子                         |
| :----------: | :---: | :---------------------: | :---------: | :-------------------------------------------------: |
|   先行断言   | `?=`  |  x 只有在 y 前面才匹配  | `/x(?=y)/`  |   只匹配**在**百分号之前的数字<br />`/\d+(?=%)/`    |
| 先行否定断言 | `?!`  | x 只有不在 y 前面才匹配 | `/x(?!y)/`  |  只匹配**不在**百分号之前的数字<br />`/\d+(?!=%)/`  |
|   后行断言   | `?<=` |  x 只有在 y 后面才匹配  | `/(?<=y)x/` |  只匹配**在**美元符号之后的数字<br />`/(?<=$)\d+/`  |
| 后行否定断言 | `?<!` | x 只有不在 y 后面才匹配 | `/(?<!y)x/` | 只匹配**不在**美元符号之后的数字<br />`/(?<!$)\d+/` |

---

## 五、更多用法

### 【1】切分字符串

不用时：

```js
'a b  c'.split(' '); // ["a", "b", "", "c"]
```

用正则：

```js
'a b  c'.split(/\s+/); // ["a", "b", "c"]
```

### 【2】分组

```js
var re = /^(\d{3})-(\d{3,8})$/;
re.exec('010-12345'); // ['010-12345', '010', '12345']
re.exec('010 12345'); // null
```

### 【3】`replace`：替换

```js
'8'.replace(/\d/, '*'); // '*'
```

### 【4】`$1`，`$2`组

`$1`，`$2`分别代表`()`里面的组

例子：

- 手机号脱敏

```js
"18912341234".replace(/(\d{3})\d*(\d{4})/,'$1****$2'); // "189****1234"
```

- 时间格式化

```js
'2019-08-28'.replace(/(\d{4})\-(\d{2})\-(\d{2})/,"$1年$2月$3日"); // "2019年08月28日"
```

### 【5】`search`：搜索

```js
'hello world 2'.search(/\d/); // 11【返回下标】
```

---

## 六、常用例子

### 【1】是否美元格式

```js
/^\$\d{1,3}(,\d{3})*(\.\d{2})/.test('$1,023,032.03'); // true
```

### 【2】是否邮箱

```js
/^([\w+\.])+@(\w+)([.]\w+)+$/.test('238fwe@qq.com'); // true
```

```js

/* 合法uri*/
export function validateURL(textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}

/* 小写字母*/
export function validateLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/* 大写字母*/
export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/* 大小写字母*/
export function validatAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

//邮箱
export function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
}
//手机号
export function validatePhone(str) {
    const re = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
    return re.test(str)
  }
//电话号码
export function validateTelephone(str) {
  const re = /\d{7}$/
  return re.test(str)
}

//密码验证8-20位字符，包含数字字母大小写
export function validatePwd(str) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,20}$/;
    return re.test(str)
}
//验证数字
export function validateNumber(str) {
    const re = /^[0-9]*$/
    return re.test(str)
}
//验证字母
export function validateLetter(str) {
    const re = /^[A-Za-z]+$/
    return re.test(str)
}
//验证汉字
export function validateWord(str) {
    const re = /[^\u0000-\u00FF]/
    return re.test(str)
}
```