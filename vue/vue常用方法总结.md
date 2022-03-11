---
title: vue常用方法总结
date: 2018-03-19 13:50:17
categories: 
- program
---


# vue绑定内联样式

```
<div :style="styleData">
```

```
data:{
  styleData: {
    color: '#f00',
    fontSize: '13px'
  }
}
```

之前的用法`styleData: 'background:#AB92EB;font-size:22px`

---

# slot插槽

father.vue
```
<child>
  <div slot='up'>start</div>
  <div> content </div>
  <div slot='down'> end </div>
</child>
```

child.vue
```
<div>
  <slot name='up' />
  ...
  <slot name='down' />
</div>
```

效果：

`start content end`

---

# mixin

**如果要使用全局filter的话，原来的做法是：**

main.js

```
Vue.filter('name',function(){
  return 'test'
})
```

**用mixin的做法是：**

mixin.js

```
export default {
    filters: {
        name: function() {
            return 'test'
        }
    }
}
```

main.js

```
import mixin from './mixin'
Vue.mixin(mixin)
```

**created和methods也是同样的效果**

```
export default {
    created(){
        console.log('created')
    }
}
```

这时所有的vue文件的created都会调用这里的方法。

---

# 公共组件

## 【1】全局使用

main.js
```
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import SixiButton from 'components/common/SixiButton'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.component('six-button', SixiButton)
```

## 【2】局部使用

test.vue
```
<template>
  <div>
    <child />
  </div>
</template>

...

import child from 'child.vue';

...

components:{
  child
}

```

---
# 路由跳转及传参

## 【1】直接跳转

A.vue
```
this.$router.push({
	name : 'B',
	params : {
		id : 1
		name : 'study Vue.'
	}
})
```

B.vue
```
this.$route.params
```
*tips:A.vue使用的是`$router`，B.vue使用的是`$route`，极易混淆。*

**此处push的必须是name，不能是path，如果要用path的话，可以用query**

## 【2】地址栏'/'传参

router.js

```
{
    path: '/success/:order_id',
    name: 'success',
    component: success
}
```

A.vue

地址：`http://localhost:8080/#/success/257`

获取：`this.$route.params.order_id`


## 【3】地址栏'?'传参

地址：`http://localhost:8080/#/success?id=257`

获取：`this.$route.query.id`

---

# axios网络模块

## 【1】axios网络请求

`this.axios.post().then().catch();`

详情如下：

```
this.axios.post(url,params).then((res) => {
		console.log(res.data);
}).catch(
	(err) => {
	console.log(err);
});
```

## 【2】设置请求头带cooike

```
import axios from 'axios'
axios.defaults.withCredentials=true;//让ajax携带cookie
Vue.prototype.$axios = axios;
```

---

# vue-cli快速构建vue2项目

## 【1】安装webpack
`npm install -g webpack`

## 【2】安装vue-cli
`npm install -g vue-cli`

## 【3】初始化
`vue init webpack myVueStudy`

初始化过程中有些需要填的选项，直接按`enter`键就可以了。

## 【4】安装模块
`npm install`

## 【5】运行
`npm run dev`

## 【6】打包

config/index.js
`assetsPublicPath: './',`

`npm run build`


---

# 限制input、el-input只能输入数字

## 方法一：事件监听

```
<el-input 
	style="width: 400px;" 
	v-model.number="params.account" 
	onkeypress="return event.keyCode>=48&&event.keyCode<=57"
	clearable>
</el-input>
```

- `onkeypress="return event.keyCode>=48&&event.keyCode<=57"`是按下时触发

- `onkeyup="value=value.replace(/[^\d]/g,'') "`是输入后触发

- `v-model.number`同样也只能输入数字，但是输入的非数字仍然会显示在输入框，看不去不友好。

- `<input type="number" class="el-input__inner" v-model="value"/>`

- `oninput="value=value.replace(/[^0-9.]/g,'')"`是input触发


## 方法二：自定义指令

```
<el-input v-model.number=“value” v-number-only placeholder="请输入电话"></el-input>
```

封装个自定义指令放在标签上

```
directives: {
  numberOnly: {
    bind: function(el) {
      el.handler = function() {
        el.value = Number(el.value.replace(/\D+/, ''))
      }
      el.addEventListener('input', el.handler)
    },
    unbind: function(el) {
      el.removeEventListener('input', el.handler)
    }
  }
},
```

## 方法三：最后验证

```
if(Number.isNaN(Number(this.searchForm.contactPhone))){
  return this.$message.error('联系电话只能输入数字！')
}
```

------------

# vue中监听键盘事件

```
created(){
	var that = this;
	document.onkeydown = function(e) {
		var keyNum = window.event ? e.keyCode : e.which;
		if(keyNum == 13) {
			that.login();
		}
	};			
},
```

