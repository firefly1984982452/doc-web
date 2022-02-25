#  用node安装一些有用的插件

---


# 虚拟服务器

我最近使用vue写项目，打包之后只能在服务器上预览效果，而我又没有服务器，此时就可以用这个工具了。

```bash
npm install live-server -g
```

然后到需要的目录下输入命令行

```bash
live-server
```


# 跨域代理

像我们一般做测试用一些外部的接口数据，比如淘宝开放的一些优惠券接口，可是如果我们用浏览器访问是会跨域的，这时使用我们的代理，可以简单的先看到效果。

```bash
proxy
```

（使用axios可以更简单的处理跨域问题）

# 将md文件直接在浏览器上预览效果

```bash
npm install -g i5ting_toc
```

```bash
i5ting_toc -f 文件名 -o
```

浏览器会自动打开！ (文件夹中会多一个preview的文件夹，生成html就在里面)

# 更新node

```bash
npm install node
```

win10
