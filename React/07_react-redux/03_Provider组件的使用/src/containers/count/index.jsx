import CountUI from "../../components/count/"
import { connect } from "react-redux"

import { add, minus, asyncAdd } from "../../redux/actionCount"

function mapStateToProps(state) {
  return { count: state }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     add: (data) => {
//       dispatch(add(data))
//     },
//     minus: (data) => {
//       dispatch(minus(data))
//     },
//     asyncAdd: (data, delay) => {
//       dispatch(asyncAdd(data, delay))
//     }
//   }
// }

// mapDispatchToProps优化。这个是react-redux底层代码的支持
const mapDispatchToProps = {
  add,
  minus,
  asyncAdd
}

export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
