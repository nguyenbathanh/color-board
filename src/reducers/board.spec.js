import board from './board'
import { INITIALIZE_BOARD_REQUEST, createSquares, UPDATE_COLOR_REQUEST } from '../actions/board'
import faker from 'faker'

describe('board reducer', () => {
  it('should handle initial state', () => {
    expect(board(undefined, {})).toEqual({ squares: [] })
  })

  it('should handle INITIALIZE_BOARD_REQUEST', () => {
    const squares = createSquares()

    expect(
      board(
        { squares: [] },
        {
          type: INITIALIZE_BOARD_REQUEST,
          payload: squares
        }
      )
    ).toEqual({
      squares: squares
    })
  })

  it('should handle UPDATE_COLOR_REQUEST', () => {
    const squares = createSquares(),
      index = 30,
      color = faker.internet.color()

    const observed = [...squares]
    observed[index].color = color

    expect(
      board(
        { squares },
        {
          type: UPDATE_COLOR_REQUEST,
          payload: {
            index,
            color
          }
        }
      )
    ).toEqual({
      squares: observed
    })
  })
})
