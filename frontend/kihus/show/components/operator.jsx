import React from 'react'

var Operator = React.createClass({
  handleNextMove: function() {
    this.props.handleNextMove(this.props.nextMove)
  },
  handlePrevMove: function() {
    this.props.handlePrevMove(this.props.appliedMove)
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

export default Operator