import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band'
import { connect } from 'react-redux'

class BandsContainer extends Component {

  grabBands = () => {
    return this.props.bands.map(band => 
       <div><Band delete={this.props.deleteBand} {...band}/></div>
    )
  }

  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ul>
          {this.grabBands()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  deleteBand: bandId => dispatch({type: "DELETE_BAND", id: bandId})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
