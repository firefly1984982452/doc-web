---
title: node功能模块开发
date: 2021-07-12 13:25:07
categories:
- program
---

# 读取某文件夹下面所有的文件名，并写到一个 json 配置

读取.js

```
const fs = require("fs");
const dir = "./_posts";

const files = fs.readdirSync(dir);

// let arr = [];
// let filesList = files.filter((v) => v.includes("《"));
// for (file of filesList) {
//   arr.push(file);
// }
console.log(JSON.stringify(files));
```

运行这个`读取.js`并写入对应的 json 配置点：

```
var process = require("child_process");
var fs = require("fs");
process.exec("node ./readAllFile.js", function (err, out, stderr) {
  fs.writeFile("./text.json", out, function (err) {
    console.log(err ? "错误" : "正确");
  });
});
```
