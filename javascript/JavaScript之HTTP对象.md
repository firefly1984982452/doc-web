---
title: JavaScript之HTTP对象
date: 2021-01-07 15:44:34
categories: 
- program
---

# 一、协议

客户端和服务器之间传输数据的规范，全称是“超文本传输协议”。

---

# 二、协议请求

`GET`、`POST`和`OPTION`

---

# 三、GET和POST的区别

|区别|get|post|
|:--:|:--:|:--:|
|传参|`URL`、`cookie`|请求体`body`|
|参数长度|不同浏览器不同限制（限制`URL`而非参数）|无限制|
|安全性|参数保留在浏览记录中 <br> 通过地址栏收藏 <br> 直接在地址栏显示<br>主动缓存|-|
|TCP数据包|1个|2个|
|幂等性|✓|×|
|用法|获取数据(`list`接口)|将数据发给服务器(`delete`接口)|


- **TCP数据包：** `GET`请求会把`header`和`data`一并发出去，`POST`会先发`header`，服务器响应`100 continue`，浏览器再发送`data`，服务器响应`200 ok`。
- **幂等性：** 指对某一资源进行一次或多次请求都具有相同的副作用。例如搜索接口都是幂相等的操作，而增、删、改都不是幂等操作。

---

# 四、`HTTP`和`HTTPS`的区别

- `HTTPS` = `HTTP` + `SSL`证书

- `HTTP`是超文本传输协议，信息是明文传输；`HTTPS`则是具有安全性的`SSL`加密协议传输

- `HTTPS`比`HTTP`慢，因为`HTTPS`除了`TCP`握手的3个包，还要加上`SSL`握手的9个包。

---

# 五、跨域

[更全跨域方法链接](https://segmentfault.com/a/1190000011145364)

- `jsonp`跨域
- 跨域资源共享（`CORS`）
- `nodejs`中间件代理跨域
- `iframe`
- `document.domain`
- `postMessage`

## 【1】jsonp

把JS、CSS、IMG等静态资源分离到独立域名的服务器上。
**缺点：只能实现GET请求**。

### 【1.1】原生实现

```
<script>
  var script = document.createElement('script');
  script.type = 'text/javascript';

  // 传参一个回调函数名给后端，方便后端返回时执行这个在前端定义的回调函数
  script.src = 'http://www.domain2.com:8080/login?user=admin&callback=handleCallback';
  document.head.appendChild(script);

  // 回调执行函数
  function handleCallback(res) {
      alert(JSON.stringify(res));
  }
</script>
```

### 【1.2】jquery ajax

```
$.ajax({
    url: 'http://www.domain2.com:8080/login',
    type: 'get',
    dataType: 'jsonp',  // 请求方式为jsonp
    jsonpCallback: "handleCallback",    // 自定义回调函数名
    data: {}
});
```

### 【1.3】vue.js：

```
this.$http.jsonp('http://www.domain2.com:8080/login', {
    params: {},
    jsonp: 'handleCallback'
}).then((res) => {
    console.log(res); 
})
```
## 【2】CORS

普通跨域请求，只需要服务端设置`Access-Control-Allow-Origin`即可；若要携带`cookie`请求，前后端都要设置。

### 【2.1】原生ajax

```
// 前端设置是否带cookie
xhr.withCredentials = true;
```

### 【2.2】jQuery ajax

```
$.ajax({
    ...
   xhrFields: {
       withCredentials: true    // 前端设置是否带cookie
   },
   crossDomain: true,   // 会让请求头中包含跨域的额外信息，但不会含cookie
    ...
});
```

### 【2.3】vue框架 axios设置

```
axios.defaults.withCredentials = true
```
## 【3】Nodejs中间件代理跨域

如`proxy`中间件

## 【4】document.domain
该方式只能用于二级域名相同的情况下，比如 `a.test.com` 和 `b.test.com` 适用于该方式。

只需要给页面添加 `document.domain = 'test.com'` 表示二级域名都相同就可以实现跨域

## 【5】postMessage

这种方式通常用于获取嵌入页面中的第三方页面数据。一个页面发送消息，另一个页面判断来源并接收消息。

```
// 发送消息端
window.parent.postMessage('message', 'http://test.com')
// 接收消息端
var mc = new MessageChannel()
mc.addEventListener('message', event => {
  var origin = event.origin || event.originalEvent.origin
  if (origin === 'http://test.com') {
    console.log('验证通过')
  }
})
```

---

# 六、缓存

一般是在`html`中的`meta`标签上定义属性

方法一：

```
<meta http-equiv="Pragma" content="no-cache">
```

方法二：

```
<meta http-equiv="expires" content="mon, 18 apr 2016 14:30:00 GMT">
```

请求--判断max-age是否过期（没过期就直接在缓存数据库中得到数据）--过期后判断属性是否字段一致，再使用缓存。

---

# 七、session和cookie

`cookie`是在客户端，`session`是在服务端。
一般如果想跳过`cookie`的限制，就用`session`。
