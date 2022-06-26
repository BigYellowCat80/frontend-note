<template>
  <h4>{{ person }}</h4>
  <h3>Name: {{ name }}</h3>
  <h3>Age: {{ age }}</h3>
  <h3>Age: {{ job.j1.salary }}k</h3>
  <button @click="name += 'n'">changeName</button>
  <button @click="age++">changeAge</button>
  <button @click="job.j1.salary++">raiseSalary</button>
</template>

<script>
import {
  reactive,
  // toRef,
  toRefs
} from "vue"
export default {
  name: "App",
  setup() {
    const person = reactive({
      name: "John",
      age: 30,
      job: {
        j1: {
          salary: 30
        }
      }
    })

    return {
      person,
      // name: toRef(person, "name"),
      ...toRefs(person)
    }
  }
}
</script>

<style>
#app {
  font-family: "microsoft yahei";
}
</style>
