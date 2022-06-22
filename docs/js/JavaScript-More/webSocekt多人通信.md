# webSocekt 多人通信

- [学习链接-基础通信](http://www.imooc.com/article/286001)
- [学习链接-多人通信(ws)](https://www.cnblogs.com/lihaohua/p/12410511.html)
- [学习链接-多人通信(nodejs-websocket)](https://zhuanlan.zhihu.com/p/64906193)

![效果](https://s1.ax1x.com/2022/03/17/q9sFJg.jpg)

## 【1】服务端

```js
var ws = require('nodejs-websocket');
console.log('开始建立连接...');

// 向所有连接的客户端广播
function boardcast(obj) {
  server.connections.forEach(function (conn) {
    conn.sendText(JSON.stringify(obj));
  });
}
var server = ws
  .createServer(function (conn) {
    conn.on('text', function (str) {
      var obj = JSON.parse(str);
      console.log('message: ' + str);
      boardcast({
        type: 2,
        msg: obj.msg,
        uid: obj.uid,
        nickname: obj.nickname,
      });
    });

    conn.on('close', function (code, reason) {
      console.log('关闭连接!');
    });

    conn.on('error', function (code, reason) {
      console.log('异常关闭！');
    });
  })
  .listen(8001);
console.log('webSocket建立完毕！');
```

## 【2】客户端

**客户端 1：**

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="content"></div>
    <input type="text" id="sendTxt" />
    <button id="sendBtn">发送</button>
    <script>
      var dom = document.getElementById("content");
      var ws = new WebSocket("ws://localhost:8001?userName=1");
      ws.onopen = function (e) {
        console.log("连接服务器成功");
      };
      ws.onclose = function (e) {
        console.log("服务器关闭");
      };
      ws.onerror = function () {
        console.log("连接出错");
      };
      // 接收服务器的消息
      ws.onmessage = function (e) {
        console.log(e);
        let message = JSON.parse(e.data);
        if (message.nickname !== 1) {
          dom.innerHTML +=
            "<p style='color: green;'>接收：" + message.msg + "</p>";
        }
      };

      document.getElementById("sendBtn").onclick = function () {
        var txt = document.getElementById("sendTxt").value;
        dom.innerHTML += "<p style='color: red;'>发送：" + txt + "</p>";
        ws.send(
          JSON.stringify({
            uid: 1,
            type: 2,
            nickname: 1,
            msg: txt,
          })
        );
      };
    </script>
  </body>
</html>
```

**客户端 2（将用户 1 改为用户 2）：**

```js
...

var ws = new WebSocket("ws://localhost:8001?userName=2");

...

ws.send(
    JSON.stringify({
    uid: 2,
    type: 2,
    nickname: 2,
    msg: txt,
    })
);
```

## 【3】运行服务端

```bash
$ node server.js
```

此时，一个运行在 chrome，一个运行在 firefox，就已经能实现通信。
