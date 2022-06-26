

// import { num, double, Animal, kimi } from './export-two.js';

// 要是觉得导入的内容有点多 使用alias
import * as o from './export-two.js';

console.log(o.num); // 200
console.log(o.double()); // 400
console.log(o.kimi); // {name: "kimi", gender: "female", age: 14}