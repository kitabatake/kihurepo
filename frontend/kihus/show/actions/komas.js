import * as ActionTypes from 'index.js'

var currentKomaId = 1
const getKomaId = () => currentKomaId++

const getDefaultKomasEachOwner = (owner, getX, getY) => {
  var komas = []
  for (let i = 0; i < 9; i++) {
    komas.push({
      id: getKomaId(), x: getX(i + 1), y: getY(7), name: 'hu', owner: owner, motigoma: false
    })
  }

  komas.push({id: getKomaId(), x: getX(1), y: getY(9), name: 'kyousya', owner: owner, motigoma: false})
  komas.push({id: getKomaId(), x: getX(2), y: getY(9), name: 'keima', owner: owner, motigoma: false})
  komas.push({id: getKomaId(), x: getX(3), y: getY(9), name: 'gin', owner: owner, motigoma: false})
  komas.push({id: getKomaId(), x: getX(4), y: getY(9), name: 'kin', owner: owner, motigoma: false})
  komas.push({id: getKomaId(), x: getX(5), y: getY(9), name: 'ou', owner: owner, motigoma: false})
  komas.push({id: getKomaId(), x: getX(6), y: getY(9), name: 'kin', owner: owner, motigoma: false})
  komas.push({id: getKomaId(), x: getX(7), y: getY(9), name: 'gin', owner: owner, motigoma: false})
  komas.push({id: getKomaId(), x: getX(8), y: getY(9), name: 'keima', owner: owner, motigoma: false})
  komas.push({id: getKomaId(), x: getX(9), y: getY(9), name: 'kyousya', owner: owner, motigoma: false})
  komas.push({id: getKomaId(), x: getX(2), y: getY(8), name: 'hisya', owner: owner, motigoma: false})
  komas.push({id: getKomaId(), x: getX(8), y: getY(8), name: 'kaku', owner: owner, motigoma: false})

  return komas
}

export const getDefaultKomas = () => {
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

export const initiatesKomas = (dispatch) => {
  dispatch({
    type: ActionTypes.INITIATE_KOMAS,
    komas: getDefaultKomas()
  })
}