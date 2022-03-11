---
title: Vue3.0+TypeScript学习笔记
date: 2020-09-28 18:50:17
categories:
- program
---

[链接](https://jspang.com/detailed?id=64)

# 搭建 vue3 环境

下载最新 vue-cli

```
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

使用`vue --version`检查版本大于`@vue/cli 4.5.6`即可。

## 【1】vue-cli 命令行搭建

9 步式对话。

1.使用`vue create vue3-1`创建 2.选择自定义 3.选择 TypeScript 4.创建完成后使用`yarn serve`运行项目

## 【2】vue-cli 图形界面搭建

1.使用`vue ui`创建 2.打开运行的`http://localhost:80` 3.创建新项目 4.创建完成后使用`yarn serve`运行项目

---

# setup 和 ref

做一个单行点击显示值事件

```
<template>
  <div>
    <div>请选择</div>
  </div>
  <div>
    <button
      v-for="(item, index) in girls"
      v-bind:key="index"
      @click="selectGirlFun(index)"
    >
      {{ index }} : {{ item }}
    </button>
  </div>
  <div>你选择了【{{ selectGirl }}】为你服务</div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const girls = ref(["大脚", "刘英", "晓红"]);
    const selectGirl = ref("");
    const selectGirlFun = (index: number) => {
      selectGirl.value = girls.value[index];
    };
    //因为在模板中这些变量和方法都需要条用，所以需要return出去。
    return {
      girls,
      selectGirl,
      selectGirlFun,
    };
  },
});
</script>
```

`setup`函数代替了`vue2`中的`data`和`methods`属性

---

# 优化程序

## 【1】reactive 优化

为什么要用 reactive，因为不用的话，在方法里面要用`selectGirl.value`才能获取到值。

将所有对应的值封装为一个对象：

```
<button
      v-for="(item, index) in data.girls"
      v-bind:key="index"
      @click="data.selectGirlFun(index)"
    >
      {{ index }} : {{ item }}
</button>
<div>你选择了【{{ data.selectGirl }}】为你服务</div>
...
<script lang="ts">
import { ref, reactive } from "vue";
export default {
  name: "App",
  setup() {
    const data = reactive({
      girls: ["大脚", "刘英", "晓红"],
      selectGirl: "",
      selectGirlFun: (index: number) => {
        data.selectGirl = data.girls[index];
      },
    });

    return {
      data,
    };
  },
};
</script>
```

## 【2】给 data 增加类型注解优化

`data`变量没有作`类型注解`，而是采用了`TypeScript`的`类型推断`。

```
interface DataProps {
  girls: string[];
  selectGirl: string;
  selectGirlFun: (index: number) => void;
}
const data: DataProps = ...
```

## 【3】用 toRefs 优化 DOM 中的对象

引入：

```
import { reactive, toRefs } from "vue";
```

JS:

```
export default {
  name: "App",
  setup() {
    const data: DataProps = reactive({
      girls: ["大脚", "刘英", "晓红"],
      selectGirl: "",
      selectGirlFun: (index: number) => {
        data.selectGirl = data.girls[index];
      },
    });
    const refData = toRefs(data);

    return {
      ...refData,
    };
  },
};
```

DOM:

```
<button
      v-for="(item, index) in girls"
      v-bind:key="index"
      @click="selectGirlFun(index)"
    >
      {{ index }} : {{ item }}
</button>
<div>你选择了【{{ selectGirl }}】为你服务</div>
```

---

# 生命周期

## 【1】对比

```
Vue2--------------vue3
beforeCreate  -> setup()
created       -> setup()
beforeMount   -> onBeforeMount
mounted       -> onMounted
beforeUpdate  -> onBeforeUpdate
updated       -> onUpdated
beforeDestroy -> onBeforeUnmount
destroyed     -> onUnmounted
activated     -> onActivated
deactivated   -> onDeactivated
errorCaptured -> onErrorCaptured
```

## 【2】使用

```
setup() {
    console.log("1-开始创建组件-----setup()");
    const data: DataProps = reactive({
      girls: ["大脚", "刘英", "晓红"],
      selectGirl: "",
      selectGirlFun: (index: number) => {
        data.selectGirl = data.girls[index];
      },
    });
    onBeforeMount(() => {
      console.log("2-组件挂载到页面之前执行-----onBeforeMount()");
    });

    onMounted(() => {
      console.log("3-组件挂载到页面之后执行-----onMounted()");
    });
    onBeforeUpdate(() => {
      console.log("4-组件更新之前-----onBeforeUpdate()");
    });

    onUpdated(() => {
      console.log("5-组件更新之后-----onUpdated()");
    });

    const refData = toRefs(data);

    return {
      ...refData,
    };
  },
```

## 【3】和 vue2 的生命周期也能混合使用

```
setup() {
    ... //内容不变
},
beforeCreate() {
  console.log("1-组件创建之前-----beforeCreate()");
},
beforeMount() {
  console.log("2-组件挂载到页面之前执行-----BeforeMount()");
},
mounted() {
  console.log("3-组件挂载到页面之后执行-----Mounted()");
},
beforeUpdate() {
  console.log("4-组件更新之前-----BeforeUpdate()");
},
updated() {
  console.log("5-组件更新之后-----Updated()");
},
```

---

# onRenderTracked()和 onRenderTriggered()钩子函数

## 【1】onRenderTracked 状态跟踪

只要页面中有`update`的情况，就会跟踪生成`event`。

```
import { .... ,onRenderTracked,} from "vue";

...

onRenderTracked((event) => {
  console.log("状态跟踪组件----------->");
  console.log(event);
});
```

## 【2】onRenderTriggered 状态触发

只有发生变化的值才会触发

```
onRenderTriggered((event) => {
  console.log("状态触发组件--------------->");
  console.log(event);
});
```

event:

```
- key 那边变量发生了变化
- newValue 更新后变量的值
- oldValue 更新前变量的值
- target 目前页面中的响应变量和函数
```

---

# watch

例子上说`methods`无法改变`document.title`，要用`watch`监听后改，但我尝试后都是可以的。

方法 1：methods:

```
chooseFn: (index: number) => {
    data.currentValue = data.deviceList[index];
    document.title = data.currentValue;
    console.log(document.title)
},
```

方法 2：watch:

```
watch(refData.currentValue, (newValue, oldValue) => {
    document.title = newValue;
});
return {
    ...
}
```

---

# 模块化

## 【1】模块化 JS 功能

假设有很多页面需要公用一个时间函数，这时先新建一个`ts`文件，实现这个功能。

useNowTime.ts

```
import {ref} from 'vue';

const nowTime = ref("00:00:00");
const getNowTime = () => {
  const now = new Date();
  const hour = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
  const minu =now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
  const sec =now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
  nowTime.value = hour + ":" + minu + ":" + sec;
  setTimeout(getNowTime, 1000);   //每一秒执行一次这个方法
};

export { nowTime, getNowTime}
```

引入：

```
<template>
  <div class="hello">
    <h1>{{nowTime}}</h1>
    <div @click="getNowTime">显示时间</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {nowTime, getNowTime} from '../hooks/useNowTime';
export default defineComponent({
  name: 'HelloWorld',
  setup() {
    return {
      nowTime,
      getNowTime
    }
  }
});
</script>
```

## 【2】模块化组件

随机图片展示：

useURLAxios.ts

```
import {ref} from 'vue';
import axios from 'axios';

function useUrlAxios(url: string) {
    const result = ref(null);
    const loading = ref(true);
    const loaded = ref(false);
    const error = ref(null);

    axios.get(url).then((res) => {
        loading.value = false;
        loaded.value = true;
        result.value = res.data;
    }).catch(e => {
        error.value = e;
        loading.value = false;
    })

    return {
        result,
        loading,
        loaded,
        error
    }
}

export default useUrlAxios;
```

使用：

```
<template>
  <div class="hello">
    <div v-if="loading">loading...</div>
    <img v-if="loaded" :src="result.message" />
  </div>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue';
import useUrlAxios from '../hooks/useURLAxios';
export default defineComponent({
  name: 'HelloWorld',
  setup() {
    const {result, loading , loaded} = useUrlAxios('https://dog.ceo/api/breeds/image/random')
    return {
      result,
      loading,
      loaded
    }
  }
});
</script>

```

---

# teleport

瞬间移动组件、独立组件。

## 【1】普通组件

Modal.vue

```
<template>
    <div>modal</div>
</template>

<script lang="ts">
export default {

}
</script>

<style>

</style>
```

app.vue 使用

```
<modal />
//...
import modal from "./components/Modal.vue";
const app = {
  name: "App",
  components: {
    modal,
  },
  //...
}
//...
```

## 【2】使用 teleport

更改 modal.vue

```
<template>
    <teleport to="#modal">
    <div>modal</div>
    </teleport>
</template>
```

在 html 中使用

```
<body>
  <div id="app"></div>
  <div id="modal"></div>
</body>
```

如果在`app.vue`中没使用`<modal />`组件的话，页面会保留`modal`的`dom`，但`modal`中的内容不会显示。

如果在`app.vue`中使用了`<modal/ >`组件 的话，页面会显`示modal`中的内容。

---

# Suspense 异步请求组件

## 【1】编写 AsyncShow.vue 异步返回数据的组件

```
<template>
  <h1>{{result}}</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    setup() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                return resolve({result: 'pengdan'})
            },2000);
        })
    }
})
</script>
```

## 【2】引用

```
import AsyncShow from "./components/AsyncShow.vue";

...

const app = {
  name: "App",
  components: { AsyncShow },
  setup() {
    return {};
  },
};

```

## 【3】使用

```
<div>
  <Suspense>
    <template #default>
      <AsyncShow />
    </template>
    <template #fallback>
      <h1>loading</h1>
    </template>
  </Suspense>
</div>
```

这里页面上会先显示 loading，2 秒钟后显示返回的数据。
