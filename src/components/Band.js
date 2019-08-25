import React, { Component } from 'react';
import {connect} from 'react-redux'
class Band extends Component {
  handleOnClick = () => {
    this.props.deleteBand(this.props.band.id)
  }
  render() {
    debugger
    return(
      <li>
        {this.props.band.name}
        <button
        onClick={this.handleOnClick}
        >
          delete
        </button>
      </li>
    );
  }
};

export default Band;
