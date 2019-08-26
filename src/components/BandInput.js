import React, { Component } from 'react';

class BandInput extends Component {

  state = {
    bandName: ''
  }

  handleChange(event) {
    this.setState({
      bandName: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addBand(this.state.bandName);
    this.setState({
      bandName: '',
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input
            type="text"
            value={this.state.text}
            onChange={(event) => this.handleChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default BandInput;
