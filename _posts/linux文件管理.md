---
title: linux文件管理
date: 2021-09-03 16:15:18
categories:
  - program
---

# 链接

[菜鸟教程](https://www.runoob.com/linux/linux-file-content-manage.html)

# 快捷键

<kbd>ctrl</kbd> + <kbd>l</kbd> 清屏

一次 <kbd>tab</kbd> 补全

两次 <kbd>tab</kbd> 提示

# 其它

- `clear`：清屏

- `tar/zip`：打包

将 index.js 文件[打包](https://www.cnblogs.com/lee0oo0/p/3251170.html)为 index.tar 文件：

```
tar -cvf index.tar index.js
```

- `history`：历史记录

# 一、处理目录的常用命令

- `ls`：列表目录及文件名

- `cat test.txt`：显示文件内容

- `cd`：切换目录

- `pwd`：显示目前的目录

- `mkdir`：创建一个新的目录

- `rmdir`：删除一个空的目录

- `cp`：复制文件或目录

- `mv`：移动文件与目录

- `rm`：删除文件或目录

- `touch`： 新建文件

可以通过`man`命令来查看各个命令的使用文档，如`man cp`。

## ◆ `ls`：列表目录及文件名

- `ls -a`：全部的文件

- `ls -d`：仅列出目录本身

- `ls -l`：长数据列表，包含属性和权限等。

```
$ ls -a
.		.DS_Store	test.txt
..		test.docm	test2
$ ls -d
.
$ ls -l
total 264
-rw-r--r--@ 1 evalx  staff  106288  9  3 15:16 test.docm
-rw-r--r--@ 1 evalx  staff     570  9  3 16:21 test.txt
drwx--x--x  4 evalx  staff     128  9  3 15:41 test2
```

## ◆ `cd`：切换目录

- `cd ./runoob/`：切换到某目录

- `cd ~`：切换到主目录

- `cd ..`：切换到上一级

## ◆ `pwd`：显示目前的目录

## ◆ `mkdir`：创建一个新的目录

- `mkdir -p`：可以递归创建多层级目录

- `mkdir -m`：配置文件的权限

```
mkdir -p test1/test2/test3
mkdir -m 1 test2 // 创建有权限的文件夹
mkdir -m 711 test3 // 创建无权限的文件夹

```

## ◆ `rmdir`：删除一个空的目录

- `rmdir -p`：连同上一级空的目录也删掉

```
rmdir -p test1/test2/test3
```

## ◆ `cp`：复制文件或目录

```
cp 文件或文件夹名 文件或文件夹名
```

将 test.txt 文件复制到 test 文件夹中：

```
cp test.txt test
```

- `mv -f`：强制

## ◆ `mv`：移动文件与目录

```
mv 文件或文件夹名 文件或文件夹名
```

将 test.txt 文件移动到 test 文件夹中：

```
mv test.txt test
```

- `mv -f`：强制

## ◆ `rm`：删除文件或目录

- `rm -f`：忽略不存在的文件

- `rm -i`：删除前询问

- `rm -r`：递归删除目录

## ◆ `touch`： 新建文件

# 二、Linux 文件内容查看

- `cat`：由第一行开始显示文件内容

- `tac`：由最后一行开始显示，可以看出 tac 是 cat 的倒写

- `nl`：显示的时候输出行号

- `more`：一页一页的显示文件内容

- `less`：与 more 类似，但可以往前翻页

- `head`：只看头几行

- `tail`：只看末几行

## ◆ `cat 文件名`：由第一行开始显示文件内容

## ◆ `tac 文件名`：由最后一行开始显示，可以看出 tac 是 cat 的倒写

## ◆ `nl 文件名`：显示的时候输出行号

## ◆ `more 文件名`：一页一页的显示文件内容

## ◆ `less 文件名`：与 more 类似，但可以往前翻页

## ◆ `head 数字 文件名`：只看头几行

## ◆ `tail 数字 文件名`：只看末几行
