import {
  createSquares,
  INITIALIZE_BOARD_REQUEST,
  initializeBoardRequest,
  UPDATE_COLOR_REQUEST,
  updateColorRequest
} from './board'
import faker from 'faker'

describe('board actions', () => {
  it('updateColorRequest should create UPDATE_COLOR_REQUEST action', () => {
    const index = faker.random.number()
    const color = faker.internet.color()

    expect(updateColorRequest(index, color)).toEqual({
      type: UPDATE_COLOR_REQUEST,
      payload: {
        index,
        color
      }
    })
  })

  it('initializeBoardRequest should create INITIALIZE_BOARD_REQUEST action', () => {
    const squares = createSquares()

    expect(initializeBoardRequest(squares)).toEqual({
      type: INITIALIZE_BOARD_REQUEST,
      payload: squares
    })
  })
})
