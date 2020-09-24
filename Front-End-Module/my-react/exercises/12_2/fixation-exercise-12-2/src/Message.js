import React, { Component } from 'react';

class Message extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label>
      Mensagem
        <textarea 
        name="message"
        value={value}
        onChange={handleChange} />
      </label>
    )
  }
}

export default Message;