

#### 方法

##### 原数组改变

- pop shift unshift shift reverse sort splice

##### 原数组不变

- join slice concat indexOf lastIndexOf valueOf toString

##### 高阶

- forEach map filter reduce reduceRight some every

##### 构造函数上

- Array.isArray

##### ES6新增

includes  find  findIndex  fill  copyWithin  flat  keys  values  entries

Array.from  Array.of



#### 数值数组排序的3种方法

- sort传参
- 冒泡排序
- 插入排序

```js
// 冒泡排序
function bubbleUp(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]] // 交换值
      }
    }
  }
  return arr
}

// 插入排序
function insertUp(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let n = i;
    while (n >= 0 && arr[n] > arr[n + 1]) {
      [arr[n], arr[n + 1]] = [arr[n + 1], arr[n]];
      n--
    }
  }
  return arr
}
```



#### 判断一个对象是否为数组的4种方法

```js
Array.isArray
[] instanceof Array
[].constructor === Array
Object.prototype.toString.call([]) === '[object Array]'
```



#### 类数组转数组的3种方法

```js
Array.from
[].slice.call(obj)
[...obj]
```



#### for in遍历数组时的优势

过滤掉稀疏数组的undefined，尽管会遍历原型链上的属性，可以使用hasOwnProperty判断

```js
const arr = [1, 2];
arr[99] = 100;
console.log(arr); // (100) [1, 2, empty × 97, 100]

for (let i in arr) { console.log(arr[i]); }
// 1
// 2
// 100
```



#### 数组反序的3种方法

- reverse
- 两边交换值
- 新增数组unshift进去

```js
const arr = ['cat', 'a', 'is', 'kimi'];
function reverseArray(arr) {
  const result = [];
  for (let item of arr) { result.unshift(item) }
  return result
}
console.log(reverseArray(arr)); // (4) ["kimi", "is", "a", "cat"]
```



#### 数组去重的4种方法

- Set
- 属性覆盖
- includes
- indexOf

```js
// 属性覆盖
const arr = [1, 1, 2, 2, 3, 4, 5, 5];
function uniqueArray(arr) {
  const obj = {};
  for (let item of arr) {
    obj[item] = item
  }
  return Object.values(obj)
}
console.log(uniqueArray(arr)); // (5) [1, 2, 3, 4, 5]

// includes
const arr = [1, 1, 2, 2, 3, 4, 5, 5];
function uniqueIncludes(arr) {
  const result = [];
  for (let item of arr) {
    if (!result.includes(item)) { result.push(item) }
  }
  return result
}
console.log(uniqueIncludes(arr)); // (5) [1, 2, 3, 4, 5]
```



#### 求数组中出现最多次数的元素及其index

```js
const arr = ["mango", "apple", "banana", "apple", "banana", "apple"];
function most(arr) {
  const obj = {};
  for (let item of arr) {
    if (item in obj) {
      obj[item]++
    } else {
      obj[item] = 1
    }
  }
  let count = 0;
  let mostVal;
  for (let key in obj) {
    if (obj[key] > count) {
      count = obj[key];
      mostVal = key
    }
  }
  return `${mostVal}: ${count}`
}
console.log(most(arr)); // apple: 3
```



#### 返回对称数组

```js
const arr = [1, 2, 3];
console.log(arr.concat(arr.slice().reverse())); // (6) [1, 2, 3, 3, 2, 1]
```



#### 小练习

```js
// 定义一个含有30个整形元素的数组，按顺序分别赋予从2开始的偶数；然后按顺序每5个数求出一个平局值，放在另外一个数组中并输出。试编程

const arr = [2];
for (let i = 1; i < 30; i++) {
  arr.push(arr[i - 1] + 2)
}
// console.log(arr);
const result = [];
for (let i = 0; i < 30; i += 5) {
  result.push(
    arr.slice(i, i + 5).reduce((prev, next) => prev + next, 0) / 5
  )
}
console.log(result); // (6) [6, 16, 26, 36, 46, 56]
```

