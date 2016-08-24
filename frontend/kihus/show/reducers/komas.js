const getDefaultKomasEachOwner = (owner, getY) => {
  var komas = []
  for (let i = 0; i < 9; i++) {
    komas.push({
      x: (i + 1), y: getY(7), name: '歩', owner: owner, motigoma: false
    })
  }
  return komas
}

const getDefaultKomas = () => {
  var senteKomas = getDefaultKomasEachOwner(
    'sente',
    (y) => y
  )
  var goteKomas = getDefaultKomasEachOwner(
    'gote',
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
  console.log(target)
  // todo raise koma not found exception

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