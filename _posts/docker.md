---
title: docker
date: 2021-09-07 16:15:18
categories:
  - program
---

docker 可以理解为**容器/虚拟机/服务器**。

# 一、参考链接

- [Docker 官方社区](https://hub.docker.com/)

- [技术胖教程](https://jspang.com/detailed?id=75)

- [菜鸟教程](https://www.runoob.com/docker/docker-tutorial.html)

# 二、下载

在官网下载安装包

像安装 node、qq 一样正常安装即可

# 三、创建、查看、运行镜像

以 `nginx` 为例：

- `docker images`：查看下载了多少镜像，等同于`docker image ls`

- `docker pull nginx`：下载某个镜像

- `docker ps`：查看开启了哪些镜像

- `docker ps -a`：查看所有镜像，包括未开启的

- `docker run nginx`：运行某个镜像，run 的时候如果发现没有这个镜像也会自动下载。

- `docker run --name test nginx`：运行指定名称的镜像

# 四、停止、删除、重启

`xx` 为`<ID or Image Name >`

- `docker stop xx`：停止某个镜像

- `docker rm xx`：删除某个镜像

- `docker rm xx -f`：强制删除某个镜像

- `docker start xx`：启动已经停止的某个镜像

- `docker restart xx`：重启某个镜像

- `docker rm -f $(docker ps -aq)`：强制删除所有镜像

- `docker system prune -f`：删除所有不再使用的容器

- `docker image prune -a`：删除没有使用的所有镜像

# 五、端口映射的 2 种模式

- 【1】attached 模式：在前台运行

- 【2】detached 模式：在后台运行

## 【1】启动端口

将 docker 的 80 端口，映射到服务器的 8080 端口：

```
docker run -p 8080:80 nginx
```

打开浏览器，进入[127.0.0.1:8080](http://127.0.0.1:8080/)，就可以看到内容

## 【2】attached 模式【默认】

第次访问都会留下访问记录

## 【3】detached 模式

不会显示访问记录

开吂 `detached` 模式的方法：`-d`

```
docker run -d -p 8080:80 nginx
```

## 【4】detched 模式转换为 attached 模式

`xx` 为`<ID or Image Name >`

```
docker attach xx
```

## 【5】detached 模式下查看 log

`xx` 为`<ID or Image Name >`

只打印一次

```
docker logx xx
```

访问一次打印一次

```
docker logs -f xx
```

# 六、交互模式

只看看访问日志已经无法满足需求，这时候就需要交互模式

## 【1】使用镜像时直接开启交互模式（进入 Shell 脚本）

```
docker run -it ubuntu sh
```

`-i`：交互模式

`-t`：终端

`sh`：交互的方式，此处代表使用 `Shell` 脚本

◆ 进入之后可以输入一些命令行

- 输入`ls`得到目录下的文件

- 输入`hostname`可以得到主机名

- 输入`echo 'hello world'`可以打印 hello world。

- 输入`exit`退出交互模式

## 【2】detached 模式下再进入交互模式

进入 detached 模式：

```
docker run -d -p 8080:80 nginx
```

进入到交互模式：

```
docker exec -it xx sh
```

# 七、镜像的导出和导入

导出

```
docker image save test:lastest -o new-test.image
```

导入

```
docker image load -i .\new-test.image
```

# 八、Dockerfile

## 【1】通过 Dockerfile 构建镜像

1. 新建 dockerfile 文件

```
FROM ubuntu:latest
RUN  apt-get update && \
         DEBIAN_FRONTEND=noninteractive apt-get install --no-install-recommends -y python3.9 python3-pip python3.9-dev
ADD test.py /
CMD ["python3","test.py"]
```

2. 同目录下 test.py 文件的代码

```
print("Hello JSPang")
```

3. 到对应目录下，打包 test 文件，打包名为 name：

- `-f`：指定打包的名称

```
docker image build -f test -t name .
```

4. 此时已经可以运行

```
docker run name
```

## 【2】把镜像分享到 Dockerhub

必须遵守`用户ID/镜像名称`的规则

1. 构建

```
docker image build -t pdd/pdd-name .
```

2. 推送

```
dcker login
```

3. 输入帐号密码后推送

```
docker image push pdd/pdd-name
```

## 【3】FROM 语法的使用

最新版

```
FROM ubuntu:latest
```

或者

```
FROM ubuntu:最合适的版本
```

## 【4】RUN 执行指令使用技巧

不建议：

```
FROM ubuntu:latest
RUN apt-get update
RUN apt-get install -y wget
RUN wget https://github.com/ipinfo/cli/releases/download/ipinfo-2.0.1/ipinfo_2.0.1_linux_amd64.tar.gz
RUN tar zxf ipinfo_2.0.1_linux_amd64.tar.gz
RUN mv ipinfo_2.0.1_linux_amd64 /usr/bin/ipinfo
RUN rm -rf ipinfo_2.0.1_linux_amd64.tar.gz
```

建议使用`&& \`进行连接：

```
FROM ubuntu:latest
RUN apt-get update && \
    apt-get install -y wget && \
    wget https://github.com/ipinfo/cli/releases/download/ipinfo-2.0.1/ipinfo_2.0.1_linux_amd64.tar.gz && \
    tar zxf ipinfo_2.0.1_linux_amd64.tar.gz && \
    mv ipinfo_2.0.1_linux_amd64 /usr/bin/ipinfo && \
    rm -rf ipinfo_2.0.1_linux_amd64.tar.gz
```

这 2 次打包分别是`119MB`和`134MB`，者打包时间比后者快`6.7倍`。

## 【5】文件操作：ADD 和 COPY 的区别

### （1）用 COPY 构建镜像

1. 新建 Dockerfile.copy 文件

```
FROM node:alpine3.14
COPY index.js  /app/index.js
```

2. 新建 index.js 文件

```
//1. 导入 http 模块
const http = require('http');
//2. 创建服务器对象
const server = http.createServer();
//3. 开启服务器
server.listen(3000, () => {
    console.log('Server is running...');
});
//4. 监听浏览器请求并进行处理
server.on('request', (req, res) => {
    // end方法能够将数据返回给浏览器，浏览器会显示该字符串
    res.end('Hello Nodejs');
});
```

3. 构建

```
docker image build -f Dockerfile.copy -t hello-copy .
```

4. 运行及映射端口

```
docker container run -it -p 3000:3000 hello-copy sh
```

5. 打开[127.0.0.1:3000](http://127.0.0.1:3000/)进行访问

### （2）用 ADD 构建镜像

1. Dockerfile.add 文件内容

```
FROM node:alpine3.14
ADD index.tar  /app/
```

2. 用 ADD 命令进行打包镜像

```
docker image build -f Dockerfile.add -t hello-gzip .
```

3. 打包好以后使用交互模式，开启容器。

```
docker container run -it -p 3000:3000 hello-gzip sh

```

4. 再进入 app 路径下面，可以看到下面自动给我们解压了 index.tar 文件。

## 【6】定义变量：ARG 和 ENV

将 dockerfile 文件中的 `version` 的 `2.0.1` 改为变量：

1. 用 ENV 定义变量

```
FROM ubuntu:latest
ENV VERSION=2.0.1
RUN apt-get update && \
    apt-get install -y wget && \
    wget https://github.com/ipinfo/cli/releases/download/ipinfo-${VERSION}/ipinfo_${VERSION}_linux_amd64.tar.gz && \
    tar zxf ipinfo_${VERSION}_linux_amd64.tar.gz && \
    mv ipinfo_${VERSION}_linux_amd64 /usr/bin/ipinfo && \
    rm -rf ipinfo_${VERSION}_linux_amd64.tar.gz
```

2. 用 ARG 定义变量

```
FROM ubuntu:latest
ARG VERSION=2.0.1
RUN apt-get update && \
    apt-get install -y wget && \
    wget https://github.com/ipinfo/cli/releases/download/ipinfo-${VERSION}/ipinfo_${VERSION}_linux_amd64.tar.gz && \
    tar zxf ipinfo_${VERSION}_linux_amd64.tar.gz && \
    mv ipinfo_${VERSION}_linux_amd64 /usr/bin/ipinfo && \
    rm -rf ipinfo_${VERSION}_linux_amd64.tar.gz
```

3. 构建这 2 个镜像

4. 区别点

- (1)ARG 是构建环境 ， ENV 可带到镜像中

用交互模式进入到`ipconfig-env`镜像中，然后输入`env`可以看到当前镜像的信息。

```
docker container run -it ipinfo-env
```

然后输入`env`，可以看到里边是会有 VERSION 变量的。

- (2) `ARG`可以在构建镜像时改变变量值

在构建时，可以使用`—build-arg` 参数来更改变量的值，比如现在要把变量`VERSION`的值进行修改,就可以使用下面的命令。

```
docker image build -f Dockerfile.ARG -t ipinfo-arg-2.0.0 --build-arg VERSION=2.0.0 .
```

这时候我们再使用交互模式，开启`ipinfo-arg-2.0.0`容器。

```
docker container run -it ipinfo-arg-2.0.0
```

然后再通过`shell`命令，i`pinfo verison`查看`ipinfo`的版本，可以看到版本已经变成了`2.0.0`了。

## 【7】CMD 和 entrypoint

1. 编写三个 Dockerfile 文件，Dockerfile-cmd、Dockerfile-entrypoint 和 Dockerfile.

Dockerfile-cmd 内容

```
FROM ubuntu:21.04
CMD ["echo","hello docker"]
```

Dockerfile-entrypoint 内容

```
FROM ubuntu:21.04
ENTRYPOINT ["echo","hello docker"]
```

Dockerfile 内容

```
FROM ubuntu:21.04
ENTRYPOINT [ "echo"]
CMD []
```

2. 对三个 Dockerfile 文件分别打包，打包成了下面三个镜像包。

```
demo-cmd          latest    25bb1dee8c29   2 weeks ago   80.3MB
demo-entrypoint   latest    214b876fc74c   2 weeks ago   80.3MB
demo-both         latest    6c64ebc22c19   2 weeks ago   80.3MB
```

3. 使用的区别和方法

- demo-cmd 镜像的使用

```
$docker container run --rm -it demo-cmd
hello docker
```

```
$docker container run --rm -it demo-cmd echo "hello world"
hello world
```

- demo-entrypoint 镜像的使用

```
$ docker container run --rm -t demo-entrypoint
hello docker
```

```
$ docker container run --rm -t demo-entrypoint echo "jspang.com"
hello docker echo jspang.com
```

- demo-both 镜像的使用

```
$ docker container run --rm -t demo-both "hello jspang"
hello jspang
```
