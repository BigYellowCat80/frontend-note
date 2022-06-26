<template>
  <div>
    <h3>Test组件</h3>
    <h3>point: {{ point.x + "px" }}, {{ point.y + "px" }}</h3>
  </div>

  <hr />
</template>

<script>
import { getPoint } from "../hooks/usePoint"

export default {
  name: "Test",
  setup() {
    const point = getPoint()
    return { point }
  }
}
</script>

<style lang="less" scoped></style>
