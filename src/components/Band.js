import React, { Component } from 'react';

class Band extends Component {

  handleClick = () => {
    this.props.delete(this.props.band.id)
  }

  render() {
    return(
      <ul>
        <li>{this.props.band.name}</li>
        <button onClick={this.handleClick}>Delete</button>
      </ul>
    );
  }
};

export default Band;
