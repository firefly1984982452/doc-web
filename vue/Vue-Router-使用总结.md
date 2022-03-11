---
title: Vue Router 使用总结
date: 2018-03-05 13:21:38
categories: 
- program
---

# 1. 前言

## 1.1 环境

我是使用vue-cli+webpack搭建vue开发环境

## 1.2 我的参考链接

`http://jspang.com/2017/04/13/vue-router/`

## 1.3 布署到本地服务器

进入项目文件夹，然后使用命令行：
`
npm start
`

再访问`http://localhost:8080/`就能在浏览器上看到网页了。
每次更改直接保存就能看到更新的内容， 不用刷新浏览器。

---

# 2. 简单的路由跳转

## 2.1 新建

首先在src/components文件夹下新建想跳转到的页面，名称为`Page1.vue`

Page1.vue：
```
<template>
	<p>新的页面</p>
</template>

<script>
</script>

<style>
</style>
```

## 2.2 配置

index.js
```
import Page1 from '@/components/Page1'
……
{
	path : '/Page1',
	name : 'Page1',
	component : Page1
}
```

## 2.3 跳转
`<router-link to="/Page1">诗词</router-link>`

---

# 3. vue-router传参

## 3.1 通过<router-link> 标签中的to传参

用`<router-link>`标签中的to属性进行传参，写成:to

`<router-link :to="{name:'Page1',params:{username:'彭丹丹'}}">找宝宝并用link to传参</router-link>`

接收：

`<p>{{$route.params.username}}</p>`

## 3.2 vue-router 利用url传递参数

:冒号的形式传递参数

index.js
```
{
    path:'/params/:newsId/:newsTitle',
     component:Params
}
```

接收：
```
<template>
    <div>
        <h2>{{ msg }}</h2>
        <p>新闻ID：{{ $route.params.newsId}}</p>
        <p>新闻标题：{{ $route.params.newsTitle}}</p>
    </div>
</template>
```

传递：
`<router-link to="/params/198/jspang website is very good">params</router-link> `

tips:正则
`path:'/params/:newsId(\\d+)/:newsTitle'`

---
# 4. 单页面多路由区域操作

app.vue
```
<router-view ></router-view>
 <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
 <router-view name="right" style="float:right;width:50%;background-color:#c0c;height:300px;"></router-view>
```

index.js
```
import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
 
Vue.use(Router)
 
export default new Router({
  routes: [
    {
      path: '/',
      components: {
        default:Hello,
        left:Hi1,
        right:Hi2
      }
    },{
      path: '/Hi',
      components: {
        default:Hello,
        left:Hi2,
        right:Hi1
      }
    }
 
  ]
})
```

最后在App.vue中配置我们的<router-link>就可以了

```
<router-link to="/">首页</router-link> | 
<router-link to="/hi">Hi页面</router-link> |
```

最后：app.vue的结构如下：
```
<template>
  <div id="app" class="shi">
   <nav>
			<ul>
				<li><router-link to="/Shi">诗词</router-link></li>
				<li><router-link to="/PengDan">找彭丹</router-link></li>
				<li><router-link to="/RuoHua">找若华</router-link></li>
			</ul>
		</nav>
		 <router-view ></router-view>
		 <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
		 <router-view name="right" style="float:right;width:50%;background-color:#c0c;height:300px;"></router-view>
  </div>
</template>
```

---
# 5. vue-router 的重定向-redirect

## 5.1 redirect基本重定向

index.js
```
  routes: [
    {
      path: '/',
      component: Hello
    },{
      path:'/goback',
      redirect:'/'
    } 
  ]
```

任意页面
`<router-link to="/goHome">去首页</router-link>`

## 5.2 重定向时传递参数

index.js
```
{
  path:'/params/:newsId(\\d+)/:newsTitle',
  component:Params
},{
  path:'/goParams/:newsId(\\d+)/:newsTitle',
  redirect:'/params/:newsId(\\d+)/:newsTitle'
}
```

