# 多媒体（Media）事件

- `onabort` 视频/音频终止加载。
- `oncanplay` 可以开始播放
- `oncanplaythrough` 可开始播放无需缓冲
- `ondurationchange` 时长已修改
- `onemptied` 当期播放列表为空
- `onended` 播放结束
- `onerror` 发生错误
- `onloadeddata` 加载当前帧
- `onloadedmetadata` 元数据加载完
- `onloadstart` 开始寻找指定视频
- `onpause` 已暂停
- `onplay` 开始播放
- `onplaying` 暂停或缓冲后重新开始播放
- `onprogress` 下载指定视频时播放
- `onratechange` 播放速度改变
- `onseeked` 重新定位了播放位置
- `onseeking` 重新定位视频
- `onstalled` 媒体数据不可用
- `onsuspend` 读取媒体数据终止
- `ontimeupdate` 播放位置发生改变
- `onvolumechange` 音量发生改变
- `onwaiting` 等待中，正在缓冲

<div class="example-box">
	<p style="font-size:20px;color:#f00;">
	打开<kbd>F12</kbd>查看视频播放信息
	</p>
	<video 
		autoplay 
		muted 
		controls 
		oncanplay="console.log('可以开始播放')" 
		oncanplaythrough="console.log('可开始播放无需缓冲')" 
		ondurationchange="console.log('时长已修改')" 
		onended="console.log('播放结束')" 
		onerror="console.log('发生错误')" 
		onloadeddata="console.log('加载当前帧')" 
		onloadedmetadata="console.log('元数据加载完')" 
		onloadstart="console.log('开始寻找指定视频')"
		onpause="console.log('已暂停')" 
		onplay="console.log('开始播放')" 
		onplaying="console.log('暂停或缓冲后重新开始播放')" 
		onprogress="console.log('下载指定视频时播放')" 
		onratechange="console.log('播放速度改变')" 
		onseeked="console.log('重新定位了播放位置')" 
		onseeking="console.log('重新定位视频')"
		onstalled="console.log('媒体数据不可用')" 
		onsuspend="console.log('读取媒体数据终止')" 
		ontimeupdate="console.log('播放位置发生改变')" 
		onvolumechange="console.log('音量发生改变')" 
		onwaiting="console.log('等待中，正在缓冲')"> <source src="https://www.w3school.com.cn/i/movie.mp4" type="video/mp4"> </video> <br /> <br />
</div>

```html
<video
  autoplay
  muted
  controls
  oncanplay="console.log('可以开始播放')"
  oncanplaythrough="console.log('可开始播放无需缓冲')"
  ondurationchange="console.log('时长已修改')"
  onended="console.log('播放结束')"
  onerror="console.log('发生错误')"
  onloadeddata="console.log('加载当前帧')"
  onloadedmetadata="console.log('元数据加载完')"
  onloadstart="console.log('开始寻找指定视频')"
  onpause="console.log('已暂停')"
  onplay="console.log('开始播放')"
  onplaying="console.log('暂停或缓冲后重新开始播放')"
  onprogress="console.log('下载指定视频时播放')"
  onratechange="console.log('播放速度改变')"
  onseeked="console.log('重新定位了播放位置')"
  onseeking="console.log('重新定位视频')"
  onstalled="console.log('媒体数据不可用')"
  onsuspend="console.log('读取媒体数据终止')"
  ontimeupdate="console.log('播放位置发生改变')"
  onvolumechange="console.log('音量发生改变')"
  onwaiting="console.log('等待中，正在缓冲')"
>
  <source src="https://www.w3school.com.cn/i/movie.mp4" type="video/mp4" />
</video>
```
