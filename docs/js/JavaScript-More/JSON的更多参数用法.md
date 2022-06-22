# JSON 的更多参数用法

## 【1】JSON.stringify

新建一个普通对象

```js
var settings = {
  username: 'lydiahallie',
  level: 19,
  health: 90,
};
```

◆ 普通用法

```js
var data = JSON.stringify(settings); // "{"username":"lydiahallie","level":19,"health":90}"
```

◆ 参数 2：参数过滤

```js
var data = JSON.stringify(settings, ['level', 'health']); // "{"level":19,"health":90}"
```

◆ 参数 3：参数排版

```js
var data = JSON.stringify(settings, undefined, 2);
```

打印出来：

```
"{
  "username": "lydiahallie",
  "level": 19,
  "health": 90
}"
```

不再是一行，而是有了排版的字符串。

## 【2】JSON.parse

## 【3】参数 1：普通用法

```js
JSON.parse('{"p": 5}'); // {p: 5}
```

## 【4】参数 2：过滤函数

```js
JSON.parse('{"p": 5}', (key, value) => {
  console.log(key, value);
  return value * 20;
});
```

返回：

```
p 5
{p: 100}
```
