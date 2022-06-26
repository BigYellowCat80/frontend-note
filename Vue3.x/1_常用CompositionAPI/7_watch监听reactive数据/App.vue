<template>
  <h3>Name: {{ person.name }}</h3>
  <h3>Age: {{ person.age }}</h3>
  <h3>Age: {{ person.job.j1.salary }}k</h3>
  <button @click="person.name += 'n'">changeName</button>
  <button @click="person.age++">changeAge</button>
  <button @click="person.job.j1.salary++">raiseSalary</button>
</template>

<script>
import { reactive, watch } from "vue"
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

    // watch监听reactive的注意事项
    // 1. 无法获取到oldVal。oldVal总是和newVal一样
    // 2. 强制开启深度监视（deep配置无效）
    // 3. 监听单个属性，wathch的第一个参数为函数。这种情况可以监听到oldVal
    // 4. 监听多个属性，wathch的第一个参数为数组，里面每个元素为函数。这种情况可以监听到oldVal
    // 5. 如果监听的一个属性是对象，更改这个对象里面的值，要监听需要开启deep

    // 1. 2
    // watch(
    //   person,
    //   (newVal, oldVal) => {
    //     console.log("watch", newVal, oldVal)
    //   },
    //   { deep: false }
    // )

    // 3
    // watch(
    //   () => person.age,
    //   (newVal, oldVal) => {
    //     console.log("watch", newVal, oldVal)
    //   }
    // )

    // 4
    // watch([() => person.name, () => person.age], (newVal, oldVal) => {
    //   console.log("watch", newVal, oldVal)
    // })

    // 5
    watch(
      () => person.job,
      (newVal, oldVal) => {
        console.log("watch", newVal, oldVal)
      },
      { deep: true }
    )

    return {
      person
    }
  }
}
</script>

<style>
#app {
  font-family: "microsoft yahei";
}
</style>
