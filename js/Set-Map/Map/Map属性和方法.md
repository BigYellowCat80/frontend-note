## Map属性和方法


### 1. 属性 [size]
```javascript
Map.prototype.size
```


### 2. 方法 [set, delete, has, clear, get, entries, keys, values, forEach]
```javascript
let map = new Map();
map.set('apple', 50);
map.set('apple', 50);
map.set('banana', 20);
map.set('watermelon', 300);
console.log(map);
// Map(3) {"apple" => 50, "banana" => 20, "watermelon" => 300}


console.log(map.entries());
// MapIterator {"apple" => 50, "banana" => 20, "watermelon" => 300}

console.log(map.keys());
// MapIterator {"apple", "banana", "watermelon"}

console.log(map.values());
// MapIterator {50, 20, 300}
```