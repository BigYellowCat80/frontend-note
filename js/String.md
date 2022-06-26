

#### 方法

- indexOf
- lastIndexOf
- search （和indexOf不一样的地方是search的参数可以是正则）
- concat
- slice
- substring （跟slice一个意思）
- substr（mdn不推荐使用了）
- split
- replace(searchvalue, newvalue)（参数可以是正则）
- replaceAll（符合的全部替换）
- toUpperCase
- toLowerCase
- chatAt
- charCodeAt



#### **ES6新增**

- includes（IE不支持）
- startsWith（IE不支持）
- endsWith（IE不支持）



#### **实现includes**

```js
if (!String.prototype.includes) {
  String.prototype.includes = function (item) {
    const instance = this;
    return instance.indexOf(item) > -1
  }
}
```





