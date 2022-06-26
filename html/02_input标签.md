

#### type = "text"

```html
<input type="text" 
  minlength="3" 
  maxlength="18" 
  placeholder="username" 
  autocomplete="off" 
  autofocus 
  readonly 
  disabled
  pattern="[0-9]{6}"
>
```



#### type = "file"

只接受图片文件

```html
<input type="file" accept="image/*">
```

只接受jpg和png图片

```html
<input type="file" accept="image/jpg,image/png">
```

只接受音视频文件

```html
<input type="file" accept="audio/*|video/*">
```





#### type其他属性值

color  time  month  week  datetime-local  range  tel email..

