<template>
  <div>Name: {{ name }}</div>
  <div>Age: {{ age }}</div>
  <button class="btn" @click="sayHello">sayHello</button>
</template>

<script>
export default {
  name: "App",
  setup() {
    // 此处只是测试一下setup，暂时不考虑响应式的问题
    let name = "John"
    let age = 30

    const sayHello = () => {
      console.log(`Hello I'm ${name}, I'm ${age} years old`)
    }

    return {
      name,
      age,
      sayHello
    }
  }
}
</script>

<style>
#app {
  font-family: "microsoft yahei";
}

.btn {
  margin-top: 8px;
}
</style>
