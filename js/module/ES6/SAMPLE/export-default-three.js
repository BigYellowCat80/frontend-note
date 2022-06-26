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