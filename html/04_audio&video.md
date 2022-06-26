

#### audio

##### 基本用法

```html
<audio src="./cat.mp3" controls>
  您的浏览器不支持html5的audio元素
</audio>
```

##### 兼容用法

一般包括mp3和ogg格式即可

```html
<audio controls>
  <source src="./cat.mp3"></source>
  <source src="./cat.ogg"></source>
  您的浏览器不支持html5的audio元素
</audio>
```



#### video

##### 基本用法

```html
<video src="./cat.mp4" controls poster="./cat.png">
  您的浏览器不支持html5的video元素
</video>
```

##### 兼容用法

一般包括mp4和webm格式即可

```html
<video controls poster="./cat.png">
  <source src="./cat.mp4"></source>
  <source src="./cat.webm"></source>
  您的浏览器不支持html5的video元素
</video>
```



#### video的属性

controls  autoplay  loop  poster  muteds  preload



**preload**

- auto  一旦页面加载，则开始加载音频/视频
- metadata  当页面加载后仅加载音频/视频的元数据
- none  页面加载后不应加载音频/视频