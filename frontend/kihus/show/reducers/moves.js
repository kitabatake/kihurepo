import * as ActionTypes from '../actions'

const moves = (state = [], action) => {
  switch(action.type) {
    case ActionTypes.INITIATE_MOVES:
      return action.moves
      break
    default:
      return state
  }
}

export default moves

// Selectors
// http://redux.js.org/docs/recipes/ComputingDerivedData.html

export const getMove = (index, moves) => {
  if (index < 0 || index >= moves.length) {
    return null
  }
  return moves[index]
}