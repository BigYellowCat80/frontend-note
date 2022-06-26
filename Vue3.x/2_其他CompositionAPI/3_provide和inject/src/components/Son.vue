<template>
  <div class="son">
    <h3>Son</h3>
    <h1>Name: {{ name }}, Price: {{ price }}</h1>
  </div>
</template>

<script>
import { inject, toRefs } from "vue"

export default {
  name: "Son",
  setup() {
    const car = inject("car", car)
    return { ...toRefs(car) }
  }
}
</script>

<style scoped>
.son {
  background-color: #55f;
  padding: 20px;
}
</style>