---
# vue获取后端数据应该在created还是mounted方法

看情况了，一般放到`created`里面就可以了，这样可以及早发请求获取数据，如果有依赖`dom`必须存在的情况，就放到`mounted(){this.$nextTick(() => { /* code */ })}`里面。

---

# vue中新标签用target:blank跳转

```
let routeUrl = this.$router.resolve({
  path: '/peoManager/peopleDetails',
  query: {index: index, peopleID: item.peopleID}
})
window.open(routeUrl.href, '_blank')
```

---

# mode模式区别

## 【1】history

优点：地址栏不会有`#`号，利于`SEO`优化

缺点：线上刷新后会404，需要前后台都配置才行

## 【2】hash

优点：线上线下都没有刷新异常的问题

缺点：地址栏有`#`号，对`SEO`不友好

---

# vue项目for循环注意事项

项目中用了
```
v-for="(item) in arr"
```

改成
```
v-for="item in arr"
```

运行没有问题，但打包会报错

---

# vue父子组件相互通信

## 【1】子 => 父 传值

### child.vue

```
sendData() {
    this.$emit('sendDataFun', 'hello');
}
```

### father.vue

```
<child @sendDataFun="get"></child>
...
get(val){
	console.log(val)
}
```

## 【2】父 => 子 传值

### father.vue

```
<child :sendType="type"></child>
```

### child.vue

```
...
props:{
	sendType:''
},
watch:{
	sendType(){
		...
	}
}
...
```

## 【3】父 => 子 调方法

### father.vue

```
<child ref="child" @sendDataFun="get"></child>
...
this.$refs.child.sendData();
...
get(val){
	console.log(val)
}

```

### child.vue

```
sendData() {
    this.$emit('sendDataFun', 'hello');
}
```

`this.$refs.child`只有在渲染完了才能获取到。

---

# vue兄弟组件用eventbus通信


新建`bus.js`


```
import Vue from "vue"
export default new Vue();
```

`main.js`里设置为通用：

```
// 引入eventBus
import EventBus from './bus/eventBus'; 
Vue.prototype.$eventBus = EventBus;
```

兄组件`child1.vue`

```
<span @click="send">点击</span>
send(){
	eventBus.$emit('sentMsg','hellowrold~');
}
```

弟组件`child2.vue`

```
mounted() {
    eventBus.$on('sentMsg',v=>{
        console.log(v)
    })
},
```

---

# `window.eventBus`实现vue页面与普通js数据通信

适用于`echarts.js`和`map.js`。

重点：用`window.eventBus`而不是`this.eventBus`，因为普通js里面的`this`是代表`vue`，而普通js获取不到`vue`的值。

main.js
```
// 引入eventBus
import EventBus from './bus/eventBus'; 
Vue.prototype.$eventBus = EventBus;

if (window) {
  window.$eventBus = EventBus;
}
```

page.vue
```
window.$eventBus.$emit('residenceData', resData.map(v => v.lx));
```

index.js
```
var attackSourcesName = [];
window.$eventBus.$on('residenceData',v=>{
    attackSourcesName = v;
})
```

