# CSS - @supports

支持

`supports`命令用来判断浏览器是否支持某项 CSS 功能。

例：

当浏览器支持`text-overflow: '***';`时末尾便显示`'***'`，不支持时显示`'...'`。

!> 仅火狐支持`text-overflow: '***';`，其它浏览均会显示`'...'`

```css
.info {
  width: 300px;
  height: 50px;
  border: solid 1px #222;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: "***";
}

@supports (text-overflow: "***") {
  .info {
    text-overflow: "***";
  }
}

@supports not (text-overflow: "***") {
  .info {
    text-overflow: ellipsis;
  }
}
```

```html
<div class="info">"these vulnerabilities occur when untrusted data is sent"</div>
```
