---
title: weex踩坑集
date: 2018-04-20 11:50:38
categories: 
- program
---
# 项目创建

```
weex create proj
npm install weexpack -g
npm install
weex platform add android
weex platform add ios
weex run android

```

# 运行

```
npm run dev
npm run serve
```

# 布局的不同
 - 使用flex布局
 - 不支持百分数
 - border要分开写
 - 长度只支持px
 - 宽：720px=100%
 - 高：1250px =100%

# 组件

## text组件

- 模版里（template）最外层标签只能用<div>
标签来表示，其他标签都会报错，这是weex里的一个小坑，需要你注意。

- ID
在写Css样式时，必须使用类名或者ID进行设置，其他选择器不起作用。这个坑也比较深，我研究了很久。

## image组件

```
<image :src="item.src"></image>
```

## 列表组件

用内置组件`<list></list>`和`<cell></cell>`
相当于html中的`<ul></ul>`和`<li></li>`

# 调用原生组件 

```
var modal = weex.requireModule('modal');
...
modal.toast({
	message:'toast成功',
	duration:5
	})
```

# 网络请求

**stream的引入**

要想使用stream，必须使用weex来进行引入。

`const stream = weex.requireModule('stream');`


**fetch请求在电脑端浏览器会被提醒跨域，请求被拦截，直接用手机测试**

如果要一进入页面就请求数据，在`created(){}`或`mounted(){}`中写

## 方法一

```
let url = 'http://api.tkjidi.com/getGoodsLink?appkey=ed33ed5a1a73e00c65f6c8da5793fb8a&type=www_lingquan';
this.getData(url,res=>{
	modal.toast({message:'请求成功'+res,duration:10});
	this.lists = res.data;
	console.log(res.data);
})
```

在`methods{}`中写请求方法
```
getData(url,callback){
	return stream.fetch({
		methods:'get',
		type:'json',
		url:url
	},callback)
}
```

## 方法二

```
stream.fetch({
	methods:'GET',
	type:'json',
	url:''
},function(res) {
 console.log(res.data)
})
```



