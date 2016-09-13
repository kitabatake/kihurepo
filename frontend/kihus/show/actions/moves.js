import * as ActionTypes from './index.js'

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

