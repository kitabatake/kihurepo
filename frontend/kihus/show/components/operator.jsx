import React from 'react'
import { connect } from 'react-redux'

import { nextMove, prevMove } from '../actions/moves.js'

var Operator = React.createClass({
  handleNextMove: function() {
    this.props.nextMove(this.props.movesIndex)
  },
  handlePrevMove: function() {
    this.props.prevMove(this.props.movesIndex)
  },
  render: function() {
    return <div id='moves-operator' >
      <button type="button" className="btn btn-default" aria-label="Left Align" onClick={this.handlePrevMove}>
        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      </button>
      <button type="button" className="btn btn-default" aria-label="Left Align" onClick={this.handleNextMove}>
        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      </button>
    </div>
  }
})

const mapStateToProps = (state) => {movesIndex: state.movesIndex}

const dispatchProps = (dispatch) => {
  return {
    nextMove: (movesIndex) => {
      nextMove(dispatch, movesIndex)
    },
    prevMove: () => {
      prevMove(dispatch, movesIndex)
    }
  }
}

Operator = connect(
  null,
  dispatchProps
)(Operator)

export default Operator