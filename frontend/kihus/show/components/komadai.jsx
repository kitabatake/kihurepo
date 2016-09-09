import React from 'react';
import Koma from './koma.jsx'

var Komadai = React.createClass({
  renderKomas: function() {
    var komas = []
    this.props.komas.forEach(koma => {
      komas.push(
        <Koma
          key={koma.id}
          owner={koma.owner}
          name={koma.name} />
      )
    })
    return komas
  },
  render: function() {
    return <div className='komadai komadai-{this.props.owner}'>
      {this.props.owner}: {this.renderKomas()}
    </div>
  }
})

export default Komadai