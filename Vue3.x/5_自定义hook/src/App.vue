<template>
  <Demo />
  <Test />
</template>

<script>
import Demo from "./components/Demo"
import Test from "./components/Test"

export default {
  name: "App",
  components: { Demo, Test }
}
</script>

<style>
#app {
  font-family: "microsoft yahei";
}
</style>
