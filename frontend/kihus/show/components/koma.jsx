import React from 'react';

var Koma = React.createClass({
  render: function() {

     var className = this.props.owner + '_koma'
    return(
      <div 
        className={className}>
        {this.props.name}
      </div>
    )
  }
})


export default Koma