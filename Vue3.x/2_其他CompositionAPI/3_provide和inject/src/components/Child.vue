<template>
  <div class="child">
    <h3>Child</h3>
    <Son />
  </div>
</template>

<script>
import Son from "./Son"

export default {
  name: "Child",
  components: { Son }
}
</script>

<style scoped>
.child {
  background-color: #5f5;
  padding: 20px;
}
</style>
