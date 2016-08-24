import React from 'react';
import Ban from '../components/ban.jsx'
// import Komadai from './komadai.jsx'
// import Koma from '../komas/koma.js'

const App = React.createClass({
  render: function() {
    return (
      <div>
        <Ban 
          komaGrids={this.props.banKomas} 
          selectedKoma={this.props.selectedKoma}
          selectedKomaMovablePositions={this.props.selectedKomaMovablePositions} />
      </div>
    )
  }
})

export default App