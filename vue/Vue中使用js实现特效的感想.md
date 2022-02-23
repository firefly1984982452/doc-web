---
title: Vue中使用js实现特效的感想
date: 2019-09-10 17:44:34
categories: 
- program
---

首先，上代码：

```
this.isShowPage = this.$store.state.isFresh === false ? true : false
this.$bus.off('showChildrenMenuBus')
this.$bus.on('showChildrenMenuBus', val => {
    this.$set(this, 'isShowPage', val)
})
```

最终，我的实现方法：

```
watch: {
    '$store.state.isShowChildrenMenu' (val, oldVal) {
        console.log(val, oldVal)
        this.$set(this, 'isShowPage', val)
    }
},
...
this.isShowPage = this.$store.state.isFresh === false ? true : false
```

# 知识点1

``` this.isShowPage = this.$store.state.isFresh === false ? true : false ``` 是一直存在的，这里是一个**判断是刷新还是路由跳转**，值变回了初始值就是强制刷新了，值变成了其它的就是路由路转。

以前用vuex一直苦恼于刷新了值就变回初始值了，万万没想到竟然在这里还就是要实现这样的效果。

# 知识点2

`bus`中的`off`为什么要放在`on`的前面，而不是在`beforeRouteLeave`里面。因为如果不是由路由切换跳转的话，不会执行`beforeRouteLeave`，也就会让`off`失效，所以要放在前面。

而且一定要放，如果不放的话会有多个页面监听到它。

就算不是多个页面，只要一进入该页面，也会监听多次。

# 知识点3

知识点3就是我用到的最终的方法，我没有用`bus`监听了，因为我页面切换得太多，实在是做不到这个效果，有太多未知的bug了，然后我尝试了改变vuex的状态，然后在每个页面监听vuex的变化，结果真的就可以了，没有一点bug。

# 总结

我前前后后大概用了3天的时候一直在解决bug，最后用一个特别简单的监听就实现了，但是在这个过程中我一直学习了很多很多的知识，也算是一种习得吧，很值得。

# 其它

说个插曲，这个文章，我拖延了一个星期才写，真的是自己把自己拖延笑了。。