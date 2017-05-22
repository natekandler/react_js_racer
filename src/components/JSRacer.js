import React, { Component } from 'react';
import TrackCell from './TrackCell'
import TrackStrip from './TrackStrip'

class JSRacer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      player_1_index: 0,
      player_2_index: 0
    }
  }

  componentWillMount() {
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  handleKeyDown (event) {
    const J_KEY = 74;
    const F_KEY = 70; 
    switch( event.keyCode ) {
      case F_KEY:
        this.incrementPlayer("player_1_index")
        break
      case J_KEY:
        this.incrementPlayer("player_2_index")
        break;
      default:
        break
    }
  }

  incrementPlayer (playerIndex) {
    if(this.state[playerIndex] < 9) {
      let newState = {}
      newState[playerIndex] = ++this.state[playerIndex];
      this.setState(newState)
    } else {
      alert(this.formatPlayerName(playerIndex) + " wins!")
    }
  }

  formatPlayerName (playerIndex) {
    return playerIndex.replace(/_index/, "").replace(/_/, " ") 
  }

  renderStrip (playerIndex) {
    return <TrackStrip renderCells={this.renderCells.bind(this)} playerIndex={playerIndex} /> 
  }

  renderCells (playerIndex) {
    return [...Array(10)].map((x, i) => {
      if (i === this.state[playerIndex]){
        return <TrackCell className="active" key={playerIndex + i}/>
      } else {
        return <TrackCell className="" key={playerIndex + i}/>
      }
    }); 
  }

  render() {
    return (
      <table className="racer_table">
        <tbody>
          { this.renderStrip("player_1_index") }
          { this.renderStrip("player_2_index") }
        </tbody>
      </table> 
    );
  }
}

export default JSRacer;
