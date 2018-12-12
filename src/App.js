import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ],
      currentTurn: false,
      winState: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    const coords = id.split('');
    let newBoard = this.state.board;
    newBoard[coords[0]][coords[1]] = this.state.currentTurn ? 'O' : 'X';
    const newTurn = this.state.currentTurn ? false : true;
    this.setState({board: newBoard, currentTurn: newTurn})
  }

  render() {
    return (
      <div className="App">
        <div id="row_1" className="row">
          <span id="00" className="box" onClick={(event) => this.handleClick(event.target.id)}>{this.state.board[0][0]}</span>
          <span id="01" className="box" onClick={(event) => this.handleClick(event.target.id)}>{this.state.board[0][1]}</span>
          <span id="02" className="box" onClick={(event) => this.handleClick(event.target.id)}>{this.state.board[0][2]}</span>
        </div>
        <div id="row_2" className="row">
          <span id="10" className="box" onClick={(event) => this.handleClick(event.target.id)}>{this.state.board[1][0]}</span>
          <span id="11" className="box" onClick={(event) => this.handleClick(event.target.id)}>{this.state.board[1][1]}</span>
          <span id="12" className="box" onClick={(event) => this.handleClick(event.target.id)}>{this.state.board[1][2]}</span>
        </div>
        <div id="row_3" className="row">
          <span id="20" className="box" onClick={(event) => this.handleClick(event.target.id)}>{this.state.board[2][0]}</span>
          <span id="21" className="box" onClick={(event) => this.handleClick(event.target.id)}>{this.state.board[2][1]}</span>
          <span id="22" className="box" onClick={(event) => this.handleClick(event.target.id)}>{this.state.board[2][2]}</span>
        </div>
        <div id="currentTurn">
          {this.state.currentTurn ? 'O' : 'X'}
        </div>
      </div>
    );
  }
}

export default App;
