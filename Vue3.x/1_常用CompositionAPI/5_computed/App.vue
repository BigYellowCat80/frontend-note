<template>
  <div><input type="text" v-model="person.firstName" /></div>
  <div><input type="text" v-model="person.lastName" /></div>
  <h1>{{ person.fullname }}</h1>
  <div><input type="text" v-model="person.fullname" /></div>
</template>

<script>
import { reactive, computed } from "vue"
export default {
  name: "App",
  setup() {
    const person = reactive({
      firstName: "John",
      lastName: "Lennon"
    })

    // get
    // person.fullname = computed(() => {
    //   return `${person.firstName} ${person.lastName}`
    // })

    // get set
    person.fullname = computed({
      get() {
        return `${person.firstName} ${person.lastName}`
      },
      set(value) {
        let arr = value.split(" ")
        console.log("arr", arr)
        person.firstName = arr[0] ? arr[0] : ""
        person.lastName = arr[1] ? arr[1] : ""
      }
    })

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
