// 瞬间回到顶部
// const backToTop = () => {
//   document.documentElement.scrollTop = document.body.scrollTop = 0
// }

// 平滑回到顶部 缺点：IE不支持、safari电脑或ios都不支持
const backToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
