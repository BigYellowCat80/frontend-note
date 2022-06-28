import axios from "axios"

const instance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 30000
})

// 拦截
instance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    console.log("error", error)
  }
)

instance.interceptors.response.use(
  (response) => {
    return response.data || {}
  },
  (error) => {
    console.log("error", error)
  }
)

export default instance
