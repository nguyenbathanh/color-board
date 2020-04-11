import { INITIALIZE_BOARD_REQUEST, UPDATE_COLOR_REQUEST } from '../actions/board'

export default (state = { squares: [] }, action) => {
  switch (action.type) {
    case INITIALIZE_BOARD_REQUEST:
      return {
        ...state,
        squares: action.payload
      }

    case UPDATE_COLOR_REQUEST:
      return {
        ...state,
        squares: state.squares.map((square, i) =>
          i === action.payload.index ? { ...square, color: action.payload.color } : square
        )
      }

    default:
      return state
  }
}
