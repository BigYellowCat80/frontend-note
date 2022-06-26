// 引入的不再是Vue构造函数，而是createApp这个工厂函数，不需要使用new操作符
import { createApp } from "vue"
import App from "./App.vue"

// createApp(App).mount("#app")

// createApp(App).mount("#app")等价于
const app = createApp(App)
app.mount("#app")
// console.log("properties", Object.keys(app))

// ['_uid', '_component', '_props', '_container', '_context', '_instance', 'version', 'config', 'use', 'mixin', 'component', 'directive', 'mount', 'unmount', 'provide']
// app是实例对象。但是app相对Vue2中的vm更轻，没有那么多属性和方法

// Vue2时的代码如下
// const vm = new Vue({
//   render: (h) => h(App)
// })
// vm.$mount("#app")
