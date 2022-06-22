# Blob

## 实现下载文件

- [参考链接](https://zhuanlan.zhihu.com/p/97768916)

```html
<a id="download" @click="download">下载</a>
```

```js
download(){
    var blob = new Blob(['hello world']);
    var url = window.URL.createObjectURL(blob);
    var a = document.getElementById('download');
    a.download = 'helloworld.txt';
    a.href = url;
},
```
