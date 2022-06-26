## Set遍历


```javascript
var set = new Set([1, 2, 3, 4, 5]);
```

### 方式1 forEach
```javascript
set.forEach(ele => { console.log(ele); });
```


### 方式2 for...of
```javascript
for (let i of set) {
  console.log(i);
}

for (let i of set.keys()) {
  console.log(i);
}

for (let i of set.values()) {
  console.log(i);
}

都输出

1
2
3
4
5
```


### 方式3 for...of
```javascript
for (let i of set.entries()) {
  console.log(i);
}

输出

(2) [1, 1]
(2) [2, 2]
(2) [3, 3]
(2) [4, 4]
(2) [5, 5]
```