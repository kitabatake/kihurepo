import expect from 'expect.js'
import reducer from '../../../../kihus/show/reducers/komas.js'

describe('komas reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).to.eql([])
  })

  it('should initiates komas', () => {
    var komas = reducer([], {
      type: 'initiate_komas'
    })

    var senteKomasNum = 0, goteKomasNum = 0
    komas.forEach((koma) => {
      if (koma.owner === 'sente') senteKomasNum++
      if (komas.owner === 'gote') goteKomasNum++
    })

    expect(senteKomasNum).to.be(20)
    expect(goteKomasNum).to.be(20)
  })
})