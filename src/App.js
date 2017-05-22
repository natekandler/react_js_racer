import React, { Component } from 'react';
import './App.css';
import TrackCell from './TrackCell'

class App extends Component {
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

  incrementPlayer (playerIndex) {
    if(this.state[playerIndex] <= 8) {
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
        break;
      }
  }

  renderTrack (playerIndex) {
    return Array.from(Array(10)).map((x, i) => {
      if (i === this.state[playerIndex]){
        return <TrackCell className="active" key={playerIndex + i}/>
      } else {
        return <TrackCell className="" key={playerIndex + i}/>
      }
    }); 
  }

  render() {
    return (
      <div className="App">
        <table className="racer_table">
          <tbody>
          <tr id="player1_strip">
            { this.renderTrack("player_1_index") }
          </tr>
          <tr id="player2_strip">
            { this.renderTrack("player_2_index") }
          </tr>
          </tbody>
        </table> 
      </div>
    );
  }
}

export default App;
