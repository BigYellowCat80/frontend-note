<template>
  <div class="wrapper">
    <div class="block" @click.stop>
      <van-cell-group>
        <van-field v-model="username" placeholder="请输入用户名" />
        <van-field v-model="referCode" placeholder="请输入抽奖号码" />

        <div class="btns">
          <van-button type="info" @click="submit">提交</van-button>
          <van-button type="info" @click="getList">获取列表</van-button>
          <van-button type="info" @click="deleteAll">删除所有数据</van-button>
        </div>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
// api
import { apiGetList, apiSubmitForm, apiDeleteAll } from "../../api/submit"

export default {
  name: "SubmitForm",
  data() {
    return {
      username: "",
      referCode: ""
    }
  },
  methods: {
    reset() {
      this.username = ""
      this.referCode = ""
    },
    // 这个函数专门做检验
    verified() {
      return true
    },
    submit() {
      if (!this.verified()) return // 这里去做一些提示逻辑
      const data = {
        username: this.username,
        referCode: this.referCode
      }
      console.log(data)
      apiSubmitForm(data)
        .then((res) => {
          console.log("res", res)
        })
        .catch((error) => {
          console.log("error", error)
        })
    },
    getList() {
      console.log("getList")
      apiGetList()
        .then((res) => {
          console.log("res", res)
        })
        .catch((error) => {
          console.log("error", error)
        })
    },
    deleteAll() {
      apiDeleteAll()
        .then((res) => {
          console.log("res", res)
        })
        .catch((error) => {
          console.log("error", error)
        })
    }
  }
}
</script>

<style lang="less">
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 300px;
  padding: 10px;
  background-color: #fff;
}

.btns {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
</style>
