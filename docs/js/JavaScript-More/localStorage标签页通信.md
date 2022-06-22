# localStorage 标签页通信

page1

```js
localStorage.setItem('send', 'sendValue');
```

page2

```js
window.addEventListener('storage', (e) => {
  console.log(e);
});
```
