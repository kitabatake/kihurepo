const getDefaultKomasEachOwner = (owner, getX, getY) => {
  var komas = []
  for (let i = 0; i < 9; i++) {
    komas.push({
      x: getX(i + 1), y: getY(7), name: 'hu', owner: owner, motigoma: false
    })
  }

  komas.push({x: getX(1), y: getY(9), name: 'kyousya', owner: owner, motigoma: false})
  komas.push({x: getX(2), y: getY(9), name: 'keima', owner: owner, motigoma: false})
  komas.push({x: getX(3), y: getY(9), name: 'gin', owner: owner, motigoma: false})
  komas.push({x: getX(4), y: getY(9), name: 'kin', owner: owner, motigoma: false})
  komas.push({x: getX(5), y: getY(9), name: 'ou', owner: owner, motigoma: false})
  komas.push({x: getX(6), y: getY(9), name: 'kin', owner: owner, motigoma: false})
  komas.push({x: getX(7), y: getY(9), name: 'gin', owner: owner, motigoma: false})
  komas.push({x: getX(8), y: getY(9), name: 'keima', owner: owner, motigoma: false})
  komas.push({x: getX(9), y: getY(9), name: 'kyousya', owner: owner, motigoma: false})
  komas.push({x: getX(2), y: getY(8), name: 'hisya', owner: owner, motigoma: false})
  komas.push({x: getX(8), y: getY(8), name: 'kaku', owner: owner, motigoma: false})

  return komas
}

const getDefaultKomas = () => {
  var senteKomas = getDefaultKomasEachOwner(
    'sente',
    (x) => x,
    (y) => y
  )
  var goteKomas = getDefaultKomasEachOwner(
    'gote',
    (x) => Math.abs(10 - x),
    (y) => Math.abs(10 - y)
  )
  return [...senteKomas, ...goteKomas]
}

export const getKomaByPosition = (komas, x, y) => {
  var target = null
  komas.forEach(koma => {
    if (koma.x == x && koma.y == y) target = koma
  })
  return target
}

const applyNextMove = (komas, move) => {
  var target = getKomaByPosition(komas, move.from_x, move.from_y)
  // todo raise koma not found exception

  var toruKoma = getKomaByPosition(komas, move.to_x, move.to_y)
  if (toruKoma) {
    toruKoma.motigoma = true
    toruKoma.owner = target.owner
  }

  target.name = move.koma // corresponds naru process it to change koma name
  target.x = move.to_x
  target.y = move.to_y
  // TODO utsu
}

const applyPrevMove = (komas, move) => {
  var target = getKomaByPosition(komas, move.to_x, move.to_y)
  // todo raise koma not found exception

  target.name = move.koma // corresponds naru process it to change koma name
  target.x = move.from_x
  target.y = move.from_y
  // TODO utsu
}

const komas = (state = [], action, move) => {
  switch(action.type) {
    case 'initiate_komas':
      return getDefaultKomas()
      break
    case 'next_move':
      applyNextMove(state, move)
      return state
      break
    case 'prev_move':
      applyPrevMove(state, move)
      return state
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
