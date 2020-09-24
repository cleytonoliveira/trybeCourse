import React, { Component } from 'react';

class Message extends Component {
  render() {
    const { value, handleChange } = this.props;

    let error = undefined;
    if (value.length > 120) error = "Texto muito grande!";

    return (
      <label>
      Mensagem
        <textarea 
        name="message"
        value={value}
        onChange={handleChange} />
        <span>{error ? error : ''}</span>
      </label>
    )
  }
}

export default Message;