![image](https://wx3.sinaimg.cn/large/0069qZtTgy1gij1jm6zqjj30zw0han25.jpg)

---


# filter访问data数据

```
var that;
export default {
    data() {
        return {
            peopleArr:[{name:xx,value:1},{name:xxx,value:2}]
        }
    },
    beforeCreate(){
        that = this;
    },
    filter:{
        filterPeople(val){
            return that.peopleArr[0].value;
        }
    }
}
```

重点：
- 定义`that`；
- 在`beforeCreate`之前把`that`绑定在`this`(`vue`)上；
- 在`filter`中使用`that`.

---
# Vue导航守卫BeforeRouteEnter、BeforeRouteUpdate

## beforeRouteEnter用法：keepAlive-列表不缓存详情页缓存

```
meta: {
    keepAlive: true,
    isBack:false
}
```

```
beforeRouteEnter(to,from,next){
    // 如果是从详情页回到列表页
    console.log(from.name)
    if(from.name == '列表详情'){
        to.meta.isBack = true;
    }
    next();
},
activated(){
    // 如果不是从详情页回到列表页，则刷新数据
    if(!this.$route.meta.isBack){
        // 在此处获取数据后不用在created里调用数据
        this.reset();
    }
    this.$route.meta.isBack = false;
},

```


## beforeRouteEnter访问data里面的数据

```
beforeRouteEnter(to, from, next) {
    if(to.name == '智慧护理工作台') {
        next(vm=>{
            vm.show=true;
        })
    }
    next();
},
```

重点：
`next(vm=>{vm.show=true;})`



## beforeRouteUpdate

当页面路由不变，参数改变时用它

```
beforeRouteUpdate(to,form,next){
    console.log('路由更新之前：从to获取参数', to.params, '从this.$route获取参数', this.$route.params)
    next()
    console.log('路由更新之后：从to获取参数', to.params, '从this.$route获取参数', this.$route.params)
}
```

---

# 使用Vuex

## 下载

`npm install vuex --save`

## `main.vue`

```
import { mapState,mapMutations } from 'vuex';
...
computed: {
    ...mapState({
    tabsList: 'tabsList'
    })
},
methods: {
    ...mapMutations(["handleTabsList"]),
}
```
这样就可以直接在`vue`文件中写`this.tabsList`来获取vuex中的值。
如：

原来：
```
this.$store.commit('handleTabsList',this.$store.state.tabsList)
```

现在：
```
this.handleTabsList(this.tabsList)

```

## store.js

```
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tabsList: [] || localStorage.getItem('tabsList')
    },
    mutations: {
        handleTabsList: (state, tabsList) => {
            state.tabsList = tabsList
            localStorage.setItem('tabsList', JSON.stringify(tabsList))
        }
    },
    actions: {

    },
    getters: {
        tabsList: (state) => state.tabsList
    }
})
```

## main.js

```
import store from './store'

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

```

---

# 使用静态资源

`image:require('../../assets/img/fn1.png')`

---

# element-UI的坑

## 翻页

`el-pagination`翻页组件重置时`:current-page="currentPage”`的值已经是1了，内容也是1了，但是DOM没更新，要加`.sync`，变成`:current-page.sync="currentPage”`。

## 关闭element中的多条消息（只显示一条）

```
this.$message.closeAll();
this.$message.success('info');
```

## 让el-select可以绑定对象

```
<el-select value-key="name">
  <el-option
    v-for="item in list"
    :key="item.id"
    :label="item.name"
    :value="item">
  </el-option>
</el-select>
```

## 手动控制popover弹层的显示与隐藏状态

```
<popover ref="popover"></popover>
 
// ElementUI并没有给我们明确控制popover弹层显示与关闭状态的方法，但是通过ref获取元素之后发现，元素上面已经内置关闭和打开的方法，
// 开启 doShow()   开启调用的方法(一般都是手动触发,不常用)
// 关闭 doClose()  关闭弹层调用的方法(用于刚刚我们说到的场景)
```

表格中多个popover

```
<template slot-scope="scope">
  <div class="operation">
    <el-popover trigger="click"  :ref="`popover-${scope.$index}`"  placement="top" width="100" >
      <p class="el-icon-warning">  确定删除</p>
      <div style="text-align: right; margin: 0">
        <el-button size="mini" type="text" @click="scope._self.$refs[`popover-${scope.$index}`].doClose()" >取消</el-button>
        <el-button type="primary" size="mini" @click="scope._self.$refs[`popover-${scope.$index}`].doClose()" >确定</el-button>
      </div>
      <span slot="reference">删除</span>
    </el-popover>
  </div>
</template>

```

---

# vue2的双向绑定原理【`Object.defineProperty`】

```
<div id="div"></div>
<input type="text" name="" id="test" value="" />
  <script>
  var obj = {}
  Object.defineProperty(obj,'age',{
    get:function() {console.log('get')},
    set:function(newValue) {
      document.getElementById('test').value = newValue
      document.getElementById('div').innerHTML = newValue
    }
  })
  document.addEventListener('input',(e)=> {
    obj.age = e.target.value
  })
  </script>
```

---
# v-if与v-show的区别

`v-if`：整个元素删除；适用于条件少变动时。
`v-show`：用`display:none`；适用于频繁切换。

---


# vue下swiper的使用

## 安装

`npm install swiper`

然后视情况看要不要在main.js里面全局引用，如果界面少可以不用。

## 引用

`html`部分：

注意：此处的data要注意**网络请求的异步问题**

```
<swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide v-for="(item,index) in data" :key="index" class="swiper-slide">
        {{item}}
    </swiper-slide>
</swiper>
```

`js`部分

```
import 'swiper/dist/css/swiper.css'
import {swiper, swiperSlide} from 'vue-awesome-swiper'

...

data(){
    reutrn {
        swiperOption: {
            direction: 'vertical',
            notNextTick: true,
            loop: true,
            speed: 3500,
            autoplay: {
                delay: 4000,
                stopOnLastSlide: false,
                disableOnInteraction: false
            }
        }
    }
},
components: {
    swiper,
    swiperSlide
}
```

`css`部分

视情况而定，有的代码需要，有的不需要。

```
.swiper-container{
    windth:100%important;
    heidth:100px!important;
}
```

---

# vue国际化i18n使用

## 安装vue-i18n

npm install vue-i18n --save

## main.js文件配置

```
// 引入i18n国际化插件
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
 
// 注册i18n实例并引入语言文件，文件格式等下解析
const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    'zh': require('@/assets/languages/zh.json'),
    'en': require('@/assets/languages/en.json')
  }
})
//将i18n注入到vue实例中
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
```

- en.json

```
{
    "common": {
        "home": "Home",
        "login": "Login",
        "register": "Register",
        "appDownload": "APP Download",
        "aboutUs": "About Us",
        "faq": "FAQ",
        "contact": "Contact Us",
        "join": "Join Us",
        "copyright": "Copyright © ZLGMcu Ltd",
        "news": "News",
        "toggle": "Toggle",
        "welcome": "Welcome, ",
        "userinfo": "Userinfo",
        "firstPage": "Home",
        "setting": "Setting",
        "exit": "Exit"
    },
    "message": {
        "hint1": "Please Input Nickname",
        "hint2": "Please Input Username",
        "hint3": "Please Input Password",
        "hint4": "Don't find picture",
        "hint5": "No Account?",
        "hint6": "Register Now",
        "hint7": "Remember me",
        "hint8": "Can't login in?",
        "placeHolder1": "Nickname",
        "placeHolder2": "Username or Phone Number or Email",
        "placeHolder3": "Password(8 Digits at Least)"
    }
}
```

- zh.json

```

{
    "common":{
        "home": "首页",
        "login": "登录",
        "register": "注册",
        "appDownload": "APP下载",
        "aboutUs": "关于我们",
        "faq": "常见问题",
        "contact": "联系方式",
        "join": "加入我们",
        "copyright": "版权说明 © 广州xxx有限公司",
        "news": "消息",
        "toggle": "切换",
        "welcome": "欢迎您，",
        "userinfo": "个人信息",
        "firstPage":  "主页",
        "setting": "设置",
        "exit": "退出"
    },
    "message":{
        "hint1": "请输入昵称",
        "hint2": "请输入账号",
        "hint3": "请输入密码",
        "hint4": "没有找到",
        "hin5": "没有账号？",
        "hint6": "马上注册",
        "hint7": "记住我",
        "hint8": "登录遇到问题？",
        "placeHolder1": "昵称",
        "placeHolder2": "用户名、手机号或邮箱",
        "placeHolder3": "密码（至少8位字符）"
    }
}
```

## 使用vue-i18n

```
<h1 >{{$t('common.home')}}</h1>
<el-button @click="changeTest">切换</el-button>

...

changeTest(){
	let lang = this.$i18n.locale == 'zh' ? 'en' : 'zh';
	this.$i18n.locale = lang;
},
```

---



# 消息无缝滚动

```
export default {
  data() {
    return {
        animate:false,
        items:[
            {name:"马云"},
            {name:"雷军"},
            {name:"王勤"}
        ]
    }
  },
  created(){
      setInterval(this.scroll,1000)
  },
  methods: {
    scroll(){
       this.animate=true;    // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
       setTimeout(()=>{      //  这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
          this.items.push(this.items[0]);  // 将数组的第一个元素添加到数组的
          this.items.shift();               //删除数组的第一个元素
          this.animate=false;  // margin-top 为0 的时候取消过渡动画，实现无缝滚动
       },500)
    }
  }
}
```

[参考](https://segmentfault.com/a/1190000012272194)

---

# 图片错误时显示默认图片

```
<img v-bind:src="userData.photo" :onerror="logo" class="img-box4">  

data: () => ({  
    logo: 'this.src="' + require('../assets/img.png') + '"'
}) 
```

懒加载方法：

`<img v-lazy:background-image="{src: item.pic_url, error: 'http://bpic.588ku.com/back_pic/03/53/97/65579958bb0ec9a.jpg!r850/fw/400', loading: 'default_banner'}" />`

注意：`error`里的图片得是网络图片，用本地图片我设置了很久都没有效果。

---

# 图片中绝对地址和相对址引用

`<img src="~static/20180315130936.png"/>`

---

# 引入不能npm下载的js（如mui）

复制`mui.min.js`进去

在`vue`页面中引入

`import mui from '../../js/mui.js';`

在严格模式下报错

在`.babel.rc`中加入如下代码，排除mui相关的js就可以了：

```

{
"presets": [ "es2015" ],
"ignore": [
"./src/lib/mui/mui.min.js",
"./src/lib/mui/mui.picker.js",
"./src/lib/mui/mui.poppicker.js"
]
}
```

---

# watch

## 【1】箭头函数不指向this

```
watch:{
  // 普通函数可以获取this
  deviceCode: function() {}
  // 箭头函数无法获取this
  deviceCode: ()=>{}
}
```