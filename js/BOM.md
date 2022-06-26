#### Screen

##### 属性

```js
screen.availHeight
screen.height
screen.availWidth
screen.width
```



#### Location

##### 属性

```js
href
protocol
host
pathname
search
hash
hostname
prot
origin
```



**简单记忆**

```js
protocol + // + host + pathname + search + hash

host = hostname + port
orgin = protocol + // + host
```



##### 方法

```js
location.reload([deep]) // deep如果为真 从服务器重新加载 否则可以从缓存中读取
location.assign(URL) // 带上协议
location.replace(URL) // 不可返回 当前URL不会被保存在会话的历史History中
```



#### History

##### 方法

```js
history.back()
history.forward()
history.go(-1)
```



#### Navigator

##### 属性

```js
navigator.userAgent // 判断用户是什么操作系统打开
"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36"

navigator.language // 用户偏好的语言
```

