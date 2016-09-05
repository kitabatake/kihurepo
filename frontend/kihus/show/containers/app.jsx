import React from 'react';
import Ban from '../components/ban.jsx'
import Operator from '../components/operator.jsx'
import Komadai from '../components/komadai.jsx'
import CommentBox from '../components/CommentBox.jsx'

const App = React.createClass({
  render: function() {
    return (
      <div>
        <Ban />
        <Komadai
          owner='sente' />
        <Komadai
          owner='gote' />
        <Operator />
        <CommentBox />
      </div>
    )
  }
})

export default App