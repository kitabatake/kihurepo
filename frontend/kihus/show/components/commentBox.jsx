import React from 'react';
import { connect } from 'react-redux'

var CommentBox = React.createClass({
  getInitialState: function(){
    return {
      comment: this.props.initialComment
    }
  },
  handleChange: function(e) {
    this.setState({comment: e.target.value})
  },
  handleUpdateClick: function(e) {
    this.props.handleCommentUpdate(this.state.comment)
  },
  render: function() {
    return <div className='comment-box'>
      <textarea 
        onChange={this.handleChange}
        defaultValue={this.state.comment} />
      <button onClick={this.handleUpdateClick}>
        Update
      </button>
    </div>
  }
})

export default CommentBox