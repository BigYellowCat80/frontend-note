

```
1. Vue3带来了什么？

一、性能的提升
1. 打包体积减少41%
2. 初次渲染快55%，更新渲染快133%
3. 内存减少54%

二、源码的升级
1. 使用Proxy代替defineProperty实现响应式
2. 重写虚拟DOM的实现和Tree-Shaking

三、拥抱TS（Vue2也能写，配置有点麻烦）

四、新的特性
1. Composition API（组合API）
		setup配置
		ref与reactive
		watch与watchEffect
		provide与inject
		...
		
2. 新的内置组件
		Fragment
		Teleport
		Suspense
		
3. 其他改变
		新的生命周期钩子
		data选项应时钟被生命为一个函数
		移除keyCode支持作为v-on的修饰符
```



```
2. 创建Vue3工程

1. 使用vue-cli创建
2. 使用vite创建
```



```bash
3. 使用vue-cli创建

插件@vue/cli版本，确保@vue/cli版本在4.5.0以上
vue --version

安装或者升级@vue/cli
npm i @vue/cli -g

创建
vue create demo

启动
npm run serve

```



```bash
4. 使用vite创建

1. npm init vite-app demo
2. cd demo
3. npm i
4. npm run dev

```



```
5. vite的优势

1. 开发环境中，无需打包操作，可快速的冷启动
2. 轻量快速的热重载（HMR）
3. 真正的暗血编译，不在等待整个应用编译完成
```



```js
6. main.js

// 引入的不再是Vue构造函数，而是createApp这个工厂函数，不需要使用new操作符
import { createApp } from "vue"
import App from "./App.vue"

// createApp(App).mount("#app")

// createApp(App).mount("#app")等价于
const app = createApp(App)
app.mount("#app")
console.log("properties", Object.keys(app))

// ['_uid', '_component', '_props', '_container', '_context', '_instance', 'version', 'config', 'use', 'mixin', 'component', 'directive', 'mount', 'unmount', 'provide']
// app是实例对象。但是app相对Vue2中的vm更轻，没有那么多属性和方法
// 需要注意的是，在Vue3中 import Vue from 'vue'，Vue是undefined

// Vue2时的代码如下
// const vm = new Vue({
//   render: (h) => h(App)
// })
// vm.$mount("#app")
```



```
7. App.vue

组件可以没有根标签
```



```
8. setup属性里可以写什么（在beforeCreate之前执行一次，this是undefined）

data methods computed watch 生命周期钩子... 
```



```
9. setup的参数

attrs 值为对象。组件外部传递过来的props，但是没有在props配置中生命，就会在这里
slots	收到的插槽内容，相当于Vue2中的this.$slots
emit	相当于Vue2中的this.$emit
```



```
10. setup的返回值

1. 对象（常用）。对象中的属性、方法，在末班中均可以直接使用
2. 渲染函数（不常用，了解即可）
```



```
11. setup的注意事项

1. 尽量不要和Vue2的配置项如data、methods混用
2. Vue2配置（data、mehtods...）中可以访问到setup中的属性和方法
3. setup中不能访问到Vue2配置（data、mehtods...）
4. setup不能是一个async函数，因为返回值不再是对象，而是Promise。模板看不到return对象中的属性
```



```
12. ref函数

ref函数返回的是一个对象（RefImpl的实例对象。俗称引用对象。Reference Implement）
ref函数调用简单数据类型时响应式也是通过defineProperty配合getter和setter实现的
但是模板中直接写name和age即可。Vue3解析时发现要渲染的是一个RefImpl，直接渲染了value值

ref函数调用对象时，返回的是Proxy实例对象（Proxy是ES6中window的属性）
```



```
13. reactive函数

定义一个对象类型（数组也行）的响应式数据（只能是对象类型。基本类型只能用ref函数），返回一个Proxy实例
```



```
14. reactive对比ref

1. 从定义数据角度对比
		ref用来定义基本数据类型
		reactive用来定义对象或者数组
		备注：ref也可以用来定义对象或数组，它内部会自动通过reactive转为代理对象
		
2. 从原理角度对比
		ref通过Object.defineProperty的get和set来实现响应式（数据劫持）
		reactive通过Proxy来实现响应式（数据劫持），并通过Reflect操作源对象内部的数据
		
3. 从使用角度对比
		ref操作需要.value，使用不用
		reactive操作和使用均不用
```



