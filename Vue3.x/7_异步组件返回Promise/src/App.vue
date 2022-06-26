<template>
  <div class="app">
    <h3>App</h3>
    <Suspense>
      <template v-slot:default>
        <Child />
      </template>
      <template v-slot:fallback>
        <h3>loading...</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue"
const Child = defineAsyncComponent(() => import("./components/Child"))

export default {
  name: "App",
  components: { Child }
}
</script>

<style scoped>
.app {
  background-color: #f55;
  padding: 20px;
}
</style>
