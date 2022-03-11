---
title: 微信小程序获取openID（纯前端）
date: 2020-06-29 16:49:32
categories: 
- program
---

# 简介

- 无云开发、无后台接口。
- 使用uniapp开发，原理与原生类似。

# 源码

[源码地址](https://github.com/firefly1984982452/wechat-remind/blob/master/pages/index/index.vue)

# 代码

```
<template>
	<view class="page">
		<button type="primary" class="button" plain="true" @click="requestSubscribeMessage" size="mini">授权</button>
		<button type="primary" class="button" plain="true" @click="send" size="mini">发送消息模板</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				openID: '',
				userCode:'',
				token:'',
			}
		},
		onLoad() {
			this.login();
			this.getOpenid();
			this.getToken();
		},
		methods: {
			// 获取用户信息
			login(){
				uni.login({
					provider: 'weixin',
					success:  loginRes => {
						console.log(loginRes.code);
						this.userCode = loginRes.code;
					}
				});
			},
			// 获取openID
			async getOpenid(){
				let params = {
					appid:'wx8bda0c57123111e7',
					secret: 'ccc431411276f087b41f680275e457a8',
					js_code: this.userCode,
					grant_type: 'authorization_code',
				}
				await uni.request({
					url: 'https://api.weixin.qq.com/sns/jscode2session',
					data: params,
					success: (res) => {
						console.log(res.data);
						this.openID = res.data.openid;
						console.log('openID:'+this.openID)
					}
				});
			},
			// 获取token
			async getToken(){
				let params = {
					appid:'wx8bda0c57123111e7',
					secret: 'ccc431411276f087b41f680275e457a8',
					grant_type: 'client_credential',
				}
				await uni.request({
					url: 'https://api.weixin.qq.com/cgi-bin/token',
					data: params,
					success: (res) => {
						this.token = res.data.access_token;
					}
				});
			},
			// 获取授权
			requestSubscribeMessage(){
				wx.requestSubscribeMessage({
					tmplIds: ['yKXlE3VZ3d02VnvecwikrZedfVX3zpkFWuoeZRZ8r-o'],
					success (res) {
						console.log(res)
						uni.showModal({
							title: '授权成功!',
							showCancel:false
						})
					},
					fail (res) {
						console.log(res)
						uni.showModal({
							title: '授权失败!',
							showCancel:false
						})
					}
				})

			},
			// 发送消息模板
			send(){
				let params = {
					touser: this.openID,
					template_id: "yKXlE3VZ3d02VnvecwikrZedfVX3zpkFWuoeZRZ8r-o",
					data: {
						"thing8": {
							"value": "value"
						},
						"time13": {
							"value": "value"
						}
					},
					page:'index'
				}
				uni.request({
					url: 'https://api.weixin.qq.com/cgi-bin/message/subscribe/send?access_token=' + this.token,
					data: JSON.stringify(params),
					method: "POST",
					success: (res) => {
						console.log(res.data.errcode);
						if (res.data.errcode == 0) {
							this.save();
						} else {
							uni.showModal({
								title: '添加提醒失败，请授权!',
								showCancel:false
							})
						}
					},
					fail: (res) => {
						uni.showModal({
							title: '添加提醒失败，'+JSON.parse(res),
							showCancel:false
						})
					}
				});
 
			},
		},
	}
</script>

<style>
</style>

```