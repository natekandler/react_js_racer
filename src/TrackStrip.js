import React, { Component } from 'react';

export default class TrackStrip extends Component {
  render () {
    return (
      <tr>
        { this.props.renderTrack(this.props.playerIndex) }
      </tr>
    )
  } 
}
