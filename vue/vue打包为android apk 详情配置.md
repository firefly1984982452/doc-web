---
title: vue打包为android apk 详情配置
date: 2018-09-14 11:19:56
categories: 
- program
---

# 配置打包信息

## 安装JAVA环境

### 安装

	像安装QQ一样安装即可（找到安装包后一直点击下一步即可）

参考这个：[链接](https://jingyan.baidu.com/article/e75aca85b29c3b142edac6a8.html)

### 环境配置（如果只是创建签名文件，此步骤可以忽略）

JAVA环境参考这个：[链接](https://www.runoob.com/java/java-environment-setup.html#win-install)



## 创建签名文件


### 生成 
	
在需要安装的目录下输入如下命令：

`keytool -genkey -keystore key.jks  -alias key1 -keyalg RSA -validity 10000`

(`key.jks`是打包出来的证书文件，`key1`就是别名，可适情况改名，但是后缀名`.jks`千万不要改)

![链接](https://img-blog.csdn.net/20170927120700813)

根据弹出框中的提示信息写相关信息即可

**注意：输入密码是不会显示出明文，也不会显示`*****`，神马都不会显示，没关系，输入完后按回车键就行**


### 查看

在刚刚生成的目录下输入命令：

`keytool -v -list -keystore key.jks`

**同样，输入密码时，无论你输入什么，控制台都不会显示，所以正常输入即可**

# 打包源码

## 项目运行

### 运行环境

- 安装node

进入[官网](https://nodejs.org/en/download/)，选择自己电脑的版本（windows版本或mac版本)，然后像安装QQ一样一直点击下一步即可。

也可参考此[方法](https://jingyan.baidu.com/article/5552ef47812ba9518ffbc915.html)进行安装。

- 安装依赖

输入`npm install`

![如图](http://doc.shopsn.cn/Uploads/Editor/2018-07-11/5b459a3285f09.jpg)
**如果有红色报错可多试几次npm install 如果有黄色警告可以不用管）**

## 打包

以下配置参考[链接](https://blog.csdn.net/niesiyuan000/article/details/78890240)

# 其它

- 配置文件里面要有所用到的权限
- appID要一致
- 第三方授权要一致



