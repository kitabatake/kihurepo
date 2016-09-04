import moves from '../moves.js'
import * as ActionTypes from './index.js'

const getMove = (movesIndex, type) => {
  switch(type) {
    case ActionTypes.NEXT_MOVE:
      return moves.getMove(movesIndex - 1)
      break
    case ActionTypes.PREV_MOVE:
      return moves.getMove(movesIndex)
      break
  }
}

export const nextMove = (dispatch, movesIndex) => {
  movesIndex++
  dispatch ({
    type: ActionTypes.NEXT_MOVE,
    move: getMove(movesIndex, ActionTypes.NEXT_MOVE),
    movesIndex: movesIndex
  })
}

export const prevMove = (dispatch, movesIndex) => {
  movesIndex--
  dispatch ({
    type: ActionTypes.PREV_MOVE,
    move: getMove(movesIndex, ActionTypes.PREV_MOVE),
    movesIndex: movesIndex
  })
}