import Board from '../components/Board'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { initializeBoard } from '../actions/board'

const mapStateToProps = state => {
  return {
    squares: state.board.squares
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      initializeBoard
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
