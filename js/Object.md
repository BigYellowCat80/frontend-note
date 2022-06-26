#### 方法

##### 原型上

- hasOwnProperty
- toString
- valueOf
- isPrototypeOf
- propertyIsEnumerable

##### 构造函数上

- Object.create
- Object.keys
- Object.getOwnPropertyNames
- Object.defineProperty
- Object.getOwnPropertyDescriptor

##### ES6新增

- Object.is
- Object.assign
- Object.getPrototypeOf
- Object.setPrototypeOf
- Object.getOwnPropertyDescriptors
- Object.values
- Object.entries
- Object.fromEntries



#### 可选链操作符

**网络请求筛选数据的时候可以使用**

```js
const obj = {
  apple: {
    color: 'red',
    price: 50
  }
}
console.log(obj?.apple?.price); // 50
```





#### 属性和增删改查

```j
const cat = {};

// 增
cat['name'] = 'kimi';
cat.age = 1;

// 删
delete cat.age
delete cat['age']

// 改
cat.name = 'jack';

// 查
'name' in cat
```



#### 面向对象

- 面向对象的三大特点：封装、继承、多态



##### 创建对象的7种方法

- 工厂模式
- 寄生构造函数创建对象
- 构造函数创建对象
- 稳妥构造函数创建对象
- 原型模式
- 动态原型模式
- **构造函数和原型模式（常用）**



```js
// 工厂模式 缺点：方法没有共用、占内存、不能识别构造函数
function createCat(name, age) {
  const cat = new Object();
  cat.name = name;
  cat.age = age;
  cat.run = function () { console.log(`${this.name} is running`); }
  return cat
}
const cat = createCat('kimi', 1);
console.log(cat); // {name: "kimi", age: 1, run: ƒ}
cat.run() // kimi is running

console.log(cat.hasOwnProperty('run')); // true
```



```js
// 寄生构造函数创建对象 和工厂模式没有本质区别，区别就是函数名是大写、通过new创建
function Cat(name, age) {
  const cat = new Object();
  cat.name = name;
  cat.age = age;
  cat.run = function () { console.log(`${this.name} is running`); }
  return cat
}

const cat = new Cat('kimi', 1);
```



```js
// 构造函数创建对象 缺点：方法没有共用、占内存
function Cat(name, age) {
  this.name = name;
  this.age = age;
  this.run = function () { console.log(`${this.name} is running`); }
}
const cat = new Cat('kimi', 1);
console.log(cat); // Cat {name: "kimi", age: 1, run: ƒ}
cat.run(); // kimi is running
console.log(cat.hasOwnProperty('run')); // true
```



```js
// 稳妥构造函数创建对象 缺点：方法没有共用、占内存
function Cat(name, age) {
  const cat = new Object();
  cat.name = name;
  cat.age = age;
  cat.run = function () { console.log(`${this.name} is running`); }
  return cat
}
// const cat = new Cat('kimi', 1);
const cat = Cat('kimi', 1); // 用不用new操作符都可以

console.log(cat); // Cat {name: "kimi", age: 1, run: ƒ}
cat.run(); // kimi is running
console.log(cat.hasOwnProperty('run')); // true
```



```js
// 原型模式 缺点：没有私有的属性
function Cat() { }
Cat.prototype = {
  name: 'kimi',
  age: 1,
  run: function () {
    console.log(`${this.name} is running`);
  }
}

const cat = new Cat();
console.log(cat); // Cat {}
cat.run() // kimi is running
console.log(cat.name); // kimi
console.log(cat.hasOwnProperty('name')); // false
```



```js
// 动态原型模式 缺点：私有属性和公共方法写法上没有分离
function Cat(name, age) {
  this.name = name;
  this.age = age;
  if (typeof this.fun !== 'function') {
    Cat.prototype.run = function () {
      console.log(`${this.name} is running`);
    }
  }
}
const cat = new Cat('kimi', 1);
console.log(cat); // Cat {name: "kimi", age: 1}
cat.run(); // kimi is running
console.log(cat.hasOwnProperty('run')); // false
```



```js
// 构造函数和原型模式
function Cat(name, age) {
  this.name = name;
  this.age = age;
}
Cat.prototype.run = function () {
  console.log(`${this.name} is running`);
}
const cat = new Cat('kimi', 1);
console.log(cat); // Cat {name: "kimi", age: 1}
cat.run() // kimi is running
console.log(cat.hasOwnProperty('run')); // false
```



##### 继承

- **Object.create继承**
- **寄生组合式继承**
- **class extends继承**
- 寄生式继承
- 组合继承
- 借用构造函数继承
- 原型式继承
- 原型链继承



#### class私有属性

```js
// 只能在对象内部通过方法访问 不能在对象外部直接访问

class Girl {
  name;
  #age;
  #weight;

  constructor(name, age, weight) {
    this.name = name;
    this.#age = age;
    this.#weight = weight;
  }
showGirl() {
  console.log(this.name);
  console.log(this.#age);
              console.log(this.#weight);
              }
}

const girl = new Girl('ann', 18, 100);
// console.log(this.name);
// console.log(this.#age); //  Uncaught SyntaxError: Private field '#age' must be declared in an enclosing class
// console.log(this.#weight);
girl.showGirl()
```

