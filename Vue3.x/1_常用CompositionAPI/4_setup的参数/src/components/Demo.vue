<template>
  <div>
    <h3>Name: {{ name }}</h3>
    <h3>Age: {{ age }}</h3>
    <button @click="sayHello">sayHello</button>
  </div>
</template>

<script>
export default {
  name: "Deom",
  emits: ["sayHello"],
  props: {
    name: {
      type: String,
      default: ""
    },
    age: {
      type: Number,
      default: 0
    }
  },
  setup(props, { attrs, emit, slots }) {
    const sayHello = () => {
      const { name, age } = props
      console.log("name, age", name, age)
      // console.log("context", context)

      // attrs: (...)
      // emit: (...)
      // expose: exposed => {…}
      // slots: (...)

      console.log("attrs, emit, slots", attrs, emit, slots)
      emit("sayHello", "Anne")
    }

    return {
      sayHello
    }
  }
}
</script>

<style lang="less" scoped></style>
