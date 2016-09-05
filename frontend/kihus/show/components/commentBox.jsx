import React from 'react';
import { connect } from 'react-redux'
import moves from '../moves.js'

var CommentBox = React.createClass({
  render: function() {
    return <div className='comment-box'>
      <textarea>{this.props.comment}</textarea>
    </div>
  }
})

const mapStateToProps = (state, ownProps) => {
  const move = moves.getMove(state.movesIndex)
  return {
    comment: move.comment
  }
}

CommentBox = connect(
  mapStateToProps
)(CommentBox)

export default CommentBox