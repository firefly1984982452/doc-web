---
title: vue2+mui.js完成移动端微信支付
date: 2018-04-16 14:19:54
categories:
- program
---

> 这个测试是建立在 DCould 公司上的，如果支付，也是 DCould 公司收的钱哦

# 工具

`HBuilder`、`mui.js`

# 引入 mui.js

将`mui.js`放到根目录下的`js文件夹`里，然后在`index.html`中引入 `<script src="js/mui.js" type="text/javascript" charset="utf-8"></script>`

# 代码

在支付的 vue 页面写：

首先添加这个配置在 data 里面 `PAYSERVER:'http://demo.dcloud.net.cn/payment/?payid=wxpay&total=1'`

然后用点击事件或其它事件调用下面的方法

```
function pay(){
	var that = this;
	plus.payment.getChannels(function(channels){
		for(var i = 0;i<channels.length;i++){
			var channel = channels[i];
			if(channel.id == 'wxpay'){
				var xhr=new XMLHttpRequest();
				xhr.onreadystatechange=function(){
					switch(xhr.readyState){
						case 4:
						if(xhr.status==200){
							var order=xhr.responseText;
							plus.payment.request(channel,order,function(result){
								plus.nativeUI.alert('支付成功：感谢你的支持，我们会继续努力完善产品。',function(){
									back();
								},'捐赠');
							},function(e){
								plus.nativeUI.alert('更多错误信息请参考支付(Payment)规范文档：http://www.html5plus.org/#specification#/specification/Payment.html', null, '支付失败：'+e.code);
							});
						}else{
							plus.nativeUI.alert('获取订单信息失败！', null, '捐赠');
						}
						break;
						default:
						break;
					}
				}
				xhr.open('GET',that.PAYSERVER);
				xhr.send();
				return;
			}
		}
	})
}
```

# 打包

`npm run build` 打包之后把`dist`文件夹拖到 HBuilder 里面，右键转换成 App 项目，然后直接连接手机测试

# 发行

前面就说了，是 DCould 公司写的后台,所以打包的时候是没有 DCould 公司的微信支付 app_id 的，所以只能用手机测试。

如果我们所有的手续都办好了，后台前台都写好了，就可以打包发行了，要在 SDK 配置里面加上 app_id 哦，不然打包出来的也不能用的。
