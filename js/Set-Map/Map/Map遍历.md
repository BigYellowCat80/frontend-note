## Map遍历


```javascript
let map = new Map();
map.set('apple', 50);
map.set('apple', 50);
map.set('banana', 20);
map.set('watermelon', 300);

console.log(map);
Map(3) {"apple" => 50, "banana" => 20, "watermelon" => 300}
```

### 1. forEach
```javascript
map.forEach((value, key) => {
  console.log(key + ": " + value);
});
// apple: 50
// banana: 20
// watermelon: 300
```


### 2. for...of
```javascript
for (let i of map.keys()) {
  console.log(i);
}
// apple
// banana
// watermelon


for (let i of map.values()) {
  console.log(i);
}
// 50
// 20
// 300
```


### 3. for...of
```javascript
for (let i of map) {
  console.log(i);
}

for (let i of map.entries()) {
  console.log(i);
}

都输出

// (2) ["apple", 50]
// (2) ["banana", 20]
// (2) ["watermelon", 300]
```