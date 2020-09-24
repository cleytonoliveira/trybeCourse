import React, { Component } from 'react';

class Select extends Component {
  render() {
    const { escolhaTeste, handleChange } = this.props;

    let error = undefined;
    if (escolhaTeste === 'teste2') error = "Opção errada!"
    return (
      <div>
        <select name="escolhaTeste" value={escolhaTeste} onChange={handleChange}>
          <option value="teste1">teste 1</option>
          <option value="teste2">teste 2</option>
        </select>
        <span>{error ? error : ''}</span>
      </div>
    )
  }
}

export default Select;
