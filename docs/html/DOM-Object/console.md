# DOM console 对象

## 链接

- [学习链接 1](https://markodenic.com/use-console-log-like-a-pro/)
- [学习链接 2](https://segmentfault.com/a/1190000004528137)
- [效果预览](https://firefly1984982452.github.io/my-web-page/console.html)
- [源码](https://github.com/firefly1984982452/my-web-page/blob/master/console.html)

## 方法及属性

- clear：清除
- %c：样式更改
- %s：字符串替换
- %i、%d：整数替换
- %o、%O：对象替换
- info、error、warn：模式
- count：次数
- dir、dirxml：属性的交互列表
- table：过滤筛选
- assert：失败时才显示的信息
- time：时间差
- group：组
- trace：追踪根源
- profile：性能分析

## 源码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <h1>打开<kbd>F12</kbd>查看console控制台信息</h1>
    <script>
      console.clear();
      console.log('%c 【clear】', 'font-size: 2em;color:#f00');

      console.log('%c 【%c、%s、%i、%d、%o、%O】', 'font-size: 2em;color:#f00');
      console.log('%d + %i = %s', '3', 2, 'hello');
      console.log('%o和%O都是个对象', { a: 3 }, { a: 4 });
      console.log('%c 自定义样式如：ERROR', 'color:#0f0');
      console.log('\n');
      console.log('\n');

      console.log('%c 【info、error、warn】', 'font-size: 2em;color:#f00');
      console.info('info【firefox浏览器下有明显样式变化】');
      console.error('error');
      console.warn('warn');
      console.log('\n');
      console.log('\n');

      console.log('%c 【count】', 'font-size: 2em;color:#f00');
      console.count('a');
      console.count('a');
      console.count('b');
      console.log('\n');
      console.log('\n');

      console.log('%c 【dir、dirxml】', 'font-size: 2em;color:#f00');
      console.log({ f1: 'foo', f2: 'bar' });
      console.dir({ f1: 'foo', f2: 'bar' });
      console.log(body);
      console.dirxml(body);
      console.dir(body);
      console.log('\n');
      console.log('\n');

      console.log('%c 【table】', 'font-size: 2em;color:#f00');
      var arr = [
        { name: 'a', number: 89 },
        { name: 'b', number: 73 },
        { name: 'c', number: 454 },
        { name: 'd', number: 2436 },
      ];
      console.table(arr);
      console.table(arr, ['name']);
      console.log('\n');
      console.log('\n');

      console.log('%c 【assert】', 'font-size: 2em;color:#f00');
      console.assert(true, '条件成立时不会显示');
      console.assert(false, '条件不成立时才会显示');
      console.log('\n');
      console.log('\n');

      console.log('%c 【time】', 'font-size: 2em;color:#f00');
      console.time('时间差');
      var array = new Array(1000);
      for (var i = array.length - 1; i >= 0; i--) {
        array[i] = new Object();
      }
      console.timeEnd('时间差');
      console.log('\n');
      console.log('\n');

      console.log('%c 【group】', 'font-size: 2em;color:#f00');
      console.group('father');
      console.log('test');
      console.group('child');
      console.log('test-child');
      console.groupEnd('child');
      console.groupEnd('father');

      console.groupCollapsed('collapsed');
      console.log('test-collapsed');
      console.error('error');
      console.groupEnd();
      console.log('\n');
      console.log('\n');

      console.log('%c 【trace】', 'font-size: 2em;color:#f00');
      function fn1() {
        function fn2() {
          (() => {
            console.trace('fn1-fn2');
          })();
        }
        fn2();
      }
      fn1();
      console.log('\n');
      console.log('\n');

      console.log('%c 【profile】', 'font-size: 2em;color:#f00');
      console.profile('性能分析器');
      (() => {
        for (var i = 0; i < 10; i++) {}
        for (var i = 0; i < 190; i++) {}
      })();
      console.profileEnd();
      console.log('\n');
      console.log('\n');
    </script>
  </body>
</html>
```
