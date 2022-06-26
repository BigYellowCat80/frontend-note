<template>
  <div class="child">
    <h3>Child</h3>
    <input type="text" @keydown.enter="show" v-model="value" />
  </div>
</template>

<script>
import { ref } from "vue"

export default {
  name: "Child",
  setup() {
    const value = ref("")

    const show = () => {
      console.log("value", value)
    }

    return { value, show }
  }
}
</script>

<style scoped>
.child {
  background-color: #5f5;
  padding: 20px;
}
</style>
