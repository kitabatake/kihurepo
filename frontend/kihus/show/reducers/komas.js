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

const komas = (state = [], action) => {
  switch(action.type) {
    case 'initiate_komas':
      return getDefaultKomas()
    default:
      return state
  }
}

export default komas