import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.state = {
      numeroDeClicks1: 0,
      numeroDeClicks2: 0,
      numeroDeClicks3: 0,
    }
  }
  handleClick1() {
    const button = document.querySelector('.button1');
    this.setState((estadoAnterior) => ({
      numeroDeClicks1: estadoAnterior.numeroDeClicks1 + 1
    }),
    () => {
      if (this.state.numeroDeClicks1 % 2 === 0) {
        button.style.background = "green"
        console.log('green');
      } else {
        button.style.background = "none"
      }
    })
  }

  handleClick2() {
    const button = document.querySelector('.button2');
    this.setState((estadoAnterior) => ({
      numeroDeClicks2: estadoAnterior.numeroDeClicks2 + 1
    }),
    () => {
      if (this.state.numeroDeClicks2 % 2 === 0) {
        button.style.background = "green"
      } else {
        button.style.background = "none"
      }
    })
  }

  handleClick3() {
    const button = document.querySelector('.button3');
    this.setState((estadoAnterior) => ({
      numeroDeClicks3: estadoAnterior.numeroDeClicks3 + 1
    }),
    () => {
      if (this.state.numeroDeClicks3 % 2 === 0) {
        button.style.background = "green"
      } else {
        button.style.background = "none"
      }
    })
  }

  render() {
    return (
      <div className="App">
        <button type="button" className="button1" onClick={this.handleClick1}>{this.state.numeroDeClicks1}</button>
        <button type="button" className="button2" onClick={this.handleClick2}>{this.state.numeroDeClicks2}</button>
        <button type="button" className="button3" onClick={this.handleClick3}>{this.state.numeroDeClicks3}</button>
      </div>
    );
  }
}

export default App;
