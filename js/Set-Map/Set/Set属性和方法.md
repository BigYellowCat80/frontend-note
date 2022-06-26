## Set属性和方法


### 1. 属性 [size]
```javascript
Set.prototype.size 返回Set对象中的值的个数
```


### 2. 方法 [add, delete, has, clear, entries, keys, values, forEach]
```javascript
2.1 Set.prototype.add(value)
在Set对象尾部添加一个元素 返回该Set对象 

2.2 Set.prototype.clear()
移除Set对象内的所有元素

2.3 Set.prototype.has(value)
返回一个布尔值 表示该值在Set中存在与否

2.4 Set.prototype.delete(value)

2.5 Set.prototype.entries()
返回一个键值一样的迭代器对象SetIterator

2.6 Set.prototype.keys() // 返回所有值的一个迭代器对象SetIterator
2.7 Set.prototype.values() // 返回所有值的一个迭代器对象SetIterator


2.8 Set.prototype.forEach(callback)

```


### 3. 特殊情况
```javascript
new创建的对象
set.add(a = new String('pig'));
set.add(b = new String('pig'));
console.log(set);
// Set(5) {2, 3, 4, String, String}
set.delete(a);
set.delete(b);
```

```javascript
set.add(NaN);
set.add(NaN);
console.log(set); // Set(4) {2, 3, 4, NaN}
// 尽管 NaN != NaN
```