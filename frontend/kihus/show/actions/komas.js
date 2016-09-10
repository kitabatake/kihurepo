import * as ActionTypes from './index.js'

var currentKomaId = 1
const getKomaId = () => currentKomaId++

const createKoma = (params = {}) => {
  return Object.assign(
    {
      id: getKomaId(),
      motigoma: false,
      gotMovesIndexes: []
    },
    params
  )
}

const getDefaultKomasEachOwner = (owner, getX, getY) => {
  var komas = []
  for (let i = 0; i < 9; i++) {
    komas.push(createKoma({
      x: getX(i + 1), y: getY(7), name: 'hu', owner: owner
    }))
  }

  komas.push(createKoma({x: getX(1), y: getY(9), name: 'kyousya', owner: owner}))
  komas.push(createKoma({x: getX(2), y: getY(9), name: 'keima', owner: owner}))
  komas.push(createKoma({x: getX(3), y: getY(9), name: 'gin', owner: owner}))
  komas.push(createKoma({x: getX(4), y: getY(9), name: 'kin', owner: owner}))
  komas.push(createKoma({x: getX(5), y: getY(9), name: 'ou', owner: owner}))
  komas.push(createKoma({x: getX(6), y: getY(9), name: 'kin', owner: owner}))
  komas.push(createKoma({x: getX(7), y: getY(9), name: 'gin', owner: owner}))
  komas.push(createKoma({x: getX(8), y: getY(9), name: 'keima', owner: owner}))
  komas.push(createKoma({x: getX(9), y: getY(9), name: 'kyousya', owner: owner}))
  komas.push(createKoma({x: getX(2), y: getY(8), name: 'hisya', owner: owner}))
  komas.push(createKoma({x: getX(8), y: getY(8), name: 'kaku', owner: owner}))

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