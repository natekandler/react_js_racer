import React, { Component } from 'react';

export default class TrackStrip extends Component {
  render () {
    return (
      <tr>
        { this.props.renderCells(this.props.playerIndex) }
      </tr>
    )
  } 
}
