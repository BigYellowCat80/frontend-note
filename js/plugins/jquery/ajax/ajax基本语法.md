## ajax基本语法


### 基本请求方式
```javascript
$.ajax({
  type: 'get',
  url: "",
  data: {},
  success: function(data) {console.log(data);},
  error: function(msg) {console.log(msg);},
});
```


### 其他请求方式
```javascript
$.get()
$.post()
$.fn.load()
```