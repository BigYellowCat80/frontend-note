## Set和Array互转


### 1. 数组转集合
```javascript
var arr = [1, 2, 3, 4, 5];
var set = new Set(arr);

console.log(set); // Set(5) {1, 2, 3, 4, 5}
```

### 2. 集合转数组
```javascript
方法1 
var set = new Set([1, 2, 3, 4, 5]);
var arr = [...set];
console.log(arr); // (5) [1, 2, 3, 4, 5]

方法2
Array.from(set)
```