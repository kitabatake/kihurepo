import React from 'react';
import { connect } from 'react-redux'

import { getOnBanKomas, getMotigomas, getNextMove, getAppliedMove } from '../reducers/index.js'
import { nextMove, prevMove } from '../actions/moves.js'
import Ban from '../components/ban.jsx'
import Operator from '../components/operator.jsx'
import Komadai from '../components/komadai.jsx'
import CommentBox from '../components/CommentBox.jsx'

var App = React.createClass({
  updateComment: function(comment) {
    this.props.updateMove(
      Object.assign(
        this.props.appliedMove,
        {
          comment: comment
        }
      )
    )
  },
  render: function() {
    var commentBox = this.props.appliedMove?
      <CommentBox 
          handleCommentUpdate={this.updateComment}
          initialComment={this.props.appliedMove? this.props.appliedMove.comment : ''} />
      : null
    return (
      <div>
        <Ban 
          komas={this.props.onBanKomas} />
        <Komadai
          owner='sente'
          komas={this.props.senteMotigomas} />
        <Komadai
          owner='gote'
          komas= {this.props.goteMotigomas} />
        <Operator 
          movesIndex={this.props.movesIndex}
          nextMove={this.props.nextMove}
          appliedMove={this.props.appliedMove}
          handleNextMove={this.props.handleNextMove}
          handlePrevMove={this.props.handlePrevMove} />
        {commentBox}
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    movesIndex: state.movesIndex,
    onBanKomas: getOnBanKomas(state),
    senteMotigomas: getMotigomas(state, 'sente'),
    goteMotigomas: getMotigomas(state, 'gote'),
    nextMove: getNextMove(state),
    appliedMove: getAppliedMove(state)
  }
}

const dispatchProps = (dispatch) => {
  return {
    handleNextMove: (move) => {
      nextMove(dispatch, move)
    },
    handlePrevMove: (move) => {
      prevMove(dispatch, move)
    },
    updateMove: (move) => {
      console.log(move)
    }
  }
}

App = connect(
  mapStateToProps,
  dispatchProps
)(App)

export default App