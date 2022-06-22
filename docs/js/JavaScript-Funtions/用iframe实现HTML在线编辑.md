# 用 iframe 实现 HTML 在线编辑

```html
<!DOCTYPE html>
<html>
  <head> </head>

  <body>
    <textarea name="" id="data" cols="100" rows="20">
      <!DOCTYPE html>
        <html>
          <head>
          </head>
          <body>
            <b>3</b>
          </body>
          <script>console.log(1)</script>
        </html>
    </textarea>
    <button onclick="run()">运行</button>
    <hr />
    <iframe name="hello" style="width: 100%; height: 100%"></iframe>

    <script>
      function run() {
        var outDom = window.hello.document;
        outDom.open();
        var inDom = document.getElementById('data');
        outDom.write(inDom.value);
        outDom.close();
      }
    </script>
  </body>
</html>
```
