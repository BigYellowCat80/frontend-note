<template>
  <div>
    <!-- banner -->
    <div class="banner"></div>

    <!-- <button @click="show = true">home</button> -->

    <!-- overlay -->
    <van-overlay
      class-name="custom-overlay"
      :show="show"
      @click="show = false"
    />
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      show: false
    }
  }
}
</script>

<style lang="less">
.custom-overlay {
  background-color: rgba(0, 0, 0, 0.4);
}
</style>

<style lang="less" scoped>
.banner {
  height: 220px;
  background-color: red;
}
</style>
