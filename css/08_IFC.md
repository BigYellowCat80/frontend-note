

#### 让块级元素水平居中

父元素

```css
text-align: center;
```

子元素

```css
display: inline-block;
```





#### 让块级元素垂直居中

父元素

```css
.parent {
  background: orange;
  width: 200px;
  height: 200px;
  line-height: 200px;
}
```

子元素

```css
.child {
  line-height: initial;
  display: inline-block;
  vertical-align: middle;
  background: #f44;
}
```

html

```html
<div class="parent">
  <div class="child">
    Two things define you: Your patience when you have nothing,
    and your attitude when you have everything.
  </div>
</div>
```





#### 让行内元素垂直居中

父元素

```css
div {
  background: orange;
  height: 100px;
}

div::after {
  content: "";
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
```

子元素

```css
div span { background: #f44; }
```

html

```html
<div>
  <span>html</span>
  <span>javascript</span>
</div>
```