任意页面
`<router-link to="/goRuoHua/55/妈妈">去首页并用重定向传参</router-link>`

---

# 6. alias别名的使用

## 6.1 使用

index.js
```
{
    path: '/Page1',
    component: Page1,
    alias:'/aboutMe'
 }
```

任意页面
`<router-link to="/Page1">去“关于我”的页面</router-link>`

## 6.2 redirect和alias的区别
+ redirect：仔细观察URL，redirect是直接改变了url的值，把url变成了真实的path路径。
+ alias：URL路径没有别改变，这种情况更友好，让用户知道自己访问的路径，只是改变了<router-view>中的内容。

## 6.3 tips

别名请不要用在path为’/’中，如下代码的别名是不起作用的。

```
{
  path: '/',
  component: Hello,
  alias:'/home'
}
```

---

# 7. 路由的过渡动画

## 7.1 `<transition>`标签

在`/src/App.vue`文件里添加了`<transition>`标签，并给标签起了一个名字叫`fade`。

```
<transition name="fade">
  <router-view ></router-view>
</transition>
```

## 7.2 css过渡类名：

```
fade-enter:进入过渡的开始状态，元素被插入时生效，只应用一帧后立刻删除。
fade-enter-active:进入过渡的结束状态，元素被插入时就生效，在过渡过程完成后移除。
fade-leave:离开过渡的开始状态，元素被删除时触发，只应用一帧后立刻删除。
fade-leave-active:离开过渡的结束状态，元素被删除时生效，离开过渡完成后被删除。
```

如下使用：
```
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
```

## 7.3 过渡模式mode

in-out:新元素先进入过渡，完成之后当前元素过渡离开。
out-in:当前元素先进行过渡离开，离开完成后新元素过渡进入。

---

# 8. 路由中mode的设置和404页面的处理

## 8.1 mode的两个值
	histroy:当你使用 history 模式时，地址址不再有“#”号，URL 就像正常的 url，例如 `http://jsapng.com/lms/`，也好看！
	hash:默认’hash’值，但是hash看起来就像无意义的字符排列，不太好看也不符合我们一般的网址浏览习惯。

```
export default new Router({
	mode : 'history',
	  routes: [
	    {
	      path: '/',
	      name: 'HelloWorld',
	      components: {
	      	default : HelloWorld,
	      	left : PengDan,
	      	right :RuoHua
	      }
	    }
	  ]
    })
```

## 8.2 404页面的设置

index.js

```
{
   path:'*',
   component:Error
}
```

新建404页面
	在/src/components/文件夹下新建一个Error.vue的文件。简单输入一些有关错误页面的内容。

```
<template>
    <div>
        <h2>{{ msg }}</h2>
    </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'Error:404'
    }
  }
}
</script>
```

当输入错的网址时就会有效果，同时自己写错了也会有。

`<router-link to="/bbbbbb">我是瞎写的</router-link>`

---

# 9. 路由中的钩子

直接在路由配置文件（/src/router/index.js）中写钩子函数。但是在路由文件中我们只能写一个beforeEnter,就是在进入此路由配置时。

```
{
      path:'/params/:newsId(\\d+)/:newsTitle',
      component:Params,
      beforeEnter:(to,from,next)=>{
        console.log('我进入了params模板');
        console.log(to);
        console.log(from);
        next();
},
```

三个参数：

+ to:路由将要跳转的路径信息，信息是包含在对像里边的。
+ from:路径跳转前的路径信息，也是一个对象的形式。
+ next:路由的控制参数，常用的有next(true)和next(false)。

next()如果写false和注释它是一样的效果，都不能进入了。

---

# 10. 编程式导航

**this.$router.go(-1) 和 this.$router.go(1)**

App.vue

`<button @click="goback">后退</button>`

相应的方法

```
<script>
export default {
  name: 'app',
  methods:{
    goback(){
      this.$router.go(-1);
    },
    goHome(){
      this.$router.push('/');
    }
  }
}
</script>
```
