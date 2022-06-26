<template>
  <h3>{{ count }}</h3>
  <button @click="count++">+1</button>
  <hr />

  <h3>{{ msg }}</h3>
  <button @click="msg += '!'">add !</button>
</template>

<script>
import { ref, watch } from "vue"
export default {
  name: "App",
  setup() {
    const count = ref(0)
    const msg = ref("hello")

    // 监视一个
    // watch(
    //   count,
    //   (newVal, oldVal) => {
    //     console.log("newVal, oldVal", newVal, oldVal)
    //   },
    //   { immediate: true }
    // )

    // 监视多个
    watch([count, msg], (newVal, oldVal) => {
      console.log("newVal,oldVal", newVal, oldVal)
      // (2)[1, 'hello'] (2)[0, 'hello']
    })

    return {
      count,
      msg
    }
  }
}
</script>

<style>
#app {
  font-family: "microsoft yahei";
}
</style>
