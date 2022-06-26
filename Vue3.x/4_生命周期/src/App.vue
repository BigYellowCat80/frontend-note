<template>
  <button @click="isShow = !isShow">toggle</button>
  <hr />
  <Demo v-if="isShow" />
</template>

<script>
import Demo from "./components/Demo"
import { ref } from "vue"
export default {
  name: "App",
  components: { Demo },
  setup() {
    const isShow = ref(true)
    return { isShow }
  }
}
</script>

<style>
#app {
  font-family: "microsoft yahei";
}
</style>
