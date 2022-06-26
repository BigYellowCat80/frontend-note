<template>
  <div class="app">
    <h3>App</h3>
    <h1>Name: {{ name }}, Price: {{ price }}</h1>
    <Child />
  </div>
</template>

<script>
import Child from "./components/Child"
import { provide, reactive, toRefs } from "vue"

export default {
  name: "App",
  components: { Child },
  setup() {
    const car = reactive({
      name: "Benz",
      price: "40w"
    })
    provide("car", car)

    return { ...toRefs(car) }
  }
}
</script>

<style scoped>
.app {
  background-color: #f55;
  padding: 20px;
}
</style>
