<template>
  <Demo name="John" :age="30" @sayHello="sayHello" />
</template>

<script>
import Demo from "./components/Demo"
export default {
  name: "App",
  components: { Demo },
  setup() {
    const sayHello = (name) => {
      alert(`My name is ${name}`)
    }

    return {
      sayHello
    }
  }
}
</script>

<style>
#app {
  font-family: "microsoft yahei";
}
</style>
