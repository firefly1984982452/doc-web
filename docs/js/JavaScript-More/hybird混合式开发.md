# hybird 混合式开发

主要应用到：`jsBridge`

js 与 android 的通信

◆ android 代码：

java 发消息给 js： `webview.send()` java 收 js 的消息 `webview.registerHander('name',new Bridge(){})`

◆ JavaScript 代码：

js 发消息给 java `window.WebViewJavaScriptBridge.send()` js 收 java 的消息 `document.addEventListener('WebViewJavaScriptBridgeReady',()=>{})`

◆ 示例

```js
$('.company_color').click(function () {
  var u = navigator.userAgent;
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
  var isIos = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  var company_name = $(this).text();
  if (isAndroid) {
    var msg = window.mrlou.androidIs('2', company_name);
  } else if (isIos) {
    //iosPhone()这个方法，ios会自动监听，并接收我传过来的值，用msg接收它传给我的值
    broker('2', company_name);
  }
});
```
