// 获取网页已滚动的高度

const getScrollTop = () => {
  return document.documentElement.scrollTop || document.body.scrollTop // 兼容写法
}
