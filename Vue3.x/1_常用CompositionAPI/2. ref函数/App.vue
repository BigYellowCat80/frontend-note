<template>
  <div>Name: {{ name }}</div>
  <div>Age: {{ age }}</div>
  <div>Salary: {{ job.salary }}</div>
  <button class="btn" @click="changeInfo">changeInfo</button>
  <button class="btn" @click="raiseSalary">raiseSalary</button>
</template>

<script>
import { ref } from "vue"
export default {
  name: "App",
  setup() {
    // 此处只是测试一下setup，暂时不考虑响应式的问题
    let name = ref("John")
    let age = ref(30)
    let job = ref({
      type: "Frontend Engineer",
      salary: 30000
    })

    const changeInfo = () => {
      name.value = "Anne"
      age.value = 22
    }

    const raiseSalary = () => {
      console.log("job", job.value) // Proxy {type: 'Frontend Engineer', salary: 30000}
      job.value.salary = 45000
    }

    return {
      name,
      age,
      changeInfo,
      job,
      raiseSalary
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
  margin-right: 8px;
}
</style>
