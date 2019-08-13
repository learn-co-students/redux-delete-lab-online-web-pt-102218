import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <li>
        <h4>{this.props.name}</h4>
        <button onClick={() => this.props.delete(this.props.id)}>Delete</button>
      </li>
    );
  }
};

export default Band;