import * as ActionTypes from './index.js'

// const getMove = (movesIndex, type) => {
//   switch(type) {
//     case ActionTypes.NEXT_MOVE:
//       return moves.getMove(movesIndex - 1)
//       break
//     case ActionTypes.PREV_MOVE:
//       return moves.getMove(movesIndex)
//       break
//   }
// }

export const nextMove = (dispatch, move) => {
  dispatch ({
    type: ActionTypes.NEXT_MOVE,
    move: move
  })
}

export const prevMove = (dispatch, move) => {
  dispatch ({
    type: ActionTypes.PREV_MOVE,
    move: move
  })
}

export const initiatesMoves = (dispatch, moves) => {
  dispatch({
    type: ActionTypes.INITIATE_MOVES,
    moves: moves
  })
}