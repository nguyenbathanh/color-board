import Square from '../components/Square'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateColor } from '../actions/board'

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      updateColor
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Square)
