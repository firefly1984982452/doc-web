---
title: rollup.js基础使用笔记
date: 2020-11-13 18:50:17
categories: 
- program
---

[链接](https://www.imooc.com/article/262083)

rollup.js是Javascript的ES模块打包器，我们熟知的Vue、React等诸多知名框架或类库都通过rollup.js进行打包。

# 安装

```
npm i rollup -g
```

# 新建文件

src/a.js
```
const a = 1;
export default a;
```

src/main.js
```
import a from './a.js';
export default function(){
    console.log(a);
}
```

# 打包编译

```
<!-- 编译 -->
$ rollup src/main.js -f es

<!-- 编译并以ES模块输出 -->
$ rollup src/main.js -f es -o dist/bundle.js

<!-- 编译并以CommonJS模块输出 -->
$ rollup src/main.js --format cjs --output.file dist/bundle-cjs.js
```

`-f`参数是`--format`的缩写，它表示生成代码的格式。

- amd表示采用AMD标准，
- cjs为CommonJS标准，
- esm（或es）为ES模块标准.

# 验证打包结果

## CommonJS标准

```
$ node
> const m = require('./dist/bundle-cjs.js')
> m()
1 

```

## ES标准

```
$ node
> require('./dist/bundle.js')()
/Users/sam/Desktop/rollup-test/dist/bundle.js:7
export default main;
^^^^^^

SyntaxError: Unexpected token export
```