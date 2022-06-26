

#### 选项卡的6种写法

1. forEach
2. ES6的let
3. 事件委托
4. 添加index
5. 自执行函数
6. [面向对象写选项卡](./demos/面向对象写选项卡.html)



#### 获取url的2种方法

1. location.href
2. document.URL



#### 判断NaN的2种方法

1. isNaN
2. Number.isNaN



#### 出现undefined的5种情况

- 变量未定义
- 定义未赋值
- 赋值为undefined
- 读取对象未定义的属性或调用对象未定义的方法
- 函数没有返回值



#### 布尔判断为false的6种情况

- 0
- NaN
- undefined
- null
- ''
- false



#### 数值的进制转换

- ##### 十进制转成其他进制

```js
let num = 12;
num.toString(2) // 1100 转成二进制为1100
```

- ##### 其他进制转成十进制

```js
// 方法一
0b1100 // 12 0b开头为二进制
011 // 9 0开头为八进制
0x11 // 17 0x开头为十六进制

// 方法二 parseInt
parseInt(1100, 2) // 12 第二个参数2表示1100是二进制
```



#### 计算机组成

- CPU芯片(负责计算)
- 内存(临时存储数据) 也叫闪存 通过电容工作 因此一断电数据丢失
- 硬盘(通过磁性材料的NS极存储数据)
- 固态硬盘(通过芯片存储数据)
- 主板(连接CPU、内存、硬盘、网络等的通道)
- GPU显卡
- 网卡及附属设备



#### input选择今天或之前的日期

```html
<input type="date" max="2021-07-21"> // 2021-07-21可以通过js获取当天
```



#### 关键字和保留字

- 关键字：已经被规定有特殊用途的子  

```js
new  class  super  function  return  this  var  let  const  switch  case  break
```

- 保留字：没有特殊用途，但是以后可能被用作关键字

```js
long  short  double  int  float  final 
```



#### table快速获取节点

```js
oTab.tBodies[0].rows[0].cells[0]
```



#### 键盘事件

- keydown：一直按着不断触发，识别字符键和功能键，不区分大小写，返回大写的keyCode
- keypress：一直按着不断触发，只识别字符键。区分大小写
- keyup：不区分大小写，返回大写的keyCode



#### Math.round和toFixed区别

```js
// 都是四舍五入，但是toFixed功能更强大点。因为round只能四舍五入到整数，而toFixed可以限定小数位数
Math.round(2.555) // 3
let num = 2.555; num.toFiexed(2) // 2.56

// 返回值类型
// round返回number，toFixed返回string
```



#### Date对象

- 方法

```js
new Date()
Wed Jul 21 2021 14:57:21 GMT+0800 (China Standard Time)

new Date().toDateString()
"Wed Jul 21 2021"

new Date().toTimeString()
"14:57:51 GMT+0800 (China Standard Time)"

new Date().toLocaleDateString()
"7/21/2021"

new Date().toLocaleTimeString()
"2:58:10 PM"
```

- 三种方法获取当前时间毫秒数

```js
new Date().getTime()
Date.parse(new Date()) 
Date.now()
```

- 毫秒数转时间

```js
new Date(1616001729855);
```



- 给定年月日，判断该日期是该年的第几天

```js
function dayOfYear(dateString) { // 2021-7-21
  const monthsArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const arr = dateString.split('-');
  const year = +arr[0];
  const month = +arr[1];
  const date = +arr[2];
  if (month == 1) { return date }
  if (month == 2) { return monthsArray[0] + date }

  let sum = 0;
  if (month >= 3 && month <= 12) {
    sum = monthsArray.slice(0, month - 1).reduce((prev, next) => prev + next, 0);
    sum += date;
  }
  if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) { sum++; } // 判断闰年
  return sum
}
console.log(dayOfYear('2021-7-21')); // 202
```





#### 严格模式后的变化

