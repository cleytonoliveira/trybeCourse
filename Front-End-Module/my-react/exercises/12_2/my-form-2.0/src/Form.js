import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div>
        <fieldset>
          <legend>Dados Pessoais</legend>
          <label>
            <input type="text" name="nome" />
          </label>
          <label>
            <input type="email" name="email" />
          </label>
          <label>
            <input type="text" name="cpf" />
          </label>
          <label>
            <input type="text" name="endereço" />
          </label>
          <label>
            <input type="text" name="cidade" />
          </label>
          <label>
            <input type="radio" name="residencia" value="casa" />
            <input type="radio" name="residencia" value="apartamento" />
          </label>
        </fieldset>
        <fieldset>
          <legend>Último Emprego</legend>
          <label>
            <textarea />
          </label>
          <label>
            <textarea />
          </label>
          <label>
            <textarea />
          </label>
        </fieldset>
        <fieldset>
  
        </fieldset>
      </div>
    )
  }
}

export default Form;
