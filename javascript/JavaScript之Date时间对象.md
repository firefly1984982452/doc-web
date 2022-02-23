---
title: JavaScript之Date时间对象
date: 2020-06-05 10:19:32
categories:
- program
---

# 一、date 获取日期时间的所有方法

```
var date = new Date();
let print =
`新建时间对象：new Date()：${date}\n` +
`时间戳：+date：${+date}\n` +
`时间戳：date.getTime：${date.getTime}\n` +
`获取年：date.getFullYear()：${date.getFullYear()}\n` +
`获取月：date.getMonth()+1：${date.getMonth()+1}\n` +
`获取日：date.getDate()：${date.getDate()}\n` +
`获取周几：date.getDay()：${['日', '一', '二', '三', '四', '五', '六'][date.getDay()]}\n` +
`获取时：date.getHours()：${date.getHours() > 10 ? date.getHours() : '0' + date.getHours()}\n` +
`获取分：date.getMinutes()：${date.getMinutes() > 10 ? date.getMinutes() : '0' + date.getMinutes()}\n` +
`获取秒：date.getSeconds()：${date.getSeconds() > 10 ? date.getSeconds() : '0' + date.getSeconds()}\n` +
`获取毫秒：date.getMilliseconds()：${date.getMilliseconds()}\n`;
console.log(print);
```

---

# 二、把时间戳转为时间（年月日时分秒）

```
var time = new Date();
var Y = time.getFullYear();
var m = time.getMonth() + 1;
var d = time.getDate();
var H = time.getHours();
var mi = time.getMinutes();
var s = time.getSeconds();
if(m < 10)  m = '0' + m;
if(d < 10) d = '0' + d;
if(H < 10) H = "0" + H;
if(mi < 10) mi = '0' + mi;
if(s < 10) s = "0" + s;
console.log(Y + "-" + m + "-" + d + " " + H + ":" + mi + ":" + s);
```

---

# 三、时间自定义格式化(如 yyyy-MM-dd)

```
var formatDatePD = function(t,str) {
  var obj = {
    yyyy:t.getFullYear(),
    yy:(""+ t.getFullYear()).slice(-2),
    M:t.getMonth()+1,
    MM:("0"+ (t.getMonth()+1)).slice(-2),
    d:t.getDate(),
    dd:("0" + t.getDate()).slice(-2),
    H:t.getHours(),
    HH:("0" + t.getHours()).slice(-2),
    h:t.getHours() % 12,
    hh:("0"+t.getHours() % 12).slice(-2),
    m:t.getMinutes(),
    mm:("0" + t.getMinutes()).slice(-2),
    s:t.getSeconds(),
    ss:("0" + t.getSeconds()).slice(-2),
    w:['日', '一', '二', '三', '四', '五', '六'][t.getDay()]
  };
  return str.replace(/([a-z]+)/ig,($1)=>{return obj[$1]})
}

formatDate(new Date(1409894060000), 'yyyy-MM-dd HH:mm:ss 星期w')
```

---

# 四、时间 String 化

- `toLocaleString`
- `toLocaleDateString`

```
new Date().toLocaleString(); // "2021/7/20下午2:57:36"
new Date().toLocaleDateString(); // "2021/7/20"
```

---

# 五、获取指定时间的时间戳

`Math.floor(new Date(Date.UTC(2020, 0, 1, 0, 0, 0)).getTime() / 1000)` // 2020/1/1 0:0:0 --> 1577808000

`Math.floor(new Date('2020-01-01 00:00:00').getTime()/1000)` // 2020/1/1 0:0:0 --> 1577808000

`Date.parse('2020-01-01 00:00:00')/1000` // 2020/1/1 0:0:0 --> 1577808000

---

# 六、获取当前时间戳

以下为秒数，如果要毫秒数就不要`/1000`

1. `Math.round(new Date().getTime()/1000)`

2. `Math.round((+ new Date())/1000)`

3. `Math.round(Date.now()/1000)`

4. `Math.round(Date.valueOf()/1000)`

---

# 七、两个时间戳相减所距时间

```
getTime(value = Math.round(Date.now() / 1000)) {
  let nowTimeStamp = Math.round(Date.now() / 1000);
  let reduceTimeStamp = nowTimeStamp - value;
  let day = Math.floor(reduceTimeStamp / 60 / 60 / 24);
  let hour = Math.floor((reduceTimeStamp / 60 / 60) % 24);
  let minute = Math.floor((reduceTimeStamp / 60) % 60);
  let seconds = reduceTimeStamp % 60;
  hour = hour > 9 ? hour : "0" + hour;
  minute = minute > 9 ? minute : "0" + minute;
  seconds = seconds > 9 ? seconds : "0" + seconds;
  let result = hour + ":" + minute + ":" + seconds;
  console.log("两个时间段相距：" + day + "天 " + result);
  return result;
},
```

---

# 八、计算今天是今年的进度的多少

```
getPlan(){
  let now = new Date();
  let year = now.getFullYear();
  let yearStartTimeStamp = Math.floor(new Date(year + '/01/01 00:00:00').getTime()/1000);
  let yearEndTimeStamp = Math.floor(new Date(year + '/12/31 23:59:59').getTime()/1000);
  let nowTimeStamp = Math.floor(now.getTime()/1000);
  let reduceTotal = yearEndTimeStamp - yearStartTimeStamp;
  let reduceNow = nowTimeStamp - yearStartTimeStamp;
  let plan = parseFloat(((reduceNow/reduceTotal)*100).toFixed(2));
  console.log('对今年来说，今天的进度是：'+plan)
},

<!-- 其它进度 -->

// 对于80岁，你目前的进度是多少
getAgePlan () {
  let now = new Date();
  let year = 1996;
  let startBirthDay = Math.floor(new Date(year + '-11-18 00:00:00').getTime()/1000);
  let endBirthDay = Math.floor(new Date((year + 80) +'-11-18 23:59:59').getTime()/1000);
  let nowTimeStamp = Math.floor(now.getTime()/1000);
  let reduceTotal = endBirthDay - startBirthDay;
  let reduceNow = nowTimeStamp - startBirthDay;
  let plan = parseFloat(((reduceNow/reduceTotal)*100).toFixed(2));
  console.log('对于80岁，你目前的进度是:' +plan)
},
// 你目前的年龄相当于时钟上的几点几分
getAge24Time() {
  let minutesTotal = 24*60;
  let agePlan = Math.ceil(minutesTotal * (29.43/100));
  console.log(agePlan);
  let hour = Math.trunc(agePlan/60);
  let minute = agePlan%60;
  console.log('你目前的年龄相当于时钟上的'+hour+'点'+minute+'分')
}
```

---

# 九、国际化相对时间格式化：Intl.RelativeTimeFormat

```
const rtf = new Intl.RelativeTimeFormat("zh", { numeric: "auto" });
console.log(rtf.format(-3.14, "second"));
console.log(rtf.format(3, "day"));
console.log(rtf.format(-1, "day"));
console.log(rtf.format(-1, "quarter"));
console.log(rtf.format(-1, "month"));
console.log(rtf.format(-1, "week"));
console.log(rtf.format(-1, "day"));
console.log(rtf.format(-1, "hour"));
console.log(rtf.format(-1, "minute"));
console.log(rtf.formatToParts(3, "week"));
```