- 变量必须先定义后使用
- 函数参数不能重名
- this无法指向全局对象
- arguments只存储实参的值，不能被改变
- 新增保留字

```js
// 变量必须先定义后使用
function show() {
  'use strict';
  num = 12;
  console.log(num); // num is not defined 因为没有用var定义
}
show()

// 函数参数不能重名
function show(a, a) {
  'use strict'
}
// Duplicate parameter name not allowed in this context

// this无法指向全局对象
function show() {
  'use strict';
  console.log(this); // undefined
}
show()

// - arguments只存储实参的值，不能被改变
function show(a, b) {
  "use strict";
  a = 30;
  console.log(a, b); // 30 20
  console.log(arguments[0], arguments[1]); // 10 20
}
show(10, 20);

// 新增保留字
package
private
protected
public
static
...
```



#### 不定参求和的两种方法

- 把arguments转成数组使用reduce
- 直接用拓展运算符

```js
// 把arguments转成数组使用reduce
function sum() {
  return [...arguments]
    .reduce((prev, next) => prev + next, 0)
}
console.log(sum(1, 2, 3, 4, 5, 6)); // 21

// 拓展运算符
function sum(...args) {
  return args.reduce((prev, next) => prev + next, 0)
}
console.log(sum(1, 2, 3, 4, 5, 6)); // 21
```



#### 类数组转成数组的3种方式

- Array.from
- [].slice.call
- 拓展运算符





#### for...of适用于

- String
- Array
- typedArray
- Set
- Map
- arguments



#### 交换两个数的7种方法

1. 解构赋值 Number和String均适用
2. `a = [b, b = a][0]`，把b的值先赋给数组第0个位置，然后在数组的第1个位置给b赋值 Number和String均适用
3. 数组建好再赋值 Number和String均适用

```js
a = [a, b];
b = a[0]; // 这里注意要先获取b的值
a = a[1];
```

4. 对象建好再赋值 Number和String均适用

```js
a = {
  a:b,
  b:a
};
b = a.b;
a = a.a;
```

5. 新增变量 Number和String均适用
6. 先相加后相减 仅Number适用

```js
a = a + b;
b = a - b;
a = a - b;
```

7. 位运算符

```js
a ^= b;
b ^= a;
a ^= b;
```



#### 判断质数、最大公约数、最小公倍数

```js
// 质数
var num = 752;
for (var i = 2; i < Math.sqrt(num); i++) {
  if (num % i == 0) {
    console.log(num + " 不是质数");
    break;
  }
}
if (i == Math.ceil(Math.sqrt(num))) {
  console.log(num + " 是质数");
}

// 最大公约数 拿小的数先尝试 不行的话--
var a = 17, b = 34;
var min = Math.min(a, b);
for (var i = min; i >= 1; i--) {
  if (a % i == 0 && b % i == 0) {
    console.log(i);
    break;
  }
}

// 最小公倍数 拿大的数先尝试 不行的话++
var a = 12, b = 24;
var max = Math.max(a, b);
for (var i = max; i <= a * b; i++) {
  if (i % a == 0 && i % b == 0) {
    console.log(i);
    break;
  }
}
```



#### [window.open](./demos/window.open.html)

#### [requestAnimationFrame](./demos/requestAnimationFrame.html)

#### [时钟](./demos/时钟.html)



#### 递归

- 递归特点：函数调用本身、有临界值、一般有参数及返回值
- 递归优点：容易理解
- 递归缺点：瞬间不断入栈消耗大量内存



- 递归求和

```js
function sum(n) {
  if (n == 1) { return 1; }
  return sum(n - 1) + n;
}
console.log(sum(100)); // 5050
```

- 斐波那契数列

```js
function fibonacci(n) {
  if (n == 0) { return 0 }
  if (n == 1) { return 1 }
  return fibonacci(n - 1) + fibonacci(n - 2)
}
console.log(fibonacci(20)); // 6765
```

