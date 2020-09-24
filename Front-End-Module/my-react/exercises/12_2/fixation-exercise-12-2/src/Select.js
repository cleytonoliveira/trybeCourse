import React, { Component } from 'react';

class Select extends Component {
  render() {
    const { escolhaTeste, handleChange } = this.props;
    return (
      <select name="escolhaTeste" value={escolhaTeste} onChange={handleChange}>
        <option value="teste1">teste 1</option>
        <option value="teste2">teste 2</option>
      </select>
    )
  }
}

export default Select;
