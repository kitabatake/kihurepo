import koma, * as fromKoma from './koma.js'
import * as ActionTypes from '../actions'

export const getKomaByPosition = (komas, x, y) => {
  var target = null
  komas.forEach(k => {
    if (k.x == x && k.y == y) target = k
  })
  return target
}

export const getKomadaiKoma = (komas, koma, owner) => {
  var target = null
  komas.forEach(k => {
    if (k.motigoma && k.name === koma && k.owner === owner) target = k
  })
  return target
}

const numToOwner = (num) => {
  return (num % 2 == 1)? 'sente' : 'gote'
}

const applyNextMove = (komas, action) => {
  var move = action.move
  if (move.utsu) {
    let utsuKoma = getKomadaiKoma(komas, move.koma, numToOwner(move.num))
    action.move.utsuKomaId = utsuKoma.id
  }
  
  return komas.map(k => {
    return koma(k, action)
  })
}

const applyPrevMove = (komas, action) => {
  var move = action.move
  return komas.map(k => {
    return koma(k, action)
  })
}

const komas = (state = [], action) => {
  switch(action.type) {
    case ActionTypes.INITIATE_KOMAS:
      return action.komas
      break
    case ActionTypes.NEXT_MOVE:
      return applyNextMove(state, action)
      break
    case ActionTypes.PREV_MOVE:
      return applyPrevMove(state, action)
      break
    default:
      return state
  }
}

export default komas


// Selectors
// http://redux.js.org/docs/recipes/ComputingDerivedData.html

const convertX = (x) => Math.abs(9 - x)
const convertY = (y) =>  y - 1

export const getOnBanKomas = (state) => {
  var komas = []
  for (let i = 0; i < 9; i++) komas[i] = []
  state.forEach(koma => {
    if (koma.motigoma) return
    komas[convertY(koma.y)][convertX(koma.x)] = koma
  })
  return komas
}

export const getMotigomas = (state, owner) => {
  var komas = []
  state.forEach(koma => {
    if (koma.motigoma && koma.owner === owner) komas.push(koma)
  })
  return komas
}
