import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band'

import { connect } from 'react-redux'


class BandsContainer extends Component {

  constructor() {
    super();
    this.renderBands = this.renderBands.bind(this)
  }

  renderBands() {
    return this.props.bands.map((band, idx) => {
      return (
        <Band band={band} key={idx} deleteBand={this.props.deleteBand} />
      )
    })
  }

  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        <ul>{this.renderBands()}</ul>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  deleteBand: id => dispatch({ type: "DELETE_BAND", id})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
