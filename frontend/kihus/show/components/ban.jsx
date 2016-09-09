import React from 'react'
import Koma from './koma.jsx'
import { getOnBanKomas } from '../reducers/index.js'

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

export default Ban