---
title: antv基础配置与示例
date: 2020-09-09 18:35:18
categories: 
- program
---

# 链接

[官方链接-G2快速上手](https://g2.antv.vision/zh/docs/manual/getting-started)
[官方链接-G2Plot快速上手](https://g2plot.antv.vision/zh/docs/manual/getting-started)
[G2-github](https://github.com/antvis/G2)
[G2Plot-github](https://github.com/antvis/g2plot)

# G2基础示例

基础条形图

![image](https://wx4.sinaimg.cn/mw1024/0069qZtTgy1gikkhg5ipwj30rg0gk3ze.jpg)

```
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
	<script src="https://gw.alipayobjects.com/os/lib/antv/g2/4.0.15/dist/g2.min.js"></script>
	<title>antv G2</title>
</head>
<body>
	<div id="container"></div>
	<script>
		const data1 = [
			{ type: '汽车', value: 34 },
			{ type: '建材家居', value: 85 },
			{ type: '住宿旅游', value: 103 },
			{ type: '交通运输与仓储邮政', value: 142 },
			{ type: '建筑房地产', value: 251 },
			{ type: '教育', value: 367 },
			{ type: 'IT 通讯电子', value: 491 },
			{ type: '社会公共管理', value: 672 },
			{ type: '医疗卫生', value: 868 },
			{ type: '金融保险', value: 1234 },
		];
		
		const chart = new G2.Chart({
			container: 'container',
			autoFit: true,
			height: 500,
		});
		console.log(G2,chart)
		chart.data(data1);
		chart.scale({
		value: {
			max: 1400,
			min: 0,
			alias: '销量（百万）',
		},
		});
		chart.axis('type', {
		title: null,
		tickLine: null,
		line: null,
		});

		chart.axis('value', {
		label: null,
		title: {
			offset: 30,
			style: {
			fontSize: 12,
			fontWeight: 300,
			},
		},
		});
		chart.legend(false);
		chart.coordinate().transpose();
		chart
		.interval()
		.position('type*value')
		.size(26)
		.label('value', {
			style: {
			fill: '#8d8d8d',
			},
			offset: 10,
		});
		chart.interaction('element-active');
		chart.render();
	</script>
</body>
</html>
```

# G2Plot基础示例

基础条形图-滚动条

![image](https://wx1.sinaimg.cn/mw1024/0069qZtTgy1gikkgwc35qj30r40fvwf0.jpg)

```
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
	<script src="https://unpkg.com/@antv/g2plot@1.1.26/dist/g2plot.js"></script>
	<title>antv g2pro</title>
</head>
<body>
	<div id="canvas"></div>
	<script>
		const data = [
		{ country: 'Asia', year: 17510, value: 502,},
		{ country: 'Asia1', year: 18200, value: 635,},
		{ country: 'Asia2', year: 12200, value: 635,},
		{ country: 'Asia3', year: 18200, value: 635,},
		{ country: 'Europe', year: 17350, value: 163,},
		{ country: 'Europ3e', year: 17350, value: 163,},
		{ country: 'Eur2ope', year: 17350, value: 163,},
		{ country: 'Euro2pe', year: 17350, value: 163,},
		{ country: 'Eurwope', year: 17350, value: 163,},
		{ country: 'Eure2ope', year: 17350, value: 163,},
		{ country: 'Eu1rope', year: 18100, value: 203,},
		];
		const barPlot = new G2Plot.Bar(document.getElementById('canvas'), {
			forceFit: true,
			title: {
				visible: true,
				text: '基础条形图 - 滚动条',
			},
			data,
			meta: {
				year: {
				alias:'年份',
				range: [0, 1],
				},
				value: {
				alias: '数量',
				formatter:(v)=>{return `${v}个`}
				}
			},
			xField: 'year',
			yField: 'country',
			xAxis: {
				visible: true,
				label: {
				autoHide: true,
				},
			},
			yAxis: {
				visible: true,
				label: {
				autoHide: true,
				},
			},
			label: {
				visible: false,
			},
			interactions: [
				{
				type: 'scrollbar',
				cfg: {
					type: 'vertical',
				},
				},
			],
		});
		barPlot.render();
	</script>
</body>
</html>
```