import Piece from '../models/piece'
import randomColor from 'randomcolor'

export const INITIALIZE_BOARD_REQUEST = 'INITIALIZE_BOARD_REQUEST'
export const UPDATE_COLOR_REQUEST = 'UPDATE_COLOR_REQUEST'

export const initializeBoardRequest = data => {
  return {
    type: INITIALIZE_BOARD_REQUEST,
    payload: data
  }
}

export const updateColorRequest = (index, color) => {
  return {
    type: UPDATE_COLOR_REQUEST,
    payload: { index, color }
  }
}

export const createSquares = () => {
  return Array(64)
    .fill(null)
    .map(key => new Piece(randomColor()))
}

export const initializeBoard = () => {
  return (dispatch, getState) => {
    const squares = createSquares()
    dispatch(initializeBoardRequest(squares))
  }
}

export const updateColor = (index, color) => {
  return (dispatch, getState) => {
    dispatch(updateColorRequest(index, color))
  }
}
