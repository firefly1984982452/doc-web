---
title: 百度地图API示例
date: 2020-09-08 16:50:17
categories: 
- program
---

# 链接

[官方链接](http://lbsyun.baidu.com/jsdemo.htm#a1_2)
[其它示例链接](https://blog.csdn.net/dosthing/article/details/85223254)

# 代码

注意：示例中的`<script />`中的`src`省略了`https:`，应写全`<script type="text/javascript" src="https://api.map.baidu.com/api?v=3.0&ak=0OWWSRyoeYuDcFPIdUN1aCupU0m2eAzZ"></script>`。

```
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
	<style type="text/css">
	body, html,#allmap {
		width: 100%;
		height: 100%;
		overflow: hidden;
		margin:0;
		font-family:"微软雅黑"; 
	}
	</style>
	<script type="text/javascript" src="https://api.map.baidu.com/api?v=3.0&ak=0OWWSRyoeYuDcFPIdUN1aCupU0m2eAzZ"></script>
	<title>Warm heart map</title>
</head>
<body>
	<div id="allmap"></div>
</body>
</html>
 
<script type="text/javascript">
	// 百度地图API功能
	var map = new BMap.Map("allmap");    // 创建Map实例
	var point = new BMap.Point(121.405196, 31.073719)
	map.centerAndZoom(point, 11);  // 初始化地图,设置中心点坐标和地图级别
	//添加地图类型控件
	map.addControl(new BMap.MapTypeControl({
		mapTypes:[
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
        ]}));	  
	map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
	map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
	var marker = new BMap.Marker(point);
	map.addOverlay(marker);
	setTimeout(()=>{
		map.removeOverlay(marker)
	},2000);
</script>
```