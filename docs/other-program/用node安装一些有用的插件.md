#  用node安装一些有用的插件

---

## 虚拟服务器

我最近使用vue写项目，打包之后只能在服务器上预览效果，而我又没有服务器，此时就可以用这个工具了。

```bash
npm install live-server -g
```

然后到需要的目录下输入命令行

```bash
live-server
```

## 跨域代理

像我们一般做测试用一些外部的接口数据，比如淘宝开放的一些优惠券接口，可是如果我们用浏览器访问是会跨域的，这时使用我们的代理，可以简单的先看到效果。

```bash
proxy
```

（使用axios可以更简单的处理跨域问题）

## 将md文件直接在浏览器上预览效果

```bash
npm install -g i5ting_toc
```

```bash
i5ting_toc -f 文件名 -o
```

浏览器会自动打开！ (文件夹中会多一个preview的文件夹，生成html就在里面)

## 更新node

```bash
npm install node
```

win10

---

## vw


1. `npm install postcss-px-to-viewport --save-dev`

2. 在`vue.config.js`设置

```
module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-px-to-viewport")({
            unitToConvert: "px", // 需要转换的单位，默认为"px"
            viewportWidth: 1920, // 视窗的宽度，对应pc设计稿的宽度，一般是1920
            // viewportHeight: 1080,// 视窗的高度，对应的是我们设计稿的高度
            unitPrecision: 6, // 单位转换后保留的精度
            propList: [
              // 能转化为vw的属性列表
              "*"
            ],
            viewportUnit: "vw", // 希望使用的视口单位
            fontViewportUnit: "vw", // 字体使用的视口单位
            selectorBlackList: [], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。cretae
            minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
            mediaQuery: false, // 媒体查询里的单位是否需要转换单位
            replace: true // 是否直接更换属性值，而不添加备用属性
          })
        ]
      }
    }
  },
}
```
3. 内联样式
   
vscode下载`px-to-vw`,配置`viewportWidth`参数为设计稿尺寸如1920，代码里面选中尺寸，`alt+Z`就可以自动转化为vw