```vue
15. watch监听reactive的注意事项

1. 无法获取到oldVal。oldVal总是和newVal一样
2. 强制开启深度监视（deep配置无效）
3. 监听单个属性，wathch的第一个参数为函数。这种情况可以监听到oldVal
4. 监听多个属性，wathch的第一个参数为数组，里面每个元素为函数。这种情况可以监听到oldVal
5. 如果监听的一个属性是对象，更改这个对象里面的值，要监听需要开启deep

const person = reactive({
  name: "John",
  age: 30,
  job: {
    j1: {
      salary: 30
    }
  }
})

// 1. 2
// watch(
//   person,
//   (newVal, oldVal) => {
//     console.log("watch", newVal, oldVal)
//   },
//   { deep: false }
// )

// 3
// watch(
//   () => person.age,
//   (newVal, oldVal) => {
//     console.log("watch", newVal, oldVal)
//   }
// )

// 4
// watch([() => person.name, () => person.age], (newVal, oldVal) => {
// console.log("watch", newVal, oldVal)
// })

// 5
watch(
  () => person.job,
  (newVal, oldVal) => {
    console.log("watch", newVal, oldVal)
  },
  { deep: true }
)
```



```
16. 为什么watch监视ref数据时，基本类型不用加.value，对象类型需要？

因为基本类型时，RefImpl里面的value的值是一个基本类型，只有一变化，它的内存地址就变化了
而对象类型时，RefImpl里面的value是一个对象，对象里的某个属性值发生改变，但是这个对象的内存地址没有变化，因此监听不到。解决办法就是加个.value，当作reactive数据处理
第二种方法，就是不用.value，但是开启深度监听

const person = ref({
  name: "John",
  age: 30,
  job: {
  j1: {
    salary: 30
    }
  }
})
// 1. 
watch(person.value,(oldVal,newVal)=>{})

// 2. 
watch(person,(oldVal,newVal)=>{},{deep:true})
```



```
17. watchEffect（默认开启immediate: true和deep）

watch和watchEffect的区别
watch要指明监听的属性，还需要指明回调
watchEffect：不用指明监听的属性，回调中用到哪个属性，就监听哪个属性

watchEffect(()=>{
	const x1 = sum.value
	const x2 = person.job.j1.salary
	console.log('watchEffect')
})

computed和watchEffect的区别
computed 注重结果，必须有返回值
watchEffect 注重过程，不用写返回值
```



```
18. 什么是Composition API（组合式API）？

setup里面写的都是组合式API，需要的时候才引入
```



```
19. 自定义hook

类似于Vue2中的mixins

优势：
1. 复用代码
2. 让setup中的逻辑更简洁明了
```



```
20. shallowRef

如果是基本数据类型，shallowRef和ref一样
如果是对象，shallowRef不进行对象的响应式处理
```



```
21. shallowReactive

只处理第一层的数据响应式（浅响应式）
```



```
22. 什么时候使用shallowRef和shallowReactive？

1. 如果对象数据比较解构比较深，但变化时只是外层属性变化使用shallowReactive
2. 如果有一个对象数据，后续功能不会修改该对象中的属性，而是生成新的对象来替换，使用shallowRef
```



```
23. readonly和shallowReadonly

person = readonly(person) 让一个响应式数据变为只读的（深只读）
person = shallowReadonly(person) 让一个响应式数据变为只读的（浅只读）

应用场景：数据是别人传过来的，不希望被修改
```



```
24. 页面没更新有两种情况

1. 数据不是响应式的，数据改了，页面没更新
2. 数据是只读的
```



```
25. toRaw

将reactive响应式数据转换为原始对象（就是一个普通对象）。不能转ref数据，只能转reactive数据
使用场景：用户读取响应式对象对应的普通对象，对这个对象的所有操作，都不会引起页面更新
```



```
26. makeRaw

标记一个对象，使其永远不会再成为响应式对象
应用场景：有些值应被设为响应式的，例如负责的第三方库
当渲染具有不可变数据源的大列表时，跳过响应式转换可提高性能
```



```
27. provide和inject

用于多层传值
```



```
28. 响应式数据的判断

isRef						检查一个值是否为一个ref对象
isReactove			检查一个对象是否由reactive创建的响应式数据
isReadonly			检查一个对象是否由readonly创建的只读代理
isProxy					检查一个对象是否又reactive或者readonly方法创建的代理
```



```
29. 组合式API有什么优势？

1. 使用Vue2的options API，新增或者修改一个需求，就需要分别在data、methods、watch等地方修改。Vue3可以在hook函数里面处理好，引入调用一下就行

```



```vue
30. teleport

div这个组件直接在body里了

这里的body还可以写其他的css选择器
<teleport to='body'>
  <div></div>
</teleport>
```



```
31. Vue3中的其他改变

1. Vue身上的一些api放在app实例上了（createApp后的实例）
2. data必须是函数
3. 动画的一些类名改变
4. 移除keyCode作为v-on的修饰符（@keyup.13没有了，@keyup.enter还是有的）。也不允许自定义配置config.keyCodes了
5. 移除了v-on.native修饰符
怎么处理？

子组件中emits:['click']，这样配置后，如果组件标签上写@click，那这个click就是自定义事件。否则就是点击事件
6. 移除过滤器（filter）
```

