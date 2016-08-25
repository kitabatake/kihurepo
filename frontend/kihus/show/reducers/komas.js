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

const applyMove = (komas, move) => {
  var target = getKomaByPosition(komas, move.from_x, move.from_y)
  // todo raise koma not found exception

  target.name = move.koma // corresponds naru process it to change koma name
  target.x = move.to_x
  target.y = move.to_y
  // TODO toru, utsu
}

const komas = (state = [], action, move) => {
  switch(action.type) {
    case 'initiate_komas':
      return getDefaultKomas()
      break
    case 'next_move':
      applyMove(state, move)
      return state
      break
    default:
      return state
  }
}

export default komas