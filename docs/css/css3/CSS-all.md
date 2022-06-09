# CSS - all 级联和继承

```css
<style>
  section {
    color: blue;
    font-family: sans-serif;
    font-weight: bold;
  }

  .widget {
    all: initial;
  }
</style>
```

```html
<section>
  <p>This is a section!</p>

  <aside class="widget">
    <p>This is a little widget.</p>
  </aside>
  <section></section>
</section>
```
