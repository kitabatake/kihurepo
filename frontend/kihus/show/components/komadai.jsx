import React from 'react';
import { connect } from 'react-redux'
import { getMotigomas } from '../reducers/index.js'
import Koma from './koma.jsx'

var Komadai = React.createClass({
  renderKomas: function() {
    var komas = []
    this.props.komas.forEach(koma => {
      komas.push(
        <Koma
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

const mapStateToProps = (state, ownProps) => {
  return {
    komas: getMotigomas(state, ownProps.owner)
  }
}

Komadai = connect(
  mapStateToProps
)(Komadai)

export default Komadai