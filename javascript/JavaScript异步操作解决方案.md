---
title: JavaScript异步操作解决方案
date: 2018-05-10 13:39:15
categories: 
- program
---

>需求是这样的：`for`循环13次一个接口请求，请求完之后再遍历所有的数据，用另一个数组接收部分数据

```
getFloor(){
	for(let i = 1; i < 14; i++) {
    this.$ajax.post(this.$httpConfig.homefLoor + '?page=' + i).then((res) => {
			this.allFloor.push(res.data.data);
			console.log(1)
		}).catch((err) => {
			this.$message.error(err);
		});
   }
	for(let i = 1; i < 14; i++){
		console.log(2)
		this.arr[i] = this.allFloor[i].goods_news;
	}
}
```

但是在上面代码中，它会先执行下面的for循环，再执行上面的for循环，原因就是上面的for循环里面有网络请求，`then`是异步的。

# Async/await

- 语法

```
async function(){
	await ajax...
}
```

- 实现

```
async getFloor(){
	for(let i = 1; i < 14; i++) {
    await this.$ajax.post(this.$httpConfig.homefLoor + '?page=' + i).then((res) => {
			this.allFloor.push(res.data.data);
		}).catch((err) => {
			this.$message.error(err);
		});
   }
	for(let i = 1; i < 14; i++){
		this.arr[i] = this.allFloor[i].goods_news;
	}
},
```

# callback回调

- 语法

```
function f1(callback) {
  // ...
  callback();
}

function f2() {
  // ...
}

f1(f2);
```

- 实现

```
this.setback(this.setArr);

setback(callback){
	this.$ajax.post(this.$httpConfig.homefLoor + '?page=' + 11).then((res)=>{
		console.log('111')
		callback(res.data.data)
	}
	).catch((err) => {
		this.$message.error(err);
	});
},
setArr(data){
	
	console.log('222',data)
},
```