- 猴子吃桃问题

```js
// 猴子吃桃问题 有一堆桃子不知数目，猴子第一天吃点一半，觉得不过瘾，又多吃了一个；第二天吃掉剩下的一半加一个，天天如此；到第n(n<=10)天早上，猴子发现只剩一个桃子了，问这对桃子原本有多少个？

function peach(n) {
  // 思路：设置n为还剩n天吃完的桃子数目 还剩1天剩1个
  // peach(10)/2-1=peach(9);

  if (n == 1) { return 1; }
  return (peach(n - 1) + 1) * 2;
}
console.log(peach(4)); // 22
```



#### 执行上下文EC

- 执行上下文的声明周期：创建 => 执行 => 执行完毕

**创建阶段：**

1. 创建变量对象（变量、函数、arguments）
2. 建立作用域链
3. 确定this

**执行阶段：**

1. 变量赋值
2. 函数的引用
3. 执行其他代码

**执行完毕：**

1. 销毁变量等待GC回收



#### DOM元素的大小及位置

- Element.offsetTop  元素顶部距离offsetParent的距离
- Element.offsetHeight  元素占页面的总高度 content + padding + border
- Element.clientHeight  元素content + padding 
- Element.clientTop  元素的border占高度
- Element.scrollHeight  元素展开的高度 + padding



#### 获取网页已滚动的高度

```js
window.pageYOffset // IE9或以上，别名是scrollY，为了兼容使用pageYOffset
let scrollTop = document.documentElement.scrollTop || document.body.scrollTop; // 兼容写法
```



#### event对象四件套

```js
e.offsetY // 点击元素距离元素顶部的高度
e.pageY // 距离document的高度
e.clientY // 距离窗口的高度
e.screenY // 距离屏幕的高度
```



#### window的宽高度

```js
window.innerWidth // 浏览器窗口显示的宽度（不包括调试窗口）
window.outerWidth
window.innerHeight // 浏览器窗口显示的高度（不包括调试窗口、不包括url及书签）
window.outerHeight
```



#### screen的宽高度

```js
screen.availWidth
screen.width
screen.availHeight // 不包括电脑底部栏
screen.height
```



#### PHP

```php
// get
<?php
  header('Content-type:text/html;charset="utf-8"');
  $username=$_GET['username'];
  $pwd=$_GET['pwd'];
  echo "Your username is {$username}, your password is {$pwd}.";
?>
  
// post
<?php
  header('Content-type:text/html;charset="utf-8"');
  $username=$_POST['username'];
  $pwd=$_POST['pwd'];
  echo "Your username is {$username}, your password is {$pwd}.";
?>  
```

- 字符串拼接

```php
$pig='pig';
"KIMI is a {$pig}"
  
// mysql
$name=$_GET['name'];
$age=$_GET['age'];
"INSERT INTO table(name,age) VALUES('{$name}','{$age}')"
```





#### Number

浮点数最高精度17位，运算有误差因为在计算机里用二进制表示，有的小数转为二进制是无限循环

##### ES6新增方法

- Number.isNaN
- Number.parsenInt
- Number.parseFloat
- Number.isInteger
- Number.EPSILON
- Number.isFinite

- Math.trunc



#### 跨域三大方式

在浏览器环境下，请求的url与当前url在协议、域名、端口号有一个不同就是跨域

- jsonp
- cors
- nginx反向代理



#### jsonp

- [百度天气](./demos/jsonp百度天气.html)
- [百度关键词](./demos/jsonp百度关键词.html)
- 获取本地文件

```js
// 1. 定义函数
function load(data) {
  console.log(data);
}

document.getElementById('btn').onclick = function () {
  // 2. 动态创建script便签并且设置src属性
  var script = document.createElement('script')
  script.src = './kimi.js';

  // 3. 动态加入到document.body中
  document.body.appendChild(script);
};

// kimi.js中
load('Kimi is a cat.');
```

