<template>
  <h3>{{ count }}</h3>
  <button @click="count++">+1</button>
</template>

<script>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from "vue"

export default {
  name: "Demo",
  setup() {
    const count = ref(0)

    console.log("setup")
    onBeforeMount(() => {
      console.log("onBeforeMount")
    })
    onMounted(() => {
      console.log("onMounted")
    })
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate")
    })
    onUpdated(() => {
      console.log("onUpdated")
    })
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount")
    })
    onUnmounted(() => {
      console.log("onUnmounted")
    })

    return { count }
  }
}
</script>

<style lang="less" scoped></style>
