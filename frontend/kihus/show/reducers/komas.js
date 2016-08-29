import moves from '../moves'
import koma, * as fromKoma from './koma.js'


export const getKomaByPosition = (komas, x, y) => {
  var target = null
  komas.forEach(k => {
    if (k.x == x && k.y == y) target = k
  })
  return target
}

export const getKomadaiKoma = (komas, name, owner) => {
  var target = null
  komas.forEach(k => {
    if (k.motigoma && k.name === name && k.owner === owner) target = k
  })
  return target
}

const applyNextMove = (komas, action) => {
  var move = action.move
  if (move.utsu) {
    let utsuKoma = getKomadaiKoma(komas, move.name, moves.NumToOwner(move.num))
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
    case 'initiate_komas':
      return action.komas
      break
    case 'next_move':
      return applyNextMove(state, action)
      break
    case 'prev_move':
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
