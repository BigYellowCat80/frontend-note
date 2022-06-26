

#### 定义

BFC是一个封闭独立的盒子，无论盒子里的元素怎么运作都不会影响外部的元素，内部元素也不受外界干扰



#### 特性

1. 内部的盒子会在垂直方向上一个接一个的放置
2. 垂直方向上的距离由margin决定（解决margin-top和垂直margin重叠问题）
3. bfc的区域不会与float的元素区域重叠（解决文字环绕问题，自适应两栏布局）
4. 计算bfc的高度时，浮动元素也参与计算（去浮动）
5. bfc就是页面上的一个独立容器 容器里面的子元素不会影响外面元素



#### 触发条件

- overflow: 不为默认值visible即可
- float: 不是none即可 
- position: absolute | fixed; 
- display: inline-block | flex | grid | table-cell | table-caption;



