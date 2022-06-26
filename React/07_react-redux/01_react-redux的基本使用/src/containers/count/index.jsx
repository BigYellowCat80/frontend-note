import CountUI from "../../components/count/"
import { connect } from "react-redux"

import { add, minus, asyncAdd } from "../../redux/actionCount"

function mapStateToProps(state) {
  return { count: state }
}

function mapDispatchToProps(dispatch) {
  return {
    add: (data) => {
      dispatch(add(data))
    },
    minus: (data) => {
      dispatch(minus(data))
    },
    asyncAdd: (data, delay) => {
      dispatch(asyncAdd(data, delay))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
