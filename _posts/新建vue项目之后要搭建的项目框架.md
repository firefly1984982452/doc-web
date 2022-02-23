---
title: 新建vue项目之后要搭建的项目框架
date: 2020-05-08 09:57:31
categories: 
- program
---

[github地址](https://github.com/firefly1984982452/base)

# 搭建

用`vue-cli`[创建](https://firefly1984982452.github.io/2018/03/19/vue%E5%B8%B8%E7%94%A8%E6%96%B9%E6%B3%95%E6%80%BB%E7%BB%93/#vue-cli%E5%BF%AB%E9%80%9F%E6%9E%84%E5%BB%BA%E9%A1%B9%E7%9B%AE)好项目

---

# css

## 【1】rem

新建一个`rem-config.js`文件

```
function resizeHtml() {
  //首先取得当前窗口宽度
  var width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  var scaleSize = 100,
    designSize = 1920;
  //获得的宽度除以（设计尺寸除以缩放尺寸）
  var size = (width / (designSize / scaleSize));
  //设置font-size
  document.getElementsByTagName("html")[0].style.fontSize = size + "px";
}

export default function() {
  resizeHtml();
  window.addEventListener("resize", function() {
    resizeHtml();
  });
}
```

在`main.js`里面引入

```
import remConfig from './config/rem-config'; // 配置rem
remConfig(); // 执行rem
```

## 【2】初始化css

新建`reset.css`

```
@charset "utf-8";
/*公共样式*/
html,body{padding:0; margin:0;cursor: default;height: 100%;}
/*如果用了rem，body里可设置默认font-size:.16rem*/
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td { margin: 0; padding: 0 ;}
body{font-family:"PingFangSC","Microsoft YaHei","微软雅黑","Hiragino Sans GB","arial","Tahoma","SimSun","宋体","sans-serif";}
h1, h2, h3, h4, h5, h6 { font-size: 100% ;}
address, cite, dfn, em, var { font-style: normal ;}
ul, ol, dl { list-style: none }
i{list-style: none;}
a { text-decoration: none !important; outline: none ;font-family:"Microsoft YaHei","微软雅黑","Hiragino Sans GB","arial","Tahoma","SimSun","宋体","sans-serif";cursor: pointer; color:#767676;}
img { border:0;}
button, input, select, textarea { font-size: 100% ;font-family:"Microsoft YaHei","微软雅黑","Hiragino Sans GB","arial","Tahoma","SimSun","宋体","sans-serif"; outline: none;}
table { border-collapse: collapse; border-spacing: 0 ;}
.clear{ clear:both;}
.clearfix:after{display:block;clear:both;content:"\0020";visibility:hidden;height:0;}
.clearfix{*zoom:1;}
.fl{float: left;}
.fr{float: right;}
input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance: none !important}
input[type="number"]{-moz-appearance:textfield;}
```

在`app.vue`里面引入

```
<style>
@import url('./assets/css/base.css');
</style>
```

## 【3】字体文件

一般设计稿上会用其它字体。

1.首先新建`font`文件夹，把所有的`ttf`字体放入，注意一定要是小写后缀名，大写后缀可能会导致报错。

2.然后新建一个`font.css`文件记录所有字体

```
@font-face {
    font-family: FZZYJW;
    src: url("../assets/font/FZZYJW.ttf");
}
@font-face {
    font-family: DIGITAL-Dream;
    src: url("../assets/font/DIGITAL-Dream.ttf");
}
```

3.在`main.js`里面引用

```
import './config/font-family-config.css'; // 配置字体
```

4.应用

```
font-family: 'PINGFANG-REGULAR';
```

---

# 组件

公用组件全局配置

在`main.js`里面定义

```
import Box from '@/components/box'
Vue.component('Box', Box);
```

在`home.vue`里面使用

```
<div>
  <Box />
</div>
```

---

# 路由

## 【1】定义主页及路由跳转文件

```
home.vue
page.vue
page1.vue
page2.vue
```

## 【2】在route.js里面定义

```
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Page from '@/pages/page'
import Page1 from '@/pages/page1'
import Page2 from '@/pages/page2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [{
        path:"",
        redirect: 'page'
      },{
        path:'page',
        name:'xx1',
        component: Page
      },{
        path:'page1',
        name:'xx1',
        component: Page1
      },{
        path:'page2',
        name:'xx2',
        component: Page2
      }]
    }
  ]
})

```

## 【3】在home里面跳转

```
...
  <div class="page">
      <div class="header">
          <div class="logo" @click="changePage('0')"></div>
          <p class="title">title</p>
          <div class="right-contral">
            <div class="button" @click="changePage('1')">button1</div>
            <div class="button" @click="changePage('2')">button2</div>
          </div>
      </div>
    <router-view class="content"></router-view>
  </div>
...

  changePage (data) {
      console.log(data)
      let url = ''
      switch (data) {
          case '0':
              url = 'page'
              break;
      
          case '1':
              url = 'page1'
              break;
      
          case '2':
              url = 'page2'
              
              break;
      
          default:
              break;
      }
      this.$router.push({
          path: url
      })
  }
```

---

# vuex

[链接](https://firefly1984982452.github.io/2018/03/19/vue%E5%B8%B8%E7%94%A8%E6%96%B9%E6%B3%95%E6%80%BB%E7%BB%93/#%E4%BD%BF%E7%94%A8Vuex)

---

# eventBus

[链接](https://firefly1984982452.github.io/2018/03/19/vue%E5%B8%B8%E7%94%A8%E6%96%B9%E6%B3%95%E6%80%BB%E7%BB%93/#vue%E5%85%84%E5%BC%9F%E7%BB%84%E4%BB%B6%E9%80%9A%E8%BF%87eventbus%E4%BC%A0%E5%80%BC)

---

# 配置echarts

[链接](https://firefly1984982452.github.io/2020/09/08/echarts%E8%B6%85%E5%85%A8%E8%B6%85%E8%AF%A6%E6%83%85%E9%85%8D%E7%BD%AE%E9%A1%B9/#%E5%9C%A8vue%E4%B8%AD%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8)

---
# 写README.MD

### 项目结构
```
├── build  #webpack编译相关文件目录，一般不用动
├── config  #配置目录，一般不用动
├── dist  #生产环境下build后的文件存放目录（发布目录）
├── static  #开发模式下的静态资源目录
├── src #源码目录
│   ├─── assets  #资源目录
|   |    ├─── images #小图片存放目录（20K以内），大图片请放到OSS上
|   |    ├─── css #公共样式文件，一般不允许自己修改，所有样式建议使用less格式书写
|   |    ├─── font #公共字体文件
|   |─── bus   #eventBus
│   ├─── components  #公共组件及框架组件
|   |─── config   # rem或字体配置代码
│   ├─── layouts  #页面布局组件，基本布局都已经好了，一般不允许在此添加文件
|   |    ├─── console.vue #登录页等全屏的布局
|   |    ├─── default.vue #无侧边菜单的布局
|   |    ├─── index.vue #有侧边菜单的布局
|   |    ├─── page.vue #有侧边菜单的布局，实际业务页面均使用此布局
│   ├─── router  #总路由目录，一般不允许添加，如若需要请按照index.js内容依样添加内容
│   ├─── settings  #公用配置文件目录，主要保存API服务器地址及根据环境进行API地址切换
|   |    ├─── development.js #开发环境的配置，主要配置集成在youban-utils组件里了
|   |    ├─── production.js #线上或测试环境的配置，请不要修改
|   |    ├─── index.js #配置的入口文件，请不要修改
│   ├─── store #vuex相关目录
│   ├─── App.vue #项目入口组件，请勿修改
│   └─── main.js  #项目的入口文件，请勿修改
├── index.html #首页入口文件，你可以添加一些 meta 信息或同统计代码啥的
├── package.json #项目配置/依赖文件
└── README.md #项目的说明文档，markdown 格式
```

## 项目约定


## 启动步骤

``` bash
# 安装项目依赖
npm install --registry https://i.youbankeji.com/nexus/content/groups/youban-npm/

# 本地运行
npm run dev

# 发布上线
npm run build
```

