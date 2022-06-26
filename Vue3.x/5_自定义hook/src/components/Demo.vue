<template>
  <div>
    <h3>Demo组件</h3>
    <h3>point: {{ point.x }}, {{ point.y }}</h3>
  </div>

  <hr />
</template>

<script>
import { getPoint } from "../hooks/usePoint"

export default {
  name: "Demo",
  setup() {
    const point = getPoint()
    return { point }
  }
}
</script>

<style lang="less" scoped></style>
