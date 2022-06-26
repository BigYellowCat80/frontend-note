// 页面滚动到底部距离n像素时触发加载更多事件
// 需要优化的地方：没做防抖处理

function initScroll(n = 1000, callback) {
  let oldScrollTop = getScrollTop()

  window.onscroll = function () {
    let scrollTop = getScrollTop()
    let direction = ""

    if (oldScrollTop < scrollTop) {
      direction = "down"
    } else if (oldScrollTop > scrollTop) {
      direction = "up"
    }
    oldScrollTop = scrollTop
    // console.log("direction", direction)

    let bottomHeight = getBottomHeightByScrollTop(scrollTop)
    console.log("bottomHeight", bottomHeight)

    if (bottomHeight <= n && direction === "down") {
      typeof callback === "function" && callback()
    }
  }
}

const getScrollTop = () => {
  return document.documentElement.scrollTop || document.body.scrollTop
}

const getBottomHeightByScrollTop = (scrollTop = 0) => {
  return (
    document.body.scrollHeight -
    scrollTop -
    document.documentElement.clientHeight
  )
}

// 使用
initScroll(500, () => {
  console.log("loadMore")
})
