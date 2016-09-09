import { combineReducers } from 'redux'
import komas, * as fromKomas from './komas.js'
import moves, * as fromMoves from './moves.js'
import * as ActionTypes from '../actions'

const movesIndex = (state = 0, action) => {
  switch(action.type) {
    case ActionTypes.PREV_MOVE:
      return state - 1
      break
    case ActionTypes.NEXT_MOVE:
      return state + 1
      break
    default:
      return state
  }
}

const reducer = combineReducers({
  movesIndex,
  komas,
  moves
})

export default reducer


// Selectors
// http://redux.js.org/docs/recipes/ComputingDerivedData.html

export const getOnBanKomas = (state) => {
  return fromKomas.getOnBanKomas(state.komas)
}

export const getMotigomas = (state, owner) => {
  return fromKomas.getMotigomas(state.komas, owner)
}

export const getNextMove = (state) => {
  return fromMoves.getMove(state.movesIndex, state.moves)
}

export const getAppliedMove = (state) => {
  return fromMoves.getMove(state.movesIndex - 1, state.moves)
}