## ES6的导入和导出

> https://www.bilibili.com/video/BV15741177Eh?p=75

### 1.1和1.2本质上是一样的

### 1.1 export导出和导入
```javascript
导出
export let num = 100;

export function double() {
  return num * 2;
}

export class Animal {

}

export let kimi = {
  name: "kimi",
  gender: "female",
  age: 12,
}


导入
import { num, double, Animal, kimi } from './export-one.js';

console.log(num); // 100
console.log(double()); // 200
console.log(kimi); // {name: "kimi", gender: "female", age: 12}
```


### 1.2 export导出和导入
```javascript
导出
let num = 200;

function double() {
  return num * 2;
}

class Animal {

}

let kimi = {
  name: "kimi",
  gender: "female",
  age: 14,
}

export {
  num,
  double,
  Animal,
  kimi,
}


导入
// import { num, double, Animal, kimi } from './export-two.js';

// 要是觉得导入的内容有点多 使用alias
import * as o from './export-two.js';

console.log(o.num); // 200
console.log(o.double()); // 400
console.log(o.kimi); // {name: "kimi", gender: "female", age: 14}
```


### 2. export default导出和导入
```javascript
导出
let num = 300;

function double() {
  return num * 2;
}

class Animal {

}

let kimi = {
  name: "kimi",
  gender: "female",
  age: 16,
}


// 1. 一个js文件只能有一个export default
// 2. export default function时不用加函数名
// export default function () {

// }

export default {
  num,
  double,
  Animal,
  kimi,
}


导入
import o from './export-default-three.js';

console.log(o.num); // 300
console.log(o.double()); // 600
console.log(o.kimi); // {name: "kimi", gender: "female", age: 16}
```


### html文件中导入
```javascript
<script src="./import-one.js" type="module"></script>
<script src="./import-two.js" type="module"></script>
<script src="./import-three.js" type="module"></script>
```