import request from "./index"

const URL = {
  apiGetList: "/user",
  apiSubmitForm: "/user/submit",
  apiDeleteAll: "/user/delete-all"
}

export const apiGetList = () =>
  request({
    url: URL.apiGetList,
    method: "get"
  })

export const apiSubmitForm = (data) =>
  request({
    url: URL.apiSubmitForm,
    method: "post",
    data
  })

export const apiDeleteAll = () =>
  request({
    url: URL.apiDeleteAll,
    method: "delete"
  })
