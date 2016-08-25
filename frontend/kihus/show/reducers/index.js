import { combineReducers } from 'redux'
import komas, * as fromKomas from './komas.js'

const getMoveForKomas = (index, action) => {
  switch(action.type) {
    case 'next_move':
      return index == 0? null : gon.moves[index - 1]
      break
    case 'prev_move':
      return gon.moves[index]
      break
  }
}


const movesIndex = (state, action) => {
  switch(action.type) {
    case 'prev_move':
      return state == 0? state : state - 1
      break
    case 'next_move':
    // TODO handle over moves size
      return state + 1
      break
    default:
      return state
  }
}

const reducer = (state = {
  movesIndex: 0,
  komas: []
}, action) => {
  var nextState = {}
  nextState.movesIndex = movesIndex(state.movesIndex, action)
  nextState.komas = komas(state.komas, action, getMoveForKomas(nextState.movesIndex, action))
  return nextState
};

export default reducer


export const getOnBanKomas = (state) => {
  return fromKomas.getOnBanKomas(state.komas)
}