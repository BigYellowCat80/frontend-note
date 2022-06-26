<template>
  <div class="child">
    <h3>Child</h3>
    {{ sum }}
  </div>
</template>

<script>
import { ref } from "vue"

export default {
  name: "Child",
  setup() {
    const sum = ref(0)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ sum })
      }, 3000)
    })
  }
}
</script>

<style scoped>
.child {
  background-color: #5f5;
  padding: 20px;
}
</style>
