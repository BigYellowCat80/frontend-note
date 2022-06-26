import { reactive, onMounted, onBeforeUnmount } from "vue"

export const getPoint = () => {
  const point = reactive({
    x: 0,
    y: 0
  })

  const getPoint = (event) => {
    const { pageX, pageY } = event
    console.log("pageX, pageY", pageX, pageY)
    point.x = pageX
    point.y = pageY
  }

  onMounted(() => {
    document.addEventListener("click", getPoint)
  })

  onBeforeUnmount(() => {
    document.removeEventListener("click", getPoint)
  })

  return point
}
