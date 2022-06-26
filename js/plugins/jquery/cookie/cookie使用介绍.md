## cookie使用介绍 (服务器下使用)

### 1. 引入jquery


### 2. 引入jquery.cookie.js
```javascript
https://github.com/carhartl/jquery-cookie
```


### 设置
```javascript
$.cookie('name', 'value');

带有过期时间
$.cookie('name', 'value', {expires: 7});
如果未指定过期时间 则会在关闭浏览器或过期
```


### 读取
```javascript
$.cookie('name');

没有返回undefined
```


### 删除cookie
```javascript
$.cookie(name, null);

或者

$.removeCookie('name');
```