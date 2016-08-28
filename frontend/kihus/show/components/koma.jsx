import React from 'react';

const komaNames = {
  hu: '歩',
  kyousya: '香',
  keima: '桂',
  gin: '銀',
  kin: '金',
  ou: '王',
  gyoku: '王',
  hisya: '飛',
  kaku: '角',

  to: 'と',
  narikei: '成銀',
  narikyou: '成香',
  narigin: '成桂'
}

var Koma = React.createClass({
  render: function() {

     var className = this.props.owner + '_koma'
    return(
      <div 
        className={className}>
        {komaNames[this.props.name]}
      </div>
    )
  }
})


export default Koma