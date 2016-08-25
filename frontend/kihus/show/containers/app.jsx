import React from 'react';
import Ban from '../components/ban.jsx'
import Operator from '../components/operator.jsx'
import Komadai from '../components/komadai.jsx'
// import Komadai from './komadai.jsx'
// import Koma from '../komas/koma.js'

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
      </div>
    )
  }
})

export default App