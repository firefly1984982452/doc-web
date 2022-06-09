# CSS - counter 计数器

- [MDN-counter](<https://developer.mozilla.org/zh-CN/docs/Web/CSS/counter()>) [MDN-counters](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters) [其它博客](https://blog.csdn.net/lhjuejiang/article/details/79823803)

## 【1】属性

- `counter-reset`：重置。
- `counter-increment`：递增。
- `counter-set`：暂时无用。

### 【1.1】counter-reset：重置

参数：

- `name`：名称（必填）。
- `start`：从哪个数字开始计数（非必填），默认为 0。

例子：

```css
<style>
    p{counter-reset:count 4;}
    p:after{
        content:counter(count);
    }
</style>

<p>3的后面是：</p>
```

显示：

```
3的后面是：4
```

### 【1.2】counter-increment：递增

（`counter-increment`可以写在父元素上，也可以写在子元素上。）

参数：

- `name`：名称（必填）。
- `number`：递增数量（非必填），默认为 1。

例子：

```css
<style>
    p{counter-reset:count 3; counter-increment:count;}
    p:after{
        content:counter(count);
    }
</style>

<p>3的后面是：</p>
```

显示：

```
3的后面是：4
```

## 【2】函数

函数：

- `counter`
- `counters`

### 【2.1】counter

参数：

- `name`：名称（必填）。
- `style`：数字的其它样式（非必填），如罗马数字等。

例子：

```css
<style>
    p{counter-reset:count 1 count1 3; counter-increment:count 2 count1}
    p:after{
        content:counter(count) counter(count1);
    }
</style>

<div>
    <p>33的后面是：</p>
    <span></span>
</div>

```

显示：

```
33的后面是：34
```

### 【2.2】counters

写法：

```css
counters(name, string, style) string
```

参数：

- `name`：名称（必填）。
- `string`：字符（必填）。
- `style`：数字的其它样式（非必填），如罗马数字等。

例子：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Demo</title>
    <style>
      li {
        list-style: none;
      }

      .father {
        padding-left: 20px;
        counter-reset: countS;
      }

      .son:before {
        content: counters(countS, "-") ".";
        counter-increment: countS;
      }
    </style>
  </head>

  <body>
    <ul class="father">
      <li class="son">
        唐代
        <ul class="father">
          <li class="son">李白</li>
          <li class="son">杜甫</li>
          <li class="son">白居易</li>
        </ul>
      </li>
      <li class="son">
        宋代
        <ul class="father">
          <li class="son">
            苏门三父子
            <ul class="father">
              <li class="son">苏洵</li>
              <li class="son" style="display: none;">苏轼</li>
              <li class="son">苏辙</li>
            </ul>
          </li>
          <li class="son">辛弃疾</li>
          <li class="son">李清照</li>
        </ul>
      </li>
      <li class="son">元代</li>
      <li class="son">明代</li>
    </ul>
  </body>
</html>
```

结果：

![image](https://s1.ax1x.com/2022/03/14/bOufKg.jpg)

## 【3】其它

- `display`的值为`none`或`hidden`时，不会增加数值；
- 属性和函数都可以命名多个，中间留空格即可。
