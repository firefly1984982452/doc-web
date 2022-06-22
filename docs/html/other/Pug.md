# Pug

- [官方文档](https://www.pugjs.cn/api/getting-started.html)
- [入门](https://www.cnblogs.com/xiaohuochai/p/7222227.html)

# 一、下载

```bash
npm install pug-cli -g
```

# 二、编译

- 1.基础编译

```bash
pug index.pug
```

- 2.自动编译（默认为压缩版 HTML）

```bash
pug index.pug -w
```

- 3.编译为标准版 HTML

```bash
pug index.pug -P
```

- 4.路径设置

将 index.html 将输入到 a 目录下面

```bash
pug index.pug -o a
```

- 5.重命名

!> 这里的路径必须提前建立好，否则不会成功

```bash
pug <xx.pug> <xx/xx.html>
```

- 6.全部命令

编译整个文件夹里面所有 pug 文件到 html 文件夹，并且所有文件是标准版 HTML

```bash
pug -w ./ -o ./html -P
```

# 三、结构语法

```pug
doctype html
html
  head
  body
    main
    ul.content
      -for(var i = 0;  i < 2; i ++)
        li=i+'个'

      - var list = ["Tres","Cuatro", "Cinco", "Seis"]
        each item,index in list
          li=`${index}：${item}`

      - var values = []
      each val in values
        li = val
      else
        li 没有内容

    .other
      img/
      a(href="baidu.com"): img
    |很多很多文字
    p 行内文字
    p
      |多个
    p
      |多
      |多
    input(
      type='checkbox'
      name='agreement'
      checked
    )
```
