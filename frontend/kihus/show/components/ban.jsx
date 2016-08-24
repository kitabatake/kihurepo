import React from 'react'
import { connect } from 'react-redux'
import Koma from './koma.jsx'

var Ban = React.createClass({
  getGrids: function() {
    var trs = []
    for (let y = 0; y < 9; y++) {
      var tds = []
      for (let x = 0; x < 9; x++) {
        tds.push(this.getCell(x, y))
      }

      trs[y] = <tr key={y}>{tds}</tr>
    }
    return trs
  },
  getCell: function(x, y) {
    var koma = this.props.komas[y][x]
    var komaJsx = ''
    if (koma) {
      komaJsx = <Koma
        owner={koma.owner}
        name={koma.name}
      ></Koma>
    }
    return <td key={x}>{komaJsx}</td>
  },
  render: function() {
    return(
      <table id='ban'>
        <tbody>
          {this.getGrids()}
        </tbody>
      </table>
    )
  }
})

const convertX = (x) => {
  return Math.abs(9 - x)
}

const convertY = (y) => {
  return y - 1
}

const stateToProps = (state) => {
  var komas = []
  for (let i = 0; i < 9; i++) komas[i] = []

  komas[4][5] = {
    owner: 'sente',
    name: '歩'
  }

  return {
    komas: komas
  }
}

Ban = connect(
  stateToProps
)(Ban)

export default Ban