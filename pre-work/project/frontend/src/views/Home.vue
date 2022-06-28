<template>
  <div>
    <!-- banner -->
    <div class="banner"></div>

    <van-button type="info" @click="show = true">申请</van-button>

    <!-- overlay -->
    <van-overlay class-name="custom-overlay" :show="show" @click="hideOverlay">
      <SubmitForm ref="submitForm" />
    </van-overlay>
  </div>
</template>

<script>
// components
import SubmitForm from "../components/submitForm"

export default {
  name: "Home",
  data() {
    return {
      show: false
    }
  },
  methods: {
    hideOverlay() {
      this.show = false
      this.$refs.submitForm.reset()
    }
  },
  components: { SubmitForm }
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
