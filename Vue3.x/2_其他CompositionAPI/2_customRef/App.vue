<template>
  <input type="text" v-model="value" />
  <h3>{{ value }}</h3>
</template>

<script>
import { customRef } from "vue"

export default {
  name: "App",
  setup() {
    // 防抖功能
    const myRef = (value, delay = 500) =>
      customRef((track, trigger) => {
        let timer = null
        return {
          get() {
            track() // 通知Vue追踪value的变化（提前和get商量，让它认为这个value是可追踪的）
            return value
          },
          set(val) {
            clearTimeout(timer)
            timer = setTimeout(() => {
              value = val
              trigger() // 通知VUe去重新解析模板
            }, delay)
          }
        }
      })
    const value = myRef("hello")
    return { value }
  }
}
</script>

<style>
#app {
  font-family: "microsoft yahei";
}
</style>
