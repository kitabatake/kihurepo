import moves from '../moves.js'

const getMove = (movesIndex, type) => {
  switch(type) {
    case 'next_move':
      return moves.getMove(movesIndex - 1)
      break
    case 'prev_move':
      return moves.getMove(movesIndex)
      break
  }
}

export const nextMove = (dispatch, movesIndex) => {
  movesIndex++
  dispatch ({
    type: 'next_move',
    move: getMove(movesIndex, 'next_move'),
    movesIndex: movesIndex
  })
}

export const prevMove = (dispatch, movesIndex) => {
  movesIndex--
  dispatch ({
    type: 'prev_move',
    move: getMove(movesIndex, 'prev_move'),
    movesIndex: movesIndex
  })
}