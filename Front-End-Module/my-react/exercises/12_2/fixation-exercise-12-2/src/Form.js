import React, { Component } from 'react';
import Select from './Select';
import Message from './Message';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      escolhaTeste: '',
      firstname: '',
      age: 0,
      email: '',
      testando: false,
      message: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <form>
        <fieldset>
          <legend>Primeira parte</legend>
            <Select escolhaTeste={this.state.escolhaTeste} handleChange={this.handleChange} />
          <label>
            Nome
            <input type="text" name="firstname" onChange={this.handleChange} />
          </label>
        </fieldset>
        <fieldset>
          <legend>Segunda parte</legend>
          <label>
            Idade
            <input type="number" name="age" onChange={this.handleChange} />
          </label>
          <label>
            Email
            <input type="email" name="email" onChange={this.handleChange} />
          </label>
        </fieldset>
        <fieldset>
          <legend>Terceira parte</legend>
          <label>
            Teste agora
            <input type="checkbox" name="testando" onChange={this.handleChange} />
          </label>
          <Message value={this.state.message} handleChange={this.handleChange} />
          <label>
            Envie um arquivo
            <input type="file" />
          </label>
        </fieldset>
      </form>
    )
  }
}

export default Form;
