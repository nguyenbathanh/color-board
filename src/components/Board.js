import React from 'react'
import Square from '../containers/Square.js'

export default class Board extends React.Component {
  componentWillMount() {
    this.props.initializeBoard()
  }

  renderSquare(i) {
    return <Square key={i} index={i} color={this.props.squares[i].color} />
  }

  renderBoard() {
    const board = []
    for (let i = 0; i < 8; i++) {
      const squareRows = []
      for (let j = 0; j < 8; j++) {
        squareRows.push(this.renderSquare(i * 8 + j))
      }
      board.push(
        <div className="board-row" key={i}>
          {squareRows}
        </div>
      )
    }
    return board
  }

  render() {
    if (!this.props.squares.length) {
      return null
    }

    return (
      <div className="board">
        <div>{this.renderBoard()}</div>
      </div>
    )
  }
}
