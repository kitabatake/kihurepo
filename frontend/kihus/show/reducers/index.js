import { combineReducers } from 'redux'
import komas, * as fromKomas from './komas.js'
import * as ActionTypes from '../actions'

const movesIndex = (state = 0, action) => {
  switch(action.type) {
    case ActionTypes.PREV_MOVE:
    case ActionTypes.NEXT_MOVE:
      return action.movesIndex
    default:
      return state
  }
}

const reducer = combineReducers({
  movesIndex,
  komas
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