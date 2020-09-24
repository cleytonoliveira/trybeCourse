import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      escolhaTeste: '',
      firstname: '',
      age: 0,
      email: '',
      message: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <form>
        <select name="escolhaTeste" value={this.state.escolhaTeste} onChange={this.handleChange}>
          <option value="teste1">teste 1</option>
          <option value="teste2">teste 2</option>
        </select>
        <label>
          Nome
          <input type="text" name="firstname" onChange={this.handleChange} />
        </label>
        <label>
          Idade
          <input type="number" name="age" onChange={this.handleChange} />
        </label>
        <label>
          Email
          <input type="email" name="email" onChange={this.handleChange} />
        </label>
        <label>
          Mensagem
          <textarea name="message" onChange={this.handleChange} />
        </label>
      </form>
    )
  }
}

export default Form;
