

#### 相对于Vue2

```
beforeCreate
created
beforeMount
mounted
beforeUpdate
updated
都不变

Vue2中的beforeDestory和destoryed编程beforeUnmount和unmounted
```



```
Vue2								Vue3
beforeCreate				setup
created							setup
beforeMount					onBeforeMount
mounted							onMounted
beforeUpdate				onBeforeUpdate
updated							onUpdated
beforeDestory				onBeforeUnmount
destoryed						onUnmounted

如果在Vue3中两种都写，带on的比不带on的先执行
setup
beforeCreate
created
onBeforeMount
beforeMount
onMounted
mounted
onBeforeUpdate
beforeUpdate
onUpdated
updated
onBeforeUnmount
beforeDestory
onUnmounted
destoryed

但是在开发中不会两种同时使用
```



