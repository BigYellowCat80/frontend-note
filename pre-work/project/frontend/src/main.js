import Vue from "vue"
import App from "./App.vue"
import router from "./router"

// vant
import "./plugins/vant"

// h5自适应
import "amfe-flexible/index"
Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app")
