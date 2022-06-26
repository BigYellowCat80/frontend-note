

#### 1. 注释

less和sass一样。单行注释不会被编译，多行会



#### 2. 定义变量

- less: @number
- sass: $number



#### 3. 插值写法

less

```less
@first: first;
.@{first}-box{height: 200px;}

@mx: margin;
.box{@{mx}-left: auto; @{mx}-right: auto;}
```

sass

```scss
$first: first;
.#{$first}-box{height: 200px;}

$mx: margin;
.box{#{$mx}-left: auto; #{$mx}-right: auto;}
```



#### 4. 作用域

- less: 局部变量先使用后定义也可以
- sass: 局部变量需要先定义后使用，否则往上级作用域查找



#### 5. 选择器嵌套

less和sass一样

```scss
ul{
  list-style: none;
  >li{
    height: 40px;
  }
  &:hover{background: #4f4;}
}
```

效果

```css
ul {
  list-style: none;
}
ul > li {
  height: 40px;
}
ul:hover {
  background: #4f4;
}
```



#### 6. 属性嵌套

less

```
无
```

sass

```scss
.box{
  font: {
    weight: bold;
    size:16px;
    family:"arial";
  }
}
```



#### 7. 运算

less和sass相同之处

- 如果都是px +1或者+1px均可
- 支持颜色运算

less和sass不同之处

- ```less
  less: .box {height: 1rem + 1px} 输出.box {height: 2rem}
  ```

- ```scss
  sass: .box {height: 1rem + 1px} 报错
  ```



#### 8. 函数及自定义函数

less

- 不支持自定义函数
- 内置sqrt(100)函数只有less有 .box{height:sqrt(10000px)}

sass

```scss
@function sum($a, $b){@return $a + $b;}
.box{height:sum(100px, 88px); width:100px * random()}
random()只有sass有
```



#### 9. 混入

less

```less
.fl{float: left;}
.bg(@color){background: @color;}
.box{.fl;.bg(#44f);}
```

sass

```scss
@mixin fl(){float: left;}
@mixin bg($color){background: $color;}
.box{@include fl;@include bg(#44f);}
```



#### 10. 命名空间

less

```less
#namespace(){.show{display: block;}}
.box{#namespace.show}

输出.box{display: block;}
```

sass

```
无
```



#### 11. 继承

less

```less
.init-font-size{font-size: 16px;}
h1,h2,h3{&:extend(.init-font-size);}
```

sass

```scss
%init-font-size{font-size: 16px;}
h1,h2,h3{@extend %init-font-size;}
```



#### 12. 合并

less

```less
// 逗号合并使用+ 空格合并使用+_
.box{
  background+: url(cat.png);
  background+: url(dog.png);
  transform+_: translateX(100px);
  transform+_: rotate(45deg);
}

输出

.box {
  background: url(cat.png), url(dog.png);
  transform: translateX(100px) rotate(45deg);
}
```

sass

```scss
$bg: (a:url(cat.png), b:url(dpg.png));
$transform: (a: translateX(100px), b: rotate(45deg));
.box{
  background: map-values($bg);
  transform: zip(map-values($transform)...);
}

输出

.box {
  background: url(cat.png), url(dog.png);
  transform: translateX(100px) rotate(45deg);
}
```



#### 13. 媒体查询

less和sass一样

```css
.box{
  width: 100%;
  @media all and (min-width:768px){width: 720px;}
  @media all and (min-width:992px){width: 960px;}
  @media all and (min-width:1200px){width: 1140px;}
}

输出

.box {
  width: 100%;
}
@media all and (min-width: 768px) {
  .box {
    width: 720px;
  }
}
@media all and (min-width: 992px) {
  .box {
    width: 960px;
  }
}
@media all and (min-width: 1200px) {
  .box {
    width: 1140px;
  }
}
```



#### 14. 条件

less

```less
@count: 99;
.height(@x) when (@x >= 100){height: @x * 10px;}
.height(@x) when (@x < 100){height: @x * 100px;}
.box{.height(@count);}

输出

.box{height: 9900px;}
```

sass

```scss
$height:99;
.box{
  @if($height>=100){
    height:$height*10px;
  }@else if($height<100){
    height:$height*100px;
  }
}

输出

.box{height: 9900px;}
```



#### 15. 循环

less

```less
.setHeight(@i) when (@i<4){
  .box-@{i}{
    height:100px+@i;
  }
  .setHeight(@i+1);
}
.setHeight(1); // 调用

输出

.box-1 {
  height: 101px;
}
.box-2 {
  height: 102px;
}
.box-3 {
  height: 103px;
}
```

sass

```scss
@for $i from 0 to 4{
  .box-#{$i}{
    height:100px + $i;
  }
}
// 如果是through包括4

输出

.box-1 {
  height: 101px;
}

.box-2 {
  height: 102px;
}

.box-3 {
  height: 103px;
}
```



#### 16. 导入

less和sass一样

```scss
@import 'reset.less';
@import 'reset.scss';
```

