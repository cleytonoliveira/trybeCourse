import React from 'react';
import './App.css';

class App extends React.Component {
  handleClick({ target }) {
    console.log(target);
  }

  render() {
    return (
      <div className="App">
        <button type="button" onClick={this.handleClick}>Botão 1</button>
        <button type="button" onClick={this.handleClick}>Botão 2</button>
        <button type="button" onClick={this.handleClick}>Botão 3</button>
      </div>
    );
  }
}

export default App;
